# Unreleased changes

### Breaking changes

### Enhancements

- Added high contrast outline to `ActionList` ([#2713](https://github.com/Shopify/polaris-react/pull/2713))
- Added high contrast border to `Button` ([#2712](https://github.com/Shopify/polaris-react/pull/2712))
- Added styled placeholder image to `Avatar` when initials are blank ([#2693](https://github.com/Shopify/polaris-react/pull/2693))
- Added `itemsPrefix` prop to `Navigation.Section` to enable optional customization ([#2761](https://github.com/Shopify/polaris-react/pull/2761))

### Bug fixes

- Updated Polaris Tokens, which now builds modern tokens using TypeScript, fixing issues where Edge threw errors related to modern JavaScript features ([#2763](https://github.com/Shopify/polaris-react/pull/2763))
- Fixed `TrapFocus` stealing focus from other `TrapFocus`'s ([#2681](https://github.com/Shopify/polaris-react/pull/2681))
- Fixed focus state color on monochrome `Buttons` ([#2684](https://github.com/Shopify/polaris-react/pull/2684))
- Fixed container's width on `Modal` ([#2692](https://github.com/Shopify/polaris-react/pull/2692))
- Fixed the position property for the backdrop on `Select` from being overwritten by the focus ring ([#2748](https://github.com/Shopify/polaris-react/pull/2748))
- Fixed `ResourceItem` `Actions` visibility on mouse out ([#2742](https://github.com/Shopify/polaris-react/pull/2742))
- Fixed initial server / client render mismatch in `Avatar` ([#2751](https://github.com/Shopify/polaris-react/pull/2751))

### Documentation

### Development workflow

- Added first implementation of custom property validation ([#2616](https://github.com/Shopify/polaris-react/pull/2616))
- Refactored consumer build test (renamed to system integration test) ([#2735](https://github.com/Shopify/polaris-react/pull/2735))

### Dependency upgrades

### Code quality

- Updated dependencies in example apps ([#2722](https://github.com/Shopify/polaris-react/pull/2722))
- Fixed `Tabs` tests that were preventing `React` updates ([#2702](https://github.com/Shopify/polaris-react/pull/2702))
- Moved to Travis for CI ([#2652](https://github.com/Shopify/polaris-react/pull/2652))

### Deprecations
