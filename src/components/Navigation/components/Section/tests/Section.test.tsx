import React from 'react';
import {matchMedia, animationFrame} from '@shopify/jest-dom-mocks';
// eslint-disable-next-line no-restricted-imports
import {
  findByTestID,
  trigger,
  mountWithAppProvider,
  act,
} from 'test-utilities/legacy';

import {Collapsible} from '../../../../Collapsible';
import {NavigationContext} from '../../../context';
import {Item} from '../../Item';
import {Section} from '../Section';

import channelResults from './fixtures/AdminNavQuery/multiple-channels.json';

describe('<Navigation.Section />', () => {
  let context: React.ContextType<typeof NavigationContext>;
  let cancelAnimationFrameSpy: jest.SpyInstance;

  beforeEach(() => {
    matchMedia.mock();
    animationFrame.mock();
    context = {
      location: '/admin/products',
      onNavigationDismiss: jest.fn(),
    };
    cancelAnimationFrameSpy = jest.spyOn(window, 'cancelAnimationFrame');
  });

  afterEach(() => {
    matchMedia.restore();
    animationFrame.restore();
    cancelAnimationFrameSpy.mockRestore();
  });

  it('cancels the current animation frame when clicked', () => {
    const section = mountWithNavigationProvider(
      <Section
        items={[
          {
            label: 'some label',
            url: '/admin',
            disabled: false,
          },
        ]}
      />,
      {...context},
    );

    trigger(section.find(Item), 'onClick');
    trigger(section.find(Item), 'onClick');

    expect(cancelAnimationFrameSpy).toHaveBeenCalledTimes(1);
  });

  it('passes the right accessibilityLabel to its Button', () => {
    const mountedSection = mountWithNavigationProvider(
      <Section
        title="test"
        fill
        items={[
          {
            label: 'some label',
            url: '/admin',
            disabled: false,
          },
        ]}
        action={{
          icon: 'placeholder',
          accessibilityLabel: 'This is a test section',
          onClick: noop,
        }}
      />,
      {...context},
    );

    expect(
      mountedSection.find('[aria-label="This is a test section"]'),
    ).toHaveLength(1);
  });

  it('calls iconButton.onClick when icon is clicked', () => {
    const spy = jest.fn();

    const section = mountWithNavigationProvider(
      <Section
        title="test"
        items={[
          {
            label: 'some label',
            url: '/admin',
            disabled: false,
          },
        ]}
        action={{
          icon: 'placeholder',
          accessibilityLabel: 'This is a test section',
          onClick: spy,
        }}
      />,
      {...context},
    );

    section.find('button').simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('renders an array of items from props', () => {
    const section = mountWithNavigationProvider(
      <Section items={channelResults} />,
      {
        ...context,
      },
    );

    expect(section.find('li').length === channelResults.length).toBe(true);
  });

  it('calls onNavigationDismiss from context on sub item click', () => {
    const channels = mountWithNavigationProvider(
      <Section items={channelResults} />,
      {
        ...context,
      },
    );

    channels
      .find('a')
      .first()
      .simulate('click');
    animationFrame.runFrame();

    expect(context.onNavigationDismiss).toHaveBeenCalledTimes(1);
  });

  it('sets expanded to false on item click', () => {
    const channels = mountWithNavigationProvider(
      <Section
        items={channelResults}
        rollup={{after: 0, view: 'test', hide: 'test', activePath: '/'}}
      />,
      {
        ...context,
      },
    );
    findByTestID(channels, 'ToggleViewAll').simulate('click');

    channels
      .find('a')
      .first()
      .simulate('click');

    act(() => {
      animationFrame.runFrame();
    });
    channels.update();
    expect(channels.find(Collapsible).prop('open')).toBe(false);
  });

  it('does not set expanded to false on item click when it has a sub nav and on the mobile breakpoint', () => {
    matchMedia.setMedia(() => ({matches: true}));
    const withSubNav = mountWithNavigationProvider(
      <Section
        rollup={{
          after: 1,
          view: 'view',
          hide: 'hide',
          activePath: '/',
        }}
        items={[
          {
            label: 'some label',
            url: '/admin',
          },
          {
            label: 'other label',
            url: '/other',
            subNavigationItems: [
              {
                label: 'sub label',
                url: '/other',
              },
            ],
          },
        ]}
      />,
      {
        ...context,
      },
    );

    findByTestID(withSubNav, 'ToggleViewAll').simulate('click');

    withSubNav
      .find('a[href="/other"]')
      .first()
      .simulate('click');

    animationFrame.runFrame();

    expect(
      withSubNav
        .find(Collapsible)
        .first()
        .prop('open'),
    ).toBe(true);
  });

  it('adds a toggle button if rollupAfter has a value', () => {
    const channels = mountWithNavigationProvider(
      <Section
        rollup={{
          after: 3,
          activePath: 'admin/themes',
          view: 'View all',
          hide: 'Hide',
        }}
        items={channelResults}
      />,
      {...context},
    );

    expect(findByTestID(channels, 'ToggleViewAll').exists()).toBe(true);
  });

  it('passes the props to Item', () => {
    const section = mountWithNavigationProvider(
      <Section
        title="test"
        items={[
          {
            label: 'some label',
            url: '/admin',
            disabled: false,
          },
        ]}
        action={{
          icon: 'placeholder',
          accessibilityLabel: 'This is a test section',
          onClick: noop,
        }}
        separator
      />,
      {...context},
    );

    expect(section.find(Item).props()).toMatchObject({
      url: '/admin',
      disabled: false,
      label: 'some label',
    });
  });

  it('displays the itemsPrefix when passed', () => {
    const section = mountWithNavigationProvider(
      <Section
        title="test"
        items={[
          {
            label: 'some label',
            url: '/admin',
            disabled: false,
          },
        ]}
        action={{
          icon: 'placeholder',
          accessibilityLabel: 'This is a test section',
          onClick: noop,
        }}
        itemsPrefix={
          <div className="ItemsPrefixComponent">
            <p>itemsPrefix goodness</p>
          </div>
        }
        separator
      />,
      {...context},
    );

    expect(section.find('.ItemsPrefixComponent').exists()).toBe(true);
  });

  it('calls onClick callback when onClick on Item is triggered', () => {
    const onClickSpy = jest.fn();
    const section = mountWithNavigationProvider(
      <Section
        title="test"
        items={[
          {
            label: 'some label',
            url: '/admin',
            disabled: false,
            onClick: onClickSpy,
          },
        ]}
        action={{
          icon: 'placeholder',
          accessibilityLabel: 'This is a test section',
          onClick: noop,
        }}
        separator
      />,
      {...context},
    );

    trigger(section.find(Item), 'onClick');
    animationFrame.runFrame();

    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});

function mountWithNavigationProvider(
  node: React.ReactElement,
  context: React.ContextType<typeof NavigationContext> = {location: ''},
) {
  return mountWithAppProvider(
    <NavigationContext.Provider value={context}>
      {node}
    </NavigationContext.Provider>,
  );
}

function noop() {}
