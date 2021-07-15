import React from 'react';
import {CircleCancelMinor} from '@shopify/polaris-icons';
import {mountWithApp} from 'test-utilities';

import {Icon} from '../../../../Icon';
import {SearchField} from '../SearchField';

describe('<SearchField />', () => {
  it('passes the placeholder prop to input', () => {
    const textField = mountWithApp(
      <SearchField value="" onChange={noop} placeholder="hello polaris" />,
    );

    expect(textField).toContainReactComponent('input', {
      placeholder: 'hello polaris',
    });
  });

  describe('focused', () => {
    it('will give input focus when the focused prop is true', () => {
      const textField = mountWithApp(
        <SearchField value="" onChange={noop} focused />,
      );

      expect(document.activeElement).toBe(textField.find('input')!.domNode);
    });

    it('will give input focus if focus has been toggled', () => {
      const textField = mountWithApp(
        <SearchField value="" onChange={noop} focused={false} />,
      );

      expect(document.activeElement).not.toBe(textField.find('input')!.domNode);

      textField.setProps({value: '', onChange: noop, focused: true});
      expect(document.activeElement).toBe(textField.find('input')!.domNode);
    });

    it('will blur input if focused has been toggled', () => {
      const textField = mountWithApp(
        <SearchField value="" onChange={noop} focused />,
      );

      textField.setProps({value: '', onChange: noop, focused: false});
      expect(document.activeElement).not.toBe(textField.find('input')!.domNode);
    });
  });

  describe('clear content', () => {
    it('will render a cancel icon when a value is provided', () => {
      const textField = mountWithApp(
        <SearchField value="hello polaris" onChange={noop} />,
      );

      expect(textField).toContainReactComponent(Icon, {
        source: CircleCancelMinor,
      });
    });

    it('will call the onChange with an empty string when the cancel button is pressed', () => {
      const spy = jest.fn();
      const textField = mountWithApp(
        <SearchField value="hello polaris" onChange={spy} />,
      );

      textField.find('button')!.trigger('onClick');

      expect(spy).toHaveBeenCalledWith('');
    });
  });

  describe('onBlur()', () => {
    it('is called when the text field is blurred', () => {
      const spy = jest.fn();
      const textField = mountWithApp(
        <SearchField value="hello polaris" onChange={noop} onBlur={spy} />,
      );

      textField.find('div')!.trigger('onBlur');

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('onFocus', () => {
    it('is called when the text field is focused', () => {
      const spy = jest.fn();
      const textField = mountWithApp(
        <SearchField value="hello polaris" onChange={noop} onFocus={spy} />,
      );

      textField.find('div')!.trigger('onFocus');

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('onChange()', () => {
    it('is called with the new value', () => {
      const spy = jest.fn();
      const newValue = 'hello polaris';
      const textField = mountWithApp(
        <SearchField value={newValue} onChange={spy} />,
      );

      textField.find('input')!.trigger('onChange', {
        currentTarget: {
          value: newValue,
        },
      });

      expect(spy).toHaveBeenCalledWith(newValue);
    });
  });

  describe('onKeyDown', () => {
    it("will prevent default on the 'enter' keydown", () => {
      const spy = jest.fn();
      const textField = mountWithApp(
        <SearchField value="hello polaris" onChange={noop} />,
      );

      textField.find('input')!.trigger('onKeyDown', {
        key: 'Enter',
        preventDefault: spy,
      });
      expect(spy).toHaveBeenCalled();
    });
  });

  it('adds a "BackdropShowFocusBorder" class when "showFocusBorder" is passed', () => {
    const textField = mountWithApp(
      <SearchField value="" onChange={noop} showFocusBorder />,
    );

    expect(textField).toContainReactComponent('div', {
      className: 'Backdrop BackdropShowFocusBorder',
    });
  });
});

function noop() {}
