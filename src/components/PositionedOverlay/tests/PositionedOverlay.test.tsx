import React from 'react';
// eslint-disable-next-line no-restricted-imports
import {mountWithAppProvider} from 'test-utilities/legacy';

import {EventListener} from '../../EventListener';
import {PositionedOverlay} from '../PositionedOverlay';
import * as mathModule from '../utilities/math';
import * as geometry from '../../../utilities/geometry';
import styles from '../PositionedOverlay.scss';

describe('<PositionedOverlay />', () => {
  const mockProps = {
    active: true,
    activator: document.createElement('div'),
    render: mockRender,
  };

  describe('render', () => {
    it('renders the provided children', () => {
      const positionedOverlay = mountWithAppProvider(
        <PositionedOverlay {...mockProps} />,
      );
      expect(positionedOverlay.text()).toBe('overlay content');
    });
  });

  describe('preferredPosition', () => {
    let calculateVerticalPositionMock: jest.SpyInstance;

    beforeEach(() => {
      calculateVerticalPositionMock = jest.spyOn(
        mathModule,
        'calculateVerticalPosition',
      );
      calculateVerticalPositionMock.mockReturnValue({
        height: 0,
        top: 0,
        positioning: 'above',
      });
    });

    afterEach(() => {
      calculateVerticalPositionMock.mockRestore();
    });

    it('positions above if preferredPosition is given', () => {
      const spy = jest.fn();
      mountWithAppProvider(
        <PositionedOverlay
          {...mockProps}
          preferredPosition="above"
          render={spy}
        />,
      );

      expect(spy).toHaveBeenCalledWith({
        activatorRect: {height: 0, left: 0, top: 0, width: 0},
        desiredHeight: 0,
        left: 0,
        measuring: false,
        positioning: 'above',
      });
    });

    it('positions below if no preferredPosition is given', () => {
      const spy = jest.fn();
      mountWithAppProvider(<PositionedOverlay {...mockProps} render={spy} />);

      expect(spy).toHaveBeenCalledWith({
        activatorRect: {height: 0, left: 0, top: 0, width: 0},
        desiredHeight: 0,
        left: undefined,
        measuring: true,
        positioning: 'below',
      });
    });
  });

  describe('preferredAlignment', () => {
    it('aligns left if preferredAlignment is given', () => {
      const positionedOverlay = mountWithAppProvider(
        <PositionedOverlay {...mockProps} preferredAlignment="left" />,
      );

      expect((positionedOverlay.find('div').prop('style') as any).left).toBe(0);
      expect(
        (positionedOverlay.find('div').prop('style') as any).right,
      ).toBeUndefined();
    });

    it('aligns right if preferredAlignment is given', () => {
      const positionedOverlay = mountWithAppProvider(
        <PositionedOverlay {...mockProps} preferredAlignment="right" />,
      );

      expect((positionedOverlay.find('div').prop('style') as any).right).toBe(
        0,
      );
      expect(
        (positionedOverlay.find('div').prop('style') as any).left,
      ).toBeUndefined();
    });
  });

  describe('fullWidth', () => {
    it('is set to full width if fullWidth is true', () => {
      const positionedOverlay = mountWithAppProvider(
        <PositionedOverlay {...mockProps} fullWidth />,
      );

      expect((positionedOverlay.find('div').prop('style') as any).width).toBe(
        0,
      );
    });
  });

  describe('zIndex', () => {
    it('is undefined if no state or prop override exist', () => {
      const positionedOverlay = mountWithAppProvider(
        <PositionedOverlay {...mockProps} />,
      );
      expect(
        (positionedOverlay.find('div').prop('style') as any).zIndex,
      ).toBeUndefined();
    });

    it('is set to state calculated value if no override prop is given', () => {
      const positionedOverlay = mountWithAppProvider(
        <PositionedOverlay {...mockProps} />,
      );
      positionedOverlay.setState({zIndex: 200});
      expect((positionedOverlay.find('div').prop('style') as any).zIndex).toBe(
        200,
      );
    });

    it('is set to value of zIndexOverride prop if given', () => {
      const positionedOverlay = mountWithAppProvider(
        <PositionedOverlay {...mockProps} zIndexOverride={100} />,
      );
      positionedOverlay.setState({zIndex: 200});
      expect((positionedOverlay.find('div').prop('style') as any).zIndex).toBe(
        100,
      );
    });
  });

  describe('preventInteraction', () => {
    it('passes preventInteraction to PositionedOverlay when preventInteraction is true', () => {
      const positionedOverlay = mountWithAppProvider(
        <PositionedOverlay {...mockProps} preventInteraction />,
      );
      expect(positionedOverlay.find('div').prop('className')).toContain(
        styles.preventInteraction,
      );
    });

    it('does not pass preventInteraction to PositionedOverlay by default', () => {
      const positionedOverlay = mountWithAppProvider(
        <PositionedOverlay {...mockProps} />,
      );
      expect(positionedOverlay.find('div').prop('className')).not.toContain(
        styles.preventInteraction,
      );
    });
  });

  describe('lifecycle', () => {
    it('updates safely', () => {
      const positionedOverlay = mountWithAppProvider(
        <PositionedOverlay {...mockProps} fixed />,
      );

      expect(() => {
        positionedOverlay.setProps({fixed: false});
      }).not.toThrow();
    });

    it('unmounts safely', () => {
      const positionedOverlay = mountWithAppProvider(
        <PositionedOverlay {...mockProps} />,
      );

      expect(() => {
        positionedOverlay.unmount();
      }).not.toThrow();
    });
  });

  describe('<EventListener />', () => {
    it('sets an event listener for resize', () => {
      const positionedOverlay = mountWithAppProvider(
        <PositionedOverlay {...mockProps} />,
      );
      expect(positionedOverlay.find(EventListener).exists()).toBe(true);
      expect(positionedOverlay.find(EventListener).prop('event')).toBe(
        'resize',
      );
    });
  });

  describe('preferInputActivator', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('uses the input to calculate its dimensions when true', () => {
      const getRectForNodeSpy = jest.spyOn(geometry, 'getRectForNode');

      const activator = document.createElement('div');
      const input = document.createElement('input');
      activator.appendChild(input);

      mountWithAppProvider(
        <PositionedOverlay
          {...mockProps}
          preferInputActivator
          activator={activator}
        />,
      );

      expect(
        getRectForNodeSpy.mock.calls.some(([node]) => node === input),
      ).toBe(true);
    });

    it('does not use the input to calculate its dimensions when false', () => {
      const getRectForNodeSpy = jest.spyOn(geometry, 'getRectForNode');
      const activator = document.createElement('div');
      const input = document.createElement('input');
      activator.appendChild(input);

      mountWithAppProvider(
        <PositionedOverlay
          {...mockProps}
          preferInputActivator={false}
          activator={activator}
        />,
      );

      expect(
        getRectForNodeSpy.mock.calls.some(([node]) => node === input),
      ).toBe(false);
    });
  });

  describe('mutationObserveConfig', () => {
    // Find the `overlay` and compare against DEFAULT_OBSERVER_CONFIG
    it.todo('passes default config');
    // Find the `overlay` and compare against mockMutationObserveConfig
    it.todo('merges prop with default config');
  });
});

function mockRender() {
  return <span>overlay content</span>;
}
