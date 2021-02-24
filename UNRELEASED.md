# Unreleased changes

Use [the changelog guidelines](https://git.io/polaris-changelog-guidelines) to format new entries. 💜

### Breaking changes

### Enhancements

- Added `focus-visible` polyfill and default styles ([#3695](https://github.com/Shopify/polaris-react/pull/3695))
- Added `removeUnderline` prop to `Button` to remove underline when `plain` and `monochrome` are true([#3998](https://github.com/Shopify/polaris-react/))pull/3998)
- Removed `#AppFrameMainContent` link and updated SkipToContent link to target `#AppFrameMain` instead ([#3912](https://github.com/Shopify/polaris-react/pull/3912))
- Reset `color` in `unstyled-button` mixin ([#4008](https://github.com/Shopify/polaris-react/pull/4008))

### Bug fixes

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

### Documentation


- Fix `Autocomplete` documentation example code([#3241](https://github.com/Shopify/polaris-react/pull/3241)).
- Added an example for the `onRemove` prop to `Tag` and clarified that no remove button is rendered when `onClick` is set ([#2987](https://github.com/Shopify/polaris-react/pull/2987))

### Development workflow

- Convert `List`, `Tabs.List`, `Connected.Item` and `Filter.ConnectedFiltterControl.Item` to be functional components ([#3961](https://github.com/Shopify/polaris-react/pull/3961))

### Dependency upgrades

### Code quality

### Deprecations
