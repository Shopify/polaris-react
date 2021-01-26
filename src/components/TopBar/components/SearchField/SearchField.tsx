import React, {useCallback, useEffect, useState, useRef} from 'react';
import {CircleCancelMinor, SearchMinor} from '@shopify/polaris-icons';

import {classNames} from '../../../../utilities/css';
import {useI18n} from '../../../../utilities/i18n';
import {useFeatures} from '../../../../utilities/features';
import {useUniqueId} from '../../../../utilities/unique-id';
import {Icon} from '../../../Icon';
import {VisuallyHidden} from '../../../VisuallyHidden';

import styles from './SearchField.scss';

export interface SearchFieldProps {
  /** Initial value for the input */
  value: string;
  /** Hint text to display */
  placeholder?: string;
  /** Force the focus state on the input */
  focused?: boolean;
  /** Force a state where search is active but the text field component is not focused */
  active?: boolean;
  /** Callback when value is changed */
  onChange(value: string): void;
  /** Callback when input is focused */
  onFocus?(): void;
  /** Callback when focus is removed */
  onBlur?(): void;
  /** Callback when search field cancel button is clicked */
  onCancel?(): void;
  /** Show a border when the search field is focused */
  showFocusBorder?: boolean;
  /** Whether or not the search results are visible */
  searchResultsVisible?: boolean;
}

export function SearchField({
  value,
  focused,
  active,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  onCancel,
  showFocusBorder,
  searchResultsVisible,
}: SearchFieldProps) {
  const i18n = useI18n();
  const [forceActive, setForceActive] = useState(false);
  const {newDesignLanguage} = useFeatures();

  const input = useRef<HTMLInputElement>(null);
  const searchId = useUniqueId('SearchField');

  const handleChange = useCallback(
    ({currentTarget}: React.ChangeEvent<HTMLInputElement>) => {
      onChange(currentTarget.value);
    },
    [onChange],
  );

  const handleFocus = useCallback(() => onFocus && onFocus(), [onFocus]);

  const handleBlur = useCallback(() => onBlur && onBlur(), [onBlur]);

  const handleClear = useCallback(() => {
    onCancel && onCancel();

    if (!input.current) {
      return;
    }

    input.current.value = '';
    onChange('');
    input.current.focus();
  }, [onCancel, onChange]);

  useEffect(() => {
    if (!input.current) {
      return;
    }

    if (focused) {
      input.current.focus();
    } else {
      input.current.blur();
    }
  }, [focused]);

  const clearMarkup = value !== '' && (
    <button
      type="button"
      aria-label={i18n.translate('Polaris.TopBar.SearchField.clearButtonLabel')}
      className={styles.Clear}
      onClick={handleClear}
      onBlur={() => {
        setForceActive(false);
        handleClear();
      }}
      onFocus={() => {
        handleFocus();
        setForceActive(true);
      }}
    >
      <Icon source={CircleCancelMinor} />
    </button>
  );

  const className = classNames(
    styles.SearchField,
    (focused || active || forceActive) && styles.focused,
    newDesignLanguage && styles['SearchField-newDesignLanguage'],
  );

  return (
    <div className={className} onFocus={handleFocus} onBlur={handleBlur}>
      <VisuallyHidden>
        <label htmlFor={searchId}>
          {i18n.translate('Polaris.TopBar.SearchField.search')}
        </label>
      </VisuallyHidden>
      <input
        id={searchId}
        className={classNames(styles.Input)}
        placeholder={placeholder}
        type="search"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        ref={input}
        value={value}
        onChange={handleChange}
        onKeyDown={preventDefault}
      />
      <span className={styles.Icon}>
        <Icon source={SearchMinor} />
      </span>

      {clearMarkup}
      <div
        className={classNames(
          styles.Backdrop,
          newDesignLanguage && styles.newDesignLanguage,
          searchResultsVisible && styles.searchResultsVisible,
          showFocusBorder && styles.BackdropShowFocusBorder,
        )}
      />
    </div>
  );
}

function preventDefault(event: React.KeyboardEvent<HTMLInputElement>) {
  if (event.key === 'Enter') {
    event.preventDefault();
  }
}
