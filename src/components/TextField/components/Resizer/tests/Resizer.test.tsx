import React from 'react';
import {animationFrame, dimension} from '@shopify/jest-dom-mocks';
// eslint-disable-next-line no-restricted-imports
import {
  mountWithAppProvider,
  findByTestID,
  trigger,
} from 'test-utilities/legacy';

import {Resizer} from '../Resizer';
import {EventListener} from '../../../../EventListener';

describe('<Resizer />', () => {
  const mockProps = {
    onHeightChange: noop,
    contents: 'Contents',
  };

  beforeEach(() => {
    animationFrame.mock();
  });

  afterEach(() => {
    animationFrame.restore();
  });

  it('cancels existing animationFrame on update', () => {
    const cancelAnimationFrameSpy = jest.spyOn(window, 'cancelAnimationFrame');
    const contents = 'Contents';
    const resizer = mountWithAppProvider(
      <Resizer
        {...mockProps}
        currentHeight={1}
        contents={contents}
        onHeightChange={jest.fn()}
        minimumLines={3}
      />,
    );

    resizer.setProps({currentHeight: 2});
    trigger(resizer.find(EventListener), 'handler');

    expect(cancelAnimationFrameSpy).toHaveBeenCalled();
  });

  it('cancels the animationFrame unmount', () => {
    const cancelAnimationFrameSpy = jest.spyOn(window, 'cancelAnimationFrame');
    const contents = 'Contents';
    const resizer = mountWithAppProvider(
      <Resizer {...mockProps} contents={contents} />,
    );

    resizer.unmount();

    expect(cancelAnimationFrameSpy).toHaveBeenCalled();
  });

  describe('contents', () => {
    it('renders contents', () => {
      const contents = 'Contents';
      const resizer = mountWithAppProvider(
        <Resizer {...mockProps} contents={contents} />,
      );
      const contentsNode = findByTestID(resizer, 'ContentsNode');
      expect(contentsNode.text()).toBe(contents);
    });

    it('encodes HTML entities', () => {
      const contents = `<div>&\nContents</div>`;
      const resizer = mountWithAppProvider(
        <Resizer {...mockProps} contents={contents} />,
      );
      const contentsNode = findByTestID(resizer, 'ContentsNode');
      const expectedEncodedContents =
        '&lt;div&gt;&amp;<br>Contents&lt;/div&gt;<br></div>';
      expect(contentsNode.html()).toContain(expectedEncodedContents);
    });

    it('ignores carriage returns when rendering content', () => {
      const contents = `<div>&\n\r\r\rContents</div>`;
      const resizer = mountWithAppProvider(
        <Resizer {...mockProps} contents={contents} />,
      );
      const contentsNode = findByTestID(resizer, 'ContentsNode');
      const expectedEncodedContents =
        '&lt;div&gt;&amp;<br>Contents&lt;/div&gt;<br></div>';
      expect(contentsNode.html()).toContain(expectedEncodedContents);
    });

    it('keeps a comma as a comma', () => {
      const contents = `Contents1,Contents2, Contents3`;
      const resizer = mountWithAppProvider(
        <Resizer {...mockProps} contents={contents} />,
      );
      const contentsNode = findByTestID(resizer, 'ContentsNode');
      expect(contentsNode.html()).toContain(contents);
    });
  });

  describe('minimumLines', () => {
    it('renders a number of <br> tags equivalent to minimumLines', () => {
      const minimumLines = 3;
      const resizer = mountWithAppProvider(
        <Resizer {...mockProps} minimumLines={minimumLines} />,
      );
      const breakingSpaces = findByTestID(resizer, 'MinimumLines');
      expect(breakingSpaces.html()).toContain('<br><br><br>');
    });

    it('renders nothing when minimumLines is undefined', () => {
      const resizer = mountWithAppProvider(
        <Resizer {...mockProps} minimumLines={undefined} />,
      );
      const breakingSpaces = findByTestID(resizer, 'MinimumLines');
      expect(breakingSpaces).toHaveLength(0);
    });
  });

  describe('onHeightChange()', () => {
    beforeEach(() => {
      dimension.mock({offsetHeight: 30});
    });

    afterEach(() => {
      dimension.restore();
    });

    it('is called on mount if minimumLines is provided', () => {
      const spy = jest.fn();
      mountWithAppProvider(
        <Resizer
          {...mockProps}
          currentHeight={50}
          onHeightChange={spy}
          minimumLines={3}
        />,
      );
      animationFrame.runFrame();
      expect(spy).toHaveBeenCalledWith(30);
    });

    it('is not called on mount if minimumLines is not provided', () => {
      const spy = jest.fn();
      mountWithAppProvider(
        <Resizer {...mockProps} currentHeight={50} onHeightChange={spy} />,
      );
      animationFrame.runFrame();
      expect(spy).not.toHaveBeenCalled();
    });

    it('is not called on mount if currentHeight is the same as DOM height', () => {
      const spy = jest.fn();
      mountWithAppProvider(
        <Resizer
          {...mockProps}
          currentHeight={30}
          onHeightChange={spy}
          minimumLines={3}
        />,
      );
      animationFrame.runFrame();
      expect(spy).not.toHaveBeenCalled();
    });

    it('is called again on resize', () => {
      const spy = jest.fn();
      const currentHeight = 50;
      const resizer = mountWithAppProvider(
        <Resizer
          {...mockProps}
          currentHeight={currentHeight}
          onHeightChange={spy}
          minimumLines={3}
        />,
      );
      resizer.setProps({currentHeight: 1});
      trigger(resizer.find(EventListener), 'handler');
      animationFrame.runFrame();
      expect(spy).toHaveBeenCalledWith(30);
    });

    it('is not called again on resize if minimumLines is not provided', () => {
      const spy = jest.fn();
      const currentHeight = 0;
      const resizer = mountWithAppProvider(
        <Resizer
          {...mockProps}
          currentHeight={currentHeight}
          onHeightChange={spy}
        />,
      );
      resizer.setProps({currentHeight: 1});
      trigger(resizer.find(EventListener), 'handler');
      animationFrame.runFrame();
      expect(spy).toHaveBeenCalledTimes(0);
    });
  });

  it('is not called again on resize if currentHeight is the same as DOM height', () => {
    const spy = jest.fn();
    const currentHeight = 0;
    const resizer = mountWithAppProvider(
      <Resizer
        {...mockProps}
        currentHeight={currentHeight}
        onHeightChange={spy}
      />,
    );
    resizer.setProps({currentHeight: 1});
    trigger(resizer.find(EventListener), 'handler');
    animationFrame.runFrame();
    expect(spy).toHaveBeenCalledTimes(0);
  });

  describe('aria-hidden', () => {
    it('renders aria-hidden as true', () => {
      const contents = 'Contents';
      const resizer = mountWithAppProvider(
        <Resizer {...mockProps} contents={contents} />,
      );
      const wrapperDiv = findByTestID(resizer, 'ResizerWrapper');
      expect(wrapperDiv.prop('aria-hidden')).toBe(true);
    });
  });

  describe('lifecycle', () => {
    it('mounts safely', () => {
      expect(() => {
        mountWithAppProvider(<Resizer {...mockProps} />);
      }).not.toThrow();
    });

    it('updates safely', () => {
      const resizer = mountWithAppProvider(<Resizer {...mockProps} />);

      expect(() => {
        resizer.setProps({contents: 'new content'});
      }).not.toThrow();
    });

    it('unmounts safely', () => {
      const resizer = mountWithAppProvider(<Resizer {...mockProps} />);

      expect(() => {
        resizer.unmount();
      }).not.toThrow();
    });
  });
});

function noop() {}
