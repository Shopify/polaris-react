import React from 'react';
// eslint-disable-next-line no-restricted-imports
import {findByTestID, mountWithAppProvider} from 'test-utilities/legacy';
import {Link} from 'components';

import {Tooltip} from '../Tooltip';
import {TooltipOverlay} from '../components';

describe('<Tooltip />', () => {
  const tooltip = mountWithAppProvider(
    <Tooltip content="Inner content">
      <Link>link content</Link>
    </Tooltip>,
  );

  const wrapperComponent = findByTestID(tooltip, 'WrapperComponent');

  it('renders its children', () => {
    expect(tooltip.find('button').exists()).toBe(true);
  });

  it('does not render initially', () => {
    expect(findByTestID(tooltip, 'TooltipOverlayLabel').exists()).toBe(false);
  });

  it('renders initially when active is true', () => {
    const tooltipActive = mountWithAppProvider(
      <Tooltip content="Inner content" active>
        <Link>link content</Link>
      </Tooltip>,
    );
    expect(findByTestID(tooltipActive, 'TooltipOverlayLabel').exists()).toBe(
      true,
    );
  });

  it('passes preventInteraction to TooltipOverlay when dismissOnMouseOut is true', () => {
    const tooltipPreventInteraction = mountWithAppProvider(
      <Tooltip content="Inner content" active dismissOnMouseOut>
        <Link>link content</Link>
      </Tooltip>,
    );
    expect(
      tooltipPreventInteraction.find(TooltipOverlay).prop('preventInteraction'),
    ).toBe(true);
  });

  it('renders on mouseOver', () => {
    wrapperComponent.simulate('mouseOver');
    expect(findByTestID(tooltip, 'TooltipOverlayLabel').exists()).toBe(true);
  });

  it('renders on focus', () => {
    wrapperComponent.simulate('focus');
    expect(findByTestID(tooltip, 'TooltipOverlayLabel').exists()).toBe(true);
  });

  it('unrenders its children on blur', () => {
    wrapperComponent.simulate('blur');
    expect(findByTestID(tooltip, 'TooltipOverlayLabel').exists()).toBe(false);
  });

  it('unrenders its children on mouseLeave', () => {
    wrapperComponent.simulate('mouseLeave');
    expect(findByTestID(tooltip, 'TooltipOverlayLabel').exists()).toBe(false);
  });

  it('does not render when active is false', () => {
    const tooltipActive = mountWithAppProvider(
      <Tooltip content="Inner content" active={false}>
        <Link>link content</Link>
      </Tooltip>,
    );
    expect(findByTestID(tooltipActive, 'TooltipOverlayLabel').exists()).toBe(
      false,
    );
  });
});
