import React, {useRef} from 'react';
import {durationSlow} from '@shopify/polaris-tokens';
import {CSSTransition} from 'react-transition-group';
import type {CSSTransitionClassNames} from 'react-transition-group/CSSTransition';

import {useMediaQuery} from '../../utilities/media-query';
import {classNames} from '../../utilities/css';
import {Key} from '../../types';
import {layer, overlay} from '../shared';
import {Backdrop} from '../Backdrop';
import {TrapFocus} from '../TrapFocus';
import {Portal} from '../Portal';
import {KeypressListener} from '../KeypressListener';

import styles from './Sheet.scss';

const BOTTOM_CLASS_NAMES = {
  enter: classNames(styles.Bottom, styles.enterBottom),
  enterActive: classNames(styles.Bottom, styles.enterBottomActive),
  exit: classNames(styles.Bottom, styles.exitBottom),
  exitActive: classNames(styles.Bottom, styles.exitBottomActive),
};

const RIGHT_CLASS_NAMES = {
  enter: classNames(styles.Right, styles.enterRight),
  enterActive: classNames(styles.Right, styles.enterRightActive),
  exit: classNames(styles.Right, styles.exitRight),
  exitActive: classNames(styles.Right, styles.exitRightActive),
};

export interface SheetProps {
  /** Whether or not the sheet is open */
  open: boolean;
  /** The child elements to render in the sheet */
  children: React.ReactNode;
  /** Callback when the backdrop is clicked or `ESC` is pressed */
  onClose(): void;
  /** Callback when the sheet has completed entering */
  onEntered?(): void;
  /** Callback when the sheet has started to exit */
  onExit?(): void;
  /** Show a different sized sheet */
  size?: 'small' | 'medium' | 'large';
  /** Show a transparent backdrop */
  transparentBackdrop?: boolean;
  /** Renders as a full sheet or a bottom sheet */
  type?: 'fullSheet' | 'bottomSheet';
}

export function Sheet({
  children,
  open,
  onClose,
  onEntered,
  onExit,
  transparentBackdrop = true,
  type = 'fullSheet',
  size = 'small',
}: SheetProps) {
  const {isNavigationCollapsed} = useMediaQuery();
  const container = useRef<HTMLDivElement>(null);

  let transitionClasses: CSSTransitionClassNames;
  if (type === 'bottomSheet') {
    transitionClasses = BOTTOM_CLASS_NAMES;
  } else {
    transitionClasses = isNavigationCollapsed
      ? BOTTOM_CLASS_NAMES
      : RIGHT_CLASS_NAMES;
  }

  return (
    <Portal idPrefix="sheet">
      <CSSTransition
        nodeRef={container}
        classNames={transitionClasses}
        timeout={durationSlow}
        in={open}
        mountOnEnter
        unmountOnExit
        onEntered={onEntered}
        onExit={onExit}
      >
        <div
          className={classNames(
            styles.Container,
            size === 'large' && styles.sizeLarge,
            size === 'medium' && styles.sizeMedium,
            type === 'bottomSheet' && styles.bottomSheet,
          )}
          {...layer.props}
          {...overlay.props}
          ref={container}
        >
          <TrapFocus trapping={open}>
            <div
              role="dialog"
              tabIndex={-1}
              className={classNames(
                styles.Sheet,
                size === 'large' && styles.sizeLarge,
                size === 'medium' && styles.sizeMedium,
                type === 'bottomSheet' && styles.bottomSheet,
              )}
            >
              {children}
            </div>
          </TrapFocus>
        </div>
      </CSSTransition>
      {type !== 'bottomSheet' ? (
        <KeypressListener keyCode={Key.Escape} handler={onClose} />
      ) : null}
      {open && type !== 'bottomSheet' && (
        <Backdrop transparent={transparentBackdrop} onClick={onClose} />
      )}
    </Portal>
  );
}
