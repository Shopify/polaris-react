import React from 'react';
import {mountWithApp} from 'tests/utilities';
import {setMediaWidth} from 'tests/utilities/breakpoints';

import {WithinContentContext} from '../../../utilities/within-content-context';
import {Card} from '..';
import {ShadowBevel} from '../../ShadowBevel';
import {Box} from '../../Box';

const heading = <p>Online store dashboard</p>;
const subheading = <p>View a summary of your online store performance</p>;

describe('Card', () => {
  it('has a child with prop withinContentContainer set to true', () => {
    function TestComponent(_: {withinContentContainer: any}) {
      return null;
    }

    const card = mountWithApp(
      <Card>
        <WithinContentContext.Consumer>
          {(withinContentContext) => {
            return (
              <TestComponent withinContentContainer={withinContentContext} />
            );
          }}
        </WithinContentContext.Consumer>
      </Card>,
    );
    expect(card).toContainReactComponent(TestComponent, {
      withinContentContainer: true,
    });
  });

  it('renders children', () => {
    const card = mountWithApp(
      <Card>
        {heading}
        {subheading}
      </Card>,
    );

    expect(card).toContainReactComponentTimes('p', 2);
  });

  it('sets default border radius when roundedAbove breakpoint passed in', () => {
    setMediaWidth('breakpoints-sm');
    const card = mountWithApp(
      <Card roundedAbove="sm">
        {heading}
        {subheading}
      </Card>,
    );

    expect(card).toContainReactComponent(ShadowBevel, {
      borderRadius: '300',
    });
  });

  it('uses default overflow values if none provided', () => {
    const card = mountWithApp(<Card>{heading}</Card>);
    expect(card).toContainReactComponent(Box, {
      overflowX: 'clip',
      overflowY: 'clip',
    });
  });

  it('forwards overflowX and overflowY props to Box', () => {
    const card = mountWithApp(
      <Card overflowX="hidden" overflowY="clip">
        {heading}
        {subheading}
      </Card>,
    );

    expect(card).toContainReactComponent(Box, {
      overflowX: 'hidden',
      overflowY: 'clip',
    });
  });
});
