import React from 'react';
import {ViewMinor} from '@shopify/polaris-icons';
import {mountWithApp} from 'test-utilities';
import {Avatar} from 'components/Avatar';

import {UserMenu} from '../UserMenu';
import {Menu} from '../../Menu';

describe('<UserMenu />', () => {
  const userMenuProps = {
    actions: [{items: [{icon: ViewMinor}]}],
    name: '',
    initials: '',
    open: false,
    onToggle: noop,
  };

  it('renders with the given props', () => {
    const userMenu = mountWithApp(<UserMenu {...userMenuProps} />);

    expect(userMenu).toContainReactComponent(Menu, {
      actions: userMenuProps.actions,
      open: userMenuProps.open,
      onOpen: userMenuProps.onToggle,
      onClose: userMenuProps.onToggle,
    });
    expect(userMenu).toContainReactComponent('p', {
      children: userMenuProps.name,
    });
    expect(userMenu).toContainReactComponent(Avatar, {
      initials: userMenuProps.initials,
    });
  });

  it('renders with the given props when in mobile view but no mobile props are available', () => {
    const userMenu = mountWithApp(<UserMenu {...userMenuProps} />);

    expect(userMenu).toContainReactComponent(Menu, {
      actions: userMenuProps.actions,
      open: userMenuProps.open,
      onOpen: userMenuProps.onToggle,
      onClose: userMenuProps.onToggle,
    });
    expect(userMenu).toContainReactComponent('p', {
      children: userMenuProps.name,
    });
    expect(userMenu).toContainReactComponent(Avatar, {
      initials: userMenuProps.initials,
    });
  });

  it('passes accessibilityLabel to the menu component', () => {
    const userMenu = mountWithApp(
      <UserMenu {...userMenuProps} accessibilityLabel="User menu" />,
    );

    expect(userMenu).toContainReactComponent(Menu, {
      accessibilityLabel: 'User menu',
    });
  });
});

function noop() {}
