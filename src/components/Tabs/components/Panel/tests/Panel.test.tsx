import React from 'react';
import {mountWithApp} from 'test-utilities';

import {Panel} from '../Panel';

describe('<Panel />', () => {
  it('adds the tabpanel role', () => {
    const panel = mountWithApp(<Panel id="panel" tabID="tab" />);
    expect(panel).toContainReactComponent('div', {
      role: 'tabpanel',
    });
  });

  describe('id', () => {
    it('uses the ID for panel', () => {
      const panel = mountWithApp(<Panel id="my-panel" tabID="my-tab" />);
      expect(panel).toContainReactComponent('div', {
        id: 'my-panel',
      });
    });
  });

  describe('tabID', () => {
    it('uses the ID as the labeling element', () => {
      const panel = mountWithApp(<Panel id="my-panel" tabID="my-tab" />);
      expect(panel).toContainReactComponent('div', {
        'aria-labelledby': 'my-tab',
      });
    });
  });
});
