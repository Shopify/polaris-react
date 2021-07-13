import React, {PureComponent, Children, createRef} from 'react';
import {durationBase} from '@shopify/polaris-tokens';

import {findFirstFocusableNode} from '../../../../utilities/focus';
import {ThemeProvider, ThemeProviderProps} from '../../../ThemeProvider';
import {classNames} from '../../../../utilities/css';
import {
  isElementOfType,
  wrapWithComponent,
} from '../../../../utilities/components';
import {Key} from '../../../../types';
import {overlay} from '../../../shared';
import {EventListener} from '../../../EventListener';
import {KeypressListener} from '../../../KeypressListener';
import {
  PositionedOverlay,
  PositionedOverlayProps,
} from '../../../PositionedOverlay';
import {Pane, PaneProps} from '../Pane';
import styles from '../../Popover.scss';

export enum PopoverCloseSource {
  Click,
  EscapeKeypress,
  FocusOut,
  ScrollOut,
}

export type PopoverAutofocusTarget = 'none' | 'first-node' | 'container';

enum TransitionStatus {
  Entering = 'entering',
  Entered = 'entered',
  Exiting = 'exiting',
  Exited = 'exited',
}

export interface PopoverOverlayProps {
  children?: React.ReactNode;
  fullWidth?: boolean;
  fullHeight?: boolean;
  fluidContent?: boolean;
  preferredPosition?: PositionedOverlayProps['preferredPosition'];
  preferredAlignment?: PositionedOverlayProps['preferredAlignment'];
  active: boolean;
  id: string;
  zIndexOverride?: number;
  activator: HTMLElement;
  preferInputActivator?: PositionedOverlayProps['preferInputActivator'];
  mutationObserveConfig?: PositionedOverlayProps['mutationObserveConfig'];
  sectioned?: boolean;
  fixed?: boolean;
  hideOnPrint?: boolean;
  onClose(source: PopoverCloseSource): void;
  colorScheme?: NonNullable<ThemeProviderProps['theme']>['colorScheme'];
  autofocusTarget?: PopoverAutofocusTarget;
}

interface State {
  transitionStatus: TransitionStatus;
}

export class PopoverOverlay extends PureComponent<PopoverOverlayProps, State> {
  state: State = {
    transitionStatus: this.props.active
      ? TransitionStatus.Entering
      : TransitionStatus.Exited,
  };

  private contentNode = createRef<HTMLDivElement>();
  private enteringTimer?: number;
  private exitingTimer?: number;

  changeTransitionStatus(transitionStatus: TransitionStatus, cb?: () => void) {
    this.setState({transitionStatus}, cb);
    // Forcing a reflow to enable the animation
    this.contentNode.current &&
      this.contentNode.current.getBoundingClientRect();
  }

  componentDidMount() {
    if (this.props.active) {
      this.focusContent();

      this.changeTransitionStatus(TransitionStatus.Entered);
    }
  }

  componentDidUpdate(oldProps: PopoverOverlayProps) {
    if (this.props.active && !oldProps.active) {
      this.focusContent();
      this.changeTransitionStatus(TransitionStatus.Entering, () => {
        this.clearTransitionTimeout();
        this.enteringTimer = window.setTimeout(() => {
          this.setState({transitionStatus: TransitionStatus.Entered});
        }, durationBase);
      });
    }

    if (!this.props.active && oldProps.active) {
      this.changeTransitionStatus(TransitionStatus.Exiting, () => {
        this.clearTransitionTimeout();
        this.exitingTimer = window.setTimeout(() => {
          this.setState({transitionStatus: TransitionStatus.Exited});
        }, durationBase);
      });
    }
  }

  componentWillUnmount() {
    this.clearTransitionTimeout();
  }

  render() {
    const {
      active,
      activator,
      fullWidth,
      preferredPosition = 'below',
      preferredAlignment = 'center',
      preferInputActivator = true,
      fixed,
      zIndexOverride,
      mutationObserveConfig,
    } = this.props;
    const {transitionStatus} = this.state;
    if (transitionStatus === TransitionStatus.Exited && !active) return null;

    const className = classNames(
      styles.PopoverOverlay,
      transitionStatus === TransitionStatus.Entering &&
        styles['PopoverOverlay-entering'],
      transitionStatus === TransitionStatus.Entered &&
        styles['PopoverOverlay-open'],
      transitionStatus === TransitionStatus.Exiting &&
        styles['PopoverOverlay-exiting'],
    );

    return (
      <PositionedOverlay
        testID="positionedOverlay"
        fullWidth={fullWidth}
        active={active}
        activator={activator}
        preferInputActivator={preferInputActivator}
        preferredPosition={preferredPosition}
        preferredAlignment={preferredAlignment}
        render={this.renderPopover.bind(this)}
        fixed={fixed}
        onScrollOut={this.handleScrollOut}
        classNames={className}
        zIndexOverride={zIndexOverride}
        mutationObserveConfig={mutationObserveConfig}
      />
    );
  }

  private clearTransitionTimeout() {
    if (this.enteringTimer) {
      window.clearTimeout(this.enteringTimer);
    }

    if (this.exitingTimer) {
      window.clearTimeout(this.exitingTimer);
    }
  }

  private focusContent() {
    const {autofocusTarget = 'container'} = this.props;

    if (autofocusTarget === 'none' || this.contentNode == null) {
      return;
    }

    requestAnimationFrame(() => {
      if (this.contentNode.current == null) {
        return;
      }

      const focusableChild = findFirstFocusableNode(this.contentNode.current);

      if (focusableChild && autofocusTarget === 'first-node') {
        focusableChild.focus({
          preventScroll: process.env.NODE_ENV === 'development',
        });
      } else {
        this.contentNode.current.focus({
          preventScroll: process.env.NODE_ENV === 'development',
        });
      }
    });
  }

  // eslint-disable-next-line @shopify/react-no-multiple-render-methods
  private renderPopover: PositionedOverlayProps['render'] = (
    overlayDetails,
  ) => {
    const {measuring, desiredHeight, positioning} = overlayDetails;

    const {
      id,
      children,
      sectioned,
      fullWidth,
      fullHeight,
      fluidContent,
      hideOnPrint,
      colorScheme,
      autofocusTarget,
    } = this.props;

    const className = classNames(
      styles.Popover,
      positioning === 'above' && styles.positionedAbove,
      fullWidth && styles.fullWidth,
      measuring && styles.measuring,
      hideOnPrint && styles['PopoverOverlay-hideOnPrint'],
    );

    const contentStyles = measuring ? undefined : {height: desiredHeight};

    const contentClassNames = classNames(
      styles.Content,
      fullHeight && styles['Content-fullHeight'],
      fluidContent && styles['Content-fluidContent'],
    );

    const content = (
      <div
        id={id}
        tabIndex={autofocusTarget === 'none' ? undefined : -1}
        className={contentClassNames}
        style={contentStyles}
        ref={this.contentNode}
      >
        {renderPopoverContent(children, {sectioned})}
      </div>
    );

    return (
      <div className={className} {...overlay.props}>
        <EventListener event="click" handler={this.handleClick} />
        <EventListener event="touchstart" handler={this.handleClick} />
        <KeypressListener keyCode={Key.Escape} handler={this.handleEscape} />
        <div
          className={styles.FocusTracker}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
          onFocus={this.handleFocusFirstItem}
        />
        <ThemeProvider alwaysRenderCustomProperties theme={{colorScheme}}>
          <div className={styles.Wrapper}>{content}</div>
        </ThemeProvider>
        <div
          className={styles.FocusTracker}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
          onFocus={this.handleFocusLastItem}
        />
      </div>
    );
  };

  private handleClick = (event: Event) => {
    const target = event.target as HTMLElement;
    const {
      contentNode,
      props: {activator, onClose},
    } = this;
    const isDescendant =
      contentNode.current != null &&
      nodeContainsDescendant(contentNode.current, target);
    const isActivatorDescendant = nodeContainsDescendant(activator, target);
    if (
      isDescendant ||
      isActivatorDescendant ||
      this.state.transitionStatus !== TransitionStatus.Entered
    ) {
      return;
    }
    onClose(PopoverCloseSource.Click);
  };

  private handleScrollOut = () => {
    this.props.onClose(PopoverCloseSource.ScrollOut);
  };

  private handleEscape = () => {
    this.props.onClose(PopoverCloseSource.EscapeKeypress);
  };

  private handleFocusFirstItem = () => {
    this.props.onClose(PopoverCloseSource.FocusOut);
  };

  private handleFocusLastItem = () => {
    this.props.onClose(PopoverCloseSource.FocusOut);
  };
}

function renderPopoverContent(
  children: React.ReactNode,
  props?: Partial<PaneProps>,
) {
  const childrenArray = Children.toArray(children);
  if (isElementOfType(childrenArray[0], Pane)) {
    return childrenArray;
  }
  return wrapWithComponent(childrenArray, Pane, props);
}

export function nodeContainsDescendant(
  rootNode: HTMLElement,
  descendant: HTMLElement,
): boolean {
  if (rootNode === descendant) {
    return true;
  }

  let parent = descendant.parentNode;

  while (parent != null) {
    if (parent === rootNode) {
      return true;
    }
    parent = parent.parentNode;
  }

  return false;
}
