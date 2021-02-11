import React, {
  createElement,
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import {CircleCancelMinor} from '@shopify/polaris-icons';

import {VisuallyHidden} from '../VisuallyHidden';
import {classNames, variationName} from '../../utilities/css';
import {useI18n} from '../../utilities/i18n';
import {useUniqueId} from '../../utilities/unique-id';
import {useIsAfterInitialMount} from '../../utilities/use-is-after-initial-mount';
import {Labelled, LabelledProps, helpTextID, labelID} from '../Labelled';
import {Connected} from '../Connected';
import {Error, Key} from '../../types';
import {Icon} from '../Icon';

import {Resizer, Spinner, SpinnerProps} from './components';
import styles from './TextField.scss';

type Type =
  | 'text'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'url'
  | 'date'
  | 'datetime-local'
  | 'month'
  | 'time'
  | 'week'
  | 'currency';

type Alignment = 'left' | 'center' | 'right';

type InputMode =
  | 'none'
  | 'text'
  | 'decimal'
  | 'numeric'
  | 'tel'
  | 'search'
  | 'email'
  | 'url';

interface NonMutuallyExclusiveProps {
  /** Text to display before value */
  prefix?: React.ReactNode;
  /** Text to display after value */
  suffix?: React.ReactNode;
  /** Hint text to display */
  placeholder?: string;
  /** Initial value for the input */
  value?: string;
  /** Additional hint text to display */
  helpText?: React.ReactNode;
  /** Label for the input */
  label: React.ReactNode;
  /** Adds an action to the label */
  labelAction?: LabelledProps['action'];
  /** Visually hide the label */
  labelHidden?: boolean;
  /** Disable the input */
  disabled?: boolean;
  /** Show a clear text button in the input */
  clearButton?: boolean;
  /** Disable editing of the input */
  readOnly?: boolean;
  /** Automatically focus the input */
  autoFocus?: boolean;
  /** Force the focus state on the input */
  focused?: boolean;
  /** Allow for multiple lines of input */
  multiline?: boolean | number;
  /** Error to display beneath the label */
  error?: Error | boolean;
  /** An element connected to the right of the input */
  connectedRight?: React.ReactNode;
  /** An element connected to the left of the input */
  connectedLeft?: React.ReactNode;
  /** Determine type of input */
  type?: Type;
  /** Name of the input */
  name?: string;
  /** ID for the input */
  id?: string;
  /** Defines a specific role attribute for the input */
  role?: string;
  /** Limit increment value for numeric and date-time inputs */
  step?: number;
  /** Enable automatic completion by the browser */
  autoComplete?: boolean | string;
  /** Mimics the behavior of the native HTML attribute, limiting the maximum value */
  max?: number | string;
  /** Maximum character length for an input */
  maxLength?: number;
  /** Mimics the behavior of the native HTML attribute, limiting the minimum value */
  min?: number | string;
  /** Minimum character length for an input */
  minLength?: number;
  /** A regular expression to check the value against */
  pattern?: string;
  /** Choose the keyboard that should be used on mobile devices */
  inputMode?: InputMode;
  /** Indicate whether value should have spelling checked */
  spellCheck?: boolean;
  /** Indicates the id of a component owned by the input */
  ariaOwns?: string;
  /** Indicates whether or not a Popover is displayed */
  ariaExpanded?: boolean;
  /** Indicates the id of a component controlled by the input */
  ariaControls?: string;
  /** Indicates the id of a related component’s visually focused element to the input */
  ariaActiveDescendant?: string;
  /** Indicates what kind of user input completion suggestions are provided */
  ariaAutocomplete?: string;
  /** Indicates whether or not the character count should be displayed */
  showCharacterCount?: boolean;
  /** Determines the alignment of the text in the input */
  align?: Alignment;
  /** Callback when clear button is clicked */
  onClearButtonClick?(id: string): void;
  /** Callback when value is changed */
  onChange?(value: string, id: string): void;
  /** Callback when input is focused */
  onFocus?(): void;
  /** Callback when focus is removed */
  onBlur?(): void;
}

export type TextFieldProps = NonMutuallyExclusiveProps &
  (
    | {readOnly: true}
    | {disabled: true}
    | {onChange(value: string, id: string): void}
  );

export function TextField({
  prefix,
  suffix,
  placeholder,
  value,
  helpText,
  label,
  labelAction,
  labelHidden,
  disabled,
  clearButton,
  readOnly,
  autoFocus,
  focused,
  multiline,
  error,
  connectedRight,
  connectedLeft,
  type,
  name,
  id: idProp,
  role,
  step,
  autoComplete,
  max,
  maxLength,
  min,
  minLength,
  pattern,
  inputMode,
  spellCheck,
  ariaOwns,
  ariaControls,
  ariaExpanded,
  ariaActiveDescendant,
  ariaAutocomplete,
  showCharacterCount,
  align,
  onClearButtonClick,
  onChange,
  onFocus,
  onBlur,
}: TextFieldProps) {
  const i18n = useI18n();
  const [height, setHeight] = useState<number | null>(null);
  const [focus, setFocus] = useState(Boolean(focused));
  const isAfterInitial = useIsAfterInitialMount();

  const id = useUniqueId('TextField', idProp);

  const inputRef = useRef<HTMLElement>(null);
  const prefixRef = useRef<HTMLDivElement>(null);
  const suffixRef = useRef<HTMLDivElement>(null);
  const buttonPressTimer = useRef<number>();

  useEffect(() => {
    const input = inputRef.current;
    if (!input || focused === undefined) return;
    focused ? input.focus() : input.blur();
  }, [focused]);

  // Use a typeof check here as Typescript mostly protects us from non-stringy
  // values but overzealous usage of `any` in consuming apps means people have
  // been known to pass a number in, so make it clear that doesn't work.
  const normalizedValue = typeof value === 'string' ? value : '';

  const normalizedStep = step != null ? step : 1;
  const normalizedMax = max != null ? max : Infinity;
  const normalizedMin = min != null ? min : -Infinity;

  const className = classNames(
    styles.TextField,
    Boolean(normalizedValue) && styles.hasValue,
    disabled && styles.disabled,
    readOnly && styles.readOnly,
    error && styles.error,
    multiline && styles.multiline,
    focus && styles.focus,
  );

  const inputType = type === 'currency' ? 'text' : type;

  const prefixMarkup = prefix ? (
    <div className={styles.Prefix} id={`${id}Prefix`} ref={prefixRef}>
      {prefix}
    </div>
  ) : null;

  const suffixMarkup = suffix ? (
    <div className={styles.Suffix} id={`${id}Suffix`} ref={suffixRef}>
      {suffix}
    </div>
  ) : null;

  let characterCountMarkup = null;
  if (showCharacterCount) {
    const characterCount = normalizedValue.length;
    const characterCountLabel = maxLength
      ? i18n.translate('Polaris.TextField.characterCountWithMaxLength', {
          count: characterCount,
          limit: maxLength,
        })
      : i18n.translate('Polaris.TextField.characterCount', {
          count: characterCount,
        });

    const characterCountClassName = classNames(
      styles.CharacterCount,
      multiline && styles.AlignFieldBottom,
    );

    const characterCountText = !maxLength
      ? characterCount
      : `${characterCount}/${maxLength}`;

    characterCountMarkup = (
      <div
        id={`${id}CharacterCounter`}
        className={characterCountClassName}
        aria-label={characterCountLabel}
        aria-live={focus ? 'polite' : 'off'}
        aria-atomic="true"
      >
        {characterCountText}
      </div>
    );
  }

  const clearButtonVisible = normalizedValue !== '';
  const clearButtonClassName = classNames(
    styles.ClearButton,
    !clearButtonVisible && styles['ClearButton-hidden'],
  );

  const clearButtonMarkup = clearButton ? (
    <button
      type="button"
      testID="clearButton"
      className={clearButtonClassName}
      onClick={handleClearButtonPress}
      disabled={disabled}
      tabIndex={clearButtonVisible ? 0 : -1}
    >
      <VisuallyHidden>{i18n.translate('Polaris.Common.clear')}</VisuallyHidden>
      <Icon source={CircleCancelMinor} color="base" />
    </button>
  ) : null;

  const handleNumberChange = useCallback(
    (steps: number) => {
      if (onChange == null) {
        return;
      }
      // Returns the length of decimal places in a number
      const dpl = (num: number) => (num.toString().split('.')[1] || []).length;

      const numericValue = value ? parseFloat(value) : 0;
      if (isNaN(numericValue)) {
        return;
      }

      // Making sure the new value has the same length of decimal places as the
      // step / value has.
      const decimalPlaces = Math.max(dpl(numericValue), dpl(normalizedStep));

      const newValue = Math.min(
        Number(normalizedMax),
        Math.max(numericValue + steps * normalizedStep, Number(normalizedMin)),
      );

      onChange(String(newValue.toFixed(decimalPlaces)), id);
    },
    [id, normalizedMax, normalizedMin, onChange, normalizedStep, value],
  );

  const handleButtonRelease = useCallback(() => {
    clearTimeout(buttonPressTimer.current);
  }, []);

  const handleButtonPress: SpinnerProps['onMouseDown'] = useCallback(
    (onChange) => {
      const minInterval = 50;
      const decrementBy = 10;
      let interval = 200;

      const onChangeInterval = () => {
        if (interval > minInterval) interval -= decrementBy;
        onChange(0);
        buttonPressTimer.current = window.setTimeout(
          onChangeInterval,
          interval,
        );
      };

      buttonPressTimer.current = window.setTimeout(onChangeInterval, interval);

      document.addEventListener('mouseup', handleButtonRelease, {
        once: true,
      });
    },
    [handleButtonRelease],
  );

  const spinnerMarkup =
    type === 'number' && step !== 0 && !disabled && !readOnly ? (
      <Spinner
        onChange={handleNumberChange}
        onMouseDown={handleButtonPress}
        onMouseUp={handleButtonRelease}
      />
    ) : null;

  const style = multiline && height ? {height} : null;

  const handleExpandingResize = useCallback((height: number) => {
    setHeight(height);
  }, []);

  const resizer =
    multiline && isAfterInitial ? (
      <Resizer
        contents={normalizedValue || placeholder}
        currentHeight={height}
        minimumLines={typeof multiline === 'number' ? multiline : 1}
        onHeightChange={handleExpandingResize}
      />
    ) : null;

  const describedBy: string[] = [];
  if (error) {
    describedBy.push(`${id}Error`);
  }
  if (helpText) {
    describedBy.push(helpTextID(id));
  }
  if (showCharacterCount) {
    describedBy.push(`${id}CharacterCounter`);
  }

  const labelledBy: string[] = [];

  if (prefix) {
    labelledBy.push(`${id}Prefix`);
  }

  if (suffix) {
    labelledBy.push(`${id}Suffix`);
  }

  labelledBy.unshift(labelID(id));

  const inputClassName = classNames(
    styles.Input,
    align && styles[variationName('Input-align', align)],
    suffix && styles['Input-suffixed'],
    clearButton && styles['Input-hasClearButton'],
  );

  const input = createElement(multiline ? 'textarea' : 'input', {
    name,
    id,
    disabled,
    readOnly,
    role,
    autoFocus,
    value: normalizedValue,
    placeholder,
    onFocus,
    onBlur,
    onKeyPress: handleKeyPress,
    style,
    autoComplete: normalizeAutoComplete(autoComplete),
    className: inputClassName,
    onChange: handleChange,
    ref: inputRef,
    min,
    max,
    step,
    minLength,
    maxLength,
    spellCheck,
    pattern,
    inputMode,
    type: inputType,
    'aria-describedby': describedBy.length ? describedBy.join(' ') : undefined,
    'aria-labelledby': labelledBy.join(' '),
    'aria-invalid': Boolean(error),
    'aria-owns': ariaOwns,
    'aria-activedescendant': ariaActiveDescendant,
    'aria-autocomplete': ariaAutocomplete,
    'aria-controls': ariaControls,
    'aria-expanded': ariaExpanded,
    ...normalizeAriaMultiline(multiline),
  });

  const backdropClassName = classNames(
    styles.Backdrop,
    connectedLeft && styles['Backdrop-connectedLeft'],
    connectedRight && styles['Backdrop-connectedRight'],
  );

  return (
    <Labelled
      label={label}
      id={id}
      error={error}
      action={labelAction}
      labelHidden={labelHidden}
      helpText={helpText}
    >
      <Connected left={connectedLeft} right={connectedRight}>
        <div
          className={className}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={handleClick}
        >
          {prefixMarkup}
          {input}
          {suffixMarkup}
          {characterCountMarkup}
          {clearButtonMarkup}
          {spinnerMarkup}
          <div className={backdropClassName} />
          {resizer}
        </div>
      </Connected>
    </Labelled>
  );

  function handleClearButtonPress() {
    if (onClearButtonClick) {
      onClearButtonClick(id);
    } else if (onChange) {
      onChange('', id);
    }
  }

  function handleKeyPress(event: React.KeyboardEvent) {
    const {key, which} = event;
    const numbersSpec = /[\d.eE+-]$/;
    if (type !== 'number' || which === Key.Enter || numbersSpec.test(key)) {
      return;
    }
    event.preventDefault();
  }

  function containsAffix(target: HTMLElement | EventTarget) {
    return (
      target instanceof HTMLElement &&
      ((prefixRef.current && prefixRef.current.contains(target)) ||
        (suffixRef.current && suffixRef.current.contains(target)))
    );
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange && onChange(event.currentTarget.value, id);
  }

  function handleFocus({target}: React.FocusEvent) {
    if (containsAffix(target)) {
      return;
    }
    setFocus(true);
  }

  function handleBlur() {
    setFocus(false);
  }

  function handleClick({target}: React.MouseEvent) {
    if (containsAffix(target)) {
      return;
    }
    inputRef.current && inputRef.current.focus();
  }
}

function normalizeAutoComplete(autoComplete?: boolean | string) {
  if (autoComplete === true) {
    return 'on';
  } else if (autoComplete === false) {
    return 'off';
  } else {
    return autoComplete;
  }
}

function normalizeAriaMultiline(multiline?: boolean | number) {
  if (!multiline) return undefined;

  return Boolean(multiline) || multiline > 0
    ? {'aria-multiline': true}
    : undefined;
}
