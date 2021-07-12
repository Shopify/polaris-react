# Unreleased changes

Use [the changelog guidelines](https://git.io/polaris-changelog-guidelines) to format new entries. 💜

### Breaking changes

### Enhancements

- Prevented `KeypressListener` attaching/detaching on every render ([#4173](https://github.com/Shopify/polaris-react/pull/4173))
- Added `animated` prop in `ProgressBar` ([#4251](https://github.com/Shopify/polaris-react/pull/4251))
- Added `divider` prop to `Page` component ([#4260](https://github.com/Shopify/polaris-react/pull/4260))
- Add `activator` prop to `Sheet` so the triggering element will regain focus ([#4201](https://github.com/Shopify/polaris-react/pull/4201))
- Rename and expose Card compound components types ([#4261](https://github.com/Shopify/polaris-react/pull/4261))
- Add `monospaced` prop to `TextField` component ([#4264](https://github.com/Shopify/polaris-react/pull/4264))
- Add base tight spacing option to `Stack` component([#4273](https://github.com/Shopify/polaris-react/pull/4273))
- Add `lastColumnSticky` prop to `IndexTable` to create a sticky last cell and optional sticky last heading on viewports larger than small ([#4150](https://github.com/Shopify/polaris-react/pull/4150))

### Bug fixes

- Fix bug in Safari where `Button` text is gray instead of white after changing state from disabled to enabled ([#4270](https://github.com/Shopify/polaris-react/pull/4270))
- Fix console warnings when `DataTable` unmounts ([#4249](https://github.com/Shopify/polaris-react/pull/4249))
- Fix console warnings displaying multiple times in `Sheet` ([#4269](https://github.com/Shopify/polaris-react/pull/4269))
- Remove top shadow when `Popover` and `Scrollable` scroll hinting is complete ([#4265](https://github.com/Shopify/polaris-react/pull/4265))
- Bring back borders on the `IndexTable` sticky cells ([#4150](https://github.com/Shopify/polaris-react/pull/4150))
- Adjust `IndexTable` sticky z-index to avoid collisions with focused `TextField` ([#4150](https://github.com/Shopify/polaris-react/pull/4150))

### Documentation

### Development workflow

### Dependency upgrades

### Code quality

### Deprecations
