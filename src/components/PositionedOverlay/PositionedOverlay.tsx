import React, {PureComponent} from 'react';

import {classNames} from '../../utilities/css';
import {getRectForNode, Rect} from '../../utilities/geometry';
import {ContextualSaveBarContext} from '../../utilities/contextualsavebar-context';
import {EventListener} from '../EventListener';
import {Scrollable} from '../Scrollable';
import {layer} from '../shared';

import {
  PreferredPosition,
  PreferredAlignment,
  calculateVerticalPosition,
  calculateHorizontalPosition,
  rectIsOutsideOfRect,
  intersectionWithViewport,
  windowRect,
} from './utilities/math';
import styles from './PositionedOverlay.scss';

type Positioning = 'above' | 'below';

export const CONTEXTUAL_SAVE_BAR_ZINDEX = 513;

interface OverlayDetails {
  left?: number;
  right?: number;
  desiredHeight: number;
  positioning: Positioning;
  measuring: boolean;
  activatorRect: Rect;
}

export interface PositionedOverlayProps {
  active: boolean;
  activator: HTMLElement;
  preferInputActivator?: boolean;
  preferredPosition?: PreferredPosition;
  preferredAlignment?: PreferredAlignment;
  fullWidth?: boolean;
  fixed?: boolean;
  preventInteraction?: boolean;
  classNames?: string;
  render(overlayDetails: OverlayDetails): React.ReactNode;
  onScrollOut?(): void;
}

interface State {
  measuring: boolean;
  activatorRect: Rect;
  left?: number;
  right?: number;
  top: number;
  height: number;
  width: number | null;
  positioning: Positioning;
  zIndex: number | null;
  outsideScrollableContainer: boolean;
  lockPosition: boolean;
}

const OBSERVER_CONFIG = {childList: true, subtree: true};

export class PositionedOverlay extends PureComponent<
  PositionedOverlayProps,
  State
> {
  state: State = {
    measuring: true,
    activatorRect: getRectForNode(this.props.activator),
    right: undefined,
    left: undefined,
    top: 0,
    height: 0,
    width: null,
    positioning: 'below',
    zIndex: null,
    outsideScrollableContainer: false,
    lockPosition: false,
  };

  private overlay: HTMLElement | null = null;
  private scrollableContainer: HTMLElement | Document | null = null;
  private observer: MutationObserver;

  constructor(props: PositionedOverlayProps) {
    super(props);

    this.observer = new MutationObserver(this.handleMeasurement);
  }

  componentDidMount() {
    this.scrollableContainer = Scrollable.forNode(this.props.activator);
    if (this.scrollableContainer && !this.props.fixed) {
      this.scrollableContainer.addEventListener(
        'scroll',
        this.handleMeasurement,
      );
    }
    this.handleMeasurement();
  }

  componentWillUnmount() {
    if (this.scrollableContainer && !this.props.fixed) {
      this.scrollableContainer.removeEventListener(
        'scroll',
        this.handleMeasurement,
      );
    }
  }

  componentDidUpdate() {
    const {outsideScrollableContainer, top} = this.state;
    const {onScrollOut, active} = this.props;

    if (
      active &&
      onScrollOut != null &&
      top !== 0 &&
      outsideScrollableContainer
    ) {
      onScrollOut();
    }
  }

  render() {
    const {left, right, top, zIndex, width} = this.state;
    const {
      render,
      fixed,
      preventInteraction,
      classNames: propClassNames,
    } = this.props;

    const style = {
      top: top == null || isNaN(top) ? undefined : top,
      left: left == null || isNaN(left) ? undefined : left,
      right: right == null || isNaN(right) ? undefined : right,
      width: width == null || isNaN(width) ? undefined : width,
      zIndex: zIndex == null || isNaN(zIndex) ? undefined : zIndex,
    };

    const className = classNames(
      styles.PositionedOverlay,
      fixed && styles.fixed,
      preventInteraction && styles.preventInteraction,
      propClassNames,
    );

    return (
      <ContextualSaveBarContext.Consumer>
        {(isWithinContextualSaveBar) => {
          if (isWithinContextualSaveBar) {
            style.zIndex = CONTEXTUAL_SAVE_BAR_ZINDEX;
          }

          return (
            <div className={className} style={style} ref={this.setOverlay}>
              <EventListener event="resize" handler={this.handleMeasurement} />
              {render(this.overlayDetails())}
            </div>
          );
        }}
      </ContextualSaveBarContext.Consumer>
    );
  }

  private overlayDetails = (): OverlayDetails => {
    const {
      measuring,
      left,
      right,
      positioning,
      height,
      activatorRect,
    } = this.state;

    return {
      measuring,
      left,
      right,
      desiredHeight: height,
      positioning,
      activatorRect,
    };
  };

  private setOverlay = (node: HTMLElement | null) => {
    this.overlay = node;
  };

  private handleMeasurement = () => {
    const {lockPosition, top} = this.state;

    this.observer.disconnect();

    this.setState(
      ({left, top, right}) => ({
        left,
        right,
        top,
        height: 0,
        positioning: 'below',
        measuring: true,
      }),
      () => {
        if (this.overlay == null || this.scrollableContainer == null) {
          return;
        }
        const {
          activator,
          preferredPosition = 'below',
          preferredAlignment = 'center',
          onScrollOut,
          fullWidth,
          fixed,
          preferInputActivator = true,
        } = this.props;

        const preferredActivator = preferInputActivator
          ? activator.querySelector('input') || activator
          : activator;

        const activatorRect = getRectForNode(preferredActivator);

        const currentOverlayRect = getRectForNode(this.overlay);
        const scrollableElement = isDocument(this.scrollableContainer)
          ? document.body
          : this.scrollableContainer;
        const scrollableContainerRect = getRectForNode(scrollableElement);

        const overlayRect = fullWidth
          ? new Rect({...currentOverlayRect, width: activatorRect.width})
          : currentOverlayRect;

        // If `body` is 100% height, it still acts as though it were not constrained to that size. This adjusts for that.
        if (scrollableElement === document.body) {
          scrollableContainerRect.height = document.body.scrollHeight;
        }

        const overlayMargins =
          this.overlay.firstElementChild &&
          this.overlay.firstChild instanceof HTMLElement
            ? getMarginsForNode(this.overlay.firstElementChild as HTMLElement)
            : {activator: 0, container: 0, horizontal: 0};

        const containerRect = windowRect();
        const zIndexForLayer = getZIndexForLayerFromNode(activator);
        const zIndex =
          zIndexForLayer == null ? zIndexForLayer : zIndexForLayer + 1;
        const verticalPosition = calculateVerticalPosition(
          activatorRect,
          overlayRect,
          overlayMargins,
          scrollableContainerRect,
          containerRect,
          preferredPosition,
          fixed,
        );
        const horizontalPosition = calculateHorizontalPosition(
          activatorRect,
          overlayRect,
          containerRect,
          overlayMargins,
          preferredAlignment,
        );

        this.setState(
          {
            measuring: false,
            activatorRect: getRectForNode(activator),
            left:
              preferredAlignment !== 'right' ? horizontalPosition : undefined,
            right:
              preferredAlignment === 'right' ? horizontalPosition : undefined,
            top: lockPosition ? top : verticalPosition.top,
            lockPosition: Boolean(fixed),
            height: verticalPosition.height || 0,
            width: fullWidth ? overlayRect.width : null,
            positioning: verticalPosition.positioning as Positioning,
            outsideScrollableContainer:
              onScrollOut != null &&
              rectIsOutsideOfRect(
                activatorRect,
                intersectionWithViewport(scrollableContainerRect),
              ),
            zIndex,
          },
          () => {
            if (!this.overlay) return;
            this.observer.observe(this.overlay, OBSERVER_CONFIG);
          },
        );
      },
    );
  };
}

function getMarginsForNode(node: HTMLElement) {
  const nodeStyles = window.getComputedStyle(node);
  return {
    activator: parseFloat(nodeStyles.marginTop || '0'),
    container: parseFloat(nodeStyles.marginBottom || '0'),
    horizontal: parseFloat(nodeStyles.marginLeft || '0'),
  };
}

function getZIndexForLayerFromNode(node: HTMLElement) {
  const layerNode = node.closest(layer.selector) || document.body;
  const zIndex =
    layerNode === document.body
      ? 'auto'
      : parseInt(window.getComputedStyle(layerNode).zIndex || '0', 10);
  return zIndex === 'auto' || isNaN(zIndex) ? null : zIndex;
}

function isDocument(node: HTMLElement | Document): node is Document {
  return node === document;
}
