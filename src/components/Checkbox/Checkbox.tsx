import React, {forwardRef, useRef, useImperativeHandle, useState} from 'react';
import {MinusMinor, TickSmallMinor} from '@shopify/polaris-icons';

import {classNames} from '../../utilities/css';
import {useToggle} from '../../utilities/use-toggle';
import {useUniqueId} from '../../utilities/unique-id';
import {Choice, helpTextID} from '../Choice';
import {errorTextID} from '../InlineError';
import {Icon} from '../Icon';
import {Error, Key, CheckboxHandles} from '../../types';

import styles from './Checkbox.scss';

export interface CheckboxProps {
  /** Indicates the ID of the element that describes the checkbox*/
  ariaDescribedBy?: string;
  /** Label for the checkbox */
  label: React.ReactNode;
  /** Visually hide the label */
  labelHidden?: boolean;
  /** Checkbox is selected. `indeterminate` shows a horizontal line in the checkbox */
  checked?: boolean | 'indeterminate';
  /** Additional text to aide in use */
  helpText?: React.ReactNode;
  /** Disable input */
  disabled?: boolean;
  /** ID for form input */
  id?: string;
  /** Name for form input */
  name?: string;
  /** Value for form input */
  value?: string;
  /** Display an error message */
  error?: Error | boolean;
  /** Callback when checkbox is toggled */
  onChange?(newChecked: boolean, id: string): void;
  /** Callback when checkbox is focussed */
  onFocus?(): void;
  /** Callback when focus is removed */
  onBlur?(): void;
}

export const Checkbox = forwardRef<CheckboxHandles, CheckboxProps>(
  function Checkbox(
    {
      ariaDescribedBy: ariaDescribedByProp,
      label,
      labelHidden,
      checked = false,
      helpText,
      disabled,
      id: idProp,
      name,
      value,
      error,
      onChange,
      onFocus,
      onBlur,
    }: CheckboxProps,
    ref,
  ) {
    const inputNode = useRef<HTMLInputElement>(null);
    const id = useUniqueId('Checkbox', idProp);
    const {
      value: mouseOver,
      setTrue: handleMouseOver,
      setFalse: handleMouseOut,
    } = useToggle(false);
    const [keyFocused, setKeyFocused] = useState(false);

    useImperativeHandle(ref, () => ({
      focus: () => {
        if (inputNode.current) {
          setKeyFocused(true);
          inputNode.current.focus();
        }
      },
    }));

    const handleBlur = () => {
      onBlur && onBlur();
      setKeyFocused(false);
    };

    const handleInput = () => {
      if (onChange == null || inputNode.current == null || disabled) {
        return;
      }
      onChange(!inputNode.current.checked, id);
      inputNode.current.focus();
    };

    const handleKeyUp = (event: React.KeyboardEvent) => {
      const {keyCode} = event;
      !keyFocused && setKeyFocused(true);
      if (keyCode === Key.Space) {
        handleInput();
      }
    };

    const describedBy: string[] = [];
    if (error && typeof error !== 'boolean') {
      describedBy.push(errorTextID(id));
    }
    if (helpText) {
      describedBy.push(helpTextID(id));
    }
    if (ariaDescribedByProp) {
      describedBy.push(ariaDescribedByProp);
    }
    const ariaDescribedBy = describedBy.length
      ? describedBy.join(' ')
      : undefined;

    const wrapperClassName = classNames(styles.Checkbox, error && styles.error);

    const backdropClassName = classNames(
      styles.Backdrop,
      mouseOver && styles.hover,
    );

    const isIndeterminate = checked === 'indeterminate';
    const isChecked = !isIndeterminate && Boolean(checked);

    const indeterminateAttributes = isIndeterminate
      ? {indeterminate: 'true', 'aria-checked': 'mixed' as const}
      : {'aria-checked': isChecked};

    const iconSource = isIndeterminate ? MinusMinor : TickSmallMinor;

    const inputClassName = classNames(
      styles.Input,
      isIndeterminate && styles['Input-indeterminate'],
      keyFocused && styles.keyFocused,
    );

    return (
      /* eslint-disable jsx-a11y/no-redundant-roles */
      <Choice
        id={id}
        label={label}
        labelHidden={labelHidden}
        helpText={helpText}
        error={error}
        disabled={disabled}
        onClick={handleInput}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <span className={wrapperClassName}>
          <input
            onKeyUp={handleKeyUp}
            ref={inputNode}
            id={id}
            name={name}
            value={value}
            type="checkbox"
            checked={isChecked}
            disabled={disabled}
            className={inputClassName}
            onFocus={onFocus}
            onBlur={handleBlur}
            onClick={stopPropagation}
            onChange={noop}
            aria-invalid={error != null}
            aria-describedby={ariaDescribedBy}
            role="checkbox"
            {...indeterminateAttributes}
          />
          <span className={backdropClassName} />
          <span className={styles.Icon}>
            <Icon source={iconSource} />
          </span>
        </span>
      </Choice>
      /* eslint-enable jsx-a11y/no-redundant-roles */
    );
  },
);

function noop() {}

function stopPropagation<E>(event: React.MouseEvent<E>) {
  event.stopPropagation();
}
