# Unreleased changes

### Breaking changes

### Enhancements

- Added a split variant to `Button` ([#2329](https://github.com/Shopify/polaris-react/pull/2329))
- Allow DataTable headers to be React Elements ([#2635](https://github.com/Shopify/polaris-react/pull/2635))
- Added support for explicit order of items in `ActionMenu` ([2057](https://github.com/Shopify/polaris-react/pull/2057))
- Made the `DataTable` horizontal `Navigation` optional ([#2647](https://github.com/Shopify/polaris-react/pull/2647))

### Bug fixes

- Fixed `ReferenceError: React is not defined` in `Button` for the `esnext` build ([#2657](https://github.com/Shopify/polaris-react/pull/2657))
- Fixed scrolling with scrollbar not working in Popover when content changes on scroll ([#2627](https://github.com/Shopify/polaris-react/pull/2627))
- Fixed side-effects from being create during `Modal`s render ([#2644](https://github.com/Shopify/polaris-react/pull/2644))
- Work around a build crash when using create-react-app due to a bug in css parsing in `postcss-custom-properties` ([#2643](https://github.com/Shopify/polaris-react/pull/2643))
- Removed the `visited` CSS styling for tabs using the `url` prop ([#2639](https://github.com/Shopify/polaris-react/pull/2639))
- Fixed the `onClick` set `Navigation.Item.subNavigationItems` not being passed through ([#2640](https://github.com/Shopify/polaris-react/pull/2640))

### Documentation

### Development workflow

- Reworked the yarn splash Github comment and added average splash zone information ([#2649](https://github.com/Shopify/polaris-react/pull/2649))
- Re-enabled the web unit tests in the consumer build test ([#2663](https://github.com/Shopify/polaris-react/pull/2663))

### Dependency upgrades

### Code quality

- Converted `/tests/build.test.js` to TypeScript ([#2617](https://github.com/Shopify/polaris-react/pull/2617))
- Use `export *` to rexport component content in component indexs and subcomponent listings ([#2625](https://github.com/Shopify/polaris-react/pull/2625))
- Use `export *` to rexport utility content ([#2636](https://github.com/Shopify/polaris-react/pull/2636))

### Deprecations
