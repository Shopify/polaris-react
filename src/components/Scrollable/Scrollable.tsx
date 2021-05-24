import React, {Component} from 'react';
import debounce from 'lodash/debounce';

import {classNames} from '../../utilities/css';
import {
  StickyManager,
  StickyManagerContext,
} from '../../utilities/sticky-manager';
import {scrollable} from '../shared';

import {ScrollTo} from './components';
import {ScrollableContext} from './context';
import styles from './Scrollable.scss';

const MAX_SCROLL_DISTANCE = 100;
const DELTA_THRESHOLD = 0.2;
const DELTA_PERCENTAGE = 0.2;
const EVENTS_TO_LOCK = ['scroll', 'touchmove', 'wheel'];
const PREFERS_REDUCED_MOTION = prefersReducedMotion();

export interface ScrollableProps extends React.HTMLProps<HTMLDivElement> {
  /** Content to display in scrollable area */
  children?: React.ReactNode;
  /** Scroll content vertically */
  vertical?: boolean;
  /** Scroll content horizontally */
  horizontal?: boolean;
  /** Add a shadow when content is scrollable */
  shadow?: boolean;
  /** Slightly hints content upon mounting when scrollable */
  hint?: boolean;
  /** Adds a tabIndex to scrollable when children are not focusable */
  focusable?: boolean;
  /** Called when scrolled to the bottom of the scroll area */
  onScrolledToBottom?(): void;
}

interface State {
  topShadow: boolean;
  bottomShadow: boolean;
  scrollPosition: number;
  canScroll: boolean;
}

export class Scrollable extends Component<ScrollableProps, State> {
  static ScrollTo = ScrollTo;
  static forNode(node: HTMLElement): HTMLElement | Document {
    const closestElement = node.closest(scrollable.selector);
    return closestElement instanceof HTMLElement ? closestElement : document;
  }

  state: State = {
    topShadow: false,
    bottomShadow: false,
    scrollPosition: 0,
    canScroll: false,
  };

  private stickyManager = new StickyManager();

  private scrollArea: HTMLElement | null = null;

  private handleResize = debounce(
    () => {
      this.handleScroll();
    },
    50,
    {trailing: true},
  );

  componentDidMount() {
    if (this.scrollArea == null) {
      return;
    }
    this.stickyManager.setContainer(this.scrollArea);
    this.scrollArea.addEventListener('scroll', () => {
      window.requestAnimationFrame(this.handleScroll);
    });
    window.addEventListener('resize', this.handleResize);
    window.requestAnimationFrame(() => {
      this.handleScroll();
      if (this.props.hint) {
        this.scrollHint();
      }
    });
  }

  componentWillUnmount() {
    if (this.scrollArea == null) {
      return;
    }
    this.scrollArea.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
    this.stickyManager.removeScrollListener();
  }

  componentDidUpdate() {
    const {scrollPosition} = this.state;
    if (scrollPosition && this.scrollArea && scrollPosition > 0) {
      this.scrollArea.scrollTop = scrollPosition;
    }
  }

  render() {
    const {topShadow, bottomShadow, canScroll} = this.state;
    const {
      children,
      className,
      horizontal,
      vertical = true,
      shadow,
      hint,
      focusable,
      onScrolledToBottom,
      ...rest
    } = this.props;

    const finalClassName = classNames(
      className,
      styles.Scrollable,
      vertical && styles.vertical,
      horizontal && styles.horizontal,
      topShadow && styles.hasTopShadow,
      bottomShadow && styles.hasBottomShadow,
      vertical && canScroll && styles.verticalHasScrolling,
    );

    return (
      <ScrollableContext.Provider value={this.scrollToPosition}>
        <StickyManagerContext.Provider value={this.stickyManager}>
          <div
            className={finalClassName}
            {...scrollable.props}
            {...rest}
            ref={this.setScrollArea}
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={focusable ? 0 : undefined}
          >
            {children}
          </div>
        </StickyManagerContext.Provider>
      </ScrollableContext.Provider>
    );
  }

  private setScrollArea = (scrollArea: HTMLElement | null) => {
    this.scrollArea = scrollArea;
  };

  private handleScroll = () => {
    const {scrollArea} = this;
    const {shadow, onScrolledToBottom} = this.props;
    if (scrollArea == null) {
      return;
    }
    const {scrollTop, clientHeight, scrollHeight} = scrollArea;
    const shouldBottomShadow = Boolean(
      shadow && !(scrollTop + clientHeight >= scrollHeight),
    );
    const shouldTopShadow = Boolean(shadow && scrollTop > 0);

    const canScroll = scrollHeight > clientHeight;
    const hasScrolledToBottom = scrollHeight - scrollTop <= clientHeight;

    if (canScroll && hasScrolledToBottom && onScrolledToBottom) {
      onScrolledToBottom();
    }

    this.setState({
      topShadow: shouldTopShadow,
      bottomShadow: shouldBottomShadow,
      scrollPosition: scrollTop,
      canScroll,
    });
  };

  private scrollHint = () => {
    const {scrollArea} = this;
    if (scrollArea == null) {
      return;
    }
    const {clientHeight, scrollHeight} = scrollArea;
    if (
      PREFERS_REDUCED_MOTION ||
      this.state.scrollPosition > 0 ||
      scrollHeight <= clientHeight
    ) {
      return;
    }

    const scrollDistance = scrollHeight - clientHeight;
    this.toggleLock();
    this.setState(
      {
        scrollPosition:
          scrollDistance > MAX_SCROLL_DISTANCE
            ? MAX_SCROLL_DISTANCE
            : scrollDistance,
      },
      () => {
        window.requestAnimationFrame(this.scrollStep);
      },
    );
  };

  private scrollStep = () => {
    this.setState(
      ({scrollPosition}) => {
        const delta = scrollPosition * DELTA_PERCENTAGE;
        return {
          scrollPosition: delta < DELTA_THRESHOLD ? 0 : scrollPosition - delta,
        };
      },
      () => {
        if (this.state.scrollPosition > 0) {
          window.requestAnimationFrame(this.scrollStep);
        } else {
          this.toggleLock(false);
        }
      },
    );
  };

  private toggleLock(shouldLock = true) {
    const {scrollArea} = this;
    if (scrollArea == null) {
      return;
    }

    EVENTS_TO_LOCK.forEach((eventName) => {
      if (shouldLock) {
        scrollArea.addEventListener(eventName, prevent);
      } else {
        scrollArea.removeEventListener(eventName, prevent);
      }
    });
  }

  private scrollToPosition = (scrollY: number) => {
    this.setState({scrollPosition: scrollY});
  };
}

function prevent(evt: Event) {
  evt.preventDefault();
}

function prefersReducedMotion() {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (err) {
    return false;
  }
}
