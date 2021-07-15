import React from 'react';
import {mountWithApp} from 'test-utilities';
import {UnstyledLink} from 'components';

import {Item} from '../Item';

describe('<Item />', () => {
  const mockProps = {
    id: 'foo',
    focused: false,
  };

  it('renders UnstyledLink when item has url', () => {
    const url = 'http://shopify.com';

    const item = mountWithApp(<Item {...mockProps} url={url} />);

    expect(item).toContainReactComponent(UnstyledLink);
    expect(item).not.toContainReactComponent('button');
  });

  it('renders button when item does not have url', () => {
    const item = mountWithApp(<Item {...mockProps} url={undefined} />);

    expect(item).not.toContainReactComponent(UnstyledLink);
    expect(item).toContainReactComponent('button');
  });
});
