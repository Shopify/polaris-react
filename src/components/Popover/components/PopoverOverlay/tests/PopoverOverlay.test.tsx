import React from 'react';
// eslint-disable-next-line no-restricted-imports
import {
  mountWithAppProvider,
  ReactWrapper,
  trigger,
} from 'test-utilities/legacy';
import {mountWithApp} from 'test-utilities/react-testing';
import {TextContainer, TextField, EventListener} from 'components';

import {Key} from '../../../../../types';
import {PositionedOverlay} from '../../../../PositionedOverlay';
import {PopoverOverlay} from '../PopoverOverlay';

interface HandlerMap {
  [eventName: string]: (event: any) => void;
}

const listenerMap: HandlerMap = {};

describe('<PopoverOverlay />', () => {
  let addEventListener: jest.SpyInstance;
  let removeEventListener: jest.SpyInstance;

  let rafSpy: jest.SpyInstance;

  beforeEach(() => {
    addEventListener = jest.spyOn(document, 'addEventListener');
    addEventListener.mockImplementation((event, callback) => {
      listenerMap[event] = callback;
    });

    removeEventListener = jest.spyOn(document, 'removeEventListener');
    removeEventListener.mockImplementation((event) => {
      listenerMap[event] = noop;
    });

    rafSpy = jest.spyOn(window, 'requestAnimationFrame');
    rafSpy.mockImplementation((callback) => callback());
  });

  afterEach(() => {
    if (document.activeElement) {
      (document.activeElement as HTMLElement).blur();
    }

    addEventListener.mockRestore();
    removeEventListener.mockRestore();

    rafSpy.mockRestore();
  });

  const activator = document.createElement('button');
  const activatorContent = document.createTextNode('Activator text');
  activator.appendChild(activatorContent);
  const children = (
    <TextContainer>
      <p>Text</p>
    </TextContainer>
  );

  it('passes activator to PositionedOverlay when active', () => {
    const popoverOverlay = mountWithAppProvider(
      <PopoverOverlay
        active
        id="PopoverOverlay-1"
        activator={activator}
        onClose={noop}
        fullWidth
      >
        {children}
      </PopoverOverlay>,
    );

    expect(popoverOverlay.find(PositionedOverlay).prop('activator')).toBe(
      activator,
    );
  });

  it('passes fullWidth to PositionedOverlay when active', () => {
    const popoverOverlay = mountWithAppProvider(
      <PopoverOverlay
        active
        id="PopoverOverlay-1"
        activator={activator}
        onClose={noop}
        fullWidth
      >
        {children}
      </PopoverOverlay>,
    );

    expect(popoverOverlay.find(PositionedOverlay).prop('fullWidth')).toBe(true);
  });

  it('passes fixed to PositionedOverlay when active', () => {
    const popoverOverlay = mountWithAppProvider(
      <PopoverOverlay
        active
        id="PopoverOverlay-1"
        activator={activator}
        onClose={noop}
        fixed
      >
        {children}
      </PopoverOverlay>,
    );

    expect(popoverOverlay.find(PositionedOverlay).prop('fixed')).toBe(true);
  });

  it('passes preferredPosition and preferredAlignment to PositionedOverlay when active', () => {
    const popoverOverlay = mountWithAppProvider(
      <PopoverOverlay
        active
        id="PopoverOverlay-1"
        activator={activator}
        onClose={noop}
        preferredPosition="above"
        preferredAlignment="right"
      >
        {children}
      </PopoverOverlay>,
    );

    expect(
      popoverOverlay.find(PositionedOverlay).prop('preferredPosition'),
    ).toBe('above');
    expect(
      popoverOverlay.find(PositionedOverlay).prop('preferredAlignment'),
    ).toBe('right');
  });

  it('passes default preferredPosition and preferredAlignment to PositionedOverlay when active', () => {
    const popoverOverlay = mountWithAppProvider(
      <PopoverOverlay
        active
        id="PopoverOverlay-1"
        activator={activator}
        onClose={noop}
      >
        {children}
      </PopoverOverlay>,
    );

    expect(
      popoverOverlay.find(PositionedOverlay).prop('preferredPosition'),
    ).toBe('below');
    expect(
      popoverOverlay.find(PositionedOverlay).prop('preferredAlignment'),
    ).toBe('center');
  });

  it('passes preferInputActivator to PositionedOverlay when false', () => {
    const popoverOverlay = mountWithAppProvider(
      <PopoverOverlay
        active
        id="PopoverOverlay-1"
        activator={activator}
        onClose={noop}
        fixed
        preferInputActivator={false}
      >
        {children}
      </PopoverOverlay>,
    );

    expect(
      popoverOverlay.find(PositionedOverlay).prop('preferInputActivator'),
    ).toBe(false);
  });

  it('passes zIndexOverride to PositionedOverlay', () => {
    const popoverOverlay = mountWithApp(
      <PopoverOverlay
        active
        zIndexOverride={100}
        id="PopoverOverlay-1"
        activator={activator}
        onClose={noop}
      >
        {children}
      </PopoverOverlay>,
    );

    expect(popoverOverlay).toContainReactComponent(PositionedOverlay, {
      zIndexOverride: 100,
    });
  });

  it('passes mutationObserveConfig to PositionedOverlay', () => {
    const mockMutationObserveConfig = {
      attributes: true,
    };
    const popoverOverlay = mountWithApp(
      <PopoverOverlay
        active
        mutationObserveConfig={mockMutationObserveConfig}
        id="PopoverOverlay-1"
        activator={activator}
        onClose={noop}
      >
        {children}
      </PopoverOverlay>,
    );

    expect(popoverOverlay).toContainReactComponent(PositionedOverlay, {
      mutationObserveConfig: mockMutationObserveConfig,
    });
  });

  it("doesn't include a tabindex prop when autofocusTarget is 'none'", () => {
    const popoverOverlay = mountWithAppProvider(
      <PopoverOverlay
        active
        id="PopoverOverlay-1"
        activator={activator}
        onClose={noop}
        fixed
        autofocusTarget="none"
        preferInputActivator={false}
      >
        {children}
      </PopoverOverlay>,
    );

    expect(
      popoverOverlay.find(PositionedOverlay).prop('preferInputActivator'),
    ).toBe(false);
  });

  it('calls the onClose callback when the escape key is pressed', () => {
    const spy = jest.fn();

    mountWithAppProvider(
      <PopoverOverlay
        active
        id="PopoverOverlay-1"
        activator={activator}
        onClose={spy}
      >
        {children}
      </PopoverOverlay>,
    );

    listenerMap.keyup({keyCode: Key.Escape});
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('does not call the onClose callback when a descendent HTMLElement is clicked', () => {
    const spy = jest.fn();

    const popoverOverlay = mountWithAppProvider(
      <PopoverOverlay
        active
        id="PopoverOverlay-1"
        activator={activator}
        onClose={spy}
      >
        (<TextField label="Store name" value="Click me" onChange={() => {}} />)
      </PopoverOverlay>,
    );

    const target = popoverOverlay.find(TextField).find('input').getDOMNode();

    const clickEventListener = popoverOverlay
      .find(EventListener)
      .findWhere((node) => node.prop('event') === 'click');

    trigger(clickEventListener, 'handler', {target});

    expect(spy).not.toHaveBeenCalled();
  });

  it('does not call the onClose callback when a descendent SVGElement is clicked', () => {
    const spy = jest.fn();

    const popoverOverlay = mountWithAppProvider(
      <PopoverOverlay
        active
        id="PopoverOverlay-1"
        activator={activator}
        onClose={spy}
      >
        (
        <TextField
          type="number"
          label="Store name"
          value="Click me"
          onChange={() => {}}
        />
        )
      </PopoverOverlay>,
    );

    const target = popoverOverlay
      .find(TextField)
      .find('svg')
      .first()
      .getDOMNode();

    const clickEventListener = popoverOverlay
      .find(EventListener)
      .findWhere((node) => node.prop('event') === 'click');

    trigger(clickEventListener, 'handler', {
      target,
    });

    expect(spy).not.toHaveBeenCalled();
  });

  it('starts animating in immediately', () => {
    const popoverOverlay = mountWithAppProvider(
      <PopoverOverlay
        active={false}
        id="PopoverOverlay-1"
        activator={activator}
        onClose={noop}
        fullWidth
      >
        {children}
      </PopoverOverlay>,
    );

    popoverOverlay.setProps({active: true});
    popoverOverlay.update();
    expect(popoverOverlay.find(PositionedOverlay).prop('classNames')).toMatch(
      /PopoverOverlay-entering/,
    );
  });

  it('does not render after exiting when the component is updated during exit', () => {
    jest.useFakeTimers();

    const popoverOverlay = mountWithAppProvider(
      <PopoverOverlay
        active
        id="PopoverOverlay-1"
        activator={activator}
        onClose={noop}
      >
        {children}
      </PopoverOverlay>,
    );

    // Start exiting
    close(popoverOverlay);

    // Update before exiting is complete
    triggerSomeUpdate(popoverOverlay);

    // Run any timers and a final update for changed state
    jest.runOnlyPendingTimers();
    popoverOverlay.update();

    expect(popoverOverlay.find(PositionedOverlay)).toHaveLength(0);
  });

  describe('focus', () => {
    const oldEnv = process.env;

    beforeEach(() => {
      process.env = {...oldEnv};
      delete process.env.NODE_ENV;
    });

    afterEach(() => {
      process.env = oldEnv;
      jest.clearAllMocks();
    });

    it('focuses the content on mount', () => {
      const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');
      mountWithAppProvider(
        <PopoverOverlay
          active
          id="PopoverOverlay-1"
          activator={activator}
          onClose={noop}
        >
          {children}
        </PopoverOverlay>,
      );

      expect(focusSpy).toHaveBeenCalledTimes(1);
      expect(focusSpy).toHaveBeenCalledWith({preventScroll: false});
    });

    it('focuses the content on mount and prevents scroll in development', () => {
      process.env.NODE_ENV = 'development';
      const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');
      mountWithAppProvider(
        <PopoverOverlay
          active
          id="PopoverOverlay-1"
          activator={activator}
          onClose={noop}
        >
          {children}
        </PopoverOverlay>,
      );

      expect(focusSpy).toHaveBeenCalledTimes(1);
      expect(focusSpy).toHaveBeenCalledWith({preventScroll: true});
    });

    it('focuses the container when autofocusTarget is not set', () => {
      const id = 'PopoverOverlay-1';
      const popoverOverlay = mountWithApp(
        <PopoverOverlay active id={id} activator={activator} onClose={noop} />,
      );

      const focusTarget = popoverOverlay.find('div', {id})!.domNode;
      expect(document.activeElement).toBe(focusTarget);
    });

    it('focuses the container when autofocusTarget is set to Container', () => {
      const id = 'PopoverOverlay-1';
      const popoverOverlay = mountWithApp(
        <PopoverOverlay
          active
          id={id}
          activator={activator}
          onClose={noop}
          autofocusTarget="container"
        />,
      );

      const focusTarget = popoverOverlay.find('div', {id})!.domNode;
      expect(document.activeElement).toBe(focusTarget);
    });

    it('focuses the first focusbale node when autofocusTarget is set to FirstNode', () => {
      mountWithApp(
        <PopoverOverlay
          active
          id="PopoverOverlay-1"
          activator={activator}
          onClose={noop}
          autofocusTarget="first-node"
        >
          <p>Hello world</p>
        </PopoverOverlay>,
      );

      expect(document.activeElement?.className).toContain('Content');
    });

    it('does not focus when autofocusTarget is set to None', () => {
      const id = 'PopoverOverlay-1';
      const popoverOverlay = mountWithApp(
        <PopoverOverlay
          active
          id={id}
          activator={activator}
          onClose={noop}
          autofocusTarget="none"
        >
          <input type="text" />
        </PopoverOverlay>,
      );

      const focusTargetContainer = popoverOverlay.find('div', {id})!.domNode;
      const focusTargetFirstNode = popoverOverlay.find('input', {})!.domNode;

      expect(document.activeElement).not.toBe(focusTargetContainer);
      expect(document.activeElement).not.toBe(focusTargetFirstNode);
    });
  });
});

function noop() {}

function close(wrapper: ReactWrapper) {
  wrapper.setProps({active: false});
  wrapper.update();
}

function triggerSomeUpdate(wrapper: ReactWrapper) {
  wrapper.setProps({fullWidth: true});
  wrapper.update();
}
