import React, {useEffect, useCallback, useRef} from 'react';

import {findFirstFocusableParent} from '../../utilities/focus';
import {ClickTrackerContext} from '../../utilities/click-tracker';

interface Props {
  children?: React.ReactNode;
}

export const ClickTrackerProvider = function ClickTrackerProvider({
  children,
}: Props) {
  const lastClickedNode = useRef<EventTarget | null>(null);

  const clickTracker = useCallback((evt: MouseEvent | KeyboardEvent) => {
    if (
      evt instanceof KeyboardEvent &&
      evt.key !== ' ' &&
      evt.key !== 'Enter'
    ) {
      return;
    }
    if (lastClickedNode) {
      lastClickedNode.current = evt.target;
    }
  }, []);

  const addListenners = useCallback(() => {
    document.addEventListener('click', clickTracker);
    document.addEventListener('keyup', clickTracker);
  }, [clickTracker]);

  const removeListenners = useCallback(() => {
    document.removeEventListener('click', clickTracker);
    document.removeEventListener('keyup', clickTracker);
  }, [clickTracker]);

  const trackClicks = useCallback(
    (enable: boolean) => {
      enable ? addListenners() : removeListenners();
    },
    [addListenners, removeListenners],
  );

  const focusLastClickedNode = useCallback(() => {
    if (lastClickedNode) {
      const lastNode = lastClickedNode.current;
      if (lastNode instanceof HTMLElement) {
        const nodeToFocus = findFirstFocusableParent(lastNode);
        requestAnimationFrame(() => nodeToFocus && nodeToFocus.focus());
      }
    }
  }, []);

  useEffect(() => {
    addListenners();
    return () => {
      removeListenners();
    };
  }, [addListenners, removeListenners]);

  return (
    <ClickTrackerContext.Provider
      value={{
        trackClicks,
        focusLastClickedNode,
      }}
    >
      {children}
    </ClickTrackerContext.Provider>
  );
};
