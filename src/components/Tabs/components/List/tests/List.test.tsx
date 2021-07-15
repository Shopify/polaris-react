import React from 'react';
import {mountWithApp} from 'test-utilities';

import {List} from '../List';
import {Item} from '../../Item';

describe('<List />', () => {
  const mockProps = {
    focusIndex: -1,
    disclosureTabs: [
      {
        id: 'repeat-customers',
        content: 'Repeat customers',
      },
      {
        id: 'prospects',
        content: 'Prospects',
      },
    ],
  };

  it('renders an unordered list', () => {
    const list = mountWithApp(<List {...mockProps} />);
    expect(list).toContainReactComponent('ul');
  });

  describe('focusIndex', () => {
    it('does not pass focusIndex to last Item', () => {
      const focusIndex = 1;
      const list = mountWithApp(
        <List {...mockProps} focusIndex={focusIndex} />,
      );
      expect(list).toContainReactComponent(Item, {
        focused: false,
      });
    });

    it('passes focusIndex to first Item', () => {
      const focusIndex = 1;
      const list = mountWithApp(
        <List {...mockProps} focusIndex={focusIndex} />,
      );
      expect(list).toContainReactComponent(Item, {
        focused: true,
      });
    });
  });

  describe('disclosureTabs', () => {
    const disclosureTabs = [
      {
        id: 'repeat-customers',
        content: 'Repeat customers',
      },
      {
        id: 'prospects',
        content: 'Prospects',
      },
    ];

    it('renders a button for each item in disclosureTabs', () => {
      const list = mountWithApp(
        <List {...mockProps} disclosureTabs={disclosureTabs} />,
      );
      expect(list).toContainReactComponentTimes('button', 2);
    });

    it('passes the id to the button', () => {
      const list = mountWithApp(
        <List {...mockProps} disclosureTabs={disclosureTabs} />,
      );
      expect(list).toContainReactComponent('button', {
        id: 'repeat-customers',
      });
    });
  });

  describe('<Item />', () => {
    const disclosureTabs = [
      {
        id: 'repeat-customers',
        content: 'Repeat customers',
      },
      {
        id: 'prospects',
        content: 'Prospects',
      },
    ];

    it('renders an Item for each item in disclosureTabs', () => {
      const list = mountWithApp(
        <List {...mockProps} disclosureTabs={disclosureTabs} />,
      );
      expect(list).toContainReactComponentTimes(Item, 2);
    });

    it('renders the provided content', () => {
      const list = mountWithApp(
        <List {...mockProps} disclosureTabs={disclosureTabs} />,
      );
      expect(list).toContainReactText('Repeat customers');
    });
  });
});
