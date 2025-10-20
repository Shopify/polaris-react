import {useEffect, useState} from 'react';
import type {DarkMode} from 'use-dark-mode';

/**
 * SSR-safe wrapper for use-dark-mode that prevents localStorage access during prerender.
 * Returns a mock DarkMode object during SSR, then hydrates with actual hook on client.
 */
export function useSafeDarkMode(initialValue = false): DarkMode {
  const [darkMode, setDarkMode] = useState<DarkMode>(() => ({
    value: initialValue,
    enable: () => {},
    disable: () => {},
    toggle: () => {},
  }));

  useEffect(() => {
    // Only import and use the actual hook on the client
    const useDarkMode = require('use-dark-mode').default;
    const actualDarkMode = useDarkMode(initialValue);
    setDarkMode(actualDarkMode);
  }, [initialValue]);

  return darkMode;
}

