import React from 'react';

import {classNames} from '../../../../utilities/css';
import {SearchDismissOverlay} from '../SearchDismissOverlay';
import {useFeatures} from '../../../../utilities/features';

import styles from './Search.scss';

export interface SearchProps {
  /** Toggles whether or not the search is visible */
  visible?: boolean;
  /** The content to display inside the search */
  children?: React.ReactNode;
  /** Whether or not the search results overlay has a visible backdrop */
  overlayVisible?: boolean;
  /** Callback when the search is dismissed */
  onDismiss?(): void;
}

export function Search({
  visible,
  children,
  onDismiss,
  overlayVisible = false,
}: SearchProps) {
  const {newDesignLanguage} = useFeatures();

  if (children == null) {
    return null;
  }

  const overlayMarkup = visible ? (
    <SearchDismissOverlay onDismiss={onDismiss} visible={overlayVisible} />
  ) : null;

  return (
    <>
      {overlayMarkup}
      <div
        className={classNames(
          styles.Search,
          visible && styles.visible,
          newDesignLanguage && styles.newDesignLanguage,
        )}
      >
        <div
          className={classNames(
            styles.SearchContent,
            newDesignLanguage && styles.newDesignLanguage,
          )}
        >
          <div className={styles.Results}>{children}</div>
        </div>
      </div>
    </>
  );
}
