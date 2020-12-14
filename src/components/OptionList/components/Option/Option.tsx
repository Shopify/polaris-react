import React, {useCallback} from 'react';

import {classNames} from '../../../../utilities/css';
import {useFeatures} from '../../../../utilities/features';
import type {IconProps} from '../../../../types';
import type {ThumbnailProps} from '../../../Thumbnail';
import type {AvatarProps} from '../../../Avatar';
import {Scrollable} from '../../../Scrollable';
import {Checkbox} from '../Checkbox';
import {RadioButton} from '../RadioButton';

import styles from './Option.scss';

export interface OptionProps {
  id: string;
  label: React.ReactNode;
  value: string;
  section: number;
  index: number;
  media?: React.ReactElement<IconProps | AvatarProps | ThumbnailProps>;
  disabled?: boolean;
  active?: boolean;
  select?: boolean;
  allowMultiple?: boolean;
  role?: string;
  onClick(section: number, option: number): void;
}

export function Option({
  label,
  value,
  id,
  select,
  active,
  allowMultiple,
  disabled,
  role,
  media,
  onClick,
  section,
  index,
}: OptionProps) {
  const {newDesignLanguage} = useFeatures();

  const handleClick = useCallback(() => {
    if (disabled) {
      return;
    }

    onClick(section, index);
  }, [disabled, index, onClick, section]);

  const mediaMarkup = media ? (
    <div className={styles.Media}>{media}</div>
  ) : null;

  const labelClassName = classNames(
    styles.Label,
    disabled && styles.disabled,
    active && styles.active,
  );

  const multiSelectClassName = classNames(
    labelClassName,
    newDesignLanguage && select && styles.select,
  );

  const singleSelectClassName = classNames(
    labelClassName,
    styles.SingleSelectOption,
    select && styles.select,
  );

  const optionRole = role === 'option' ? 'presentation' : undefined;

  const optionMarkup = allowMultiple ? (
    <label htmlFor={id} className={multiSelectClassName}>
      <div className={styles.Checkbox}>
        <Checkbox
          id={id}
          value={value}
          checked={select}
          active={active}
          disabled={disabled}
          onChange={handleClick}
          role={optionRole}
        />
      </div>
      {mediaMarkup}
      {label}
    </label>
  ) : (
    <label htmlFor={id} className={singleSelectClassName}>
      <RadioButton
        id={id}
        value={value}
        checked={select}
        active={active}
        disabled={disabled}
        onChange={handleClick}
        role={optionRole}
      />
      {mediaMarkup}
      {label}
    </label>
  );

  const scrollMarkup = active ? <Scrollable.ScrollTo /> : null;

  const optionClassName = classNames(
    styles.Option,
    newDesignLanguage && styles.newDesignLanguage,
  );

  return (
    <li
      key={id}
      className={optionClassName}
      tabIndex={-1}
      aria-selected={active}
      role={role}
    >
      {scrollMarkup}
      {optionMarkup}
    </li>
  );
}
