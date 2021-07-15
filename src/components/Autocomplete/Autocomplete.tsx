import React, {useMemo, useCallback} from 'react';
import type {
  ActionListItemDescriptor,
  Descriptor,
  OptionDescriptor,
} from 'types';

import type {PopoverProps} from '../Popover';
import {isSection} from '../../utilities/options';
import {useI18n} from '../../utilities/i18n';
import {ComboBox} from '../ComboBox';
import {ListBox} from '../ListBox';

import {MappedAction, MappedOption} from './components';
import styles from './Autocomplete.scss';

export interface AutocompleteProps {
  /** A unique identifier for the Autocomplete */
  id?: string;
  /** Collection of options to be listed */
  options: Descriptor[];
  /** The selected options */
  selected: string[];
  /** The text field component attached to the list of options */
  textField: React.ReactElement;
  /** The preferred direction to open the popover */
  preferredPosition?: PopoverProps['preferredPosition'];
  /** Title of the list of options */
  listTitle?: string;
  /** Allow more than one option to be selected */
  allowMultiple?: boolean;
  /** An action to render above the list of options */
  actionBefore?: ActionListItemDescriptor;
  /** Display loading state */
  loading?: boolean;
  /** Indicates if more results will load dynamically */
  willLoadMoreResults?: boolean;
  /** Is rendered when there are no options */
  emptyState?: React.ReactNode;
  /** Callback when the selection of options is changed */
  onSelect(selected: string[]): void;
  /** Callback when the end of the list is reached */
  onLoadMoreResults?(): void;
}

// TypeScript can't generate types that correctly infer the typing of
// subcomponents so explicitly state the subcomponents in the type definition.
// Letting this be implicit works in this project but fails in projects that use
// generated *.d.ts files.

export const Autocomplete: React.FunctionComponent<AutocompleteProps> & {
  TextField: typeof ComboBox.TextField;
} = function Autocomplete({
  options,
  selected,
  textField,
  preferredPosition,
  listTitle,
  allowMultiple,
  loading,
  actionBefore,
  willLoadMoreResults,
  emptyState,
  onSelect,
  onLoadMoreResults,
}: AutocompleteProps) {
  const i18n = useI18n();

  const optionsMarkup = useMemo(() => {
    const conditionalOptions = loading && !willLoadMoreResults ? [] : options;

    if (isSection(conditionalOptions)) {
      const noOptionsAvailable = conditionalOptions.every(
        ({options}) => options.length === 0,
      );

      if (noOptionsAvailable) {
        return null;
      }

      const optionsMarkup = conditionalOptions.map(({options, title}) => {
        if (options.length === 0) {
          return null;
        }

        const optionMarkup = options.map((opt) => (
          <MappedOption
            {...opt}
            key={opt.id || opt.value}
            selected={selected.includes(opt.value)}
            singleSelection={!allowMultiple}
          />
        ));

        return (
          <ListBox.Section
            divider={false}
            title={<ListBox.Header>{title}</ListBox.Header>}
            key={title}
          >
            {optionMarkup}
          </ListBox.Section>
        );
      });

      return <div className={styles.SectionWrapper}>{optionsMarkup}</div>;
    }

    const optionList =
      conditionalOptions.length > 0
        ? (conditionalOptions as OptionDescriptor[]).map((option) => (
            <MappedOption
              {...option}
              key={option.id || option.value}
              selected={selected.includes(option.value)}
              singleSelection={!allowMultiple}
            />
          ))
        : null;

    if (listTitle) {
      return (
        <ListBox.Section
          divider={false}
          title={<ListBox.Header>{listTitle}</ListBox.Header>}
        >
          {optionList}
        </ListBox.Section>
      );
    }

    return optionList;
  }, [
    listTitle,
    loading,
    options,
    willLoadMoreResults,
    allowMultiple,
    selected,
  ]);

  const loadingMarkup = loading ? (
    <ListBox.Loading
      accessibilityLabel={i18n.translate(
        'Polaris.Autocomplete.spinnerAccessibilityLabel',
      )}
    />
  ) : null;

  const updateSelection = useCallback(
    (newSelection: string) => {
      if (allowMultiple) {
        if (selected.includes(newSelection)) {
          onSelect(selected.filter((option) => option !== newSelection));
        } else {
          onSelect([...selected, newSelection]);
        }
      } else {
        onSelect([newSelection]);
      }
    },
    [allowMultiple, onSelect, selected],
  );

  const actionMarkup = actionBefore && <MappedAction {...actionBefore} />;

  const emptyStateMarkup = emptyState && options.length < 1 && !loading && (
    <div role="status">{emptyState}</div>
  );

  return (
    <ComboBox
      activator={textField}
      allowMultiple={allowMultiple}
      onScrolledToBottom={onLoadMoreResults}
      preferredPosition={preferredPosition}
    >
      {actionMarkup || optionsMarkup || loadingMarkup || emptyStateMarkup ? (
        <ListBox onSelect={updateSelection}>
          {actionMarkup}
          {optionsMarkup && (!loading || willLoadMoreResults)
            ? optionsMarkup
            : null}
          {loadingMarkup}
          {emptyStateMarkup}
        </ListBox>
      ) : null}
    </ComboBox>
  );
};

Autocomplete.TextField = ComboBox.TextField;
