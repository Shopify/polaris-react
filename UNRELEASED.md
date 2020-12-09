# Unreleased changes

Use [the changelog guidelines](https://git.io/polaris-changelog-guidelines) to format new entries. 💜

- Added `accessibilityLabel` to `Link` component ([#3691](https://github.com/Shopify/polaris-react/pull/3691))

### Breaking changes

### Enhancements

- Allowed `Thumbnail` `source` property to support `icons` ([#3328](https://github.com/Shopify/polaris-react/pull/3328))
- Added `flush` prop to `Card.Section` ([#3645](https://github.com/Shopify/polaris-react/pull/3645))
- Allow `Thumbnail` `source` property to support `icons` ([#3328](https://github.com/Shopify/polaris-react/pull/3328))
- Allow `Page` `subtitle` property to support `React.ReactNode` ([#3594](https://github.com/Shopify/polaris-react/pull/3594))
- **`Button`:** New `role` prop for `<button />` ([#3590](https://github.com/Shopify/polaris-react/pull/3590))
- Added `preventFocusOnClose` to `Popover` ([#3595](https://github.com/Shopify/polaris-react/pull/3595))
- Added color fallback values to `focus-ring` mixin ([#3626](https://github.com/Shopify/polaris-react/pull/3626))
- Added `role="presentational"` to list items for `Tabs` ([#3647](https://github.com/Shopify/polaris-react/pull/3647))
- Allowed consumers to set custom container element on `PortalsManager` ([#3644](https://github.com/Shopify/polaris-react/pull/3644))
- **`Button`:** New `stretchContent` prop for `<button />` ([#3664](https://github.com/Shopify/polaris-react/pull/3664))

### Bug fixes

- Added dependency list to useImperativeHandle in `Banner` ([#3478](https://github.com/Shopify/polaris-react/pull/3478))
- Fixed `FocusManager` from tracking inactive items that prevented trap focusing([#3630](https://github.com/Shopify/polaris-react/pull/3630))
- Added escape keybind to `Tooltip` ([#3627](https://github.com/Shopify/polaris-react/pull/3627))
- Removed extra bottom border on the `DataTable` and added curved edges to footers ([#3571](https://github.com/Shopify/polaris-react/pull/3571))
- **`Button`:** `loading` no longer sets the invalid `role="alert"` ([#3590](https://github.com/Shopify/polaris-react/pull/3590))
- Added semantic headers to `Filters` ([#3629](https://github.com/Shopify/polaris-react/pull/3629))
- Fixed `Filters` not announcing applied filters ([#3632](https://github.com/Shopify/polaris-react/pull/3632))
- Removed `tabIndex=-1` from `Popover` when `preventAutoFocus` is true ([#3595](https://github.com/Shopify/polaris-react/pull/3595))
- Fixed `Modal` header border color ([#3616](https://github.com/Shopify/polaris-react/pull/3616))
- Added focus styles to `CloseButton` in `Modal` ([#3628](https://github.com/Shopify/polaris-react/pull/3628))
- Fixed `Filters` duplicated `ConnectedFilter` ids ([#3651](https://github.com/Shopify/polaris-react/pull/3651))
- Internationalize `Badge` labels ([#3655](https://github.com/Shopify/polaris-react/pull/3655))
- Fixed `Banner` `secondaryAction` only rendering if `action` is set ([#2949](https://github.com/Shopify/polaris-react/pull/2949))
- Added a `alwaysRenderCustomProperties` to `ThemeProvider` for elements that render outside of the DOM tree to their parent context ([#3652](https://github.com/Shopify/polaris-react/pull/3652))
- Fixed keyboard interactions for the `Tab` component ([#3650](https://github.com/Shopify/polaris-react/pull/3650))
- Fixed keyboard interaction when selected Tab was focused and rendering the wrong `::before` colour ([#3669](https://github.com/Shopify/polaris-react/pull/3669))

### Documentation

- Fixed `preventAutoFocus` prop description for `Popover` ([#3595](https://github.com/Shopify/polaris-react/pull/3595))

### Development workflow

### Dependency upgrades

### Code quality

### Deprecations
