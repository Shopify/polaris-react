import React from 'react';
import {PlusMinor} from '@shopify/polaris-icons';
import {matchMedia} from '@shopify/jest-dom-mocks';
import {Icon, UnstyledLink, Indicator, Badge} from 'components';
// eslint-disable-next-line no-restricted-imports
import {trigger, mountWithAppProvider} from 'test-utilities/legacy';
import {NavigationContext} from '../../../context';

import {Item, ItemProps} from '../Item';
import {Secondary} from '../components';

describe('<Nav.Item />', () => {
  beforeEach(() => {
    matchMedia.mock();
  });

  afterEach(() => {
    matchMedia.restore();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('sets expanded to false on resize when !navigationBarCollapsed and location does not match', () => {
    const spy = jest.fn();
    matchMedia.setMedia(() => ({addListener: spy}));
    const item = mountWithNavigationProvider(
      <Item
        label="some label"
        url="/admin/orders"
        subNavigationItems={[
          {
            url: '/admin/draft_orders',
            disabled: false,
            label: 'draft orders',
          },
        ]}
      />,
      {
        location: '/admin/products',
      },
    );

    const mediaAddListener = spy.mock.calls[0][0];

    matchMedia.setMedia(() => ({matches: true}));
    trigger(item.find(UnstyledLink).first(), 'onClick', {
      preventDefault: jest.fn(),
      currentTarget: {
        getAttribute: () => '/admin/orders',
      },
    });

    expect(item.find(Secondary).prop('expanded')).toBe(true);

    matchMedia.setMedia(() => ({matches: false}));
    mediaAddListener();
    item.update();

    expect(item.find(Secondary).exists()).toBe(false);
  });

  it('remains expanded on resize when navigationBarCollapsed and location matches', () => {
    const item = itemForLocation('/admin/orders');

    matchMedia.setMedia(() => ({matches: true}));
    trigger(item.find(UnstyledLink).first(), 'onClick', {
      preventDefault: jest.fn(),
      currentTarget: {
        getAttribute: () => '/admin/orders',
      },
    });

    expect(item.find(Secondary).prop('expanded')).toBe(true);
    matchMedia.setMedia(() => ({matches: false}));
    expect(item.find(Secondary).prop('expanded')).toBe(true);
  });

  describe('renders', () => {
    it('renders a button when url is not provided', () => {
      const item = mountWithNavigationProvider(
        <Item
          label="some label"
          disabled={false}
          subNavigationItems={[
            {
              url: '/admin/draft_orders',
              disabled: false,
              label: 'draft orders',
            },
          ]}
        />,
        {
          location: '/admin/orders',
        },
      );

      const button = item.find('button');
      expect(button.exists()).toBe(true);
    });

    it('renders an UnstyledLink when url is provided', () => {
      const item = itemForLocation('/admin/orders');

      const link = item.find(UnstyledLink);
      expect(link.exists()).toBe(true);
    });

    it('renders a small badge with new status if the prop is provided with a string', () => {
      const item = mountWithNavigationProvider(
        <Item label="some label" badge="1" />,
      );

      expect(item.find(Badge).props()).toMatchObject({
        status: 'new',
        size: 'small',
        children: '1',
      });
    });

    it('renders a badge if the prop is provided with an element', () => {
      const item = mountWithNavigationProvider(
        <Item label="some label" badge={<Badge>Custom badge</Badge>} />,
      );

      expect(item.find(Badge).text()).toContain('Custom badge');
    });

    it('renders a single new badge even if a badge prop is also provided', () => {
      const item = mountWithNavigationProvider(
        <Item label="some label" badge={<Badge>Custom badge</Badge>} new />,
      );
      const badge = item.find(Badge);

      expect(badge).toHaveLength(1);
      expect(badge.text()).toContain('New');
    });
  });

  describe('with SubNavigationItems', () => {
    it('renders expanded when given url is a perfect match for location', () => {
      const item = itemForLocation('/admin/orders');

      const secondary = item.find(Secondary);
      expect(secondary.exists()).toBe(true);
    });

    it('renders expanded when a url is a startsWith match for location', () => {
      const item = itemForLocation('/admin/orders?foo=bar');

      const secondary = item.find(Secondary);
      expect(secondary.exists()).toBe(true);
    });

    it('renders expanded when a child is a perfect match for location', () => {
      const item = itemForLocation('/admin/draft_orders');

      const secondary = item.find(Secondary);
      expect(secondary.exists()).toBe(true);
    });

    it('renders expanded when a child is a startsWith match for location', () => {
      const item = itemForLocation('/admin/draft_orders?foo=bar');

      const secondary = item.find(Secondary);
      expect(secondary.exists()).toBe(true);
    });

    it('does not render expanded when parent and children both have no match on the location', () => {
      const item = itemForLocation('/admin/notARealRoute');

      const secondary = item.find(Secondary);
      expect(secondary.exists()).toBe(false);
    });
  });

  describe('with exactMatch true', () => {
    it('renders expanded when given url is a perfect match for location', () => {
      const item = itemForLocation('/admin/orders', {exactMatch: true});

      const secondary = item.find(Secondary);
      expect(secondary.exists()).toBe(true);
    });

    it('does not render expanded when no exact match on url', () => {
      const item = itemForLocation('/admin/orders/1', {exactMatch: true});

      const secondary = item.find(Secondary);
      expect(secondary.exists()).toBe(false);
    });

    it('still renders expanded when there is a match on url for one of it`s children', () => {
      const item = itemForLocation('/admin/draft_orders', {exactMatch: true});

      const secondary = item.find(Secondary);
      expect(secondary.exists()).toBe(true);
    });
  });

  describe('delegated props', () => {
    it('delegates icon to <Icon />', () => {
      const item = mountWithNavigationProvider(
        <Item label="some label" url="foo" disabled={false} icon={PlusMinor} />,
        {
          location: 'bar',
        },
      );
      expect(item.find(Icon).prop('source')).toBe(PlusMinor);
    });

    it('delegates label to <UnstyledLink />', () => {
      const item = mountWithNavigationProvider(
        <Item url="foo" disabled={false} label="baz" />,
        {
          location: 'bar',
        },
      );

      expect(item.find(UnstyledLink).text()).toBe('baz');
    });

    it('delegates url to <UnstyledLink />', () => {
      const item = mountWithNavigationProvider(
        <Item label="some label" url="foo" disabled={false} />,
        {
          location: 'bar',
        },
      );

      expect(item.find(UnstyledLink).prop('url')).toBe('foo');
    });

    it('delegates disabled to <UnstyledLink />', () => {
      const item = mountWithNavigationProvider(
        <Item label="some label" url="foo" disabled />,
        {
          location: 'bar',
        },
      );

      expect(item.find(UnstyledLink).prop('aria-disabled')).toBe(true);
    });

    it('delegates accessibilityLabel to <UnstyledLink />', () => {
      const accessibilityLabel = 'some label a11y';
      const item = mountWithNavigationProvider(
        <Item
          label="some label"
          url="foo"
          accessibilityLabel={accessibilityLabel}
        />,
        {
          location: 'bar',
        },
      );

      expect(item.find(UnstyledLink).prop('aria-label')).toBe(
        accessibilityLabel,
      );
    });

    it('delegates onClick to <UnstyledLink />', () => {
      const spy = jest.fn();
      const item = mountWithNavigationProvider(
        <Item label="some label" url="foo" disabled={false} onClick={spy} />,
        {location: 'bar'},
      );

      item
        .find(UnstyledLink)
        .find('a')
        .simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('sets aria labels on <button />', () => {
      const item = mountWithNavigationProvider(
        <Item
          label="some label"
          accessibilityLabel="some a11y label"
          disabled={false}
          onClick={noop}
        />,
        {location: 'bar'},
      );

      expect(item.find('button').props()).toMatchObject({
        'aria-disabled': false,
        'aria-label': 'some a11y label',
      });
    });

    it('calls onNavigationDismiss from context on click', () => {
      const context = {
        location: 'foo',
        onNavigationDismiss: jest.fn(),
      };

      const item = mountWithNavigationProvider(
        <Item label="some label" url="foo" disabled={false} />,
        {...context},
      );
      item
        .find(UnstyledLink)
        .find('a')
        .simulate('click');
      expect(context.onNavigationDismiss).toHaveBeenCalledTimes(1);
    });

    it('calls onNavigationDismiss from context on sub item click', () => {
      const context = {
        location: 'foo',
        onNavigationDismiss: jest.fn(),
      };

      const item = mountWithNavigationProvider(
        <Item
          label="some label"
          url="foo"
          disabled={false}
          subNavigationItems={[
            {
              label: 'bar',
              url: 'baz',
              disabled: false,
            },
          ]}
        />,
        {...context},
      );

      item
        .find(UnstyledLink)
        .last()
        .find('a')
        .simulate('click');
      expect(context.onNavigationDismiss).toHaveBeenCalledTimes(1);
    });
  });

  it('renders an indicator if a sub navigation item is marked as new', () => {
    const spy = jest.fn();
    matchMedia.setMedia(() => ({addListener: spy}));
    const item = mountWithNavigationProvider(
      <Item
        label="some label"
        url="/admin/orders"
        subNavigationItems={[
          {
            url: '/admin/draft_orders',
            disabled: false,
            label: 'draft orders',
            new: true,
          },
        ]}
      />,
      {
        location: '/admin/products',
      },
    );

    expect(item.find(Indicator).exists()).toBe(true);
  });

  it('renders a new badge on sub navigation item if marked as new', () => {
    const spy = jest.fn();
    matchMedia.setMedia(() => ({addListener: spy}));
    const item = mountWithNavigationProvider(
      <Item
        label="some label"
        url="/admin/orders"
        subNavigationItems={[
          {
            url: '/admin/orders',
            disabled: false,
            label: 'orders',
          },
          {
            url: '/admin/draft_orders',
            disabled: false,
            label: 'draft orders',
            new: true,
          },
        ]}
      />,
      {
        location: '/admin/orders',
      },
    );

    expect(
      item
        .find(Item)
        .last()
        .find(Badge)
        .exists(),
    ).toBe(true);
  });

  describe('small screens', () => {
    let matchMedia: jest.SpyInstance;
    beforeEach(() => {
      matchMedia = jest.spyOn(window, 'matchMedia');
      matchMedia.mockImplementation(() => {
        return {
          matches: true,
          addListener() {},
          removeListener() {},
        };
      });
    });

    afterEach(() => {
      matchMedia.mockRestore();
    });

    describe('onClick', () => {
      it('will fire once on small screens when onNavigationDismiss is defined', () => {
        const spy = jest.fn();
        const item = mountWithNavigationProvider(
          <Item label="some label" disabled={false} onClick={spy} />,
          {
            location: 'bar',
            onNavigationDismiss: noop,
          },
        );

        item.find('button').simulate('click');
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('will fire once on small screens when onNavigationDismiss is undefined', () => {
        const spy = jest.fn();
        const item = mountWithNavigationProvider(
          <Item label="some label" disabled={false} onClick={spy} />,
          {
            location: 'bar',
          },
        );

        item.find('button').simulate('click');
        expect(spy).toHaveBeenCalledTimes(1);
      });
    });
  });
});

function noop() {}

function itemForLocation(location: string, overrides: Partial<ItemProps> = {}) {
  return mountWithNavigationProvider(
    <Item
      label="some label"
      url="/admin/orders"
      disabled={false}
      subNavigationItems={[
        {
          url: '/admin/draft_orders',
          disabled: false,
          label: 'draft orders',
        },
      ]}
      {...overrides}
    />,
    {location},
  ).find(Item);
}

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
