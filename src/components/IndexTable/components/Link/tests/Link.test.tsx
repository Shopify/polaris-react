import React from 'react';
import {mountWithApp} from 'test-utilities';

import {UnstyledLink} from '../../../../UnstyledLink';
import {Link} from '../Link';

describe('<Link />', () => {
  it('renders an UnstyledLink with passed url', () => {
    const link = mountWithApp(<Link url="https://shopify.com">Test link</Link>);

    expect(link).toContainReactComponent(UnstyledLink, {
      url: 'https://shopify.com',
    });
  });

  it('renders passed children as content', () => {
    const link = mountWithApp(
      <Link url="https://shopify.com">Test link content</Link>,
    );
    const unstyledLink = link.find(UnstyledLink);

    expect(unstyledLink!.text()).toContain('Test link content');
  });

  it('stops click propagation', () => {
    const spy = jest.fn();
    const link = mountWithApp(
      <Link url="https://shopify.com">Test link content</Link>,
    );
    link.find(UnstyledLink)!.trigger('onClick', {stopPropagation: spy});

    expect(spy).toHaveBeenCalled();
  });

  it('invokes provided onClick when clicked', () => {
    const onClickSpy = jest.fn();
    const link = mountWithApp(
      <Link url="https://shopify.com" onClick={onClickSpy}>
        Test link content
      </Link>,
    );
    link.find(UnstyledLink)!.trigger('onClick', {stopPropagation: () => {}});

    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });

  it('adds the primary link data attribute when primary is true', () => {
    const link = mountWithApp(
      <Link url="https://shopify.com" primary>
        Test link content
      </Link>,
    );
    expect(link).toContainReactComponent(UnstyledLink, {
      'data-primary-link': true,
    });
  });
});
