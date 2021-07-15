# Unreleased changes

Use [the changelog guidelines](https://git.io/polaris-changelog-guidelines) to format new entries. 💜

### Breaking changes

- Updated `react` and `react-dom` to version 16.14.0. This is now the minimum version of React required to use the `@shopify/polaris` library.
- Dropping support for node 10.x
- Dropped support for Desktop Safari versions less than 13.1, and ios Safari versions less than 13.6. ([#4304](https://github.com/Shopify/polaris-react/pull/4304))
- Made `autoComplete` prop in `TextField` a required string ([#4267](https://github.com/Shopify/polaris-react/pull/4267)). If you do not want the browser to autofill a user's information (for example an email input which is a customer's email, but not the email of the user who is entering the information), we recommend setting `autoComplete` to `"off"`.
- `Autocomplete` now requires `Autocomplete.TextField` to be used ([#3910](https://github.com/Shopify/polaris-react/pull/3910))
- Removed ComboBox as a named export on `Autocomplete` ([#3910](https://github.com/Shopify/polaris-react/pull/3910))

### Enhancements

- Prevented `KeypressListener` attaching/detaching on every render ([#4173](https://github.com/Shopify/polaris-react/pull/4173))
- Added `animated` prop in `ProgressBar` ([#4251](https://github.com/Shopify/polaris-react/pull/4251))
- Added `divider` prop to `Page` component ([#4260](https://github.com/Shopify/polaris-react/pull/4260))
- Add `activator` prop to `Sheet` so the triggering element will regain focus ([#4201](https://github.com/Shopify/polaris-react/pull/4201))
- Rename and expose Card compound components types ([#4261](https://github.com/Shopify/polaris-react/pull/4261))
- Add `monospaced` prop to `TextField` component ([#4264](https://github.com/Shopify/polaris-react/pull/4264))
- Add base tight spacing option to `Stack` component([#4273](https://github.com/Shopify/polaris-react/pull/4273))
- Added support for sectioned options in `Autocomplete` [#4221](https://github.com/Shopify/polaris-react/pull/4221)

### Bug fixes

### Bug fixes

- Fix bug in Safari where `Button` text is gray instead of white after changing state from disabled to enabled ([#4270](https://github.com/Shopify/polaris-react/pull/4270))
- Fix console warnings when `DataTable` unmounts ([#4249](https://github.com/Shopify/polaris-react/pull/4249))
- Fix console warnings displaying multiple times in `Sheet` ([#4269](https://github.com/Shopify/polaris-react/pull/4269))
- Remove top shadow when `Popover` and `Scrollable` scroll hinting is complete ([#4265](https://github.com/Shopify/polaris-react/pull/4265))

### Documentation

### Development workflow

### Dependency upgrades

### Code quality

- Rebuilt `Autocomplete` internals using new `ComboBox` and `ListBox` components built on the ARIA 1.2 spec for improved accessibility ([#3910](https://github.com/Shopify/polaris-react/pull/3910))

### Deprecations
