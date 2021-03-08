import React from 'react';

import {classNames} from '../../utilities/css';
import {useUniqueId} from '../../utilities/unique-id';
import type {Error} from '../../types';
import {Checkbox} from '../Checkbox';
import {RadioButton} from '../RadioButton';
import {InlineError, errorTextID} from '../InlineError';

import styles from './ChoiceList.scss';

interface Choice<Value extends string = string> {
  /** Value of the choice */
  value: Value;
  /** Label for the choice */
  label: React.ReactNode;
  /** Disable choice */
  disabled?: boolean;
  /** Additional text to aide in use */
  helpText?: React.ReactNode;
  /** Indicates that the choice is aria-describedBy the error message*/
  describedByError?: boolean;
  /**  Method to render children with a choice */
  renderChildren?(isSelected: boolean): React.ReactNode | false;
}

export interface ChoiceListProps<Value extends string = string> {
  /** Label for list of choices */
  title: React.ReactNode;
  /** Collection of choices */
  choices: Choice<Value>[];
  /** Collection of selected choices */
  selected: Value[];
  /** Name for form input */
  name?: string;
  /** Allow merchants to select multiple options at once */
  allowMultiple?: boolean;
  /** Toggles display of the title */
  titleHidden?: boolean;
  /** Display an error message */
  error?: Error;
  /** Disable all choices **/
  disabled?: boolean;
  /** Callback when the selected choices change */
  onChange?(selected: Value[], name: string): void;
}

export function ChoiceList<Value extends string = string>({
  title,
  titleHidden,
  allowMultiple,
  choices,
  selected,
  onChange = noop,
  error,
  disabled = false,
  name: nameProp,
}: ChoiceListProps<Value>) {
  // Type asserting to any is required for TS3.2 but can be removed when we update to 3.3
  // see https://github.com/Microsoft/TypeScript/issues/28768
  const ControlComponent: any = allowMultiple ? Checkbox : RadioButton;

  const name = useUniqueId('ChoiceList', nameProp);
  const finalName = allowMultiple ? `${name}[]` : name;

  const className = classNames(
    styles.ChoiceList,
    titleHidden && styles.titleHidden,
  );

  const titleMarkup = title ? (
    <legend className={styles.Title}>{title}</legend>
  ) : null;

  const choicesMarkup = choices.map((choice) => {
    const {
      value,
      label,
      helpText,
      disabled: choiceDisabled,
      describedByError,
    } = choice;

    function handleChange(checked: boolean) {
      onChange(
        updateSelectedChoices(choice, checked, selected, allowMultiple),
        name,
      );
    }

    const isSelected = choiceIsSelected(choice, selected);
    const renderedChildren = choice.renderChildren
      ? choice.renderChildren(isSelected)
      : null;
    const children = renderedChildren ? (
      <div className={styles.ChoiceChildren}>{renderedChildren}</div>
    ) : null;

    return (
      <li key={value}>
        <ControlComponent
          name={finalName}
          value={value}
          label={label}
          disabled={choiceDisabled || disabled}
          checked={choiceIsSelected(choice, selected)}
          helpText={helpText}
          onChange={handleChange}
          ariaDescribedBy={
            error && describedByError ? errorTextID(finalName) : null
          }
        />
        {children}
      </li>
    );
  });

  const errorMarkup = error && (
    <div className={styles.ChoiceError}>
      <InlineError message={error} fieldID={finalName} />
    </div>
  );

  return (
    <fieldset className={className} id={finalName} aria-invalid={error != null}>
      {titleMarkup}
      <ul className={styles.Choices}>{choicesMarkup}</ul>
      {errorMarkup}
    </fieldset>
  );
}

function noop() {}

function choiceIsSelected<Value extends string = string>(
  {value}: Choice<Value>,
  selected: Value[],
): boolean {
  return selected.includes(value);
}

function updateSelectedChoices<Value extends string = string>(
  {value}: Choice<Value>,
  checked: boolean,
  selected: Value[],
  allowMultiple = false,
): Value[] {
  if (checked) {
    return allowMultiple ? [...selected, value] : [value];
  }

  return selected.filter((selectedChoice) => selectedChoice !== value);
}
