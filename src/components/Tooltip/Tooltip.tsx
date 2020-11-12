import React, {useEffect, useState, useRef, useCallback} from 'react';

import {Portal} from '../Portal';
import {findFirstFocusableNode} from '../../utilities/focus';
import {useUniqueId} from '../../utilities/unique-id';
import {useToggle} from '../../utilities/use-toggle';

import {TooltipOverlay, TooltipOverlayProps} from './components';
import styles from './Tooltip.scss';

export interface TooltipProps {
  /** The element that will activate to tooltip */
  children?: React.ReactNode;
  /** The content to display within the tooltip */
  content: React.ReactNode;
  /** Display tooltip with a light background */
  light?: boolean;
  /** Toggle whether the tooltip is visible */
  active?: boolean;
  /** Dismiss tooltip when not interacting with its children */
  dismissOnMouseOut?: TooltipOverlayProps['preventInteraction'];
  /**
   * The direction the tooltip tries to display
   * @default 'below'
   */
  preferredPosition?: TooltipOverlayProps['preferredPosition'];
  /**
   * The element type to wrap the activator in
   * @default 'span'
   */
  activatorWrapper?: string;
}

export function Tooltip({
  children,
  content,
  light,
  dismissOnMouseOut,
  active: originalActive,
  preferredPosition = 'below',
  activatorWrapper = 'span',
}: TooltipProps) {
  const WrapperComponent: any = activatorWrapper;
  const {
    value: active,
    setTrue: setActiveTrue,
    setFalse: handleBlur,
  } = useToggle(Boolean(originalActive));
  const [activatorNode, setActivatorNode] = useState<HTMLElement | null>(null);

  const id = useUniqueId('TooltipContent');
  const activatorContainer = useRef<HTMLElement>(null);
  const mouseEntered = useRef(false);

  const handleFocus = useCallback(() => {
    if (originalActive !== false) {
      setActiveTrue();
    }
  }, [setActiveTrue, originalActive]);

  useEffect(() => {
    const firstFocusable = activatorContainer.current
      ? findFirstFocusableNode(activatorContainer.current)
      : null;
    const accessibilityNode = firstFocusable || activatorContainer.current;

    if (!accessibilityNode) return;

    accessibilityNode.tabIndex = 0;
    accessibilityNode.setAttribute('aria-describedby', id);
  }, [id, children]);

  const portal = activatorNode ? (
    <Portal idPrefix="tooltip">
      <TooltipOverlay
        id={id}
        preferredPosition={preferredPosition}
        activator={activatorNode}
        active={active}
        onClose={noop}
        light={light}
        preventInteraction={dismissOnMouseOut}
      >
        <div className={styles.Label} testID="TooltipOverlayLabel">
          {content}
        </div>
      </TooltipOverlay>
    </Portal>
  ) : null;

  return (
    <WrapperComponent
      testID="WrapperComponent"
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseEnterFix}
      ref={setActivator}
    >
      {children}
      {portal}
    </WrapperComponent>
  );

  function setActivator(node: HTMLElement | null) {
    const activatorContainerRef: any = activatorContainer;
    if (node == null) {
      activatorContainerRef.current = null;
      setActivatorNode(null);
      return;
    }

    node.firstElementChild instanceof HTMLElement &&
      setActivatorNode(node.firstElementChild);

    activatorContainerRef.current = node;
  }

  function handleMouseEnter() {
    mouseEntered.current = true;
    handleFocus();
  }

  function handleMouseLeave() {
    mouseEntered.current = false;
    handleBlur();
  }

  // https://github.com/facebook/react/issues/10109
  // Mouseenter event not triggered when cursor moves from disabled button
  function handleMouseEnterFix() {
    !mouseEntered.current && handleMouseEnter();
  }
}

function noop() {}
