import React from 'react';
// eslint-disable-next-line no-restricted-imports
import {mountWithAppProvider} from 'test-utilities/legacy';

import {ContextualSaveBarContext} from '../../../utilities/contextualsavebar-context';
import {EventListener} from '../../EventListener';
import {
  PositionedOverlay,
  CONTEXTUAL_SAVE_BAR_ZINDEX,
} from '../PositionedOverlay';
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

  describe('context', () => {
    it('sets the z-index to the contextual save bar z-index when within a contextual save bar', () => {
      const positionedOverlay = mountWithAppProvider(
        <ContextualSaveBarContext.Provider value>
          <PositionedOverlay {...mockProps} />
        </ContextualSaveBarContext.Provider>,
      );

      expect((positionedOverlay.find('div').prop('style') as any).zIndex).toBe(
        CONTEXTUAL_SAVE_BAR_ZINDEX,
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
});

function mockRender() {
  return <span>overlay content</span>;
}
