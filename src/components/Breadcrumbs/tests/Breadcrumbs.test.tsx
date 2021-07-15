import React from 'react';
import {mountWithApp} from 'test-utilities';

import type {CallbackAction, LinkAction} from '../../../types';
import {Breadcrumbs} from '../Breadcrumbs';
import {VisuallyHidden} from '../../VisuallyHidden';

describe('<Breadcrumbs />', () => {
  describe('url', () => {
    it('uses <a> tags when passed a LinkAction', () => {
      const linkBreadcrumbs: LinkAction[] = [
        {
          content: 'Products',
          url: 'https://www.shopify.com',
        },
      ];

      const breadcrumbs = mountWithApp(
        <Breadcrumbs breadcrumbs={linkBreadcrumbs} />,
      );

      expect(breadcrumbs).toContainReactComponentTimes('a', 1);
    });

    it('passes the accessibilityLabel through to <a> tag', () => {
      const linkBreadcrumbs: LinkAction[] = [
        {
          content: 'Products',
          url: 'https://shopify.com',
          accessibilityLabel: 'Go to Products',
        },
      ];

      const breadcrumbs = mountWithApp(
        <Breadcrumbs breadcrumbs={linkBreadcrumbs} />,
      );

      expect(breadcrumbs).toContainReactComponent('a', {
        'aria-label': 'Go to Products',
      });
    });
  });

  describe('onAction()', () => {
    it('uses <button> tags when passed a CallbackAction', () => {
      const callbackBreadcrumbs: CallbackAction[] = [
        {
          content: 'Products',
          onAction: noop,
        },
      ];

      const breadcrumbs = mountWithApp(
        <Breadcrumbs breadcrumbs={callbackBreadcrumbs} />,
      );

      expect(breadcrumbs).toContainReactComponentTimes('button', 1);
    });

    it('passes accessibilityLabel through to <button> tag', () => {
      const callbackBreadcrumbs: CallbackAction[] = [
        {
          content: 'Products',
          onAction: noop,
          accessibilityLabel: 'Go to Products',
        },
      ];

      const breadcrumbs = mountWithApp(
        <Breadcrumbs breadcrumbs={callbackBreadcrumbs} />,
      );

      expect(breadcrumbs).toContainReactComponent('button', {
        'aria-label': 'Go to Products',
      });
    });

    it('triggers the callback function when clicked', () => {
      const spy = jest.fn();
      const callbackBreadcrumbs: CallbackAction[] = [
        {
          content: 'Products',
          onAction: spy,
        },
      ];

      const breadcrumbs = mountWithApp(
        <Breadcrumbs breadcrumbs={callbackBreadcrumbs} />,
      );

      breadcrumbs.find('button')!.trigger('onClick');
      expect(spy).toHaveBeenCalled();
    });
  });

  const linkBreadcrumbs: LinkAction[] = [
    {
      content: 'Products',
      url: 'https://www.shopify.com',
    },
  ];

  it('renders breadcrumb content as a visually hidden label when the new design language is enabled', () => {
    const wrapper = mountWithApp(<Breadcrumbs breadcrumbs={linkBreadcrumbs} />);

    expect(wrapper.find(VisuallyHidden))!.toContainReactText('Products');
  });

  it('renders nothing when empty', () => {
    const wrapper = mountWithApp(<Breadcrumbs breadcrumbs={[]} />);

    expect(wrapper.html()).toBe('');
  });
});

function noop() {}
