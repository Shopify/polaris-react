import React from 'react';
import {mountWithApp} from 'test-utilities';

import {Tab} from '../Tab';

describe('<Tab />', () => {
  it('has the tab role', () => {
    const tab = mountWithApp(<Tab id="my-tab">Tab</Tab>);

    expect(tab).toContainReactComponent('button', {
      role: 'tab',
    });
  });

  describe('id', () => {
    it('uses the ID for the underlying actionable item', () => {
      const tab = mountWithApp(<Tab id="my-tab">Tab</Tab>);
      expect(tab).toContainReactComponent('button', {
        id: 'my-tab',
      });
    });
  });

  describe('selected', () => {
    it('is aria-selected when the tab is selected', () => {
      const tab = mountWithApp(
        <Tab id="my-tab" selected>
          Tab
        </Tab>,
      );

      expect(tab).toContainReactComponent('button', {
        'aria-selected': true,
      });
    });

    it('is not aria-selected when the tab is not selected', () => {
      let tab = mountWithApp(<Tab id="my-tab">Tab</Tab>);
      expect(tab.find('button')!.prop('aria-selected')).toBeFalsy();

      tab = mountWithApp(
        <Tab id="my-tab" selected={false}>
          Tab
        </Tab>,
      );

      expect(tab).toContainReactComponent('button', {
        'aria-selected': false,
      });
    });
  });

  describe('panelID', () => {
    it('uses the panelID as the controlled element’s ID', () => {
      const tab = mountWithApp(
        <Tab id="my-tab" panelID="my-panel">
          Tab
        </Tab>,
      );

      expect(tab).toContainReactComponent('button', {
        'aria-controls': 'my-panel',
      });
    });
  });

  describe('url', () => {
    it('uses an anchor tag when a URL is passed', () => {
      const tab = mountWithApp(
        <Tab url="https://shopify.com" id="my-tab">
          Tab
        </Tab>,
      );

      expect(tab).toContainReactComponent('a', {
        href: 'https://shopify.com',
      });
    });
  });

  describe('onClick()', () => {
    it('is called when the underlying button is clicked', () => {
      const spy = jest.fn();
      const tab = mountWithApp(
        <Tab id="my-tab" onClick={spy}>
          Tab
        </Tab>,
      );
      tab.find('button')!.trigger('onClick');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('accessibilityLabel()', () => {
    it('uses the label for aria-label', () => {
      const label = 'Tab contents';

      const button = mountWithApp(
        <Tab id="my-tab" accessibilityLabel={label}>
          Tab
        </Tab>,
      );

      expect(button).toContainReactComponent('button', {
        'aria-label': label,
      });

      const anchor = mountWithApp(
        <Tab id="my-tab" url="https://shopify.com" accessibilityLabel={label}>
          Tab
        </Tab>,
      );

      expect(anchor).toContainReactComponent('a', {
        'aria-label': label,
      });
    });
  });
});
