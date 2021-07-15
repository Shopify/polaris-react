import React from 'react';
import {mountWithApp} from 'test-utilities';
import {Button} from 'components';

import {Item} from '../Item';

describe('<Item />', () => {
  describe('button', () => {
    it('renders the given button', () => {
      const button = <Button>Button text</Button>;
      const item = mountWithApp(<Item button={button} />);
      expect(item.find('button')).toContainReactText('Button text');
    });

    it('sets focus styles when focused', () => {
      const button = <Button>Button text</Button>;
      const item = mountWithApp(<Item button={button} />);
      item.find('div')!.trigger('onFocus');
      expect(item.find('div')).toHaveReactProps({
        className: 'Item Item-focused',
      });
    });
  });
});
