# Unreleased changes

Use [the changelog guidelines](https://git.io/polaris-changelog-guidelines) to format new entries. 💜

### Breaking changes

### Enhancements

- Added `statusAndProgressLabelOverride` prop to `Badge` ([#4028](https://github.com/Shopify/polaris-react/pull/4028))

### Bug fixes

- `IndexTable` Remove parent resource name from bulk select action ([#4013](https://github.com/Shopify/polaris-react/pull/4013))
- Ensured `@charset` declaration is the first thing in our styles.css file ([#4019](https://github.com/Shopify/polaris-react/pull/4019))
- Fix `Modal.Section` divider color to match header and footer divider ([#4021](https://github.com/Shopify/polaris-react/pull/4021))
- Updated examples for `DropZone` so they accept all image types ([ #3700 ](https://github.com/Shopify/polaris-react/issues/3700))
- Added focus styles to the dismissiable navigation button in `Frame` ([#3936](https://github.com/Shopify/polaris-react/pull/3936))
- Fixed virtual cursor leaving dialog in `Modal`, `Navigation` and `Sheet` ([#3931](https://github.com/Shopify/polaris-react/pull/3931))
- Fixed `Modal` removing focus from internal elements ([#3964](https://github.com/Shopify/polaris-react/pull/3964))
- Simplified output of `Badge`'s css ([#3950](https://github.com/Shopify/polaris-react/pull/3950))
- Fixed click propagation that was preventing the `Tooltip` to open when used as suffix on a `TextField` ([#3956](https://github.com/Shopify/polaris-react/issues/3956))
- Made items in `ActionList` more clear in high contrast mode ([#3971](https://github.com/Shopify/polaris-react/pull/3971))
- Fixed the MediaCard thumbnail’s corner roundness, so it wouldn’t overflow out of the parent Card ([#3974](https://github.com/Shopify/polaris-react/issues/3974))
- Fixed `Tabs` layout issue on browser resize ([#3976](https://github.com/Shopify/polaris-react/issues/3976))
- Fixed `ActionList` `Item` not disabling properly when url prop is passed ([#3979](https://github.com/Shopify/polaris-react/pull/3979))
- Update `IndexTable`'s checkbox header to be aligned with other headers ([#3990](https://github.com/Shopify/polaris-react/issues/3990))
- Fixed `CheckableButton` missing border when focused ([#3988](https://github.com/Shopify/polaris-react/pull/3988))
- Fixed accessibility issue on `Tabs` disclosure popover on close ([#3994](https://github.com/Shopify/polaris-react/pull/3994))
- Fixed accessibility issue when tabbing into `IndexTable` ([#4004](https://github.com/Shopify/polaris-react/pull/4004))
- Fixed an issue where inline code would be hard to select ([#4005](https://github.com/Shopify/polaris-react/pull/4005))
- Update `Toast` close button alignment for small views ([#4006](https://github.com/Shopify/polaris-react/pull/4006))
- Fixed `Collapsible` bug where animation complete logic was being prematurely triggered by transitions in the children ([#4000](https://github.com/Shopify/polaris-react/pull/4000))
- Fixed `IndexTable` bug where bulk actions are operable when no rows are selected ([#4009](https://github.com/Shopify/polaris-react/pull/4009))
- Fixed `CheckableButton` missing border when focused ([#3987](https://github.com/Shopify/polaris-react/issues/3987))
- Removed all `outline` and `border`instances of `-ms-high-contrast` as it is non-standard ([#3962](https://github.com/Shopify/polaris-react/pull/3962)).
- Fixed `Autocomplete` popover height not being calculated correctly ([#4015](https://github.com/Shopify/polaris-react/pull/4015)).
- Added `CheckableButton` to IndexTable for focusable bulk actions([#3995](https://github.com/Shopify/polaris-react/pull/3995))

### Documentation

- Replaced mentions of "invalid" with not "valid" ([#4025](https://github.com/Shopify/polaris-react/pull/4025))

### Development workflow

### Dependency upgrades

- Update `@shopify/polaris-tokens to v2.21.0 ([#4030](https://github.com/Shopify/polaris-react/pull/4030))

### Code quality

### Deprecations
