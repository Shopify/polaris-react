import React from 'react';
import {mountWithApp} from 'test-utilities';

import {Search} from '../Search';
import {SearchDismissOverlay} from '../../SearchDismissOverlay';

describe('<Search />', () => {
  it('mounts', () => {
    const search = mountWithApp(<Search />);
    expect(search).not.toBeNull();
  });

  it('renders its children', () => {
    const search = mountWithApp(<Search>Hello Polaris</Search>);
    expect(search).toContainReactText('Hello Polaris');
  });

  it('renders a SearchDismissOverlay', () => {
    const search = mountWithApp(<Search visible>Hello Polaris</Search>);
    expect(search).toContainReactComponent(SearchDismissOverlay);
  });

  it('passes the overlayVisible prop to SearchDismissOverlay', () => {
    const search = mountWithApp(
      <Search visible overlayVisible>
        Hello Polaris
      </Search>,
    );

    expect(search).toContainReactComponent(SearchDismissOverlay, {
      visible: true,
    });
  });
});
