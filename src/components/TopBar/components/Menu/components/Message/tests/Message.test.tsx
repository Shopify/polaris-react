import React from 'react';
import {mountWithApp} from 'test-utilities';

import {Message} from '../Message';
import {Badge} from '../../../../../../Badge';

const messageProps = {
  title: 'Polaris',
  description: 'Hello Polaris',
  action: {
    onClick: noop,
    content: 'click me',
  },
  link: {to: '/', content: 'home'},
};

describe('<Message />', () => {
  it('mounts', () => {
    const message = mountWithApp(<Message {...messageProps} />);

    expect(message).not.toBeNull();
  });

  it('will not render badge content by default', () => {
    const message = mountWithApp(<Message {...messageProps} />);

    expect(message).not.toContainReactComponent(Badge);
  });

  it('renders a badge when the badge prop is provided', () => {
    const message = mountWithApp(
      <Message
        {...messageProps}
        badge={{content: 'new', status: 'new' as 'new'}}
      />,
    );

    expect(message).toContainReactComponent(Badge);
  });
});

function noop() {}
