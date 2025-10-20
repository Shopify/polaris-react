import {useEffect, useState, useCallback} from 'react';
import type {DarkMode} from 'use-dark-mode';

/**
 * SSR-safe wrapper for use-dark-mode that prevents localStorage access during prerender.
 * Manages dark mode state manually on the server, then syncs with localStorage on client.
 */
export function useSafeDarkMode(initialValue = false): DarkMode {
  const [value, setValue] = useState(initialValue);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Sync with localStorage on mount
    try {
      const stored = localStorage.getItem('darkMode');
      if (stored !== null) {
        setValue(JSON.parse(stored));
      }
    } catch {
      // localStorage unavailable
    }
  }, []);

  const enable = useCallback(() => {
    setValue(true);
    if (mounted) {
      try {
        localStorage.setItem('darkMode', JSON.stringify(true));
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      } catch {
        // localStorage unavailable
      }
    }
  }, [mounted]);

  const disable = useCallback(() => {
    setValue(false);
    if (mounted) {
      try {
        localStorage.setItem('darkMode', JSON.stringify(false));
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      } catch {
        // localStorage unavailable
      }
    }
  }, [mounted]);

  const toggle = useCallback(() => {
    if (value) {
      disable();
    } else {
      enable();
    }
  }, [value, enable, disable]);

  return {value, enable, disable, toggle};
}

