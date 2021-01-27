import React, {useEffect, useRef} from 'react';
import {
  CirclePlusMinor,
  CircleTickMajor,
  CircleInformationMajor,
  CircleAlertMajor,
  DiamondAlertMajor,
} from '@shopify/polaris-icons';
import {mountWithApp} from 'test-utilities/react-testing';
// eslint-disable-next-line no-restricted-imports
import {mountWithAppProvider} from 'test-utilities/legacy';
import {BannerContext} from 'utilities/banner-context';
import {Button, Icon, UnstyledButton, UnstyledLink, Heading} from 'components';

import {WithinContentContext} from '../../../utilities/within-content-context';
import {Banner, BannerHandles} from '../Banner';

describe('<Banner />', () => {
  it('renders a title', () => {
    const banner = mountWithAppProvider(<Banner title="Banner title" />);
    expect(banner.find(Heading).contains('Banner title')).toBe(true);
  });

  it('passes a p element to Heading', () => {
    const banner = mountWithAppProvider(<Banner title="Banner title" />);
    expect(banner.find(Heading).prop('element')).toBe('p');
  });

  it('passes the provided icon source to Icon', () => {
    const banner = mountWithAppProvider(<Banner icon={CirclePlusMinor} />);
    expect(banner.find(Icon).prop('source')).toBe(CirclePlusMinor);
  });

  it('uses a success circleCheckMark if status is success and sets a status aria role', () => {
    const banner = mountWithAppProvider(<Banner status="success" />);
    expect(banner.find(Icon).prop('source')).toBe(CircleTickMajor);
    expect(banner.find(Icon).prop('color')).toBe('success');
    expect(banner.find('div').first().prop('role')).toBe('status');
  });

  it('uses a highlight circleInformation if status is info and sets a status aria role', () => {
    const banner = mountWithAppProvider(<Banner status="info" />);
    expect(banner.find(Icon).prop('source')).toBe(CircleInformationMajor);
    expect(banner.find(Icon).prop('color')).toBe('highlight');
    expect(banner.find('div').first().prop('role')).toBe('status');
  });

  it('uses a warning circleAlert if status is warning and sets an alert aria role', () => {
    const banner = mountWithAppProvider(<Banner status="warning" />);
    expect(banner.find(Icon).prop('source')).toBe(CircleAlertMajor);
    expect(banner.find(Icon).prop('color')).toBe('warning');
    expect(banner.find('div').first().prop('role')).toBe('alert');
  });

  it('uses a critical circleBarred if status is critical and sets an alert aria role', () => {
    const banner = mountWithAppProvider(<Banner status="critical" />);
    expect(banner.find(Icon).prop('source')).toBe(DiamondAlertMajor);
    expect(banner.find(Icon).prop('color')).toBe('critical');
    expect(banner.find('div').first().prop('role')).toBe('alert');
  });

  it('uses a default icon and aria role', () => {
    const banner = mountWithAppProvider(<Banner />);
    expect(banner.find(Icon).prop('source')).toBe(CircleInformationMajor);
    expect(banner.find(Icon).prop('color')).toBe('base');
    expect(banner.find('div').first().prop('role')).toBe('status');
  });

  it('disables aria-live when stopAnnouncements is enabled', () => {
    const politeBanner = mountWithAppProvider(<Banner />)
      .find('div')
      .filterWhere((element) => element.prop('aria-live') === 'polite');
    expect(politeBanner).toBeTruthy();

    const quietBanner = mountWithAppProvider(<Banner stopAnnouncements />)
      .find('div')
      .filterWhere((element) => element.prop('aria-live') === 'off');
    expect(quietBanner).toBeTruthy();
  });

  describe('action', () => {
    it('renders an unstyled button', () => {
      const bannerWithAction = mountWithAppProvider(
        <Banner
          title="Test"
          action={{
            content: 'Primary action',
          }}
        >
          Hello World
        </Banner>,
      );

      const bannerAction = bannerWithAction.find(UnstyledButton);

      expect(bannerAction.exists()).toBeTruthy();
      expect(bannerAction.text()).toBe('Primary action');
    });
  });

  describe('secondaryAction', () => {
    it('renders when a primary action is provided', () => {
      const bannerWithActions = mountWithAppProvider(
        <Banner
          title="Test"
          action={{
            content: 'Primary action',
          }}
          secondaryAction={{
            content: 'Secondary external link',
            url: 'https://test.com',
            external: true,
          }}
        >
          Hello World
        </Banner>,
      );

      const bannerSecondaryAction = bannerWithActions.find(UnstyledLink);

      expect(bannerSecondaryAction.exists()).toBeTruthy();
      expect(bannerSecondaryAction.text()).toBe(
        'Secondary external link (opens a new window)',
      );
    });

    it('renders when a primary action is not provided', () => {
      const bannerWithActions = mountWithAppProvider(
        <Banner
          title="Test"
          secondaryAction={{
            content: 'Secondary external link',
            url: 'https://test.com',
            external: true,
          }}
        >
          Hello World
        </Banner>,
      );

      const bannerSecondaryAction = bannerWithActions.find(UnstyledLink);

      expect(bannerSecondaryAction.exists()).toBeTruthy();
      expect(bannerSecondaryAction.text()).toBe(
        'Secondary external link (opens a new window)',
      );
    });
  });

  describe('onDismiss()', () => {
    it('is called when the dismiss button is clicked', () => {
      const spy = jest.fn();
      const banner = mountWithAppProvider(<Banner onDismiss={spy} />);
      banner.find(Button).simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });

  const bannerWithSecondaryAction = mountWithAppProvider(
    <Banner
      title="Test"
      action={{
        content: 'Primary action',
      }}
      secondaryAction={{
        content: 'Secondary external link',
        url: 'https://test.com',
        external: true,
      }}
    >
      Hello World
    </Banner>,
  );

  const unstyledLink = bannerWithSecondaryAction.find(UnstyledLink).find('a');

  it('creates an external link when external prop is true in secondaryAction', () => {
    expect(unstyledLink.prop('target')).toBe('_blank');
  });

  it('adds the noopener and noreferrer accessibility attributes to external link in secondaryAction', () => {
    expect(unstyledLink.prop('rel')).toBe('noopener noreferrer');
  });

  const bannerWithContentContext = mountWithAppProvider(
    <WithinContentContext.Provider value>
      <Banner
        action={{
          content: 'Primary action',
        }}
      >
        Some content
      </Banner>
    </WithinContentContext.Provider>,
  );

  it('renders an unstyled button with contentContext', () => {
    const button = bannerWithContentContext.find(UnstyledButton);
    expect(button.exists()).toBeTruthy();
  });

  describe('focus', () => {
    it('exposes a function that allows the banner to be programmatically focused', () => {
      function Test() {
        const banner = useRef<BannerHandles>(null);

        useEffect(() => {
          banner.current && banner.current.focus();
        }, []);

        return <Banner ref={banner} status="critical" />;
      }

      const testComponent = mountWithApp(<Test />);

      expect(document.activeElement).toBe(
        testComponent.find('div', {tabIndex: 0})!.domNode,
      );
    });

    describe('Focus className', () => {
      it('adds a keyFocused class to the banner on keyUp', () => {
        const banner = mountWithApp(<Banner />);

        const bannerDiv = banner.find('div', {
          className: 'Banner withinPage',
        });

        bannerDiv!.trigger('onKeyUp', {
          target: bannerDiv!.domNode as HTMLDivElement,
        });

        expect(banner).toContainReactComponent('div', {
          className: 'Banner keyFocused withinPage',
        });
      });

      it('does not add a keyFocused class onMouseUp', () => {
        const banner = mountWithApp(<Banner />);

        const bannerDiv = banner.find('div', {
          className: 'Banner withinPage',
        });

        bannerDiv!.trigger('onMouseUp', {
          currentTarget: bannerDiv!.domNode as HTMLDivElement,
        });

        expect(banner).toContainReactComponent('div', {
          className: 'Banner withinPage',
        });
      });
    });
  });

  describe('context', () => {
    it('passes the within banner context', () => {
      const Child: React.SFC = (_props) => {
        return (
          <BannerContext.Consumer>
            {(BannerContext) => {
              return BannerContext ? <div /> : null;
            }}
          </BannerContext.Consumer>
        );
      };

      const banner = mountWithAppProvider(
        <Banner>
          <Child />
        </Banner>,
      );

      const div = banner.find(Child).find('div').first();

      expect(div.exists()).toBe(true);
    });
  });

  describe('Icon', () => {
    it.each([
      ['Banner has a default status', null, 'base', CircleInformationMajor],
      ['Banner has a success status', 'success', 'success', CircleTickMajor],
      [
        'Banner has an info status',
        'info',
        'highlight',
        CircleInformationMajor,
      ],
      ['Banner has a warning status', 'warning', 'warning', CircleAlertMajor],
      [
        'Banner has a critical status',
        'critical',
        'critical',
        DiamondAlertMajor,
      ],
    ])(
      'Sets Icon props when: %s',
      (_: any, status: any, color: any, iconSource: any) => {
        const banner = mountWithApp(<Banner status={status} />);

        expect(banner.find(Icon)!.props).toStrictEqual({
          color,
          source: iconSource,
        });
      },
    );
  });
});
