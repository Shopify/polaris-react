import React from 'react';
// eslint-disable-next-line no-restricted-imports
import {mountWithAppProvider} from 'test-utilities/legacy';
import {AlphaField} from '../AlphaField';
import {TextField} from '../../../../TextField';

describe('<AlphaField />', () => {
  const mockProps = {
    alpha: 0,
    onChange: noop,
  };

  describe('alpha', () => {
    it('converts alpha to percentage in the TextField', () => {
      const alpha = 0.5;
      const alphaField = mountWithAppProvider(
        <AlphaField {...mockProps} alpha={alpha} />,
      );
      const textField = alphaField.find(TextField);
      const expectedPercentage = Math.round(alpha * 100).toString();

      expect(textField.prop('value')).toBe(expectedPercentage);
    });
  });

  describe('onChange()', () => {
    it('calls onChange with the alpha value when percentage is set', () => {
      const onChangeSpy = jest.fn();
      const alphaField = mountWithAppProvider(
        <AlphaField {...mockProps} onChange={onChangeSpy} />,
      );
      const textField = alphaField.find(TextField);
      const percentageValue = 70;
      const expectedAlpha = percentageValue / 100;

      (textField
        .find('input')
        .getDOMNode() as HTMLInputElement).value = percentageValue.toString();
      textField
        .find('input')
        .simulate('change')
        .simulate('blur');

      expect(onChangeSpy).toHaveBeenCalledWith(expectedAlpha);
    });

    it('calls onChange with alpha value of 1 when percentage value over 100 is set', () => {
      const onChangeSpy = jest.fn();
      const alphaField = mountWithAppProvider(
        <AlphaField {...mockProps} onChange={onChangeSpy} />,
      );
      const textField = alphaField.find(TextField);
      const percentageValue = 150;
      const expectedAlpha = 1;

      (textField
        .find('input')
        .getDOMNode() as HTMLInputElement).value = percentageValue.toString();
      textField
        .find('input')
        .simulate('change')
        .simulate('blur');

      expect(onChangeSpy).toHaveBeenCalledWith(expectedAlpha);
    });
  });

  describe('<Spinner />', () => {
    it('calls onChange with 0.01 when the TextField Spinner up button is pressed', () => {
      const onChangeSpy = jest.fn();
      const alphaField = mountWithAppProvider(
        <AlphaField {...mockProps} onChange={onChangeSpy} />,
      );
      const textField = alphaField.find(TextField);
      const upButton = textField.find('[role="button"]').first();

      upButton.simulate('click');
      textField.find('input').simulate('blur');

      expect(onChangeSpy).toHaveBeenCalledWith(0.01);
    });

    it('calls onChange with 0.99 when the TextField Spinner down button is pressed', () => {
      const onChangeSpy = jest.fn();
      const alphaField = mountWithAppProvider(
        <AlphaField alpha={1} onChange={onChangeSpy} />,
      );
      const textField = alphaField.find(TextField);
      const downButton = textField.find('[role="button"]').last();

      downButton.simulate('click');
      textField.find('input').simulate('blur');

      expect(onChangeSpy).toHaveBeenCalledWith(0.99);
    });
  });
});

function noop() {}
