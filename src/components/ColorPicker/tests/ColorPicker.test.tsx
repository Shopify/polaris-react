import React from 'react';
// eslint-disable-next-line no-restricted-imports
import {mountWithAppProvider} from 'test-utilities/legacy';

import {EventListener} from '../../EventListener';
import {Slidable, AlphaPicker} from '../components';
import {ColorPicker} from '../ColorPicker';

const red = {
  hue: 0,
  saturation: 1,
  brightness: 1,
};

enum SlidableType {
  BrightnessSaturation,
  Hue,
}

describe('<ColorPicker />', () => {
  describe('Saturation/ Brightness pane', () => {
    describe('onChange', () => {
      it('is called when the user mouse downs', () => {
        const spy = jest.fn();
        mountWithAppProvider(<ColorPicker color={red} onChange={spy} />)
          .find(Slidable)
          .at(SlidableType.BrightnessSaturation)
          .simulate('mousedown');

        expect(spy).toHaveBeenCalled();
      });

      it('is not called on mousemove when not dragging', () => {
        const spy = jest.fn();
        mountWithAppProvider(<ColorPicker color={red} onChange={spy} />);

        window.dispatchEvent(new Event('mousemove'));
        expect(spy).not.toHaveBeenCalled();
      });
    });
  });

  describe('Hue slider', () => {
    describe('onChange', () => {
      it('is called when the user mouse downs', () => {
        const spy = jest.fn();
        mountWithAppProvider(<ColorPicker color={red} onChange={spy} />)
          .find(Slidable)
          .at(SlidableType.Hue)
          .simulate('mousedown');

        expect(spy).toHaveBeenCalled();
      });

      it('is not called on mousemove when not dragging', () => {
        const spy = jest.fn();
        mountWithAppProvider(<ColorPicker color={red} onChange={spy} />);

        window.dispatchEvent(new Event('mousemove'));
        expect(spy).not.toHaveBeenCalled();
      });
    });
  });

  describe('id', () => {
    it("is passed down to the first child's first child", () => {
      const id = 'MyID';
      const colorPicker = mountWithAppProvider(
        <ColorPicker id={id} color={red} onChange={jest.fn()} />,
      );

      expect(
        colorPicker
          .childAt(0)
          .childAt(0)
          .prop('id'),
      ).toBe(id);
    });
  });

  describe('color', () => {
    it('is passed down to AlphaPicker if allowAlpha is true', () => {
      const id = 'MyID';
      const colorPicker = mountWithAppProvider(
        <ColorPicker id={id} color={red} onChange={jest.fn()} allowAlpha />,
      );

      expect(colorPicker.find(AlphaPicker).prop('color')).toStrictEqual(red);
    });
  });

  describe('EventListener', () => {
    afterEach(() => {
      window.dispatchEvent(new Event('mouseup'));
    });

    it('passes false to passive prop for "mousemove" EventListener when dragging', () => {
      const onChangeSpy = jest.fn();
      const colorPicker = mountWithAppProvider(
        <ColorPicker color={red} onChange={onChangeSpy} />,
      );

      colorPicker
        .find(Slidable)
        .at(SlidableType.BrightnessSaturation)
        .simulate('mousedown');

      const mouseMoveListener = colorPicker
        .find(EventListener)
        .filterWhere((listener) => listener.prop('event') === 'mousemove');

      expect(mouseMoveListener.prop('passive')).toBe(false);
    });

    it('passes false to passive prop for "touchmove" EventListener when dragging', () => {
      const onChangeSpy = jest.fn();
      const colorPicker = mountWithAppProvider(
        <ColorPicker color={red} onChange={onChangeSpy} />,
      );

      colorPicker
        .find(Slidable)
        .at(SlidableType.BrightnessSaturation)
        .simulate('mousedown');

      const touchMoveListener = colorPicker
        .find(EventListener)
        .filterWhere((listener) => listener.prop('event') === 'touchmove');

      expect(touchMoveListener.prop('passive')).toBe(false);
    });

    it('prevents default for touchmove events if dragging the slider', () => {
      const colorPicker = mountWithAppProvider(
        <ColorPicker color={red} onChange={noop} />,
      );

      colorPicker.find(Slidable).first().simulate('mousedown');

      const touch = {clientX: 0, clientY: 0};
      const event = new TouchEvent('touchmove', {
        touches: [touch],
        cancelable: true,
      } as TouchEventInit);
      Object.assign(event, {preventDefault: jest.fn()});

      window.dispatchEvent(event);

      expect(event.preventDefault).toHaveBeenCalledTimes(2);
    });

    it('allows default for touchmove events if not dragging the slider', () => {
      const touch = {clientX: 0, clientY: 0};
      const event = new TouchEvent('touchmove', {
        touches: [touch],
      } as TouchEventInit);
      Object.assign(event, {preventDefault: jest.fn()});

      window.dispatchEvent(event);

      expect(event.preventDefault).not.toHaveBeenCalled();
    });
  });
});

function noop() {}
