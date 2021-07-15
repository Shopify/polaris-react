import React from 'react';
import {mountWithApp} from 'test-utilities';
import {ActionList, Popover} from 'components';

import {Menu} from '../Menu';
import {Message} from '../components';

describe('<Menu />', () => {
  const defaultProps = {
    activatorContent: 'Activate',
    actions: [],
    onOpen: noop,
    onClose: noop,
    open: false,
    message: {
      title: 'polaris',
      description: 'hello polaris',
      action: {onClick: noop, content: 'onClick'},
      link: {
        to: '/',
        content: 'Home',
      },
    },
  };

  it('renders the activator content', () => {
    const content = <div>Hello</div>;
    const menu = mountWithApp(
      <Menu {...defaultProps} activatorContent={content} />,
    );

    expect(menu).toContainReactComponent('div', {children: 'Hello'});
  });

  it('passes the actions prop down to the ActionList component', () => {
    const actions = [
      {
        items: [
          {
            content: 'foo',
          },
        ],
      },
    ];

    const menu = mountWithApp(
      <Menu {...defaultProps} actions={actions} open />,
    );

    expect(menu).toContainReactComponent(ActionList, {
      sections: actions,
    });
  });

  it('passes the open prop down to the Popover component', () => {
    const menu = mountWithApp(<Menu {...defaultProps} open />);

    expect(menu).toContainReactComponent(Popover, {
      active: true,
    });
  });

  it('passes badge to the Message component when it exists on the message prop', () => {
    const message = {
      title: 'polaris',
      description: 'hello polaris',
      action: {onClick: noop, content: 'onClick'},
      link: {
        to: '/',
        content: 'Home',
      },
      badge: {
        content: 'new',
        status: 'new' as 'new',
      },
    };
    const menu = mountWithApp(
      <Menu {...defaultProps} message={message} open />,
    );

    expect(menu.find(Message)!.prop('badge')).toStrictEqual(message.badge);
  });

  it('calls the onClose prop in the Popover onClose', () => {
    const onClose = jest.fn();
    const menu = mountWithApp(
      <Menu {...defaultProps} onClose={onClose} open />,
    );

    menu.find(Popover)!.trigger('onClose');

    expect(onClose).toHaveBeenCalled();
  });

  it('calls the onClose callback when clicking on any ActionList item', () => {
    const onClose = jest.fn();
    const menu = mountWithApp(
      <Menu {...defaultProps} onClose={onClose} open />,
    );

    menu.find(ActionList)!.triggerKeypath('onActionAnyItem');

    expect(onClose).toHaveBeenCalled();
  });

  it('calls the onOpen callback when clicking on the activator button', () => {
    const onOpenCallback = jest.fn();
    const menu = mountWithApp(
      <Menu {...defaultProps} onOpen={onOpenCallback} />,
    );

    menu.find('button')!.trigger('onClick');

    expect(onOpenCallback).toHaveBeenCalled();
  });

  it('renders the message content when a message is provided', () => {
    const menu = mountWithApp(<Menu {...defaultProps} open />);

    expect(menu).toContainReactComponent(Message);
  });

  describe('isFullHeight', () => {
    it('passes isFullHeight to popover as false if menu is not provided a message', () => {
      const {message, ...rest} = defaultProps;
      const menu = mountWithApp(<Menu {...rest} open />);

      expect(menu.find(Popover)!.prop('fullHeight')).toBe(false);
    });

    it('passes isFullHeight to popover as true if menu is provided a message', () => {
      const menu = mountWithApp(<Menu {...defaultProps} open />);

      expect(menu).toContainReactComponent(Popover, {
        fullHeight: true,
      });
    });
  });

  describe('accessibilityLabel', () => {
    it('passes accessibilityLabel to the popover activator', () => {
      const menu = mountWithApp(
        <Menu {...defaultProps} accessibilityLabel="User menu" />,
      );

      expect(menu).toContainReactComponent('button', {
        'aria-label': 'User menu',
      });
    });
  });
});

function noop() {}
