import React from 'react';
// eslint-disable-next-line no-restricted-imports
import {mountWithAppProvider} from 'test-utilities/legacy';
import {UnstyledLink} from 'components/UnstyledLink';

describe('<UnstyledLink />', () => {
  describe('custom link component', () => {
    it('uses a custom link component instead of an anchor', () => {
      const CustomLinkComponent = () => <div />;
      const anchorElement = mountWithAppProvider(
        <UnstyledLink external url="https://shopify.com" />,
        {link: CustomLinkComponent},
      ).find(CustomLinkComponent);

      expect(anchorElement).toHaveLength(1);
    });

    it('doesn’t have polaris prop', () => {
      const CustomLinkComponent = () => <div />;
      const anchorElement = mountWithAppProvider(
        <UnstyledLink external url="https://shopify.com" />,
        {link: CustomLinkComponent},
      ).find(CustomLinkComponent);

      expect(anchorElement.prop('polaris')).not.toBeDefined();
    });
  });

  describe('external', () => {
    it('adds rel and target attributes', () => {
      const anchorElement = mountWithAppProvider(
        <UnstyledLink external url="https://shopify.com" />,
      ).find('a');
      expect(anchorElement.prop('target')).toBe('_blank');
      expect(anchorElement.prop('rel')).toBe('noopener noreferrer');
    });

    it('adds custom rel attributes when provided', () => {
      const anchorElement = mountWithAppProvider(
        <UnstyledLink external rel="nofollow" />,
      ).find('a');
      expect(anchorElement.prop('rel')).toBe('nofollow');
    });
  });

  describe('download', () => {
    it('adds true as a boolean attribute', () => {
      const anchorElement = mountWithAppProvider(
        <UnstyledLink download url="https://shopify.com" />,
      ).find('a');
      expect(anchorElement.prop('download')).toBe(true);
    });

    it('adds the provided string', () => {
      const anchorElement = mountWithAppProvider(
        <UnstyledLink download="file.txt" url="https://shopify.com" />,
      ).find('a');
      expect(anchorElement.prop('download')).toBe('file.txt');
    });

    it('does not add the attribute when not set', () => {
      const anchorElement = mountWithAppProvider(
        <UnstyledLink url="https://shopify.com" />,
      ).find('a');
      expect(anchorElement.prop('download')).toBeFalsy();
    });
  });
});
