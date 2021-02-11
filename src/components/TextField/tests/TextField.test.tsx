import React from 'react';
// eslint-disable-next-line no-restricted-imports
import {mountWithAppProvider, findByTestID} from 'test-utilities/legacy';
import {InlineError, Labelled, Connected, Select} from 'components';
import {mountWithApp} from 'test-utilities';

import {Resizer, Spinner} from '../components';
import {TextField} from '../TextField';

describe('<TextField />', () => {
  it('allows specific props to pass through properties on the input', () => {
    const pattern = '\\d\\d';
    const inputMode = 'numeric';
    const input = mountWithAppProvider(
      <TextField
        label="TextField"
        disabled
        readOnly={false}
        onChange={noop}
        autoFocus
        name="TextField"
        placeholder="A placeholder"
        value="Some value"
        min={20}
        max={50}
        minLength={2}
        maxLength={2}
        spellCheck={false}
        pattern={pattern}
        inputMode={inputMode}
        align="left"
      />,
    ).find('input');

    expect(input.prop('disabled')).toBe(true);
    expect(input.prop('readOnly')).toBe(false);
    expect(input.prop('autoFocus')).toBe(true);
    expect(input.prop('name')).toBe('TextField');
    expect(input.prop('placeholder')).toBe('A placeholder');
    expect(input.prop('value')).toBe('Some value');
    expect(input.prop('min')).toBe(20);
    expect(input.prop('max')).toBe(50);
    expect(input.prop('minLength')).toBe(2);
    expect(input.prop('maxLength')).toBe(2);
    expect(input.prop('spellCheck')).toBe(false);
    expect(input.prop('pattern')).toBe(pattern);
    expect(input.prop('inputMode')).toBe(inputMode);
  });

  it('blocks props not listed as component props to pass on the input', () => {
    const input = mountWithAppProvider(
      <TextField
        label="TextField"
        disabled
        readOnly={false}
        onChange={noop}
        name="TextField"
        placeholder="A placeholder"
        value="Some value"
        prefix="test-prefix"
      />,
    ).find('input');

    expect(input.prop('prefix')).toBeUndefined();
  });

  it('always has an `aria-labelledby` property', () => {
    const textField = mountWithAppProvider(
      <TextField label="TextField" onChange={noop} />,
    );
    const property = textField.find('input').prop('aria-labelledby');

    expect(property).not.toHaveLength(0);
  });

  describe('onChange()', () => {
    it('is called with the new value', () => {
      const spy = jest.fn();
      const element = mountWithAppProvider(
        <TextField id="MyTextField" label="TextField" onChange={spy} />,
      );
      (element.find('input') as any).instance().value = 'two';
      element.find('input').simulate('change');
      expect(spy).toHaveBeenCalledWith('two', 'MyTextField');
    });
  });

  describe('onFocus()', () => {
    it('is called when the input is focused', () => {
      const spy = jest.fn();
      mountWithApp(
        <TextField label="TextField" onFocus={spy} onChange={noop} />,
      )
        .find('input')!
        .trigger('onFocus');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('onBlur()', () => {
    it('is called when the input is blurred', () => {
      const spy = jest.fn();
      const element = mountWithAppProvider(
        <TextField label="TextField" onBlur={spy} onChange={noop} />,
      );
      element.find('input').simulate('focus');
      element.find('input').simulate('blur');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('id', () => {
    it('sets the id on the input', () => {
      const id = mountWithAppProvider(
        <TextField label="TextField" id="MyField" onChange={noop} />,
      )
        .find('input')
        .prop('id');
      expect(id).toBe('MyField');
    });

    it('sets a random id on the input when none is passed', () => {
      const id = mountWithAppProvider(
        <TextField label="TextField" onChange={noop} />,
      )
        .find('input')
        .prop('id');
      expect(typeof id).toBe('string');
      expect(id).toBeTruthy();
    });

    it('updates with the new id from props', () => {
      const id = 'input field';
      const textField = mountWithAppProvider(
        <TextField label="TextField" onChange={noop} />,
      );
      textField.setProps({id});
      expect(textField.find('input').prop('id')).toBe(id);
    });

    it('updates with the previous id after the id prop has been removed', () => {
      const id = 'input field';
      const textField = mountWithAppProvider(
        <TextField label="TextField" id={id} onChange={noop} />,
      );
      textField.setProps({});
      expect(textField.find('input').prop('id')).toBe(id);
    });
  });

  describe('focused', () => {
    it('input is in focus state if focused is true', () => {
      const element = mountWithApp(
        <TextField label="TextField" onChange={noop} focused />,
      );

      expect(document.activeElement).toBe(element.find('input')!.domNode);
    });

    it('focuses input if focused is toggled', () => {
      const element = mountWithApp(
        <TextField label="TextField" onChange={noop} />,
      );

      element.setProps({focused: true});

      expect(document.activeElement).toBe(element.find('input')!.domNode);
    });

    it('blurs input if focused is toggled', () => {
      const element = mountWithApp(
        <TextField label="TextField" onChange={noop} focused />,
      );

      element.setProps({focused: false});

      expect(document.activeElement).not.toBe(element.find('input')!.domNode);
    });
  });

  describe('autoComplete', () => {
    it('defaults to no autoComplete attribute', () => {
      const textField = mountWithAppProvider(
        <TextField label="TextField" onChange={noop} />,
      );
      expect(textField.find('input').prop('autoComplete')).toBeUndefined();
    });

    it('sets autoComplete to "off" when false', () => {
      const textField = mountWithAppProvider(
        <TextField label="TextField" autoComplete={false} onChange={noop} />,
      );
      expect(textField.find('input').prop('autoComplete')).toBe('off');
    });

    it('sets autoComplete to "on" when false', () => {
      const textField = mountWithAppProvider(
        <TextField label="TextField" autoComplete onChange={noop} />,
      );
      expect(textField.find('input').prop('autoComplete')).toBe('on');
    });

    it('sets autoComplete to string value when string is given', () => {
      const textField = mountWithAppProvider(
        <TextField
          label="TextField"
          autoComplete="firstName"
          onChange={noop}
        />,
      );
      expect(textField.find('input').prop('autoComplete')).toBe('firstName');
    });
  });

  describe('helpText', () => {
    it('connects the input to the help text', () => {
      const textField = mountWithAppProvider(
        <TextField label="TextField" helpText="Some help" onChange={noop} />,
      );
      const helpTextID = textField
        .find('input')
        .prop<string>('aria-describedby');
      expect(typeof helpTextID).toBe('string');
      expect(textField.find(`#${helpTextID}`).text()).toBe('Some help');
    });
  });

  describe('error', () => {
    it('marks the input as invalid', () => {
      const textField = mountWithAppProvider(
        <TextField
          error={<span>Invalid</span>}
          label="TextField"
          onChange={noop}
        />,
      );
      expect(textField.find('input').prop<string>('aria-invalid')).toBe(true);

      textField.setProps({error: 'Some error'});
      expect(textField.find('input').prop<string>('aria-invalid')).toBe(true);
    });

    it('connects the input to the error', () => {
      const textField = mountWithAppProvider(
        <TextField label="TextField" error="Some error" onChange={noop} />,
      );
      const errorID = textField.find('input').prop<string>('aria-describedby');
      expect(typeof errorID).toBe('string');
      expect(textField.find(`#${errorID}`).text()).toBe('Some error');
    });

    it('connects the input to an error rendered separately', () => {
      const errorMessage = 'Some error';
      const textFieldID = 'collectionRuleType';
      const fieldGroup = mountWithAppProvider(
        <div>
          <TextField
            error={Boolean(errorMessage)}
            id={textFieldID}
            label="textField"
            onChange={noop}
          />
          <InlineError message={errorMessage} fieldID={textFieldID} />
        </div>,
      );

      const textField = fieldGroup.find(TextField).first();
      const errorID = textField.find('input').prop<string>('aria-describedby');

      expect(textField.find('input').prop('aria-invalid')).toBe(true);
      expect(typeof errorID).toBe('string');
      expect(fieldGroup.find(`#${errorID}`).text()).toBe('Some error');
    });

    it('connects the input to both an error and help text', () => {
      const textField = mountWithAppProvider(
        <TextField
          label="TextField"
          error="Some error"
          helpText="Some help"
          onChange={noop}
        />,
      );
      const descriptions = textField
        .find('input')
        .prop<string>('aria-describedby')
        .split(' ');
      expect(descriptions).toHaveLength(2);
      expect(textField.find(`#${descriptions[0]}`).text()).toBe('Some error');
      expect(textField.find(`#${descriptions[1]}`).text()).toBe('Some help');
    });

    it('only renders error markup when not a boolean', () => {
      const textField = mountWithAppProvider(
        <TextField
          error
          label="TextField"
          helpText="Some help"
          onChange={noop}
        />,
      );

      expect(textField.find(InlineError)).toHaveLength(0);

      textField.setProps({error: 'Some error'});
      expect(textField.find(InlineError)).toHaveLength(1);
    });
  });

  describe('prefix', () => {
    it('connects the input to the prefix and label', () => {
      const textField = mountWithAppProvider(
        <TextField label="TextField" prefix="$" onChange={noop} />,
      );
      const labels = textField
        .find('input')
        .prop<string>('aria-labelledby')
        .split(' ');
      expect(labels).toHaveLength(2);
      expect(textField.find(`#${labels[0]}`).text()).toBe('TextField');
      expect(textField.find(`#${labels[1]}`).text()).toBe('$');
    });

    it('connects the input to the prefix, suffix, and label', () => {
      const textField = mountWithAppProvider(
        <TextField label="TextField" prefix="$" suffix=".00" onChange={noop} />,
      );
      const labels = textField
        .find('input')
        .prop<string>('aria-labelledby')
        .split(' ');
      expect(labels).toHaveLength(3);
      expect(textField.find(`#${labels[0]}`).text()).toBe('TextField');
      expect(textField.find(`#${labels[1]}`).text()).toBe('$');
      expect(textField.find(`#${labels[2]}`).text()).toBe('.00');
    });

    it('does not set focus `onClick` for the <input /> if the `target` is the `prefix`', () => {
      const onClickSpy = jest.fn();
      const mockButtonId = 'MockPrefix';
      const mockPrefixButton = (
        <button id={mockButtonId} onClick={onClickSpy} />
      );
      const textField = mountWithAppProvider(
        <TextField
          label="TextField"
          prefix={mockPrefixButton}
          onChange={noop}
        />,
      );

      textField.find(`#${mockButtonId}`).simulate('click');

      expect(onClickSpy).toHaveBeenCalled();
      expect(textField.getDOMNode().querySelector('input')).not.toBe(
        document.activeElement,
      );
    });

    it('does not set focus `onFocus` for the <input /> if the `target` is the `prefix`', () => {
      const mockButtonId = 'MockPrefix';
      const mockPrefixButton = <button id={mockButtonId} onClick={noop} />;
      const textField = mountWithAppProvider(
        <TextField
          label="TextField"
          prefix={mockPrefixButton}
          onChange={noop}
        />,
      );

      textField.find(`#${mockButtonId}`).simulate('focus');

      const connectedInteriorWrapper = textField
        .find(Connected)
        .find('div')
        .first();

      expect(connectedInteriorWrapper.hasClass('focus')).toBe(false);
    });
  });

  describe('suffix', () => {
    it('connects the input to the suffix and label', () => {
      const textField = mountWithAppProvider(
        <TextField label="TextField" suffix="kg" onChange={noop} />,
      );
      const labels = textField
        .find('input')
        .prop<string>('aria-labelledby')
        .split(' ');
      expect(labels).toHaveLength(2);
      expect(textField.find(`#${labels[0]}`).text()).toBe('TextField');
      expect(textField.find(`#${labels[1]}`).text()).toBe('kg');
    });

    it('does not set focus `onClick` for the <input /> if the `target` is the `suffix`', () => {
      const onClickSpy = jest.fn();
      const mockButtonId = 'MockSuffix';
      const mockSuffixButton = (
        <button id={mockButtonId} onClick={onClickSpy} />
      );
      const textField = mountWithAppProvider(
        <TextField
          label="TextField"
          suffix={mockSuffixButton}
          onChange={noop}
        />,
      );

      textField.find(`#${mockButtonId}`).simulate('click');

      expect(onClickSpy).toHaveBeenCalled();
      expect(textField.getDOMNode().querySelector('input')).not.toBe(
        document.activeElement,
      );
    });

    it('does not set focus `onFocus` for the <input /> if the `target` is the `suffix`', () => {
      const mockButtonId = 'MockSuffix';
      const mockSuffixButton = <button id={mockButtonId} onClick={noop} />;
      const textField = mountWithAppProvider(
        <TextField
          label="TextField"
          suffix={mockSuffixButton}
          onChange={noop}
        />,
      );

      textField.find(`#${mockButtonId}`).simulate('focus');

      const connectedInteriorWrapper = textField
        .find(Connected)
        .find('div')
        .first();

      expect(connectedInteriorWrapper.hasClass('focus')).toBe(false);
    });
  });

  describe('characterCount', () => {
    it('displays number of characters entered in input field', () => {
      const textField = mountWithAppProvider(
        <TextField
          value="test"
          showCharacterCount
          label="TextField"
          id="MyField"
          onChange={noop}
        />,
      );

      const characterCount = textField.find('#MyFieldCharacterCounter');

      expect(characterCount.text()).toBe('4');
    });

    it('displays remaining characters as fraction in input field with maxLength', () => {
      const textField = mountWithAppProvider(
        <TextField
          value="test"
          maxLength={10}
          showCharacterCount
          label="TextField"
          id="MyField"
          onChange={noop}
        />,
      );

      const characterCount = textField.find('#MyFieldCharacterCounter');

      expect(characterCount.text()).toBe('4/10');
    });

    it('announces updated character count only when input field is in focus', () => {
      const textField = mountWithAppProvider(
        <TextField
          value="test"
          showCharacterCount
          label="TextField"
          id="MyField"
          onChange={noop}
        />,
      );

      expect(textField.find('#MyFieldCharacterCounter').prop('aria-live')).toBe(
        'off',
      );

      textField.find('input').simulate('focus');
      expect(textField.find('#MyFieldCharacterCounter').prop('aria-live')).toBe(
        'polite',
      );
    });
  });

  describe('type', () => {
    it('sets the type on the input', () => {
      const type = mountWithAppProvider(
        <TextField label="TextField" type="email" onChange={noop} />,
      )
        .find('input')
        .prop('type');
      expect(type).toBe('email');
    });

    describe('number', () => {
      it('adds an increment button that increases the value', () => {
        const spy = jest.fn();
        const element = mountWithAppProvider(
          <TextField
            id="MyTextField"
            label="TextField"
            type="number"
            value="3"
            onChange={spy}
          />,
        );
        element.find('[role="button"]').first().simulate('click');
        expect(spy).toHaveBeenCalledWith('4', 'MyTextField');
      });

      it('adds a decrement button that increases the value', () => {
        const spy = jest.fn();
        const element = mountWithAppProvider(
          <TextField
            id="MyTextField"
            label="TextField"
            type="number"
            value="3"
            onChange={spy}
          />,
        );
        element.find('[role="button"]').last().simulate('click');
        expect(spy).toHaveBeenCalledWith('2', 'MyTextField');
      });

      it('does not call the onChange if the value is not a number', () => {
        const spy = jest.fn();
        const element = mountWithApp(
          <TextField
            id="MyTextField"
            label="TextField"
            type="number"
            value="not a number"
            onChange={spy}
          />,
        );

        element!
          .find('div', {
            role: 'button',
          })!
          .trigger('onClick');

        expect(spy).not.toHaveBeenCalled();
      });

      it('handles incrementing from no value', () => {
        const spy = jest.fn();
        const element = mountWithAppProvider(
          <TextField
            id="MyTextField"
            label="TextField"
            type="number"
            onChange={spy}
          />,
        );
        element.find('[role="button"]').first().simulate('click');
        expect(spy).toHaveBeenCalledWith('1', 'MyTextField');
      });

      it('passes the step prop to the input', () => {
        const element = mountWithAppProvider(
          <TextField
            id="MyTextField"
            label="TextField"
            type="number"
            step={6}
            value="4"
            onChange={noop}
          />,
        );
        expect(element.find('input').prop('step')).toBe(6);
      });

      it('uses the step prop when incrementing', () => {
        const spy = jest.fn();
        const element = mountWithAppProvider(
          <TextField
            id="MyTextField"
            label="TextField"
            type="number"
            step={0.5}
            value="1.25"
            onChange={spy}
          />,
        );
        element.find('[role="button"]').first().simulate('click');
        expect(spy).toHaveBeenCalledWith('1.75', 'MyTextField');
      });

      it('respects a min value', () => {
        const spy = jest.fn();
        const element = mountWithAppProvider(
          <TextField
            id="MyTextField"
            label="TextField"
            type="number"
            min={2}
            value="2"
            onChange={spy}
          />,
        );

        element.find('[role="button"]').last().simulate('click');
        expect(spy).toHaveBeenLastCalledWith('2', 'MyTextField');

        element.find('[role="button"]').first().simulate('click');
        expect(spy).toHaveBeenLastCalledWith('3', 'MyTextField');
      });

      it('respects a max value', () => {
        const spy = jest.fn();
        const element = mountWithAppProvider(
          <TextField
            id="MyTextField"
            label="TextField"
            type="number"
            max={2}
            value="2"
            onChange={spy}
          />,
        );

        element.find('[role="button"]').first().simulate('click');
        expect(spy).toHaveBeenLastCalledWith('2', 'MyTextField');

        element.find('[role="button"]').last().simulate('click');
        expect(spy).toHaveBeenLastCalledWith('1', 'MyTextField');
      });

      it('brings an invalid value up to the min', () => {
        const spy = jest.fn();
        const element = mountWithAppProvider(
          <TextField
            id="MyTextField"
            label="TextField"
            type="number"
            min={2}
            value="-1"
            onChange={spy}
          />,
        );

        element.find('[role="button"]').first().simulate('click');
        expect(spy).toHaveBeenLastCalledWith('2', 'MyTextField');

        element.find('[role="button"]').last().simulate('click');
        expect(spy).toHaveBeenLastCalledWith('2', 'MyTextField');
      });

      it('brings an invalid value down to the max', () => {
        const spy = jest.fn();
        const element = mountWithAppProvider(
          <TextField
            id="MyTextField"
            label="TextField"
            type="number"
            max={2}
            value="12"
            onChange={spy}
          />,
        );

        element.find('[role="button"]').first().simulate('click');
        expect(spy).toHaveBeenLastCalledWith('2', 'MyTextField');

        element.find('[role="button"]').last().simulate('click');
        expect(spy).toHaveBeenLastCalledWith('2', 'MyTextField');
      });

      it('removes increment and decrement buttons when disabled', () => {
        const element = mountWithAppProvider(
          <TextField
            id="MyNumberField"
            label="NumberField"
            type="number"
            disabled
          />,
        );
        const buttons = element.find('[role="button"]');
        expect(buttons).toHaveLength(0);
      });

      it('removes increment and decrement buttons when readOnly', () => {
        const element = mountWithAppProvider(
          <TextField
            id="MyNumberField"
            label="NumberField"
            type="number"
            readOnly
          />,
        );
        expect(element.find(Spinner)).toHaveLength(0);
      });

      it('removes spinner buttons when type is number and step is 0', () => {
        const spy = jest.fn();
        const element = mountWithAppProvider(
          <TextField
            id="MyNumberField"
            label="NumberField"
            type="number"
            step={0}
            onChange={spy}
          />,
        );
        expect(element.find(Spinner)).toHaveLength(0);
      });

      it('increments by step when value, step, or both are float numbers', () => {
        const spy = jest.fn();
        const element = mountWithAppProvider(
          <TextField
            id="MyTextField"
            label="TextField"
            type="number"
            value="3.02"
            step={1.044}
            onChange={spy}
          />,
        );
        element.find('[role="button"]').first().simulate('click');
        expect(spy).toHaveBeenCalledWith('4.064', 'MyTextField');
      });

      it('decrements by step when value, step, or both are float numbers', () => {
        const spy = jest.fn();
        const element = mountWithAppProvider(
          <TextField
            id="MyTextField"
            label="TextField"
            type="number"
            value="3.02"
            step={1.044}
            onChange={spy}
          />,
        );
        element.find('[role="button"]').last().simulate('click');
        expect(spy).toHaveBeenCalledWith('1.976', 'MyTextField');
      });

      it('decrements on mouse down', () => {
        jest.useFakeTimers();
        const spy = jest.fn();
        const element = mountWithAppProvider(
          <TextField
            id="MyTextField"
            label="TextField"
            type="number"
            value="3"
            onChange={spy}
          />,
        );
        element
          .find('[role="button"]')
          .last()
          .simulate('mousedown', {button: 0});

        jest.runOnlyPendingTimers();
        expect(spy).toHaveBeenCalledWith('2', 'MyTextField');
      });

      it('stops decrementing on mouse up', () => {
        jest.useFakeTimers();
        const spy = jest.fn();
        const element = mountWithAppProvider(
          <TextField
            id="MyTextField"
            label="TextField"
            type="number"
            value="3"
            onChange={spy}
          />,
        );
        element
          .find('[role="button"]')
          .last()
          .simulate('mousedown', {button: 0});
        element.find('[role="button"]').last().simulate('mouseup');

        jest.runOnlyPendingTimers();
        expect(spy).not.toHaveBeenCalled();
      });

      describe('document events', () => {
        type EventCallback = (mockEventData?: {[key: string]: any}) => void;

        const documentEvent: {[eventType: string]: EventCallback} = {};

        beforeAll(() => {
          jest
            .spyOn(document, 'addEventListener')
            .mockImplementation(
              (eventType: string, callback: EventCallback) => {
                documentEvent[eventType] = callback;
              },
            );
        });

        afterAll(() => {
          (document.addEventListener as jest.Mock).mockRestore();
        });

        it('stops decrementing on mouse up anywhere in document', () => {
          jest.useFakeTimers();
          const spy = jest.fn();
          const element = mountWithAppProvider(
            <TextField
              id="MyTextField"
              label="TextField"
              type="number"
              value="3"
              onChange={spy}
            />,
          );
          element
            .find('[role="button"]')
            .last()
            .simulate('mousedown', {button: 0});
          documentEvent.mouseup();

          jest.runOnlyPendingTimers();
          expect(spy).not.toHaveBeenCalled();
        });
      });
    });
  });

  describe('multiline', () => {
    it('does not render a resizer if `multiline` is false', () => {
      const textField = mountWithAppProvider(
        <TextField label="TextField" id="MyField" onChange={noop} />,
      );
      expect(textField.find(Resizer).exists()).toBe(false);
    });

    it('renders a resizer with `minimumLines` set to 1 if `multiline` is true', () => {
      const textField = mountWithApp(
        <TextField label="TextField" id="MyField" onChange={noop} multiline />,
      );
      expect(textField).toContainReactComponentTimes(Resizer, 1, {
        minimumLines: 1,
      });
    });

    it('renders a resizer with `minimumLines` set to the `multiline` numeric value', () => {
      const textField = mountWithApp(
        <TextField
          label="TextField"
          id="MyField"
          onChange={noop}
          multiline={5}
        />,
      );

      expect(textField).toContainReactComponentTimes(Resizer, 1, {
        minimumLines: 5,
      });
    });

    it('passes the `placeholder` to the resizer `contents` prop', () => {
      const placeholderText = 'placeholder text';
      const textField = mountWithApp(
        <TextField
          label="TextField"
          id="MyField"
          onChange={noop}
          placeholder={placeholderText}
          multiline={5}
        />,
      );

      expect(textField).toContainReactComponentTimes(Resizer, 1, {
        contents: placeholderText,
      });
    });
  });

  describe('aria labels', () => {
    it('sets aria labels on the input element', () => {
      const textField = mountWithAppProvider(
        <TextField
          label="TextField"
          id="MyField"
          onChange={noop}
          ariaOwns="Aria owns"
          ariaExpanded
          ariaActiveDescendant="Aria active descendant"
          ariaAutocomplete="Aria autocomplete"
          ariaControls="Aria controls"
        />,
      );

      expect(textField.find('input').prop('aria-owns')).toBe('Aria owns');
      expect(textField.find('input').prop('aria-expanded')).toBe(true);
      expect(textField.find('input').prop('aria-activedescendant')).toBe(
        'Aria active descendant',
      );
      expect(textField.find('input').prop('aria-autocomplete')).toBe(
        'Aria autocomplete',
      );
      expect(textField.find('input').prop('aria-controls')).toBe(
        'Aria controls',
      );
    });

    it('renders a textarea element with `aria-multiline` set to true if multiline greater than 0', () => {
      const textField = mountWithAppProvider(
        <TextField
          label="TextField"
          id="MyField"
          onChange={noop}
          multiline={4}
          ariaOwns="Aria owns"
          ariaActiveDescendant="Aria active descendant"
          ariaAutocomplete="Aria autocomplete"
          ariaControls="Aria controls"
        />,
      );
      expect(textField.find('textarea').prop('aria-multiline')).toBe(true);
    });

    it('renders an input element without `aria-multiline` if multiline is equal to 0', () => {
      const textField = mountWithAppProvider(
        <TextField
          label="TextField"
          id="MyField"
          onChange={noop}
          multiline={0}
          ariaOwns="Aria owns"
          ariaActiveDescendant="Aria active descendant"
          ariaAutocomplete="Aria autocomplete"
          ariaControls="Aria controls"
        />,
      );
      expect(textField.find('input').prop('aria-multiline')).toBeUndefined();
    });

    it('renders an input element without `aria-multiline` if multiline is undefined', () => {
      const textField = mountWithAppProvider(
        <TextField
          label="TextField"
          id="MyField"
          onChange={noop}
          ariaOwns="Aria owns"
          ariaActiveDescendant="Aria active descendant"
          ariaAutocomplete="Aria autocomplete"
          ariaControls="Aria controls"
        />,
      );
      expect(textField.find('input').prop('aria-multiline')).toBeUndefined();
    });
  });

  describe('Labelled', () => {
    it('passes props to Labelled', () => {
      const textField = mountWithAppProvider(
        <TextField
          label="TextField"
          id="MyField"
          onChange={noop}
          helpText="Help text"
        />,
      );

      expect(textField.find(Labelled)).toHaveLength(1);
      expect(textField.find(Labelled).prop('label')).toBe('TextField');
      expect(textField.find(Labelled).prop('id')).toBe('MyField');
      expect(textField.find(Labelled).prop('helpText')).toBe('Help text');
    });

    it('passes error to Labelled', () => {
      const textField = mountWithAppProvider(
        <TextField label="TextField" id="MyField" onChange={noop} error />,
      );

      expect(textField.find(Labelled).prop('error')).toBe(true);
    });

    it('passes labelHidden to Labelled', () => {
      const textField = mountWithAppProvider(
        <TextField
          label="TextField"
          id="MyField"
          onChange={noop}
          labelHidden
        />,
      );

      expect(textField.find(Labelled).prop('labelHidden')).toBe(true);
    });
  });

  describe('Connected', () => {
    it('passes props to Connected', () => {
      const connectedLeft = (
        <Select
          label="Currency unit"
          labelHidden
          options={['$', '€']}
          onChange={noop}
        />
      );
      const connectedRight = (
        <Select
          label="Weight unit"
          labelHidden
          options={['kg', 'lb']}
          onChange={noop}
        />
      );
      const textField = mountWithAppProvider(
        <TextField
          label="TextField"
          id="MyField"
          onChange={noop}
          connectedLeft={connectedLeft}
          connectedRight={connectedRight}
          prefix
        />,
      );

      expect(textField.find(Connected)).toHaveLength(1);
      expect(textField.find(Connected).prop('left')).toStrictEqual(
        connectedLeft,
      );
      expect(textField.find(Connected).prop('right')).toStrictEqual(
        connectedRight,
      );
    });

    it('sets focus to the <input /> `onClick`', () => {
      const textField = mountWithApp(
        <TextField label="TextField" onChange={noop} />,
      );

      expect(document.activeElement).not.toBe(textField.find('input')!.domNode);

      textField.find(Connected)!.triggerKeypath('children.props.onClick', {});

      expect(document.activeElement).toBe(textField.find('input')!.domNode);
    });
  });

  describe('clearButton', () => {
    it('renders a clear button when true', () => {
      const textField = mountWithAppProvider(
        <TextField
          id="MyTextField"
          label="TextField"
          onChange={noop}
          type="text"
          value="test value"
          clearButton
        />,
      );
      expect(findByTestID(textField, 'clearButton').exists()).toBeTruthy();
    });

    it('renders a visually hidden clear button in inputs without a value', () => {
      const textField = mountWithAppProvider(
        <TextField
          id="MyTextField"
          label="TextField"
          type="text"
          onChange={noop}
          clearButton
        />,
      );

      const clearButton = findByTestID(textField, 'clearButton');
      expect(clearButton.hasClass('ClearButton-hidden')).toBeTruthy();
      expect(clearButton.prop('tabIndex')).toBe(-1);
    });

    it('calls onClearButtonClick() with an id when the clear button is clicked', () => {
      const spy = jest.fn();
      const textField = mountWithAppProvider(
        <TextField
          id="MyTextField"
          label="TextField"
          type="search"
          onChange={noop}
          onClearButtonClick={spy}
          value="test value"
          clearButton
        />,
      );
      findByTestID(textField, 'clearButton').simulate('click');
      expect(spy).toHaveBeenCalledWith('MyTextField');
    });

    it('calls onChange with an empty string when clear button is clicked if onClearButtonClick is not provided', () => {
      const spy = jest.fn();
      const textField = mountWithAppProvider(
        <TextField
          id="MyTextField"
          label="TextField"
          type="search"
          onChange={spy}
          value="test value"
          clearButton
        />,
      );
      findByTestID(textField, 'clearButton').simulate('click');
      expect(spy).toHaveBeenCalledWith('', 'MyTextField');
    });

    it('does not render a clear button by default', () => {
      const textField = mountWithAppProvider(
        <TextField
          id="MyTextField"
          label="TextField"
          onChange={noop}
          type="text"
          value="test value"
        />,
      );
      expect(findByTestID(textField, 'clearButton').exists()).toBeFalsy();
    });

    it('adds a connected left and right class when a connected element is present', () => {
      const textField = mountWithApp(
        <TextField
          label="TextField"
          onChange={noop}
          connectedLeft={<div />}
          connectedRight={<div />}
        />,
      );
      expect(textField).toContainReactComponent('div', {
        className: 'Backdrop Backdrop-connectedLeft Backdrop-connectedRight',
      });
    });
  });
});

function noop() {}
