import React from 'react';
import {mountWithApp} from 'test-utilities';

import {SearchDismissOverlay} from '../SearchDismissOverlay';

describe('<SearchDismissOverlay />', () => {
  it('mounts', () => {
    const search = mountWithApp(<SearchDismissOverlay visible={false} />);
    expect(search).not.toBeNull();
  });

  it('calls onDismiss when clicked', () => {
    const spy = jest.fn();
    const search = mountWithApp(
      <SearchDismissOverlay visible={false} onDismiss={spy} />,
    );

    search.find('div')!.trigger('onClick', {
      target: search!.domNode as HTMLInputElement,
    });

    expect(spy).toHaveBeenCalled();
  });
});
