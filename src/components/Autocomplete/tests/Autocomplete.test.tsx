import React from 'react';
import {mountWithApp, ReactTestingElement, CustomRoot} from 'test-utilities';
import {KeypressListener} from 'components';

import {TextField} from '../../TextField';
import {Key, SectionDescriptor} from '../../../types';
import {MappedOption, MappedAction} from '../components';
import {ComboBoxTextFieldContext} from '../../../utilities/combo-box';
import {Autocomplete} from '../Autocomplete';
import {ComboBox} from '../../ComboBox';
import type {ComboBoxProps} from '../../ComboBox';
import {ListBox} from '../../ListBox';

describe('<Autocomplete/>', () => {
  const options = [
    {value: 'cheese_pizza', label: 'Cheese Pizza', id: '1'},
    {value: 'macaroni_pizza', label: 'Macaroni Pizza', id: '2'},
    {value: 'pepperoni_pizza', label: 'Pepperoni Pizza', id: '3'},
  ];
  const defaultProps = {
    options,
    selected: [],
    textField: (
      <ComboBox.TextField label="" onChange={noop} autoComplete="off" />
    ),
    onSelect: noop,
  };

  it('mounts', () => {
    const autocomplete = mountWithApp(
      <Autocomplete
        options={options}
        selected={[]}
        textField={renderTextField()}
        onSelect={noop}
      />,
    );
    expect(autocomplete).toContainReactComponent(ComboBox);
  });

  it('displays a spinner when loading is true', () => {
    const autocomplete = mountWithApp(
      <Autocomplete
        options={options}
        selected={[]}
        textField={renderTextField()}
        onSelect={noop}
        loading
      />,
    );

    triggerFocus(autocomplete.find(ComboBox));

    expect(autocomplete).toContainReactComponent(ListBox.Loading);
  });

  describe('<Combobox />', () => {
    describe('props', () => {
      describe('id', () => {
        // id is a noop in the new implementation - test is to ensure we keep the id prop
        it('does nothing', () => {
          const id = 'unique_id_Jf939sjf8js8NNsJ8';
          const autocomplete = mountWithApp(
            <Autocomplete {...defaultProps} id={id} />,
          );

          expect(autocomplete).not.toContainReactHtml(id);
        });
      });

      describe('options', () => {
        it('renders a ListBox.Option for each option', () => {
          const options = [
            {value: 'cheese_pizza', label: 'Cheese Pizza'},
            {value: 'macaroni_pizza', label: 'Macaroni Pizza'},
            {value: 'pepperoni_pizza', label: 'Pepperoni Pizza'},
            {value: 'other_pizza', label: 'Other Pizza'},
          ];
          const autocomplete = mountWithApp(
            <Autocomplete {...defaultProps} options={options} />,
          );

          triggerFocus(autocomplete.find(ComboBox));

          expect(autocomplete).toContainReactComponentTimes(
            ListBox.Option,
            options.length,
          );
        });

        it('passes selected to ListBox.Option', () => {
          const selected = 'cheese_pizza';
          const options = [
            {value: selected, label: 'Cheese Pizza'},
            {value: 'macaroni_pizza', label: 'Macaroni Pizza'},
            {value: 'pepperoni_pizza', label: 'Pepperoni Pizza'},
            {value: 'other_pizza', label: 'Other Pizza'},
          ];
          const autocomplete = mountWithApp(
            <Autocomplete
              {...defaultProps}
              options={options}
              selected={[selected]}
            />,
          );

          triggerFocus(autocomplete.find(ComboBox));

          expect(autocomplete).toContainReactComponent(MappedOption, {
            ...options[0],
            selected: true,
          });
        });
      });

      describe('selected', () => {
        it('renders selected values on options', () => {
          const selectedOption = {
            value: 'cheese_pizza',
            label: 'Cheese Pizza',
            id: '1',
          };
          const options = [
            selectedOption,
            {value: 'macaroni_pizza', label: 'Macaroni Pizza', id: '2'},
            {value: 'pepperoni_pizza', label: 'Pepperoni Pizza', id: '3'},
            {value: 'other_pizza', label: 'Other Pizza', id: '4'},
          ];
          const autocomplete = mountWithApp(
            <Autocomplete
              {...defaultProps}
              options={options}
              selected={[selectedOption.value]}
            />,
          );

          triggerFocus(autocomplete.find(ComboBox));

          expect(autocomplete).toContainReactComponent(MappedOption, {
            ...selectedOption,
            selected: true,
          });
        });
      });

      describe('textField', () => {
        it('is passed to ComboBox', () => {
          const textField = (
            <ComboBox.TextField
              label="label"
              onChange={noop}
              autoComplete="off"
            />
          );
          const autocomplete = mountWithApp(
            <Autocomplete {...defaultProps} textField={textField} />,
          );

          expect(autocomplete).toContainReactComponent(ComboBox, {
            activator: textField,
          });
        });
      });

      describe('preferredPosition', () => {
        it('is passed to ComboBox', () => {
          const preferredPosition = 'above';
          const autocomplete = mountWithApp(
            <Autocomplete
              {...defaultProps}
              preferredPosition={preferredPosition}
            />,
          );

          expect(autocomplete).toContainReactComponent(ComboBox, {
            preferredPosition,
          });
        });
      });

      describe('listTitle', () => {
        it('renders a ListBoxSection with a ListBoxHeader', () => {
          const listTitle = 'title';
          const autocomplete = mountWithApp(
            <Autocomplete {...defaultProps} listTitle={listTitle} />,
          );

          triggerFocus(autocomplete.find(ComboBox));

          expect(autocomplete).toContainReactComponent(ListBox.Section, {
            divider: false,
          });
        });
      });

      describe('allowMultiple', () => {
        it('is passed to ComboBox', () => {
          const allowMultiple = true;
          const autocomplete = mountWithApp(
            <Autocomplete {...defaultProps} allowMultiple={allowMultiple} />,
          );

          expect(autocomplete).toContainReactComponent(ComboBox, {
            allowMultiple,
          });
        });
      });

      describe('actionBefore', () => {
        it('renders MappedAction', () => {
          const actionBefore = {
            accessibilityLabel: 'label',
            helpText: 'help text',
            image: '',
            prefix: null,
            suffix: null,
            ellipsis: false,
            active: false,
            role: 'option',
            icon: 'icon',
            disabled: false,
            destructive: true,
            badge: {
              status: 'new' as const,
              content: 'new',
            },
          };
          const autocomplete = mountWithApp(
            <Autocomplete {...defaultProps} actionBefore={actionBefore} />,
          );

          triggerFocus(autocomplete.find(ComboBox));

          expect(autocomplete).toContainReactComponent(MappedAction);
        });
      });

      describe('loading', () => {
        it('renders ListBox.Loading', () => {
          const autocomplete = mountWithApp(
            <Autocomplete {...defaultProps} loading />,
          );

          triggerFocus(autocomplete.find(ComboBox));

          expect(autocomplete).toContainReactComponent(ListBox.Loading);
        });
      });

      describe('willLoadMoreResults', () => {
        it('renders options while loading', () => {
          const options = [
            {value: 'cheese_pizza', label: 'Cheese Pizza'},
            {value: 'macaroni_pizza', label: 'Macaroni Pizza'},
            {value: 'pepperoni_pizza', label: 'Pepperoni Pizza'},
            {value: 'other_pizza', label: 'Other Pizza'},
          ];
          const autocomplete = mountWithApp(
            <Autocomplete
              {...defaultProps}
              loading
              willLoadMoreResults
              options={options}
            />,
          );

          triggerFocus(autocomplete.find(ComboBox));

          expect(autocomplete).toContainReactComponentTimes(
            ListBox.Option,
            options.length,
          );
        });
      });

      describe('emptyState', () => {
        function EmptyState() {
          return null;
        }

        it('does not render if an action exists', () => {
          const autocomplete = mountWithApp(
            <Autocomplete
              {...defaultProps}
              actionBefore={{content: 'action'}}
            />,
          );

          triggerFocus(autocomplete.find(ComboBox));

          expect(autocomplete).not.toContainReactComponent(EmptyState);
        });

        it('does not render when options exists', () => {
          const emptyState = <EmptyState />;
          const options = [{value: 'cheese_pizza', label: 'Cheese Pizza'}];
          const autocomplete = mountWithApp(
            <Autocomplete
              {...defaultProps}
              options={options}
              emptyState={emptyState}
            />,
          );

          triggerFocus(autocomplete.find(ComboBox));

          expect(autocomplete).not.toContainReactComponent(EmptyState);
        });

        it('does not render when loading is true', () => {
          const emptyState = <EmptyState />;
          const autocomplete = mountWithApp(
            <Autocomplete {...defaultProps} loading emptyState={emptyState} />,
          );

          triggerFocus(autocomplete.find(ComboBox));

          expect(autocomplete).not.toContainReactComponent(EmptyState);
        });

        it("renders while loading is false and options don't exists", () => {
          const emptyState = <EmptyState />;
          const autocomplete = mountWithApp(
            <Autocomplete
              {...defaultProps}
              loading={false}
              options={[]}
              emptyState={emptyState}
            />,
          );

          triggerFocus(autocomplete.find(ComboBox));

          expect(autocomplete).toContainReactComponent(EmptyState);
        });
      });

      describe('onSelect', () => {
        it('is called when the newly selected value', () => {
          const onSelectSpy = jest.fn();
          const options = [
            {value: 'cheese_pizza', label: 'Cheese Pizza'},
            {value: 'macaroni_pizza', label: 'Macaroni Pizza'},
          ];
          const value = options[0].value;
          const autocomplete = mountWithApp(
            <Autocomplete
              {...defaultProps}
              options={options}
              onSelect={onSelectSpy}
            />,
          );

          triggerFocus(autocomplete.find(ComboBox));
          triggerOnSelect(autocomplete, value);

          expect(onSelectSpy).toHaveBeenLastCalledWith([value]);
        });

        it('is not called with the deselected value when allowMultiple is true', () => {
          const onSelectSpy = jest.fn();
          const options = [
            {value: 'cheese_pizza', label: 'Cheese Pizza'},
            {value: 'macaroni_pizza', label: 'Macaroni Pizza'},
          ];
          const value = options[0].value;
          const autocomplete = mountWithApp(
            <Autocomplete
              {...defaultProps}
              options={options}
              onSelect={onSelectSpy}
              selected={[value]}
              allowMultiple
            />,
          );

          triggerFocus(autocomplete.find(ComboBox));
          triggerOnSelect(autocomplete, value);

          expect(onSelectSpy).toHaveBeenLastCalledWith([]);
        });

        it('is called with multiple values when allowMultiple is true', () => {
          const onSelectSpy = jest.fn();
          const options = [
            {value: 'cheese_pizza', label: 'Cheese Pizza'},
            {value: 'macaroni_pizza', label: 'Macaroni Pizza'},
          ];
          const valueOne = options[0].value;
          const valueTwo = options[1].value;
          const autocomplete = mountWithApp(
            <Autocomplete
              {...defaultProps}
              options={options}
              onSelect={onSelectSpy}
              selected={[valueOne]}
              allowMultiple
            />,
          );

          triggerFocus(autocomplete.find(ComboBox));
          triggerOnSelect(autocomplete, valueTwo);

          expect(onSelectSpy).toHaveBeenLastCalledWith([valueOne, valueTwo]);
        });
      });

      describe('onLoadMoreResults', () => {
        it('is passed to ComboBox', () => {
          const onLoadMoreResults = jest.fn();
          const autocomplete = mountWithApp(
            <Autocomplete
              {...defaultProps}
              onLoadMoreResults={onLoadMoreResults}
            />,
          );

          expect(autocomplete).toContainReactComponent(ComboBox, {
            onScrolledToBottom: onLoadMoreResults,
          });
        });
      });
    });

    it('`Enter` keypress in <Autocomplete/> prevents default to stop `onSubmit` from being called when wrapped in a <form>', () => {
      const preventDefaultSpy = jest.fn();

      const autocomplete = mountWithApp(
        <form>
          <Autocomplete
            options={options}
            selected={[]}
            textField={renderTextField()}
            onSelect={noop}
            loading
          />
        </form>,
      );

      triggerFocus(autocomplete.find(ComboBox));
      autocomplete
        .find(ComboBox.TextField)
        ?.find(TextField)
        ?.trigger('onFocus');
      autocomplete
        .find(KeypressListener, {keyCode: Key.Enter})!
        .trigger('handler', {
          preventDefault: preventDefaultSpy,
          stopPropagation: noop,
        });

      expect(preventDefaultSpy).toHaveBeenCalled();
    });
  });

  describe('loading', () => {
    it('does not render options when loading is true', () => {
      const autocomplete = mountWithApp(
        <Autocomplete
          options={options}
          selected={[]}
          textField={renderTextField()}
          onSelect={noop}
          loading
        />,
      );

      expect(autocomplete).not.toContainReactComponent(ListBox.Option);
    });
  });

  describe('onLoadMoreResults', () => {
    it('gets called when then end of the option list is reached', () => {
      const spy = jest.fn();
      const autocomplete = mountWithApp(
        <Autocomplete
          options={options}
          selected={[]}
          textField={renderTextField()}
          onSelect={noop}
          onLoadMoreResults={spy}
        />,
      );

      autocomplete.find(ComboBox)?.trigger('onScrolledToBottom');

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('Multiple sections', () => {
    const multipleSectionsOptions: SectionDescriptor[] = [
      {
        title: 'Pizzas',
        options: [
          {value: 'cheese_pizza', label: 'Cheese Pizza'},
          {value: 'macaroni_pizza', label: 'Macaroni Pizza'},
        ],
      },
      {
        title: 'Pastas',
        options: [
          {value: 'spaghetti', label: 'Spaghetti'},
          {value: 'conchiglie', label: 'Conchiglie'},
          {value: 'Bucatini', label: 'Bucatini'},
        ],
      },
    ];

    it('renders one ListBox.Option for each option provided on all sections', () => {
      const allOptionsLength = multipleSectionsOptions.reduce(
        (lengthAccumulated, {options}) => {
          return lengthAccumulated + options.length;
        },
        0,
      );

      const autocomplete = mountWithApp(
        <Autocomplete {...defaultProps} options={multipleSectionsOptions} />,
      );

      triggerFocus(autocomplete.find(ComboBox));

      expect(autocomplete).toContainReactComponentTimes(
        ListBox.Option,
        allOptionsLength,
      );
    });

    it('renders one ListBox.Section for each section', () => {
      const autocomplete = mountWithApp(
        <Autocomplete {...defaultProps} options={multipleSectionsOptions} />,
      );

      triggerFocus(autocomplete.find(ComboBox));
      expect(autocomplete).toContainReactComponentTimes(
        ListBox.Section,
        multipleSectionsOptions.length,
      );
    });

    it('does not show section options and title if no options are provided', () => {
      const sectionWithNoOption: SectionDescriptor = {
        title: 'Candies',
        options: [],
      };

      const newOptions = [...multipleSectionsOptions, sectionWithNoOption];

      const autocomplete = mountWithApp(
        <Autocomplete {...defaultProps} options={newOptions} />,
      );

      triggerFocus(autocomplete.find(ComboBox));

      expect(autocomplete).toContainReactComponentTimes(
        ListBox.Section,
        newOptions.length - 1,
      );
    });
  });

  function noop() {}

  function renderTextField() {
    return (
      <Autocomplete.TextField label="" onChange={noop} autoComplete="off" />
    );
  }
});

function triggerFocus(combobox: ReactTestingElement<ComboBoxProps> | null) {
  combobox &&
    combobox
      .find(ComboBoxTextFieldContext.Provider)!
      .triggerKeypath('value.onTextFieldFocus');
}

function triggerOnSelect(
  autocomplete: CustomRoot<unknown, any> | null,
  values: string,
) {
  const listbox = autocomplete!.find(ListBox);
  listbox!.trigger('onSelect', values);
}
