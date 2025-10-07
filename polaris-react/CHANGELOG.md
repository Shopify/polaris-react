# Changelog

## 13.10.1

### Patch Changes

- [`00aa2d6`](https://github.com/Shopify/polaris-react/commit/00aa2d65749677c1a2068275d6bb1b9ac87f69d5) Thanks [@Aubron](https://github.com/Aubron)! - Update README to announce deprecation

## 13.10.0

### Minor Changes

- [#13605](https://github.com/Shopify/polaris/pull/13605) [`3b0f5e9`](https://github.com/Shopify/polaris/commit/3b0f5e9964d56391cd9eb4b1e17d58eb8cccc64b) Thanks [@laurkim](https://github.com/laurkim)! - Deprecated `title` prop in `Page.Title` and `backAction` prop in `Page.Header` and `Breadcrumbs`

- [#13995](https://github.com/Shopify/polaris/pull/13995) [`a1dbca8`](https://github.com/Shopify/polaris/commit/a1dbca81f11edfbb8b72d2e02334e59723faa9d5) Thanks [@vvineet-shopify](https://github.com/vvineet-shopify)! - Added support for 8 new languages in Polaris component translations: Hindi (hi), Lithuanian (lt), Bulgarian (bg), Hungarian (hu), Romanian (ro), Russian (ru), Indonesian (id), and Greek (el). These translations provide localized user interfaces for merchants in these language regions, covering all component strings including action menus, form elements, date/time pickers, file upload interfaces, navigation, data tables, filters, modal dialogs, progress indicators, and accessibility labels.

## 13.10.0

### Minor Changes

- Added support for 8 new languages in Polaris component translations:

  - Hindi (hi)
  - Lithuanian (lt)
  - Bulgarian (bg)
  - Hungarian (hu)
  - Romanian (ro)
  - Russian (ru)
  - Indonesian (id)
  - Greek (el)

  These translations provide localized user interfaces for merchants in these language regions, covering all component strings including action menus, form elements, date/time pickers, file upload interfaces, navigation, data tables, filters, modal dialogs, progress indicators, and accessibility labels.

## 13.9.5

### Patch Changes

- [#13413](https://github.com/Shopify/polaris/pull/13413) [`730349b`](https://github.com/Shopify/polaris/commit/730349ba23733a8958b4766d76b73de62055fa4b) Thanks [@jeffrey-ben](https://github.com/jeffrey-ben)! - Fixed TextField clear bug in Safari

## 13.9.4

### Patch Changes

- [#13318](https://github.com/Shopify/polaris/pull/13318) [`cdb617a`](https://github.com/Shopify/polaris/commit/cdb617a9624215836e25975cc4c371b941e6178a) Thanks [@alex-page](https://github.com/alex-page)! - Add provenance statement

- Updated dependencies [[`cdb617a`](https://github.com/Shopify/polaris/commit/cdb617a9624215836e25975cc4c371b941e6178a)]:
  - @shopify/polaris-icons@9.3.1
  - @shopify/polaris-tokens@9.4.2

## 13.9.3

### Patch Changes

- [#13179](https://github.com/Shopify/polaris/pull/13179) [`a651dac`](https://github.com/Shopify/polaris/commit/a651dac89f9810e2b9a5f3cde39663fb7d4504ab) Thanks [@simonporter007](https://github.com/simonporter007)! - Remove extra semicolons in CSS declarations that were causing duplicate semicolons in the built output

- Updated dependencies [[`a651dac`](https://github.com/Shopify/polaris/commit/a651dac89f9810e2b9a5f3cde39663fb7d4504ab)]:
  - @shopify/polaris-tokens@9.4.1

## 13.9.2

### Patch Changes

- [#12967](https://github.com/Shopify/polaris/pull/12967) [`50246bbbd0455c30c6950b08c93ac7f7d1811fc0`](https://github.com/Shopify/polaris/commit/50246bbbd0455c30c6950b08c93ac7f7d1811fc0) Thanks [@moraleslevi](https://github.com/moraleslevi)! - CalloutCard dismiss button improvements:

  - Use tertiary button variant
  - Use regular sized X icon
  - Adjust position to match Banner
  - Add translated label

## 13.9.1

### Patch Changes

- [#12824](https://github.com/Shopify/polaris/pull/12824) [`85c5bb7b4`](https://github.com/Shopify/polaris/commit/85c5bb7b4d96bdf72a246bf996975c7071c40085) Thanks [@moraleslevi](https://github.com/moraleslevi)! - Fix hydration issues with SSR

## 13.9.0

### Minor Changes

- [#12445](https://github.com/Shopify/polaris/pull/12445) [`66acfb1c9`](https://github.com/Shopify/polaris/commit/66acfb1c9bf10ccfbdc12d1b71b2c709632ed98b) Thanks [@vividviolet](https://github.com/vividviolet)! - Fixed issues with Popover, Tooltip, Color Picker and Drop Zone not working correctly when used inside Modals for embedded apps.

## 13.8.1

### Patch Changes

- [#12467](https://github.com/Shopify/polaris/pull/12467) [`a98276358`](https://github.com/Shopify/polaris/commit/a9827635844e9c43093c901966dbe8b623380e96) Thanks [@sophschneider](https://github.com/sophschneider)! - Remove experimental suffix from tooltip tokens, remove border gradient experimental tokens, add token for `bg-fill-secondary-selected`, and add more `dark-experimental` theme values.

- Updated dependencies [[`a98276358`](https://github.com/Shopify/polaris/commit/a9827635844e9c43093c901966dbe8b623380e96)]:
  - @shopify/polaris-tokens@9.4.0

## 13.8.0

### Minor Changes

- [#12359](https://github.com/Shopify/polaris/pull/12359) [`8f0f1b7e0`](https://github.com/Shopify/polaris/commit/8f0f1b7e01a1d500c619720b38705ed8214a42c8) Thanks [@mrcthms](https://github.com/mrcthms)! - Removed all references to the dynamicTopBarAndReframe feature and revert functionality back to how it was

### Patch Changes

- Updated dependencies [[`491cf8038`](https://github.com/Shopify/polaris/commit/491cf8038b7ad0d8bba8ea268a50bf563ab5657d)]:
  - @shopify/polaris-icons@9.3.0

## 13.7.0

### Minor Changes

- [#12341](https://github.com/Shopify/polaris/pull/12341) [`f6728a410`](https://github.com/Shopify/polaris/commit/f6728a410a4dbd87e7c88a46e8aa003f1a8e4697) Thanks [@AndrewMusgrave](https://github.com/AndrewMusgrave)! - Exposed a `close` function on popovers imperative handle

### Patch Changes

- [#12335](https://github.com/Shopify/polaris/pull/12335) [`d71b3a282`](https://github.com/Shopify/polaris/commit/d71b3a282d4299a0b3568c12ad362af4a30237e4) Thanks [@AndrewMusgrave](https://github.com/AndrewMusgrave)! - Fixed `Tabs` automatically closing when opened in a scrolled position

- Updated dependencies [[`b4cbdefd4`](https://github.com/Shopify/polaris/commit/b4cbdefd4ad2cf4666f649c4d1b798f65175b1e9)]:
  - @shopify/polaris-tokens@9.3.0

## 13.6.1

### Patch Changes

- Updated dependencies [[`6ca51eb02`](https://github.com/Shopify/polaris/commit/6ca51eb02b976cf894d7bb7165c7831b16c3bb6b)]:
  - @shopify/polaris-tokens@9.2.0

## 13.6.0

### Minor Changes

- [#12287](https://github.com/Shopify/polaris/pull/12287) [`65d7a3591`](https://github.com/Shopify/polaris/commit/65d7a359180837b86ed7940e54df408d4b8efe99) Thanks [@jesstelford](https://github.com/jesstelford)! - Updated `useBreakpoints` to use a single set of event listeners

### Patch Changes

- Updated dependencies [[`2b512c3da`](https://github.com/Shopify/polaris/commit/2b512c3da335de7b6ff28ba96b93dbcacdd00a97), [`d445b83f1`](https://github.com/Shopify/polaris/commit/d445b83f1f83f4b2d5f6b4a08036f75e7ee10a8d)]:
  - @shopify/polaris-icons@9.2.0

## 13.5.0

### Minor Changes

- [#12118](https://github.com/Shopify/polaris/pull/12118) [`5fcca651f`](https://github.com/Shopify/polaris/commit/5fcca651f5b2f16c83569e6934b0884df681b7ed) Thanks [@kyledurand](https://github.com/kyledurand)! - Added transition delay to Collapsible

### Patch Changes

- Updated dependencies [[`fe2891792`](https://github.com/Shopify/polaris/commit/fe289179270c99e99eb97115f40c459ec744e8c7)]:
  - @shopify/polaris-icons@9.1.1

## 13.4.0

### Minor Changes

- [#11972](https://github.com/Shopify/polaris/pull/11972) [`25517299c`](https://github.com/Shopify/polaris/commit/25517299c4dfd9c570ca44ec380e536a1511841a) Thanks [@zakwarsame](https://github.com/zakwarsame)! - Updated `Navigation.Item` button to have pointer cursor and no background

### Patch Changes

- [#11950](https://github.com/Shopify/polaris/pull/11950) [`2806dacc8`](https://github.com/Shopify/polaris/commit/2806dacc8f1e5da4517993ebcd7d81228b4b6449) Thanks [@jesstelford](https://github.com/jesstelford)! - Remove useLayoutEffect warning in SSR for IndexTable.

* [#12003](https://github.com/Shopify/polaris/pull/12003) [`2ff31e79f`](https://github.com/Shopify/polaris/commit/2ff31e79f2e6fb73f4d63b6cca6a04d6763389ef) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed max width bug in Collapsible

* Updated dependencies [[`365e5c80a`](https://github.com/Shopify/polaris/commit/365e5c80a02a88e74f8a46ea95778b18d38d1844)]:
  - @shopify/polaris-icons@9.1.0

## 13.3.0

### Minor Changes

- [#11979](https://github.com/Shopify/polaris/pull/11979) [`982491f0f`](https://github.com/Shopify/polaris/commit/982491f0faa037641d51977d5015bc1b55c6eaf2) Thanks [@kyledurand](https://github.com/kyledurand)! - Added `animateIn` transition option to Collapsible

* [#11967](https://github.com/Shopify/polaris/pull/11967) [`e50472f85`](https://github.com/Shopify/polaris/commit/e50472f8518558c84216ca6d2466b644d45eed62) Thanks [@kyledurand](https://github.com/kyledurand)! - Added `variant` prop to Collapsible

### Patch Changes

- [#11976](https://github.com/Shopify/polaris/pull/11976) [`4f3bf9948`](https://github.com/Shopify/polaris/commit/4f3bf9948063809841af52bc74f898b045bb8dfa) Thanks [@chloerice](https://github.com/chloerice)! - Fixed sibling `FormLayout.Item` widths not remaining equal when wrapped in `FormLayout.Group`

* [#11945](https://github.com/Shopify/polaris/pull/11945) [`b59743a76`](https://github.com/Shopify/polaris/commit/b59743a766ed0d796a40a72c559dda808e701eaf) Thanks [@sophschneider](https://github.com/sophschneider)! - Added offset width to reframe `Frame` and passed reframe scroll container to sticky manager in `AppProvider`

- [#11965](https://github.com/Shopify/polaris/pull/11965) [`7a702388d`](https://github.com/Shopify/polaris/commit/7a702388d24ec1c9de4daa40ae77dd10c0735aaa) Thanks [@sophschneider](https://github.com/sophschneider)! - Added scrollbar styles for reframe

* [#11944](https://github.com/Shopify/polaris/pull/11944) [`d1d69e919`](https://github.com/Shopify/polaris/commit/d1d69e919c8244bd96ec155e4333f869762a06b6) Thanks [@stefanlegg](https://github.com/stefanlegg)! - Add support for hiding selectable checkbox on a per `IndexTable.Row` basis via `hideSelectable` prop`

- [#11947](https://github.com/Shopify/polaris/pull/11947) [`995079cc7`](https://github.com/Shopify/polaris/commit/995079cc7c5c5087d662609c75c11eea58920f6d) Thanks [@sophschneider](https://github.com/sophschneider)! - Fixed `Sticky` to update sticky items when props change

- Updated dependencies [[`12dbc2cd8`](https://github.com/Shopify/polaris/commit/12dbc2cd848dafe8d90fda66c9067151687d25fe), [`8ce6211c9`](https://github.com/Shopify/polaris/commit/8ce6211c95268305e02e7eac4d017378fa45e955), [`7a702388d`](https://github.com/Shopify/polaris/commit/7a702388d24ec1c9de4daa40ae77dd10c0735aaa)]:
  - @shopify/polaris-tokens@9.1.0

## 13.2.0

### Minor Changes

- [#11535](https://github.com/Shopify/polaris/pull/11535) [`bcd16df24`](https://github.com/Shopify/polaris/commit/bcd16df2464a2d1d2cc93bf31680f514a8f22096) Thanks [@ShabanaRumane](https://github.com/ShabanaRumane)! - Added support for setting `maxHeight` and `minHeight` on `Popover.Pane` and `Combobox`

* [#11907](https://github.com/Shopify/polaris/pull/11907) [`45308c97a`](https://github.com/Shopify/polaris/commit/45308c97addc7072b1c300c94d7d5f95123b188f) Thanks [@zakwarsame](https://github.com/zakwarsame)! - Added an optional `fiterLabel` prop to `ActionList` to allow for a custom placeholder

### Patch Changes

- [#11897](https://github.com/Shopify/polaris/pull/11897) [`a83084b3b`](https://github.com/Shopify/polaris/commit/a83084b3b021abd48bb813b712e7d474425a0c52) Thanks [@jesstelford](https://github.com/jesstelford)! - Fixed edges of disabled `IndexTable.Row` `Checkbox` triggering selection

* [#11924](https://github.com/Shopify/polaris/pull/11924) [`5ec70e688`](https://github.com/Shopify/polaris/commit/5ec70e688306c0b0dc17f4fb46912588d9fed3bd) Thanks [@jesstelford](https://github.com/jesstelford)! - Upgrade to jest 29

- [#11929](https://github.com/Shopify/polaris/pull/11929) [`9ee700be6`](https://github.com/Shopify/polaris/commit/9ee700be6cc9bc4c8ae62b98571dde8d90dc0c83) Thanks [@sophschneider](https://github.com/sophschneider)! - Rounded `Navigation` at `mdDown` behind a feature flag

* [#11923](https://github.com/Shopify/polaris/pull/11923) [`ce13c4366`](https://github.com/Shopify/polaris/commit/ce13c4366d7c982b702408a03942b580261c3cda) Thanks [@jesstelford](https://github.com/jesstelford)! - Update dev dependency: `postcss-import@^15.1.0` -> `postcss-import@^16.1.0`

- [#11925](https://github.com/Shopify/polaris/pull/11925) [`364ada59e`](https://github.com/Shopify/polaris/commit/364ada59e92078f4b8572dec2d48b0131a1ca6e2) Thanks [@sophschneider](https://github.com/sophschneider)! - Updated Frame to only apply rounded Frame when passed a `topBar`

* [#11734](https://github.com/Shopify/polaris/pull/11734) [`1fef06256`](https://github.com/Shopify/polaris/commit/1fef0625652adddc5ee25674327ef98383e8a748) Thanks [@jesstelford](https://github.com/jesstelford)! - Upgrade to Storybook v8

- [#11898](https://github.com/Shopify/polaris/pull/11898) [`1539f0e7c`](https://github.com/Shopify/polaris/commit/1539f0e7cb32fff212880adbe261c449fa0dd891) Thanks [@jesstelford](https://github.com/jesstelford)! - Removed extra padding around `IndexTable.Row` `Checkbox`

* [#11927](https://github.com/Shopify/polaris/pull/11927) [`5a32a3ff6`](https://github.com/Shopify/polaris/commit/5a32a3ff64a906b48efa356e8d5c6128947c0de0) Thanks [@sophschneider](https://github.com/sophschneider)! - Added `prefers-reduced-motion` media queries to `Frame` width transitions

- [#11930](https://github.com/Shopify/polaris/pull/11930) [`b111629d7`](https://github.com/Shopify/polaris/commit/b111629d75359711d8c9a2b12979c181bea66e63) Thanks [@jesstelford](https://github.com/jesstelford)! - Migrate Storybook stories to CSF v3

* [#11805](https://github.com/Shopify/polaris/pull/11805) [`0a9b72721`](https://github.com/Shopify/polaris/commit/0a9b72721416283571264e844b49489adb7f1227) Thanks [@LA1CH3](https://github.com/LA1CH3)! - Fixed `IndexTable` `loading` prop to correctly show/hide loading UI when prop value changes

* Updated dependencies [[`5ec70e688`](https://github.com/Shopify/polaris/commit/5ec70e688306c0b0dc17f4fb46912588d9fed3bd)]:
  - @shopify/polaris-icons@9.0.1
  - @shopify/polaris-tokens@9.0.1

## 13.1.2

### Patch Changes

- [#11917](https://github.com/Shopify/polaris/pull/11917) [`273029218`](https://github.com/Shopify/polaris/commit/2730292188361640a1a7c76e5dffe4698d559e6b) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed broken css build error

## 13.1.1

### Patch Changes

- [#11915](https://github.com/Shopify/polaris/pull/11915) [`828995cc4`](https://github.com/Shopify/polaris/commit/828995cc422e9a5b4fd0d781656912b3efb71df4) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed Picker empty state

* [#11918](https://github.com/Shopify/polaris/pull/11918) [`fd37c1896`](https://github.com/Shopify/polaris/commit/fd37c18968011142d6b5db480e720513ae5172c6) Thanks [@kyledurand](https://github.com/kyledurand)! - Reverted selected icon placement on Option and TextOption

## 13.1.0

### Minor Changes

- [#11883](https://github.com/Shopify/polaris/pull/11883) [`a60d8aa4f`](https://github.com/Shopify/polaris/commit/a60d8aa4fc6d5e02c7449a0770db54e174545000) Thanks [@chloerice](https://github.com/chloerice)! - Added a `disclosureZIndexOverride` prop to `Filters`, `IndexFilters`, and `Tabs` that is passed to `Popover` and `Tooltip` when provided

* [#11826](https://github.com/Shopify/polaris/pull/11826) [`a7fd7ab5d`](https://github.com/Shopify/polaris/commit/a7fd7ab5dc3adb34c5a7b35257ce202529ca867d) Thanks [@sophschneider](https://github.com/sophschneider)! - Added `contextualSaveBarVisible` and `contextualSaveBarProps` to `Frame` context

### Patch Changes

- [#11842](https://github.com/Shopify/polaris/pull/11842) [`2a93578af`](https://github.com/Shopify/polaris/commit/2a93578af8921fd1adf2dd36f8da941e35b2ceb2) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed layout shift for option lists within popovers

* [#11846](https://github.com/Shopify/polaris/pull/11846) [`ce6353b97`](https://github.com/Shopify/polaris/commit/ce6353b97a768bfbb4f56ec0cba03c8bc6d0c0cc) Thanks [@sophschneider](https://github.com/sophschneider)! - Restyled Frame content behind dynamicTopBarAndReframe feature flag

- [#11872](https://github.com/Shopify/polaris/pull/11872) [`696bcb725`](https://github.com/Shopify/polaris/commit/696bcb725e3149c1b58c012fad01ed62cd1d881a) Thanks [@mattkubej](https://github.com/mattkubej)! - globally remove link tap highlighting

* [#11874](https://github.com/Shopify/polaris/pull/11874) [`744036706`](https://github.com/Shopify/polaris/commit/7440367065f524f8803bf9025fbcbab983389eb3) Thanks [@laurkim](https://github.com/laurkim)! - Added support for ref to `Image` to handle image load with `EmptyState`

- [#11881](https://github.com/Shopify/polaris/pull/11881) [`c96ff56a0`](https://github.com/Shopify/polaris/commit/c96ff56a00f251e104cd255b095b2a463590f3fe) Thanks [@sophschneider](https://github.com/sophschneider)! - Fixed Frame feature override class to get proper max-width for main content.

* [#11885](https://github.com/Shopify/polaris/pull/11885) [`af80d3a82`](https://github.com/Shopify/polaris/commit/af80d3a829dbb0b7161bbd18c6fc977e9bb51c29) Thanks [@craigcolesshopify](https://github.com/craigcolesshopify)! - [indexTable] Fixed over scroll gap on `IndexTable` for sortable last headings with `alignment="end"`

- [#11889](https://github.com/Shopify/polaris/pull/11889) [`374030428`](https://github.com/Shopify/polaris/commit/374030428f6f60a94b536b3bbcef2078cbfe9d89) Thanks [@chloerice](https://github.com/chloerice)! - Fixed `TextField` zoom on focus due to font-size below 16px

* [#11900](https://github.com/Shopify/polaris/pull/11900) [`215b79271`](https://github.com/Shopify/polaris/commit/215b792713829548e09a5cffac0cd059204f6c4d) Thanks [@sophschneider](https://github.com/sophschneider)! - Fixed `Frame` scrollbar safe area to accommodate sidebar

- [#11842](https://github.com/Shopify/polaris/pull/11842) [`2a93578af`](https://github.com/Shopify/polaris/commit/2a93578af8921fd1adf2dd36f8da941e35b2ceb2) Thanks [@kyledurand](https://github.com/kyledurand)! - Changed selected icon position in Listbox and OptionList

* [#11891](https://github.com/Shopify/polaris/pull/11891) [`c84d4e875`](https://github.com/Shopify/polaris/commit/c84d4e875dbad6587dc092d2610ca75241fa2a20) Thanks [@sophschneider](https://github.com/sophschneider)! - Moved `Frame` scrollbar from main to content and set overflow-y from scroll to auto behind a feature flag

## 13.0.0

### Major Changes

- [#11844](https://github.com/Shopify/polaris/pull/11844) [`a89e61478`](https://github.com/Shopify/polaris/commit/a89e61478fb7c5f588021e542101aba8a3898ec8) Thanks [@jesstelford](https://github.com/jesstelford)! - Miniumum required node version updated to v20.10.0

* [#11799](https://github.com/Shopify/polaris/pull/11799) [`aa8e0f42b`](https://github.com/Shopify/polaris/commit/aa8e0f42b956622e826646c809c57eb79bb2b892) Thanks [@ryanwilsonperkin](https://github.com/ryanwilsonperkin)! - [Internal] Migrate repo from yarn to pnpm. No action required.

### Patch Changes

- Updated dependencies [[`a89e61478`](https://github.com/Shopify/polaris/commit/a89e61478fb7c5f588021e542101aba8a3898ec8), [`aa8e0f42b`](https://github.com/Shopify/polaris/commit/aa8e0f42b956622e826646c809c57eb79bb2b892), [`aa8e0f42b`](https://github.com/Shopify/polaris/commit/aa8e0f42b956622e826646c809c57eb79bb2b892)]:
  - @shopify/polaris-icons@9.0.0
  - @shopify/polaris-tokens@9.0.0

## 12.27.0

### Minor Changes

- [#11783](https://github.com/Shopify/polaris/pull/11783) [`0bf817afc`](https://github.com/Shopify/polaris/commit/0bf817afc18e1b19b4037ce1e74717ed71204aa6) Thanks [@chloerice](https://github.com/chloerice)! - Added support to `Filters` for indicating `appliedFilters` have unsaved changes

### Patch Changes

- [#11824](https://github.com/Shopify/polaris/pull/11824) [`79130eeea`](https://github.com/Shopify/polaris/commit/79130eeea0785c41bb06d5135421106d7ce9ff5b) Thanks [@ryanwilsonperkin](https://github.com/ryanwilsonperkin)! - Lint fixes

* [#11845](https://github.com/Shopify/polaris/pull/11845) [`8145d7326`](https://github.com/Shopify/polaris/commit/8145d732689bdf923fe73b287d4ca962b7ec1ccb) Thanks [@kyledurand](https://github.com/kyledurand)! - Added `touch-action: manipulation` to `Button` and `Link`

* Updated dependencies [[`79130eeea`](https://github.com/Shopify/polaris/commit/79130eeea0785c41bb06d5135421106d7ce9ff5b)]:
  - @shopify/polaris-icons@8.11.1

## 12.26.1

### Patch Changes

- Updated dependencies [[`7750bfa4c`](https://github.com/Shopify/polaris/commit/7750bfa4c2c45215935cedcc21746e8fc3dd400e)]:
  - @shopify/polaris-icons@8.11.0

## 12.26.0

### Minor Changes

- [#11785](https://github.com/Shopify/polaris/pull/11785) [`2a2f635ba`](https://github.com/Shopify/polaris/commit/2a2f635bab5ce511a5195d1e545f153fac6a6579) Thanks [@mrcthms](https://github.com/mrcthms)! - Added the `defaultPaginatedSelectAllText` prop to `IndexTable` to support customizing the label of the checkbox in the header that selects all rows across pages when the table `hasMoreItems`

### Patch Changes

- [#11833](https://github.com/Shopify/polaris/pull/11833) [`810532c58`](https://github.com/Shopify/polaris/commit/810532c58d5538d5304f17c09b9d60a76dc6d5bb) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Revert responsive text style updates

* [#11810](https://github.com/Shopify/polaris/pull/11810) [`66dc0392a`](https://github.com/Shopify/polaris/commit/66dc0392a24ec726eeae470320ab90484221ccaf) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed Shift + click selection of `IndexTable.Row` not working in Firefox

- [#11811](https://github.com/Shopify/polaris/pull/11811) [`9aea67322`](https://github.com/Shopify/polaris/commit/9aea6732290c83a4306795d14073f5a6dd62678f) Thanks [@lgriffee](https://github.com/lgriffee)! - Undeprecated `heading2xl` variant in `Text` component

* [#11817](https://github.com/Shopify/polaris/pull/11817) [`936765c92`](https://github.com/Shopify/polaris/commit/936765c92242de7be5956ffb872143a55b12ac00) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - [IndexTable] Initially hide the scrollbar and update scrollbar padding

- [#11819](https://github.com/Shopify/polaris/pull/11819) [`35eb10c4f`](https://github.com/Shopify/polaris/commit/35eb10c4f049cf8edf62eeef0ba380d20887d54f) Thanks [@kyledurand](https://github.com/kyledurand)! - Added multi select functionality to AlphaPicker

- Updated dependencies [[`fd5b31d59`](https://github.com/Shopify/polaris/commit/fd5b31d59f8452e487a4696f907fbbb606749ae9), [`4b730c84d`](https://github.com/Shopify/polaris/commit/4b730c84dc3a636ea04570e36ad7b3bb39b24277)]:
  - @shopify/polaris-icons@8.10.0

## 12.25.0

### Minor Changes

- [#11802](https://github.com/Shopify/polaris/pull/11802) [`3d93f8daf`](https://github.com/Shopify/polaris/commit/3d93f8daf212e6248908b6669c578196003188eb) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - Added `useHover`, `useFocus`, `useFocusIn`, and `useMediaQuery` hooks for building Copy to Clipboard actions

* [#11801](https://github.com/Shopify/polaris/pull/11801) [`f6308995e`](https://github.com/Shopify/polaris/commit/f6308995e3ef8b5f8f017471d23a08577243b323) Thanks [@sophschneider](https://github.com/sophschneider)! - Added white alpha ramp and more dark experimental tokens

### Patch Changes

- [#11617](https://github.com/Shopify/polaris/pull/11617) [`2ff9427b3`](https://github.com/Shopify/polaris/commit/2ff9427b35f7de408c75d8987790ca5047ea6b1b) Thanks [@jesstelford](https://github.com/jesstelford)! - [IndexTable] Unify sticky table header rendering with regular heading for consistency

- Updated dependencies [[`f6308995e`](https://github.com/Shopify/polaris/commit/f6308995e3ef8b5f8f017471d23a08577243b323)]:
  - @shopify/polaris-tokens@8.10.0

## 12.24.0

### Minor Changes

- [#11547](https://github.com/Shopify/polaris/pull/11547) [`df5276317`](https://github.com/Shopify/polaris/commit/df527631730eccbbb259c43b7b7d1c5fc8e47264) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Applied semantic type styles using the `Text` component

* [#11728](https://github.com/Shopify/polaris/pull/11728) [`281c8f8e9`](https://github.com/Shopify/polaris/commit/281c8f8e95d4ba7253d1cc74dc75eca60179dfa6) Thanks [@kyledurand](https://github.com/kyledurand)! - Added new AlphaPicker component

- [#11645](https://github.com/Shopify/polaris/pull/11645) [`b726dadbb`](https://github.com/Shopify/polaris/commit/b726dadbb2b7e041a57ab9ebfce7e7de945b687b) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - Added `useCopyToClipboard` hook for building copy actions matching common actions guidelines

* [#11780](https://github.com/Shopify/polaris/pull/11780) [`4fffc2dcc`](https://github.com/Shopify/polaris/commit/4fffc2dcc31ec49b1c5a536af72880812a153d7a) Thanks [@itwasmattgregg](https://github.com/itwasmattgregg)! - allows icons to be displayed on primary actions on Page component

- [#11547](https://github.com/Shopify/polaris/pull/11547) [`df5276317`](https://github.com/Shopify/polaris/commit/df527631730eccbbb259c43b7b7d1c5fc8e47264) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Added `base`,`inherit`, `disabled`, and `text-inverse` tone options for Text component

* [#11547](https://github.com/Shopify/polaris/pull/11547) [`df5276317`](https://github.com/Shopify/polaris/commit/df527631730eccbbb259c43b7b7d1c5fc8e47264) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Updated plain/monochrome Button text size to bodySm for micro

### Patch Changes

- [#11789](https://github.com/Shopify/polaris/pull/11789) [`36df1aa6c`](https://github.com/Shopify/polaris/commit/36df1aa6c3d483972591130918ebfb392db71922) Thanks [@laurkim](https://github.com/laurkim)! - Fixed logo spacing on `ContextualSaveBar`

* [#11794](https://github.com/Shopify/polaris/pull/11794) [`ffdcf1df7`](https://github.com/Shopify/polaris/commit/ffdcf1df7c7c14a9cf3a577dd010c106312e9663) Thanks [@kyledurand](https://github.com/kyledurand)! - Set default scrollbar width to thin on scrollable

- [#11804](https://github.com/Shopify/polaris/pull/11804) [`d1b46c25c`](https://github.com/Shopify/polaris/commit/d1b46c25ce125204451bb9c018ce2126a8f3d349) Thanks [@laurkim](https://github.com/laurkim)! - Fixed layout shift on `EmptyState` when image is loading with skeleton image

## 12.23.0

### Minor Changes

- [#11764](https://github.com/Shopify/polaris/pull/11764) [`880f31b44`](https://github.com/Shopify/polaris/commit/880f31b44baa1cfc4a58320f466ccc5c6438bf48) Thanks [@itwasmattgregg](https://github.com/itwasmattgregg)! - Added align property for FooterHelp

* [#11691](https://github.com/Shopify/polaris/pull/11691) [`1e613de8b`](https://github.com/Shopify/polaris/commit/1e613de8b3938bc30c722382a8e78e75e50be9cd) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - - Added `ThemeProvider` component
  - Removed `html` from theme classes to remove global theme constraint
  - Updated `useTheme` to be context aware of parent themes
  - Updated `Portal` component to be context aware of parent themes
  - Initialized a `dark-experimental` theme

- [#11787](https://github.com/Shopify/polaris/pull/11787) [`c3aefafe2`](https://github.com/Shopify/polaris/commit/c3aefafe2752d1514632dfb6563739df565273f5) Thanks [@chloerice](https://github.com/chloerice)! - Added support for destructive `promotodBulkActions` to `BulkActions`

### Patch Changes

- Updated dependencies [[`1e613de8b`](https://github.com/Shopify/polaris/commit/1e613de8b3938bc30c722382a8e78e75e50be9cd), [`d689bd8f4`](https://github.com/Shopify/polaris/commit/d689bd8f485ba36247bddf9da705f014cb701f4c)]:
  - @shopify/polaris-tokens@8.9.0
  - @shopify/polaris-icons@8.9.0

## 12.22.1

### Patch Changes

- [#11771](https://github.com/Shopify/polaris/pull/11771) [`8d636390a`](https://github.com/Shopify/polaris/commit/8d636390a699c13b2148320e7147794e1f92e46a) Thanks [@kyledurand](https://github.com/kyledurand)! - Added cover positioning story to popover to prevent regressions

* [#11773](https://github.com/Shopify/polaris/pull/11773) [`b1a0efc7d`](https://github.com/Shopify/polaris/commit/b1a0efc7d60b300fd7ff0923eb215ea8f29b63bd) Thanks [@chloerice](https://github.com/chloerice)! - Reverted a change that caused `IndexTable` `onNavigation` not to work when `selectable` is `false`

## 12.22.0

### Minor Changes

- [#11677](https://github.com/Shopify/polaris/pull/11677) [`f6ba2b2a8`](https://github.com/Shopify/polaris/commit/f6ba2b2a8a8beae9ab235437caf5bfbacc50741f) Thanks [@jesstelford](https://github.com/jesstelford)! - Migrated @shopify/polaris from SASS to CSS using postcss plugins

* [#11723](https://github.com/Shopify/polaris/pull/11723) [`4699bb229`](https://github.com/Shopify/polaris/commit/4699bb229ba9d1e76257f99da99c0b95f9d3e041) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated `BulkActions` to only show actions when selectMode is `true`

- [#11727](https://github.com/Shopify/polaris/pull/11727) [`c3ba6ae1b`](https://github.com/Shopify/polaris/commit/c3ba6ae1bb827848cb3eb4dceaabd2725f19e3ea) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Removed the responsive logic that disabled the Card bevel on mobile. Removing this until we are ready to rollout bevel changes across all components.

### Patch Changes

- [#11757](https://github.com/Shopify/polaris/pull/11757) [`e0ae9565c`](https://github.com/Shopify/polaris/commit/e0ae9565cc9384075abcd45d9a24bbd8c326a30b) Thanks [@sophschneider](https://github.com/sophschneider)! - Added dynamicTopBarAndReframe feature flag type

* [#11733](https://github.com/Shopify/polaris/pull/11733) [`9c24a465c`](https://github.com/Shopify/polaris/commit/9c24a465c5e001e148bde335bf6319e924f4b1d6) Thanks [@jesstelford](https://github.com/jesstelford)! - Convert SASS-style inline comments to CSS-style multiline comments.

- [#11724](https://github.com/Shopify/polaris/pull/11724) [`1543246b7`](https://github.com/Shopify/polaris/commit/1543246b7ed5cf65163032f14a39ec18d65d2d9f) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Updated responsive styles for `Text` component

* [#11765](https://github.com/Shopify/polaris/pull/11765) [`42c298ea7`](https://github.com/Shopify/polaris/commit/42c298ea790eb13d426e402b83feb23184483415) Thanks [@jesstelford](https://github.com/jesstelford)! - Fix build performance regression from using postcss-mixins.

- [#11725](https://github.com/Shopify/polaris/pull/11725) [`3e011e3b6`](https://github.com/Shopify/polaris/commit/3e011e3b6130519cd0bf3e7b81d701b5e9d52a90) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed a bug where iOS 16 font patch wasn't added for mobile app web views

* [#11763](https://github.com/Shopify/polaris/pull/11763) [`e7ab4a8f5`](https://github.com/Shopify/polaris/commit/e7ab4a8f51141bb3ab82647e3083a186f13432d1) Thanks [@sydturn](https://github.com/sydturn)! - Fixed `IndexTable.Row` `onClick` not being called when `selectable` is `false`

- [#11745](https://github.com/Shopify/polaris/pull/11745) [`831a683a2`](https://github.com/Shopify/polaris/commit/831a683a25adcd7ecae2d799b451ddf8b84b689a) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed bug in math.ts for popover with position cover

* [#11735](https://github.com/Shopify/polaris/pull/11735) [`6d8ef8c99`](https://github.com/Shopify/polaris/commit/6d8ef8c99a0b9b1c91bf845ca1139291f7b63fc7) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Used `Text` component to apply text styles for `Button`

- [#11592](https://github.com/Shopify/polaris/pull/11592) [`ad6315845`](https://github.com/Shopify/polaris/commit/ad6315845f4a511bbaeba2c256b01b8f497e8bda) Thanks [@SMAKSS](https://github.com/SMAKSS)! - Passed missing `id` prop to the root element of `BlockStack`

## 12.21.0

### Minor Changes

- [#11650](https://github.com/Shopify/polaris/pull/11650) [`00e276407`](https://github.com/Shopify/polaris/commit/00e276407b5c74c3749a30bf4005678b332de6bb) Thanks [@kyledurand](https://github.com/kyledurand)! - Added `cover` as an `preferredPosition` to `Popover`

* [#11696](https://github.com/Shopify/polaris/pull/11696) [`6a1a5a6c4`](https://github.com/Shopify/polaris/commit/6a1a5a6c4d1e4755003adf12a5026b44096505a6) Thanks [@mmapplebeck](https://github.com/mmapplebeck)! - [Frame] Fixed regression that caused sidebar to render over Admin app content

- [#11708](https://github.com/Shopify/polaris/pull/11708) [`90a3cb1fb`](https://github.com/Shopify/polaris/commit/90a3cb1fb3fb8ca26807e7b17b11bd2fe4c0c7a1) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Increase icon size using viewBox for mobile screen sizes. This will enlarge icons on mobile without affecting the icon wrapper.

### Patch Changes

- [#11689](https://github.com/Shopify/polaris/pull/11689) [`da680f36a`](https://github.com/Shopify/polaris/commit/da680f36a7f81c3ecb1dcdcc9ebdcae6f6c6e756) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed touch device styling for removable large Tags

* [#11693](https://github.com/Shopify/polaris/pull/11693) [`3554a1004`](https://github.com/Shopify/polaris/commit/3554a1004d4ec92d74817a43fde7fa798236365a) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated BulkActionButton to render the Tooltip below the button, not above it

* Updated dependencies [[`423ffb755`](https://github.com/Shopify/polaris/commit/423ffb7554fae7dda5fce95004156d1801425a6f)]:
  - @shopify/polaris-icons@8.8.0

## 12.20.0

### Minor Changes

- [#11663](https://github.com/Shopify/polaris/pull/11663) [`ab2877249`](https://github.com/Shopify/polaris/commit/ab28772495610ffffa208a0e8fc6903a2fc92e25) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated `BulkActions` to support containing a flat array of actions into a single section within the ActionList

* [#11674](https://github.com/Shopify/polaris/pull/11674) [`042b428be`](https://github.com/Shopify/polaris/commit/042b428beb4cdbbe607a6d4bd2ab91c03616bb8a) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated BulkActions to show titles of sections if provided

### Patch Changes

- [#11670](https://github.com/Shopify/polaris/pull/11670) [`c2e443ec9`](https://github.com/Shopify/polaris/commit/c2e443ec9b4e2e0eeb839516cc710b9d62296732) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated IndexTable so that no bulk actions are required to see the paginated select all text

* [#11684](https://github.com/Shopify/polaris/pull/11684) [`75dcb5443`](https://github.com/Shopify/polaris/commit/75dcb5443f166f4073e81431d4a0b9891ec9e051) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated Actions to safeguard against incorrect prop shapes being passed to it

- [#11648](https://github.com/Shopify/polaris/pull/11648) [`8c7302e11`](https://github.com/Shopify/polaris/commit/8c7302e11ce4daa71e8b4143f8608cde367b1731) Thanks [@trtri2](https://github.com/trtri2)! - Fixed hover styles to multiple selection variant of `OptionList`

* [#11665](https://github.com/Shopify/polaris/pull/11665) [`4263d9ada`](https://github.com/Shopify/polaris/commit/4263d9ada703343063fbb9cb944ef433ac02b37c) Thanks [@mrcthms](https://github.com/mrcthms)! - Fixed `IndexFilters` responding to keyboard shortcuts when there is no search field or filters

* Updated dependencies [[`ac563025e`](https://github.com/Shopify/polaris/commit/ac563025ef83ff3ce049e0db10e2356341dd4e9e), [`9eebf1a45`](https://github.com/Shopify/polaris/commit/9eebf1a458d20cc59f902b93feda620126e6189d), [`9b1b74447`](https://github.com/Shopify/polaris/commit/9b1b7444783560ccb2281451c6deec63923ce58b), [`eeea3b96c`](https://github.com/Shopify/polaris/commit/eeea3b96c2e19dcf0076d16f0182ffb1420694ac)]:
  - @shopify/polaris-icons@8.7.0

## 12.19.2

### Patch Changes

- [#11659](https://github.com/Shopify/polaris/pull/11659) [`0371de812`](https://github.com/Shopify/polaris/commit/0371de812c0b28c4a1dc8b506ec5e8bab7aa7fe0) Thanks [@sophschneider](https://github.com/sophschneider)! - Revert `PositionedOverlay` scroll container fix

## 12.19.1

### Patch Changes

- [#11409](https://github.com/Shopify/polaris/pull/11409) [`f1c5110ae`](https://github.com/Shopify/polaris/commit/f1c5110aebddfbd1b2ee4bc356ef8b3db9285d8e) Thanks [@chloerice](https://github.com/chloerice)! - Fixed the icon spacing in `InlineError`

- Updated dependencies [[`abb3bf0e4`](https://github.com/Shopify/polaris/commit/abb3bf0e4fcecfab87d0888b9c0846fe9ea45f1e), [`adf8600ad`](https://github.com/Shopify/polaris/commit/adf8600ad61b33adb903fe995bd79f71e99bb8bb)]:
  - @shopify/polaris-icons@8.6.0

## 12.19.0

### Minor Changes

- [#11399](https://github.com/Shopify/polaris/pull/11399) [`0134d2378`](https://github.com/Shopify/polaris/commit/0134d23784a48475d7c260337b777f448179a9b1) Thanks [@sophschneider](https://github.com/sophschneider)! - Added `PositionedOverlay` scroll support for all scroll containers

* [#11622](https://github.com/Shopify/polaris/pull/11622) [`1f81501c8`](https://github.com/Shopify/polaris/commit/1f81501c8c3862fad4ffd9a4058d3fc70e5ae39a) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated the BulkActions component to include logic to handling selecting and deselecting rows

- [#11637](https://github.com/Shopify/polaris/pull/11637) [`1ac638246`](https://github.com/Shopify/polaris/commit/1ac63824611d3b0167b4ed9e133746e95e62faa0) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated Pagination table variant to have more prominent and centrally-aligned actions

### Patch Changes

- [#11644](https://github.com/Shopify/polaris/pull/11644) [`b95fc9807`](https://github.com/Shopify/polaris/commit/b95fc980782d0cadc63825c9803aed9e0cf0699c) Thanks [@kyledurand](https://github.com/kyledurand)! - Removed nav wrapper from breadcrumbs since it now only renders a single link

## 12.18.0

### Minor Changes

- [#11625](https://github.com/Shopify/polaris/pull/11625) [`9aed8c18f`](https://github.com/Shopify/polaris/commit/9aed8c18f328165f4be8a4fcca9efe23944bd63b) Thanks [@sainihas](https://github.com/sainihas)! - Fix truncate issue for text in ContextualSaveBar

* [#11604](https://github.com/Shopify/polaris/pull/11604) [`376e6ded7`](https://github.com/Shopify/polaris/commit/376e6ded7bc64cd7b4947fc56a1ea563cae26549) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated IndexFilters to better support a configuration of only search and sort

- [#11613](https://github.com/Shopify/polaris/pull/11613) [`92d02613b`](https://github.com/Shopify/polaris/commit/92d02613b7aa063f0939e610baaf28e256d8b3e6) Thanks [@lgriffee](https://github.com/lgriffee)! - Deprecated `heading2xl` and `heading3xl` variants in `Text` component

* [#11611](https://github.com/Shopify/polaris/pull/11611) [`b79741cf8`](https://github.com/Shopify/polaris/commit/b79741cf8a632f741d9c4c4100e9b51f6865f183) Thanks [@kyledurand](https://github.com/kyledurand)! - Added `size` prop to `Tag`

### Patch Changes

- [#11624](https://github.com/Shopify/polaris/pull/11624) [`b60ba0710`](https://github.com/Shopify/polaris/commit/b60ba07103831f169423a94b63610b211eefa555) Thanks [@lgriffee](https://github.com/lgriffee)! - Reverted application of native mobile styles to Button component

* [#11628](https://github.com/Shopify/polaris/pull/11628) [`bef27c076`](https://github.com/Shopify/polaris/commit/bef27c076f8b1ca2efda61bf6a178c4a18972698) Thanks [@ardakaracizmeli](https://github.com/ardakaracizmeli)! - Fixed an issue where a border displayed between the main content of the frame and the sidebar

* Updated dependencies [[`4db32af27`](https://github.com/Shopify/polaris/commit/4db32af27edb547d5c3f6fe1fbd81b1737cc5152), [`8a9225306`](https://github.com/Shopify/polaris/commit/8a92253064a2a2e572f58eae71312dc895b5fbf1)]:
  - @shopify/polaris-icons@8.5.0

## 12.17.0

### Minor Changes

- [#11602](https://github.com/Shopify/polaris/pull/11602) [`ae04f0d37`](https://github.com/Shopify/polaris/commit/ae04f0d37d142c7454d23533793a00ef4db65816) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated `Page` sub-components to only restrict the width of the subtitle if secondary actions or action groups are present

### Patch Changes

- [#11564](https://github.com/Shopify/polaris/pull/11564) [`9839180d9`](https://github.com/Shopify/polaris/commit/9839180d9a113d92d9205a899546d493ca561f97) Thanks [@jesstelford](https://github.com/jesstelford)! - Remove .Polaris-Summer-Editions-2023 class from html element.

* [#11605](https://github.com/Shopify/polaris/pull/11605) [`ef91b21e2`](https://github.com/Shopify/polaris/commit/ef91b21e2bdfe6bbf410460aeef8057905f1c82a) Thanks [@yurm04](https://github.com/yurm04)! - Reduced `ActionList.Item` padding and gap

## 12.16.0

### Minor Changes

- [#11585](https://github.com/Shopify/polaris/pull/11585) [`1ba3181b6`](https://github.com/Shopify/polaris/commit/1ba3181b6f8442871bf25cf2e46ab44fdbb657e1) Thanks [@tauthomas01](https://github.com/tauthomas01)! - Added a `disabled` prop to `ResourceItem`

* [#11568](https://github.com/Shopify/polaris/pull/11568) [`525194767`](https://github.com/Shopify/polaris/commit/5251947674301c9aac9121bde2d88c7e328707ff) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated the stacking logic of multiple Toasts to take up less screen real estate

- [#11587](https://github.com/Shopify/polaris/pull/11587) [`5ab254b3b`](https://github.com/Shopify/polaris/commit/5ab254b3bb49f04f97757ed5b5c9be16dee02f40) Thanks [@sainihas](https://github.com/sainihas)! - Update dropzone container background color when no Outline

### Patch Changes

- [#11581](https://github.com/Shopify/polaris/pull/11581) [`47dac1b2e`](https://github.com/Shopify/polaris/commit/47dac1b2e7fe566965804cd0ee11029d2fb5fafb) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed an issue where scrollbars weren't showing up in IndexTable on mac os when show when scrolling preference is selected

* [#11560](https://github.com/Shopify/polaris/pull/11560) [`0b38b6115`](https://github.com/Shopify/polaris/commit/0b38b61156092ab60263bfd330e4ac4a9fd793d2) Thanks [@apliano](https://github.com/apliano)! - Fixed `Combobox` not rendering `Popover` until the second firing of the `onChange` event

- [#11584](https://github.com/Shopify/polaris/pull/11584) [`23d8297ff`](https://github.com/Shopify/polaris/commit/23d8297ff6138dae5044d015e143d4a4a7bb99eb) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated `useIsSelectAllActionsSticky` logic to not set any sticky behaviour if we do not have access to the root element

* [#11543](https://github.com/Shopify/polaris/pull/11543) [`165bc6eae`](https://github.com/Shopify/polaris/commit/165bc6eae0401b91dc8623259abcfdc7d0999351) Thanks [@mrcthms](https://github.com/mrcthms)! - Fixed `IndexFilters` height changing when toggling between default and filtering modes

- [#11563](https://github.com/Shopify/polaris/pull/11563) [`3937739d2`](https://github.com/Shopify/polaris/commit/3937739d2554c2e86ae61c5fbd04cc360b44c457) Thanks [@chloerice](https://github.com/chloerice)! - Fixed `FormLayout.Item` overflowing viewport at xs breakpoint when user settings enlarge text size

* [#11595](https://github.com/Shopify/polaris/pull/11595) [`f829ed487`](https://github.com/Shopify/polaris/commit/f829ed48702315e88f89383874eca110eaecf0f9) Thanks [@oksanashopify](https://github.com/oksanashopify)! - Updated DropZone minimum size from 50px to 40px to fit within a small Thumbnail

* Updated dependencies [[`b65f1e679`](https://github.com/Shopify/polaris/commit/b65f1e679bd96db4ff9097b36d719b371cf33f8a), [`78ed5fe0d`](https://github.com/Shopify/polaris/commit/78ed5fe0d616db8c2cf76f59f9528211f81c23b3)]:
  - @shopify/polaris-icons@8.3.0

## 12.15.0

### Minor Changes

- [#11552](https://github.com/Shopify/polaris/pull/11552) [`04e462816`](https://github.com/Shopify/polaris/commit/04e462816b2082cb0bac341f3827f1c767213499) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Applied native mobile styles to Button component for the light-mobile theme

### Patch Changes

- [#11570](https://github.com/Shopify/polaris/pull/11570) [`e7f1961e1`](https://github.com/Shopify/polaris/commit/e7f1961e169298d829afd0620a4d003fb85b748d) Thanks [@chloerice](https://github.com/chloerice)! - Fixed the position of `SelectAllActions` when inside of an offset scrollable container

- Updated dependencies [[`04e462816`](https://github.com/Shopify/polaris/commit/04e462816b2082cb0bac341f3827f1c767213499)]:
  - @shopify/polaris-tokens@8.8.0

## 12.14.0

### Minor Changes

- [#11541](https://github.com/Shopify/polaris/pull/11541) [`1a6b65103`](https://github.com/Shopify/polaris/commit/1a6b65103b258ae1cc5dc24267dc8079db1f2934) Thanks [@itwasmattgregg](https://github.com/itwasmattgregg)! - Added `direction` prop to `InlineStack` to allow for reversing the direction of items.

* [#11566](https://github.com/Shopify/polaris/pull/11566) [`5a1ada35a`](https://github.com/Shopify/polaris/commit/5a1ada35a73fd2ca1f6a0ce388abc1b788c114ff) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Removed the Card shadow bevel and decreased Card gap spacing for the mobile theme

- [#11575](https://github.com/Shopify/polaris/pull/11575) [`074c96ece`](https://github.com/Shopify/polaris/commit/074c96ece68ddd56591dd512dce1469fe5a27c1c) Thanks [@mrcthms](https://github.com/mrcthms)! - Deprecated the suffix from the IndexFilters SearchField component

### Patch Changes

- [#11488](https://github.com/Shopify/polaris/pull/11488) [`e755a5790`](https://github.com/Shopify/polaris/commit/e755a5790bf66957e8cf87532a8f7cf0a94734ad) Thanks [@chloerice](https://github.com/chloerice)! - Fixed `monochromePlain` `Button` `variant` SVG fill

* [#11571](https://github.com/Shopify/polaris/pull/11571) [`fa00230fe`](https://github.com/Shopify/polaris/commit/fa00230fe50f99a28880200e4450640ae4790a28) Thanks [@tjonx](https://github.com/tjonx)! - Fixed scrollbar hover jank in safari by forcing re-paint

- [#11567](https://github.com/Shopify/polaris/pull/11567) [`7dd064f6a`](https://github.com/Shopify/polaris/commit/7dd064f6a0b882ef4c7ced80e60b447f31990e7a) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated the subtitle of the Page Header to have a sensible max-width

* [#11565](https://github.com/Shopify/polaris/pull/11565) [`7d7451eea`](https://github.com/Shopify/polaris/commit/7d7451eeaa3171fe4fbd9a8bebf8ae60384e1be8) Thanks [@jesstelford](https://github.com/jesstelford)! - Remove references to se23/summer editions 2023/etc.

- [#11572](https://github.com/Shopify/polaris/pull/11572) [`9fa4b7a20`](https://github.com/Shopify/polaris/commit/9fa4b7a204cc3198bb3707097acf466a157aa5b7) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed section heading action spacing

* [#11537](https://github.com/Shopify/polaris/pull/11537) [`27cf15c98`](https://github.com/Shopify/polaris/commit/27cf15c982cffebe8cca7c3587f8b8f81467e26e) Thanks [@kyledurand](https://github.com/kyledurand)! - Updated scrollbar colors and width

* Updated dependencies [[`27cf15c98`](https://github.com/Shopify/polaris/commit/27cf15c982cffebe8cca7c3587f8b8f81467e26e), [`5a1ada35a`](https://github.com/Shopify/polaris/commit/5a1ada35a73fd2ca1f6a0ce388abc1b788c114ff)]:
  - @shopify/polaris-tokens@8.7.0

## 12.13.0

### Minor Changes

- [#11530](https://github.com/Shopify/polaris/pull/11530) [`c7396d5e9`](https://github.com/Shopify/polaris/commit/c7396d5e92296fc0e88a7ce87e340f065dc480aa) Thanks [@arthurgouveia](https://github.com/arthurgouveia)! - [CalloutCard] Added IconableAction to primaryAction and secondaryAction
  [CalloutCard] Added variant prop to secondaryAction

### Patch Changes

- [#11554](https://github.com/Shopify/polaris/pull/11554) [`942270bb3`](https://github.com/Shopify/polaris/commit/942270bb303c1b7c9ee8ed54085292dc3194950a) Thanks [@chloerice](https://github.com/chloerice)! - Added support for hovercard tracking to `EphemeralPresenceManager`

## 12.12.1

### Patch Changes

- [#11533](https://github.com/Shopify/polaris/pull/11533) [`697def448`](https://github.com/Shopify/polaris/commit/697def448432c8cfb0700cd7f10fa0950e0d731c) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated IndexFilters to always fill the space where the loading spinner appears to ensure Tabs do not switch between collapsed and expanded

## 12.12.0

### Minor Changes

- [#11508](https://github.com/Shopify/polaris/pull/11508) [`91ba165c9`](https://github.com/Shopify/polaris/commit/91ba165c9cbaa4cd656e348ad5e18c568ac0454b) Thanks [@kyledurand](https://github.com/kyledurand)! - Added scrollbarWidth and scrollbarGutter properties to Scrollable

### Patch Changes

- [#11529](https://github.com/Shopify/polaris/pull/11529) [`e1fb65b72`](https://github.com/Shopify/polaris/commit/e1fb65b724108895d5ee3c16978da8b3381102af) Thanks [@PhilippeCollin](https://github.com/PhilippeCollin)! - [ActionList] Fixed wrapping issue while using prefix and/or suffix icons

* [#11532](https://github.com/Shopify/polaris/pull/11532) [`18bdf67fa`](https://github.com/Shopify/polaris/commit/18bdf67faee1f3c7df06cb92effdc35c6150b75c) Thanks [@alex-page](https://github.com/alex-page)! - Fix visual regressions in `Select` across browsers and operating systems

## 12.11.2

### Patch Changes

- [#11523](https://github.com/Shopify/polaris/pull/11523) [`9486e487e`](https://github.com/Shopify/polaris/commit/9486e487e99f19ffdfe19a3246898db165456ce3) Thanks [@oksanashopify](https://github.com/oksanashopify)! - fix z-index for IndexTable rows of type `child`

* [#11525](https://github.com/Shopify/polaris/pull/11525) [`09b4f00b3`](https://github.com/Shopify/polaris/commit/09b4f00b3af5a65f77511bc49d0e61d474ca9fd7) Thanks [@laurkim](https://github.com/laurkim)! - Fixed border radius styles for `Button` within `ButtonGroup` when `connectedTop` prop applied

- [#11524](https://github.com/Shopify/polaris/pull/11524) [`a0283410a`](https://github.com/Shopify/polaris/commit/a0283410af2cf4c8857a232f074ea1649e1030e6) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated logic in IndexTable to recalculate sticky position when children changes

- Updated dependencies [[`7bb7054e8`](https://github.com/Shopify/polaris/commit/7bb7054e86aec66ce0824884e350c9ebf5f50430)]:
  - @shopify/polaris-icons@8.2.0

## 12.11.1

### Patch Changes

- [#11499](https://github.com/Shopify/polaris/pull/11499) [`a6ac9928a`](https://github.com/Shopify/polaris/commit/a6ac9928adc63c00c87780d10a6293705ad0b524) Thanks [@laurkim](https://github.com/laurkim)! - Fixed layout and focus styling for `Button` inside `ButtonGroup` with `fullWidth`

* [#11503](https://github.com/Shopify/polaris/pull/11503) [`fb7d96821`](https://github.com/Shopify/polaris/commit/fb7d96821d4922ba9ac5be034b5ea8eac5a02bdc) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - Added workaround for `font-optical-sizing` issue in Safari 16

## 12.11.0

### Minor Changes

- [#11474](https://github.com/Shopify/polaris/pull/11474) [`26b3afb3d`](https://github.com/Shopify/polaris/commit/26b3afb3d711d04498d973ce26bcb74af8b99ff5) Thanks [@mrcthms](https://github.com/mrcthms)! - [BulkActions and SelectAllActions] Ensure backwards compatibilility after prop reorganisation between components

* [#11497](https://github.com/Shopify/polaris/pull/11497) [`d50cc6d91`](https://github.com/Shopify/polaris/commit/d50cc6d91bb1aae6a49d03e255c1e0aae180fbbb) Thanks [@mrcthms](https://github.com/mrcthms)! - Improved test reliability for non-rolled up actions in `ActionMenu`

- [#10981](https://github.com/Shopify/polaris/pull/10981) [`2dcc73f1a`](https://github.com/Shopify/polaris/commit/2dcc73f1a02767c582b15fed3058561befeea7f9) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated the sticky behaviour of BulkActions, SelectAllActions, and Pagination for our tables and lists

* [#11441](https://github.com/Shopify/polaris/pull/11441) [`74174b6c1`](https://github.com/Shopify/polaris/commit/74174b6c170c9d575d9ae41bf4287b1844008bcd) Thanks [@mrcthms](https://github.com/mrcthms)! - Improved the logic of action rollup and calculation of available space in `ActionMenu` and `Tabs`

- [#11491](https://github.com/Shopify/polaris/pull/11491) [`ac004fc97`](https://github.com/Shopify/polaris/commit/ac004fc97f2a9d942c16d2b984f4d9c3450eb8fe) Thanks [@lgriffee](https://github.com/lgriffee)! - [`Button`] Remove underline from `monochromePlain` default state

* [#11486](https://github.com/Shopify/polaris/pull/11486) [`02a6d9b18`](https://github.com/Shopify/polaris/commit/02a6d9b186c618fadacf36b548db0816afb49ae0) Thanks [@translation-platform](https://github.com/apps/translation-platform)! - Updated translations for SearchField suffix within IndexFilters

- [#11344](https://github.com/Shopify/polaris/pull/11344) [`c9abd3c0c`](https://github.com/Shopify/polaris/commit/c9abd3c0cb532f2fcb49a716507d5dd478ce10d9) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - Added Polaris Tokens for Mobile typography

* [#11412](https://github.com/Shopify/polaris/pull/11412) [`f1b44ab57`](https://github.com/Shopify/polaris/commit/f1b44ab57d8de2f72b39434d57985f72d204e330) Thanks [@mrcthms](https://github.com/mrcthms)! - [TextField] Updated the TextField with new `autoSize` and `loading` props

- [#11431](https://github.com/Shopify/polaris/pull/11431) [`f9b9fa4e8`](https://github.com/Shopify/polaris/commit/f9b9fa4e8b8002c5d2125248c8dc5c14afce24e6) Thanks [@lone-star](https://github.com/lone-star)! - Added `tone`, `icon`, and `onClick` props to `Toast`

### Patch Changes

- [#11464](https://github.com/Shopify/polaris/pull/11464) [`2ee7dbd30`](https://github.com/Shopify/polaris/commit/2ee7dbd30f54f9f795ea3c52ab8fb750e9daade3) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Updated `Button` shadow tokens and replaced hardcoded box-shadow values

* [#11504](https://github.com/Shopify/polaris/pull/11504) [`1910c6975`](https://github.com/Shopify/polaris/commit/1910c69755d1dac764b1c6ee7cafa04a7e218d47) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated Page Header to only ensure no wrapping of the title when the title is relatively short

- [#11473](https://github.com/Shopify/polaris/pull/11473) [`6579537e4`](https://github.com/Shopify/polaris/commit/6579537e480e6b288955b3df15f93e9e6eb4b580) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Fixed focus ring size for plain and plain monochrome Button variants

* [#11487](https://github.com/Shopify/polaris/pull/11487) [`4aabf7c1a`](https://github.com/Shopify/polaris/commit/4aabf7c1a852b9c10174e1699cb32eed2c5de94f) Thanks [@yurm04](https://github.com/yurm04)! - [Modal] Fixed Footer position to bottom of container

- [#11466](https://github.com/Shopify/polaris/pull/11466) [`1953b6935`](https://github.com/Shopify/polaris/commit/1953b6935516db5d9ca77888ee41ffda1c2e80df) Thanks [@mrcthms](https://github.com/mrcthms)! - [TextField] Fixed positional issue of loading indicator when no clear button is present

* [#11462](https://github.com/Shopify/polaris/pull/11462) [`2febd60f1`](https://github.com/Shopify/polaris/commit/2febd60f155ece49ce0e48c074ae20c3de8961bb) Thanks [@sophschneider](https://github.com/sophschneider)! - Lowered the z-index of `Filter`s container to be below `Card` shadow bevel

- [#11467](https://github.com/Shopify/polaris/pull/11467) [`75cbcd70b`](https://github.com/Shopify/polaris/commit/75cbcd70bb3011c4eb68b7be322104b2b8ed2b7a) Thanks [@kyledurand](https://github.com/kyledurand)! - Increased contrast on Tooltip underline

* [#11482](https://github.com/Shopify/polaris/pull/11482) [`59371946c`](https://github.com/Shopify/polaris/commit/59371946ce2399f6e441235dedb5f74ce5fee7be) Thanks [@translation-platform](https://github.com/apps/translation-platform)! - [SearchField] Updated translation

* Updated dependencies [[`2ee7dbd30`](https://github.com/Shopify/polaris/commit/2ee7dbd30f54f9f795ea3c52ab8fb750e9daade3), [`c9abd3c0c`](https://github.com/Shopify/polaris/commit/c9abd3c0cb532f2fcb49a716507d5dd478ce10d9), [`b786bb93c`](https://github.com/Shopify/polaris/commit/b786bb93c153f853323ac2c2170ec4fb5bdfbecb)]:
  - @shopify/polaris-tokens@8.6.0
  - @shopify/polaris-icons@8.1.0

## 12.10.0

### Minor Changes

- [#11417](https://github.com/Shopify/polaris/pull/11417) [`cea2dd22b`](https://github.com/Shopify/polaris/commit/cea2dd22b9f3fc401f2de765b0d68545f2ee97fe) Thanks [@mrcthms](https://github.com/mrcthms)! - [FiltersBar] Fixed bug where filters would disappear from the FiltersBar when clicking the Clear all button

### Patch Changes

- [#11446](https://github.com/Shopify/polaris/pull/11446) [`6e40eca5e`](https://github.com/Shopify/polaris/commit/6e40eca5ed82de159966552064271a238d3369cf) Thanks [@mrcthms](https://github.com/mrcthms)! - [Icons] Fixed references to incorrect icon imports that were causing Storybook to break

## 12.9.1

### Patch Changes

- [#11438](https://github.com/Shopify/polaris/pull/11438) [`43535660e`](https://github.com/Shopify/polaris/commit/43535660e72fa9b19476162db5e3e8c92f5aec74) Thanks [@jesstelford](https://github.com/jesstelford)! - Use `@custom-media` across all of `@shopify/polaris` (follow on from https://github.com/Shopify/polaris/pull/10804)

- Updated dependencies [[`f91c4b661`](https://github.com/Shopify/polaris/commit/f91c4b661b1d9540dd515c6f073aeeb62e914023)]:
  - @shopify/polaris-icons@8.0.0

## 12.9.0

### Minor Changes

- [#11410](https://github.com/Shopify/polaris/pull/11410) [`d8ccd26ad`](https://github.com/Shopify/polaris/commit/d8ccd26ad7007914ab48c718a380a8f9cc802629) Thanks [@lgriffee](https://github.com/lgriffee)! - - Updated `SkeletonTabs` to reflect `Tabs` design
  - Added `fitted` prop

### Patch Changes

- [#11433](https://github.com/Shopify/polaris/pull/11433) [`2ddc47fe2`](https://github.com/Shopify/polaris/commit/2ddc47fe2d35778192925b2819d228cb13ee856b) Thanks [@sophschneider](https://github.com/sophschneider)! - Fixed `Button` spinner icon alignment

* [#11436](https://github.com/Shopify/polaris/pull/11436) [`72471750d`](https://github.com/Shopify/polaris/commit/72471750d2fb12397a3f1fd7f5f5814efc435b85) Thanks [@alex-page](https://github.com/alex-page)! - Revert "[Modal] Add `flex-grow` to `Modal` body to fix footer position

## 12.8.0

### Minor Changes

- [#11430](https://github.com/Shopify/polaris/pull/11430) [`567048b59`](https://github.com/Shopify/polaris/commit/567048b596ae2bdae62978b0a6ab894c7ebd4a55) Thanks [@matallo](https://github.com/matallo)! - - Fixed prefix, prefix icon, and suffix icon for `TextField` component with `magic` tone

* [#11354](https://github.com/Shopify/polaris/pull/11354) [`eab40d54c`](https://github.com/Shopify/polaris/commit/eab40d54cf273aa62e8a5bead64390d7e5d58a01) Thanks [@yurm04](https://github.com/yurm04)! - Fixed `Modal` footer position

### Patch Changes

- [#11429](https://github.com/Shopify/polaris/pull/11429) [`b1ecec131`](https://github.com/Shopify/polaris/commit/b1ecec131f7fc4a82f80b569cd228c8120815ab0) Thanks [@sophschneider](https://github.com/sophschneider)! - Bumped `Button` icon fill specificity to always be greater than `Icon` fill

## 12.7.0

### Minor Changes

- [#11304](https://github.com/Shopify/polaris/pull/11304) [`9c57cc1c2`](https://github.com/Shopify/polaris/commit/9c57cc1c2b48ad7cc362b45dfedc23feca865a0a) Thanks [@yurm04](https://github.com/yurm04)! - [Tooltip] Added `min-width` to `TooltipOverlay`

* [#11403](https://github.com/Shopify/polaris/pull/11403) [`2bcc7bda5`](https://github.com/Shopify/polaris/commit/2bcc7bda594c4339f140d829b0e46a1daf3d33e5) Thanks [@yurm04](https://github.com/yurm04)! - [Navigation] Updated `padding-top` to `space-100` for small viewports

- [#11231](https://github.com/Shopify/polaris/pull/11231) [`3a0228815`](https://github.com/Shopify/polaris/commit/3a02288151800ab5a3d82b439a0bf579fb3db1dc) Thanks [@thyleung](https://github.com/thyleung)! - - Added the `paddingBlockEnd` prop to the `IndexTableHeading` interface to support additional right padding
  - Fixed sortable `IndexTable` headings with a tooltip not being right aligned properly

* [#9019](https://github.com/Shopify/polaris/pull/9019) [`ba1c813c2`](https://github.com/Shopify/polaris/commit/ba1c813c2166ae23ae5d67cae57389aac9464868) Thanks [@jesstelford](https://github.com/jesstelford)! - Upgrade to Storybook v7 with Vite

- [#11400](https://github.com/Shopify/polaris/pull/11400) [`befded29d`](https://github.com/Shopify/polaris/commit/befded29dcdf7509a60d33e2bbbf2ec8b05db515) Thanks [@yurm04](https://github.com/yurm04)! - [Dialog] Removed `sizeSmall` max-width for small viewports

* [#11374](https://github.com/Shopify/polaris/pull/11374) [`f631b229f`](https://github.com/Shopify/polaris/commit/f631b229fbb455a1586ea59584085be0f131ea71) Thanks [@kyledurand](https://github.com/kyledurand)! - Added as prop to InlineStack
  Added span and list item element types to BlockStack

- [#11212](https://github.com/Shopify/polaris/pull/11212) [`7d056dea2`](https://github.com/Shopify/polaris/commit/7d056dea2fa2f5806fe0839aa4abb8f5ec53a01e) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Refactored `Button` styles and bevel

### Patch Changes

- [#11411](https://github.com/Shopify/polaris/pull/11411) [`7202e1605`](https://github.com/Shopify/polaris/commit/7202e1605d353e38b2849ffbd73aa5669e3c0557) Thanks [@sophschneider](https://github.com/sophschneider)! - Changed `IndexTable` scroll bar container z-index so that it is under the `Card` shadow bevel

* [#11363](https://github.com/Shopify/polaris/pull/11363) [`c356dd5e5`](https://github.com/Shopify/polaris/commit/c356dd5e57e4e59f34ca1a151b85dabdb4ce6165) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Fixed Button padding regression in Safari 14

- [#11364](https://github.com/Shopify/polaris/pull/11364) [`bf9539536`](https://github.com/Shopify/polaris/commit/bf953953673a7b079e2695f25fb2c4864894c2c8) Thanks [@heyjoethomas](https://github.com/heyjoethomas)! - Fixes shadow and bevel of basic button

* [#11224](https://github.com/Shopify/polaris/pull/11224) [`ea8e5510e`](https://github.com/Shopify/polaris/commit/ea8e5510e10af167c2bca38b75caacb6f448361c) Thanks [@sophschneider](https://github.com/sophschneider)! - Updated margins for TextField prefixes

- [#11366](https://github.com/Shopify/polaris/pull/11366) [`b62cf7356`](https://github.com/Shopify/polaris/commit/b62cf7356caa74c162b500dd16d0871081adfef7) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Fixed segmented button divider regression

* [#11383](https://github.com/Shopify/polaris/pull/11383) [`a1c141669`](https://github.com/Shopify/polaris/commit/a1c14166974d63e8aa89889172ca45228b75b906) Thanks [@jhalvorson](https://github.com/jhalvorson)! - [IndexTable] use the correct index for the sticky header when rows are selectable

- [#11373](https://github.com/Shopify/polaris/pull/11373) [`97c3979ba`](https://github.com/Shopify/polaris/commit/97c3979ba4648b621774c29eb2463d9050dab599) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Fixed Button active state regression when used with activators such as Popover

* [#11342](https://github.com/Shopify/polaris/pull/11342) [`9484d55ca`](https://github.com/Shopify/polaris/commit/9484d55ca7a5b99f0cbb02676fd0f28fe92fc3f5) Thanks [@jhalvorson](https://github.com/jhalvorson)! - [IndexTable] Fixed aligment issues with the sticky header

- [#11401](https://github.com/Shopify/polaris/pull/11401) [`5604728ee`](https://github.com/Shopify/polaris/commit/5604728ee1a117f29e0450b354ea46f44506c74f) Thanks [@ardakaracizmeli](https://github.com/ardakaracizmeli)! - Changed the icon color from icon-magic to text-magic for the Magic tone of the Badge component.

- Updated dependencies [[`9f7e5b682`](https://github.com/Shopify/polaris/commit/9f7e5b682f93a3f241e7162eef35dd42b25f7afa)]:
  - @shopify/polaris-tokens@8.5.0

## 12.6.0

### Minor Changes

- [#11317](https://github.com/Shopify/polaris/pull/11317) [`e197ca5f6`](https://github.com/Shopify/polaris/commit/e197ca5f6d518f5f099ca55161951f4ae4591232) Thanks [@yurm04](https://github.com/yurm04)! - [LegacyFilters] Fixed button spacing on `ConnectedFilterControl`

### Patch Changes

- [#11340](https://github.com/Shopify/polaris/pull/11340) [`3213735a0`](https://github.com/Shopify/polaris/commit/3213735a06d67e93e9933fe44011e52297a5cee4) Thanks [@jesstelford](https://github.com/jesstelford)! - Internal refactor: CSS Module files are renamed from _.scss to _.module.scss

* [#11269](https://github.com/Shopify/polaris/pull/11269) [`bc4272a2e`](https://github.com/Shopify/polaris/commit/bc4272a2e3b6d54065d8cad1364ad8612ced0a5d) Thanks [@m4thieulavoie](https://github.com/m4thieulavoie)! - Added an optional `hidden` property to the `Filters` `FilterInterface` type to support `filters` that are only set programmatically

* Updated dependencies [[`0a2f1659d`](https://github.com/Shopify/polaris/commit/0a2f1659d1141dba5cb93f6d64aeceab89155cfb)]:
  - @shopify/polaris-icons@7.13.0

## 12.5.0

### Minor Changes

- [#11275](https://github.com/Shopify/polaris/pull/11275) [`4a7e090bc`](https://github.com/Shopify/polaris/commit/4a7e090bca1c9f5c647f53a93832424ff1cfcf82) Thanks [@yurm04](https://github.com/yurm04)! - Updated semantic tokens `fill-info-secondary`, `text-info`, `fill-success-secondary`, `fill-caution-secondary`, `fill-critical-secondary`.

* [#10958](https://github.com/Shopify/polaris/pull/10958) [`5c183e0e1`](https://github.com/Shopify/polaris/commit/5c183e0e155ef47a43f7e3290a0f043965c0ecad) Thanks [@mrcthms](https://github.com/mrcthms)! - Added a live region to the `Page` `Header` to announce the `title` after navigation changes

### Patch Changes

- [#11338](https://github.com/Shopify/polaris/pull/11338) [`4ddba49c4`](https://github.com/Shopify/polaris/commit/4ddba49c41b218a002b7de0ec53bcde35974cdec) Thanks [@alex-page](https://github.com/alex-page)! - `<Toast>` Fix icon color to properly inherit the parent color

- Updated dependencies [[`4a7e090bc`](https://github.com/Shopify/polaris/commit/4a7e090bca1c9f5c647f53a93832424ff1cfcf82)]:
  - @shopify/polaris-tokens@8.4.0

## 12.4.0

### Minor Changes

- [#11303](https://github.com/Shopify/polaris/pull/11303) [`d0babcc9b`](https://github.com/Shopify/polaris/commit/d0babcc9b15b8ef8251425795bec26e876f03756) Thanks [@ardakaracizmeli](https://github.com/ardakaracizmeli)! - - Remapped the `bg-fill-magic-secondary` token colors
  - Added a Magic `tone` to `Badge`

### Patch Changes

- [#11299](https://github.com/Shopify/polaris/pull/11299) [`e530a44f9`](https://github.com/Shopify/polaris/commit/e530a44f93e7c865b7d32272ba2347584d60522c) Thanks [@fortmarek](https://github.com/fortmarek)! - Added padding for FooterHelp on small viewports

* [#11329](https://github.com/Shopify/polaris/pull/11329) [`a45dafb35`](https://github.com/Shopify/polaris/commit/a45dafb35cfac975d17bcc55f9c1dee5cf97eecb) Thanks [@lbenie](https://github.com/lbenie)! - `TopBar` Fixed .NavigationIcon styles to ensure Icon color is properly inherited.

* Updated dependencies [[`d0babcc9b`](https://github.com/Shopify/polaris/commit/d0babcc9b15b8ef8251425795bec26e876f03756), [`235bc7d0c`](https://github.com/Shopify/polaris/commit/235bc7d0c327c450f94650ffe6f64d68eee2a28e)]:
  - @shopify/polaris-tokens@8.3.0
  - @shopify/polaris-icons@7.12.0

## 12.3.0

### Minor Changes

- [#11273](https://github.com/Shopify/polaris/pull/11273) [`d514150b1`](https://github.com/Shopify/polaris/commit/d514150b1b4e58a37b27ec9534108301a57f9b12) Thanks [@alex-page](https://github.com/alex-page)! - Add `inherit` to `<Icon>` tone property
  Fix appearance of `source="placeholder"` in `<Icon>`

### Patch Changes

- Updated dependencies [[`2b5ecf8df`](https://github.com/Shopify/polaris/commit/2b5ecf8df3dcc07a3a6a75939e6f3b588f710ea1), [`bd0cede27`](https://github.com/Shopify/polaris/commit/bd0cede27d266ec827220ad9da1016b788811922)]:
  - @shopify/polaris-icons@7.11.0

## 12.2.0

### Minor Changes

- [#11166](https://github.com/Shopify/polaris/pull/11166) [`456f3da42`](https://github.com/Shopify/polaris/commit/456f3da42f9ffb2a2521b14465ac6ea31641c491) Thanks [@sophschneider](https://github.com/sophschneider)! - Added Card component default value for roundedAbove prop

* [#11211](https://github.com/Shopify/polaris/pull/11211) [`07aa5e979`](https://github.com/Shopify/polaris/commit/07aa5e9796e4e421fb2a6792f2db8144c47bef68) Thanks [@sophschneider](https://github.com/sophschneider)! - Added `size` prop with `slim` and `medium` options to `TextField`

- [#11266](https://github.com/Shopify/polaris/pull/11266) [`bf0593e20`](https://github.com/Shopify/polaris/commit/bf0593e2034d6017b66864f297b8d93f1e4a5342) Thanks [@LauraAubin](https://github.com/LauraAubin)! - - Fixed `Modal` `activator` not regaining focus on close
  - Added an `activatorWrapper` prop to `Modal` to support setting the element that wraps the `activator`

* [#11201](https://github.com/Shopify/polaris/pull/11201) [`eca971dca`](https://github.com/Shopify/polaris/commit/eca971dca7db6ae97e4d7295b55a2a3cdbee0276) Thanks [@laurkim](https://github.com/laurkim)! - Added documentation for `Card` examples to support `LegacyCard` compositions

- [#11261](https://github.com/Shopify/polaris/pull/11261) [`32cfbecb1`](https://github.com/Shopify/polaris/commit/32cfbecb136f57077bb5beefb58a4cc554dc8f71) Thanks [@lgriffee](https://github.com/lgriffee)! - Updated `Avatar` background and text colors

* [#11219](https://github.com/Shopify/polaris/pull/11219) [`97683ac05`](https://github.com/Shopify/polaris/commit/97683ac052fcc69c6f689520c15fde555d14fbfa) Thanks [@matallo](https://github.com/matallo)! - - Bumped `color-text-magic-secondary` to purple 13
  - Added `tone` prop with `magic` value to `Select`
  - Added `magic` value to `tone` prop of `Text`
  - Added `magic-subdued` value to `tone` prop of `Text`

- [#11264](https://github.com/Shopify/polaris/pull/11264) [`773daaa0f`](https://github.com/Shopify/polaris/commit/773daaa0f05771082238ad99fe5a3de68ca5f4a5) Thanks [@ryanschingeck](https://github.com/ryanschingeck)! - Added `maxWidth` prop to SkeletonDisplayText component

* [#11172](https://github.com/Shopify/polaris/pull/11172) [`64ee75039`](https://github.com/Shopify/polaris/commit/64ee750393a67ec271908e597403cc2035e35660) Thanks [@yurm04](https://github.com/yurm04)! - Added the `key` prop to `Select` component `StrictOption`

- [#11170](https://github.com/Shopify/polaris/pull/11170) [`79cadcf4f`](https://github.com/Shopify/polaris/commit/79cadcf4ff7d7dac62f5f3b4aa44a7f519b5cfee) Thanks [@laurkim](https://github.com/laurkim)! - Added support for `paddingInline` and `paddingBlock` on `Box` component with updated documentation

* [#11115](https://github.com/Shopify/polaris/pull/11115) [`45deb1941`](https://github.com/Shopify/polaris/commit/45deb1941fe7736f10f99ebb2b8f2989d7ca9c96) Thanks [@fatimasajadi](https://github.com/fatimasajadi)! - Fixed hover state of `IndexTable.Row` when `selectable` is `false`

- [#10633](https://github.com/Shopify/polaris/pull/10633) [`53fe61479`](https://github.com/Shopify/polaris/commit/53fe61479df4e6334533dac84ba3f8ab58474d88) Thanks [@mattkubej](https://github.com/mattkubej)! - Updated IndexTable, ResourceList, and DataTable to have built-in pagination props

* [#10726](https://github.com/Shopify/polaris/pull/10726) [`35d92bcd8`](https://github.com/Shopify/polaris/commit/35d92bcd822d779421930087a015f3f2ef435083) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated Filters to not render or perform filters logic if the filters array is empty

- [#10800](https://github.com/Shopify/polaris/pull/10800) [`9159e5083`](https://github.com/Shopify/polaris/commit/9159e50830e2cb1876d1441d93eb32112f123429) Thanks [@sirgalleto](https://github.com/sirgalleto)! - Added support for an `EditColumns` button rendered in the `IndexFilters` deprecating the `Tabs`'s `edit-columns` action.

  - `IndexFilters`
    - Added support for rendering an Edit Columns button using the `showEditColumnsButton` flag.
    - Added the edition `mode` to the `onEditStart(mode)` callback.
  - `Tabs`
    - Removed the `edit-columns` action type.

* [#11221](https://github.com/Shopify/polaris/pull/11221) [`799276156`](https://github.com/Shopify/polaris/commit/7992761567fec29194e2ef18ddd89f2eaf36f271) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated Pagination to be correct height of 40px when in the table variant

- [#11263](https://github.com/Shopify/polaris/pull/11263) [`04b8fb370`](https://github.com/Shopify/polaris/commit/04b8fb3704df1872ea6bcdd30db08e778cd29a23) Thanks [@alex-page](https://github.com/alex-page)! - Add storybook example for all icons in @shopify/polaris-icons

* [#11094](https://github.com/Shopify/polaris/pull/11094) [`2c5ca9900`](https://github.com/Shopify/polaris/commit/2c5ca990041de1a8c08aa4ab82c60c19945a5f00) Thanks [@laurkim](https://github.com/laurkim)! - Added support for `bodyXs` variant and fixed font weight for `headingLg` variant in `Text` component.
  Updated references to font tokens from Polaris v11 to v12 in `Text` component documentation

- [#11036](https://github.com/Shopify/polaris/pull/11036) [`1459f773d`](https://github.com/Shopify/polaris/commit/1459f773d670301af3ee7697a886f7ef45361fb4) Thanks [@hughnguy](https://github.com/hughnguy)! - Fixed `TextField` events not bubbling up when `multiline`

### Patch Changes

- [#10987](https://github.com/Shopify/polaris/pull/10987) [`00374f85a`](https://github.com/Shopify/polaris/commit/00374f85a7ae971e3457d98365e6f37aba2dbfe1) Thanks [@kyledurand](https://github.com/kyledurand)! - Simplified `Button` code

* [#11211](https://github.com/Shopify/polaris/pull/11211) [`07aa5e979`](https://github.com/Shopify/polaris/commit/07aa5e9796e4e421fb2a6792f2db8144c47bef68) Thanks [@sophschneider](https://github.com/sophschneider)! - Fixed transparent background and wrapping in `IndexFilters` on small screens

- [#11211](https://github.com/Shopify/polaris/pull/11211) [`07aa5e979`](https://github.com/Shopify/polaris/commit/07aa5e9796e4e421fb2a6792f2db8144c47bef68) Thanks [@sophschneider](https://github.com/sophschneider)! - Added `SearchMinor` icon to `Filters` search field when `mdUp`

* [#11101](https://github.com/Shopify/polaris/pull/11101) [`6297e524a`](https://github.com/Shopify/polaris/commit/6297e524a730caf298ad972c137e015b34328667) Thanks [@AndrewMusgrave](https://github.com/AndrewMusgrave)! - Fixed ref error in `Tabs` for `CreateViewModal` and removed promoted bulk action warnings

- [#11203](https://github.com/Shopify/polaris/pull/11203) [`8b9ded242`](https://github.com/Shopify/polaris/commit/8b9ded242e02b36f166a844c8ff2e160d217256d) Thanks [@kyledurand](https://github.com/kyledurand)! - Updated IndexTable documentation for when to hide bulk actions

* [#11270](https://github.com/Shopify/polaris/pull/11270) [`09df04ca5`](https://github.com/Shopify/polaris/commit/09df04ca5161398818c8bfa8b48bbe8400596e28) Thanks [@moraleslevi](https://github.com/moraleslevi)! - Remove scrollbars from TextField vertical content

- [#11245](https://github.com/Shopify/polaris/pull/11245) [`165c860c2`](https://github.com/Shopify/polaris/commit/165c860c21ed11af5be86ae7e6d0dfe092b6c968) Thanks [@matallo](https://github.com/matallo)! - - Fixed `onFocus` and `onBlur` events of Select component

* [#11237](https://github.com/Shopify/polaris/pull/11237) [`6b6e27ce0`](https://github.com/Shopify/polaris/commit/6b6e27ce0c54baf58aeaf702ce1e0359087fc14c) Thanks [@alex-page](https://github.com/alex-page)! - Remove unused custom icon from dropzone that was used in a test

- [#11103](https://github.com/Shopify/polaris/pull/11103) [`786ee94b4`](https://github.com/Shopify/polaris/commit/786ee94b40419c4bbab91d4523009777b8655a7d) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed Filters SearchField background in dark mode

* [#11211](https://github.com/Shopify/polaris/pull/11211) [`07aa5e979`](https://github.com/Shopify/polaris/commit/07aa5e9796e4e421fb2a6792f2db8144c47bef68) Thanks [@sophschneider](https://github.com/sophschneider)! - Fixed `TextField` clear button to not render when hidden

- [#11169](https://github.com/Shopify/polaris/pull/11169) [`90de38843`](https://github.com/Shopify/polaris/commit/90de3884391e51cbfc6d76ab40fd2583c4a1d4a0) Thanks [@kyledurand](https://github.com/kyledurand)! - Added expanded styling to Button

* [#11206](https://github.com/Shopify/polaris/pull/11206) [`0e8ab42b4`](https://github.com/Shopify/polaris/commit/0e8ab42b4731c42705302862ff090e9c38ff5c4f) Thanks [@sophschneider](https://github.com/sophschneider)! - Fixed disjointed Navigation arrow on small screens

- [#10804](https://github.com/Shopify/polaris/pull/10804) [`fe8491507`](https://github.com/Shopify/polaris/commit/fe8491507f7cd77af6866bd6f5d49229923dbad0) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Add support for using breakpoint tokens in CSS by using `@custom-media`

* [#11124](https://github.com/Shopify/polaris/pull/11124) [`ad504d5be`](https://github.com/Shopify/polaris/commit/ad504d5be8e660838e4f8a80b01eda228c3c03df) Thanks [@sarahill](https://github.com/sarahill)! - Removed bevel from `pressed` `Button` when focused

- [#11281](https://github.com/Shopify/polaris/pull/11281) [`b0edfbb92`](https://github.com/Shopify/polaris/commit/b0edfbb92f27293e42c9df44154c2b85dba41ccb) Thanks [@sirgalleto](https://github.com/sirgalleto)! - Restores the Tab's `edit-columns` action type

* [#11238](https://github.com/Shopify/polaris/pull/11238) [`2df27ed0b`](https://github.com/Shopify/polaris/commit/2df27ed0b17e351f992c39907c34941bb08fefe8) Thanks [@alex-page](https://github.com/alex-page)! - Conditionally render the accessibilityLabel when it is provided

- [#11168](https://github.com/Shopify/polaris/pull/11168) [`9c3dd913c`](https://github.com/Shopify/polaris/commit/9c3dd913c47936c7e5c03bb9611c8390708f85dc) Thanks [@mattkubej](https://github.com/mattkubej)! - [Page] prevent vertical content shift of header with metadata and actions

* [#11211](https://github.com/Shopify/polaris/pull/11211) [`07aa5e979`](https://github.com/Shopify/polaris/commit/07aa5e9796e4e421fb2a6792f2db8144c47bef68) Thanks [@sophschneider](https://github.com/sophschneider)! - Replaced custom `Filters` input with Polaris `TextField`

- [#11123](https://github.com/Shopify/polaris/pull/11123) [`ac45afda8`](https://github.com/Shopify/polaris/commit/ac45afda8054130048d3d46c798dc2fe4c093fec) Thanks [@sarahill](https://github.com/sarahill)! - Updated `Button` base state colors to use `fill` tokens

* [#10599](https://github.com/Shopify/polaris/pull/10599) [`b7219863d`](https://github.com/Shopify/polaris/commit/b7219863d74802f18dd5c158607574ba2d0e8b4a) Thanks [@oksanashopify](https://github.com/oksanashopify)! - Added child type to IndexTable row

- [#11105](https://github.com/Shopify/polaris/pull/11105) [`ecbd6c137`](https://github.com/Shopify/polaris/commit/ecbd6c137d44ec1f14581a46388ca1718d002f4a) Thanks [@sarahill](https://github.com/sarahill)! - Fixed `Tag` icon and disabled state colors

* [#11012](https://github.com/Shopify/polaris/pull/11012) [`c25478fba`](https://github.com/Shopify/polaris/commit/c25478fbadd7540d7eb38b6c184ec41fdd989add) Thanks [@chloerice](https://github.com/chloerice)! - Fixed `FormLayout` spacing

- [#10753](https://github.com/Shopify/polaris/pull/10753) [`c849ff468`](https://github.com/Shopify/polaris/commit/c849ff468f0c82c02b8064e20859ffa1063d1e2e) Thanks [@stephxshopify](https://github.com/stephxshopify)! - [Modal] Disallow vertical scroll with use of noScroll

- Updated dependencies [[`c58632afa`](https://github.com/Shopify/polaris/commit/c58632afa1141c467533b7564e725f99ebbed71c), [`c3cad73cb`](https://github.com/Shopify/polaris/commit/c3cad73cb58217577ebd6c9b94ce184a1d362f0d), [`0b1961c16`](https://github.com/Shopify/polaris/commit/0b1961c162c6401589acf7d1ac5b9f12ab3b8f97), [`32cfbecb1`](https://github.com/Shopify/polaris/commit/32cfbecb136f57077bb5beefb58a4cc554dc8f71), [`97683ac05`](https://github.com/Shopify/polaris/commit/97683ac052fcc69c6f689520c15fde555d14fbfa), [`fe8491507`](https://github.com/Shopify/polaris/commit/fe8491507f7cd77af6866bd6f5d49229923dbad0)]:
  - @shopify/polaris-tokens@8.2.0
  - @shopify/polaris-icons@7.10.0

## 12.1.1

### Patch Changes

- Updated dependencies [[`23055adcf`](https://github.com/Shopify/polaris/commit/23055adcfa97decbfbc51924bd121d1dae76ac6f)]:
  - @shopify/polaris-tokens@8.1.0

## 12.1.0

### Minor Changes

- [#10819](https://github.com/Shopify/polaris/pull/10819) [`460c48cfa`](https://github.com/Shopify/polaris/commit/460c48cfa51fb42c08e1f7256adc3919ae7eca1a) Thanks [@matallo](https://github.com/matallo)! - - Added `tone` prop with `magic` value to `TextField`
  - Added `tone` prop with `magic` value to `ChoiceList`
  - Added `tone` prop with `magic` value to `Checkbox`

### Patch Changes

- [#11079](https://github.com/Shopify/polaris/pull/11079) [`9c0433c02`](https://github.com/Shopify/polaris/commit/9c0433c02c420c5a928bc790d4377da96630e90d) Thanks [@kyledurand](https://github.com/kyledurand)! - Added tests for destructive mapping in `Page` and `Modal`

* [#11081](https://github.com/Shopify/polaris/pull/11081) [`c0be502a8`](https://github.com/Shopify/polaris/commit/c0be502a803b44913ac17179009c0f298497b433) Thanks [@kyledurand](https://github.com/kyledurand)! - Updated Page titleMetadata documentation

## 12.0.4

### Patch Changes

- [#11075](https://github.com/Shopify/polaris/pull/11075) [`ba4123bf0`](https://github.com/Shopify/polaris/commit/ba4123bf0f915eca0692828f85821953c60a0984) Thanks [@chloerice](https://github.com/chloerice)! - Fixed `tertiary` `Button` focus state

## 12.0.3

### Patch Changes

- [#11018](https://github.com/Shopify/polaris/pull/11018) [`38ed8a9ba`](https://github.com/Shopify/polaris/commit/38ed8a9baf9e3ddc26b6399cddf6725b25c82031) Thanks [@zaquille-oneil](https://github.com/zaquille-oneil)! - Fixed `TextField` blurring when interacting with the `Spinner` buttons

* [#11067](https://github.com/Shopify/polaris/pull/11067) [`a1cff3557`](https://github.com/Shopify/polaris/commit/a1cff35579417d5dcb43b6da58eb90f7cb0d16f4) Thanks [@laurkim](https://github.com/laurkim)! - Fixed disabled button styling on `ContextualSaveBar` component

- [#11066](https://github.com/Shopify/polaris/pull/11066) [`9d5fedbce`](https://github.com/Shopify/polaris/commit/9d5fedbce0995da8ad17e6e8a5e2555fb3daa484) Thanks [@laurkim](https://github.com/laurkim)! - Fixed styling on `IndexTable` component header tooltip

## 12.0.2

### Patch Changes

- [#11037](https://github.com/Shopify/polaris/pull/11037) [`f81abddba`](https://github.com/Shopify/polaris/commit/f81abddba931be239475b660da7126434bd33acf) Thanks [@chloerice](https://github.com/chloerice)! - Added tests for `buttonFrom` and `buttonsFrom` utility functions

* [#11061](https://github.com/Shopify/polaris/pull/11061) [`74fb5d5c6`](https://github.com/Shopify/polaris/commit/74fb5d5c6f63e1bb3d43e05737a3a7a04f8465ad) Thanks [@laurkim](https://github.com/laurkim)! - Fixed border radius styling on `TextField.Spinner` component

- [#11062](https://github.com/Shopify/polaris/pull/11062) [`78ff4e665`](https://github.com/Shopify/polaris/commit/78ff4e665417ce976ac327e9fcf2c1454726cf81) Thanks [@chloerice](https://github.com/chloerice)! - Updated `ContextualSaveBar` icon to `RiskMajor` and updated logos in examples to Shopify logo

* [#11052](https://github.com/Shopify/polaris/pull/11052) [`27317aa4b`](https://github.com/Shopify/polaris/commit/27317aa4b67c670f45d53df61e70ed60db5de26d) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed destructive states for PageActions and Page SecondaryActions

- [#11053](https://github.com/Shopify/polaris/pull/11053) [`caf553126`](https://github.com/Shopify/polaris/commit/caf5531267591e5928164ba90269db168244ea34) Thanks [@laurkim](https://github.com/laurkim)! - Removed `experimental` flag from Badge `tone` types

* [#11049](https://github.com/Shopify/polaris/pull/11049) [`7508e7014`](https://github.com/Shopify/polaris/commit/7508e7014c97d2f7950dd04f6a188ddd64dcc0b3) Thanks [@sophschneider](https://github.com/sophschneider)! - Fixed Banner InlineIconBanner variant dismiss icon position when hideIcon is true

- [#10808](https://github.com/Shopify/polaris/pull/10808) [`b0d5750b0`](https://github.com/Shopify/polaris/commit/b0d5750b03730e5589334d1c143e4f808bb8d433) Thanks [@jesstelford](https://github.com/jesstelford)! - [IndexFilters] Loading spinner moved to be a suffix within the search box.

- Updated dependencies [[`73b1d5d2c`](https://github.com/Shopify/polaris/commit/73b1d5d2ccf0a9f203fdf045b752dfbf536aeee5)]:
  - @shopify/polaris-tokens@8.0.2

## 12.0.1

### Patch Changes

- [#10792](https://github.com/Shopify/polaris/pull/10792) [`2980e9d26`](https://github.com/Shopify/polaris/commit/2980e9d26ef7dd5da399c84c035cf062121bb4bc) Thanks [@SMAKSS](https://github.com/SMAKSS)! - Fixed typos and `editOnGithubUrl` in docs

* [#10960](https://github.com/Shopify/polaris/pull/10960) [`d7e4aa7f9`](https://github.com/Shopify/polaris/commit/d7e4aa7f97e7a427f940bf09d277fc93d540d8b0) Thanks [@oksanashopify](https://github.com/oksanashopify)! - fixed background-color for unselectable tabel first-child cell

- [#10975](https://github.com/Shopify/polaris/pull/10975) [`00952a33a`](https://github.com/Shopify/polaris/commit/00952a33a37164110a23e1a6ab7795976b075349) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed loading button spinner color

* [#10935](https://github.com/Shopify/polaris/pull/10935) [`8568e5141`](https://github.com/Shopify/polaris/commit/8568e5141c8a795ae0ba9036b702d4e3c94d0d9a) Thanks [@gazjones00](https://github.com/gazjones00)! - Fixed an issue with the `primary` variant styles conflicting with the `tertiary` variant in `Button`

- [#10934](https://github.com/Shopify/polaris/pull/10934) [`de419ba2b`](https://github.com/Shopify/polaris/commit/de419ba2bf3afda1e234d8b3e603452382bb54f2) Thanks [@gazjones00](https://github.com/gazjones00)! - Fixed disabled state for `monochromePlain` variant in `Button`

* [#10993](https://github.com/Shopify/polaris/pull/10993) [`fb508b91c`](https://github.com/Shopify/polaris/commit/fb508b91c311efe3b17d926604667147eed795e8) Thanks [@FCalabria](https://github.com/FCalabria)! - Fixed incompatible type between IndexTable and useIndexResourceState

- [#10998](https://github.com/Shopify/polaris/pull/10998) [`bb310cd3a`](https://github.com/Shopify/polaris/commit/bb310cd3abf18b272583afa6e732ce6b422b0b97) Thanks [@alisterdev](https://github.com/alisterdev)! - Update SkeletonThumbnail size values to correspond to Thumbnail

* [#10999](https://github.com/Shopify/polaris/pull/10999) [`e34a4db32`](https://github.com/Shopify/polaris/commit/e34a4db32228cb25c061495e84563f1df23f650a) Thanks [@kyledurand](https://github.com/kyledurand)! - Updated `Checkbox` icon to use tokens vs hard coded value

- [#10910](https://github.com/Shopify/polaris/pull/10910) [`65998488f`](https://github.com/Shopify/polaris/commit/65998488f9a696835d57f1b37ef9b3dfc3b0a86f) Thanks [@chloerice](https://github.com/chloerice)! - Fixed negative margin of `segmented` `ButtonGroup.Item` when child `Button` is `primary`

* [#11028](https://github.com/Shopify/polaris/pull/11028) [`9fb367afd`](https://github.com/Shopify/polaris/commit/9fb367afd23aeed1710cd18f3595ddc5b7e271ae) Thanks [@chloerice](https://github.com/chloerice)! - Fixed `buttonFrom` utility function not mapping boolean variant properties to `variant` and `tone`

* Updated dependencies [[`f1d256fce`](https://github.com/Shopify/polaris/commit/f1d256fcee9594bcb5a03ab8fee591d3832f12c4)]:
  - @shopify/polaris-tokens@8.0.1

## 12.0.0

### Major Changes

- [#10122](https://github.com/Shopify/polaris/pull/10122) [`43b42aefed`](https://github.com/Shopify/polaris/commit/43b42aefedcfcfa1375c182ac541fd58822ecd01) Thanks [@aveline](https://github.com/aveline)! - Removed `shape` prop on `Avatar` component

* [#10705](https://github.com/Shopify/polaris/pull/10705) [`c7c2312f7`](https://github.com/Shopify/polaris/commit/c7c2312f731b624ff6a50beda7b00c9b971091d2) Thanks [@chloerice](https://github.com/chloerice)! - - Removed the `subdued` and `status` props from `IndexTable.Row`. Use `tone` instead.

- [#10778](https://github.com/Shopify/polaris/pull/10778) [`b126f64e6`](https://github.com/Shopify/polaris/commit/b126f64e6380064ea828837ea0903b5ee4c2f6c4) Thanks [@laurkim](https://github.com/laurkim)! - Migrated `shadow` custom properties from v11 to v12

* [#10762](https://github.com/Shopify/polaris/pull/10762) [`1ef71164c`](https://github.com/Shopify/polaris/commit/1ef71164c2ad77f05fb7608c6e86bd79308602fa) Thanks [@laurkim](https://github.com/laurkim)! - Migrated `font` custom properties from v11 to v12

- [#10270](https://github.com/Shopify/polaris/pull/10270) [`b9bcaef414`](https://github.com/Shopify/polaris/commit/b9bcaef414eb841241655f49d93f38cf51bd3f78) Thanks [@kyledurand](https://github.com/kyledurand)! - Changed `spacing` prop to `gap` on `List` and `DescriptionList`

* [#10741](https://github.com/Shopify/polaris/pull/10741) [`2c2bb0e09`](https://github.com/Shopify/polaris/commit/2c2bb0e092cbb41a2844e24006ff2460b189cc01) Thanks [@laurkim](https://github.com/laurkim)! - - Migrated `border` custom properties from v11 to v12
  - Removed backwards compatibility for v11 border tokens on `Tooltip` component `BorderRadius` type
  - Updated JSDoc prop type descriptions to include updated `border` custom properties on `Divider` and `Tooltip` components

- [#10744](https://github.com/Shopify/polaris/pull/10744) [`a4f5e7df3`](https://github.com/Shopify/polaris/commit/a4f5e7df3f71fdcbb9f27a34c6e8302bd762ff53) Thanks [@mrcthms](https://github.com/mrcthms)! - Removed deprecated `disable1Password` prop from `TextField`.

* [#9997](https://github.com/Shopify/polaris/pull/9997) [`b59fc9e272`](https://github.com/Shopify/polaris/commit/b59fc9e272963fcc35f98b02f3c658b51a5ec4a5) Thanks [@yurm04](https://github.com/yurm04)! - Replaced `segmented` prop with `variant` in `ButtonGroup`.
  Replaced `spacing` prop with `gap` in `ButtonGroup`.

- [#10100](https://github.com/Shopify/polaris/pull/10100) [`4c7b2d4858`](https://github.com/Shopify/polaris/commit/4c7b2d48585782abb7d20e5f01809102141037e5) Thanks [@kyledurand](https://github.com/kyledurand)! - Updated `borderRadius` props on `Box` to match logical property naming conventions.

* [#10051](https://github.com/Shopify/polaris/pull/10051) [`69edd97ceb`](https://github.com/Shopify/polaris/commit/69edd97cebdd3de3769dadb9ab41e465ca071739) Thanks [@aveline](https://github.com/aveline)! - Renamed `color` prop to `tone` for `ProgressBar` component

- [#10182](https://github.com/Shopify/polaris/pull/10182) [`e814c0ee1a`](https://github.com/Shopify/polaris/commit/e814c0ee1aec24a30048d1aefb47b38fd45d0692) Thanks [@kyledurand](https://github.com/kyledurand)! - Removed `connectedDisclosure` prop from `Button`

* [#10283](https://github.com/Shopify/polaris/pull/10283) [`42ee9f407d`](https://github.com/Shopify/polaris/commit/42ee9f407d9f75ab444bd1c45669bc91e8bbe3ca) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Renamed `size` prop values for the `Avatar` component. See the following table for the new prop mappings.

  | Before                    | After       |
  | ------------------------- | ----------- |
  | `size="extraSmall"`       | `size="xs"` |
  | `size="small"`            | `size="sm"` |
  | `size="medium"`           | `size="md"` |
  | `size="large"`            | `size="lg"` |
  | `size="xl-experimental"`  | `size="xl"` |
  | `size="2xl-experimental"` | `size="xl"` |

- [#10232](https://github.com/Shopify/polaris/pull/10232) [`eb2c2035ca`](https://github.com/Shopify/polaris/commit/eb2c2035cabd6ccbd0fd773f98701633eff618a7) Thanks [@laurkim](https://github.com/laurkim)! - Removed `divider` prop from `Page` component

* [#10727](https://github.com/Shopify/polaris/pull/10727) [`179b481d7`](https://github.com/Shopify/polaris/commit/179b481d745c9e69880bd31cca409071ddf1845d) Thanks [@laurkim](https://github.com/laurkim)! - Migrated `space` custom properties from v11 to v12
  Removed backwards compatibility for v11 border tokens on `Tooltip` component `Padding` type
  Updated JSDoc prop type descriptions to include updated `padding` custom properties on `Box` component

- [#10271](https://github.com/Shopify/polaris/pull/10271) [`1125087b59`](https://github.com/Shopify/polaris/commit/1125087b5987df30e5b1d6962cf32c01fc2f2bf8) Thanks [@kyledurand](https://github.com/kyledurand)! - Removed deprecated `additionalNavigation` prop on Page Header

* [#10164](https://github.com/Shopify/polaris/pull/10164) [`af9f264b9a`](https://github.com/Shopify/polaris/commit/af9f264b9a15a91901e42f6ff2e8e8490e755e03) Thanks [@aveline](https://github.com/aveline)! - Renamed `destructive` prop to `tone` for `Button` component

- [#10261](https://github.com/Shopify/polaris/pull/10261) [`abeef7ad05`](https://github.com/Shopify/polaris/commit/abeef7ad0563878da797fdbcc1ee1262d4fe4c7e) Thanks [@kyledurand](https://github.com/kyledurand)! - Replaced `small`, `large`, and `fullScreen` props with `size` prop

* [#10060](https://github.com/Shopify/polaris/pull/10060) [`84e66a3ec4`](https://github.com/Shopify/polaris/commit/84e66a3ec484e335afb6d4f3e9ae5b9772244ecd) Thanks [@sophschneider](https://github.com/sophschneider)! - Enabled the Summer Editions 2023 feature flag by default

- [#10206](https://github.com/Shopify/polaris/pull/10206) [`dad09bde96`](https://github.com/Shopify/polaris/commit/dad09bde960bcb8a00a5ed5916201dbb1974bf7f) Thanks [@kyledurand](https://github.com/kyledurand)! - Changed `status` prop on `Banner` to `tone`

* [#10220](https://github.com/Shopify/polaris/pull/10220) [`2b0cdb2fbf`](https://github.com/Shopify/polaris/commit/2b0cdb2fbff2d3f6c8e9b31526799085617301db) Thanks [@kyledurand](https://github.com/kyledurand)! - Changed `color` prop on `Icon` to `tone`

- [#10669](https://github.com/Shopify/polaris/pull/10669) [`794d1f5e4`](https://github.com/Shopify/polaris/commit/794d1f5e4b79a2721594979d31972cd7534d6174) Thanks [@lgriffee](https://github.com/lgriffee)! - Added `border-radius` semantic layer

* [#10036](https://github.com/Shopify/polaris/pull/10036) [`359614cf83`](https://github.com/Shopify/polaris/commit/359614cf835973ae742082ff6fdc17ff37c27fc6) Thanks [@kyledurand](https://github.com/kyledurand)! - Replaced `borderless` prop with `variant` on `TextField`

- [#10635](https://github.com/Shopify/polaris/pull/10635) [`340e36e7d`](https://github.com/Shopify/polaris/commit/340e36e7dfe4bcfdafce1c169c896242832dec3f) Thanks [@laurkim](https://github.com/laurkim)! - Removed `polarisSummerEditions2023` feature flag from `AppProvider` context

* [#10090](https://github.com/Shopify/polaris/pull/10090) [`4caed28a77`](https://github.com/Shopify/polaris/commit/4caed28a77c7c5b4cf78dc8071631e7054173740) Thanks [@aveline](https://github.com/aveline)! - Consolidated boolean `Button` props into `variant` prop

- [#10041](https://github.com/Shopify/polaris/pull/10041) [`8f927f7622`](https://github.com/Shopify/polaris/commit/8f927f7622d15554c1ec3c02cdb1b381be636655) Thanks [@kyledurand](https://github.com/kyledurand)! - Replaced boolean props: `secondary`, `fullWidth`, `oneHalf`, `oneThird` on Layout.Section with `variant`

* [#10266](https://github.com/Shopify/polaris/pull/10266) [`22a51eae2b`](https://github.com/Shopify/polaris/commit/22a51eae2bf375cecf6442ba2759ccf9d73b0bf6) Thanks [@kyledurand](https://github.com/kyledurand)! - Renamed `color` prop on Text to `tone`

- [#10745](https://github.com/Shopify/polaris/pull/10745) [`a4205eee1`](https://github.com/Shopify/polaris/commit/a4205eee13ca9a4658f58a2c643ddcbb49956893) Thanks [@mrcthms](https://github.com/mrcthms)! - [IndexFilters] Remove IndexFiltersManager in AppProvider

* [#10060](https://github.com/Shopify/polaris/pull/10060) [`66f5c8df3e`](https://github.com/Shopify/polaris/commit/66f5c8df3e068c5cdc60a559e615f9375dbe537d) Thanks [@sophschneider](https://github.com/sophschneider)! - Removed Summer Editions experimental styles and code for the following components: `AppProvider`, `Avatar`, `AccountConnection`, `ActionList`, `ActionMenu`, `Autocomplete`, `Badge`, `Banner`, `Breadcrumbs`, `BulkActions`, `Button`, `ButtonGroup`, `CalloutCard`, `Card`, `CheckableButton`, `Checkbox`, `Choice`, `Connected`, `DataTable`, `DatePicker`, `DropZone`, `EmptyState`, `Filters`, `FormLayout`, `Frame`, `FullscreenBar`, `IndexFilters`, `IndexTable`, `InlineError`, `KeyboardKey`, `Labelled`, `Layout`, `LegacyCard`, `LegacyFilters`, `LegacyTabs`, `Link`, `List`, `Listbox`, `MediaCard`, `Modal`, `Navigation`, `OptionList`, `Page`, `PageActions`, `Pagination`, `Popover`, `ProgressBar`, `RadioButton`, `ResourceItem`, `ResourceList`, `Select`, `SettingAction`, `ShadowBevel`, `SkeletonPage`, `SkeletonThumbnail`, `Spinner`, `Tabs`, `Tag`, `Text`, `TextField`, `Thumbnail`, `TooltipOverlay`, `TopBar`, and `VideoThumbnail`

- [#10773](https://github.com/Shopify/polaris/pull/10773) [`f6bc29ade`](https://github.com/Shopify/polaris/commit/f6bc29ade47b11f4bd21aa4b6b604b6ae7391044) Thanks [@laurkim](https://github.com/laurkim)! - Removed support for `headingXs` and `heading4xl` variants and replaced usage with `headingSm` and `heading3xl`

* [#10232](https://github.com/Shopify/polaris/pull/10232) [`eb2c2035ca`](https://github.com/Shopify/polaris/commit/eb2c2035cabd6ccbd0fd773f98701633eff618a7) Thanks [@laurkim](https://github.com/laurkim)! - Removed `optionRole` prop from `OptionList` component

### Minor Changes

- [#10722](https://github.com/Shopify/polaris/pull/10722) [`14a94967d`](https://github.com/Shopify/polaris/commit/14a94967da24697830780a4978def80f98823f8c) Thanks [@laurkim](https://github.com/laurkim)! - Added support for `emphasis` and `text` tones on `Icon` and migrated `primary` and `subdued` tone color tokens

### Patch Changes

- [#10228](https://github.com/Shopify/polaris/pull/10228) [`e18ca907ec`](https://github.com/Shopify/polaris/commit/e18ca907ec059916550b22b84ff76c4ae84d0e0c) Thanks [@gwyneplaine](https://github.com/gwyneplaine)! - Removed unused disabled states in `FilterPill`

* [#10918](https://github.com/Shopify/polaris/pull/10918) [`aaf61fe6a`](https://github.com/Shopify/polaris/commit/aaf61fe6a9bf48e284285c3320edf213d95b2263) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - Executing `useBreakpoints` isormophically no longer triggers a Hydration mismatch error or rendering bugs.

- [#10268](https://github.com/Shopify/polaris/pull/10268) [`dbe3d9ecee`](https://github.com/Shopify/polaris/commit/dbe3d9ecee181d0e03d0efe0ce4f0b0012fd95c3) Thanks [@laurkim](https://github.com/laurkim)! - Fixed broken focus ring styles on `ResourceItem` component

* [#10871](https://github.com/Shopify/polaris/pull/10871) [`77744cbf0`](https://github.com/Shopify/polaris/commit/77744cbf0f6e44f99425bd395ef2c7fb5e7b917b) Thanks [@chloerice](https://github.com/chloerice)! - Disabled `calt` font ligatures to prevent unwanted stylizing of letters into symbols

- [#10238](https://github.com/Shopify/polaris/pull/10238) [`b17d23d69d`](https://github.com/Shopify/polaris/commit/b17d23d69d6a77326fb6e43019691384ddf8663f) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Ensure `Avatar` has no background color if an source prop is passed in to allow for transparent images

* [#10230](https://github.com/Shopify/polaris/pull/10230) [`a573e55d04`](https://github.com/Shopify/polaris/commit/a573e55d0492f28547ea1d964aa6c0cfb76488b5) Thanks [@gwyneplaine](https://github.com/gwyneplaine)! - `IndexFilter` remove custom `FilterButton` in favor of directly invoking the Polaris `Button` component.

* Updated dependencies [[`2a467249f`](https://github.com/Shopify/polaris/commit/2a467249f3a198dc252eba53df9fecc7bf6572dd), [`2cdc59f88`](https://github.com/Shopify/polaris/commit/2cdc59f8823a6529ebb6150c316934633f86b28c), [`794d1f5e4`](https://github.com/Shopify/polaris/commit/794d1f5e4b79a2721594979d31972cd7534d6174), [`86d4040c05`](https://github.com/Shopify/polaris/commit/86d4040c052a0dba0cb6f0d6e0f6fb8faf14c532), [`08aaf11ec`](https://github.com/Shopify/polaris/commit/08aaf11ec59680155476a20036a672795c2bad47)]:
  - @shopify/polaris-tokens@8.0.0

## 12.0.0-beta.2

### Major Changes

- [#10705](https://github.com/Shopify/polaris/pull/10705) [`c7c2312f7`](https://github.com/Shopify/polaris/commit/c7c2312f731b624ff6a50beda7b00c9b971091d2) Thanks [@chloerice](https://github.com/chloerice)! - - Removed the `subdued` and `status` props from `IndexTable.Row`. Use `tone` instead.

* [#10778](https://github.com/Shopify/polaris/pull/10778) [`b126f64e6`](https://github.com/Shopify/polaris/commit/b126f64e6380064ea828837ea0903b5ee4c2f6c4) Thanks [@laurkim](https://github.com/laurkim)! - Migrated `shadow` custom properties from v11 to v12

- [#10762](https://github.com/Shopify/polaris/pull/10762) [`1ef71164c`](https://github.com/Shopify/polaris/commit/1ef71164c2ad77f05fb7608c6e86bd79308602fa) Thanks [@laurkim](https://github.com/laurkim)! - Migrated `font` custom properties from v11 to v12

* [#10741](https://github.com/Shopify/polaris/pull/10741) [`2c2bb0e09`](https://github.com/Shopify/polaris/commit/2c2bb0e092cbb41a2844e24006ff2460b189cc01) Thanks [@laurkim](https://github.com/laurkim)! - - Migrated `border` custom properties from v11 to v12
  - Removed backwards compatibility for v11 border tokens on `Tooltip` component `BorderRadius` type
  - Updated JSDoc prop type descriptions to include updated `border` custom properties on `Divider` and `Tooltip` components

- [#10744](https://github.com/Shopify/polaris/pull/10744) [`a4f5e7df3`](https://github.com/Shopify/polaris/commit/a4f5e7df3f71fdcbb9f27a34c6e8302bd762ff53) Thanks [@mrcthms](https://github.com/mrcthms)! - Removed deprecated `disable1Password` prop from `TextField`.

* [#10727](https://github.com/Shopify/polaris/pull/10727) [`179b481d7`](https://github.com/Shopify/polaris/commit/179b481d745c9e69880bd31cca409071ddf1845d) Thanks [@laurkim](https://github.com/laurkim)! - Migrated `space` custom properties from v11 to v12
  Removed backwards compatibility for v11 border tokens on `Tooltip` component `Padding` type
  Updated JSDoc prop type descriptions to include updated `padding` custom properties on `Box` component

- [#10669](https://github.com/Shopify/polaris/pull/10669) [`794d1f5e4`](https://github.com/Shopify/polaris/commit/794d1f5e4b79a2721594979d31972cd7534d6174) Thanks [@lgriffee](https://github.com/lgriffee)! - Added `border-radius` semantic layer

* [#10745](https://github.com/Shopify/polaris/pull/10745) [`a4205eee1`](https://github.com/Shopify/polaris/commit/a4205eee13ca9a4658f58a2c643ddcbb49956893) Thanks [@mrcthms](https://github.com/mrcthms)! - [IndexFilters] Remove IndexFiltersManager in AppProvider

- [#10773](https://github.com/Shopify/polaris/pull/10773) [`f6bc29ade`](https://github.com/Shopify/polaris/commit/f6bc29ade47b11f4bd21aa4b6b604b6ae7391044) Thanks [@laurkim](https://github.com/laurkim)! - Removed support for `headingXs` and `heading4xl` variants and replaced usage with `headingSm` and `heading3xl`

### Minor Changes

- [#10722](https://github.com/Shopify/polaris/pull/10722) [`14a94967d`](https://github.com/Shopify/polaris/commit/14a94967da24697830780a4978def80f98823f8c) Thanks [@laurkim](https://github.com/laurkim)! - Added support for `emphasis` and `text` tones on `Icon` and migrated `primary` and `subdued` tone color tokens

* [#10788](https://github.com/Shopify/polaris/pull/10788) [`82f10e830`](https://github.com/Shopify/polaris/commit/82f10e8307bcc7a839e4733b4c03c957ff2fbd88) Thanks [@mrcthms](https://github.com/mrcthms)! - Deprecated the IndexFiltersManager component

### Patch Changes

- Updated dependencies [[`2a467249f`](https://github.com/Shopify/polaris/commit/2a467249f3a198dc252eba53df9fecc7bf6572dd), [`2cdc59f88`](https://github.com/Shopify/polaris/commit/2cdc59f8823a6529ebb6150c316934633f86b28c), [`794d1f5e4`](https://github.com/Shopify/polaris/commit/794d1f5e4b79a2721594979d31972cd7534d6174), [`08aaf11ec`](https://github.com/Shopify/polaris/commit/08aaf11ec59680155476a20036a672795c2bad47)]:
  - @shopify/polaris-tokens@8.0.0-beta.1

## 12.0.0-beta.1

### Major Changes

- [#10122](https://github.com/Shopify/polaris/pull/10122) [`43b42aefed`](https://github.com/Shopify/polaris/commit/43b42aefedcfcfa1375c182ac541fd58822ecd01) Thanks [@aveline](https://github.com/aveline)! - Removed `shape` prop on `Avatar` component

* [#10270](https://github.com/Shopify/polaris/pull/10270) [`b9bcaef41`](https://github.com/Shopify/polaris/commit/b9bcaef414eb841241655f49d93f38cf51bd3f78) Thanks [@kyledurand](https://github.com/kyledurand)! - Changed `spacing` prop to `gap` on `List` and `DescriptionList`

- [#9997](https://github.com/Shopify/polaris/pull/9997) [`b59fc9e27`](https://github.com/Shopify/polaris/commit/b59fc9e272963fcc35f98b02f3c658b51a5ec4a5) Thanks [@yurm04](https://github.com/yurm04)! - [ButtonGroup] Removed `segmented` boolean prop and replaced with `variant`. Replaced `spacing` prop with `gap`

* [#10100](https://github.com/Shopify/polaris/pull/10100) [`4c7b2d4858`](https://github.com/Shopify/polaris/commit/4c7b2d48585782abb7d20e5f01809102141037e5) Thanks [@kyledurand](https://github.com/kyledurand)! - Updated `borderRadius` props to match web spec

- [#10051](https://github.com/Shopify/polaris/pull/10051) [`69edd97ceb`](https://github.com/Shopify/polaris/commit/69edd97cebdd3de3769dadb9ab41e465ca071739) Thanks [@aveline](https://github.com/aveline)! - Renamed `color` prop to `tone` for `ProgressBar` component

* [#10182](https://github.com/Shopify/polaris/pull/10182) [`e814c0ee1a`](https://github.com/Shopify/polaris/commit/e814c0ee1aec24a30048d1aefb47b38fd45d0692) Thanks [@kyledurand](https://github.com/kyledurand)! - Removed connectedDislosure prop on button

- [#10283](https://github.com/Shopify/polaris/pull/10283) [`42ee9f407`](https://github.com/Shopify/polaris/commit/42ee9f407d9f75ab444bd1c45669bc91e8bbe3ca) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Renamed `size` prop values for the Avatar component. See the following table for the new prop mappings.

  | Before                    | After       |
  | ------------------------- | ----------- |
  | `size="extraSmall"`       | `size="xs"` |
  | `size="small"`            | `size="sm"` |
  | `size="medium"`           | `size="md"` |
  | `size="large"`            | `size="lg"` |
  | `size="xl-experimental"`  | `size="xl"` |
  | `size="2xl-experimental"` | `size="xl"` |

* [#10232](https://github.com/Shopify/polaris/pull/10232) [`eb2c2035c`](https://github.com/Shopify/polaris/commit/eb2c2035cabd6ccbd0fd773f98701633eff618a7) Thanks [@laurkim](https://github.com/laurkim)! - Removed `divider` prop from `Page` component

- [#10271](https://github.com/Shopify/polaris/pull/10271) [`1125087b5`](https://github.com/Shopify/polaris/commit/1125087b5987df30e5b1d6962cf32c01fc2f2bf8) Thanks [@kyledurand](https://github.com/kyledurand)! - Removed deprecated additionalNavigation prop on Page Header

* [#10164](https://github.com/Shopify/polaris/pull/10164) [`af9f264b9a`](https://github.com/Shopify/polaris/commit/af9f264b9a15a91901e42f6ff2e8e8490e755e03) Thanks [@aveline](https://github.com/aveline)! - Renamed `destructive` prop to `tone` for `Button` component

- [#10261](https://github.com/Shopify/polaris/pull/10261) [`abeef7ad0`](https://github.com/Shopify/polaris/commit/abeef7ad0563878da797fdbcc1ee1262d4fe4c7e) Thanks [@kyledurand](https://github.com/kyledurand)! - Replaced `small`, `large`, and `fullScreen` props with `size` prop

* [#10206](https://github.com/Shopify/polaris/pull/10206) [`dad09bde9`](https://github.com/Shopify/polaris/commit/dad09bde960bcb8a00a5ed5916201dbb1974bf7f) Thanks [@kyledurand](https://github.com/kyledurand)! - Changed `status` prop on `Banner` to `tone`

- [#10220](https://github.com/Shopify/polaris/pull/10220) [`2b0cdb2fbf`](https://github.com/Shopify/polaris/commit/2b0cdb2fbff2d3f6c8e9b31526799085617301db) Thanks [@kyledurand](https://github.com/kyledurand)! - Changed `color` prop on `Icon` to `tone`

* [#10036](https://github.com/Shopify/polaris/pull/10036) [`359614cf83`](https://github.com/Shopify/polaris/commit/359614cf835973ae742082ff6fdc17ff37c27fc6) Thanks [@kyledurand](https://github.com/kyledurand)! - Replaced `borderless` prop with `variant` on TextField

  Migration: `npx @shopify/polaris-migrator react-rename-component-prop <path> --componentName="TextField" --from="borderless" --to="variant" --newValue="borderless"`

- [#10635](https://github.com/Shopify/polaris/pull/10635) [`340e36e7d`](https://github.com/Shopify/polaris/commit/340e36e7dfe4bcfdafce1c169c896242832dec3f) Thanks [@laurkim](https://github.com/laurkim)! - Removed `polarisSummerEditions2023` feature flag from AppProvider context

* [#10090](https://github.com/Shopify/polaris/pull/10090) [`4caed28a77`](https://github.com/Shopify/polaris/commit/4caed28a77c7c5b4cf78dc8071631e7054173740) Thanks [@aveline](https://github.com/aveline)! - Consolidated boolean `Button` props into `variant` prop

- [#10041](https://github.com/Shopify/polaris/pull/10041) [`8f927f7622`](https://github.com/Shopify/polaris/commit/8f927f7622d15554c1ec3c02cdb1b381be636655) Thanks [@kyledurand](https://github.com/kyledurand)! - Replaced boolean props: `secondary`, `fullWidth`, `oneHalf`, `oneThird` on Layout.Section with `variant`

* [#10266](https://github.com/Shopify/polaris/pull/10266) [`22a51eae2`](https://github.com/Shopify/polaris/commit/22a51eae2bf375cecf6442ba2759ccf9d73b0bf6) Thanks [@kyledurand](https://github.com/kyledurand)! - Renamed `color` prop on Text to `tone`

- [#9993](https://github.com/Shopify/polaris/pull/9993) [`66f5c8df3e`](https://github.com/Shopify/polaris/commit/66f5c8df3e068c5cdc60a559e615f9375dbe537d) Thanks [@gwyneplaine](https://github.com/gwyneplaine)! - Removed Summer Editions experimental styles and code for the following components: `AppProvider`, `Avatar`, `AccountConnection`, `ActionList`, `ActionMenu`, `Autocomplete`, `Badge`, `Banner`, `Breadcrumbs`, `BulkActions`, `Button`, `ButtonGroup`, `CalloutCard`, `Card`, `CheckableButton`, `Checkbox`, `Choice`, `Connected`, `DataTable`, `DatePicker`, `DropZone`, `EmptyState`, `Filters`, `FormLayout`, `Frame`, `FullscreenBar`, `IndexFilters`, `IndexTable`, `InlineError`, `KeyboardKey`, `Labelled`, `Layout`, `LegacyCard`, `LegacyFilters`, `LegacyTabs`, `Link`, `List`, `Listbox`, `MediaCard`, `Modal`, `Navigation`, `OptionList`, `Page`, `PageActions`, `Pagination`, `Popover`, `ProgressBar`, `RadioButton`, `ResourceItem`, `ResourceList`, `Select`, `SettingAction`, `ShadowBevel`, `SkeletonPage`, `SkeletonThumbnail`, `Spinner`, `Tabs`, `Tag`, `Text`, `TextField`, `Thumbnail`, `TooltipOverlay`, `TopBar`, and `VideoThumbnail`

* [#10232](https://github.com/Shopify/polaris/pull/10232) [`eb2c2035c`](https://github.com/Shopify/polaris/commit/eb2c2035cabd6ccbd0fd773f98701633eff618a7) Thanks [@laurkim](https://github.com/laurkim)! - Removed `optionRole` prop from `OptionList` component

### Minor Changes

- [#10238](https://github.com/Shopify/polaris/pull/10238) [`b17d23d69`](https://github.com/Shopify/polaris/commit/b17d23d69d6a77326fb6e43019691384ddf8663f) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Add a search field to filter ActionList that have more than 10 items

### Patch Changes

- [#10228](https://github.com/Shopify/polaris/pull/10228) [`e18ca907e`](https://github.com/Shopify/polaris/commit/e18ca907ec059916550b22b84ff76c4ae84d0e0c) Thanks [@gwyneplaine](https://github.com/gwyneplaine)! - `Filters` Remove unused disabled states in `FilterPill`

* [#10268](https://github.com/Shopify/polaris/pull/10268) [`dbe3d9ece`](https://github.com/Shopify/polaris/commit/dbe3d9ecee181d0e03d0efe0ce4f0b0012fd95c3) Thanks [@laurkim](https://github.com/laurkim)! - Fixed broken focus ring styles on `ResourceItem` component

- [#10238](https://github.com/Shopify/polaris/pull/10238) [`b17d23d69`](https://github.com/Shopify/polaris/commit/b17d23d69d6a77326fb6e43019691384ddf8663f) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Ensure Avatar has no background color if an source prop is passed in to allow for transparent images

* [#10230](https://github.com/Shopify/polaris/pull/10230) [`a573e55d0`](https://github.com/Shopify/polaris/commit/a573e55d0492f28547ea1d964aa6c0cfb76488b5) Thanks [@gwyneplaine](https://github.com/gwyneplaine)! - `IndexFilter` remove custom `FilterButton` in favor of directly invoking the Polaris `Button` component.

* Updated dependencies [[`86d4040c0`](https://github.com/Shopify/polaris/commit/86d4040c052a0dba0cb6f0d6e0f6fb8faf14c532)]:
  - @shopify/polaris-tokens@7.13.0-beta.0

## 11.26.0

### Minor Changes

- [#10788](https://github.com/Shopify/polaris/pull/10788) [`82f10e830`](https://github.com/Shopify/polaris/commit/82f10e8307bcc7a839e4733b4c03c957ff2fbd88) Thanks [@mrcthms](https://github.com/mrcthms)! - Deprecated the IndexFiltersManager component

## 11.25.0

### Minor Changes

- [#10724](https://github.com/Shopify/polaris/pull/10724) [`7e53d7860`](https://github.com/Shopify/polaris/commit/7e53d7860eb4641ec34c2f6af826213792501f1b) Thanks [@chloerice](https://github.com/chloerice)! - Deprecated `IndexTable` `status` and `subdued` props in favor of new `tone` prop

### Patch Changes

- [#10736](https://github.com/Shopify/polaris/pull/10736) [`49e47880a`](https://github.com/Shopify/polaris/commit/49e47880aa160084eb57699b016f9a0eb97f10c9) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - Fixed issue with setting local pinned filters in `Filters` when no `appliedFilters` were provided.

## 11.24.0

### Minor Changes

- [#10576](https://github.com/Shopify/polaris/pull/10576) [`30555a9f9`](https://github.com/Shopify/polaris/commit/30555a9f9a275cd44a3ea8b965309c948b9796e8) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - Migrated `color` custom properties from Polaris v11 to v12

* [`b3bfdcfc0`](https://github.com/Shopify/polaris/commit/b3bfdcfc03d9dc27f25ce93c6786242b58587e6c) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - - Updated the `TextField` to automatically set password manager disable data attributes when `autoComplete` is set to "off"
  - Deprecated the `TextField` `disable1Password` prop

## 11.23.0

### Minor Changes

- [#10630](https://github.com/Shopify/polaris/pull/10630) [`3987c0e48`](https://github.com/Shopify/polaris/commit/3987c0e489ec46cfd4d43871603889ea507b5cdc) Thanks [@aveline](https://github.com/aveline)! - Migrated font custom properties

* [#10632](https://github.com/Shopify/polaris/pull/10632) [`4ab148ee6`](https://github.com/Shopify/polaris/commit/4ab148ee669c56e123da1fc51ca6c71ceb26fed9) Thanks [@fabiormoura](https://github.com/fabiormoura)! - Added a `warning` `status` to the `IndexTable.Row`

### Patch Changes

- Updated dependencies [[`f23af6fdd`](https://github.com/Shopify/polaris/commit/f23af6fdd3a52d93700d3aeab43305bcf3989e98)]:
  - @shopify/polaris-tokens@7.12.1

## 11.22.0

### Minor Changes

- [#10681](https://github.com/Shopify/polaris/pull/10681) [`629b2ec17`](https://github.com/Shopify/polaris/commit/629b2ec170f31b330d3e5192ecd42444d52eb733) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Updated CSS custom properties with safe mapping to new border design tokens for v12

### Patch Changes

- [#10061](https://github.com/Shopify/polaris/pull/10061) [`d40af8a5c`](https://github.com/Shopify/polaris/commit/d40af8a5cff90bb224145f32298384fdedd32b2c) Thanks [@shopper-myles](https://github.com/shopper-myles)! - Updated the `stroke-width` SVG attribute to `strokeWidth` in `Avatar` to fix the React prop name syntax error

## 11.21.0

### Minor Changes

- [#10585](https://github.com/Shopify/polaris/pull/10585) [`45fc3a01f`](https://github.com/Shopify/polaris/commit/45fc3a01f959f6eea2c1bf03b981811a6f13f344) Thanks [@laurkim](https://github.com/laurkim)! - Migrated `space` custom properties from `v11` to `v12`

### Patch Changes

- Updated dependencies [[`45fc3a01f`](https://github.com/Shopify/polaris/commit/45fc3a01f959f6eea2c1bf03b981811a6f13f344)]:
  - @shopify/polaris-tokens@7.12.0

## 11.20.1

### Patch Changes

- [#10665](https://github.com/Shopify/polaris/pull/10665) [`22dbada34`](https://github.com/Shopify/polaris/commit/22dbada3490b8ed5c5c65c77c532529b411128e2) Thanks [@chloerice](https://github.com/chloerice)! - Fixed `Modal` missing `FrameContext` error

* [#10663](https://github.com/Shopify/polaris/pull/10663) [`f6a965102`](https://github.com/Shopify/polaris/commit/f6a965102f71820375e764e6bdbb431fb9542273) Thanks [@chloerice](https://github.com/chloerice)! - Reverted disabling of `Page` `secondaryActions` when `IndexFilters` is in filter `mode`

- [#10649](https://github.com/Shopify/polaris/pull/10649) [`3bafbea50`](https://github.com/Shopify/polaris/commit/3bafbea5000207c05d2c58dc3553790164ab7844) Thanks [@mattkubej](https://github.com/mattkubej)! - Replace usages of `bg-secondary-experimental` with `bg-subdued` for Tables

- Updated dependencies [[`f26cebe99`](https://github.com/Shopify/polaris/commit/f26cebe99e486730bce2ca1d9add89e24ef9c648), [`2359e5f5a`](https://github.com/Shopify/polaris/commit/2359e5f5a4e6a93f8dd70997c4ae9a1ab732911c)]:
  - @shopify/polaris-tokens@7.11.0

## 11.20.0

### Minor Changes

- [#10477](https://github.com/Shopify/polaris/pull/10477) [`790a001cd`](https://github.com/Shopify/polaris/commit/790a001cd1942a0cd32e90b98339236fe2800afc) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - Updated semantic `color` tokens

* [#10478](https://github.com/Shopify/polaris/pull/10478) [`8be227e0c`](https://github.com/Shopify/polaris/commit/8be227e0c4ac6a03566beb8b9717a721c2f20b07) Thanks [@MaxCloutier](https://github.com/MaxCloutier)! - Added `allowFiltering` prop on `ActionList`, and `filterActions` prop on Page Header

- [#9445](https://github.com/Shopify/polaris/pull/9445) [`7be9c243a`](https://github.com/Shopify/polaris/commit/7be9c243a9612ea211ac9ea46898241f742072b2) Thanks [@m4thieulavoie](https://github.com/m4thieulavoie)! - Added support for subheaders and selection of a range of `IndexTable.Rows` -- See the [With subheaders](https://polaris.shopify.com/components/tables/index-table) example on polaris.shopify.com for how to properly configure
  - `IndexTable.Row`
    - Added support for setting the `indeterminate` value on the `selected` prop
    - Added the `selectionRange` prop to specify a range of other consecutive, related rows selected when the row is selected
    - Added the `rowType` prop to indicate the relationship or role of the row's contents (defaults to `data`, `subheader` renders the row to look and behave like the table header row)
      Added support for setting accessibility attributes on `IndexTable.Cell`
  - `IndexTable.Cell`
    - Added the `as` prop to support rendering the cell as a `th` element if it is serving as a subheading cell
    - Added support for the `headers` attribute to manually associate all headers when the cell is described by more than its column heading
    - Added support for the `colSpan` attribute to specify the number of the columns that the cell element should extend to
    - Added support for the `scope` attribute to indicate whether the `th` is a header for a column, row, or group of columns or rows

* [#10490](https://github.com/Shopify/polaris/pull/10490) [`863f15ff2`](https://github.com/Shopify/polaris/commit/863f15ff2e2a8dec499b630b9fd0b9e45409b18b) Thanks [@mrcthms](https://github.com/mrcthms)! - Add new `IndexFiltersManager` for allowing disabling of Page Header actions when in Filtering or EditingColumns mode

- [#10566](https://github.com/Shopify/polaris/pull/10566) [`9fed74317`](https://github.com/Shopify/polaris/commit/9fed743175079a3967c6591e1e4765f2881181e9) Thanks [@mrcthms](https://github.com/mrcthms)! - Fixed a bug in `Filters` where changes to the `appliedFilters` prop were not being handled

### Patch Changes

- [#10404](https://github.com/Shopify/polaris/pull/10404) [`5acfcec04`](https://github.com/Shopify/polaris/commit/5acfcec047adeb82fc64666528e44f5050edd089) Thanks [@jesstelford](https://github.com/jesstelford)! - Scoped CSS variables for non-responsive props on `Tooltip`, `RangeSlider`, `ProgressBar`, and `HorizontalStack`.

* [#10582](https://github.com/Shopify/polaris/pull/10582) [`3efbc1b4e`](https://github.com/Shopify/polaris/commit/3efbc1b4ec637f43c4cb97d90830b14e486a1d22) Thanks [@mrcthms](https://github.com/mrcthms)! - Fixed the focus states of actions within the Page Header component

- [#10492](https://github.com/Shopify/polaris/pull/10492) [`d5ff72dec`](https://github.com/Shopify/polaris/commit/d5ff72dec72e612472a0f0e980d497ae2e1bfb2d) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated Storybook stories to be wrapped with an empty FrameContext.Provider

- Updated dependencies [[`fe1aac1b5`](https://github.com/Shopify/polaris/commit/fe1aac1b5a9868c3decda53b94150e0242905d04), [`790a001cd`](https://github.com/Shopify/polaris/commit/790a001cd1942a0cd32e90b98339236fe2800afc), [`63cf3ad24`](https://github.com/Shopify/polaris/commit/63cf3ad2405f75589869a6f1aa33c277f559df3c), [`120e96eae`](https://github.com/Shopify/polaris/commit/120e96eaeb8ebda3dcf99d3917167e442bd19cdf)]:
  - @shopify/polaris-tokens@7.10.0

## 11.19.0

### Minor Changes

- [#10310](https://github.com/Shopify/polaris/pull/10310) [`5f94cae98`](https://github.com/Shopify/polaris/commit/5f94cae98e2a41ca33fae3afce7ad078132609e0) Thanks [@mattkubej](https://github.com/mattkubej)! - Added a `type` prop to `Pagination` to support a table row layout

### Patch Changes

- Updated dependencies [[`5e073c209`](https://github.com/Shopify/polaris/commit/5e073c2095c51154f27740f4c4bc3d00122c0218), [`2bccc2291`](https://github.com/Shopify/polaris/commit/2bccc22918eab571136b925bdf7ce07281658248), [`033424546`](https://github.com/Shopify/polaris/commit/03342454611a71a0a57e48cf8a013c1ca27837b3), [`66b2599da`](https://github.com/Shopify/polaris/commit/66b2599dabcb4bfb5cb4964c7a9bfce4fc12617b), [`c07de6ca4`](https://github.com/Shopify/polaris/commit/c07de6ca4aed19c643b2681d498432fd7414475e)]:
  - @shopify/polaris-tokens@7.9.0

## 11.18.0

### Minor Changes

- [#10429](https://github.com/Shopify/polaris/pull/10429) [`2e65a7e98`](https://github.com/Shopify/polaris/commit/2e65a7e98dced44f45df02d15cda78093bac3cf3) Thanks [@mrcthms](https://github.com/mrcthms)! - Fixed `Filters` pinned filter pill not remaining when applied values are cleared

* [#10394](https://github.com/Shopify/polaris/pull/10394) [`b7f25f07f`](https://github.com/Shopify/polaris/commit/b7f25f07fba272add902d68a8cc15bee43030dff) Thanks [@mrcthms](https://github.com/mrcthms)! - Added support for disabling 1Password integration in `TextField`

- [#10406](https://github.com/Shopify/polaris/pull/10406) [`87f559ca1`](https://github.com/Shopify/polaris/commit/87f559ca1190b28b583913d321c87b60639c1cc4) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated the Toast component to support multiple re-renders being announced on screen readers

### Patch Changes

- [#10428](https://github.com/Shopify/polaris/pull/10428) [`d35d55e5b`](https://github.com/Shopify/polaris/commit/d35d55e5b15d64b7140d976dbc35d56d2580852a) Thanks [@mrcthms](https://github.com/mrcthms)! - Fixed layout shift in `IndexFilters` when switching modes

- Updated dependencies [[`26ab8ce7d`](https://github.com/Shopify/polaris/commit/26ab8ce7df10609316eccc75b7bed6f8cebc9120), [`7514dd1a3`](https://github.com/Shopify/polaris/commit/7514dd1a36a9988ede48085b80c6e7e214f98968), [`16c61668a`](https://github.com/Shopify/polaris/commit/16c61668ac3916aacaeb759f2052d0a3a7ed762e)]:
  - @shopify/polaris-tokens@7.8.0

## 11.17.0

### Minor Changes

- [#10397](https://github.com/Shopify/polaris/pull/10397) [`624e0b570`](https://github.com/Shopify/polaris/commit/624e0b570ab1ca380e9ead9087e417552aaecd58) Thanks [@mrcthms](https://github.com/mrcthms)! - [FilterPill] Remove FilterPill from Filters bar when Popover closes with an empty filter

### Patch Changes

- [#10389](https://github.com/Shopify/polaris/pull/10389) [`2c1f93c90`](https://github.com/Shopify/polaris/commit/2c1f93c90caf2fb1ad0a4dff67f40bbedea5be69) Thanks [@mattkubej](https://github.com/mattkubej)! - [IndexTable] vertically align sort and tooltip column headers

* [#10385](https://github.com/Shopify/polaris/pull/10385) [`e5f88b8ce`](https://github.com/Shopify/polaris/commit/e5f88b8ce68857e9e35fcf60ee34b6a9e865d78d) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed ActionList SearchField focus bug and minor style issues

* Updated dependencies [[`101abb835`](https://github.com/Shopify/polaris/commit/101abb83599ce67372c411cde396613306dc06de)]:
  - @shopify/polaris-tokens@7.7.0

## 11.16.0

### Minor Changes

- [#10290](https://github.com/Shopify/polaris/pull/10290) [`5939b49cf`](https://github.com/Shopify/polaris/commit/5939b49cf4616d6994cc17095e79ba5600ca7fe4) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - - Added multi-theme support
  - Added multi-theme build artifacts
  - Added multi-theme runtime access

### Patch Changes

- Updated dependencies [[`5939b49cf`](https://github.com/Shopify/polaris/commit/5939b49cf4616d6994cc17095e79ba5600ca7fe4)]:
  - @shopify/polaris-tokens@7.6.0

## 11.15.0

### Minor Changes

- [#9701](https://github.com/Shopify/polaris/pull/9701) [`cbf539495`](https://github.com/Shopify/polaris/commit/cbf539495a3d66d67192dde93d9c881b94592f0a) Thanks [@martenbjork](https://github.com/martenbjork)! - Updated the Frame and Topbar components to stay clear of a scrollbar. This reduces the overall jumpiness in the UI when scrollbars appear and disappear when using a Polaris app.

### Patch Changes

- [#10284](https://github.com/Shopify/polaris/pull/10284) [`eba75d20a`](https://github.com/Shopify/polaris/commit/eba75d20a6b839ac068f985c00ccb039a4b50b7d) Thanks [@zakwarsame](https://github.com/zakwarsame)! - - Updated `Filters` query field to initialize with focus based on `mode` state

* [#10282](https://github.com/Shopify/polaris/pull/10282) [`9a2d4f62a`](https://github.com/Shopify/polaris/commit/9a2d4f62ab113bee2b7dec9ca458a59b8024cba4) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed pointer alignment on tooltip

- [#10343](https://github.com/Shopify/polaris/pull/10343) [`12a62b4d7`](https://github.com/Shopify/polaris/commit/12a62b4d74598b486382dcc190b173b8f69d9147) Thanks [@mrcthms](https://github.com/mrcthms)! - Fixed UI inconsistencies in the mobile view of the IndexFilters

* [#10276](https://github.com/Shopify/polaris/pull/10276) [`abb50250e`](https://github.com/Shopify/polaris/commit/abb50250ec6af05dc4fef85d887fac37edfe1175) Thanks [@highfieldjames](https://github.com/highfieldjames)! - Updated `TextField` of `type` `number` to focus when a `Spinner` button is clicked

* Updated dependencies [[`47652f7d6`](https://github.com/Shopify/polaris/commit/47652f7d67f98d7bef8ef8485fae803b9f3c1056)]:
  - @shopify/polaris-icons@7.9.0

## 11.14.0

### Minor Changes

- [#9907](https://github.com/Shopify/polaris/pull/9907) [`ef7ddb4ac`](https://github.com/Shopify/polaris/commit/ef7ddb4ac8fd1557fecda638c99bc64035224754) Thanks [@MaxCloutier](https://github.com/MaxCloutier)! - Add a search field to filter ActionList that have more than 10 items

### Patch Changes

- [#10288](https://github.com/Shopify/polaris/pull/10288) [`cd1578230`](https://github.com/Shopify/polaris/commit/cd1578230c4cfdce510f3ad889859892370932dd) Thanks [@ssetem](https://github.com/ssetem)! - Only apply apple dynamic text to mobile breakpoint

* [#10292](https://github.com/Shopify/polaris/pull/10292) [`72f55e32f`](https://github.com/Shopify/polaris/commit/72f55e32f81c1f639698f8556a76057114a2cf53) Thanks [@kyledurand](https://github.com/kyledurand)! - Added check for string type before calling string method

- [#10211](https://github.com/Shopify/polaris/pull/10211) [`ac044b3c9`](https://github.com/Shopify/polaris/commit/ac044b3c96441da6cb28e280e799321c8f557341) Thanks [@peterlazzarino](https://github.com/peterlazzarino)! - Ensure Avatar has no background color if an source prop is passed in to allow for transparent images

* [#10287](https://github.com/Shopify/polaris/pull/10287) [`9b14e231a`](https://github.com/Shopify/polaris/commit/9b14e231af6b6de9fb6f8c6efd7c7c2523183cdb) Thanks [@laurkim](https://github.com/laurkim)! - Fixed focus ring and input text styles on `ActionList.SearchField` component

## 11.13.0

### Minor Changes

- [#10086](https://github.com/Shopify/polaris/pull/10086) [`5a5b3795a`](https://github.com/Shopify/polaris/commit/5a5b3795afa484db637fd5e151866149fd932b42) Thanks [@joelzwarrington](https://github.com/joelzwarrington)! - [Modal] Activator no longer wrapped in Box

* [#10183](https://github.com/Shopify/polaris/pull/10183) [`7891c7ed9`](https://github.com/Shopify/polaris/commit/7891c7ed961da9bb0bfbfeea9ca8e7432875074e) Thanks [@kyledurand](https://github.com/kyledurand)! - Deprecate connectedDisclosure prop on button

- [#10181](https://github.com/Shopify/polaris/pull/10181) [`219be15aa`](https://github.com/Shopify/polaris/commit/219be15aa2d49e6f2f2b0eb3108fbfa3f1faa621) Thanks [@ssetem](https://github.com/ssetem)! - Added support for [Dynamic Type](https://developer.apple.com/documentation/uikit/uifont/scaling_fonts_automatically) in iOS

### Patch Changes

- [#10056](https://github.com/Shopify/polaris/pull/10056) [`5ecaafc2b`](https://github.com/Shopify/polaris/commit/5ecaafc2bf21d922b0b86dacb71cc5db9d4fe66c) Thanks [@jesstelford](https://github.com/jesstelford)! - [ResourceList] Remove layout jank when bulk actions enabled and item selected

* [`bc1f4aab1`](https://github.com/Shopify/polaris/commit/bc1f4aab13ce4f73488d9ced20f4b18dee4b8220) Thanks [@samrose3](https://github.com/samrose3)! - Reduced surrounding margin of Tooltip to allow for interaction with nearby UI elements.

## 11.12.0

### Minor Changes

- [#10042](https://github.com/Shopify/polaris/pull/10042) [`1d82a3b12`](https://github.com/Shopify/polaris/commit/1d82a3b122fc1d47a14d978d180f3e9e5d5359e2) Thanks [@m4thieulavoie](https://github.com/m4thieulavoie)! - introduce a subdued prop to the popover pane component

* [#9868](https://github.com/Shopify/polaris/pull/9868) [`cb1dbbbd3`](https://github.com/Shopify/polaris/commit/cb1dbbbd3cd859ca4ac29d310b21b161b1bad485) Thanks [@mattkubej](https://github.com/mattkubej)! - Introduce disableKeyboardShortcuts prop to IndexFilters

- [#9862](https://github.com/Shopify/polaris/pull/9862) [`93b902094`](https://github.com/Shopify/polaris/commit/93b9020942ec9228dc5ac80df0e323fd7d7bb51e) Thanks [@brittcorry](https://github.com/brittcorry)! - Added support for the ` Filters``closeOnChildOverlayClick ` prop to `IndexFilters`

* [#9872](https://github.com/Shopify/polaris/pull/9872) [`f585a57e0`](https://github.com/Shopify/polaris/commit/f585a57e0359cff2d43e0a817a33b2126f255c7c) Thanks [@fatimasajadi](https://github.com/fatimasajadi)! - Add a critical status to the IndexTable

### Patch Changes

- [#10012](https://github.com/Shopify/polaris/pull/10012) [`3ae94cef0`](https://github.com/Shopify/polaris/commit/3ae94cef0579cf948452042df6c37eb2c867d565) Thanks [@melvinadu](https://github.com/melvinadu)! - Fixed wrapping overflow of strings with no spacing within `Filters` popover

* [#9889](https://github.com/Shopify/polaris/pull/9889) [`0cbdbb4f5`](https://github.com/Shopify/polaris/commit/0cbdbb4f58896cfaa6624e799c4c426b170d8f86) Thanks [@chloerice](https://github.com/chloerice)! - Set the preferred position of `Pagination` and `Page` `secondaryActions` button tooltips to `below`

- [#10045](https://github.com/Shopify/polaris/pull/10045) [`65ad4e27c`](https://github.com/Shopify/polaris/commit/65ad4e27cad4188b31e5172d245296a65672cf54) Thanks [@sophschneider](https://github.com/sophschneider)! - Fixed BannerExperimental no title hidden icon variant

* [#9885](https://github.com/Shopify/polaris/pull/9885) [`f0d288099`](https://github.com/Shopify/polaris/commit/f0d288099359a7b4fad93c8ea82d40bae520a44b) Thanks [@bsharrow](https://github.com/bsharrow)! - `Aligned the`SkeletonPage``title`font-weight with the`Page` title

- [#9860](https://github.com/Shopify/polaris/pull/9860) [`af0c9d4a2`](https://github.com/Shopify/polaris/commit/af0c9d4a250a605ee588fa033c9023f80401a0c8) Thanks [@sophschneider](https://github.com/sophschneider)! - Updated CI tests to account for both polarisSummerEditions2023 beta flag states

* [#9874](https://github.com/Shopify/polaris/pull/9874) [`5569ac69a`](https://github.com/Shopify/polaris/commit/5569ac69aea87fc80044b432917f45e69f4f22e9) Thanks [@chloerice](https://github.com/chloerice)! - Fixed `Page` first `Header` row misalignment

- [#9850](https://github.com/Shopify/polaris/pull/9850) [`57d8d5506`](https://github.com/Shopify/polaris/commit/57d8d55068bfbca43a047f95452f40f7bfd1749e) Thanks [@kyledurand](https://github.com/kyledurand)! - Rebuilt `Filters` `SearchField`

* [#8988](https://github.com/Shopify/polaris/pull/8988) [`535b3fc91`](https://github.com/Shopify/polaris/commit/535b3fc9145d8044f155b42c83fabf25009afcc7) Thanks [@m4thieulavoie](https://github.com/m4thieulavoie)! - Added support for rendering `Text` `as` a `strong` tag

- [#9912](https://github.com/Shopify/polaris/pull/9912) [`00b831292`](https://github.com/Shopify/polaris/commit/00b831292d058d8489b2653d01f4a952f8c6fe28) Thanks [@samrose3](https://github.com/samrose3)! - Fixed primary Button styles for Chrome on Android devices

- Updated dependencies [[`d1bee0f87`](https://github.com/Shopify/polaris/commit/d1bee0f87879c7dba57e0b3c4585d0addbe835c9), [`36e4ee8af`](https://github.com/Shopify/polaris/commit/36e4ee8afbc7dbec6e65225384629afa83f64a75)]:
  - @shopify/polaris-icons@7.8.1
  - @shopify/polaris-tokens@7.5.3

## 11.11.0

### Minor Changes

- [#9697](https://github.com/Shopify/polaris/pull/9697) [`c078d5d85`](https://github.com/Shopify/polaris/commit/c078d5d85420fe30f3cd19d2e801ae5b2ad4484c) Thanks [@nat-king](https://github.com/nat-king)! - Added optional prop `TextDecorationLine` to `Text` to include a line-through decoration

### Patch Changes

- [#9847](https://github.com/Shopify/polaris/pull/9847) [`85b68a358`](https://github.com/Shopify/polaris/commit/85b68a358a0390c243216ad8059d9bccf5f00594) Thanks [@sophschneider](https://github.com/sophschneider)! - Added `role` prop to `VerticalStack`

* [#9863](https://github.com/Shopify/polaris/pull/9863) [`4061fd04d`](https://github.com/Shopify/polaris/commit/4061fd04db5458549b5743c61cf39ca9e67ab721) Thanks [@zakwarsame](https://github.com/zakwarsame)! - Fixed ActionList item overflow and tooltip zIndex

* Updated dependencies [[`3fc3d5923`](https://github.com/Shopify/polaris/commit/3fc3d5923b5ed23c4a460bb2c40f31eab21e5f89), [`bac86a621`](https://github.com/Shopify/polaris/commit/bac86a6212467ed4695c4c979f7b5f5f4c6bf8e2), [`5dabf0fe0`](https://github.com/Shopify/polaris/commit/5dabf0fe050ababf9bd5f78fd4a1fa69098c95b2)]:
  - @shopify/polaris-icons@7.8.0

## 11.10.2

### Patch Changes

- [#9849](https://github.com/Shopify/polaris/pull/9849) [`547d588c8`](https://github.com/Shopify/polaris/commit/547d588c8ef506378dedfac0704bd4b92839029f) Thanks [@rdott](https://github.com/rdott)! - Fixed padding on FilterPill Buttons

## 11.10.1

### Patch Changes

- [#9839](https://github.com/Shopify/polaris/pull/9839) [`34349e61f`](https://github.com/Shopify/polaris/commit/34349e61f970e9f387e8fc74a42e4f0fe41ab955) Thanks [@sophschneider](https://github.com/sophschneider)! - Fix banner bug

## 11.10.0

### Minor Changes

- [#9820](https://github.com/Shopify/polaris/pull/9820) [`5fe84e33b`](https://github.com/Shopify/polaris/commit/5fe84e33b23285d31caf65e7b0ed2eb13244916d) Thanks [@zakwarsame](https://github.com/zakwarsame)! - Added a `variant` prop to ActionList for applying avatar size and left indentation space and border to items

### Patch Changes

- [#9773](https://github.com/Shopify/polaris/pull/9773) [`a5f68c9a5`](https://github.com/Shopify/polaris/commit/a5f68c9a554a879c41c57f642f2cd927bc47d996) Thanks [@jesstelford](https://github.com/jesstelford)! - [Scrollable] shadow overlays scrollable content correctly.

* [#9764](https://github.com/Shopify/polaris/pull/9764) [`d3315de2e`](https://github.com/Shopify/polaris/commit/d3315de2e24ca2d17bdcaf402530e1fc472e3c79) Thanks [@andy-schneidr](https://github.com/andy-schneidr)! - Wrap SkeletonBodyText lines in a div (width 100%)

- [#9831](https://github.com/Shopify/polaris/pull/9831) [`078bddad1`](https://github.com/Shopify/polaris/commit/078bddad1a5d161c872266680d26b1bb3690eb29) Thanks [@zakwarsame](https://github.com/zakwarsame)! - Updated the user menu's avatar to include `name`

* [#9828](https://github.com/Shopify/polaris/pull/9828) [`80c87bb1a`](https://github.com/Shopify/polaris/commit/80c87bb1a878eb29f917956572f8a645612a8343) Thanks [@felipeleusin](https://github.com/felipeleusin)! - [Frame] Applies margin to Content when using sidebar

## 11.9.1

### Patch Changes

- Updated dependencies [[`6bb284d11`](https://github.com/Shopify/polaris/commit/6bb284d11f100b5813c27ded6cc9779eb7fc9a49)]:
  - @shopify/polaris-icons@7.7.0

## 11.9.0

### Minor Changes

- [#9761](https://github.com/Shopify/polaris/pull/9761) [`ce3e516a2`](https://github.com/Shopify/polaris/commit/ce3e516a2a0dd15a6cdf096d6f76c4740d96d23f) Thanks [@aveline](https://github.com/aveline)! - Added `readOnly` prop to `Labelled` component

* [#9770](https://github.com/Shopify/polaris/pull/9770) [`571acc166`](https://github.com/Shopify/polaris/commit/571acc16692ffc5d0920a2811a3f59c7f3214708) Thanks [@zaquille-oneil](https://github.com/zaquille-oneil)! - Updating TextField to support ArrowUp and ArrowDown keypresses for "integer" type

### Patch Changes

- [#9765](https://github.com/Shopify/polaris/pull/9765) [`541e5920b`](https://github.com/Shopify/polaris/commit/541e5920b8218808b86c00f61ffc156de0e1b9ad) Thanks [@mattkubej](https://github.com/mattkubej)! - [TopBar] convert to grid and center align search field

- Updated dependencies [[`8228de0f6`](https://github.com/Shopify/polaris/commit/8228de0f61e49caeab538de36b19616e19daecce)]:
  - @shopify/polaris-icons@7.6.0

## 11.8.0

### Minor Changes

- [#9733](https://github.com/Shopify/polaris/pull/9733) [`79e604b34`](https://github.com/Shopify/polaris/commit/79e604b340c4a80fcd45ab40a19c8210319bbea5) Thanks [@yurm04](https://github.com/yurm04)! - empty

### Patch Changes

- [#9749](https://github.com/Shopify/polaris/pull/9749) [`3b6d391a3`](https://github.com/Shopify/polaris/commit/3b6d391a3b002f9e827960fee05a6bc633ea449b) Thanks [@jesstelford](https://github.com/jesstelford)! - [IndexFilters] Sort popover aligned to right side of button.

* [#9772](https://github.com/Shopify/polaris/pull/9772) [`6193ebe03`](https://github.com/Shopify/polaris/commit/6193ebe03b5387395537ff0530befa51f3e0905b) Thanks [@chloerice](https://github.com/chloerice)! - Fixed background color missing from `IndexTable.Cell` when fixed and in various states of interaction

* Updated dependencies [[`c8e5779f0`](https://github.com/Shopify/polaris/commit/c8e5779f097c6509ff84deacf17c41d1b5ecfd41), [`5b85401fe`](https://github.com/Shopify/polaris/commit/5b85401fe56ee07f107358548669ed8f1d6ecceb), [`799819b68`](https://github.com/Shopify/polaris/commit/799819b687a319328bf36917ba79c6324197aba9)]:
  - @shopify/polaris-icons@7.5.0
  - @shopify/polaris-tokens@7.5.2

## 11.7.0

### Minor Changes

- [#9725](https://github.com/Shopify/polaris/pull/9725) [`4d0186647`](https://github.com/Shopify/polaris/commit/4d018664742bc3c9e7c4b577d31dcd05d09a2a6f) Thanks [@felipeleusin](https://github.com/felipeleusin)! - [Text] Allows Text to work as dt/dd

### Patch Changes

- [#9704](https://github.com/Shopify/polaris/pull/9704) [`d80cc63d6`](https://github.com/Shopify/polaris/commit/d80cc63d667ea08bb1e7ed9ce184da9f087dcb9d) Thanks [@samrose3](https://github.com/samrose3)! - Fixed IndexTable content from overlapping the horizontal scrollbar

* [#9715](https://github.com/Shopify/polaris/pull/9715) [`72acdded4`](https://github.com/Shopify/polaris/commit/72acdded4e06d135bce6b3ac0fffc1d73829d979) Thanks [@felipeleusin](https://github.com/felipeleusin)! - Fixes ContextualSaveBar and Frame styles to respect page layout

- [#9510](https://github.com/Shopify/polaris/pull/9510) [`f17d78670`](https://github.com/Shopify/polaris/commit/f17d78670682861d38695d2715fcd0bdec855677) Thanks [@vladovidiu](https://github.com/vladovidiu)! - - `ResourceList` replace deprecated EventListener component with call to useEventListener() hook.
  - `ResourceList` fix `BulkActions` UI not appearing when filters are enabled.

* [#9706](https://github.com/Shopify/polaris/pull/9706) [`b2d9e2dce`](https://github.com/Shopify/polaris/commit/b2d9e2dced8d6f8c94c08e99a7e5b4a226d8cbcf) Thanks [@aveline](https://github.com/aveline)! - Adjust popover positioning for `ActionMenu` secondary actions

* Updated dependencies [[`ad287e384`](https://github.com/Shopify/polaris/commit/ad287e3842eb7e1ebf2f63079e3ffbc20271f8bb), [`639395406`](https://github.com/Shopify/polaris/commit/6393954066675721b9d9a8c9543b78d97e8af19b), [`ae40558df`](https://github.com/Shopify/polaris/commit/ae40558dfc5ed5faabd7ba5812307a077b00a27f)]:
  - @shopify/polaris-icons@7.4.0

## 11.6.0

### Minor Changes

- [#9684](https://github.com/Shopify/polaris/pull/9684) [`92d7107e3`](https://github.com/Shopify/polaris/commit/92d7107e3f72a97d9c3d52620c1a8b068fddbcf9) Thanks [@ryanschingeck](https://github.com/ryanschingeck)! - Added support for setting `onMouseOut` and `onMouseOver` callbacks on `ResourceItem`

## 11.5.3

### Patch Changes

- [#9668](https://github.com/Shopify/polaris/pull/9668) [`bed52546f`](https://github.com/Shopify/polaris/commit/bed52546f3852fea8f3c98505846a6f553dbd3c1) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - Experimental `shadow-bevel` integration

* [#9677](https://github.com/Shopify/polaris/pull/9677) [`50e496c12`](https://github.com/Shopify/polaris/commit/50e496c128e63e6e3f7be4cf085bbe7823657239) Thanks [@jesstelford](https://github.com/jesstelford)! - - Revert "[Internal]: Generate contiguous responsive CSS variables."

* Updated dependencies [[`bed52546f`](https://github.com/Shopify/polaris/commit/bed52546f3852fea8f3c98505846a6f553dbd3c1)]:
  - @shopify/polaris-tokens@7.5.1

## 11.5.2

### Patch Changes

- [#9678](https://github.com/Shopify/polaris/pull/9678) [`e3297e524`](https://github.com/Shopify/polaris/commit/e3297e524666ff44246b661f5cca574660fefa8b) Thanks [@gwyneplaine](https://github.com/gwyneplaine)! - Revert mutually exclusive union types on RadioButton

## 11.5.1

### Patch Changes

- [#9675](https://github.com/Shopify/polaris/pull/9675) [`acc7e2bf1`](https://github.com/Shopify/polaris/commit/acc7e2bf1b21d650fd612a707b715b8e5f92af39) Thanks [@gwyneplaine](https://github.com/gwyneplaine)! - Revert mutually exclusive union types on Choice and Checkbox.

## 11.5.0

### Minor Changes

- [#9593](https://github.com/Shopify/polaris/pull/9593) [`0f97293b0`](https://github.com/Shopify/polaris/commit/0f97293b0ef00a4e06b4ad85ebcdc3da6e7c932d) Thanks [@jesstelford](https://github.com/jesstelford)! - [Choice][checkbox][RadioButton] Add bleed + fill props to increase choice target sizes

### Patch Changes

- [#9669](https://github.com/Shopify/polaris/pull/9669) [`e27998256`](https://github.com/Shopify/polaris/commit/e279982569a3a07021afc79a426b51233e41a908) Thanks [@chloerice](https://github.com/chloerice)! - Reverted experimental `ActionList.Item` `icon` size

## 11.4.5

### Patch Changes

- [#9647](https://github.com/Shopify/polaris/pull/9647) [`bdeaea99b`](https://github.com/Shopify/polaris/commit/bdeaea99b464d25659da2816ced6a8e267bb4469) Thanks [@sophschneider](https://github.com/sophschneider)! - LegacyCard fixed xs screen section border radii

## 11.4.4

### Patch Changes

- [#9634](https://github.com/Shopify/polaris/pull/9634) [`d3b75154f`](https://github.com/Shopify/polaris/commit/d3b75154f8df45752532f374c13f015dd3045054) Thanks [@sophschneider](https://github.com/sophschneider)! - Legacy card update experimental padding

## 11.4.3

### Patch Changes

- Updated dependencies [[`e566211ef`](https://github.com/Shopify/polaris/commit/e566211ef79c9d178615a85895007bdef45d755e)]:
  - @shopify/polaris-icons@7.3.0

## 11.4.2

### Patch Changes

- [#9612](https://github.com/Shopify/polaris/pull/9612) [`e552c9a15`](https://github.com/Shopify/polaris/commit/e552c9a154e541612b34e10281d79ed443866ede) Thanks [@jesstelford](https://github.com/jesstelford)! - - [Choice][checkbox][RadioButton] Use CSS-native `:hover` styling.

  By using CSS-native hover styling, and pulling it up to the wrapping `<label>`
  it avoids an issue where the browser would briefly detect hover with the
  :hover pseudo selector setting `cursor: pointer`, but then get overwritten
  with the JS onMouseOver styles 100ms later to `cursor: default`, resulting in
  a flash of a pointy-hand for the cursor on disabled Checkbox.

* [#9606](https://github.com/Shopify/polaris/pull/9606) [`3536e3aa0`](https://github.com/Shopify/polaris/commit/3536e3aa006896ae31c9148832230322ceaa823d) Thanks [@jesstelford](https://github.com/jesstelford)! - - [Internal]: Generate contiguous responsive CSS variables.

  Ensures the CSS vars set via `style` props will override the responsive-props
  SASS mixin which forces them to have a value of `initial`.

  Forcing to `initial` is required when components are nested to avoid an outer
  component accidentally setting a value for a nested component by specifying a
  CSS variable (CSS vars are globally scoped and later-in-DOM has more
  specificity).

  However, `initial` is [not usable within a
  `calc()`](https://polaris.shopify.com/sandbox?code=N4Igxg9gJgpiBcIA8UCWA3ABAZwC4E8AbGAXmGEwAcBDKNAOwHN5MAdcawsAClXtVypOmANSYAzACcYAWwCU7TAF8lAPlb1MmAMLV6AclyYArthiYkkWKr4ChhJAHorMVZj46Ayp4svVYTh45Jz8NJzR0dXoQABoQXAALWRhsBABtEEIIAOJ4GGiAXTiAd1QoRNT4NIKlIA),
  so any unset values will not [fallback as they would when the browser
  encounters a `var(--some-var-equals-initial, fallback)`](https://polaris.shopify.com/sandbox?code=N4Igxg9gJgpiBcIA8UCWA3ABAZwC4E8AbGAXmGEwHIBaagBzGuwgFsZr0BDAJ0vitQA7VLlSdClADSY6nKGkEBzfgB0QXbgApaDJq3YbpAZm4wWASjWYAvtYB8KwZkxJIsOxs3mkAejcw7TC5CAFcYbEwIADMXfzshETFCXzjMEOwYTFwAC0yo8UIAI04wAGsg8TDHXzR0OxBJEByzcIQAbRBCCDBxGHgYQRAAXUaAd1QoHOx2oesgA).

  Adding this `forceContiguous` flag means we can be sure we're setting exactly
  what the user asked for when passing in their prop, and not `initial`,
  therefore retaining the existing behaviour while forward supporting the usage
  of `calc()`. We still need the `initial` values to ensure any lower
  breakpoints that are unset do not inherit parent values accidentally.

- [#9621](https://github.com/Shopify/polaris/pull/9621) [`26053bd3f`](https://github.com/Shopify/polaris/commit/26053bd3f13920ff30ff29c78d55b000b017cef2) Thanks [@samrose3](https://github.com/samrose3)! - Only use Inter for experimental styles

- Updated dependencies [[`6d4baffde`](https://github.com/Shopify/polaris/commit/6d4baffdeb63d4cb1265b201b8490677d25e8c5e), [`3536e3aa0`](https://github.com/Shopify/polaris/commit/3536e3aa006896ae31c9148832230322ceaa823d), [`58406fd98`](https://github.com/Shopify/polaris/commit/58406fd98db3561fb4e3f55fc44f51202a98024f), [`26053bd3f`](https://github.com/Shopify/polaris/commit/26053bd3f13920ff30ff29c78d55b000b017cef2)]:
  - @shopify/polaris-tokens@7.5.0

## 11.4.1

### Patch Changes

- Updated dependencies [[`af6337d60`](https://github.com/Shopify/polaris/commit/af6337d60e18cfd8adcc99aa425e1cc697b41ca0)]:
  - @shopify/polaris-tokens@7.4.0

## 11.4.0

### Minor Changes

- [#9560](https://github.com/Shopify/polaris/pull/9560) [`a9d08e16b`](https://github.com/Shopify/polaris/commit/a9d08e16bc310256b1ecd89c04bacec4e12718f0) Thanks [@dustinmalik](https://github.com/dustinmalik)! - Updated the placement of the contextual save bar and added `sidebar` prop to the Frame component to support sidebar in the admin.

### Patch Changes

- [#9564](https://github.com/Shopify/polaris/pull/9564) [`398079ccd`](https://github.com/Shopify/polaris/commit/398079ccd7f1f48499acccbf79cd88d0776161d9) Thanks [@gwyneplaine](https://github.com/gwyneplaine)! - Remove unused mobile selectable styles

## 11.3.1

### Patch Changes

- [#9556](https://github.com/Shopify/polaris/pull/9556) [`c72d2f905`](https://github.com/Shopify/polaris/commit/c72d2f905df9197f4c476e6dbbd8808e0edd1018) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - Restructured `Select` override selectors to patch Sass compilation issue

* [#9031](https://github.com/Shopify/polaris/pull/9031) [`795ae3782`](https://github.com/Shopify/polaris/commit/795ae3782fbdd98b09993d99e062f40b268bab2d) Thanks [@danbrady](https://github.com/danbrady)! - Added support for `Avatar` being presentational

* Updated dependencies [[`991d9fe69`](https://github.com/Shopify/polaris/commit/991d9fe696faaee22f112d30820943bff9f5ee35), [`75f08f32c`](https://github.com/Shopify/polaris/commit/75f08f32c2cf594a73d3d32276bab5bcf87490bf)]:
  - @shopify/polaris-icons@7.2.0

## 11.3.0

### Minor Changes

- [#9500](https://github.com/Shopify/polaris/pull/9500) [`c689e640e`](https://github.com/Shopify/polaris/commit/c689e640ec4aa926bc0794bfdfd949f44ea0110b) Thanks [@mateus](https://github.com/mateus)! - Refactored SecondaryNavigation and changed how recursive nav items are rendered. New props were added to the
  Item component to control the arrow indicators. The props `showVerticalLine`, and
  `showVerticalHoverPointer` are responsible for styling the items with the vertical lines for the selected and hover
  states, and `onMouseEnter` and `onMouseLeave` are used to track user interactions and set the expected props.

* [#9527](https://github.com/Shopify/polaris/pull/9527) [`ba9265c0d`](https://github.com/Shopify/polaris/commit/ba9265c0d151af92c5ce97dc4dde28cd3e411431) Thanks [@mateus](https://github.com/mateus)! - Added `matchedItemIcon` prop to the Navigation Item component. It takes an icon source that will be used when the item is selected.

### Patch Changes

- [#9486](https://github.com/Shopify/polaris/pull/9486) [`a4c876fde`](https://github.com/Shopify/polaris/commit/a4c876fdece246680522e17099a1843b333a95c7) Thanks [@jesstelford](https://github.com/jesstelford)! - - [IndexTable] Design updates

* [#9507](https://github.com/Shopify/polaris/pull/9507) [`5065fc199`](https://github.com/Shopify/polaris/commit/5065fc1991518507607d81d1f1b667c26773cf4d) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - Added experimental `xl` and `2xl` sizes and reintroduced `round` shape styles to `Avatar`

- [#9486](https://github.com/Shopify/polaris/pull/9486) [`e6774b926`](https://github.com/Shopify/polaris/commit/e6774b9263ac8b7c04e4f958256af60499838ee8) Thanks [@jesstelford](https://github.com/jesstelford)! - - [IndexTable] Cleanup obsolete mobile checkbox styles, update pse23 styles.

* [#9538](https://github.com/Shopify/polaris/pull/9538) [`b4db546d1`](https://github.com/Shopify/polaris/commit/b4db546d16bbeb2bf54ce894e7879f8d36179d8e) Thanks [@mattkubej](https://github.com/mattkubej)! - Added the `WithinContentContext.Provider` to `Card`

- [#9545](https://github.com/Shopify/polaris/pull/9545) [`d6aef7bdc`](https://github.com/Shopify/polaris/commit/d6aef7bdcc406c792bbdbc06bcde6061b9a81ed9) Thanks [@gwyneplaine](https://github.com/gwyneplaine)! - [IndexTable] Update TableHeadingUnderline styles for better contrast

* [#9526](https://github.com/Shopify/polaris/pull/9526) [`29ac1839e`](https://github.com/Shopify/polaris/commit/29ac1839e28ba807742844d003b55f658d24d042) Thanks [@mattkubej](https://github.com/mattkubej)! - Establishes consistent naming of focused and cleans up spacing in documentation

- [#9522](https://github.com/Shopify/polaris/pull/9522) [`5ac46f086`](https://github.com/Shopify/polaris/commit/5ac46f086d19ca80a1fa9cb081ac3eb8ccaa886f) Thanks [@samrose3](https://github.com/samrose3)! - Fixed overlapping heading when scrolling horizontally on unselectable IndexTable.

* [#9486](https://github.com/Shopify/polaris/pull/9486) [`b3a778484`](https://github.com/Shopify/polaris/commit/b3a778484a61eef1c963a13d737af314dfa6e099) Thanks [@jesstelford](https://github.com/jesstelford)! - - [IndexTable] Fix various spacing issues surfaced with design changes
  - [IndexTable] Fix margin bug on non selectable IndexTable.
  - [IndexTable] Fix vertical alignment bug when bulk actions enabled.
* Updated dependencies [[`5065fc199`](https://github.com/Shopify/polaris/commit/5065fc1991518507607d81d1f1b667c26773cf4d)]:
  - @shopify/polaris-tokens@7.3.1

## 11.2.2

### Patch Changes

- [#9521](https://github.com/Shopify/polaris/pull/9521) [`684384def`](https://github.com/Shopify/polaris/commit/684384def2583d9b7f47a7f97ca31e6a7e8d5606) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - Fixed vertical alignment issue with `svg` element in `Badge` component

## 11.2.1

### Patch Changes

- [#9475](https://github.com/Shopify/polaris/pull/9475) [`ff8e9230d`](https://github.com/Shopify/polaris/commit/ff8e9230d4f53ddecc793057a842cbb5e19141ee) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - Added experimental `strong` variants and `large` size to `Badge` component

## 11.2.0

### Minor Changes

- [#9463](https://github.com/Shopify/polaris/pull/9463) [`9df26fc6c`](https://github.com/Shopify/polaris/commit/9df26fc6ce65534dfaddb072d56ee89470f67015) Thanks [@mateus](https://github.com/mateus)! - Removed TopBar background-color transition and fix search input on Safari

* [#9300](https://github.com/Shopify/polaris/pull/9300) [`c0cdf2d2d`](https://github.com/Shopify/polaris/commit/c0cdf2d2d5ada1a8746eb4b3390a80e7f8aac847) Thanks [@zakwarsame](https://github.com/zakwarsame)! - - Fixed tooltip not disappearing when mouse leaves `ActionList.Item`

### Patch Changes

- [#9453](https://github.com/Shopify/polaris/pull/9453) [`b2a1b49b0`](https://github.com/Shopify/polaris/commit/b2a1b49b0c4ecbb9603366d930f2245742313a0c) Thanks [@gwyneplaine](https://github.com/gwyneplaine)! - - [CheckableButton]: Fix Checkbox alignment bug
  - [ResourceList]: Fix Header alignment bug

* [#9473](https://github.com/Shopify/polaris/pull/9473) [`2cc6761b6`](https://github.com/Shopify/polaris/commit/2cc6761b6ff667c1de9fb23a61cbadecfa92c4f9) Thanks [@skparkk](https://github.com/skparkk)! - Updated tooltip's visibility (open/closed state) when `active` prop is updated

* Updated dependencies [[`b73666e63`](https://github.com/Shopify/polaris/commit/b73666e63c5ec5d0f47ecfb66683d8de0f79ab97), [`f9ceb4d02`](https://github.com/Shopify/polaris/commit/f9ceb4d0224b613b0ba1680bcb575714b1ad8300), [`84c015547`](https://github.com/Shopify/polaris/commit/84c015547c3b85938f326604216d819e1f31f6ab), [`bc141cf54`](https://github.com/Shopify/polaris/commit/bc141cf54497deb488f3b8e589e94741f06efd54)]:
  - @shopify/polaris-tokens@7.3.0

## 11.1.3

### Patch Changes

- [#9441](https://github.com/Shopify/polaris/pull/9441) [`f3b07cc15`](https://github.com/Shopify/polaris/commit/f3b07cc15aef9ef069601df2b956765f02360a48) Thanks [@asyncopation](https://github.com/asyncopation)! - Fixed inconsistent style prop between client and server rendering of `VerticalStack` component

* [#9412](https://github.com/Shopify/polaris/pull/9412) [`cb581db66`](https://github.com/Shopify/polaris/commit/cb581db66d7f1fa3a86b9dd8874ca0b64a030e6a) Thanks [@jesstelford](https://github.com/jesstelford)! - Correctly pass ref through to UnstyledLink's child

* Updated dependencies [[`91ebe5792`](https://github.com/Shopify/polaris/commit/91ebe57922d26e3acb61047c79d7a157952d5486)]:
  - @shopify/polaris-tokens@7.2.0

## 11.1.2

### Patch Changes

- [#9392](https://github.com/Shopify/polaris/pull/9392) [`f793875e2`](https://github.com/Shopify/polaris/commit/f793875e27bf298b916b8901d2c9ea58d4a88d5b) Thanks [@mattkubej](https://github.com/mattkubej)! - Remove border radius from select all wrapper of `IndexTable`

* [#9406](https://github.com/Shopify/polaris/pull/9406) [`5f4898b30`](https://github.com/Shopify/polaris/commit/5f4898b30ee3ab76c275257c7ad234176464f61b) Thanks [@chloerice](https://github.com/chloerice)! - Bumped `@types/react`and `@types/react-dom` to match dependency versions

## 11.1.1

### Patch Changes

- [#9342](https://github.com/Shopify/polaris/pull/9342) [`6dcd69ab6`](https://github.com/Shopify/polaris/commit/6dcd69ab6efca522cf02b3585543792efb51476a) Thanks [@sophschneider](https://github.com/sophschneider)! - Fixed small screen horizontal overflow by changing `Banner` focus ring from `box-shadow` to `outline`

* [#9342](https://github.com/Shopify/polaris/pull/9342) [`6dcd69ab6`](https://github.com/Shopify/polaris/commit/6dcd69ab6efca522cf02b3585543792efb51476a) Thanks [@sophschneider](https://github.com/sophschneider)! - Removed unused transition delay param from focus-ring mixin

- [#9342](https://github.com/Shopify/polaris/pull/9342) [`6dcd69ab6`](https://github.com/Shopify/polaris/commit/6dcd69ab6efca522cf02b3585543792efb51476a) Thanks [@sophschneider](https://github.com/sophschneider)! - Add polarisSummerEditions2023 feature flag to AppProvider context.

* [#9361](https://github.com/Shopify/polaris/pull/9361) [`52edd1faa`](https://github.com/Shopify/polaris/commit/52edd1faaf3b252e3344e5c23e3ea05c4e799180) Thanks [@sophschneider](https://github.com/sophschneider)! - Added `disabled` variant prop to Labelled

- [#9342](https://github.com/Shopify/polaris/pull/9342) [`6dcd69ab6`](https://github.com/Shopify/polaris/commit/6dcd69ab6efca522cf02b3585543792efb51476a) Thanks [@sophschneider](https://github.com/sophschneider)! - Add `primarySuccess` variant prop to `Button`

- Updated dependencies [[`9c9e80ed1`](https://github.com/Shopify/polaris/commit/9c9e80ed132715e1c91ee2dc0b9fcc13adb3afea), [`f907a55a1`](https://github.com/Shopify/polaris/commit/f907a55a1e144fb9d448ad55c5009b535bc598a4)]:
  - @shopify/polaris-tokens@7.1.0
  - @shopify/polaris-icons@7.1.0

## 11.1.0

### Minor Changes

- [#9269](https://github.com/Shopify/polaris/pull/9269) [`bf3bc75a1`](https://github.com/Shopify/polaris/commit/bf3bc75a135da6819238bb72cf8807e598a331df) Thanks [@nat-king](https://github.com/nat-king)! - Added optional `onAddFilterClick` callback prop to the indexFilters component

### Patch Changes

- [#9295](https://github.com/Shopify/polaris/pull/9295) [`7e21fe093`](https://github.com/Shopify/polaris/commit/7e21fe093c021d0531e256b678221cfbb79e4412) Thanks [@chloerice](https://github.com/chloerice)! - Fixed `initials` overflowing when `Avatar` is round

* [#9343](https://github.com/Shopify/polaris/pull/9343) [`ae3208332`](https://github.com/Shopify/polaris/commit/ae32083324390a0012981a24f4b1e3c23f166735) Thanks [@sophschneider](https://github.com/sophschneider)! - Alphabetized locale files

- [#9314](https://github.com/Shopify/polaris/pull/9314) [`e7d836819`](https://github.com/Shopify/polaris/commit/e7d836819ac33936136df2a79093c2a0e73146b4) Thanks [@FCalabria](https://github.com/FCalabria)! - Removed focus styles on TextField while disabled

* [#9223](https://github.com/Shopify/polaris/pull/9223) [`221426aaf`](https://github.com/Shopify/polaris/commit/221426aaf10ddb8266b89d40edb5b18fba4b816b) Thanks [@aveline](https://github.com/aveline)! - Deprecated `external` prop in `Link` component

- [#9229](https://github.com/Shopify/polaris/pull/9229) [`821535820`](https://github.com/Shopify/polaris/commit/821535820c97e1ea29ddf8421d52242322c18b17) Thanks [@aeperea](https://github.com/aeperea)! - Tabs update disabled state

* [#9323](https://github.com/Shopify/polaris/pull/9323) [`cd43c8b47`](https://github.com/Shopify/polaris/commit/cd43c8b4747f97269c2710031bd0dda16386c224) Thanks [@sophschneider](https://github.com/sophschneider)! - Added internationalized accessibility label to Banner dismiss button

- [#9263](https://github.com/Shopify/polaris/pull/9263) [`a3f3462a6`](https://github.com/Shopify/polaris/commit/a3f3462a66b2bb4bc0dbf23b336fa57d473ba190) Thanks [@mattkubej](https://github.com/mattkubej)! - Protect border radius of `LegacyCard` with overflow clip

* [#9273](https://github.com/Shopify/polaris/pull/9273) [`e823538ad`](https://github.com/Shopify/polaris/commit/e823538ad27460bc026d37132713462700e577ea) Thanks [@aishad](https://github.com/aishad)! - Fixed inline padding on Modal Footer

## 11.0.1

### Patch Changes

- Updated dependencies [[`753ff148f`](https://github.com/Shopify/polaris/commit/753ff148fbc5a74f0b1dd85d817bb2c0522d3001)]:
  - @shopify/polaris-icons@7.0.1

## 11.0.0

### Major Changes

- [#7597](https://github.com/Shopify/polaris/pull/7597) [`9e1350e22`](https://github.com/Shopify/polaris/commit/9e1350e22f286ead5a735e0c4dc6623f530f9806) Thanks [@lgriffee](https://github.com/lgriffee)! - Changed `breadcrumbs` from an array to a single `backAction` since only one is supported.
  Removed deprecated `breadcrumbs` prop from `Page` and `Breadcrumbs`.

* [#7597](https://github.com/Shopify/polaris/pull/7597) [`9e1350e22`](https://github.com/Shopify/polaris/commit/9e1350e22f286ead5a735e0c4dc6623f530f9806) Thanks [@lgriffee](https://github.com/lgriffee)! - Removed support for multiple versions of TypeScript with `downlevel-dts`

- [#7597](https://github.com/Shopify/polaris/pull/7597) [`9e1350e22`](https://github.com/Shopify/polaris/commit/9e1350e22f286ead5a735e0c4dc6623f530f9806) Thanks [@lgriffee](https://github.com/lgriffee)! - No longer transpile optional chaining, nullish coalescing or numeric separators, as our target browser environments all have native support for these syntaxes. This removes support for apps using webpack4, which unable to parse these syntaxes.

* [#7597](https://github.com/Shopify/polaris/pull/7597) [`9e1350e22`](https://github.com/Shopify/polaris/commit/9e1350e22f286ead5a735e0c4dc6623f530f9806) Thanks [@lgriffee](https://github.com/lgriffee)! - Removed support for React version 16 and 17 in favor of version 18 as the minimum supported version

- [#7597](https://github.com/Shopify/polaris/pull/7597) [`9e1350e22`](https://github.com/Shopify/polaris/commit/9e1350e22f286ead5a735e0c4dc6623f530f9806) Thanks [@lgriffee](https://github.com/lgriffee)! - Replaced `Tabs` with `AlphaTabs` and replaced `Filters` with `AlphaFilters` component code

* [#7597](https://github.com/Shopify/polaris/pull/7597) [`9e1350e22`](https://github.com/Shopify/polaris/commit/9e1350e22f286ead5a735e0c4dc6623f530f9806) Thanks [@lgriffee](https://github.com/lgriffee)! - Replaced `Stack` with `AlphaStack`

- [#7597](https://github.com/Shopify/polaris/pull/7597) [`9e1350e22`](https://github.com/Shopify/polaris/commit/9e1350e22f286ead5a735e0c4dc6623f530f9806) Thanks [@lgriffee](https://github.com/lgriffee)! - Removed `Polaris.VERSION` from the global window object

* [#7597](https://github.com/Shopify/polaris/pull/7597) [`9e1350e22`](https://github.com/Shopify/polaris/commit/9e1350e22f286ead5a735e0c4dc6623f530f9806) Thanks [@lgriffee](https://github.com/lgriffee)! - Removed deprecated `breadcrumbs` prop from `SkeletonPage`

- [#7597](https://github.com/Shopify/polaris/pull/7597) [`9e1350e22`](https://github.com/Shopify/polaris/commit/9e1350e22f286ead5a735e0c4dc6623f530f9806) Thanks [@lgriffee](https://github.com/lgriffee)! - Removed support for NodeJS version 14 and set version 16 as minimum supported version

* [#7597](https://github.com/Shopify/polaris/pull/7597) [`9e1350e22`](https://github.com/Shopify/polaris/commit/9e1350e22f286ead5a735e0c4dc6623f530f9806) Thanks [@lgriffee](https://github.com/lgriffee)! - Removed deprecated `DisplayText`, `Heading`, `Subheading`, `Caption`, `TextStyle`, and `VisuallyHidden` components

- [#7597](https://github.com/Shopify/polaris/pull/7597) [`9e1350e22`](https://github.com/Shopify/polaris/commit/9e1350e22f286ead5a735e0c4dc6623f530f9806) Thanks [@lgriffee](https://github.com/lgriffee)! - Replaced `Card` with `AlphaCard`

* [#7597](https://github.com/Shopify/polaris/pull/7597) [`9e1350e22`](https://github.com/Shopify/polaris/commit/9e1350e22f286ead5a735e0c4dc6623f530f9806) Thanks [@lgriffee](https://github.com/lgriffee)! - Removed `KonamiCode` component

- [#7597](https://github.com/Shopify/polaris/pull/7597) [`9e1350e22`](https://github.com/Shopify/polaris/commit/9e1350e22f286ead5a735e0c4dc6623f530f9806) Thanks [@lgriffee](https://github.com/lgriffee)! - Removed deprecated `preventMeasuringOnChildUpdate` prop on `Collapsible`

### Patch Changes

- Updated dependencies [[`9e1350e22`](https://github.com/Shopify/polaris/commit/9e1350e22f286ead5a735e0c4dc6623f530f9806)]:
  - @shopify/polaris-icons@7.0.0
  - @shopify/polaris-tokens@7.0.0

## 10.50.1

### Patch Changes

- [#9250](https://github.com/Shopify/polaris/pull/9250) [`1e4f450d1`](https://github.com/Shopify/polaris/commit/1e4f450d136bed599fc357f3f3758f6f446475bb) Thanks [@samrose3](https://github.com/samrose3)! - Fixed regression where sticky header column widths were incorrectly resized after bulk selection in the `IndexTable`.

## 10.50.0

### Minor Changes

- [#9005](https://github.com/Shopify/polaris/pull/9005) [`487df3a4d`](https://github.com/Shopify/polaris/commit/487df3a4d7873c9ee95fba92734d4ee3602d6bdf) Thanks [@zakwarsame](https://github.com/zakwarsame)! - - Deprecated ellipsis and introduced a truncate prop to `ActionList` items.
  - Added a custom width to the new `TopBar` user menu.

* [#9145](https://github.com/Shopify/polaris/pull/9145) [`6ead43c3c`](https://github.com/Shopify/polaris/commit/6ead43c3cb23fdfeab2a14c44b90ae70f7f74556) Thanks [@laurkim](https://github.com/laurkim)! - Deprecated `LegacyFilters`

- [#9197](https://github.com/Shopify/polaris/pull/9197) [`92214e8fd`](https://github.com/Shopify/polaris/commit/92214e8fddb6558aa675a298cf9bf4800657d53b) Thanks [@pt8o](https://github.com/pt8o)! - Added support for sectioning the `filters` of `IndexFilters` and `AlphaFilters`

* [#9222](https://github.com/Shopify/polaris/pull/9222) [`a9d611401`](https://github.com/Shopify/polaris/commit/a9d6114012b3799467caade1c679d9de6474ea16) Thanks [@nat-king](https://github.com/nat-king)! - Added the `suffix` property to the FilterInterface

- [#9147](https://github.com/Shopify/polaris/pull/9147) [`082fe4308`](https://github.com/Shopify/polaris/commit/082fe430846ded0b7a45b4f9b01d54e1790f4e8f) Thanks [@laurkim](https://github.com/laurkim)! - Added component pages and examples for `AlphaTabs` and `AlphaFilters` on style guide

* [#9224](https://github.com/Shopify/polaris/pull/9224) [`b228b67f2`](https://github.com/Shopify/polaris/commit/b228b67f278b5e4ce0b85ad68407ef5af2d02d95) Thanks [@nat-king](https://github.com/nat-king)! - Added optional `onAddFilterClick` callback prop to the AlphaFilters component

### Patch Changes

- [#9166](https://github.com/Shopify/polaris/pull/9166) [`048502ceb`](https://github.com/Shopify/polaris/commit/048502ceb80db7b4881db5216c9c88578219401c) Thanks [@martenbjork](https://github.com/martenbjork)! - Fixed the border radius of `DropZone`

* [#9155](https://github.com/Shopify/polaris/pull/9155) [`563af5094`](https://github.com/Shopify/polaris/commit/563af50940e52c57f89e0d372c6841de727bd30f) Thanks [@ryanwilsonperkin](https://github.com/ryanwilsonperkin)! - Fix PortalsManager to avoid setting state synchronously during a render pass which prevented it from working properly with Suspense.

- [#9248](https://github.com/Shopify/polaris/pull/9248) [`5548436ca`](https://github.com/Shopify/polaris/commit/5548436ca50fbf3d27655cefda2bb40174c5a4a9) Thanks [@chloerice](https://github.com/chloerice)! - Reverted support for `ReactNode` labels on `Select` `options`

* [#9148](https://github.com/Shopify/polaris/pull/9148) [`11f4cef4a`](https://github.com/Shopify/polaris/commit/11f4cef4a8225ce1682af4e32320a3c1478d3ac4) Thanks [@samrose3](https://github.com/samrose3)! - Recalculated IndexTable sticky header column widths inside of a `useIsomorphicLayoutEffect` after the table is updated.

- [#9231](https://github.com/Shopify/polaris/pull/9231) [`f7f160d0f`](https://github.com/Shopify/polaris/commit/f7f160d0f83090d1eac50de4b92b1fab4f9326b2) Thanks [@skparkk](https://github.com/skparkk)! - Fixed `Tooltip` rendering when `active` prop is false

* [#9095](https://github.com/Shopify/polaris/pull/9095) [`9fdc798a5`](https://github.com/Shopify/polaris/commit/9fdc798a5b3cda6100fec78de2ee48d3e6d199ff) Thanks [@FCalabria](https://github.com/FCalabria)! - Improved spacing and types on `Select` component

- [#9106](https://github.com/Shopify/polaris/pull/9106) [`2f2edd8fc`](https://github.com/Shopify/polaris/commit/2f2edd8fc285f7bb29193adc9cf6138a5444eeb3) Thanks [@samrose3](https://github.com/samrose3)! - Fixed padding on AlphaFilter in IndexFilter when hideQueryField is true

* [#8957](https://github.com/Shopify/polaris/pull/8957) [`bb67c17da`](https://github.com/Shopify/polaris/commit/bb67c17da7838ccc460a50e1269848e236c8b29f) Thanks [@bsharrow](https://github.com/bsharrow)! - Fixed `FilterPill` so that it no longer opens an applied filter's popover by default

- [#9154](https://github.com/Shopify/polaris/pull/9154) [`66d0adc9a`](https://github.com/Shopify/polaris/commit/66d0adc9a72a8f413e237730402202aaf5c4da1a) Thanks [@gui-santos](https://github.com/gui-santos)! - Change default value of Tooltip position to `above`

* [#9206](https://github.com/Shopify/polaris/pull/9206) [`76ed72b41`](https://github.com/Shopify/polaris/commit/76ed72b41071c55b35e28d2d0859384b3b0da8c6) Thanks [@alllx](https://github.com/alllx)! - Fix IndexTable sticky column header overlap

- [#9169](https://github.com/Shopify/polaris/pull/9169) [`84189fef1`](https://github.com/Shopify/polaris/commit/84189fef14cff113f82c0367b780f1684c69712a) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - [Popover] Updates fullHeight styles to prevent scroll position reset when Popover content changes

* [#9195](https://github.com/Shopify/polaris/pull/9195) [`e9bbbb437`](https://github.com/Shopify/polaris/commit/e9bbbb437c0936e90c48876c49c20db1b7f6c852) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed critical color on progress bar

- [#9160](https://github.com/Shopify/polaris/pull/9160) [`fed35736b`](https://github.com/Shopify/polaris/commit/fed35736bcc05a16c1d9cea5abaf594f93c3f08a) Thanks [@jbalsas](https://github.com/jbalsas)! - Adjusted colours of disabled `Listbox.TextOption` and `OptionList` components for better readability and a11y

- Updated dependencies [[`5a9b011d1`](https://github.com/Shopify/polaris/commit/5a9b011d14a0cc575f4fd34d9e4d8fcfeb0cd597), [`4e343a180`](https://github.com/Shopify/polaris/commit/4e343a180c837ef29d8117c10053f82eb17bc29b), [`5be210bd5`](https://github.com/Shopify/polaris/commit/5be210bd54e95ad694e898750c3f40259b9216be)]:
  - @shopify/polaris-tokens@6.14.0
  - @shopify/polaris-icons@6.16.0

## 10.49.1

### Patch Changes

- [#9116](https://github.com/Shopify/polaris/pull/9116) [`5dab4f154`](https://github.com/Shopify/polaris/commit/5dab4f154778c436a7428419aa6064234ee5f39d) Thanks [@pamelahicks](https://github.com/pamelahicks)! - Refactored `AlphaFilters` to fix an issue with disabled filter options

* [#9119](https://github.com/Shopify/polaris/pull/9119) [`4531592dd`](https://github.com/Shopify/polaris/commit/4531592dde226aa37fb3ee2e975caa99a9650789) Thanks [@samrose3](https://github.com/samrose3)! - Passed heading alignment props to sticky header. Fix overlapping checkbox when sticky header is present.

* Updated dependencies [[`92fbd1308`](https://github.com/Shopify/polaris/commit/92fbd1308b6ea0ec22c3f628775e4fbbd5b0921e), [`c28ed7a9e`](https://github.com/Shopify/polaris/commit/c28ed7a9eaf99c856943d1caefa6742b0390b108)]:
  - @shopify/polaris-icons@6.15.0

## 10.49.0

### Minor Changes

- [#9051](https://github.com/Shopify/polaris/pull/9051) [`722b818b4`](https://github.com/Shopify/polaris/commit/722b818b4c1a970de7802ae87d71409c6f228c19) Thanks [@camielvs](https://github.com/camielvs)! - Added `integer` option for the `type` prop of TextField

### Patch Changes

- [#9108](https://github.com/Shopify/polaris/pull/9108) [`6fd00eb7c`](https://github.com/Shopify/polaris/commit/6fd00eb7c4ca5fc7ea997e53e96f657b415e0a1d) Thanks [@laurkim](https://github.com/laurkim)! - Refactored `Box` border radius properties to fix issues with cascading styles

## 10.48.0

### Minor Changes

- [#9074](https://github.com/Shopify/polaris/pull/9074) [`11cd5f674`](https://github.com/Shopify/polaris/commit/11cd5f67440bec59ffd3983fa02a7b65842063e6) Thanks [@lgriffee](https://github.com/lgriffee)! - Added deprecated v10 motion custom properties to stylelint-polaris

### Patch Changes

- [#9067](https://github.com/Shopify/polaris/pull/9067) [`edefb873a`](https://github.com/Shopify/polaris/commit/edefb873a3482f72dee12fe4fadcbd908461f3ed) Thanks [@trishrempel](https://github.com/trishrempel)! - Exported constants `DEFAULT_LOCALE` and `SUPPORTED_LOCALES`

- Updated dependencies [[`acf89f6a9`](https://github.com/Shopify/polaris/commit/acf89f6a9fb58f557a57e92e4e54a3935c85f50c)]:
  - @shopify/polaris-tokens@6.13.0

## 10.47.2

### Patch Changes

- [#9039](https://github.com/Shopify/polaris/pull/9039) [`cda94e7a6`](https://github.com/Shopify/polaris/commit/cda94e7a6e7f17d3cda50473adda1bd73fb67166) Thanks [@matallo](https://github.com/matallo)! - Updated the focus helper functions, order of selectors for `button:not(:disabled):not([aria-disabled="true"]):not([tabindex="-1"])` was returning an error, moved `:not(:disabled)` to the end.

## 10.47.1

### Patch Changes

- [#9057](https://github.com/Shopify/polaris/pull/9057) [`65db7dd2b`](https://github.com/Shopify/polaris/commit/65db7dd2be650b49b54350ba458700d7c29e7c0d) Thanks [@sophschneider](https://github.com/sophschneider)! - Fixed PopoverOverlay not closing

- Updated dependencies [[`13b1a9109`](https://github.com/Shopify/polaris/commit/13b1a9109b996dd19f996b9bdf2a15b96c519c49)]:
  - @shopify/polaris-icons@6.14.0

## 10.47.0

### Minor Changes

- [#8999](https://github.com/Shopify/polaris/pull/8999) [`a07c752fb`](https://github.com/Shopify/polaris/commit/a07c752fbe3be1638cc88c9edbd5a08557ac61c5) Thanks [@trishrempel](https://github.com/trishrempel)! - Exported constants `DEFAULT_LOCALE` and `SUPPORTED_LOCALES`

### Patch Changes

- [#9045](https://github.com/Shopify/polaris/pull/9045) [`f0d9fdf96`](https://github.com/Shopify/polaris/commit/f0d9fdf961f1949c15db8b33ff5a600a6321411e) Thanks [@laurkim](https://github.com/laurkim)! - Refactored `Box` border width properties to fix issues with cascading styles

- Updated dependencies [[`bcdbaad00`](https://github.com/Shopify/polaris/commit/bcdbaad009bb0606544dff19b5b5fcb37ddc6f94)]:
  - @shopify/polaris-tokens@6.12.0

## 10.46.0

### Minor Changes

- [#8542](https://github.com/Shopify/polaris/pull/8542) [`257eba484`](https://github.com/Shopify/polaris/commit/257eba484c0113b1bd6ca5bf3794937af454ac02) Thanks [@mathildebuenerd](https://github.com/mathildebuenerd)! - [OptionList] Add `onPointerEnterOption` prop

* [#9016](https://github.com/Shopify/polaris/pull/9016) [`a47e9084d`](https://github.com/Shopify/polaris/commit/a47e9084dcbb0b9870bc58dd2214e82657efe8ad) Thanks [@alex-page](https://github.com/alex-page)! - Add new Space tokens and types to replace spacing in v11

- [#8983](https://github.com/Shopify/polaris/pull/8983) [`d608480cc`](https://github.com/Shopify/polaris/commit/d608480cccd16c641bc3bde45c7a494dc8cd94d4) Thanks [@martenbjork](https://github.com/martenbjork)! - Updated Popover so that it resizes itself whenever a child element updates its style attribute. This makes the Popover automatically resize when it contains a <TextField /> with multiple lines.

* [#8542](https://github.com/Shopify/polaris/pull/8542) [`656b151dc`](https://github.com/Shopify/polaris/commit/656b151dc9340e44c61c55277ff0f63f110f85d7) Thanks [@mathildebuenerd](https://github.com/mathildebuenerd)! - [OptionList] Add `onFocusOption` prop

- [#8984](https://github.com/Shopify/polaris/pull/8984) [`f2a77786e`](https://github.com/Shopify/polaris/commit/f2a77786eff26bcfe3f7064e65a765db63dcaa8a) Thanks [@kyledurand](https://github.com/kyledurand)! - Deprecated `Grid` `areas` prop

### Patch Changes

- [#9040](https://github.com/Shopify/polaris/pull/9040) [`942ec6213`](https://github.com/Shopify/polaris/commit/942ec6213a4e620088e65be8e2dc2deb53b9dcdf) Thanks [@lgriffee](https://github.com/lgriffee)! - Remove opacity needless-disables

* [#8960](https://github.com/Shopify/polaris/pull/8960) [`b8810a915`](https://github.com/Shopify/polaris/commit/b8810a9150c30292bdd6039297ca3ebf7674dfe4) Thanks [@laurkim](https://github.com/laurkim)! - Updated `Grid` custom layout example to use new color tokens

* Updated dependencies [[`a47e9084d`](https://github.com/Shopify/polaris/commit/a47e9084dcbb0b9870bc58dd2214e82657efe8ad)]:
  - @shopify/polaris-tokens@6.11.0

## 10.45.0

### Minor Changes

- [#8910](https://github.com/Shopify/polaris/pull/8910) [`91a9b77e6`](https://github.com/Shopify/polaris/commit/91a9b77e65f565728fbfa8887dc42c0705dbb4ba) Thanks [@alex-page](https://github.com/alex-page)! - <Box> Replaced outline, border, borderBlockEnd, borderBlockStart, borderInlineEnd, borderInlineStart properties with access to borderColor, borderWidth, outlineColor and outlineWidth

### Patch Changes

- [#8990](https://github.com/Shopify/polaris/pull/8990) [`9674cc906`](https://github.com/Shopify/polaris/commit/9674cc906eea70284d7a92a97a66024763afa5e5) Thanks [@heyjoethomas](https://github.com/heyjoethomas)! - Update tokens for border of `Tabs` on hover and pressed state to create better quality interaction.

## 10.44.0

### Minor Changes

- [#8936](https://github.com/Shopify/polaris/pull/8936) [`a2c9b1d24`](https://github.com/Shopify/polaris/commit/a2c9b1d24e70bb399358bb4cb31f2cc598128b8a) Thanks [@alex-page](https://github.com/alex-page)! - Renamed Inline to HorizontalStack

* [#8773](https://github.com/Shopify/polaris/pull/8773) [`e8c5a2243`](https://github.com/Shopify/polaris/commit/e8c5a2243e8d2da26e94447413f0e5645999576f) Thanks [@stefanlegg](https://github.com/stefanlegg)! - - Added an optional `onSpinnerChange` prop to`TextField`
  - Added an optional `largeStep` prop to `TextField`
  - Added `TextField` `Spinner` keypress interactions for Home, End, Page Up, Page Down

- [#8876](https://github.com/Shopify/polaris/pull/8876) [`090d09683`](https://github.com/Shopify/polaris/commit/090d09683b7764837f4278a36faca1e531129d29) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated `IndexFilters` to support hiding both filters and search field

* [#8973](https://github.com/Shopify/polaris/pull/8973) [`f1a3ad756`](https://github.com/Shopify/polaris/commit/f1a3ad756d73bf249583bdb47523a4b229a0c7cb) Thanks [@lgriffee](https://github.com/lgriffee)! - Enabled the `custom-property-disallowed-list` rule and added deprecated v10 custom properties.

- [#8937](https://github.com/Shopify/polaris/pull/8937) [`fcc543928`](https://github.com/Shopify/polaris/commit/fcc5439280807dc2c0ca4f98c526e47e1e77658a) Thanks [@alex-page](https://github.com/alex-page)! - Renamed `Columns` to `HorizontalGrid`

* [#8938](https://github.com/Shopify/polaris/pull/8938) [`289dce569`](https://github.com/Shopify/polaris/commit/289dce569ad23d5c0773b576a40e0b2a0d4709c9) Thanks [@alex-page](https://github.com/alex-page)! - Remove deprecation from `Grid` component

- [#8935](https://github.com/Shopify/polaris/pull/8935) [`7f3053342`](https://github.com/Shopify/polaris/commit/7f30533421f43ff8062328a738f46743f403f8f9) Thanks [@alex-page](https://github.com/alex-page)! - Renamed `AlphaStack` to `VerticalStack`

* [#8596](https://github.com/Shopify/polaris/pull/8596) [`421bb49dc`](https://github.com/Shopify/polaris/commit/421bb49dc1b2d73f9f3fde8cbccc56c3b03fe680) Thanks [@brendanrygus](https://github.com/brendanrygus)! - [Frame] Fix minimum height overflowing in iOS Webkit browsers

- [#8953](https://github.com/Shopify/polaris/pull/8953) [`500eed660`](https://github.com/Shopify/polaris/commit/500eed66017697f3c7bffe58e88ac6ff312937a7) Thanks [@zakwarsame](https://github.com/zakwarsame)! - - Added `customActivator` prop to `TopBar.UserMenu`
  - Added support for setting a `ReactNode` on `ActionList` `Section` `title`

### Patch Changes

- [#8842](https://github.com/Shopify/polaris/pull/8842) [`bd64fa583`](https://github.com/Shopify/polaris/commit/bd64fa583d3f8e3c95288aa1cdfb6f9bf1e3e3fc) Thanks [@martenbjork](https://github.com/martenbjork)! - Removed the Exiting animation state from Popovers, causing them to close immediately instead of after a 100ms delay.

* [#8913](https://github.com/Shopify/polaris/pull/8913) [`261355f07`](https://github.com/Shopify/polaris/commit/261355f07bc4a92d35585c648e4c0253634197cb) Thanks [@mrcthms](https://github.com/mrcthms)! - Tweaked the vertical alignment of elements within the `AlphaFilters` component

- [#8954](https://github.com/Shopify/polaris/pull/8954) [`f9366c22d`](https://github.com/Shopify/polaris/commit/f9366c22d9b8fa5d5d77e6ea1884bcfe1de0aeef) Thanks [@laurkim](https://github.com/laurkim)! - Updated custom property names to align with new component names for `HorizontalGrid`, `HorizontalStack`, and `VerticalStack`

* [#8912](https://github.com/Shopify/polaris/pull/8912) [`1cc47495a`](https://github.com/Shopify/polaris/commit/1cc47495a1f98e8c1a7eabec0ef0461153b33f1f) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated `BulkActions` to include wrapping tooltip on Popover activator

* Updated dependencies [[`4880e3ed7`](https://github.com/Shopify/polaris/commit/4880e3ed71cade2f88d6211025e662ecb4a9e8ce), [`7349d4108`](https://github.com/Shopify/polaris/commit/7349d4108f22d1173aa6f4802df1c430bfc3c5ee), [`2bc90503d`](https://github.com/Shopify/polaris/commit/2bc90503d88cac89b021dc0114812c37c2f3258e)]:
  - @shopify/polaris-icons@6.13.0

## 10.43.0

### Minor Changes

- [#8879](https://github.com/Shopify/polaris/pull/8879) [`2e65ec7bf`](https://github.com/Shopify/polaris/commit/2e65ec7bf260c43b3f9ceb44a25ff38c7311fb12) Thanks [@lgriffee](https://github.com/lgriffee)! - Migrate `border` custom properties from Polaris `v10` to `v11`

* [#8909](https://github.com/Shopify/polaris/pull/8909) [`e4e589458`](https://github.com/Shopify/polaris/commit/e4e5894585e18818c15a2b8c2bd245e3e17f9d15) Thanks [@alex-page](https://github.com/alex-page)! - Replace borderStyle with borderColor and borderWidth in Divider

### Patch Changes

- Updated dependencies [[`247f5eea8`](https://github.com/Shopify/polaris/commit/247f5eea859b3ab348dcb18c568f18d8d859140e)]:
  - @shopify/polaris-tokens@6.10.0

## 10.42.1

### Patch Changes

- [#8889](https://github.com/Shopify/polaris/pull/8889) [`d7d0462c7`](https://github.com/Shopify/polaris/commit/d7d0462c72a2541b43504aa214e7f827fc370cc2) Thanks [@lgriffee](https://github.com/lgriffee)! - Updated `ContextualSaveBar` button `color` overrides

## 10.42.0

### Minor Changes

- [#8864](https://github.com/Shopify/polaris/pull/8864) [`5adc08f2d`](https://github.com/Shopify/polaris/commit/5adc08f2d7a29ffa40bfb88f7da6366068db2f44) Thanks [@bowen9284](https://github.com/bowen9284)! - Added support for setting a `target` on anchors rendered by `Button`, `Link`, `UnstyledButton` and `UnstyledLink`

* [#8777](https://github.com/Shopify/polaris/pull/8777) [`d5ded2239`](https://github.com/Shopify/polaris/commit/d5ded22398024936d5e0450be169b3b4c4e06516) Thanks [@eric-blue](https://github.com/eric-blue)! - Added onDismiss callback to MediaCard

- [#8873](https://github.com/Shopify/polaris/pull/8873) [`8a14f157f`](https://github.com/Shopify/polaris/commit/8a14f157fecde890321946e00e9f80bbd946ed85) Thanks [@heyjoethomas](https://github.com/heyjoethomas)! - Update background color of active tab on index table to have more contrast. Also tweaked the hover state to better match this change.

* [#8882](https://github.com/Shopify/polaris/pull/8882) [`6fdf22efc`](https://github.com/Shopify/polaris/commit/6fdf22efc682236652b3a9376ece70e6cd121644) Thanks [@heyjoethomas](https://github.com/heyjoethomas)! - revert basic button background back to white

- [#8872](https://github.com/Shopify/polaris/pull/8872) [`0eb1a9173`](https://github.com/Shopify/polaris/commit/0eb1a91732942774533cc566585458f56dd8ede1) Thanks [@heyjoethomas](https://github.com/heyjoethomas)! - Remove background overrides from banner buttons so they use default style

* [#8863](https://github.com/Shopify/polaris/pull/8863) [`b63809227`](https://github.com/Shopify/polaris/commit/b6380922704e4d61e783429e1af21cf644d9daf1) Thanks [@heyjoethomas](https://github.com/heyjoethomas)! - Updated `InlineError` and `Toast` components to use `DiamondAlertMinor` icon

### Patch Changes

- [#8841](https://github.com/Shopify/polaris/pull/8841) [`1803c7a2a`](https://github.com/Shopify/polaris/commit/1803c7a2aba57c11cfe8e0e7a0647318fa9867c9) Thanks [@martenbjork](https://github.com/martenbjork)! - Tweaked the margin of the "Clear all" link in the `AlphaFilters` component and fixed the focus outline on the `FilterPill`.

* [#8776](https://github.com/Shopify/polaris/pull/8776) [`7a6a91dce`](https://github.com/Shopify/polaris/commit/7a6a91dce2d41110e439ba889143becc4b17e3c8) Thanks [@rdott](https://github.com/rdott)! - Fixed `IndexTable.Row` being selectable on small screens

- [#8875](https://github.com/Shopify/polaris/pull/8875) [`81a2ab697`](https://github.com/Shopify/polaris/commit/81a2ab69767d0c86ab170126f645a09f5d03f1ab) Thanks [@melodyhabbouche](https://github.com/melodyhabbouche)! - Fixed IndexFilter popover's clear button text to be left alligned

* [#8858](https://github.com/Shopify/polaris/pull/8858) [`d479fb08a`](https://github.com/Shopify/polaris/commit/d479fb08a287a0c9f28ca65a15802120350b505b) Thanks [@martenbjork](https://github.com/martenbjork)! - Fixed a type error in the TextField component

- [#8839](https://github.com/Shopify/polaris/pull/8839) [`413380853`](https://github.com/Shopify/polaris/commit/41338085320a9e2ff65c39fceca1c0a2851623c3) Thanks [@martenbjork](https://github.com/martenbjork)! - Changed easing of Tooltips to use ease-out instead of ease-in

* [#8846](https://github.com/Shopify/polaris/pull/8846) [`bfa0ce8de`](https://github.com/Shopify/polaris/commit/bfa0ce8de3c6336c3fdd74b355bb79cc2b9ff1c5) Thanks [@stefanlegg](https://github.com/stefanlegg)! - Support wrapping long titles in Banner

## 10.41.0

### Minor Changes

- [#8414](https://github.com/Shopify/polaris/pull/8414) [`01725d205`](https://github.com/Shopify/polaris/commit/01725d2057af75bb9e2346a936233fb9f40352e5) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - Migrate `color` custom properties from Polaris `v10` to `v11`

### Patch Changes

- [#8804](https://github.com/Shopify/polaris/pull/8804) [`7c965c632`](https://github.com/Shopify/polaris/commit/7c965c6323e8fd403216a6c762a767330efa8690) Thanks [@mrcthms](https://github.com/mrcthms)! - Fixed a few visual bugs in the `IndexFilters` component including preserving border radius when removing the search field and better alignment of children when removing the search field

* [#8800](https://github.com/Shopify/polaris/pull/8800) [`db26d5dc7`](https://github.com/Shopify/polaris/commit/db26d5dc71778eb5b5cea75d4bbd54a187ac7dc9) Thanks [@samrose3](https://github.com/samrose3)! - Fixed scrollbar container displaying incorrectly when resizing Index Table

* Updated dependencies [[`01725d205`](https://github.com/Shopify/polaris/commit/01725d2057af75bb9e2346a936233fb9f40352e5), [`5f21c9069`](https://github.com/Shopify/polaris/commit/5f21c90699f0f8b2893ddfc6ba253a75b8c87d1c)]:
  - @shopify/polaris-tokens@6.9.0

## 10.40.0

### Minor Changes

- [#8802](https://github.com/Shopify/polaris/pull/8802) [`c933547a2`](https://github.com/Shopify/polaris/commit/c933547a28f8de46e5d20eefdc4744b8996e8959) Thanks [@Flufd](https://github.com/Flufd)! - Hide AlphaCard overflow

### Patch Changes

- [#8814](https://github.com/Shopify/polaris/pull/8814) [`654d840e6`](https://github.com/Shopify/polaris/commit/654d840e654b3a0dc9de8c2ea7e03d0d34a8a4d0) Thanks [@CameronGorrie](https://github.com/CameronGorrie)! - Provide fallback value to --pc-frame-offset

## 10.39.2

### Patch Changes

- [#8778](https://github.com/Shopify/polaris/pull/8778) [`a4f3838bb`](https://github.com/Shopify/polaris/commit/a4f3838bbd621fab0958906595c9776d42f3428f) Thanks [@kyledurand](https://github.com/kyledurand)! - Increased precision of chromatic snapshot diffs

* [#8766](https://github.com/Shopify/polaris/pull/8766) [`8c5e9705c`](https://github.com/Shopify/polaris/commit/8c5e9705c39e3a959aa07c4d59c6fbcd90ab492c) Thanks [@laurkim](https://github.com/laurkim)! - Fixed types to ues `AlphaTabs` in `IndexFilter` stories

- [#8801](https://github.com/Shopify/polaris/pull/8801) [`8217b5845`](https://github.com/Shopify/polaris/commit/8217b5845c7c07dbb6affab455d68eaf7b8051b3) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - Improved `useBreakpoints` browser support

## 10.39.1

### Patch Changes

- [#8767](https://github.com/Shopify/polaris/pull/8767) [`abc739cc8`](https://github.com/Shopify/polaris/commit/abc739cc8e4d245c00f53666d449fcc392aaff8d) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed border-radius on navigation selected items

* [#8753](https://github.com/Shopify/polaris/pull/8753) [`a52a15ffd`](https://github.com/Shopify/polaris/commit/a52a15ffd74552cbdfbfa030dca005e02da2b13c) Thanks [@chloerice](https://github.com/chloerice)! - Moved `SettingToggle` documentation content and assets to deprecated folders and updated redirects

- [#8770](https://github.com/Shopify/polaris/pull/8770) [`e96b24e29`](https://github.com/Shopify/polaris/commit/e96b24e29671fbbbf4aa738f0f258332b8d00ab3) Thanks [@mrcthms](https://github.com/mrcthms)! - FIxed a bug where the `AlphaTabs` component was referencing an incorrect CSS class name

## 10.39.0

### Minor Changes

- [#8731](https://github.com/Shopify/polaris/pull/8731) [`abe280b8c`](https://github.com/Shopify/polaris/commit/abe280b8c18b951f308a91d6d9cff510ae54c94c) Thanks [@kgKevGomez](https://github.com/kgKevGomez)! - Update IndexTable heading to support default sorting direction

* [#8547](https://github.com/Shopify/polaris/pull/8547) [`109fb5d0e`](https://github.com/Shopify/polaris/commit/109fb5d0ebe65a515b1653572e55afd11c1bac10) Thanks [@oluwatimio](https://github.com/oluwatimio)! - Updated SettingToggle component and documentation

- [#8440](https://github.com/Shopify/polaris/pull/8440) [`f30c696b3`](https://github.com/Shopify/polaris/commit/f30c696b32d3acbeb9a790505239fe9a5d59633c) Thanks [@mrcthms](https://github.com/mrcthms)! - - Added the `IndexFilters` component, which combines redesigned `AlphaTabs` and `AlphaFilters` components to make searching, filtering, and saving `IndexTable` views a more consistent, intuitive experience for merchants
  - Created the new `AlphaTabs` component to replace the current `Tabs` component
  - Created the new `AlphaFilters` component to replace the current `Filters` component

* [#8724](https://github.com/Shopify/polaris/pull/8724) [`8f96c2ded`](https://github.com/Shopify/polaris/commit/8f96c2ded6f4136603f0818563bde742364761ab) Thanks [@kyledurand](https://github.com/kyledurand)! - Deprecated backdrop prop on Icon

### Patch Changes

- [#8732](https://github.com/Shopify/polaris/pull/8732) [`e584de5be`](https://github.com/Shopify/polaris/commit/e584de5be69193aeb101aedae858b683a7156a77) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - [IndexTable] fixes sort icon flicker on right-aligned heading hover after selection

* [#8707](https://github.com/Shopify/polaris/pull/8707) [`aa599a7cf`](https://github.com/Shopify/polaris/commit/aa599a7cf47d0587a8ebc135d4da23a9e359952e) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - [IndexTable] Prevent sort icon flash and animation on right-aligned headers after row selection

- [#8754](https://github.com/Shopify/polaris/pull/8754) [`531d41286`](https://github.com/Shopify/polaris/commit/531d41286d780a83083e23931057a497025f8291) Thanks [@mrcthms](https://github.com/mrcthms)! - Fixed linting errors regarding incorrect importing of types

* [#8727](https://github.com/Shopify/polaris/pull/8727) [`df0378cbc`](https://github.com/Shopify/polaris/commit/df0378cbcf926d901ee6dc4aab8a81535c873491) Thanks [@laurkim](https://github.com/laurkim)! - Bumped `eslint-plugin-import`, `@typescript-eslint/**`, and `downlevel-dts` packages, added type import/export rules, and updated type imports

- [#8716](https://github.com/Shopify/polaris/pull/8716) [`e701d3eae`](https://github.com/Shopify/polaris/commit/e701d3eae538626c83aed224d2811d232be67c61) Thanks [@heyjoethomas](https://github.com/heyjoethomas)! - Updated which shadow tokens are being applied to the tooltip component

* [#8740](https://github.com/Shopify/polaris/pull/8740) [`ec1ca5eb3`](https://github.com/Shopify/polaris/commit/ec1ca5eb3359127aeb429792cab0742b9df86f5e) Thanks [@chloerice](https://github.com/chloerice)! - Fixed `Tooltip` with `persistOnClick` set causing an error when clicked

- [#8699](https://github.com/Shopify/polaris/pull/8699) [`28eb2e702`](https://github.com/Shopify/polaris/commit/28eb2e70270ec894024d802b5793ffca81727cba) Thanks [@AndrewMusgrave](https://github.com/AndrewMusgrave)! - Fix focus rings on IndexTable not correctly appearing

- Updated dependencies [[`df0378cbc`](https://github.com/Shopify/polaris/commit/df0378cbcf926d901ee6dc4aab8a81535c873491)]:
  - @shopify/polaris-tokens@6.8.1

## 10.38.0

### Minor Changes

- [#8682](https://github.com/Shopify/polaris/pull/8682) [`9c65bdae3`](https://github.com/Shopify/polaris/commit/9c65bdae313bd21975399bed6a19fc7f9626aeca) Thanks [@mrcthms](https://github.com/mrcthms)! - Added `LegacyTabs` and `LegacyFilters` components in preparation for the `IndexFilters` workstream

### Patch Changes

- [#8662](https://github.com/Shopify/polaris/pull/8662) [`4a018e7de`](https://github.com/Shopify/polaris/commit/4a018e7de2aacb32d951cc4223023c9f38b118b1) Thanks [@rdott](https://github.com/rdott)! - Prevented page scroll when using mousewheel over a number input

* [#8598](https://github.com/Shopify/polaris/pull/8598) [`611640238`](https://github.com/Shopify/polaris/commit/611640238a893015d060a1b0e58c70a19b119edd) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - [IndexTable] Sets header sort tooltip preferred position to "above" and adjusts right-aligned, sortable header animation

- [#8700](https://github.com/Shopify/polaris/pull/8700) [`47b03e639`](https://github.com/Shopify/polaris/commit/47b03e63956c3fd5a6e9ae479256c5b49a25882e) Thanks [@kyledurand](https://github.com/kyledurand)! - Added inheritance examples to Text component

* [#8676](https://github.com/Shopify/polaris/pull/8676) [`b4a1c451f`](https://github.com/Shopify/polaris/commit/b4a1c451f9f911f81cd8c3d34b3a07743e72a346) Thanks [@laurkim](https://github.com/laurkim)! - Updated `AlphaStack` to support horizontal alignment with `inlineAlign` and vertical alignment with `align`

- [#8675](https://github.com/Shopify/polaris/pull/8675) [`3013bee2c`](https://github.com/Shopify/polaris/commit/3013bee2c6c3f37a959d5f0ec9c2dc70b1b506e2) Thanks [@kyledurand](https://github.com/kyledurand)! - Accounted for string numbers to be passed into columns prop

* [#8695](https://github.com/Shopify/polaris/pull/8695) [`3a958ddbf`](https://github.com/Shopify/polaris/commit/3a958ddbff7cd58cd5d0d99c0ebbca97b6e12d32) Thanks [@KateWood](https://github.com/KateWood)! - adds zebra striping background color to .TableCell:first-child

* Updated dependencies [[`0ad5a20f7`](https://github.com/Shopify/polaris/commit/0ad5a20f780ad24527083b4bb37f6a411350425f), [`ed376f714`](https://github.com/Shopify/polaris/commit/ed376f7144d30526649725764420e5a046de359f)]:
  - @shopify/polaris-icons@6.12.0

## 10.37.0

### Minor Changes

- [#8601](https://github.com/Shopify/polaris/pull/8601) [`243fd6224`](https://github.com/Shopify/polaris/commit/243fd622406612370efe40dd32dcd2025cf53db7) Thanks [@lgriffee](https://github.com/lgriffee)! - Migrate `depth` custom properties from Polaris `v10` to `v11`

### Patch Changes

- [#8664](https://github.com/Shopify/polaris/pull/8664) [`d340f8471`](https://github.com/Shopify/polaris/commit/d340f8471d330e8562c0dbb67d9f3aeae8699b65) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed responsive gap on AlphaStack

## 10.36.0

### Minor Changes

- [#8555](https://github.com/Shopify/polaris/pull/8555) [`696473b82`](https://github.com/Shopify/polaris/commit/696473b8215c76eaa3645260d0ec9f6f443a4b9d) Thanks [@clarkjennings](https://github.com/clarkjennings)! - Added a forward `ref` to permit programmatic scrolling for `Scrollable` (example: `scrollRef.current?.scrollTo(0)`)

* [#8650](https://github.com/Shopify/polaris/pull/8650) [`078cf9aea`](https://github.com/Shopify/polaris/commit/078cf9aea6fbee85f1a22662808ec527b46e6f2d) Thanks [@kyledurand](https://github.com/kyledurand)! - Deprecated breadcrumbs prop on SkeletonPage, added backAction prop with story

- [#8586](https://github.com/Shopify/polaris/pull/8586) [`83bde8690`](https://github.com/Shopify/polaris/commit/83bde86903b3b6cfdb1a56f8f505c353eb4609be) Thanks [@tatianau](https://github.com/tatianau)! - Made hiding the stepper arrows for inputs of type "number" and revealing them on hover and focus the default `TextField` behaviour to mimic the default browser experience

* [#8288](https://github.com/Shopify/polaris/pull/8288) [`d27a361c2`](https://github.com/Shopify/polaris/commit/d27a361c25fd002937a1a6e7eea46225d12cad98) Thanks [@rcd00](https://github.com/rcd00)! - Updated the style of keyboard component and add optional size prop

- [#8600](https://github.com/Shopify/polaris/pull/8600) [`515a62f3b`](https://github.com/Shopify/polaris/commit/515a62f3b2f7cfadbc1a80a9a320aae857262790) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed list reset class from not applying to ordered lists

* [#8655](https://github.com/Shopify/polaris/pull/8655) [`fb373c3e1`](https://github.com/Shopify/polaris/commit/fb373c3e1d0f3e5dc7a61406b66f1580a45df6a2) Thanks [@stewx](https://github.com/stewx)! - Adjust CSS for expanded navigation section to remove unwanted space during collapse/expand

### Patch Changes

- [#8595](https://github.com/Shopify/polaris/pull/8595) [`437a3bbf1`](https://github.com/Shopify/polaris/commit/437a3bbf15209ad211ad3c197b9ed8cb34be2261) Thanks [@KateWood](https://github.com/KateWood)! - Added option zebra striping to `IndexTable` ([#8595](https://github.com/Shopify/polaris/pull/8595))

* [#8626](https://github.com/Shopify/polaris/pull/8626) [`ff70ab3d1`](https://github.com/Shopify/polaris/commit/ff70ab3d1bc36d6d4b04a85c03f0b60e7ea8c43e) Thanks [@alex-page](https://github.com/alex-page)! - Fix border radius on active/pressed navigation items

- [#8644](https://github.com/Shopify/polaris/pull/8644) [`62b712362`](https://github.com/Shopify/polaris/commit/62b71236221edddae106600a73d3f524089a6cd0) Thanks [@alex-page](https://github.com/alex-page)! - Remove unnecessary stylelint-disable comments

* [#8651](https://github.com/Shopify/polaris/pull/8651) [`446ba341c`](https://github.com/Shopify/polaris/commit/446ba341c2debf0ed9378294598fb125d64d3a88) Thanks [@aveline](https://github.com/aveline)! - Updated default stack order custom property

- [#8659](https://github.com/Shopify/polaris/pull/8659) [`3e7e0837d`](https://github.com/Shopify/polaris/commit/3e7e0837daccbc8652ea15caf0679b1309ca03fb) Thanks [@mrcthms](https://github.com/mrcthms)! - Removed comments after stylelint rule changes that are breaking the rules

* [#8606](https://github.com/Shopify/polaris/pull/8606) [`230786ace`](https://github.com/Shopify/polaris/commit/230786ace70a370d0ada255e33f0b8fe830edfaa) Thanks [@alex-page](https://github.com/alex-page)! - Remove unused shared scss functions and move low usage or low value functions into components

- [#8629](https://github.com/Shopify/polaris/pull/8629) [`6ee523a5f`](https://github.com/Shopify/polaris/commit/6ee523a5ff7b11425537936c41fc675e72fc81ef) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated the animation duration and box-shadow for the `Tooltip`

## 10.35.0

### Minor Changes

- [#8539](https://github.com/Shopify/polaris/pull/8539) [`cb41f719c`](https://github.com/Shopify/polaris/commit/cb41f719c57d181335d9e308db09beb665d011b5) Thanks [@alex-page](https://github.com/alex-page)! - Updated `variant` prop on `Text` component to be optional to better support children with similar styles

* [#8533](https://github.com/Shopify/polaris/pull/8533) [`b39b19782`](https://github.com/Shopify/polaris/commit/b39b19782cd0ea3bedb7e4575c44ad7d5dbc310e) Thanks [@aveline](https://github.com/aveline)! - Updated `Columns` to accept `alignItems` prop

### Patch Changes

- [#8582](https://github.com/Shopify/polaris/pull/8582) [`4fb2bdc57`](https://github.com/Shopify/polaris/commit/4fb2bdc57b2e19eade84829f092861eef8ff4f28) Thanks [@aveline](https://github.com/aveline)! - Removed `fullWidth` prop from `AlphaStack`

- Updated dependencies [[`7d1c4f1db`](https://github.com/Shopify/polaris/commit/7d1c4f1db629ad9cfc68f65bd5f704127d10136e)]:
  - @shopify/polaris-tokens@6.8.0

## 10.34.0

### Minor Changes

- [#8546](https://github.com/Shopify/polaris/pull/8546) [`8872c0861`](https://github.com/Shopify/polaris/commit/8872c08615d5781f4a9721b22ca3275f55a62ae1) Thanks [@MindRave](https://github.com/MindRave)! - Added "magic" color to the Icon component's color prop type.

* [#8545](https://github.com/Shopify/polaris/pull/8545) [`7c174e47a`](https://github.com/Shopify/polaris/commit/7c174e47adf5d865cab43f51c14f1f54fa0607c9) Thanks [@alex-page](https://github.com/alex-page)! - Updated DropZone with a signifigant restructure to remove Class child component

- [#8525](https://github.com/Shopify/polaris/pull/8525) [`8a4de8168`](https://github.com/Shopify/polaris/commit/8a4de8168ae4a80e3b11e909b64bef72b5af93b7) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - [IndexTable] Adds support for header config object alignment property and treatment of right-aligned, sortable column headings

* [#8569](https://github.com/Shopify/polaris/pull/8569) [`646fba23f`](https://github.com/Shopify/polaris/commit/646fba23f603d09cb96de1bd7975111dd8ec06a3) Thanks [@kyledurand](https://github.com/kyledurand)! - Allowed aria attributes on Bleed, Inline, and Columns

### Patch Changes

- [#8581](https://github.com/Shopify/polaris/pull/8581) [`336d14545`](https://github.com/Shopify/polaris/commit/336d145453954993f01c60c3b516a733ea8c6aa9) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed a bug where bulk actions wouldn't render when only promoted actions exist

## 10.33.0

### Minor Changes

- [#8514](https://github.com/Shopify/polaris/pull/8514) [`78d686db5`](https://github.com/Shopify/polaris/commit/78d686db50f2a9691e57c0baa4ec9fde8ba8057a) Thanks [@lgriffee](https://github.com/lgriffee)! - Add additional changes for migrating `legacy` custom properties from `v10` to `v11`

* [#8512](https://github.com/Shopify/polaris/pull/8512) [`b77c1fe51`](https://github.com/Shopify/polaris/commit/b77c1fe516a9b4634cb8f5187a91898af4e63782) Thanks [@fatimasajadi](https://github.com/fatimasajadi)! - Add onMouseEnter prop to the each item on the ActionList component

- [#8530](https://github.com/Shopify/polaris/pull/8530) [`bec50d4d8`](https://github.com/Shopify/polaris/commit/bec50d4d8cfa6e68fa6dbabb6e720f5553e0e346) Thanks [@kyledurand](https://github.com/kyledurand)! - Removed alignment defaults from Inline and AlphaStack

* [#8448](https://github.com/Shopify/polaris/pull/8448) [`590e495fd`](https://github.com/Shopify/polaris/commit/590e495fd2751191c6e74af008a32e147a785eda) Thanks [@alex-page](https://github.com/alex-page)! - [Text] adds optional numeric font variant to render characters with a monospace apperance and consistent height and width

- [#8130](https://github.com/Shopify/polaris/pull/8130) [`6c0dda128`](https://github.com/Shopify/polaris/commit/6c0dda128a3626cd4a24a755fb2d0809c958f907) Thanks [@mrcthms](https://github.com/mrcthms)! - - Added a `suffix` prop to `Tooltip`
  - Improved the UX of `Tooltip` by refining open and close animations and adding an arrow pointing to the center of the `activator`
  - Added the `EmpemeralPresenceManager` to manage the presence of non-blocking overlays, like `Tooltip` and `Toast`

* [#8556](https://github.com/Shopify/polaris/pull/8556) [`de3a925a7`](https://github.com/Shopify/polaris/commit/de3a925a721b11327394a1cd041e888871f4aabe) Thanks [@laurkim](https://github.com/laurkim)! - Deprecated `Stack` and `Stack.Item` and updated documentation on style guide

- [#8498](https://github.com/Shopify/polaris/pull/8498) [`624751155`](https://github.com/Shopify/polaris/commit/62475115576b1d602522d6e11db7e5a8b36d490d) Thanks [@lgriffee](https://github.com/lgriffee)! - Migrated `legacy` custom properties from `v10` to `v11`

### Patch Changes

- [#8534](https://github.com/Shopify/polaris/pull/8534) [`eeb8a4fc5`](https://github.com/Shopify/polaris/commit/eeb8a4fc53cfafd7bad1c2de5e16718295223900) Thanks [@laurkim](https://github.com/laurkim)! - Migrated usage of `Stack` to `LegacyStack`

* [#8540](https://github.com/Shopify/polaris/pull/8540) [`70c166290`](https://github.com/Shopify/polaris/commit/70c166290790c478a397d6f4cf56cfec8b258a94) Thanks [@Ipriyankrajai](https://github.com/Ipriyankrajai)! - Fixed `ActionList` item `suffix` having extra padding when wrapped

- [#8523](https://github.com/Shopify/polaris/pull/8523) [`f644ad671`](https://github.com/Shopify/polaris/commit/f644ad671d2c0a0f5f01247204717ab67ba8909c) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed deprecation warning on Card

* [#8531](https://github.com/Shopify/polaris/pull/8531) [`7ecc8a9a6`](https://github.com/Shopify/polaris/commit/7ecc8a9a62faba5894a5920b538e36c847eb4a12) Thanks [@chloerice](https://github.com/chloerice)! - - Fixed header of `IndexTable` with `bulkActions` not having border radius
  - Fixed header of `selectable` `ResourceList` not having border radius
  - Fixed `selectable` `ResourceList` with no `bulkActions` having extra bottom padding in select mode
  - Fixed last `ResourceItem` in a `selectable` `ResourceList` with `bulkActions` having a border radius when in select mode
* Updated dependencies [[`6c0dda128`](https://github.com/Shopify/polaris/commit/6c0dda128a3626cd4a24a755fb2d0809c958f907), [`886da4fc3`](https://github.com/Shopify/polaris/commit/886da4fc3db468989dff46c7d0938661fb5a5fcb)]:
  - @shopify/polaris-tokens@6.7.0
  - @shopify/polaris-icons@6.11.3

## 10.32.0

### Minor Changes

- [#8454](https://github.com/Shopify/polaris/pull/8454) [`4799b6550`](https://github.com/Shopify/polaris/commit/4799b6550d37abcfb5ec049d621b1d57a93cdd91) Thanks [@chazdean](https://github.com/chazdean)! - Removed default spacing from `Inline`

* [#8484](https://github.com/Shopify/polaris/pull/8484) [`cbbb5648c`](https://github.com/Shopify/polaris/commit/cbbb5648c11a4425f7ae8d6976ffa557513f833a) Thanks [@aveline](https://github.com/aveline)! - Removed default `gap` from `Columns`

- [#8135](https://github.com/Shopify/polaris/pull/8135) [`c60617518`](https://github.com/Shopify/polaris/commit/c60617518e1d50c9ae9734f8b95e6546b117ae8e) Thanks [@itwasmattgregg](https://github.com/itwasmattgregg)! - Deprecated the `Page` `breadcrumbs` prop in favor of the new `backAction` prop.

* [#8441](https://github.com/Shopify/polaris/pull/8441) [`3537b3aeb`](https://github.com/Shopify/polaris/commit/3537b3aebb87b4a09ddd8a52e95e3080423bd0c0) Thanks [@kyledurand](https://github.com/kyledurand)! - Deprecated TextContainer in favor of AlphaStack

- [#8418](https://github.com/Shopify/polaris/pull/8418) [`4018ee268`](https://github.com/Shopify/polaris/commit/4018ee2686e1484769b62361b69284018d574bab) Thanks [@kyledurand](https://github.com/kyledurand)! - Deprecated Grid component
  Update documentation for deprecated components

* [#8413](https://github.com/Shopify/polaris/pull/8413) [`7bbe096e4`](https://github.com/Shopify/polaris/commit/7bbe096e4ce900f1bc7259d1f792c59eeae7dbe7) Thanks [@zakwarsame](https://github.com/zakwarsame)! - updating bulk actions strings

### Patch Changes

- [#8387](https://github.com/Shopify/polaris/pull/8387) [`7f0f2cad1`](https://github.com/Shopify/polaris/commit/7f0f2cad13840d1b7ecf58738473259376ca5ce2) Thanks [@aveline](https://github.com/aveline)! - Updated `Columns` to accept columns aliases

* [#8115](https://github.com/Shopify/polaris/pull/8115) [`cc706f4ce`](https://github.com/Shopify/polaris/commit/cc706f4ce099a0bf4fc91c23824045ecada51797) Thanks [@mrcthms](https://github.com/mrcthms)! - Grouped PageActions actions at the trailing edge of the container

- [#8470](https://github.com/Shopify/polaris/pull/8470) [`f5e450357`](https://github.com/Shopify/polaris/commit/f5e450357156cd8034275173428b60ec536230cd) Thanks [@aveline](https://github.com/aveline)! - Removed default margin from `Bleed`

- Updated dependencies [[`0e9fa8433`](https://github.com/Shopify/polaris/commit/0e9fa843397a9ec1d1a7eee70d0178d76dd231f8), [`b1768f037`](https://github.com/Shopify/polaris/commit/b1768f03795f224e760edc405dc5bfde298061cb)]:
  - @shopify/polaris-tokens@6.6.1

## 10.31.0

### Minor Changes

- [#8363](https://github.com/Shopify/polaris/pull/8363) [`13c6c383a`](https://github.com/Shopify/polaris/commit/13c6c383a344588dc7fcc2b4b49b910fde05204a) Thanks [@laurkim](https://github.com/laurkim)! - Migrated usage of `Card` to `LegacyCard`

* [#8450](https://github.com/Shopify/polaris/pull/8450) [`2282bd673`](https://github.com/Shopify/polaris/commit/2282bd673a27a65e6780c3967099b06be28e411f) Thanks [@laurkim](https://github.com/laurkim)! - Deprecated `Card` and subcomponents

## 10.30.0

### Minor Changes

- [#8356](https://github.com/Shopify/polaris/pull/8356) [`6f92bf33c`](https://github.com/Shopify/polaris/commit/6f92bf33ce855cebd2b1243411a75a35f55eaeb1) Thanks [@lgriffee](https://github.com/lgriffee)! - Migrated `--p-space-0` tokens to `0` in SCSS files

* [#8425](https://github.com/Shopify/polaris/pull/8425) [`c73717cf8`](https://github.com/Shopify/polaris/commit/c73717cf82845c9ae9b9a4a05263b60e8c5d266f) Thanks [@lgriffee](https://github.com/lgriffee)! - Manually migrated `z-index` custom properties from `v10` to `v11`

- [#8423](https://github.com/Shopify/polaris/pull/8423) [`bc8ab02f2`](https://github.com/Shopify/polaris/commit/bc8ab02f20c1afdb86c1309453681c1c58265933) Thanks [@lgriffee](https://github.com/lgriffee)! - Migrated `z-index` custom properties from `v10` to `v11`

### Patch Changes

- [#8343](https://github.com/Shopify/polaris/pull/8343) [`20d17c61a`](https://github.com/Shopify/polaris/commit/20d17c61af2a14aaab48ccda1a9374d5d90864b3) Thanks [@alexanderMontague](https://github.com/alexanderMontague)! - Fix margin bug with sub nav item selected highlight styles

* [#8364](https://github.com/Shopify/polaris/pull/8364) [`d06191580`](https://github.com/Shopify/polaris/commit/d06191580a8ab6a9562057845511161927249d0c) Thanks [@stefanlegg](https://github.com/stefanlegg)! - Replace --pc-index-table-loading-panel with --p-z-2 to resolve loading bar overlap issue with .LoadingPanel

* Updated dependencies [[`952ce97ea`](https://github.com/Shopify/polaris/commit/952ce97eacb675bd145ca049b41c91bf270e5954), [`48dffd03d`](https://github.com/Shopify/polaris/commit/48dffd03da4e4fd5ebbaf133725b01aecfa2d9b8), [`7c434b257`](https://github.com/Shopify/polaris/commit/7c434b257c308a6f80216c360faff6bfb7bb07c8)]:
  - @shopify/polaris-tokens@6.6.0

## 10.29.0

### Minor Changes

- [#8383](https://github.com/Shopify/polaris/pull/8383) [`955832a3b`](https://github.com/Shopify/polaris/commit/955832a3bb653a334d782edd396b9519625134c1) Thanks [@chazdean](https://github.com/chazdean)! - Remove default spacing from `AlphaStack`

* [#8349](https://github.com/Shopify/polaris/pull/8349) [`160d9c15b`](https://github.com/Shopify/polaris/commit/160d9c15b433bf01370c1244c5d725808562c673) Thanks [@sophschneider](https://github.com/sophschneider)! - Add hideIcon prop to Banner and update Banner styles for mobile web

## 10.28.2

### Patch Changes

- Updated dependencies [[`7a9977b4d`](https://github.com/Shopify/polaris/commit/7a9977b4dfe29217279d4988a60cf056d8404419)]:
  - @shopify/polaris-tokens@6.5.1

## 10.28.1

### Patch Changes

- [#8373](https://github.com/Shopify/polaris/pull/8373) [`684881b68`](https://github.com/Shopify/polaris/commit/684881b681c7acc8adb8f64991b862869874d929) Thanks [@laurkim](https://github.com/laurkim)! - Added support for `LegacyCard` in `Card` classes

* [#8344](https://github.com/Shopify/polaris/pull/8344) [`61f4e9254`](https://github.com/Shopify/polaris/commit/61f4e9254dc63c4ae1936ba15e66efa64d410f90) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed broken links in storybook and documentation examples

## 10.28.0

### Minor Changes

- [#8305](https://github.com/Shopify/polaris/pull/8305) [`4bff95206`](https://github.com/Shopify/polaris/commit/4bff95206877cc24c261f1103589464314ca8cb7) Thanks [@alex-page](https://github.com/alex-page)! - Created a new token --p-border-radius-full that replaces --p-border-radius-half

* [#8306](https://github.com/Shopify/polaris/pull/8306) [`cf2f7ebeb`](https://github.com/Shopify/polaris/commit/cf2f7ebebb4f1b6a00628652a50c5f170b19c66c) Thanks [@alex-page](https://github.com/alex-page)! - Replace usage of border-radius-base with border-radius-1

### Patch Changes

- [#8325](https://github.com/Shopify/polaris/pull/8325) [`e934ff711`](https://github.com/Shopify/polaris/commit/e934ff711ada01965e0f44583407972aa704c692) Thanks [@ryanwilsonperkin](https://github.com/ryanwilsonperkin)! - Use useIsomorphicLayoutEffect to prevent warnings during SSR

* [#8273](https://github.com/Shopify/polaris/pull/8273) [`d263caac9`](https://github.com/Shopify/polaris/commit/d263caac9af2ae24a97c8e39d6bf63586c2e147c) Thanks [@eric-blue](https://github.com/eric-blue)! - corrects js-doc comment about conflicting IndexTable defaultSortDirection prop

* Updated dependencies [[`60ef0dffc`](https://github.com/Shopify/polaris/commit/60ef0dffc9f6064d1d42793f5d2bd96f35b14489), [`4bff95206`](https://github.com/Shopify/polaris/commit/4bff95206877cc24c261f1103589464314ca8cb7), [`29e9004ff`](https://github.com/Shopify/polaris/commit/29e9004ff8a5e5e2feaaf13b7d37963a1db206fd)]:
  - @shopify/polaris-tokens@6.5.0
  - @shopify/polaris-icons@6.11.2

## 10.27.2

### Patch Changes

- [#8290](https://github.com/Shopify/polaris/pull/8290) [`24a2ef38a`](https://github.com/Shopify/polaris/commit/24a2ef38a14a5904e739a38c1421e3f7f5db81bc) Thanks [@LauraAubin](https://github.com/LauraAubin)! - Updated the `IndexTable` `heading.tooltipContent` type to a `ReactNode`

## 10.27.1

### Patch Changes

- [#8285](https://github.com/Shopify/polaris/pull/8285) [`e70f70862`](https://github.com/Shopify/polaris/commit/e70f7086261b7f036b90550a432bf9d72e7ed8a4) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed contrast issue on alpha status badge
  Added default value to prop documentation for AlphaStack

* [#8280](https://github.com/Shopify/polaris/pull/8280) [`20bb1a668`](https://github.com/Shopify/polaris/commit/20bb1a668dcde8fcb87da35d5caaef2f0e387c01) Thanks [@chloerice](https://github.com/chloerice)! - Fixed `EmptyState` `illustration` rendering below content and actions when rendered outside of a content container

- [#8286](https://github.com/Shopify/polaris/pull/8286) [`f335aaf99`](https://github.com/Shopify/polaris/commit/f335aaf9968ff87b38559572f51a92b413f8aecd) Thanks [@chloerice](https://github.com/chloerice)! - Reverted Modal footer layout bug fix shipped in [#8253](https://github.com/Shopify/polaris/pull/8253)

## 10.27.0

### Minor Changes

- [#8277](https://github.com/Shopify/polaris/pull/8277) [`a0f29cd4f`](https://github.com/Shopify/polaris/commit/a0f29cd4fa3e8f03f12e78dbbd7b2730ae2245e2) Thanks [@LauraAubin](https://github.com/LauraAubin)! - 1. Added persist on click and underline to Tooltip. 2. Added IndexTable header props to support Tooltip content, width, and persist on click.

### Patch Changes

- [#8250](https://github.com/Shopify/polaris/pull/8250) [`0961fab02`](https://github.com/Shopify/polaris/commit/0961fab02959c0a4ea8a8a7407ad39cab1d9e106) Thanks [@chloerice](https://github.com/chloerice)! - Fixed `SkeletonPage` `primaryAction` height not matching `Button` height

* [#8253](https://github.com/Shopify/polaris/pull/8253) [`8fb998772`](https://github.com/Shopify/polaris/commit/8fb998772f788947bf4324c065b57705c87133c4) Thanks [@chloerice](https://github.com/chloerice)! - Fixed `Modal` without actions not stretching `footer` to full width

* Updated dependencies [[`9eb9e47b9`](https://github.com/Shopify/polaris/commit/9eb9e47b9154f2df770916a4d94bd0e630ee261a)]:
  - @shopify/polaris-icons@6.11.1

## 10.26.0

### Minor Changes

- [#8240](https://github.com/Shopify/polaris/pull/8240) [`31abdab37`](https://github.com/Shopify/polaris/commit/31abdab377fb0c6ceb79d6aa0cd46d730b100447) Thanks [@laurkim](https://github.com/laurkim)! - Added `LegacyStack` component

* [#8238](https://github.com/Shopify/polaris/pull/8238) [`bb8b551d4`](https://github.com/Shopify/polaris/commit/bb8b551d44b021584bb113c023f481c91207229a) Thanks [@laurkim](https://github.com/laurkim)! - Added `LegacyCard` component

### Patch Changes

- [#8256](https://github.com/Shopify/polaris/pull/8256) [`43776be71`](https://github.com/Shopify/polaris/commit/43776be71635454192aa3985a5f364f84177ddeb) Thanks [@aveline](https://github.com/aveline)! - - Fixed `Bleed` width behavior
  - Fixed `Banner` content width

* [#8244](https://github.com/Shopify/polaris/pull/8244) [`0ee432500`](https://github.com/Shopify/polaris/commit/0ee43250031ddaa03ffab06ae24197c91c2328d9) Thanks [@samrose3](https://github.com/samrose3)! - Disallow text-transform property in Stylelint Polaris

* Updated dependencies [[`1b1394d32`](https://github.com/Shopify/polaris/commit/1b1394d32ecb122bcb77b6cb38b6106631ff8afd)]:
  - @shopify/polaris-tokens@6.4.0

## 10.25.0

### Minor Changes

- [#7950](https://github.com/Shopify/polaris/pull/7950) [`286c63a84`](https://github.com/Shopify/polaris/commit/286c63a8402873f02cdbd9e469169531ee03111b) Thanks [@laurkim](https://github.com/laurkim)! - Updated `Tabs` component to use layout primitives

* [#7950](https://github.com/Shopify/polaris/pull/7950) [`286c63a84`](https://github.com/Shopify/polaris/commit/286c63a8402873f02cdbd9e469169531ee03111b) Thanks [@laurkim](https://github.com/laurkim)! - Updated `OptionList` to use new layout primitives

- [#7950](https://github.com/Shopify/polaris/pull/7950) [`286c63a84`](https://github.com/Shopify/polaris/commit/286c63a8402873f02cdbd9e469169531ee03111b) Thanks [@laurkim](https://github.com/laurkim)! - Updated `Popover` to use new layout primitives

### Patch Changes

- [#7950](https://github.com/Shopify/polaris/pull/7950) [`286c63a84`](https://github.com/Shopify/polaris/commit/286c63a8402873f02cdbd9e469169531ee03111b) Thanks [@laurkim](https://github.com/laurkim)! - Remove unused class in Page Header

* [#7950](https://github.com/Shopify/polaris/pull/7950) [`286c63a84`](https://github.com/Shopify/polaris/commit/286c63a8402873f02cdbd9e469169531ee03111b) Thanks [@laurkim](https://github.com/laurkim)! - Rebuilt Page Header with layout components

- [#8237](https://github.com/Shopify/polaris/pull/8237) [`17fa970db`](https://github.com/Shopify/polaris/commit/17fa970db66213fe659ee231e750f7054a72dc97) Thanks [@loic-d](https://github.com/loic-d)! - Fixed Backdrop onClick callback when setClosing is missing

## 10.24.2

### Patch Changes

- [#8209](https://github.com/Shopify/polaris/pull/8209) [`d1a332963`](https://github.com/Shopify/polaris/commit/d1a3329634a1f4cd02f0d97b8239bbedad7cf889) Thanks [@aveline](https://github.com/aveline)! - Updated `Bleed` to take up full width of container

* [#8224](https://github.com/Shopify/polaris/pull/8224) [`e30d1f51b`](https://github.com/Shopify/polaris/commit/e30d1f51b205c6875c0e712291081d836e851d97) Thanks [@peterlazzarino](https://github.com/peterlazzarino)! - Repair styling for Checkbox when indeterminate and disabled

## 10.24.1

### Patch Changes

- [#8166](https://github.com/Shopify/polaris/pull/8166) [`ec0e2f671`](https://github.com/Shopify/polaris/commit/ec0e2f671487e167ee43326372ad2367b3e7f4a6) Thanks [@rjur11](https://github.com/rjur11)! - Fixed focus not returning to the `Popover` `activator` on keypress of Escape

- Updated dependencies [[`977e70a84`](https://github.com/Shopify/polaris/commit/977e70a847cdc446c28c2b06dc771e5970aa0f4f)]:
  - @shopify/polaris-icons@6.11.0

## 10.24.0

### Minor Changes

- [#8083](https://github.com/Shopify/polaris/pull/8083) [`18991daf1`](https://github.com/Shopify/polaris/commit/18991daf16362fa4e0bef6a11c3e9040baa7dd95) Thanks [@krithikajanakiraman](https://github.com/krithikajanakiraman)! - Adding an oprtional headerContent prop to ResourceList

* [#7821](https://github.com/Shopify/polaris/pull/7821) [`a0941743a`](https://github.com/Shopify/polaris/commit/a0941743a38c439e1f8d2ffd61584a6c1d18e5e3) Thanks [@laurkim](https://github.com/laurkim)! - Rebuilt `ActionList` to use layout primitives

- [#7821](https://github.com/Shopify/polaris/pull/7821) [`a0941743a`](https://github.com/Shopify/polaris/commit/a0941743a38c439e1f8d2ffd61584a6c1d18e5e3) Thanks [@laurkim](https://github.com/laurkim)! - Refactored `SkeletonPage` to use primitive Layout components
  Removed `max-width` on children in `AlphaStack`
  Added `narrowWidth` and `fullWidth` examples to `AlphaStack` stories

### Patch Changes

- [#7821](https://github.com/Shopify/polaris/pull/7821) [`a0941743a`](https://github.com/Shopify/polaris/commit/a0941743a38c439e1f8d2ffd61584a6c1d18e5e3) Thanks [@laurkim](https://github.com/laurkim)! - Updated `SkeletonPage` title and body layout

* [#7821](https://github.com/Shopify/polaris/pull/7821) [`a0941743a`](https://github.com/Shopify/polaris/commit/a0941743a38c439e1f8d2ffd61584a6c1d18e5e3) Thanks [@laurkim](https://github.com/laurkim)! - Refactored `SkeletonPage` title layout

- [#7821](https://github.com/Shopify/polaris/pull/7821) [`a0941743a`](https://github.com/Shopify/polaris/commit/a0941743a38c439e1f8d2ffd61584a6c1d18e5e3) Thanks [@laurkim](https://github.com/laurkim)! - Fixed `ResourceList` header alignment

* [#7821](https://github.com/Shopify/polaris/pull/7821) [`a0941743a`](https://github.com/Shopify/polaris/commit/a0941743a38c439e1f8d2ffd61584a6c1d18e5e3) Thanks [@laurkim](https://github.com/laurkim)! - Rebuilt `ResourceItem` with layout components

- [#7821](https://github.com/Shopify/polaris/pull/7821) [`a0941743a`](https://github.com/Shopify/polaris/commit/a0941743a38c439e1f8d2ffd61584a6c1d18e5e3) Thanks [@laurkim](https://github.com/laurkim)! - Fixed IndexTable checkbox alignment

* [#8099](https://github.com/Shopify/polaris/pull/8099) [`a3605c855`](https://github.com/Shopify/polaris/commit/a3605c855ae4b83653450dbbbb362fdbf6136bb7) Thanks [@AndrewMusgrave](https://github.com/AndrewMusgrave)! - Fixed `BulkActions` causing `IndexTable` & `ResourceList` to ignore pointer events

* Updated dependencies [[`a0c6e467b`](https://github.com/Shopify/polaris/commit/a0c6e467b71be484e708d4c06d4172e3890b5a15), [`0ca0b7899`](https://github.com/Shopify/polaris/commit/0ca0b7899d480ca7bf87e7dfca24bc5721b0775c)]:
  - @shopify/polaris-icons@6.10.0

## 10.23.0

### Minor Changes

- [#8134](https://github.com/Shopify/polaris/pull/8134) [`8d80691b5`](https://github.com/Shopify/polaris/commit/8d80691b534918e82ea43f3627f25dce9376a3dc) Thanks [@mrcthms](https://github.com/mrcthms)! - Removed the focus ring from `Listbox` options

### Patch Changes

- [#8093](https://github.com/Shopify/polaris/pull/8093) [`60dd5a0c5`](https://github.com/Shopify/polaris/commit/60dd5a0c5a2a6d59c3a2b4a46bc1cdf2ca02e6f9) Thanks [@highfieldjames](https://github.com/highfieldjames)! - Added `borderRadius` style to `TooltipOverlay`

* [#8090](https://github.com/Shopify/polaris/pull/8090) [`bdcc291a4`](https://github.com/Shopify/polaris/commit/bdcc291a426900cc5fe4a516f2543b50f65baf55) Thanks [@emmanueletti](https://github.com/emmanueletti)! - Replaced mouse up and down events on Backdrop with onClick to close Modal

- [#8131](https://github.com/Shopify/polaris/pull/8131) [`6096c3492`](https://github.com/Shopify/polaris/commit/6096c34929aa47f7616294d5bf7e4326804cd866) Thanks [@henryyi](https://github.com/henryyi)! - Fixed Navigation item secondaryActions alignment in mobile when floating actions are enabled

* [#8114](https://github.com/Shopify/polaris/pull/8114) [`e6aa9c801`](https://github.com/Shopify/polaris/commit/e6aa9c80129fb6d365ebdc395e93637dd988c68d) Thanks [@highfieldjames](https://github.com/highfieldjames)! - Dismiss index table tooltip on mouse out

- [#8091](https://github.com/Shopify/polaris/pull/8091) [`23ee70d13`](https://github.com/Shopify/polaris/commit/23ee70d13e2afcf8a8b14fffd4bf7c25e3380b82) Thanks [@ginabak](https://github.com/ginabak)! - Added `onBlur` prop to numerical steppers (`Spinner` component of `TextField`) to remove multi focus issue in `TextField`.

- Updated dependencies [[`b998ca007`](https://github.com/Shopify/polaris/commit/b998ca00736c5cf1a7772a1ee0acc9f3f4a2748e), [`94988bc26`](https://github.com/Shopify/polaris/commit/94988bc260b0c4f371a8c1f22a0a3fd5e11fee45), [`f74e8ffcc`](https://github.com/Shopify/polaris/commit/f74e8ffcc4d0864212e53e28e7bb02f3b224ba33)]:
  - @shopify/polaris-icons@6.9.0

## 10.22.0

### Minor Changes

- [#8054](https://github.com/Shopify/polaris/pull/8054) [`c44c96c6b`](https://github.com/Shopify/polaris/commit/c44c96c6b455d0a474f9ffb346f45b312e0a66bb) Thanks [@mrcthms](https://github.com/mrcthms)! - Update focus states to be present on :focus-visible rather than :focus

### Patch Changes

- [#8080](https://github.com/Shopify/polaris/pull/8080) [`1c926b9da`](https://github.com/Shopify/polaris/commit/1c926b9dae3531393d51439d5391f1c4bae97bb3) Thanks [@LauraAubin](https://github.com/LauraAubin)! - Added an optional `zIndexOverride` prop to `Tooltip`

* [#8077](https://github.com/Shopify/polaris/pull/8077) [`dc2ed0a5c`](https://github.com/Shopify/polaris/commit/dc2ed0a5c98db41610ec249cbef8be8f414ad32f) Thanks [@kyledurand](https://github.com/kyledurand)! - Removed data attribute css from legacy polyfill

- [#8040](https://github.com/Shopify/polaris/pull/8040) [`ba6b04c79`](https://github.com/Shopify/polaris/commit/ba6b04c79844abc26654a4251e37734eb7897780) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed modal footer vertical alignment when noScroll is true

- Updated dependencies [[`dca31f2a0`](https://github.com/Shopify/polaris/commit/dca31f2a00737c77a96d26da1535cad83e5af0b0), [`56b757036`](https://github.com/Shopify/polaris/commit/56b75703622a8abc987cac8b87dcd7b53c16e508), [`f67e2997e`](https://github.com/Shopify/polaris/commit/f67e2997ef6f5ea026ec076fe480bb7924620f34), [`68acc4593`](https://github.com/Shopify/polaris/commit/68acc45939e64239be2d9d1a854db096e3620556), [`d5da4778c`](https://github.com/Shopify/polaris/commit/d5da4778c73179b5f1606f3a8b029b9c4a3b818c), [`1aeed2414`](https://github.com/Shopify/polaris/commit/1aeed2414b8be48e7c3009663fbd407bd40aa3c9)]:
  - @shopify/polaris-icons@6.8.0

## 10.21.0

### Minor Changes

- [#8033](https://github.com/Shopify/polaris/pull/8033) [`a2eca1d4d`](https://github.com/Shopify/polaris/commit/a2eca1d4dff40de8ee9492c19fd78ed0269f35f9) Thanks [@allisonjanes-shopify](https://github.com/allisonjanes-shopify)! - Added an optional `noWrap` prop to `ButtonGroup`

* [#8016](https://github.com/Shopify/polaris/pull/8016) [`ca77f0bc8`](https://github.com/Shopify/polaris/commit/ca77f0bc8f55b63b269486548c6142eaef7b2b61) Thanks [@itwasmattgregg](https://github.com/itwasmattgregg)! - Added the ability for breadcrumbs to be passed as a singular object instead of an array to allow support for upcoming v11 changes

### Patch Changes

- [#8059](https://github.com/Shopify/polaris/pull/8059) [`4b470fc98`](https://github.com/Shopify/polaris/commit/4b470fc98cb07b987256f5a83784a4039ca9d9cf) Thanks [@LauraAubin](https://github.com/LauraAubin)! - Fix vertical alignment for sortable headers with custom content on the IndexTable

## 10.20.0

### Minor Changes

- [#8029](https://github.com/Shopify/polaris/pull/8029) [`cdec9ddc5`](https://github.com/Shopify/polaris/commit/cdec9ddc56b524df55ccd34e063fec6c97160198) Thanks [@yurm04](https://github.com/yurm04)! - Fixed Badge component "new" status styling

* [#7996](https://github.com/Shopify/polaris/pull/7996) [`256c4d4e7`](https://github.com/Shopify/polaris/commit/256c4d4e7dfb6f441903db8cbbf0314f6258d876) Thanks [@ginabak](https://github.com/ginabak)! - Added `width`, `padding`, and `borderRadius` optional props to `Tooltip`

- [#7863](https://github.com/Shopify/polaris/pull/7863) [`0f55bd531`](https://github.com/Shopify/polaris/commit/0f55bd5316fbd692eb29ffe23d12b29e5055c714) Thanks [@henryyi](https://github.com/henryyi)! - Added `displayActionsOnHover` prop in Navigation.Item to support displaying secondary actions on hover

### Patch Changes

- [#7854](https://github.com/Shopify/polaris/pull/7854) [`451e92ff5`](https://github.com/Shopify/polaris/commit/451e92ff5f8a8a1b8c19e8ac183d271408047d61) Thanks [@Rmnlly](https://github.com/Rmnlly)! - Add a tooltip to display the label for truncated navigation items

* [#7765](https://github.com/Shopify/polaris/pull/7765) [`f79492ffe`](https://github.com/Shopify/polaris/commit/f79492ffec540cd96d6a675229ee0ea21f908d2d) Thanks [@highfieldjames](https://github.com/highfieldjames)! - Fixed `Popover.Pane` not resizing when its content changes in Safari

- [#8043](https://github.com/Shopify/polaris/pull/8043) [`0d6213e01`](https://github.com/Shopify/polaris/commit/0d6213e01017332591beb2529750b247852cd8f4) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed storybook a11y issues

* [#8046](https://github.com/Shopify/polaris/pull/8046) [`e0981fbd0`](https://github.com/Shopify/polaris/commit/e0981fbd02dfeb547f0af4edaf63ca541847a4d3) Thanks [@Rmnlly](https://github.com/Rmnlly)! - Fix an issue where navigation shows a scrollbar when rendering some nav items

- [#8044](https://github.com/Shopify/polaris/pull/8044) [`023c7fc9b`](https://github.com/Shopify/polaris/commit/023c7fc9bbe6c723ea3e9fe1fcbe3c3ef56e07f1) Thanks [@LauraAubin](https://github.com/LauraAubin)! - Fix sortable headers being vertically misaligned with custom elements

## 10.19.0

### Minor Changes

- [#7817](https://github.com/Shopify/polaris/pull/7817) [`6c310101d`](https://github.com/Shopify/polaris/commit/6c310101d0527761881cfa84bef35e39c53489cd) Thanks [@henryyi](https://github.com/henryyi)! - Added `secondaryActions` prop in Navigation.Item to support up to two actions

### Patch Changes

- [#8018](https://github.com/Shopify/polaris/pull/8018) [`2620b0a20`](https://github.com/Shopify/polaris/commit/2620b0a20fc3e7b1228db3deb16f886e6c038087) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed modal scroll bug

## 10.18.0

### Minor Changes

- [#7992](https://github.com/Shopify/polaris/pull/7992) [`e8f74f4cd`](https://github.com/Shopify/polaris/commit/e8f74f4cdfd2b73c459aac0cd8b52bc66d812b8a) Thanks [@aveline](https://github.com/aveline)! - Added support for `outline` to `Box`

### Patch Changes

- [#7988](https://github.com/Shopify/polaris/pull/7988) [`382784f4e`](https://github.com/Shopify/polaris/commit/382784f4e2547d89d5970ade0de67196408494e7) Thanks [@kyledurand](https://github.com/kyledurand)! - Reduced spacing on ChoiceList children

* [#7899](https://github.com/Shopify/polaris/pull/7899) [`930f077eb`](https://github.com/Shopify/polaris/commit/930f077eb0ec3c20a51d240b57f150b5502aa7c5) Thanks [@jeradg](https://github.com/jeradg)! - Fixed a bug where Tooltips nested in Scrollable containers sometimes don't update their positions correctly

- [#7831](https://github.com/Shopify/polaris/pull/7831) [`47487ee0c`](https://github.com/Shopify/polaris/commit/47487ee0cfddb6e7306095959d6eea6b5c9c0132) Thanks [@acmertz](https://github.com/acmertz)! - Updated the focus helper functions to no longer treat buttons with `aria-disabled="true"` and `tabindex="-1" (but no`disabled` attribute) as focusable.

## 10.17.1

### Patch Changes

- [#7982](https://github.com/Shopify/polaris/pull/7982) [`31ae3c056`](https://github.com/Shopify/polaris/commit/31ae3c056e2b71b0cdd624354dceb6d409383ad6) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed a layout issue with Modal footer

## 10.17.0

### Minor Changes

- [#7408](https://github.com/Shopify/polaris/pull/7408) [`7ffd87f7d`](https://github.com/Shopify/polaris/commit/7ffd87f7d5e975cabb1b2e0d303295ae669cbcea) Thanks [@laurkim](https://github.com/laurkim)! - - Refactored `ChoiceList` to use primitive Layout components
  - Added support for `legend` element to `Box`
  - Added support for `fieldset` element to `AlphaStack`

* [#7978](https://github.com/Shopify/polaris/pull/7978) [`fb0ed3805`](https://github.com/Shopify/polaris/commit/fb0ed38059b6e207f195084670bf826bb9201781) Thanks [@kyledurand](https://github.com/kyledurand)! - Added `printHidden` prop to `Box`

- [#7408](https://github.com/Shopify/polaris/pull/7408) [`7ffd87f7d`](https://github.com/Shopify/polaris/commit/7ffd87f7d5e975cabb1b2e0d303295ae669cbcea) Thanks [@laurkim](https://github.com/laurkim)! - Updated `Banner` component to use new layout primitives

* [#7408](https://github.com/Shopify/polaris/pull/7408) [`7ffd87f7d`](https://github.com/Shopify/polaris/commit/7ffd87f7d5e975cabb1b2e0d303295ae669cbcea) Thanks [@laurkim](https://github.com/laurkim)! - Refactored `Modal` and its children components to use layout primitives

- [#7963](https://github.com/Shopify/polaris/pull/7963) [`f94cf1496`](https://github.com/Shopify/polaris/commit/f94cf149693eb7f1860eacda8c38cc5f5039dffe) Thanks [@aveline](https://github.com/aveline)! - Updated `AlphaStack` docs for `align` prop

* [#7408](https://github.com/Shopify/polaris/pull/7408) [`7ffd87f7d`](https://github.com/Shopify/polaris/commit/7ffd87f7d5e975cabb1b2e0d303295ae669cbcea) Thanks [@laurkim](https://github.com/laurkim)! - Refactored `AccountConnection` to use new layout primitives

- [#7915](https://github.com/Shopify/polaris/pull/7915) [`81fd3fd5b`](https://github.com/Shopify/polaris/commit/81fd3fd5b64c3ddf418601f448c0aec11163db35) Thanks [@melaniedamilig](https://github.com/melaniedamilig)! - - Added the `onAnimationEnd` prop to `Collapsible`
  - Fixed a bug in `Filters` where focus was moved to collapsed filter contents before the `Collapsible` animation ended

* [#7956](https://github.com/Shopify/polaris/pull/7956) [`30cdd2e23`](https://github.com/Shopify/polaris/commit/30cdd2e236b2482625a3913938f89a31e4cd91dc) Thanks [@aveline](https://github.com/aveline)! - Updated `Box` allowable aria roles

- [#7939](https://github.com/Shopify/polaris/pull/7939) [`8b31e3983`](https://github.com/Shopify/polaris/commit/8b31e3983ef0f9d86f193779892335512e2f73fd) Thanks [@acidio](https://github.com/acidio)! - Added support for `spacing` prop to List component allowing for a more compact list

### Patch Changes

- [#7925](https://github.com/Shopify/polaris/pull/7925) [`4e33e1ced`](https://github.com/Shopify/polaris/commit/4e33e1cedc2e13ff134c8ae28f6c5636511849ec) Thanks [@jas7457](https://github.com/jas7457)! - Updated `IndexTable` and `ProgressBar` to no longer log errors about deprecated `React.findDOMNode`

## 10.16.1

### Patch Changes

- [#7904](https://github.com/Shopify/polaris/pull/7904) [`bdc62ebbb`](https://github.com/Shopify/polaris/commit/bdc62ebbbd3cc0e3beb9b8fed7dfb0a40261884b) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed a bug where responsive props would inherit values on Box

* [#7911](https://github.com/Shopify/polaris/pull/7911) [`b26408e2f`](https://github.com/Shopify/polaris/commit/b26408e2fd4ff8b0899edb683c8dd4780538a7c4) Thanks [@bencmilton](https://github.com/bencmilton)! - Fix validateDOMNesting warning in `VideoThumbnail`

## 10.16.0

### Minor Changes

- [#7893](https://github.com/Shopify/polaris/pull/7893) [`9e617c4d9`](https://github.com/Shopify/polaris/commit/9e617c4d96bfe8324b12b3b82cbb0f8b392b2183) Thanks [@yurm04](https://github.com/yurm04)! - Updating TextField and Select border colors to be compliant with accessibility color contrast guidance

* [#7910](https://github.com/Shopify/polaris/pull/7910) [`5a4faf821`](https://github.com/Shopify/polaris/commit/5a4faf8211da8ad53848265d9208e2828d249d58) Thanks [@henryyi](https://github.com/henryyi)! - Added support for hover delay before displaying tooltip

### Patch Changes

- [#7890](https://github.com/Shopify/polaris/pull/7890) [`53d836dc2`](https://github.com/Shopify/polaris/commit/53d836dc22740d1f5ff22e9a8d3ce5604418ebeb) Thanks [@mrcthms](https://github.com/mrcthms)! - Fixed display bug with `BulkActions` when content in the table changes at the same time the bulk actions bar is visible

* [#7846](https://github.com/Shopify/polaris/pull/7846) [`65131df18`](https://github.com/Shopify/polaris/commit/65131df18033e2f218b5a5e61c4ed0123584fb71) Thanks [@sophschneider](https://github.com/sophschneider)! - - Changed border radius of `focus-ring` to use shape tokens instead of adding an extra `1px`
  - Updated `TextField` placeholder text to not change to a custom color on error
  - Delete an unused class in the `DataTable` and `IndexTable`
  - Replace some `px` values with tokens
  - Add some stylelint ignore context comments

- [#7891](https://github.com/Shopify/polaris/pull/7891) [`ff82bdb18`](https://github.com/Shopify/polaris/commit/ff82bdb1877120d1d9711889869a5119e38e3924) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated the colors of the borders of the buttons in the `BulkActions` component

## 10.15.0

### Minor Changes

- [#7842](https://github.com/Shopify/polaris/pull/7842) [`49ed527b2`](https://github.com/Shopify/polaris/commit/49ed527b28440df57dcd5e57e45f945912239c4a) Thanks [@yurm04](https://github.com/yurm04)! - Add flex-direction: column-reverse to AlphaStack

### Patch Changes

- [#7851](https://github.com/Shopify/polaris/pull/7851) [`b36f63183`](https://github.com/Shopify/polaris/commit/b36f6318318ebd7afa5441cefac613e5594a1481) Thanks [@mrcthms](https://github.com/mrcthms)! - Updated shadow and placement of the BulkActions bar for greater visibility

## 10.14.0

### Minor Changes

- [#7833](https://github.com/Shopify/polaris/pull/7833) [`e47595193`](https://github.com/Shopify/polaris/commit/e47595193aff5e3715cf26d97a2109a25ff69197) Thanks [@mrcthms](https://github.com/mrcthms)! - Separated BulkActions and SelectAllActions for new sticky bulk actions experience

* [#7812](https://github.com/Shopify/polaris/pull/7812) [`e51d2c2d2`](https://github.com/Shopify/polaris/commit/e51d2c2d2f02eef5c2832c15a17fc0ddf6873aa6) Thanks [@chazdean](https://github.com/chazdean)! - Created `Divider` component with guidance and examples

### Patch Changes

- [#7763](https://github.com/Shopify/polaris/pull/7763) [`28529baaf`](https://github.com/Shopify/polaris/commit/28529baafb92664bb04f5fd7baf1cb07a9963ff2) Thanks [@n-filatov](https://github.com/n-filatov)! - Update the Toast component to a more compact layout

- Updated dependencies [[`afe77e584`](https://github.com/Shopify/polaris/commit/afe77e5843f5b960574fe04433affc609d8687b1)]:
  - @shopify/polaris-icons@6.7.0

## 10.13.0

### Minor Changes

- [#7803](https://github.com/Shopify/polaris/pull/7803) [`23665dfd2`](https://github.com/Shopify/polaris/commit/23665dfd2b90ca7487f83560c148fe1d1f34dbe3) Thanks [@aveline](https://github.com/aveline)! - Added support for `ul` element on `Box`

* [#7799](https://github.com/Shopify/polaris/pull/7799) [`508e148f1`](https://github.com/Shopify/polaris/commit/508e148f1101f4db4c2e813bc7ca06d706358fb4) Thanks [@chazdean](https://github.com/chazdean)! - Updated `Box` to accept role attribute

- [#7746](https://github.com/Shopify/polaris/pull/7746) [`757aeebe3`](https://github.com/Shopify/polaris/commit/757aeebe39abe93c9f9995f41508e40a5fdf05da) Thanks [@laurkim](https://github.com/laurkim)! - Removed `ContentBlock` and its examples in the style guide

* [#7775](https://github.com/Shopify/polaris/pull/7775) [`300b6d4bc`](https://github.com/Shopify/polaris/commit/300b6d4bc173cc6ea3958047069194c069a78125) Thanks [@laurkim](https://github.com/laurkim)! - Removed `Tiles` and examples in style guide

- [#7788](https://github.com/Shopify/polaris/pull/7788) [`0eb43a9fd`](https://github.com/Shopify/polaris/commit/0eb43a9fddd3570baff914e0f10c93ec0406ae50) Thanks [@laurkim](https://github.com/laurkim)! - Added storybook example for `AlphaCard` with subdued section

* [#7794](https://github.com/Shopify/polaris/pull/7794) [`d43e3bc88`](https://github.com/Shopify/polaris/commit/d43e3bc8800d4b2753ce6b952f27892e1987b354) Thanks [@aveline](https://github.com/aveline)! - Added support for responsive spacing on `Bleed`

- [#7790](https://github.com/Shopify/polaris/pull/7790) [`dc4540ca7`](https://github.com/Shopify/polaris/commit/dc4540ca76fcf30d4f1129b958f40a96c4c65857) Thanks [@laurkim](https://github.com/laurkim)! - Added support for responsive padding to `AlphaCard` and updated default padding to be responsive

* [#7767](https://github.com/Shopify/polaris/pull/7767) [`cb24dbb9e`](https://github.com/Shopify/polaris/commit/cb24dbb9e0806f218a67dfec6f2cdce039dc0f7d) Thanks [@aveline](https://github.com/aveline)! - Updated `Box` and `AlphaStack` to accept aria attributes

- [#7697](https://github.com/Shopify/polaris/pull/7697) [`b7b729235`](https://github.com/Shopify/polaris/commit/b7b7292355cc90366eacb5c4ea56afd8a8759a9f) Thanks [@aveline](https://github.com/aveline)! - Added support for responsive padding to `Box`

* [#7754](https://github.com/Shopify/polaris/pull/7754) [`aee0c5c4c`](https://github.com/Shopify/polaris/commit/aee0c5c4ca8521a1d8e4c8b0f4a2a77597987d1f) Thanks [@aveline](https://github.com/aveline)! - Added support for responsive `gap` on `Inline`

- [#7619](https://github.com/Shopify/polaris/pull/7619) [`15570cc15`](https://github.com/Shopify/polaris/commit/15570cc1567ac6d7f19bb3c528de755112d3b564) Thanks [@Rmnlly](https://github.com/Rmnlly)! - Added `truncateText` prop to `Navigation.Item` to prevent text wrapping

* [#7806](https://github.com/Shopify/polaris/pull/7806) [`5f3b61d0a`](https://github.com/Shopify/polaris/commit/5f3b61d0af402bf26dd2df6fe568f0e7126b4e92) Thanks [@aveline](https://github.com/aveline)! - Added support for `li` and `tabIndex` on `Box`

### Patch Changes

- [#7768](https://github.com/Shopify/polaris/pull/7768) [`4cb1c6a8b`](https://github.com/Shopify/polaris/commit/4cb1c6a8b3271529cfca817f5135ac328185b321) Thanks [@laurkim](https://github.com/laurkim)! - Renamed storybook example names for consistency

* [#7808](https://github.com/Shopify/polaris/pull/7808) [`ed3444d77`](https://github.com/Shopify/polaris/commit/ed3444d77412602588f3bc0953d800efcc28b40e) Thanks [@laurkim](https://github.com/laurkim)! - Temporarily removed console warnings for deprecated typography components

- [#7755](https://github.com/Shopify/polaris/pull/7755) [`1e5a2b665`](https://github.com/Shopify/polaris/commit/1e5a2b665ac48ea4e2277f35dd13f1bad4ec643c) Thanks [@kyledurand](https://github.com/kyledurand)! - Added position, opacity, top, left, right, bottom, z-index to `Box`

* [#7761](https://github.com/Shopify/polaris/pull/7761) [`81f379315`](https://github.com/Shopify/polaris/commit/81f379315096f09fa3e91b1d19a0db348de08a71) Thanks [@laurkim](https://github.com/laurkim)! - Refactored `Columns` `gap` to use `getResponsiveProps` util

- [#7777](https://github.com/Shopify/polaris/pull/7777) [`cb882f460`](https://github.com/Shopify/polaris/commit/cb882f46012c1dc87fdab351777f4110608d0f23) Thanks [@laurkim](https://github.com/laurkim)! - Refactored `position` properties on `Box` to use logical property names

* [#7757](https://github.com/Shopify/polaris/pull/7757) [`f9e1985c9`](https://github.com/Shopify/polaris/commit/f9e1985c91e111bad0a1f35551c0c6293b16f132) Thanks [@aveline](https://github.com/aveline)! - Fixed typo in `responsive-props` mixin. Added jsdoc examples for responsive spacing props in `Box`.

- [#7764](https://github.com/Shopify/polaris/pull/7764) [`9ab44a69f`](https://github.com/Shopify/polaris/commit/9ab44a69f96b9454803a2e22c70e0a5c8b0cfa85) Thanks [@laurkim](https://github.com/laurkim)! - Cleaned up prop descriptions and added missing default values for `Box`, `AlphaCard`, `AlphaStack`, `Columns`, `Tiles`, `Bleed`, and `Inline`

* [#7769](https://github.com/Shopify/polaris/pull/7769) [`a9e018ec4`](https://github.com/Shopify/polaris/commit/a9e018ec46e9515ffc6ffef99acd6c1ca33e9d7e) Thanks [@nabihaalikhan](https://github.com/nabihaalikhan)! - Updated badge spacing to right align with secondary action icons

- [#7748](https://github.com/Shopify/polaris/pull/7748) [`ed3da747e`](https://github.com/Shopify/polaris/commit/ed3da747e1d70dfbcdfb907b13230f1d174cb0d1) Thanks [@laurkim](https://github.com/laurkim)! - Renamed `spacing` prop to `gap` on `Inline`, `AlphaStack`, `Columns`, and `Tiles`

* [#7732](https://github.com/Shopify/polaris/pull/7732) [`d08e1c30c`](https://github.com/Shopify/polaris/commit/d08e1c30c63c50f050bb57bff2a545baa8470234) Thanks [@kyledurand](https://github.com/kyledurand)! - Removed `spacing` prop from Bleed component

- [#7779](https://github.com/Shopify/polaris/pull/7779) [`7c0a4b6a9`](https://github.com/Shopify/polaris/commit/7c0a4b6a960fd9279d969ad9e3dd2dad6dffe311) Thanks [@laurkim](https://github.com/laurkim)! - Updated `Bleed` props to use logical properties, fixed reversed logic for horizontal/vertical bleed, and updated style guide

* [#7793](https://github.com/Shopify/polaris/pull/7793) [`824aef031`](https://github.com/Shopify/polaris/commit/824aef0310737ef5ca1cc2ee462171c13a9dacc3) Thanks [@Rmnlly](https://github.com/Rmnlly)! - Extends Navigation Item highlight to full width to cover secondary actions

* Updated dependencies [[`3bc63f7f9`](https://github.com/Shopify/polaris/commit/3bc63f7f94f7d66155c0f071833a858756621b20), [`d748c20ef`](https://github.com/Shopify/polaris/commit/d748c20ef54e7e07e519b4d94ac50ebefca04b99), [`6b989379e`](https://github.com/Shopify/polaris/commit/6b989379e82e5bcea973ff1b5c1b1e105ac90608)]:
  - @shopify/polaris-icons@6.6.0

## 10.12.0

### Minor Changes

- [#7684](https://github.com/Shopify/polaris/pull/7684) [`2e5f8348b`](https://github.com/Shopify/polaris/commit/2e5f8348bd8be1de0c8294453da8cfd918e1e034) Thanks [@ananyaneogi](https://github.com/ananyaneogi)! - Update the `CalloutCard` `title` prop to accept a ReactNode type

* [#7588](https://github.com/Shopify/polaris/pull/7588) [`c1c8f73b0`](https://github.com/Shopify/polaris/commit/c1c8f73b0f0bc7ab1e2be1ad824a3aa2dded3326) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - Added optional `captureOverscroll` prop to `Popover`

- [#6986](https://github.com/Shopify/polaris/pull/6986) [`270887fcf`](https://github.com/Shopify/polaris/commit/270887fcfeff76ab7d70fb49c5f6b2637b5d20ba) Thanks [@danielle-dsouza](https://github.com/danielle-dsouza)! - Clicking on the modal backdrop triggers the pressed state of the modal's close button

### Patch Changes

- [#7693](https://github.com/Shopify/polaris/pull/7693) [`bdf6fd31d`](https://github.com/Shopify/polaris/commit/bdf6fd31dba47da980ce1c133d9adf61a39bdf12) Thanks [@philschoefer](https://github.com/philschoefer)! - Fixed a bug where `DataTable` summary row would not properly inherit type defined in `columnContentTypes` prop

* [#7578](https://github.com/Shopify/polaris/pull/7578) [`217f2f8ed`](https://github.com/Shopify/polaris/commit/217f2f8edd6e0c8ced5d697739efd48a5fb78fb1) Thanks [@haskelash-shopify](https://github.com/haskelash-shopify)! - Hide bulk actions popup when all items are deselected.

- [#7710](https://github.com/Shopify/polaris/pull/7710) [`6b915e01e`](https://github.com/Shopify/polaris/commit/6b915e01ea89a6213804e581478222c04579175d) Thanks [@laurkim](https://github.com/laurkim)! - Fixed visual spacing regressions on `ActionList` and `Modal.Header`

## 10.11.0

### Minor Changes

- [#7572](https://github.com/Shopify/polaris/pull/7572) [`20c8cad81`](https://github.com/Shopify/polaris/commit/20c8cad814725c29d50afc74dc447d3904e55811) Thanks [@laurkim](https://github.com/laurkim)! - Replaced usage of text components in component stories with `Text` component

* [#7621](https://github.com/Shopify/polaris/pull/7621) [`6e9edd3b5`](https://github.com/Shopify/polaris/commit/6e9edd3b58875ced12d0f27772b825034d83bf6a) Thanks [@aveline](https://github.com/aveline)! - - Added border width prop to `Box`
  - Exported color token subset alias types from tokens package and remove from `Box`

- [#7068](https://github.com/Shopify/polaris/pull/7068) [`ccdcea22e`](https://github.com/Shopify/polaris/commit/ccdcea22ede61858c47a5f4f5f4fde1727f19177) Thanks [@laurkim](https://github.com/laurkim)! - Deprecated `DisplayText`, `Heading`, `Subheading`, `Caption`, `TextStyle`, and `VisuallyHidden` components

### Patch Changes

- [#7644](https://github.com/Shopify/polaris/pull/7644) [`b3e73ee04`](https://github.com/Shopify/polaris/commit/b3e73ee045ba5a90fbc930074b4e8255d079b0d5) Thanks [@kyledurand](https://github.com/kyledurand)! - Added horizontal spacing defaults to `Bleed`

* [#7530](https://github.com/Shopify/polaris/pull/7530) [`79d92a820`](https://github.com/Shopify/polaris/commit/79d92a820864fea4f3f9c64930e820a826a1986e) Thanks [@samrose3](https://github.com/samrose3)! - Replaced all typography components with the new `Text` component.
  Added support for `text-inverse` color type on `Text`.
  Removed references to the following mixins to use the new `Text` or tokens directly in classes: `text-style-body`, `text-style-heading`, `text-style-subheading`, `text-style-caption`, `text-style-button`, `text-style-button-large`, `text-emphasis-subdued`, `text-emphasis-strong`, `nav-item-text-attributes`.

- [#7577](https://github.com/Shopify/polaris/pull/7577) [`db951f855`](https://github.com/Shopify/polaris/commit/db951f8555f4cfbd01306f617c11682ee441f381) Thanks [@RickyMarou](https://github.com/RickyMarou)! - Page component: display subtitle even when it's the only header prop set

* [#7633](https://github.com/Shopify/polaris/pull/7633) [`1364be7f1`](https://github.com/Shopify/polaris/commit/1364be7f1a9e3983c4ce2ed66a247c536c7b01c1) Thanks [@kyledurand](https://github.com/kyledurand)! - Renamed `alignY` prop to `alignBlock` on `Inline`
  Added more flex properties to `align` on `Inline`

- [#7443](https://github.com/Shopify/polaris/pull/7443) [`7a6fb7c1c`](https://github.com/Shopify/polaris/commit/7a6fb7c1c58ade9b7e53c3318cd635f1ca05c82e) Thanks [@iAmNathanJ](https://github.com/iAmNathanJ)! - Improve performance of the Scrollable component with React 18

* [#7625](https://github.com/Shopify/polaris/pull/7625) [`9f8b651dd`](https://github.com/Shopify/polaris/commit/9f8b651dd694cf6c384d8580d6ad62d437e49c93) Thanks [@kyledurand](https://github.com/kyledurand)! - Removed wrap children with div from Inline component

- [#7593](https://github.com/Shopify/polaris/pull/7593) [`addd6bcdd`](https://github.com/Shopify/polaris/commit/addd6bcdd8735dc0cde9d5cd047912ed3568dc8f) Thanks [@kyledurand](https://github.com/kyledurand)! - Improved comments across layout components, changed default spacing of Inline component to match AlphaStack

* [#7600](https://github.com/Shopify/polaris/pull/7600) [`f006509be`](https://github.com/Shopify/polaris/commit/f006509be03af57615464cab91267002e2ee7b15) Thanks [@billycai](https://github.com/billycai)! - Add spacing between title and metadata for Page component

- [#7563](https://github.com/Shopify/polaris/pull/7563) [`a9051d678`](https://github.com/Shopify/polaris/commit/a9051d678f264ef38c8904ed8c997085db7a841f) Thanks [@chazdean](https://github.com/chazdean)! - Updated `Inline` component docs and default prop values

* [#7635](https://github.com/Shopify/polaris/pull/7635) [`3cb5377a6`](https://github.com/Shopify/polaris/commit/3cb5377a6da74778c382e71b1461baad667f1e46) Thanks [@iAmNathanJ](https://github.com/iAmNathanJ)! - Fixed Scrollable component to match existing onScrolledToBottom logic

* Updated dependencies [[`432bdd5fe`](https://github.com/Shopify/polaris/commit/432bdd5fe7f7c3e6c0e570b985b26debbf953433), [`6e9edd3b5`](https://github.com/Shopify/polaris/commit/6e9edd3b58875ced12d0f27772b825034d83bf6a), [`35be8a003`](https://github.com/Shopify/polaris/commit/35be8a0035cfb50fc30bea2dbbf2718cd99fdb09)]:
  - @shopify/polaris-icons@6.5.0
  - @shopify/polaris-tokens@6.3.0

## 10.10.1

### Patch Changes

- [#7561](https://github.com/Shopify/polaris/pull/7561) [`fc78fcc48`](https://github.com/Shopify/polaris/commit/fc78fcc48d075db1240a17910ada9f61599e51fb) Thanks [@kyledurand](https://github.com/kyledurand)! - Fix typo in box property, remove PropsWithChildren

## 10.10.0

### Minor Changes

- [#7538](https://github.com/Shopify/polaris/pull/7538) [`a595fa3ca`](https://github.com/Shopify/polaris/commit/a595fa3cad8756242ec8fba1bf125c1579a2a761) Thanks [@laurkim](https://github.com/laurkim)! - Added responsive styling to `Text` for `heading2xl`, `heading3xl`, and `heading4xl` variants

* [#7546](https://github.com/Shopify/polaris/pull/7546) [`e5f84f0eb`](https://github.com/Shopify/polaris/commit/e5f84f0ebd4da3f02217ab049c3570224d0ab26b) Thanks [@laurkim](https://github.com/laurkim)! - Added responsive styling to the `Text` `headingXl` and `headingLg` variants

### Patch Changes

- [#7534](https://github.com/Shopify/polaris/pull/7534) [`e53f7901c`](https://github.com/Shopify/polaris/commit/e53f7901c23e86a255d8e051a38158645753472c) Thanks [@kyledurand](https://github.com/kyledurand)! - Update box to use logical properties, condense single value into single custom property

## 10.9.1

### Patch Changes

- [#7533](https://github.com/Shopify/polaris/pull/7533) [`f6568c3c1`](https://github.com/Shopify/polaris/commit/f6568c3c1f82cda953213eae4ea1e7f06b3a101c) Thanks [@laurkim](https://github.com/laurkim)! - Fixed logic to trigger `TextField` focus on click when used with `Combobox`

## 10.9.0

### Minor Changes

- [#7429](https://github.com/Shopify/polaris/pull/7429) [`e87330f5b`](https://github.com/Shopify/polaris/commit/e87330f5b8e94e8f11f21ec7e44cdab6a73796d4) Thanks [@aveline](https://github.com/aveline)! - Update `AlphaStack` to be polymorphic, add list reset styles and allow spacing to change based on breakpoint

* [#7450](https://github.com/Shopify/polaris/pull/7450) [`74237ebc5`](https://github.com/Shopify/polaris/commit/74237ebc5b6d2be84fde128e6947e468d9cc2624) Thanks [@laurkim](https://github.com/laurkim)! - Added support for `minHeight` and `minWidth` on `Box`

- [#7432](https://github.com/Shopify/polaris/pull/7432) [`85c022033`](https://github.com/Shopify/polaris/commit/85c02203356ac90af463c93bd054ec8932c8d82f) Thanks [@laurkim](https://github.com/laurkim)! - Added support for `overflowX`, `overflowY`, and `width` props to `Box`

* [#7491](https://github.com/Shopify/polaris/pull/7491) [`a9eff60e1`](https://github.com/Shopify/polaris/commit/a9eff60e1ac1c9079123ae1951b300f8cfc07cd5) Thanks [@laurkim](https://github.com/laurkim)! - Added support for `section` element types to `Box`

- [#7389](https://github.com/Shopify/polaris/pull/7389) [`4f184c658`](https://github.com/Shopify/polaris/commit/4f184c658e2bcbacde41bc32b17be3e10998aba7) Thanks [@aveline](https://github.com/aveline)! - Added `breakWord` prop to `Text`

* [#7430](https://github.com/Shopify/polaris/pull/7430) [`87981ac01`](https://github.com/Shopify/polaris/commit/87981ac01055b913223bb16ca1db1a109419163f) Thanks [@aveline](https://github.com/aveline)! - Added `legend` as supported element for `Text` component

- [#7438](https://github.com/Shopify/polaris/pull/7438) [`4b4411930`](https://github.com/Shopify/polaris/commit/4b4411930587535bb4bb85e4b8e2eca13949f8b6) Thanks [@aveline](https://github.com/aveline)! - Simplify `AlphaCard` by removing `hasBorderRadius` prop and `shadow` prop

### Patch Changes

- [#7405](https://github.com/Shopify/polaris/pull/7405) [`ea2615881`](https://github.com/Shopify/polaris/commit/ea2615881194c2b8d77df528a5b16bf9c9cad485) Thanks [@laurkim](https://github.com/laurkim)! - Fixed how optional `id` prop rendered in `Text`

* [#7434](https://github.com/Shopify/polaris/pull/7434) [`62288755a`](https://github.com/Shopify/polaris/commit/62288755a3ab5301a4b78be38b92f4775bd188aa) Thanks [@laurkim](https://github.com/laurkim)! - Fixed reference to `width` custom property in `Box`

- [#7396](https://github.com/Shopify/polaris/pull/7396) [`3be27bae8`](https://github.com/Shopify/polaris/commit/3be27bae839406e399d8e476d4d30b1f1791d96f) Thanks [@laurkim](https://github.com/laurkim)! - Updated alias and scale types in `Box` with type tests to check they exist in our token groups.
  Updated `get-props` script to parse utility types with unions.

* [#7435](https://github.com/Shopify/polaris/pull/7435) [`4097d539b`](https://github.com/Shopify/polaris/commit/4097d539bcfe61b404d2123190b3756f7968edfb) Thanks [@kyledurand](https://github.com/kyledurand)! - Cleaned up styles on Box

- [#7410](https://github.com/Shopify/polaris/pull/7410) [`13546e344`](https://github.com/Shopify/polaris/commit/13546e3444bb75c3e6494503eb44adb32f5c5eb4) Thanks [@kyledurand](https://github.com/kyledurand)! - Apply default value to Columns

* [#7483](https://github.com/Shopify/polaris/pull/7483) [`7a78e07bf`](https://github.com/Shopify/polaris/commit/7a78e07bf1abb271b1f6bbd10042c24b6caddd85) Thanks [@laurkim](https://github.com/laurkim)! - Fixed missing `children` prop in `Columns` prop type

- [#7492](https://github.com/Shopify/polaris/pull/7492) [`612e02786`](https://github.com/Shopify/polaris/commit/612e02786692ad6dd7bb009f5b3fbd2ea64a2859) Thanks [@henryyi](https://github.com/henryyi)! - Only apply scroll-lock with scrollbar when body is scrollable

* [#7481](https://github.com/Shopify/polaris/pull/7481) [`4f5f6cf50`](https://github.com/Shopify/polaris/commit/4f5f6cf5014096130d9baf8867110c089850df7b) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed horizontal scroll bug in Scrollable

- [#7471](https://github.com/Shopify/polaris/pull/7471) [`2f16b2310`](https://github.com/Shopify/polaris/commit/2f16b23108d3c89a368f340a8022d121a7020ceb) Thanks [@kyledurand](https://github.com/kyledurand)! - Added viewport addon to storybook and matched values to our breakpoints

* [#7433](https://github.com/Shopify/polaris/pull/7433) [`90487fd70`](https://github.com/Shopify/polaris/commit/90487fd7010966df8af768e6b1885dd00f630c2d) Thanks [@kellymiller-shop](https://github.com/kellymiller-shop)! - fixed heading offset on IndexTable

- [#7453](https://github.com/Shopify/polaris/pull/7453) [`3191d13c0`](https://github.com/Shopify/polaris/commit/3191d13c09aa5136aaa56f574b884dc80e2dd3c9) Thanks [@AndrewMusgrave](https://github.com/AndrewMusgrave)! - Fixed IndexTable not rendering bulk actions on resize

* [#7395](https://github.com/Shopify/polaris/pull/7395) [`89fea23f7`](https://github.com/Shopify/polaris/commit/89fea23f79eca98f0662bcbc7d839db085cca9b5) Thanks [@AndrewMusgrave](https://github.com/AndrewMusgrave)! - Fixed scrolling performance for IndexTable on safari

- [#7442](https://github.com/Shopify/polaris/pull/7442) [`77057d5b6`](https://github.com/Shopify/polaris/commit/77057d5b682b6a5e30d13ebed67ceddecd5dde44) Thanks [@kyledurand](https://github.com/kyledurand)! - Fix SkeletonPage actions layout

## 10.8.0

### Minor Changes

- [#7364](https://github.com/Shopify/polaris/pull/7364) [`e4b2c36d8`](https://github.com/Shopify/polaris/commit/e4b2c36d8ea8990c2f7e7229ad2529cc0391cf82) Thanks [@Bringer128](https://github.com/Bringer128)! - Deprecated Collapsible preventMeasuringOnChildrenUpdate.
  Fixed bug where Collapsible would get stuck in animating state when duration is 0.
  Add support for intentionally disabling the transition in Collapsible.

### Patch Changes

- [#7363](https://github.com/Shopify/polaris/pull/7363) [`8a6c323e2`](https://github.com/Shopify/polaris/commit/8a6c323e2965e4db82fe5e7a398d771f9f126a0e) Thanks [@aveline](https://github.com/aveline)! - Added `id` prop to `Text` and `Box`

* [#7348](https://github.com/Shopify/polaris/pull/7348) [`ea2a45bbb`](https://github.com/Shopify/polaris/commit/ea2a45bbb9d706fc44100366c7e389f2d25abcf4) Thanks [@aveline](https://github.com/aveline)! - Added `setMediaWidth` breakpoints test utility

- [#7388](https://github.com/Shopify/polaris/pull/7388) [`5bc885765`](https://github.com/Shopify/polaris/commit/5bc8857654475fe0006520d1d448170f7a51976b) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed a re-render bug with Page Actions

- Updated dependencies [[`c3f427c17`](https://github.com/Shopify/polaris/commit/c3f427c17d268f406618aaddb684ba12c3fa15d1)]:
  - @shopify/polaris-tokens@6.2.1

## 10.7.0

### Minor Changes

- [#6743](https://github.com/Shopify/polaris/pull/6743) [`8d440aa6b`](https://github.com/Shopify/polaris/commit/8d440aa6b93f8f4c957181b6167a79d6c6beea2d) Thanks [@ryanwilsonperkin](https://github.com/ryanwilsonperkin)! - Add support for React 18

* [#7359](https://github.com/Shopify/polaris/pull/7359) [`6be4436d0`](https://github.com/Shopify/polaris/commit/6be4436d0fa2e37a0e93aad99a436d286f976051) Thanks [@clarkjennings](https://github.com/clarkjennings)! - - Updated font size for square `Avatar` with 3-letter initials

## 10.6.0

### Minor Changes

- [#7360](https://github.com/Shopify/polaris/pull/7360) [`f7140123d`](https://github.com/Shopify/polaris/commit/f7140123dce74be7d79b2ae57bbfda2f96363980) Thanks [@mrcthms](https://github.com/mrcthms)! - Update `IndexTable` in sortable mode to fix visual bugs and include label Tooltips

### Patch Changes

- [#7361](https://github.com/Shopify/polaris/pull/7361) [`b1b576403`](https://github.com/Shopify/polaris/commit/b1b5764035c6f138e24ad42c9c033c7ca7369a93) Thanks [@kyledurand](https://github.com/kyledurand)! - Use state callback in page actions

* [#7319](https://github.com/Shopify/polaris/pull/7319) [`4b95fdc64`](https://github.com/Shopify/polaris/commit/4b95fdc64b4d30a39333e09623d347735636e771) Thanks [@sophschneider](https://github.com/sophschneider)! - Update the `VideoThumbnail` play button user experience

## 10.5.0

### Minor Changes

- [#7056](https://github.com/Shopify/polaris/pull/7056) [`0be40aa94`](https://github.com/Shopify/polaris/commit/0be40aa94be8c95f96f0835b4df7f91f6da0b5c2) Thanks [@laurkim](https://github.com/laurkim)! - Added alpha `Inline` component

* [#7056](https://github.com/Shopify/polaris/pull/7056) [`0be40aa94`](https://github.com/Shopify/polaris/commit/0be40aa94be8c95f96f0835b4df7f91f6da0b5c2) Thanks [@laurkim](https://github.com/laurkim)! - Added `AlphaStack` component

- [#7056](https://github.com/Shopify/polaris/pull/7056) [`0be40aa94`](https://github.com/Shopify/polaris/commit/0be40aa94be8c95f96f0835b4df7f91f6da0b5c2) Thanks [@laurkim](https://github.com/laurkim)! - Added `Columns` component

* [#7056](https://github.com/Shopify/polaris/pull/7056) [`0be40aa94`](https://github.com/Shopify/polaris/commit/0be40aa94be8c95f96f0835b4df7f91f6da0b5c2) Thanks [@laurkim](https://github.com/laurkim)! - Added `Box` component

- [#7056](https://github.com/Shopify/polaris/pull/7056) [`0be40aa94`](https://github.com/Shopify/polaris/commit/0be40aa94be8c95f96f0835b4df7f91f6da0b5c2) Thanks [@laurkim](https://github.com/laurkim)! - Added `AlphaCard` component

* [#7056](https://github.com/Shopify/polaris/pull/7056) [`0be40aa94`](https://github.com/Shopify/polaris/commit/0be40aa94be8c95f96f0835b4df7f91f6da0b5c2) Thanks [@laurkim](https://github.com/laurkim)! - Added `fullWidth` prop to `AlphaStack` and updated styleguide docs

- [#7056](https://github.com/Shopify/polaris/pull/7056) [`0be40aa94`](https://github.com/Shopify/polaris/commit/0be40aa94be8c95f96f0835b4df7f91f6da0b5c2) Thanks [@laurkim](https://github.com/laurkim)! - Added alpha `ContentBlock` component

### Patch Changes

- [#7056](https://github.com/Shopify/polaris/pull/7056) [`0be40aa94`](https://github.com/Shopify/polaris/commit/0be40aa94be8c95f96f0835b4df7f91f6da0b5c2) Thanks [@laurkim](https://github.com/laurkim)! - Updated `AlphaCard` border radius to a boolean

* [#7056](https://github.com/Shopify/polaris/pull/7056) [`0be40aa94`](https://github.com/Shopify/polaris/commit/0be40aa94be8c95f96f0835b4df7f91f6da0b5c2) Thanks [@laurkim](https://github.com/laurkim)! - Renamed `Columns` spacing

- [#7056](https://github.com/Shopify/polaris/pull/7056) [`0be40aa94`](https://github.com/Shopify/polaris/commit/0be40aa94be8c95f96f0835b4df7f91f6da0b5c2) Thanks [@laurkim](https://github.com/laurkim)! - Renamed `background` prop on `AlphaCard` for consistency

* [#7056](https://github.com/Shopify/polaris/pull/7056) [`0be40aa94`](https://github.com/Shopify/polaris/commit/0be40aa94be8c95f96f0835b4df7f91f6da0b5c2) Thanks [@laurkim](https://github.com/laurkim)! - Rename `Tiles` component

- [#7056](https://github.com/Shopify/polaris/pull/7056) [`0be40aa94`](https://github.com/Shopify/polaris/commit/0be40aa94be8c95f96f0835b4df7f91f6da0b5c2) Thanks [@laurkim](https://github.com/laurkim)! - Renamed `AlphaCard` `shadow` prop

* [#7056](https://github.com/Shopify/polaris/pull/7056) [`0be40aa94`](https://github.com/Shopify/polaris/commit/0be40aa94be8c95f96f0835b4df7f91f6da0b5c2) Thanks [@laurkim](https://github.com/laurkim)! - Refactored token types in primitive Layout components
  Exposed `DepthShadowAlias` type

- [#7291](https://github.com/Shopify/polaris/pull/7291) [`3941f5281`](https://github.com/Shopify/polaris/commit/3941f5281f8bf41ff09c3e6e0dedf49eb219310f) Thanks [@atesgoral](https://github.com/atesgoral)! - Improve default style class selection of `Avatar` by using the entire name instead of just the first letter

* [#7332](https://github.com/Shopify/polaris/pull/7332) [`2ee5c5d74`](https://github.com/Shopify/polaris/commit/2ee5c5d741be739b5f00cda626852c3922aa07ff) Thanks [@mattkubej](https://github.com/mattkubej)! - `PopoverOverlay` closes focused `Popover` when pressing `Escape`

* Updated dependencies [[`0be40aa94`](https://github.com/Shopify/polaris/commit/0be40aa94be8c95f96f0835b4df7f91f6da0b5c2)]:
  - @shopify/polaris-tokens@6.2.0

## 10.4.1

### Patch Changes

- Updated dependencies [[`a7d9cad7a`](https://github.com/Shopify/polaris/commit/a7d9cad7aa24ea251e42be919cbfcae16676587f)]:
  - @shopify/polaris-icons@6.4.0

## 10.4.0

### Minor Changes

- [#7282](https://github.com/Shopify/polaris/pull/7282) [`b34ac1859`](https://github.com/Shopify/polaris/commit/b34ac185973cae94f8e68dc2fc621e3e4679dbaa) Thanks [@itwasmattgregg](https://github.com/itwasmattgregg)! - Added `onClose` and `onOpen` callbacks to `Tooltip`

### Patch Changes

- [#7239](https://github.com/Shopify/polaris/pull/7239) [`8626d6a1b`](https://github.com/Shopify/polaris/commit/8626d6a1b8a2ab50e6aa6074037144d11819734b) Thanks [@BPScott](https://github.com/BPScott)! - Increase `$p-breakpoint-*-{down,only}` breakpoint max-width values by 0.01px so that they are representable in fewer digits of precision when expressed as `em`s. This ensures they are representable without rounding when using `node-sass`'s default precision. E.g. `$p-breakpoints-md-down`changes from `max-width: 47.996875em` to `max-width: 47.9975em`.

* [#7122](https://github.com/Shopify/polaris/pull/7122) [`9b67d1533`](https://github.com/Shopify/polaris/commit/9b67d15332b1f45faa94f9d309ed6fd46f4419a1) Thanks [@sylvhama](https://github.com/sylvhama)! - Refactor IndexTable heading props to allow ReactNode as a title

* Updated dependencies [[`3fd9f6415`](https://github.com/Shopify/polaris/commit/3fd9f6415c0d7e3721eb7462c6777d4816437345), [`8626d6a1b`](https://github.com/Shopify/polaris/commit/8626d6a1b8a2ab50e6aa6074037144d11819734b)]:
  - @shopify/polaris-tokens@6.1.0

## 10.3.3

### Patch Changes

- [#7226](https://github.com/Shopify/polaris/pull/7226) [`2b85940ec`](https://github.com/Shopify/polaris/commit/2b85940ecdb497faade08b4605617876c95cbf92) Thanks [@rjur11](https://github.com/rjur11)! - Update rangeslider height to 44px in small screens

* [#7252](https://github.com/Shopify/polaris/pull/7252) [`a09153335`](https://github.com/Shopify/polaris/commit/a09153335a71de33a48817e605fb9a06c411ce2f) Thanks [@rjur11](https://github.com/rjur11)! - Increase taptarget height and width for choice in choicelist on small screens

- [#7252](https://github.com/Shopify/polaris/pull/7252) [`a09153335`](https://github.com/Shopify/polaris/commit/a09153335a71de33a48817e605fb9a06c411ce2f) Thanks [@rjur11](https://github.com/rjur11)! - Adding 100% width to choicelist items on small screens for increased accessibility

- Updated dependencies [[`a55193a8a`](https://github.com/Shopify/polaris/commit/a55193a8ad0de90a40de25b5d4909c1692861bc9)]:
  - @shopify/polaris-tokens@6.0.1

## 10.3.2

### Patch Changes

- [#7243](https://github.com/Shopify/polaris/pull/7243) [`29043ca5e`](https://github.com/Shopify/polaris/commit/29043ca5e669150477a78a78a4f5d88823475649) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - Fix `IndexTable` Safari rendering issue

- Updated dependencies [[`17c4fe2ac`](https://github.com/Shopify/polaris/commit/17c4fe2acc0bcd493d0febec06102173cc759aff)]:
  - @shopify/polaris-icons@6.3.0

## 10.3.1

### Patch Changes

- [#7130](https://github.com/Shopify/polaris/pull/7130) [`c09994418`](https://github.com/Shopify/polaris/commit/c09994418ff097115c134a0c0230e3f54b62f9cd) Thanks [@FCalabria](https://github.com/FCalabria)! - Fix long content on index table's sticky columns hiding the rest of the table

## 10.3.0

### Minor Changes

- [#7181](https://github.com/Shopify/polaris/pull/7181) [`577796691`](https://github.com/Shopify/polaris/commit/57779669169f503cdceaedbb9c0ca269cef4d9b2) Thanks [@laurkim](https://github.com/laurkim)! - Added stories for `Text` component

* [#7140](https://github.com/Shopify/polaris/pull/7140) [`9eff83ea6`](https://github.com/Shopify/polaris/commit/9eff83ea6b3011cb45c777b0f9e48cb9a82cd210) Thanks [@renerbaffa](https://github.com/renerbaffa)! - Export hexToRgb from color-transformers

- [#7050](https://github.com/Shopify/polaris/pull/7050) [`0ccc981fc`](https://github.com/Shopify/polaris/commit/0ccc981fc39506e07222e4106aaed1b5bb765f85) Thanks [@gwyneplaine](https://github.com/gwyneplaine)! - Exposes useBreakpoint as a named export from @shopify/polaris-react

* [#7178](https://github.com/Shopify/polaris/pull/7178) [`2ce4503f5`](https://github.com/Shopify/polaris/commit/2ce4503f5f886f24686c6f1ee0b79edaa658e174) Thanks [@IrinaLipovaya](https://github.com/IrinaLipovaya)! - Add `ariaLabelledBy` prop to `ProgressBar` component to allow ids of description elements for accessibility

### Patch Changes

- [#7132](https://github.com/Shopify/polaris/pull/7132) [`c31402639`](https://github.com/Shopify/polaris/commit/c3140263993046e68d8c1c51cb14d42c1a40e170) Thanks [@martenbjork](https://github.com/martenbjork)! - Clarified the naming of SkeletonTabs props (from "Props" to "SkeletonTabsProps")

* [#7141](https://github.com/Shopify/polaris/pull/7141) [`8e16d15d1`](https://github.com/Shopify/polaris/commit/8e16d15d1249591e9e854ae294ec8ce8ab3e3594) Thanks [@renerbaffa](https://github.com/renerbaffa)! - Added an example of Hex code TextField to ColorPicker

- [#7179](https://github.com/Shopify/polaris/pull/7179) [`3911a45a8`](https://github.com/Shopify/polaris/commit/3911a45a8dc3010d31f5bec6208e58ab4db88bd7) Thanks [@laurkim](https://github.com/laurkim)! - Updated `Text` component to use `semibold` for `headingXs` variant

* [#7111](https://github.com/Shopify/polaris/pull/7111) [`69faaa41d`](https://github.com/Shopify/polaris/commit/69faaa41db4af147b1e4e3de1c0e4b683143d64b) Thanks [@nneubarth](https://github.com/nneubarth)! - Fixed bug in which deleted elements or clicks inside other portal-based elements were inappropriately closing popovers

* Updated dependencies [[`9d6497970`](https://github.com/Shopify/polaris/commit/9d64979708a2e961a537e5b152ad028e6aa52795)]:
  - @shopify/polaris-icons@6.2.0

## 10.2.0

### Minor Changes

- [#7064](https://github.com/Shopify/polaris/pull/7064) [`e2c7d6676`](https://github.com/Shopify/polaris/commit/e2c7d66760b7aef20dda18153e23222d58c61fcf) Thanks [@KaunainKarmali](https://github.com/KaunainKarmali)! - - Improved the `useIndexResourceState` hook by exposing a new function called `removeSelectedResources`
  - The `removeSelectedResources` function supports removing one or more items from the `selectedResources` state

## 10.1.2

### Patch Changes

- Updated dependencies [[`811af5907`](https://github.com/Shopify/polaris/commit/811af590780f4546b4add345205382f87b429569)]:
  - @shopify/polaris-icons@6.1.0

## 10.1.1

### Patch Changes

- [#6840](https://github.com/Shopify/polaris/pull/6840) [`90f325460`](https://github.com/Shopify/polaris/commit/90f32546022103e2bba1a4659306152d7facc149) Thanks [@AndrewMusgrave](https://github.com/AndrewMusgrave)! - Removed additional reflows from IndexTable

## 10.1.0

### Minor Changes

- [#6976](https://github.com/Shopify/polaris/pull/6976) [`ae7345f0c`](https://github.com/Shopify/polaris/commit/ae7345f0cc71cfe0290302667722dd758b0891bc) Thanks [@tylernoseworthy](https://github.com/tylernoseworthy)! - - Added a `fixedFirstColumns` prop to `DataTable` so that multiple columns can be fixed
  - Deprecated the `DataTable` `fixedFirstColumn` prop

* [#7043](https://github.com/Shopify/polaris/pull/7043) [`60086a61f`](https://github.com/Shopify/polaris/commit/60086a61ff5906d998ff23fbe1090ecab49cb0e2) Thanks [@philschoefer](https://github.com/philschoefer)! - Updates to `DataTable`

  - Fixed `DataTable` cell content not wrapping when the `truncate` prop is `false`
  - Added support for setting the `DataTable` `truncate` prop without having to set the `fixedFirstColumns` prop

### Patch Changes

- [#7022](https://github.com/Shopify/polaris/pull/7022) [`716956df6`](https://github.com/Shopify/polaris/commit/716956df6939d86204342fb7107c81333f570517) Thanks [@QuintonC](https://github.com/QuintonC)! - Fixed visual bug for avatar shape prop

* [#7038](https://github.com/Shopify/polaris/pull/7038) [`d1a33d8b0`](https://github.com/Shopify/polaris/commit/d1a33d8b0194858a0405cbb19fa7d35e897ffa7c) Thanks [@kyledurand](https://github.com/kyledurand)! - Applied default background color to image avatar

- [#6993](https://github.com/Shopify/polaris/pull/6993) [`fa840e4a9`](https://github.com/Shopify/polaris/commit/fa840e4a9dc47a9afdeca0c5f4191294183a8093) Thanks [@kyledurand](https://github.com/kyledurand)! - Removed deprecation from Layout.AnnotatedSection

* [#7003](https://github.com/Shopify/polaris/pull/7003) [`2b5f7d0fc`](https://github.com/Shopify/polaris/commit/2b5f7d0fc57149f27fe28d31b3618d98b057923c) Thanks [@mrcthms](https://github.com/mrcthms)! - Fix visual bug for sortable, selectable index table headings

* Updated dependencies [[`bd00ef4ed`](https://github.com/Shopify/polaris/commit/bd00ef4ed5307aa07bb7fbd00ff4328179b859e1), [`1e0645f33`](https://github.com/Shopify/polaris/commit/1e0645f334e16cff5051f321a822324dd70e16c1), [`635bcfeb7`](https://github.com/Shopify/polaris/commit/635bcfeb710504847f46f10c68722bbc7e452bde)]:
  - @shopify/polaris-icons@6.0.0

## 10.0.0

### Major Changes

- [#6675](https://github.com/Shopify/polaris/pull/6675) [`2b14c0b60`](https://github.com/Shopify/polaris/commit/2b14c0b60097f75d21df7eaa744dfaf84f8f53f7) Thanks [@samrose3](https://github.com/samrose3)! - Removed the `CustomProperties` component. Polaris CSS custom properties are now injected by the `AppProvider`.

* [#6675](https://github.com/Shopify/polaris/pull/6675) [`2b14c0b60`](https://github.com/Shopify/polaris/commit/2b14c0b60097f75d21df7eaa744dfaf84f8f53f7) Thanks [@samrose3](https://github.com/samrose3)! - Removed the `colorScheme` prop from the following components: `AppProvider`, `PolarisTestProvider`, `Menu`, `Popover`, `UserMenu`.

- [#6675](https://github.com/Shopify/polaris/pull/6675) [`2b14c0b60`](https://github.com/Shopify/polaris/commit/2b14c0b60097f75d21df7eaa744dfaf84f8f53f7) Thanks [@samrose3](https://github.com/samrose3)! - Removed all legacy breakpoint Sass functions, mixins, and variables. Updated all component styles to use the new Polaris breakpoint aliases.

### Minor Changes

- [#6675](https://github.com/Shopify/polaris/pull/6675) [`2b14c0b60`](https://github.com/Shopify/polaris/commit/2b14c0b60097f75d21df7eaa744dfaf84f8f53f7) Thanks [@samrose3](https://github.com/samrose3)! - Added new `Text` and `InlineCode` components, updated `typography` token references in styleguide, updated `/tokens/typography` page in styleguide to `/tokens/font`, add docs and examples for `Text` component

### Patch Changes

- [#6675](https://github.com/Shopify/polaris/pull/6675) [`2b14c0b60`](https://github.com/Shopify/polaris/commit/2b14c0b60097f75d21df7eaa744dfaf84f8f53f7) Thanks [@samrose3](https://github.com/samrose3)! - Updated components to use the new usage of `@shopify/polaris-tokens` and leverage tree-shaking imports

- Updated dependencies [[`2b14c0b60`](https://github.com/Shopify/polaris/commit/2b14c0b60097f75d21df7eaa744dfaf84f8f53f7), [`7d7ae1e87`](https://github.com/Shopify/polaris/commit/7d7ae1e8797ce18820b96b16e360334e38671a5a), [`84ceaa3fc`](https://github.com/Shopify/polaris/commit/84ceaa3fc332d686c7efda312357854555d5e0e6)]:
  - @shopify/polaris-tokens@6.0.0

## 9.24.0

### Minor Changes

- [#6949](https://github.com/Shopify/polaris/pull/6949) [`93db1ed8c`](https://github.com/Shopify/polaris/commit/93db1ed8c9771d2827d4bd5f7da3861409228ad8) Thanks [@mrcthms](https://github.com/mrcthms)! - Update IndexTable heading appearance and surface sorting ability in headings

* [#6966](https://github.com/Shopify/polaris/pull/6966) [`a5345cc6d`](https://github.com/Shopify/polaris/commit/a5345cc6d43a9831b43bb99a4e85dc14cc6212b1) Thanks [@LA1CH3](https://github.com/LA1CH3)! - Added `id` prop for Choice in ChoiceList

### Patch Changes

- [#6953](https://github.com/Shopify/polaris/pull/6953) [`0c9175177`](https://github.com/Shopify/polaris/commit/0c9175177021d93adfe19b57d44bbd33f656175f) Thanks [@chloerice](https://github.com/chloerice)! - Updated `Badge` examples to reflect admin use cases

* [#6965](https://github.com/Shopify/polaris/pull/6965) [`7d759fbd1`](https://github.com/Shopify/polaris/commit/7d759fbd173d24a68695562194c6b7f0ed1aeafd) Thanks [@kyledurand](https://github.com/kyledurand)! - Don't render if children is null / undefined

- [#6961](https://github.com/Shopify/polaris/pull/6961) [`d2ecb7943`](https://github.com/Shopify/polaris/commit/d2ecb7943f156b938b6bc63e2e2cf51e27d9ff0a) Thanks [@berkaygure](https://github.com/berkaygure)! - Fixed `TextField` `focused` prop not working when `multiline` is `true`

* [#6954](https://github.com/Shopify/polaris/pull/6954) [`0ed63ba61`](https://github.com/Shopify/polaris/commit/0ed63ba611ebcf96e940fddcec80f1cf83b534a8) Thanks [@chloerice](https://github.com/chloerice)! - Fixed `Listbox.Option` click event bubbling causing close of `Popover` in `Combobox`

* Updated dependencies [[`e5eb70032`](https://github.com/Shopify/polaris/commit/e5eb700321c7ddf4fd3bd8679dfcebbc1514e3d4)]:
  - @shopify/polaris-tokens@5.5.2

## 9.23.1

### Patch Changes

- [#6518](https://github.com/Shopify/polaris/pull/6518) [`8f515922b`](https://github.com/Shopify/polaris/commit/8f515922bee80d9a2836755a4f4caedf2884f960) Thanks [@sarahill](https://github.com/sarahill)! - Removed external link icon from the Link components external prop and updated Link documentation

* [#6914](https://github.com/Shopify/polaris/pull/6914) [`47d517cea`](https://github.com/Shopify/polaris/commit/47d517ceac37348a4889e58dbd5274a224f74df1) Thanks [@philschoefer](https://github.com/philschoefer)! - Fixed bug in `DataTable` where tooltips become disassociated when rows get sorted

- [#6881](https://github.com/Shopify/polaris/pull/6881) [`1f8950cdc`](https://github.com/Shopify/polaris/commit/1f8950cdceb391a2ac899cad8648c1e16aa512ee) Thanks [@alex-page](https://github.com/alex-page)! - Replaced glob with globby

* [#6913](https://github.com/Shopify/polaris/pull/6913) [`c788351c0`](https://github.com/Shopify/polaris/commit/c788351c0f8b2cc766af43ecff439ce39a0e6227) Thanks [@dleroux](https://github.com/dleroux)! - Fixed position of Bulk Action Checkbox

* Updated dependencies [[`0e7b06524`](https://github.com/Shopify/polaris/commit/0e7b065240d09d5b349f634a96d21c7be0fb117e), [`d676abda9`](https://github.com/Shopify/polaris/commit/d676abda906ca13411a469aa211eb1a0ff363f55), [`1f8950cdc`](https://github.com/Shopify/polaris/commit/1f8950cdceb391a2ac899cad8648c1e16aa512ee)]:
  - @shopify/polaris-icons@5.4.0

## 9.23.0

### Minor Changes

- [#6825](https://github.com/Shopify/polaris/pull/6825) [`dd9cb536b`](https://github.com/Shopify/polaris/commit/dd9cb536b6681aee7ff164fcf0086cce70639efb) Thanks [@mrcthms](https://github.com/mrcthms)! - Exported IndexTable constant and type definition

* [#6181](https://github.com/Shopify/polaris/pull/6181) [`44c7e3e36`](https://github.com/Shopify/polaris/commit/44c7e3e363f3e27ef3b07765311f44928e7a7779) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - Improved `useEventListener` types and added support for attaching listeners to React refs.

- [#6769](https://github.com/Shopify/polaris/pull/6769) [`f67f0d4d1`](https://github.com/Shopify/polaris/commit/f67f0d4d1fd22a34f545e305c1c6e18da8e53d23) Thanks [@alex-page](https://github.com/alex-page)! - Removed `README.md` files from all components and migrated their examples into Storybook files. Their documentation has moved from `polaris-react/src/components/**/README.md` to `polaris.shopify.com/content/components/*.md`.

* [#6854](https://github.com/Shopify/polaris/pull/6854) [`d34e8e8b6`](https://github.com/Shopify/polaris/commit/d34e8e8b6fa0720da93a63a9af1a02a4bf4e8548) Thanks [@zakwarsame](https://github.com/zakwarsame)! - fix explicit onClick handler bug

- [#6812](https://github.com/Shopify/polaris/pull/6812) [`40c05d8d2`](https://github.com/Shopify/polaris/commit/40c05d8d2f81ed335b95bdb3b022520caa1cd100) Thanks [@csmiarowski](https://github.com/csmiarowski)! - Add disabled prop to Index Table Row

### Patch Changes

- [#6047](https://github.com/Shopify/polaris/pull/6047) [`d3ac9c2c5`](https://github.com/Shopify/polaris/commit/d3ac9c2c5a1e42dcf0bfde6d24cc25110ed57801) Thanks [@translation-platform](https://github.com/apps/translation-platform)! - Update translations across locales

* [#6785](https://github.com/Shopify/polaris/pull/6785) [`c4758d0d9`](https://github.com/Shopify/polaris/commit/c4758d0d9fbaae91cae38b227cd5136be56c4223) Thanks [@kyledurand](https://github.com/kyledurand)! - Update @shopify/storybook-a11y-test to latest version

* Updated dependencies [[`f87ce09c0`](https://github.com/Shopify/polaris/commit/f87ce09c0f85046f83426f46f70c9ecac4976eca), [`dcc7cbc26`](https://github.com/Shopify/polaris/commit/dcc7cbc2633da4f4a9d5aff71a2031ebcf8c7491), [`214678021`](https://github.com/Shopify/polaris/commit/2146780213886bb633fd4cfc6bb1c89d90ccfe10), [`655bd4828`](https://github.com/Shopify/polaris/commit/655bd48288f87ba6196d932a7696ab0c6e6c9024)]:
  - @shopify/polaris-icons@5.3.0
  - @shopify/polaris-tokens@5.5.1

## 9.22.0

### Minor Changes

- [#6709](https://github.com/Shopify/polaris/pull/6709) [`47e8244d5`](https://github.com/Shopify/polaris/commit/47e8244d573e0e34a71379733bcc5aa7788d8d5c) Thanks [@aminpaks](https://github.com/aminpaks)! - Added `Tooltip` support for `Page` `primaryAction` and `secondaryActions`

### Patch Changes

- [#6792](https://github.com/Shopify/polaris/pull/6792) [`51be08e37`](https://github.com/Shopify/polaris/commit/51be08e371bc2090346cdc9695d44437023bb20a) Thanks [@alex-page](https://github.com/alex-page)! - Bumped storybook versions and cleaned up main.js

* [#6771](https://github.com/Shopify/polaris/pull/6771) [`b5ff69e44`](https://github.com/Shopify/polaris/commit/b5ff69e44a57824fef7ccccac314d2594db4d514) Thanks [@alex-page](https://github.com/alex-page)! - Add spacing around components in storybook, adjust grid if there is spacing

- [#6719](https://github.com/Shopify/polaris/pull/6719) [`b75bc19ed`](https://github.com/Shopify/polaris/commit/b75bc19edf260af8fa20ec9f9c995990c8a3e4dd) Thanks [@ginabak](https://github.com/ginabak)! - Allow click events for spinner in [TextField]

* [#6781](https://github.com/Shopify/polaris/pull/6781) [`6f50cb1dc`](https://github.com/Shopify/polaris/commit/6f50cb1dceb2f3ac3bb558c4da748d890de30543) Thanks [@philschoefer](https://github.com/philschoefer)! - Fixed console error in `DataTable` that is triggered by sorting data via table headers

## 9.21.1

### Patch Changes

- [#6753](https://github.com/Shopify/polaris/pull/6753) [`e17db88b2`](https://github.com/Shopify/polaris/commit/e17db88b275d2c4070d22d9c2c3bf903f12739db) Thanks [@alex-page](https://github.com/alex-page)! - Remove omitAppProvider front matter

* [#6749](https://github.com/Shopify/polaris/pull/6749) [`45f45883a`](https://github.com/Shopify/polaris/commit/45f45883ac975b89e1df53f651748319223e1f2c) Thanks [@alex-page](https://github.com/alex-page)! - Adjust some of the internal scripts so they are simpler

- [#6722](https://github.com/Shopify/polaris/pull/6722) [`b4053553d`](https://github.com/Shopify/polaris/commit/b4053553d9fb0079a957e31df48893d90ce766b0) Thanks [@philschoefer](https://github.com/philschoefer)! - Updated `DataTable` to fix console warning about improperly nested HTML, ensure focus states remain on the same header element when switching between sticky and regular header and improved tooltip when using `truncate` prop.

* [#6695](https://github.com/Shopify/polaris/pull/6695) [`ceff5fb6c`](https://github.com/Shopify/polaris/commit/ceff5fb6c015706192c8e451ad33078238e01eb8) Thanks [@aveline](https://github.com/aveline)! - Added guidance to the Releasing docs around tagging contributors for reviews

- [#6756](https://github.com/Shopify/polaris/pull/6756) [`fdf4d836d`](https://github.com/Shopify/polaris/commit/fdf4d836dccedd4578d094fa216c5460780064cc) Thanks [@mrkldshv](https://github.com/mrkldshv)! - Fixed react hook errors across examples

* [#6678](https://github.com/Shopify/polaris/pull/6678) [`51798772a`](https://github.com/Shopify/polaris/commit/51798772a04f6afb51ef11ef41a7ca573617275c) Thanks [@alex-page](https://github.com/alex-page)! - Migrate content to polaris.shopify.com, automate example titles

## 9.21.0

### Minor Changes

- [#6461](https://github.com/Shopify/polaris/pull/6461) [`6fab899c1`](https://github.com/Shopify/polaris/commit/6fab899c1a11b19640845b4a57ce82173bc27097) Thanks [@zakwarsame](https://github.com/zakwarsame)! - Make disabled buttons more accessible

### Patch Changes

- [`720d10e79`](https://github.com/Shopify/polaris/commit/720d10e79c9080efccb4c1d3e41ac322b58b7977) Thanks [@alex-page](https://github.com/alex-page)! - `DataTable` revert accidental rename of `hasFixedFirstColumn` to `fixedFirstColumn`

* [#6703](https://github.com/Shopify/polaris/pull/6703) [`e58092acb`](https://github.com/Shopify/polaris/commit/e58092acb10ddc8330dcd8fc4bd7293ba94692ad) Thanks [@alex-page](https://github.com/alex-page)! - Clean up README.md files, removing 80 character limit and unused content

- [#6681](https://github.com/Shopify/polaris/pull/6681) [`3b6d6949f`](https://github.com/Shopify/polaris/commit/3b6d6949fdbb1d809f6aff5d3f36b897c0fd2353) Thanks [@alex-page](https://github.com/alex-page)! - Removed comments and cleaned up markdown files

- Updated dependencies [[`11816f2c5`](https://github.com/Shopify/polaris/commit/11816f2c526c98ef0f1839ce233baeaf9173c4fb)]:
  - @shopify/polaris-icons@5.2.0

## 9.20.1

### Patch Changes

- [#6617](https://github.com/Shopify/polaris/pull/6617) [`305368d57`](https://github.com/Shopify/polaris/commit/305368d57745ab532063cb7370730f6e87e00632) Thanks [@alex-page](https://github.com/alex-page)! - Update component links so they no longer hit the redirect

* [#6660](https://github.com/Shopify/polaris/pull/6660) [`9a8c8a68b`](https://github.com/Shopify/polaris/commit/9a8c8a68bc48db03153c67d5c202a4ea9510f985) Thanks [@JeremyLudwigDev](https://github.com/JeremyLudwigDev)! - [Datatable] Fix alignment issue with fixed first column when a cell is empty

- [#6682](https://github.com/Shopify/polaris/pull/6682) [`2aaed571f`](https://github.com/Shopify/polaris/commit/2aaed571ffc1b6ec458a86186840ee473578a729) Thanks [@alex-page](https://github.com/alex-page)! - Remove fullSizeExample, omitAppProvider and hidePlayground frontmatter

* [#6667](https://github.com/Shopify/polaris/pull/6667) [`8892dcc94`](https://github.com/Shopify/polaris/commit/8892dcc94b38968449863a7ad1bee4b56a9bd9bf) Thanks [@samrose3](https://github.com/samrose3)! - Use exact versions for Polaris workspace dependencies.

- [#6619](https://github.com/Shopify/polaris/pull/6619) [`398186117`](https://github.com/Shopify/polaris/commit/398186117be9a4bc7d0248dd7ea339f0a0f34779) Thanks [@alex-page](https://github.com/alex-page)! - Remove legacy keywords from component documentation

* [#6722](https://github.com/Shopify/polaris/pull/6722) [`b405355`](https://github.com/Shopify/polaris/commit/b4053553d9fb0079a957e31df48893d90ce766b0) Thanks [@philschoefer](https://github.com/philschoefer):
  - Updates `DataTable` to fix console warning about improperly nested HTML
  - Updates `DataTable` to ensure focus states remain on the same header element when switching between sticky and regular header.
  - Improves `DataTable` tooltip when using `truncate` prop.

- [#6583](https://github.com/Shopify/polaris/pull/6583) [`ae0bb762b`](https://github.com/Shopify/polaris/commit/ae0bb762bacca9b4d268c708e43c2facc9d4b763) Thanks [@FCalabria](https://github.com/FCalabria)! - Fixed `IndexTable` bulk action visibility on small screens

* [#6671](https://github.com/Shopify/polaris/pull/6671) [`ab10494bc`](https://github.com/Shopify/polaris/commit/ab10494bcb2624656205bf04afcc6ed0f2692225) Thanks [@aveline](https://github.com/aveline)! - Update legacy sass file to use Polaris typography tokens

- [#6663](https://github.com/Shopify/polaris/pull/6663) [`b3e027c9b`](https://github.com/Shopify/polaris/commit/b3e027c9b45fa44d1137fd409b2f8a10687c90ef) Thanks [@martenbjork](https://github.com/martenbjork)! - Update stylesheet url in Readme

* [#6618](https://github.com/Shopify/polaris/pull/6618) [`1cbc1eba7`](https://github.com/Shopify/polaris/commit/1cbc1eba7a3a2d354b4cbf9dedb01862a77f5070) Thanks [@alex-page](https://github.com/alex-page)! - Remove unused and duplicate platform documentation

- [#6604](https://github.com/Shopify/polaris/pull/6604) [`b5427eac2`](https://github.com/Shopify/polaris/commit/b5427eac2a4851e715954dcdce2900781839a316) Thanks [@dustinfirman](https://github.com/dustinfirman)! - Use different focus helper for the popover autofocus

- Updated dependencies [[`305368d57`](https://github.com/Shopify/polaris/commit/305368d57745ab532063cb7370730f6e87e00632), [`a6a972f7f`](https://github.com/Shopify/polaris/commit/a6a972f7f186bbc03c60f925755056a9de1b056f), [`327a73381`](https://github.com/Shopify/polaris/commit/327a73381ffb9a3f0ac3de4b76632d08070b8720), [`4c0301bbb`](https://github.com/Shopify/polaris/commit/4c0301bbbb0612afaa5111fc579f52175c8b3ada), [`b541f5449`](https://github.com/Shopify/polaris/commit/b541f54498462ce513b9903dfcfcb966f43e0038)]:
  - @shopify/polaris-icons@5.1.0

## 9.20.0

### Minor Changes

- [#6550](https://github.com/Shopify/polaris/pull/6550) [`dcbf307b4`](https://github.com/Shopify/polaris/commit/dcbf307b4f9521d38cb6fb008d4daa4de16b7c3a) Thanks [@ErickTamayo](https://github.com/ErickTamayo)! - Replaced SortAscendingMajor and SortDescendingMajor icons. Changed sorting icons in the Data Table

* [#6407](https://github.com/Shopify/polaris/pull/6407) [`b506363cb`](https://github.com/Shopify/polaris/commit/b506363cb42248ecb463c85a2ec8bcd6f9556624) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - Added internal `useBreakpoints` hook

- [#6401](https://github.com/Shopify/polaris/pull/6401) [`3510fdb87`](https://github.com/Shopify/polaris/commit/3510fdb87fb9677f5e1ba86c33cbbb674bf29f6e) Thanks [@mrcthms](https://github.com/mrcthms)! - Switch the order of the actions in the EmptyState

* [#6399](https://github.com/Shopify/polaris/pull/6399) [`5dd608c6f`](https://github.com/Shopify/polaris/commit/5dd608c6f0799f80ec8b1176113580a56a566710) Thanks [@fmoliveira](https://github.com/fmoliveira)! - Added the `dataPrimaryLink` prop to `Link` and `Button` to support navigation on click of an `IndexTable.Row`

- [#6551](https://github.com/Shopify/polaris/pull/6551) [`bbf0b59f8`](https://github.com/Shopify/polaris/commit/bbf0b59f863dbd7ace49aa1b8981a80c2cf8dd4a) Thanks [@alex-page](https://github.com/alex-page)! - Removed mobile only documentation for SectionHeader component

* [#6434](https://github.com/Shopify/polaris/pull/6434) [`9a4f78808`](https://github.com/Shopify/polaris/commit/9a4f7880833daaee38c9656e25208098be0d2a44) Thanks [@mateus](https://github.com/mateus)! - Prevents the Button disclosure icon from overflowing its container

- [#6536](https://github.com/Shopify/polaris/pull/6536) [`ee487cef2`](https://github.com/Shopify/polaris/commit/ee487cef23ff2ac1ab537368bdc9815b7ec0cb4d) Thanks [@alex-page](https://github.com/alex-page)! - Removed mobile content and examples from README.md files

* [#6431](https://github.com/Shopify/polaris/pull/6431) [`7db7af61c`](https://github.com/Shopify/polaris/commit/7db7af61c343f7229fabf250672025d914ce735f) Thanks [@mrcthms](https://github.com/mrcthms)! - Fix variable name in sticky IndexTable

- [#6344](https://github.com/Shopify/polaris/pull/6344) [`a86272f24`](https://github.com/Shopify/polaris/commit/a86272f248ce2ea61ca8be47f379303c59e92e73) Thanks [@kyledurand](https://github.com/kyledurand)! - Added the ability to capture React.Profiler data

### Patch Changes

- [#6525](https://github.com/Shopify/polaris/pull/6525) [`588c3056d`](https://github.com/Shopify/polaris/commit/588c3056d2d10d9bd2c3d65bc0c4705bc051c25c) Thanks [@alex-page](https://github.com/alex-page)! - Fixed duplicate descriptions for autocomplete examples

* [#6445](https://github.com/Shopify/polaris/pull/6445) [`abb4e40c9`](https://github.com/Shopify/polaris/commit/abb4e40c9695db817f81f3a1525c5bf6c7f31b39) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - Fixed `@shopify/stylelint-polaris` errors

- [#6488](https://github.com/Shopify/polaris/pull/6488) [`6cb2ac321`](https://github.com/Shopify/polaris/commit/6cb2ac321950f5e4c3cb706ebe305ccc41d7a089) Thanks [@martenbjork](https://github.com/martenbjork)! - Render component notices on the website

* [#6483](https://github.com/Shopify/polaris/pull/6483) [`3b65101e8`](https://github.com/Shopify/polaris/commit/3b65101e88519cbc992ec417e25ea5c227dd4975) Thanks [@kyledurand](https://github.com/kyledurand)! - Deprecated Layout.AnnotatedSection

- [#5928](https://github.com/Shopify/polaris/pull/5928) [`2242cfcde`](https://github.com/Shopify/polaris/commit/2242cfcde87dbef2efda54d84341775cfe78a19e) Thanks [@FCalabria](https://github.com/FCalabria)! - Fixed `Page` without header section causing unnecessary scrollbar

- Updated dependencies [[`dcbf307b4`](https://github.com/Shopify/polaris/commit/dcbf307b4f9521d38cb6fb008d4daa4de16b7c3a), [`54ba0f716`](https://github.com/Shopify/polaris/commit/54ba0f716088ae36e7fae08d2768d2541b9107b6), [`9269e5ee6`](https://github.com/Shopify/polaris/commit/9269e5ee62171cf7b8ced1b9edef68da3bcd9dd2), [`9426d0108`](https://github.com/Shopify/polaris/commit/9426d01088930c761a4ab14c5a94008f129e70d0), [`b506363cb`](https://github.com/Shopify/polaris/commit/b506363cb42248ecb463c85a2ec8bcd6f9556624)]:
  - @shopify/polaris-icons@5.0.0
  - @shopify/polaris-tokens@5.5.0

## 9.19.0

### Minor Changes

- [#6162](https://github.com/Shopify/polaris/pull/6162) [`b62da0997`](https://github.com/Shopify/polaris/commit/b62da0997b635fb1231a66be1ac9feb5d7191c0f) Thanks [@rivaridley](https://github.com/rivaridley)! - Added the `fullScreen` prop to `Modal` to set its height to the viewport height on small screens

* [#6223](https://github.com/Shopify/polaris/pull/6223) [`d5362cf75`](https://github.com/Shopify/polaris/commit/d5362cf7525d6e8dcb1c01395cae84fce994e39c) Thanks [@chloerice](https://github.com/chloerice)! - Fixed the close button overlaying `Modal` content when `titleHidden` is `true` ([#6223](https://github.com/Shopify/polaris/pull/6223))

- [#6229](https://github.com/Shopify/polaris/pull/6229) [`754f4e0b4`](https://github.com/Shopify/polaris/commit/754f4e0b4d0aa37de4fb345ee5bef765d538b699) Thanks [@felipeleusin](https://github.com/felipeleusin)! - Exported the `ActionList.Item` sub-component

* [#6305](https://github.com/Shopify/polaris/pull/6305) [`ca470f58e`](https://github.com/Shopify/polaris/commit/ca470f58e963c933b97111dc83f8410f05fbd339) Thanks [@aishad](https://github.com/aishad)! - Add Collapsible `preventMeasuringOnChildrenUpdate` prop

### Patch Changes

- [#6249](https://github.com/Shopify/polaris/pull/6249) [`77cde3d77`](https://github.com/Shopify/polaris/commit/77cde3d7739c5ed9cc2c9ee9cab4f7eb772cc5e6) Thanks [@philschoefer](https://github.com/philschoefer)! - Fixed `Uncaught TypeError: Cannot read property 'rightEdge' of undefined` in `DataTable` ([#6249](https://github.com/Shopify/polaris-react/pull/6249))

* [#6298](https://github.com/Shopify/polaris/pull/6298) [`42b924350`](https://github.com/Shopify/polaris/commit/42b9243500c98c5e76d7149b14da1ff7f348ee53) Thanks [@felipeleusin](https://github.com/felipeleusin)! - Moved item-related CSS variables to the `ActionList` `.Item` class

- [#6267](https://github.com/Shopify/polaris/pull/6267) [`bb85e244a`](https://github.com/Shopify/polaris/commit/bb85e244af4672a390860e9b2fcf4ea7a7ae47d4) Thanks [@charlesdobson](https://github.com/charlesdobson)! - Added more styling and elements to FullscreenBar code example

* [#6175](https://github.com/Shopify/polaris/pull/6175) [`ccedec2ae`](https://github.com/Shopify/polaris/commit/ccedec2aef473b9a7cdc31d8b28ed60686cddbaa) Thanks [@alex-page](https://github.com/alex-page)! - Remove deprecated guidance for Modal

* Updated dependencies [[`78285533c`](https://github.com/Shopify/polaris/commit/78285533c921c8b438d4e8881d794716d8316690)]:
  - @shopify/polaris-tokens@5.4.0

## 9.18.0

### Minor Changes

- [#6224](https://github.com/Shopify/polaris/pull/6224) [`d75dff186`](https://github.com/Shopify/polaris/commit/d75dff18603fffe5881b2992cd48e6af606806d3) Thanks [@chloerice](https://github.com/chloerice)! - Reverted #6143 and made expecting `TextField` `onBlur` `event` arg optional

### Patch Changes

- [#6186](https://github.com/Shopify/polaris/pull/6186) [`2ba83b752`](https://github.com/Shopify/polaris/commit/2ba83b752513d34fc769c94489b2325b8c3a7aa2) Thanks [@kyledurand](https://github.com/kyledurand)! - Add react profiler log data option to storybook globals

* [#6129](https://github.com/Shopify/polaris/pull/6129) [`10fdc5f5a`](https://github.com/Shopify/polaris/commit/10fdc5f5a5de1ae2ee7daa34cfa97636a440e736) Thanks [@weslleyaraujo](https://github.com/weslleyaraujo)! - Conditionally calls `event.stopPropagation` on `TextField` component

- [#6103](https://github.com/Shopify/polaris/pull/6103) [`a622544db`](https://github.com/Shopify/polaris/commit/a622544db457e87fc88223bc78b84782c69674f3) Thanks [@clarkjennings](https://github.com/clarkjennings)! - Added a `shape` prop to `Avatar`

## 9.17.0

### Minor Changes

- [#6143](https://github.com/Shopify/polaris/pull/6143) [`20dc2ab05`](https://github.com/Shopify/polaris/commit/20dc2ab053638f73fb6f82028381c97960bcff16) Thanks [@chloerice](https://github.com/chloerice)! - Added support for the `event` argument to the `TextField` `onBlur` prop

* [#6148](https://github.com/Shopify/polaris/pull/6148) [`828cc06c2`](https://github.com/Shopify/polaris/commit/828cc06c2750629be651dcfa6e19d5624ab614ef) Thanks [@mateus](https://github.com/mateus)! - Updated the `Navigation` `logo` container to have a white background when present

### Patch Changes

- [#5867](https://github.com/Shopify/polaris/pull/5867) [`c89c3f736`](https://github.com/Shopify/polaris/commit/c89c3f7366bb7e4f4d417ac782e57aa36e17d772) Thanks [@lgriffee](https://github.com/lgriffee)! - Remove unused class from Page Header component

## 9.16.0

### Minor Changes

- [#6121](https://github.com/Shopify/polaris/pull/6121) [`c9c4cc00c`](https://github.com/Shopify/polaris/commit/c9c4cc00c390be4a713633cbce6f2ebfc339c56d) Thanks [@jas7457](https://github.com/jas7457)! - Added support for setting `start` and `end` on the `Button` `textAlign` prop

* [#5963](https://github.com/Shopify/polaris/pull/5963) [`3115063ed`](https://github.com/Shopify/polaris/commit/3115063ede96229bbb06a8857437d71769c6d203) Thanks [@alex-page](https://github.com/alex-page)! - Migrate build process from loom to rollup

### Patch Changes

- [#5987](https://github.com/Shopify/polaris/pull/5987) [`d1acf9d25`](https://github.com/Shopify/polaris/commit/d1acf9d25b5f143d666e326f8435690a51e67c8b) Thanks [@bencmilton](https://github.com/bencmilton)! - Fixed click events not propagating in `Tooltip` and added support for SVG elements as `prefix`, `suffix`, and `verticalContent` in `TextField`

* [#6098](https://github.com/Shopify/polaris/pull/6098) [`fc39d5fca`](https://github.com/Shopify/polaris/commit/fc39d5fcab57f2a6bc1efec0ca85ce76227b10ae) Thanks [@alololox](https://github.com/alololox)! - [IndexTable] Hide scroll bar when table is not scrollable

- [#5803](https://github.com/Shopify/polaris/pull/5803) [`a19fe4f9f`](https://github.com/Shopify/polaris/commit/a19fe4f9f2982ff74d5c34a597dea34ef6519b4a) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - Improved TypeScript declarations for `@shopify/polaris-tokens`

* [#6125](https://github.com/Shopify/polaris/pull/6125) [`0283a4e33`](https://github.com/Shopify/polaris/commit/0283a4e33877026dded3c6d609c12489db38bad6) Thanks [@aveline](https://github.com/aveline)! - Revert border color for checkbox and radio button

- [#6106](https://github.com/Shopify/polaris/pull/6106) [`92e285c9b`](https://github.com/Shopify/polaris/commit/92e285c9b164a1c747b5b56cd973a5e2e26b361b) Thanks [@lgriffee](https://github.com/lgriffee)! - Updated experimental breakpoints for down media conditions

- Updated dependencies [[`8bf288c8f`](https://github.com/Shopify/polaris/commit/8bf288c8f866d56021f23d76a5e43de78cc295b4), [`738e31e13`](https://github.com/Shopify/polaris/commit/738e31e1320b289fbf68a2468bcb208b9a629edf), [`75f46e50e`](https://github.com/Shopify/polaris/commit/75f46e50e88e1b93ef0075b5474cc632acdfc81d), [`a19fe4f9f`](https://github.com/Shopify/polaris/commit/a19fe4f9f2982ff74d5c34a597dea34ef6519b4a), [`b7160b861`](https://github.com/Shopify/polaris/commit/b7160b86107f8466bb275122cf08aad0bed8bbd2)]:
  - @shopify/polaris-tokens@5.3.0
  - @shopify/polaris-icons@4.23.0

## 9.15.0

### Minor Changes

- [#6097](https://github.com/Shopify/polaris/pull/6097) [`671f4ab46`](https://github.com/Shopify/polaris/commit/671f4ab46b72637dc79523f2ef728a4e580919db) Thanks [@chloerice](https://github.com/chloerice)! - Added support for manual selection to `Listbox`

* [#6099](https://github.com/Shopify/polaris/pull/6099) [`0dfaf1943`](https://github.com/Shopify/polaris/commit/0dfaf1943cb73e2bee16a57a8bfe7c93cb2eaecb) Thanks [@mateus](https://github.com/mateus)! - Add Navigation `logoSuffix` prop

### Patch Changes

- [#5829](https://github.com/Shopify/polaris/pull/5829) [`5e4f95ae6`](https://github.com/Shopify/polaris/commit/5e4f95ae65c5ba3ed271d10e57b83886a2155a89) Thanks [@tmlayton](https://github.com/tmlayton)! - Add React.Profiler tracking

* [#6100](https://github.com/Shopify/polaris/pull/6100) [`8a87c879a`](https://github.com/Shopify/polaris/commit/8a87c879a2494b1e1f0e43ab0b3d201d50992120) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed a bug where `Collapsible` wouldn't update height when children change

## 9.14.1

### Patch Changes

- [#6083](https://github.com/Shopify/polaris/pull/6083) [`ead310cd8`](https://github.com/Shopify/polaris/commit/ead310cd88bb8aa98ad95249c06f179b866f30d1) Thanks [@chloerice](https://github.com/chloerice)! - Fixed `Badge` `status` and `progress` types and removed default `status` from `Pip`

## 9.14.0

### Minor Changes

- [#6022](https://github.com/Shopify/polaris/pull/6022) [`78bb4f3d3`](https://github.com/Shopify/polaris/commit/78bb4f3d399f99d7c6dd762302d2c2875b7e1754) Thanks [@jorgenunezsiri](https://github.com/jorgenunezsiri)! - Added 'onActionRollup' prop to Page component.

* [#6055](https://github.com/Shopify/polaris/pull/6055) [`4d4891bf0`](https://github.com/Shopify/polaris/commit/4d4891bf0c8561d74c67b2e7b7f8e3576d2deb78) Thanks [@kyledurand](https://github.com/kyledurand)! - Added row and column props to Grid.Cell

### Patch Changes

- [#5812](https://github.com/Shopify/polaris/pull/5812) [`7d13e95d0`](https://github.com/Shopify/polaris/commit/7d13e95d0ffbd207ce9a83c5960712fbc318e41e) Thanks [@developit](https://github.com/developit)! - Fixed `Listbox` to preserve scroll position when lazy-loading additional items

* [#6039](https://github.com/Shopify/polaris/pull/6039) [`a1b5ce122`](https://github.com/Shopify/polaris/commit/a1b5ce1228270a0de7fc94547e0a90da884152e7) Thanks [@jorgenunezsiri](https://github.com/jorgenunezsiri)! - - Fixed rolled up action groups to include section title.
  - Fixed action items inside action groups to be disabled if the action group is disabled.

- [#6062](https://github.com/Shopify/polaris/pull/6062) [`1d2f51ee9`](https://github.com/Shopify/polaris/commit/1d2f51ee98a3ce8fc7948a50953900ae29aa0b2f) Thanks [@chazdean](https://github.com/chazdean)! - Add keyboard shortcut

* Updated dependencies [[`bb777601a`](https://github.com/Shopify/polaris/commit/bb777601af9abd276147c8251c800e6d878c08a0)]:
  - @shopify/polaris-tokens@5.2.1

## 9.13.0

### Minor Changes

- [#5539](https://github.com/Shopify/polaris/pull/5539) [`4366b2b52`](https://github.com/Shopify/polaris/commit/4366b2b52c1528e550a5c33ff6b191f5b4713a6f) Thanks [@JeremyLudwigDev](https://github.com/JeremyLudwigDev)! - Added `hasFixedFirstColumn` and `firstColumnMinWidth` props to `DataTable`

### Patch Changes

- [#6060](https://github.com/Shopify/polaris/pull/6060) [`7bacb9342`](https://github.com/Shopify/polaris/commit/7bacb9342c14580f268c14c8e37d735e71a338a1) Thanks [@kyledurand](https://github.com/kyledurand)! - Removed image background fallback

* [#6054](https://github.com/Shopify/polaris/pull/6054) [`f63177602`](https://github.com/Shopify/polaris/commit/f63177602b2bdd447dabd930dcb3187344f9a5e6) Thanks [@chazdean](https://github.com/chazdean)! - Implement icons modal

- [#6027](https://github.com/Shopify/polaris/pull/6027) [`d08935693`](https://github.com/Shopify/polaris/commit/d08935693d01e712ba0d3df291ac4e8703bc25f9) Thanks [@samrose3](https://github.com/samrose3)! - The `CustomProperties` component and the `colorScheme` prop in all components have been deprecated. Please see the [v9 to v10 migration guide](https://github.com/Shopify/polaris/blob/main/documentation/guides/migrating-from-v9-to-v10.md) for upgrade options.

* [#5966](https://github.com/Shopify/polaris/pull/5966) [`1185d7fed`](https://github.com/Shopify/polaris/commit/1185d7feddbe402b38b62457717d48d046afbc52) Thanks [@kyledurand](https://github.com/kyledurand)! - Simplified the Grid component and improved its performance

- [#6044](https://github.com/Shopify/polaris/pull/6044) [`dcdf862bb`](https://github.com/Shopify/polaris/commit/dcdf862bb75b10cefd6900514963559509494517) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - Updated the `sticky-manager` to use a valid spacing token

* [#5840](https://github.com/Shopify/polaris/pull/5840) [`04ce5c6a3`](https://github.com/Shopify/polaris/commit/04ce5c6a34b4165fe9f7f9d9b10bc5f5b453a18e) Thanks [@Berhell](https://github.com/Berhell)! - Fixed `Badge` and `Pip` having different background colors for `new` and `info` status ([#5840](https://github.com/Shopify/polaris/pull/5840))

- [#6029](https://github.com/Shopify/polaris/pull/6029) [`c779008f8`](https://github.com/Shopify/polaris/commit/c779008f8edf7d9abc802e324b97eaeff05a407f) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed a bug in Image where the loading class wasn't reliably getting removed on load due to server side rendering

* Updated dependencies [[`f63177602`](https://github.com/Shopify/polaris/commit/f63177602b2bdd447dabd930dcb3187344f9a5e6), [`27a0fba87`](https://github.com/Shopify/polaris/commit/27a0fba877789a3becb10c6e60d78921d71e6887)]:
  - @shopify/polaris-tokens@5.2.0

## 9.12.2

### Patch Changes

- [#6012](https://github.com/Shopify/polaris/pull/6012) [`c71d26cff`](https://github.com/Shopify/polaris/commit/c71d26cffcb21f663b8a58d7b64d8957d555cb67) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed breakpoint tokens

- Updated dependencies [[`c71d26cff`](https://github.com/Shopify/polaris/commit/c71d26cffcb21f663b8a58d7b64d8957d555cb67)]:
  - @shopify/polaris-tokens@5.1.1

## 9.12.1

### Patch Changes

- [#5984](https://github.com/Shopify/polaris/pull/5984) [`c3e7f2ef7`](https://github.com/Shopify/polaris/commit/c3e7f2ef7fb63eb632e81b52541229a2d1731be9) Thanks [@zakwarsame](https://github.com/zakwarsame)! - changes divider padding on page component

* [#6006](https://github.com/Shopify/polaris/pull/6006) [`92ca0e5b2`](https://github.com/Shopify/polaris/commit/92ca0e5b2731529085822633c688aeda60ac16dd) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed a bug where keyframes weren't being properly added to builds

## 9.12.0

### Minor Changes

- [#5962](https://github.com/Shopify/polaris/pull/5962) [`3a64ee7e3`](https://github.com/Shopify/polaris/commit/3a64ee7e394e6d459ad629b8c054a63c1febc236) Thanks [@alex-page](https://github.com/alex-page)! - Updated @rollup/pluginutils to v4.1.0

* [#5473](https://github.com/Shopify/polaris/pull/5473) [`f04a387bc`](https://github.com/Shopify/polaris/commit/f04a387bcc5b3528f663f0694500ee6ddeb2195d) Thanks [@kyledurand](https://github.com/kyledurand)! - Add graceful fallbacks for `Image` and `Avatar`

### Patch Changes

- [#5957](https://github.com/Shopify/polaris/pull/5957) [`e51901656`](https://github.com/Shopify/polaris/commit/e519016562c8caa70ae4e9e5210b660a0b9a112c) Thanks [@chloerice](https://github.com/chloerice)! - Fixed `TextField` blocking text selection within `verticalContent`

* [#5874](https://github.com/Shopify/polaris/pull/5874) [`814bef39e`](https://github.com/Shopify/polaris/commit/814bef39e376c921557f535967315d7491694bbf) Thanks [@kyledurand](https://github.com/kyledurand)! - Fixed an accessibility bug in modal where clicking or tapping the backdrop would not close the modal

## 9.11.0

### Minor Changes

- [#5952](https://github.com/Shopify/polaris/pull/5952) [`4a59bc57d`](https://github.com/Shopify/polaris/commit/4a59bc57d2385cc38099601bd8dacd182687a131) Thanks [@romellogoodman](https://github.com/romellogoodman)! - Integrated `@shopify/polaris-tokens` v5 in `@shopify/polaris` and updated the `CustomProperties` component to use the `@shopify/polaris-tokens` SCSS stylesheet

* [#5952](https://github.com/Shopify/polaris/pull/5952) [`4a59bc57d`](https://github.com/Shopify/polaris/commit/4a59bc57d2385cc38099601bd8dacd182687a131) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - Updated the `Grid` component to use breakpoint tokens from `@shopify/polaris-tokens`

## 9.10.0

### Minor Changes

- [#5946](https://github.com/Shopify/polaris/pull/5946) [`3a5be82cb`](https://github.com/Shopify/polaris/commit/3a5be82cbc96fd05e64583425dee8f3fd8b58616) Thanks [@rmleg](https://github.com/rmleg)! - Added support for setting a `ReactNode` on the `PageActions` `primaryAction` prop

* [#5712](https://github.com/Shopify/polaris/pull/5712) [`290b41c61`](https://github.com/Shopify/polaris/commit/290b41c61ce6a6319631ec1e960c7ac896138ad5) Thanks [@aveline](https://github.com/aveline)! - Updated checkbox and radio button styling

  - Increased spacing between `ChoiceList` items on small screens only

* [#5785](https://github.com/Shopify/polaris/pull/5785) [`56b8ca790`](https://github.com/Shopify/polaris/commit/56b8ca790b458f050f00be5a80ed58e7bc08ef9a) Thanks [@mrcthms](https://github.com/mrcthms)! - Upstream changes from polaris-next `IndexTable`
  - Added a className prop to a IndexTable.Cell
  - Added a customClickHandler prop to a IndexTable.Row
  - Added a paginatedSelectAllActionText to the IndexTable
  - Exported a clearSelection method from the use-index-resource-state hook
  - Updated the styling of the ScrollBarContainer
  - Updated styling for TableCell to fix unpadded cell bug.
  - Added a 20px width to the TableHeading-first to fix the width of the checkbox column

- [#5945](https://github.com/Shopify/polaris/pull/5945) [`54d15c3c1`](https://github.com/Shopify/polaris/commit/54d15c3c1df0f78d39ec68d528b0c732c2651db1) Thanks [@aaronccasanova](https://github.com/aaronccasanova)! - Added experimental `Grid` component

- [#5933](https://github.com/Shopify/polaris/pull/5933) [`9c1a868cb`](https://github.com/Shopify/polaris/commit/9c1a868cb76912a93004d5357e630d28c337283a) Thanks [@tal87](https://github.com/tal87)! - Added support for handling the `onPointerDown` event on `Button`

### Patch Changes

- [#5876](https://github.com/Shopify/polaris/pull/5876) [`eb25cdaf4`](https://github.com/Shopify/polaris/commit/eb25cdaf40c5c08689521779f1176c6c34909507) Thanks [@aveline](https://github.com/aveline)! - Updated `TextField` docs with examples of `inputMode` virtual keyboards

* [#5960](https://github.com/Shopify/polaris/pull/5960) [`837094ac6`](https://github.com/Shopify/polaris/commit/837094ac68b08965ac34a19c405ebefd901f6394) Thanks [@alex-page](https://github.com/alex-page)! - Removed jestAdjustmentsPlugin as we have `jest.config.js`. Moved scripts to scripts/build.js.

- [#5889](https://github.com/Shopify/polaris/pull/5889) [`fe8987948`](https://github.com/Shopify/polaris/commit/fe8987948e72ef8ff95cc792bf97cc4c1e363b51) Thanks [@zaquille-oneil](https://github.com/zaquille-oneil)! - Fixed clear button covering `placeholder` text in `TextField` on small screens

* [#5931](https://github.com/Shopify/polaris/pull/5931) [`87b489073`](https://github.com/Shopify/polaris/commit/87b48907363f25c0f76d2c39126ce174c5a11d82) Thanks [@laurkim](https://github.com/laurkim)! - Fixed input focus loss in `TextField` on `verticalContent` change

## 9.9.0

### Minor Changes

- [#5832](https://github.com/Shopify/polaris/pull/5832) [`d810f8e73`](https://github.com/Shopify/polaris/commit/d810f8e73009a10a4feb06bb728f030b510662fe) Thanks [@Stivaros](https://github.com/Stivaros)! - Added `disableQueryField` to `Filters` component

* [#5688](https://github.com/Shopify/polaris/pull/5688) [`c66352b03`](https://github.com/Shopify/polaris/commit/c66352b032ffab0ab9e11348c3491761a22b4521) Thanks [@camd](https://github.com/camd)! - Added new FullscreenBar component which provides a uniformly styled Back button to exit Fullscreen mode.

- [#5865](https://github.com/Shopify/polaris/pull/5865) [`68a647348`](https://github.com/Shopify/polaris/commit/68a64734828d058dcf4f4974f45183b26f67d8b5) Thanks [@alex-page](https://github.com/alex-page)! - Added underline to Link on hover when removeUnderline property is used

* [#5810](https://github.com/Shopify/polaris/pull/5810) [`da6fce76b`](https://github.com/Shopify/polaris/commit/da6fce76bfa34b48832b4781a5ead8ef2558a046) Thanks [@kyledurand](https://github.com/kyledurand)! - add useEventListenerHook

- [#5894](https://github.com/Shopify/polaris/pull/5894) [`affb94a8f`](https://github.com/Shopify/polaris/commit/affb94a8f58dea735ec9890ed71a97cff22c1c7a) Thanks [@alex-page](https://github.com/alex-page)! - Deprecated `badge`, `icon` and `image` props in ActionList.Item as the `prefix` and `suffix` properties can replace them.

* [#5391](https://github.com/Shopify/polaris/pull/5391) [`46e7db0d8`](https://github.com/Shopify/polaris/commit/46e7db0d82b40c7379fea0e4cbae27346c0ff594) Thanks [@alex-page](https://github.com/alex-page)! - Removed focus-visible polyfill as Safari 15.4 and 15.5 support this functionality

- [#5879](https://github.com/Shopify/polaris/pull/5879) [`42331f399`](https://github.com/Shopify/polaris/commit/42331f399ee071787b847366e2f8308948dedcde) Thanks [@rmleg](https://github.com/rmleg)! - Fixed spacing above action group titles when they are the first element in a Page's action list menu on mobile

### Patch Changes

- Updated dependencies [[`c7c6295a4`](https://github.com/Shopify/polaris/commit/c7c6295a4c6b75a01545dbbfa16aaebe3330f4ce)]:
  - @shopify/polaris-icons@4.22.0

## 9.8.0

- Ported internal breakpoint and layout functions to SCSS variables ([#5722](https://github.com/Shopify/polaris/pull/5722))
- Added `extraSmall` to the available sizes of the `Thumbnail` and `SkeletonThumbnail` ([#5770](https://github.com/Shopify/polaris/pull/5770))
- Updated experimental breakpoint values ([#5804](https://github.com/Shopify/polaris/pull/5804), [#5830](https://github.com/Shopify/polaris/pull/5830))
- Added support for tooltips on Navigation items ([#5750](https://github.com/Shopify/polaris/pull/5750))
- Change types for DataTable `totalsName` prop to allow for ReactNode ([#5454](https://github.com/Shopify/polaris/pull/5365/))
- Implemented accessibility role and attributes in `SettingToggle` ([#5470](https://github.com/Shopify/polaris/pull/5470))
- Fixed vertical scroll on small screens in `EmptyState` ([#5779](https://github.com/Shopify/polaris/pull/5779))
- Fixed broken links in documentation ([#5824](https://github.com/Shopify/polaris/pull/5824))
- Fixed key prop error introduced in [sticky header](https://github.com/Shopify/polaris/pull/5494) ([#5826](https://github.com/Shopify/polaris/pull/5826))
- Replaced `deprecationNotice` with `notice` object ([#5841](https://github.com/Shopify/polaris/pull/5841))

## 9.7.0

- Replaced hardcoded `padding` or `margin` values with spacing tokens ([#5528](https://github.com/Shopify/polaris/pull/5528))
- Added `border-width-4` and `border-width-5` tokens and replaced hardcoded values ([#5528](https://github.com/Shopify/polaris/pull/5528))
- Replaced any hardcoded `outline-width` with `border-width` ([#5528](https://github.com/Shopify/polaris/pull/5528))
- Added the ability to disable specific dates in the `DatePicker`, to go along with date ranges ([#5356](https://github.com/Shopify/polaris/pull/5356))
- Added breakpoint CSS custom properties and SCSS media conditions ([#5558](https://github.com/Shopify/polaris/pull/5558))
- Replaced `768px` breakpoint mixins and variables with custom media conditions ([#5629](https://github.com/Shopify/polaris/pull/5629))
- Added `customListId` prop to `Listbox` ([5627](https://github.com/Shopify/polaris/pull/5627))
- Pass `domId` as an argument to `onActiveOptionChange` prop on `Listbox` ([5627](https://github.com/Shopify/polaris/pull/5627))
- Adding min-height to `Popover.Pane` when the `Popover` contains a `height` prop ([#5685](https://github.com/Shopify/polaris/pull/5685))
- Adjusted a hardcoded `padding` value for `FileUpload` and replaced it with a spacing token ([#5675](https://github.com/Shopify/polaris/pull/5675))
- Added `disable` prop to the action groups title of the Page header ([#5702](https://github.com/Shopify/polaris/pull/5702))
- Added `onClick` prop to the action groups title of the Page header ([#5751](https://github.com/Shopify/polaris/pull/5751))
- Used prop-provided `selectable` value in `IndexTable` ([#5661](https://github.com/Shopify/polaris/pull/5661))
- Fixed passing inline styles to the root element of the `CustomProperties` component ([#5661](https://github.com/Shopify/polaris/pull/5661))
- Replaced incorrect usage of `aria-expanded` on `Collapsible` with `aria-hidden` ([#5661](https://github.com/Shopify/polaris/pull/5661))
- Removed usage of deprecated and removed in v18 React types ([#5704](https://github.com/Shopify/polaris/pull/5704))
- Fixed `plain-button-backdrop` background color on colored backgrounds ([#5687](https://github.com/Shopify/polaris/pull/5687))
- Fixed scrolling bug in DataTable sticky header ([#5700](https://github.com/Shopify/polaris/pull/5700))
- Added wrapper with height on `Combobox` example for autocomplete with loading ([#5624](https://github.com/Shopify/polaris/pull/5624))
- Removed `lodash` ([#5544](https://github.com/Shopify/polaris/pull/5544))
- Uses more permissive dependency for `@types/react` and `@types/react-dom` ([#5575](https://github.com/Shopify/polaris/pull/5575))
- Replaced `skeleton-content` and `thumbnail-size` mixins with css values ([#5630](https://github.com/Shopify/polaris/pull/5630))

## 9.6.0

- Added an `autoSelection` prop to `Listbox` to support setting the first option as the default action option ([#5667](https://github.com/Shopify/polaris/pull/5667))
- Added `autoSelection` `AutoSelection.First` to `Autocomplete` `Listbox` when `actionBefore` is set ([#5667](https://github.com/Shopify/polaris/pull/5667))

## 9.5.2

- Fixed documentation example for `ComboBox` ([#5622](https://github.com/Shopify/polaris/pull/5622))

## 9.5.1

- Fixed default `Pip` color in `Badge` ([#5616](https://github.com/Shopify/polaris/pull/5616))

## 9.5.0

- Added `icon` prop to the `Badge` component ([#5292](https://github.com/Shopify/polaris/pull/5292))
- Improved styling for the `DataTable` component when the `increaseTableDensity` prop is set to `true` ([#5480](https://github.com/Shopify/polaris/pull/5480))
- Added support for setting a `ReactNode` on the `PageActions` `secondaryActions` prop ([#5495](https://github.com/Shopify/polaris/pull/5495))
- Added support for NodeJS v14 ([#5551](https://github.com/Shopify/polaris/pull/5551))
- Add `video` as DropZoneFileType option on the `DropZone` component ([#5349](https://github.com/Shopify/polaris/pull/5349))
- Removed whitespace from CustomProperties output ([#5570](https://github.com/Shopify/polaris/pull/5570))
- Added a `height` prop to `Combobox` and `Popover.Pane` to support setting a fixed `height` and `man-height` on the `Scrollable` ([#5571](https://github.com/Shopify/polaris/pull/5571))
- Made `Pip` a sub-component of `Badge` and exposed it to outside ([#5520](https://github.com/Shopify/polaris/pull/5520))
- Fixed focus and hover style on `Tag` for removable tag with link ([#5567](https://github.com/Shopify/polaris/pull/5567))
- Fixed border size on vertical content on `TextField` ([#5571](https://github.com/Shopify/polaris/pull/5571))
- Fixed `aria-activedescendent` being unset in `Combobox` on option select when `allowMultiple` is `true` ([#5584](https://github.com/Shopify/polaris/pull/5584))
- Fixed `Combobox` multi-select examples not resetting the input value and list on option select ([#5584](https://github.com/Shopify/polaris/pull/5584))

## 9.4.0

- Increased token coverage by creating `@keyframes` tokens and replacing hardcoded instances ([5427](https://github.com/Shopify/polaris/pull/5427/))
- Added support for setting a ReactNode on `DataTable` `totalsName` prop ([#5454](https://github.com/Shopify/polaris/pull/5365/))
- Added a `verticalContent` prop to `TextField` to support rendering markup above the input value ([#5392](https://github.com/Shopify/polaris/pull/5392/))
- Added a `suggestion` prop on `TextField` to support inline autocomplete ([5303](https://github.com/Shopify/polaris/pull/5303))
- Added support for setting `ariaAutocomplete` to `both` on `Combobox.TextField` ([5303](https://github.com/Shopify/polaris/pull/5303))
- Added a `willLoadMoreOptions` prop to `Combobox` that's passed to `Listbox` through context so that `onKeyToBottom` is only called if `willLoadMoreOptions` is `true` ([5303](https://github.com/Shopify/polaris/pull/5303))
- Improved `Autocomplete` performance when options are lazy loaded by passing `willLoadMoreResults` to the `Combobox` `willLoadMoreOptions` prop when present ([5303](https://github.com/Shopify/polaris/pull/5303))
- Updated `Listbox` scroll UX to behave natively when navigating options with keyboard instead of scrolling the active option to the top of the visible list ([5303](https://github.com/Shopify/polaris/pull/5303))
- Fixed automatic selection of first navigable `Listbox.Option` not resetting in `Listbox` ([5303](https://github.com/Shopify/polaris/pull/5303))
- Fixed subdued styles not applying to `Listbox.TextOption` when `disabled` ([5303](https://github.com/Shopify/polaris/pull/5303))
- Fixed `Listbox.TextOption` keyboard focus ring flashing when focus moves to an option being scrolled into view ([5303](https://github.com/Shopify/polaris/pull/5303))

## 9.3.0

- Updated `Listbox` to only scroll when active option outside of view ([#5401](https://github.com/Shopify/polaris/pull/5401/))
- Added visual density updates to `Tag` component for mobile view ([#5353](https://github.com/Shopify/polaris/pull/5353))
- Added visual density updates to `Tag` component ([#5312](https://github.com/Shopify/polaris/pull/5312))
- Added `ReactNode` as an accepted prop type to `secondaryActions` on the `Page` component ([#5258](https://github.com/Shopify/polaris/pull/5258))
- Added `useCapture` and `options` props in `KeypressListener` to allow passing through those options to the underlying `addEventListener` call ([#5221](https://github.com/Shopify/polaris/pull/5221))
- Add option to make `Thumbnail` component transparent ([#5109](https://github.com/Shopify/polaris/pull/5109))
- Replaced hard coded `transition` values with tokens ([5340](https://github.com/Shopify/polaris/pull/5340/))
- Replaced hard coded `font-size` and `line-height` values with tokens ([5355](https://github.com/Shopify/polaris/pull/5355/))
- Replaced hard coded spacing values with tokens ([5364](https://github.com/Shopify/polaris/pull/5364/))
- Simplified usage of color tokens ([5360](https://github.com/Shopify/polaris/pull/5360/))
- Increased token coverage by replacing hard coded `border-width` values with tokens, replaced sass var with css custom property, removed unused sass vars, and updated `Banner` Secondary action styles ([5389](https://github.com/Shopify/polaris/pull/5389))
- Created `icon-attention` and `surface-attention` color tokens ([5389](https://github.com/Shopify/polaris/pull/5389))
- Increased token coverage by removing unnecessary `transitions` and `animations` with hard coded duration values ([5405](https://github.com/Shopify/polaris/pull/5405/))
- Added optional visual density updates and zebra striping to `DataTable` ([#5365](https://github.com/Shopify/polaris/pull/5365/))
- Fixed accessibility issues on focus and option create in `Combobox` and `Listbox` ([#5298](https://github.com/Shopify/polaris/pull/5298))
- Fixed accessibility issues and logic to set active descendant in `Listbox` ([#5297](https://github.com/Shopify/polaris/pull/5297))
- Fixed alignment of right-hand side of `Header` in `Page` ([#5390](https://github.com/Shopify/polaris/pull/5390))
- Fixed `disabled` `Listbox.TextOption` not setting `disabled` on the `Checkbox` rendered when `allowMultiple` is `true` ([#5428](https://github.com/Shopify/polaris/pull/5428))
- Bumped `@shopify/polaris-icons` to `v4.18.2` ([#5312](https://github.com/Shopify/polaris/pull/5312))
- Bumped marked from 0.7.0 to 4.0.10 ([#4898](https://github.com/Shopify/polaris/pull/4898))
- Replace `calc()` with space token equivalent ([#5295](https://github.com/Shopify/polaris/pull/5295))

## 9.2.3

- Fixed flash of unstyled content in the CustomProperties component ([#5299](https://github.com/Shopify/polaris/pull/5299))

## 9.2.2

- Passed TextField event object to onFocus callback to address failing admin unit tests ([#5265](https://github.com/Shopify/polaris-react/pull/5265))

## 9.2.1

- Moved all CSS custom properties to be defined under the Polaris color-scheme selector ([#5257](https://github.com/Shopify/polaris-react/pull/5257))

## 9.2.0

- Added the `selectTextOnFocus` prop to `TextField` ([#5216](https://github.com/Shopify/polaris-react/pull/5216))
- Fixed Sheet animation by replacing deprecated `easing()` with css custom property ([#5251](https://github.com/Shopify/polaris-react/pull/5251))

## 9.1.0

- Added `SkeletonTabs` component ([#5229](https://github.com/Shopify/polaris-react/pull/5229))
- Added an inset box-shadow to `ColorPicker` to make it easier to see the draggers ([#4948](https://github.com/Shopify/polaris-react/pull/4948))
- Fixed logo appearing in `Navigation` at 769px ([#5213](https://github.com/Shopify/polaris-react/pull/5213))
- Reintroduced `top: 0` to `VisuallyHidden` CSS to prevent unexpected scrolling when using a `Sheet` ([#5208](https://github.com/Shopify/polaris-react/pull/5208))
- Fixed `Form` > `VisuallyHidden` markup causing excessive vertical whitespace ([#5181](https://github.com/Shopify/polaris-react/pull/5181))
- Fixed a bug in `Toast` where it wasn't rendering ([#5224](https://github.com/Shopify/polaris-react/pull/5224))
- Removed `examples` dir and all references ([#5207](https://github.com/Shopify/polaris-react/pull/5207))

## 9.0.0

For instructions on updating from v8 to v9, see our [migration guide](https://github.com/Shopify/polaris-react/blob/main/documentation/guides/migrating-from-v8-to-v9.md).

### Major changes

**CSS custom properties**

- Removed `--p-badge-font-weight` and `--p-button-font-weight` ([#4687](https://github.com/Shopify/polaris-react/pull/4687))
- Renamed `--p-duration-1-0-0` and `--p-duration-1-5-0` to `--p-duration-100` and `--p-duration-150`.
- Removed `--p-override-*` `--p-non-null-content` `--p-badge-mix-blend-mode` `--p-range-slider-thumb-scale` custom properties ([#4686](https://github.com/Shopify/polaris-react/pull/4686))
- Removed `nonDesignLangaugeCustomProperties` and `designLangaugeCustomProperties` ([#4770](https://github.com/Shopify/polaris-react/pull/4770))
- Renamed shadow custom properties ([#4823](https://github.com/Shopify/polaris-react/pull/4823))
- Renamed border radius custom properties ([#4763](https://github.com/Shopify/polaris-react/pull/4763))
- Renamed `--p-icon-size` to `--p-icon-size-small` ([#4990](https://github.com/Shopify/polaris-react/pull/4990))
- Updated `--global-ribbon-height` to `--pc-frame-global-ribbon-height` ([#4804](https://github.com/Shopify/polaris-react/pull/4804))
- Updated `--p-frame-offset` to `--pc-frame-offset` ([#4804](https://github.com/Shopify/polaris-react/pull/4804))
- Updated `--top-bar-*` to `--pc-top-bar-*` ([#4804](https://github.com/Shopify/polaris-react/pull/4804))

**Sass functions and mixins**

- Removed the `color()` function ([#4696](https://github.com/Shopify/polaris-react/pull/4696))
- Removed the `border-width()` function ([#4900](https://github.com/Shopify/polaris-react/pull/4900))
- Removed the `filter()` function ([#4676](https://github.com/Shopify/polaris-react/pull/4676))
- Removed the `px()` function ([#4751](https://github.com/Shopify/polaris-react/pull/4751))
- Removed the `em()` function ([#4937](https://github.com/Shopify/polaris-react/pull/4937))
- Removed the `rem()` function ([#4761](https://github.com/Shopify/polaris-react/pull/4761/))
- Removed the `color-multiply` function ([#4714](https://github.com/Shopify/polaris-react/pull/4714))
- Removed the `z-index()` function ([#4753](https://github.com/Shopify/polaris-react/pull/4753))
- Removed the `border()` function ([#4934](https://github.com/Shopify/polaris-react/pull/4934))
- Removed the `available-names()` function ([#4967](https://github.com/Shopify/polaris-react/pull/4967))
- Removed the `map-extend` function ([#4970](https://github.com/Shopify/polaris-react/pull/4970))
- Removed the `spacing()` function and replaced with tokens ([#4691](https://github.com/Shopify/polaris-react/pull/4691/))
- Removed the `easing()` function and replaced with tokens ([#4698](https://github.com/Shopify/polaris-react/pull/4698))
- Removed the `duration()` function and replaced with tokens ([#4699](https://github.com/Shopify/polaris-react/pull/4699))
- Removed the `border-radius()` function and replaced with tokens ([#4793](https://github.com/Shopify/polaris-react/pull/4793))
- Removed the `shadow()` function and replaced with tokens ([#4823](https://github.com/Shopify/polaris-react/pull/4823))
- Removed the `font-family()` function and replaced with tokens ([#4940](https://github.com/Shopify/polaris-react/pull/4940))
- Removed the `ms-high-contrast-color()` function and replaced with values ([#4938](https://github.com/Shopify/polaris-react/pull/4938))
- Removed the `color-icon()` mixin ([#4676](https://github.com/Shopify/polaris-react/pull/4676))
- Removed the `skeleton-shimmer` mixin ([#4462](https://github.com/Shopify/polaris-react/pull/4462))
- Removed the `state()` mixin ([#4989](https://github.com/Shopify/polaris-react/pull/4989))
- Removed the `skeleton-page-header-layout` mixin ([#4991](https://github.com/Shopify/polaris-react/pull/4991))
- Removed the `skeleton-page-secondary-actions-layout` mixin ([#4991](https://github.com/Shopify/polaris-react/pull/4991))
- Removed the `unstyled-link()` mixin and replaced with values ([#4951](https://github.com/Shopify/polaris-react/pull/4951))
- Removed the `unstyled-list()` mixin and replaced with values ([#4960](https://github.com/Shopify/polaris-react/pull/4960))
- Removed the `high-contrast-outline()` and `high-contrast-border()` mixins and replaced with tokens and values ([#4962](https://github.com/Shopify/polaris-react/pull/4962))
- Removed the `when-printing`, `when-not-printing`, `hidden-when-printing`, and `print-hidden` scss mixins ([#4995](https://github.com/Shopify/polaris-react/pull/4995))
- Replaced the `icon-size()` function with the `--p-icon-size-medium` custom property ([#4990](https://github.com/Shopify/polaris-react/pull/4990))
- Removed the public scss api ([#4993](https://github.com/Shopify/polaris-react/pull/4993))

**Sass global variables**

- Removed `$color-palette-data` ([#4714](https://github.com/Shopify/polaris-react/pull/4714))
- Removed `$easing-data` ([#4698](https://github.com/Shopify/polaris-react/pull/4698))
- Removed `$duration-data` ([#4699](https://github.com/Shopify/polaris-react/pull/4699))

**ThemeProvider**

- Removed `ThemeProvider` component ([#4642](https://github.com/Shopify/polaris-react/pull/4642))
- Moved `logo` from `ThemeProvider` to `Frame` context ([#4667](https://github.com/Shopify/polaris-react/pull/4667))
- Moved `frameOffset` from `ThemeProvider` to `offset` prop on `Frame` ([#4727](https://github.com/Shopify/polaris-react/pull/4727))

**Components**

- Removed the deprecated `secondaryAction` prop on `SkeletonPage` ([#4742](https://github.com/Shopify/polaris-react/pull/4742))

**Development workflow**

- Removed `build/styles` directory from build output ([#4728](https://github.com/Shopify/polaris-react/pull/4728))
- Dropped support for node < 16 ([#4778](https://github.com/Shopify/polaris-react/pull/4778))
- Added `CustomProperties` component ([#4642](https://github.com/Shopify/polaris-react/pull/4642))
- Added duration token values between `0` and `500` with `50ms` increments ([#4781](https://github.com/Shopify/polaris-react/pull/4781))
- Aligned easing tokens and values with CSS defaults ([#4790](https://github.com/Shopify/polaris-react/pull/4790))
- Fixed `ContextualSaveBar` not registering the `secondaryMenu` in the `Frame` context ([#5116](https://github.com/Shopify/polaris-react/pull/5116))
- Fixed `monochrome` `outline` `Button` `children` being visible when `loading` ([#5145](https://github.com/Shopify/polaris-react/pull/5145))
- Removed `@shopify/polaris-tokens` dependency ([#4868](https://github.com/Shopify/polaris-react/pull/4868))
- Replaced font-weight values with tokens ([#4599](https://github.com/Shopify/polaris-react/issues/4599))
- Replaced hardcoded spacing values with spacing tokens ([#4775](https://github.com/Shopify/polaris-react/pull/4775))
- Avoid some usage of `/` for division in preparation for dart-sass support [#4933](https://github.com/Shopify/polaris-react/pull/4933))
- Deprecated `additionalNavigation` in `<Page>` component

## 8.2.2

- Updated Navigation alignment in `Navigation` ([#5135](https://github.com/Shopify/polaris-react/pull/5135))

## 8.2.1

- Reverted [ColorPicker] Add an inset box-shadow to make it easier to see the draggers ([#4948](https://github.com/Shopify/polaris-react/pull/4948))

## 8.2.0

- Bumped `@shopify/polaris-icons` to v4.17.0 ([#4837](https://github.com/Shopify/polaris-react/pull/4837))

## 8.1.0

- Add an inset box-shadow to `ColorPicker` to make it easier to see the draggers ([#4948](https://github.com/Shopify/polaris-react/pull/4948))
- Tightened up the Navigation component UI density. ([#4874](https://github.com/Shopify/polaris-react/pull/4874))
- Updated mobile behaviour of Navigation to only show one sub-section at a time ([#4902](https://github.com/Shopify/polaris-react/pull/4902))
- Remove the info icon and external link guidance from FooterHelp ([#4982](https://github.com/Shopify/polaris-react/pull/4982))
- Normalise spacing around the `Header` within the `Page` ([#4911](https://github.com/Shopify/polaris-react/pull/4911))
- Added a `secondaryMenu` prop to the `ContextualSaveBar` component ([#5018](https://github.com/Shopify/polaris-react/pull/5018))
- Fixed `segmented` `ButtonGroup` misaligning icon only buttons when grouped with text only buttons ([#4079](https://github.com/Shopify/polaris-react/issues/4079))
- Added missing styles for `destructive` `Page` `secondaryActions` ([#4647](https://github.com/Shopify/polaris-react/pull/4647))
- Removed `min-height` from `Page` `additionalNavigation` ([#4952](https://github.com/Shopify/polaris-react/pull/4952))
- Fixed overly dark `bottom-border` on `DataTable` header cell and total cell ([#4975](https://github.com/Shopify/polaris-react/pull/4975))
- Removed `min-height` on `Autocomplete` `action` ([#4977](https://github.com/Shopify/polaris-react/pull/4977))
- Fixed `focus-ring` on `Banner` `secondaryAction` ([#4997](https://github.com/Shopify/polaris-react/pull/4997))
- Fixed a bug where remove button could shrink in the `Tag` component ([#4816](https://github.com/Shopify/polaris-react/issues/4816))
- Fixed incorrect `Popover` position in `Combobox` when an element is conditionally rendered before the `Combobox` ([#4825](https://github.com/Shopify/polaris-react/pull/4825))
- Reverted the deprecation of the "attention" `status` in `Badge` ([#4840](https://github.com/Shopify/polaris-react/pull/4840))
- Fixed an issue where the `MutationObserver` of the `PositionedOverlay` was calling setState on an unmounted component ([#4869](https://github.com/Shopify/polaris-react/pull/4869));
- Fixed a color contrast issue in `FileUpload` ([#4875](https://github.com/Shopify/polaris-react/pull/4875))
- Fixed a bug where a checkbox showed on an `Autocomplete` action when `allowMultiple` is true ([#4886](https://github.com/Shopify/polaris-react/pull/4886))
- Fixed a bug where the `Listbox.Action` was not treated like an action when used outside `Autocomplete` ([#4893](https://github.com/Shopify/polaris-react/pull/4893))
- Fixed a bug where the `Checkbox` in a `Combobox` with `allowMultiple` would steal focus and close the `Popover` when clicked ([#4895](https://github.com/Shopify/polaris-react/pull/4895))
- Fixed an issue where `TextField` was the wrong height on initial render ([#4903](https://github.com/Shopify/polaris-react/pull/4903))
- Fixed an issue where token values in px weren't converted to rems ([#5000](https://github.com/Shopify/polaris-react/pull/5000))
- Fixed `display` on `Banner` `secondaryAction` on focus in Firefox ([#5001](https://github.com/Shopify/polaris-react/pull/5001))
- Fixed focus ring display on focus of `TopBar` `NavigationIcon` ([#5010](https://github.com/Shopify/polaris-react/pull/5010))
- Improve error logging in the event of sass errors ([#4954](https://github.com/Shopify/polaris-react/pull/4954))

## 8.0.0

For instructions on updating from v7 to v8, see our [migration guide](https://github.com/Shopify/polaris-react/blob/main/documentation/guides/migrating-from-v7-to-v8.md).

### Major changes

- Updated the base font size to `100%` from `62.5%` and update `rem` values accordingly, along with `pxtorem` `rootValue` ([#4794](https://github.com/Shopify/polaris-react/pull/4794))
- Updated required node version to `v16.9.1` ([#4853](https://github.com/Shopify/polaris-react/pull/4853))
- Removed `_SECRET_INTERNAL_FilterControl` and `_SECRET_INTERNAL_FilterControlProps` exports. These exports have been deprecated since Polaris v5 and are not part of our stable API, which is why we are removing them in a minor release. ([#4905](https://github.com/Shopify/polaris-react/pull/4905))

## 7.6.0

- Keyboard arrow navigation support added in `ActionList` ([#4505](https://github.com/Shopify/polaris-react/pull/4505))
- Menu role attribute value support added in `ActionList/Section` ([#4505](https://github.com/Shopify/polaris-react/pull/4505))
- Updated the styling of `DropZone.FileUpload` ([#4813](https://github.com/Shopify/polaris-react/pull/4813))
- Added a minimum height to `Page` component `Header` ([#4770](https://github.com/Shopify/polaris-react/pull/4779))
- Added a `verticalAlign` prop to `OptionList`. ([#4800](https://github.com/Shopify/polaris-react/pull/4800))
- Added suppport for a `url` prop in the `Tag` component ([#4837](https://github.com/Shopify/polaris-react/pull/4837))
- Added support for `children` to take elements other than strings in the `Tag` component ([#4837](https://github.com/Shopify/polaris-react/pull/4837))
- Bumped the `@shopify/storybook-a11y-test` package to the latest version `0.3.0` ([#4870](https://github.com/Shopify/polaris-react/pull/4870))
- Added a `warning` variation to `TextStyle` ([#4880](https://github.com/Shopify/polaris-react/pull/4880))
- Added a class to hide the clear button in the `TextField` component instead of removing it from the DOM ([#4897](https://github.com/Shopify/polaris-react/pull/4897))
- Fixed a bug where remove button could shrink in the `Tag` component ([#4816](https://github.com/Shopify/polaris-react/issues/4816))
- Fixed incorrect `Popover` position in `Combobox` when an element is conditionally rendered before the `Combobox` ([#4825](https://github.com/Shopify/polaris-react/pull/4825))
- Reverted the deprecation of the "attention" `status` in `Badge` ([#4840](https://github.com/Shopify/polaris-react/pull/4840))
- Fixed an issue where the `MutationObserver` of the `PositionedOverlay` was calling setState on an unmounted component ([#4869](https://github.com/Shopify/polaris-react/pull/4869));
- Fixed a color contrast issue in `FileUpload` ([#4875](https://github.com/Shopify/polaris-react/pull/4875))
- Fixed a bug where a checkbox showed on an `Autocomplete` action when `allowMultiple` is true ([#4887](https://github.com/Shopify/polaris-react/pull/4887))
- Fixed a bug where the `Listbox.Action` was not treated like an action when used outside `Autocomplete` ([#4893](https://github.com/Shopify/polaris-react/pull/4893))
- Fixed a bug where the `Checkbox` in a `Combobox` with `allowMultiple` would steal focus and close the `Popover` when clicked ([#4895](https://github.com/Shopify/polaris-react/pull/4895))
- Fixed a bug in the `Icon` component where examples did not show ([#4843](https://github.com/Shopify/polaris-react/pull/4843))
- Added arrow navigation instructions in keyboard support for `ActionList` ([#4505](https://github.com/Shopify/polaris-react/pull/4505))
- Updated examples to properly support JAWS screen reader for `Popover` and `ActionList` ([#4505](https://github.com/Shopify/polaris-react/pull/4505))
- Removed `dev start` command. Thank you to [@aaronadamsCA](https://github.com/aaronadamsCA) for the contribution ([#4876](https://github.com/Shopify/polaris-react/pull/4876)).

- Bumped `@shopify/polaris-icons` to v4.11.0 ([#4837](https://github.com/Shopify/polaris-react/pull/4837))
- Bumped `@storybook/react` to 6.4.10 ([#4796](https://github.com/Shopify/polaris-react/pull/4796))
- Bumped `@shopify/storybook-a11y-test` to 0.4.3 ([#4796](https://github.com/Shopify/polaris-react/pull/4796))
- Removed dependency `serve`. Thank you to [@aaronadamsCA](https://github.com/aaronadamsCA) for the contribution ([#4876](https://github.com/Shopify/polaris-react/pull/4876)).

## 7.5.0

- Removed animation from `Skeleton` components ([#4697](https://github.com/Shopify/polaris-react/pull/4697))
- Remove duplicate duration(fast) usage. ([#4682](https://github.com/Shopify/polaris-react/pull/4682))
- Updated the accessability label for the rollup actions in the `Page` header ([#4080](https://github.com/Shopify/polaris-react/pull/4080))
- Centered full width `Popover` on small viewports ([#4114](https://github.com/Shopify/polaris-react/pull/4114))
- Remove analyze custom properties check. ([#4718](https://github.com/Shopify/polaris-react/pull/4718))
- Removed support for importing from `components` as it slows tests down ([#4735](https://github.com/Shopify/polaris-react/pull/4735), [#4739](https://github.com/Shopify/polaris-react/pull/4739))
- Bumped `postcss` to `v8.3.1` ([#4701](https://github.com/Shopify/polaris-react/pull/4701))
- Bumped `@shopify/postcss-plugin` to `v5.0.1` ([#4701](https://github.com/Shopify/polaris-react/pull/4701))
- Bumped `postcss-loader` to `v4.2.0` ([#4701](https://github.com/Shopify/polaris-react/pull/4701))
- Bumped `postcss-modules` to `v4.2.2` ([#4701](https://github.com/Shopify/polaris-react/pull/4701))
- Bumped `node-sass` to `v6.0.1` ([#4783](https://github.com/Shopify/polaris-react/pull/4783))
- Bumped `sass-loader` to `v10.1.1` ([#4783](https://github.com/Shopify/polaris-react/pull/4783))
- Bumped `stylelint` to `v14.1.0` and `@shopify/stylelint-plugin` to `v11.0.0` ([#4798](https://github.com/Shopify/polaris-react/pull/4798))
- Bumped `eslint` to `v8.3.0` and `@shopify/eslint-plugin` to `v41.0.1` ([#4797](https://github.com/Shopify/polaris-react/pull/4797))
- Removed `rem()` function from `tokens.ts` ([#4695](https://github.com/Shopify/polaris-react/pull/4695))
- Remove unnecessary import of `Tokens` in `Collapsible` test ([#4722](https://github.com/Shopify/polaris-react/pull/4722))
- Remove legacy tokens and use default theme for `.storybook/manager.js` ([#4729](https://github.com/Shopify/polaris-react/pull/4729))
- Deprecated `thumbnail` property for `Page` ([#4733](https://github.com/Shopify/polaris-react/pull/4733))
- Deprecated `secondaryActions` property for `SkeletonPage` ([#4740](https://github.com/Shopify/polaris-react/pull/4740))

## 7.4.1

- Added back miscellaneous css custom properties ([#4679](https://github.com/Shopify/polaris-react/pull/4679))
- Added back custom and unnecessary font weight properties ([#4677](https://github.com/Shopify/polaris-react/pull/4677))
- Fixed an issue with `Popover` where the transform property interfered with descendants positioning ([#4685](https://github.com/Shopify/polaris-react/pull/4685))
- Fixed screen reader accessibility issue of the `Checkbox` component ([#4631](https://github.com/Shopify/polaris-react/pull/4631))

## 7.4.0

- Allowed for `readonly` items in ActionList ([#4623](https://github.com/Shopify/polaris-react/pull/4623))
- Updated `VisuallyHidden` styles to not use `top` or `clip` ([#4641](https://github.com/Shopify/polaris-react/pull/4641))
- Added `PlainAction` type to `ComplexAction`. ([#4489](https://github.com/Shopify/polaris-react/pull/4489))
- Updated timeout of `Popover` exit to `durationFast`. ([#4651](https://github.com/Shopify/polaris-react/pull/4651))
- Reduced the size of the `progress` pip in `Badge` ([#4658](https://github.com/Shopify/polaris-react/pull/4658))
- Updated styling of `DropZone` border and overlay text. ([#4662](https://github.com/Shopify/polaris-react/pull/4662))
- Fixed try-catch syntax error in `Modal` ([#4553](https://github.com/Shopify/polaris-react/pull/4553))
- Fixed an issue with `TextField` where date and time were uneditable on click ([#4671](https://github.com/Shopify/polaris-react/pull/4671))
- Added an example for the `small` `size` variant of `Badge` ([#4658](https://github.com/Shopify/polaris-react/pull/4658))
- Updated top bar description and keywords to include `header` ([#4672](https://github.com/Shopify/polaris-react/pull/4672))
- Tightened up what absolute imports are allowed. Removed `baseUrl` from `tsconfig.json`. Attempting to do an absolute import from `src/X` or `components/X` now results in a error when type-checking. ([#4643](https://github.com/Shopify/polaris-react/pull/4643))
- Cleaned up Button styling and \$button-filled mixin([#4635](https://github.com/Shopify/polaris-react/pull/4635))
- Removed filter functions ([#4650](https://github.com/Shopify/polaris-react/pull/4650))
- Removed all color() invocations ([#4636](https://github.com/Shopify/polaris-react/pull/4636))
- Deprecated passing `attention` to the `status` prop on `Badge` in favor of `warning` ([#4658](https://github.com/Shopify/polaris-react/pull/4658))

## 7.3.1

- Reverted exit timeout in `Popover` to avoid race conditions ([#4633](https://github.com/Shopify/polaris-react/pull/4633))

## 7.3.0

- Added helper hooks `useIndexTableRowHovered`, `useIndexTableRowSelected`, and `useIndexTableContainerScroll` to `IndexTable` ([#4286](https://github.com/Shopify/polaris-react/pull/4286))
- Added token for slim border radius ([#4573](https://github.com/Shopify/polaris-react/pull/4573))
- Improved `Popover` component and its animation ([#4580](https://github.com/Shopify/polaris-react/pull/4580))
- Improved `base` easing curve ([#4580](https://github.com/Shopify/polaris-react/pull/4580))
- Removed vertical padding from wrapping div of `ActionList` ([#4571](https://github.com/Shopify/polaris-react/pull/4571))
- Removed extraneous space in `MediaCard` when card has no actions (thanks to [@emilycritter](https://github.com/emilycritter) for the [pull request](https://github.com/Shopify/polaris-react/pull/4538))
- Fixed a bug in `Stack` where vertical spacing was off ([#4572](https://github.com/Shopify/polaris-react/pull/4572))
- Fixed typo in `DropZone` documentation [4566](https://github.com/Shopify/polaris-react/pull/4566)
- Updated Loom to v1 ([#950](https://github.com/Shopify/global-nav/pull/950))

Bumped polaris-icons to v4.10.0 ([#4569](https://github.com/Shopify/polaris-react/pull/4569))

## 7.2.0

- Updated the primary and secondary action type on `MediaCard` to `ComplexAction` ([#4546](https://github.com/shopify/polaris/pull/4546))
- Fixed `Stack.Item` having margin when empty ([#4556](https://github.com/Shopify/polaris-react/pull/4556))
- Fixed `Stack` not wrapping valid children in `Stack.Item` ([#4556](https://github.com/Shopify/polaris-react/pull/4556)) (thanks [@benjamindoe](https://github.com/benjamindoe) for the [original issue](https://github.com/Shopify/polaris-react/issues/4555))

## 7.1.0

- Added the `ariaControls` prop to `Checkbox` ([#4509](https://github.com/Shopify/polaris-react/pull/4509))
- Reduced vertical spacing in `Page` ([#4541](https://github.com/Shopify/polaris-react/pull/4541))
- Fixed empty children being wrapped with `Item` in `Stack` ([#4487](https://github.com/Shopify/polaris-react/pull/4487))
- Created an example for an IndexTable with multiple promoted bulk actions ([4497](https://github.com/Shopify/polaris-react/pull/4497))
- Light edits to the best practices for `Modal` and `Banner` ([#4501](https://github.com/Shopify/polaris-react/pull/4501))
- Removed banner in navigation example ([#4533](https://github.com/Shopify/polaris-react/pull/4533))

## 7.0.0

For instructions on updating from v6 to v7, see our [migration guide](https://github.com/Shopify/polaris-react/blob/main/documentation/guides/migrating-from-v6-to-v7.md).

### Major changes

- Updated `react` and `react-dom` to version 16.14.0. This is now the minimum version of React required to use the `@shopify/polaris` library.
- Dropping support for node 10.x
- Dropped support for Desktop Safari versions less than 13.1, and ios Safari versions less than 13.6. ([#4304](https://github.com/Shopify/polaris-react/pull/4304))
- Made `autoComplete` prop in `TextField` a required string ([#4267](https://github.com/Shopify/polaris-react/pull/4267)). If you do not want the browser to autofill a user's information (for example an email input which is a customer's email, but not the email of the user who is entering the information), we recommend setting `autoComplete` to `"off"`.
- `Autocomplete` now requires `Autocomplete.TextField` to be used ([#3910](https://github.com/Shopify/polaris-react/pull/3910))
- Removed ComboBox as a named export on `Autocomplete` ([#3910](https://github.com/Shopify/polaris-react/pull/3910))
- Remove the `esnext` folder from the package. If you use Polaris in an app built with sewing-kit, it must use at least sewing-kit 0.152.0 to leverage esnext builds. ([#4425](https://github.com/Shopify/polaris-react/pull/4425))
- The component styles have moved fromm `dist/styles.css` to `build/esm/styles.css`. Consumers who import styles shall need to update their import path. ([#4424](https://github.com/Shopify/polaris-react/pull/4424))
- The public Sass API has moved from `dist/styles/_public-api.scss` to `build/styles/_public-api.scss`. Consumers who use our Sass API shall need to update their import path. ([#4424](https://github.com/Shopify/polaris-react/pull/4424))
- Add `lastColumnSticky` prop to `IndexTable` to create a sticky last cell and optional sticky last heading on viewports larger than small ([#4150](https://github.com/Shopify/polaris-react/pull/4150))
- Added `id` prop to `Layout` and `Heading` for hash linking ([#4307](https://github.com/Shopify/polaris-react/pull/4307))
- Added `external` prop to `Navigation.Item` component ([#4310](https://github.com/Shopify/polaris-react/pull/4310))
- Added `ariaLabelledBy` props to `Navigation` component to allow a hidden label for accessibility ([#4343](https://github.com/Shopify/polaris-react/pull/4343))
- Added consistent spacing to `ActionList` ([#4355](https://github.com/Shopify/polaris-react/pull/4355))
- Added support for promoted actions to be rendered as a menu on the `BulkAction` component ([#4266](https://github.com/Shopify/polaris-react/pull/4266))
- Added optional `onClick` key to `secondaryAction` on `Nav/Item` component ([#4374](https://github.com/Shopify/polaris-react/pull/4374))
- Added `extraSmall` prop to `Avatar` ([#4371](https://github.com/Shopify/polaris-react/pull/4371))
- Added `critical` color option to `ProgressBar` component ([#4408](https://github.com/Shopify/polaris-react/pull/4408))
- Added an imperative `forceUpdatePosition()` API to `Popover` for programmatically triggering a re-render of the underlying overlay component ([#4385](https://github.com/Shopify/polaris-react/pull/4385))
- Added an imperative `forceUpdatePosition()` API to `PositionedOverlay` for programmatically triggering a re-render of the component ([#4385](https://github.com/Shopify/polaris-react/pull/4385))
- Added `wrapOverflow` prop to `AutocompleteProps` props to force text-breakword ([#4416](https://github.com/Shopify/polaris-react/pull/4416))
- Improved `IndexTable` handling of checkboxes when `selectable` prop is `false` ([#4376](https://github.com/Shopify/polaris-react/pull/4376))
- [Accessibility] - Removed skeleton shimmer animation on devices that have Reduced motion setting enabled [#4460](https://github.com/Shopify/polaris-react/pull/4460)
- Added optional `compactTitle` prop to `Page` which removes margin between `title` and `subtitle` ([#4463](https://github.com/Shopify/polaris-react/pull/4463))
- Added `maxHeight` prop to `TextField` component to limit the height of multi-line inputs ([#4476](https://github.com/Shopify/polaris-react/pull/4476))
- Added support for React 17 ([#4432](https://github.com/Shopify/polaris-react/pull/4432))
- Added support for multi-sectioned options in `Autocomplete` [#4221](https://github.com/Shopify/polaris-react/pull/4221)
- Enables optional `onClick` property for `subNavigationItem` on `Nav/Item` component to execute, if provided ([#4394](https://github.com/Shopify/polaris-react/pull/4394))
- Fixed `IndexTable` row hover state colour when unselected ([#4359](https://github.com/Shopify/polaris-react/pull/4359))
- Fixed `selected` prop having no effect for `Navigation.Item` when `url` prop is not specified ([#4375](https://github.com/Shopify/polaris-react/pull/4375))
- Fixed screen readers reading out the clear button in `TextField` when there is no input ([#4369](https://github.com/Shopify/polaris-react/pull/4369))
- Fixed label causing scrollbars to appear instead of wrapping `Option` ([#4411](https://github.com/Shopify/polaris-react/pull/4411))
- Fixed loading state not being passed to `primaryAction` in `Banner` ([#4338](https://github.com/Shopify/polaris-react/pull/4338))
- Fixed `Popover` not correctly positioning itself ([#4357](https://github.com/Shopify/polaris-react/pull/4357))
- Fixed text colour of disabled `TextField` in Safari ([#4344](https://github.com/Shopify/polaris-react/pull/4344))
- Fixed `Button` text colour after changing state from disabled to enabled ([#4270](https://github.com/Shopify/polaris-react/pull/4270))
- Re-added borders on the `IndexTable` sticky cells ([#4150](https://github.com/Shopify/polaris-react/pull/4150))
- Adjust `IndexTable` sticky z-index to avoid collisions with focused `TextField` ([#4150](https://github.com/Shopify/polaris-react/pull/4150))
- Fixed an accessibility bug in `Icon` where `aria-label` was used incorrectly ([#4414](https://github.com/Shopify/polaris-react/pull/4414))
- Restored pointing device interactivity to prefix and suffix slots of the `TextField` component ([#4477](https://github.com/Shopify/polaris-react/pull/4477))
- Fixed incorrect url for tophatting the `Playground` component inside an iframe ([4392](https://github.com/Shopify/polaris-react/pull/4392))
- Simplified content guidelines section for text field component and linked out to thorough guidelines on the text fields experience page ([#4422](https://github.com/Shopify/polaris-react/pull/4422))
- Use `loom` for test and linting harnesses. ([#4402](https://github.com/Shopify/polaris-react/pull/4402), [#4471](https://github.com/Shopify/polaris-react/pull/4471))
- Rebuilt `Autocomplete` internals using new `Combobox` and `Listbox` components built on the ARIA 1.2 spec for improved accessibility ([#3910](https://github.com/Shopify/polaris-react/pull/3910))
- Updated `@shopify/react-testing` to v3.2.0 for React 17 support in tests ([#4349](https://github.com/Shopify/polaris-react/pull/4349))
- Modernized tests for Avatar, Backdrop, Badge, Banner components([#4306](https://github.com/Shopify/polaris-react/pull/4306))
- Modernized tests for Card: Subsection, Header, Sections and Card ([#4325](https://github.com/Shopify/polaris-react/pull/4325)).
- Modernized tests for Item, Panel, List, Tab, TabMeasurer (from Tabs components). ([#4313](https://github.com/Shopify/polaris-react/pull/4313))
- Modernized tests for Tooltip, Toast components([#4314](https://github.com/Shopify/polaris-react/pull/4314))
- Modernized tests for AccountConnection, ActionList components([#4316](https://github.com/Shopify/polaris-react/pull/4316))
- Modernized tests for ActionMenu and its subcomponents ([#4318](https://github.com/Shopify/polaris-react/pull/4318))
- Modernized tests for Loading-List-Item-Label components([#4321](https://github.com/Shopify/polaris-react/pull/4321))
- Modernized tests for DiscardConfirmationModal, ContextualSaveBar, Loading, Toast, ToastManager, Frame (from Frame components) ([#4324](https://github.com/Shopify/polaris-react/pull/4324))
- Modernized tests for Truncate and UnstyledButton ([#4327](https://github.com/Shopify/polaris-react/pull/4327)).
- Modernized tests for PageActions, Page and its components ([#4326](https://github.com/Shopify/polaris-react/pull/4326))
- Modernized tests for FormLayout and some components of ColorPicker ([#4330](https://github.com/Shopify/polaris-react/pull/4330))
- Modernized tests for Breadcrumbs, BulkActions, Button, ButtonGroup/Item, and ButtonGroup components([#4315](https://github.com/Shopify/polaris-react/pull/4315))
- Modernized tests for DualThumb ([#4341](https://github.com/Shopify/polaris-react/pull/4341))
- Modernized tests for AppProvider, AfterInitialMount components([#4331](https://github.com/Shopify/polaris-react/pull/4331))
- Modernized tests for SkeletonBodyTest, SkeletonDisplayTest, SkeletonPage, SkeletonThumbnail, and Spinner components ([#4353](https://github.com/Shopify/polaris-react/pull/4353))
- Modernized tests for CalloutCard, Caption, CheckableButton, Resizer, VideoThumbnail ([#4387](https://github.com/Shopify/polaris-react/pull/4387))
- Modernized tests for Message, Menu, Search, SearchDismissOverlay, SearchField, UserMenu and TopBar components. ([#4311](https://github.com/Shopify/polaris-react/pull/4311))
- Modernized tests for UnstyledLink, Tag, DisplayText, FileUpload, MessageIndicator, Choice and Dialog ([#4407](https://github.com/Shopify/polaris-react/pull/4407)).
- Modernized tests for Konami, Labelled, and Link components([#4389](https://github.com/Shopify/polaris-react/pull/4389))
- Modernized tests for TextStyle, Collapsible, Tabs ([#4453](https://github.com/Shopify/polaris-react/pull/4453))
- Modernized tests for Scrollable, ScrollTo, ScrollLock, Select, SettingToggle, Sheet, Spinner, and Sticky components([#4386](https://github.com/Shopify/polaris-react/pull/4386))
- Modernized tests for Message, Menu, Search, SearchDismissOverlay, SearchField, UserMenu and TopBar components. ([#4311](https://github.com/Shopify/polaris-react/pull/4311))
- Modernized tests for ResourceItem, ResourceList ([#4362](https://github.com/Shopify/polaris-react/pull/4362))
- Modernized tests for MediaCard, and Layout components ([#4393](https://github.com/Shopify/polaris-react/pull/4393))
- Modernized tests for Image and Icon components ([#4418](https://github.com/Shopify/polaris-react/pull/4418))
- Modernized tests for EventListener and EmptySearch components([#4423](https://github.com/Shopify/polaris-react/pull/4423))
- Modernized tests for Pane, Section, PositionedOverlay, SingleThumb, RangeSlider, and ConnectedFilter components ([#4429](https://github.com/Shopify/polaris-react/pull/4429))
- Modernized tests for ContextualSaveBar and DataTable and its subcomponents ([#4397](https://github.com/Shopify/polaris-react/pull/4397))
- Modernized tests for IndexTable, Indicator, InlineError, KeyboardKey, and KeypressListener components([#4431](https://github.com/Shopify/polaris-react/pull/4431))
- Modernized tests for Form and Filters components ([#4434](https://github.com/Shopify/polaris-react/pull/4434) and [#4458](https://github.com/Shopify/polaris-react/pull/4458))
- Modernized tests for OptionList and its subcomponents ([#4441](https://github.com/Shopify/polaris-react/pull/4441))
- Modernized tests for Modal ([#4433](https://github.com/Shopify/polaris-react/pull/4433))
- Modernized tests for Navigation and Navigation.Section ([#4440](https://github.com/Shopify/polaris-react/pull/4440))
- Modernized tests for EmptyState component ([#4427](https://github.com/Shopify/polaris-react/pull/4427))
- Modernized tests for Pagination, FilterControl, FilterCreator, FilterValueSelector, and DateSelector components ([#4438](https://github.com/Shopify/polaris-react/pull/4438))
- Modernized tests for PopoverOverlay component([#4430](https://github.com/Shopify/polaris-react/pull/4430))
- Modernized tests for Dropzone, ExceptionList, and ConnectedFilterControl > Item components([#4412](https://github.com/Shopify/polaris-react/pull/4412))
- Modernized tests for Checkbox and Choicelist ([#4457](https://github.com/Shopify/polaris-react/pull/4457))
- Modernized tests for DatePicker, DescriptionList, and DisplayText ([#4360](https://github.com/Shopify/polaris-react/pull/4360))
- Modernized tests for TextField ([#4456](https://github.com/Shopify/polaris-react/pull/4456))

## 6.6.0

- Prevented `KeypressListener` attaching/detaching on every render ([#4173](https://github.com/Shopify/polaris-react/pull/4173))
- Added `animated` prop in `ProgressBar` ([#4251](https://github.com/Shopify/polaris-react/pull/4251))
- Added `divider` prop to `Page` component ([#4260](https://github.com/Shopify/polaris-react/pull/4260))
- Added `activator` prop to `Sheet` so the triggering element will regain focus ([#4201](https://github.com/Shopify/polaris-react/pull/4201))
- Renamed and exposed Card compound components types ([#4261](https://github.com/Shopify/polaris-react/pull/4261))
- Added `monospaced` prop to `TextField` component ([#4264](https://github.com/Shopify/polaris-react/pull/4264))
- Added base tight spacing option to `Stack` component([#4273](https://github.com/Shopify/polaris-react/pull/4273))
- Fix Safari issue where `Button` text is gray instead of white after changing state from disabled to enabled ([#4270](https://github.com/Shopify/polaris-react/pull/4270))
- Fix console warnings when `DataTable` unmounts ([#4249](https://github.com/Shopify/polaris-react/pull/4249))
- Fix console warnings displaying multiple times in `Sheet` ([#4269](https://github.com/Shopify/polaris-react/pull/4269))
- Remove top shadow when `Popover` and `Scrollable` scroll hinting is complete ([#4265](https://github.com/Shopify/polaris-react/pull/4265))

## 6.5.0

- Disabled `pointer-events` on the prefix and suffix elements of the `TextField` component ([#4207](https://github.com/Shopify/polaris-react/pull/4207))
- Fixed `focus-ring` mixin for when unitless addition occurred ([#4234](https://github.com/Shopify/polaris-react/pull/4234))
- Fixed `Scrollable` lower bound detection for lower resolution screens ([#4218](https://github.com/Shopify/polaris-react/pull/4218))
- Fixed a bug where the inner nested drop zone was not available during a dragging event. ([#4123](https://github.com/Shopify/polaris-react/pull/4123))
- Fixed border misalignment and updated color of `DropZone` to match current design. ([#4123](https://github.com/Shopify/polaris-react/pull/4123))
- Fixed heading overflow issue on dismissible CalloutCard ([#4135](https://github.com/Shopify/polaris-react/pull/4135))
- Fixed `Loading` setting state after it has unmounted ([#4158](https://github.com/Shopify/polaris-react/pull/4158))
- Prevent extra right margin being added to the `Filter` component when used without filters. ([#4134](https://github.com/Shopify/polaris-react/pull/4134))
- Fixed off-center image in EmptyState within page context ([#4140](https://github.com/Shopify/polaris-react/pull/4140))
- Fixed offset in `DualThumb` when used with a min value different from 0 [#4172](https://github.com/Shopify/polaris-react/pull/4172)
- Fixed loading state stacking in `ResourceList` ([#4208](https://github.com/Shopify/polaris-react/issues/4208))
- Fixed focus order of visually hidden input in `DropZone` ([#4219](https://github.com/Shopify/polaris-react/pull/4219))
- Deprecate `Sheet` component [#4210](https://github.com/Shopify/polaris-react/pull/4210)

## 6.4.0

- Add `variableHeight` prop to `DropZone` so children control its height ([#4136](https://github.com/Shopify/polaris-react/pull/4136))
- Add print styles to `Card`, `Heading`, `Layout`, `Layout.Section`, `Subheading`, `TextStyle` components ([#4142](https://github.com/Shopify/polaris-react/pull/4142))
- Add `fullWidth` prop to `ColorPicker` so the color picker can take the full width ([#4152](https://github.com/Shopify/polaris-react/pull/4152))
- Add `noScroll` prop to `Modal` which prevents modal contents from scrolling ([#4153](https://github.com/Shopify/polaris-react/pull/4153))
- Added new `color` prop to ProgressBar ([#3415](https://github.com/Shopify/polaris-react/pull/3415))
- Added `requiredIndicator` prop to `Label`, `Labelled`, `Select` and `TextField` ([#4119](https://github.com/Shopify/polaris-react/pull/4119))
- Add `small` prop to `Modal` so that width can be decreased to 380px ([#4177](https://github.com/Shopify/polaris-react/pull/4177))
- Add `status` prop to `IndexTable.Row` to allow table rows to specify background colors([#4146](https://github.com/Shopify/polaris-react/pull/4146))

## 6.3.0

- Add `hoverable` prop to `DataTable` ([#4074](https://github.com/Shopify/polaris-react/pull/4074))
- Added `interactive` color variant to `Icon` ([#4112](https://github.com/Shopify/polaris-react/pull/4112))
- Update `IndexTable` hover styles for sticky column ([#4113](https://github.com/Shopify/polaris-react/pull/4113))
- Add `colSpan` to the cells in `DataTable` so that cells fill the table width ([#4120](https://github.com/Shopify/polaris-react/pull/4120))

## 6.2.2

- Reverts `<TextField>` to use `autocomplete=off` instead of `autocomplete=nope` ([#4108](https://github.com/Shopify/polaris-react/pull/4108))

## 6.2.1

- Added `hideOnPrint` prop to `Card` and `CardSection` ([#4071](https://github.com/Shopify/polaris-react/pull/4071))
- `DropZone` now has plural sentences when `allowMultiple` is true [#4037](https://github.com/Shopify/polaris-react/pull/4037)
- Hide `IndexTable` header after scrolling past table body ([#4063](https://github.com/Shopify/polaris-react/issues/4063))
- Update `IndexTable` to select row when clicked ([#4062](https://github.com/Shopify/polaris-react/issues/4062))
- Fixed `Filters` focus state when tabbing into the component from a popover ([#4073](https://github.com/Shopify/polaris-react/issues/4073))
- Removed the `isMounted` check from `Portal` to only rely on the useEffect for calling `onPortalCreated` ([#4066](https://github.com/Shopify/polaris-react/pull/4066))
- Removed transition from `BulkActions` to eliminate flicker ([#4081](https://github.com/Shopify/polaris-react/pull/4081))
- update error background color in `Select` ([#4089](https://github.com/Shopify/polaris-react/pull/4089))
- Fixed `Trapfocus` issue that was preventing tabbing with react forms ([#4100](https://github.com/Shopify/polaris-react/pull/4100))

## 6.2.0

- Added `zIndexOverride` prop to `Popover` ([#3937](https://github.com/Shopify/polaris-react/pull/3937))
- Added `statusAndProgressLabelOverride` prop to `Badge` ([#4028](https://github.com/Shopify/polaris-react/pull/4028))
- Added an `onError` hook to the `Avatar` component ([#4052](https://github.com/Shopify/polaris-react/pull/4052))
- `IndexTable` Remove parent resource name from bulk select action ([#4013](https://github.com/Shopify/polaris-react/pull/4013))
- Ensured `@charset` declaration is the first thing in our styles.css file ([#4019](https://github.com/Shopify/polaris-react/pull/4019))
- Fix `Modal.Section` divider color to match header and footer divider ([#4021](https://github.com/Shopify/polaris-react/pull/4021))
- Fix `IndexTable` sticky header alignment and jank ([#4033](https://github.com/Shopify/polaris-react/pull/4033)
- Remove focus ring on click for ActionList ([#4034](https://github.com/Shopify/polaris-react/pull/4034))
- Updated `<TextField>` to use `autocomplete=nope` instead of `autocomplete=off` ([#4053](https://github.com/Shopify/polaris-react/pull/4053))
- Update `@shopify/polaris-tokens to v3.0.0 ([#4030](https://github.com/Shopify/polaris-react/pull/4030))
- Replaced mentions of "invalid" with not "valid" ([#4056](https://github.com/Shopify/polaris-react/pull/4056))

## 6.1.0

- Added `focus-visible` polyfill and default styles ([#3695](https://github.com/Shopify/polaris-react/pull/3695))
- Added `removeUnderline` prop to `Button` to remove underline when `plain` and `monochrome` are true ([#3998](https://github.com/Shopify/polaris-react/pull/3998))
- Removed `#AppFrameMainContent` link and updated SkipToContent link to target `#AppFrameMain` instead ([#3912](https://github.com/Shopify/polaris-react/pull/3912))
- Reset `color` in `unstyled-button` mixin ([#4008](https://github.com/Shopify/polaris-react/pull/4008))
- Added `IndexTable / IndexProvider` component ([#3646](https://github.com/Shopify/polaris-react/pull/3646))
- Added `dataHref` prop to `ResourceItem` which gets passed to the main `li` element as `data-href`([#3975](https://github.com/Shopify/polaris-react/pull/3975))
- Updated examples for `DropZone` so they accept all image types ([#3701](https://github.com/Shopify/polaris-react/pull/3701)) (thanks [@malanjp](https://github.com/malanjp) for the pull request)
- Added focus styles to the dismissiable navigation button in `Frame` ([#3936](https://github.com/Shopify/polaris-react/pull/3936))
- Fixed virtual cursor leaving dialog in `Modal`, `Navigation` and `Sheet` ([#3931](https://github.com/Shopify/polaris-react/pull/3931))
- Fixed `Modal` removing focus from internal elements ([#3964](https://github.com/Shopify/polaris-react/pull/3964))
- Simplified output of `Badge`'s css ([#3950](https://github.com/Shopify/polaris-react/pull/3950))
- Fixed click propagation that was preventing the `Tooltip` to open when used as suffix on a `TextField` ([#3959](https://github.com/Shopify/polaris-react/pull/3959))
- Made items in `ActionList` more clear in high contrast mode ([#3971](https://github.com/Shopify/polaris-react/pull/3971))
- Fixed the MediaCard thumbnail’s corner roundness, so it wouldn’t overflow out of the parent Card ([#3974](https://github.com/Shopify/polaris-react/pull/3974))
- Fixed `Tabs` layout issue on browser resize ([#3980](https://github.com/Shopify/polaris-react/pull/3980))
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
- Removed all `outline` and `border`instances of `-ms-high-contrast` as it is non-standard ([#3962](https://github.com/Shopify/polaris-react/pull/3962))
- Fixed `Autocomplete` popover height not being calculated correctly ([#4015](https://github.com/Shopify/polaris-react/pull/4015))
- Added an example for the `onRemove` prop to `Tag` and clarified that no remove button is rendered when `onClick` is set ([#2987](https://github.com/Shopify/polaris-react/pull/2987))
- Convert `List`, `Tabs.List`, `Connected.Item` and `Filter.ConnectedFiltterControl.Item` to be functional components ([#3961](https://github.com/Shopify/polaris-react/pull/3961))

## 6.0.1

- Updated Link underline style on print to be lighter ([#3943](https://github.com/Shopify/polaris-react/pull/3943))
- Fix issue with currentColor in icons is black instead of white ([#3938](https://github.com/Shopify/polaris-react/pull/3938))
- Fix flakey `Tooltip` test that fails due to opacity transition ([#3940](https://github.com/Shopify/polaris-react/pull/3940))

## 6.0.0

For instructions on updating from v5 to v6, see our [migration guide](https://github.com/Shopify/polaris-react/blob/main/documentation/guides/migrating-from-v5-to-v6.md).

### Major changes

- `Link` is underlined by default, added `removeUnderline` prop to remove underline ([#3705](https://github.com/Shopify/polaris-react/pull/3705))
- Remove `light` property from `Tooltip` as it now defaults to a light background ([#3846](https://github.com/Shopify/polaris-react/pull/3846))
- Made `title` property required in `Modal` ([#3803](https://github.com/Shopify/polaris-react/pull/3803))
- Made `accessibilityLabel` required on `Sheet` ([#3852](https://github.com/Shopify/polaris-react/pull/3852))
- Removed `NewDesignLanguage`, `Color`, `AnimationProps` exported types ([#3868](https://github.com/Shopify/polaris-react/pull/3868))
- Replaced `BaseAction` with `Action` type ([#3868](https://github.com/Shopify/polaris-react/pull/3868))
- Changed the `frameOffset` prop to accept a string in `ThemeProvider` ([#3883](https://github.com/Shopify/polaris-react/pull/3883))
- Removed `Button` and `UnstyledButton`'s `ariaPressed` prop. Consumers should use the `pressed` prop instead ([#3884](https://github.com/Shopify/polaris-react/pull/3884))
- Removed `Button`'s `stretchContent` prop. Consumers should combine the `fullWidth` and `textAlign="left"` props instead ([#3884](https://github.com/Shopify/polaris-react/pull/3884))
- Removed `Popover`/`PopoverOverlay`'s `preventAutoFocus` prop. Consumers should use `autofocusTarget="none"` instead ([#3884](https://github.com/Shopify/polaris-react/pull/3884))
- Removed `button-filled-disabled` and `plain-button-background` SASS mixins ([#3817](https://github.com/Shopify/polaris-react/pull/3817))
- Removed `text-emphasis-placeholder` SASS mixin ([#3889](https://github.com/Shopify/polaris-react/pull/3889))
- Removed `skeleton-page-header-has-secondary-actions` Sass mixin ([#3919](https://github.com/Shopify/polaris-react/pull/3919))
- Removed `plain` property in `Pagination` as it no longer has any effect. ([#3833](https://github.com/Shopify/polaris-react/pull/3833))
- Removed `separator` property in `Page` as it no longer has any effect. ([#3918](https://github.com/Shopify/polaris-react/pull/3918))
- Renamed `additionalMetaData` to `additionalMetadata` in `Header` for consistency with `Title`. ([#3918](https://github.com/Shopify/polaris-react/pull/3918))
- Removed duplicate color definition from disclosure `Icon` in `Tabs` ([#3926](https://github.com/Shopify/polaris-react/pull/3926))
- Fixed an accessibility issue where high contrast styles wouldn’t be applied to the `Tag` component ([#3810](https://github.com/Shopify/polaris-react/pull/3810))
- Fixed `ColorPicker` checker background to remain visible on a white background ([#3812](https://github.com/Shopify/polaris-react/pull/3812))

## 5.15.1

- Add support for backdrop to newDesignLanguage colors in icon ([#3911](https://github.com/Shopify/polaris-react/pull/3911))

## 5.15.0

- Added `titleHidden` property for Modal ([#3905](https://github.com/Shopify/polaris-react/pull/3905))
- Added `accessibilityLabel` property for Sheet ([#3906](https://github.com/Shopify/polaris-react/pull/3906))

## 5.14.1

- Added missing fallbacks to icons and removed warning ([#3897](https://github.com/Shopify/polaris-react/pull/3897)
- Changed `master` branch name to `main` ([#3899](https://github.com/Shopify/polaris-react/pull/3899))

## 5.14.0

- Changed `Label` and `Labelled`’s `label` prop type to `React.ReactNode` instead of `string` ([#3787](https://github.com/Shopify/polaris-react/pull/3787))
- Added `focusable` prop to `Scrollable` for when child content do not have focus ([#3867](https://github.com/Shopify/polaris-react/pull/3867))
- Fixed an incorrect translation key for `accessibilityLabel` in `Tooltip`([#3843](https://github.com/Shopify/polaris-react/pull/3843))
- Fix shadows on filled `Button`s not touching the bottom edge ([#3841](https://github.com/Shopify/polaris-react/pull/3841))
- Adjust `Thumbnail` icon color to be subdued ([#3846](https://github.com/Shopify/polaris-react/pull/3846))
- Updated ToastManager to use aria-live 'assertive' for accessibility ([#3837](https://github.com/Shopify/polaris-react/pull/3837))
- Fixed responsiveness of empty search state in `ResourceList` to support user text zoom settings ([#2983](https://github.com/Shopify/polaris-react/pull/2983))
- Fixed `ActionList` not rendering `.active` indicator ([#3854](https://github.com/Shopify/polaris-react/pull/3854))
- Prevent loss of focus when clicking clear all filters in `Filters` ([#3754](https://github.com/Shopify/polaris-react/pull/3754))

## 5.13.1

- Fix the `Button` focus state offset ([#3832](https://github.com/Shopify/polaris-react/pull/3832))

## 5.13.0

- Updated `OptionList` selected styles ([#3633](https://github.com/Shopify/polaris-react/pull/3633))
- Added the ability to hide the clear filter button on the filter component ([#3049](https://github.com/Shopify/polaris-react/pull/3049))
- Right-align `disclosure` when using `textAlignLeft` for `Button` ([#3709](https://github.com/Shopify/polaris-react/pull/3709))
- Remove all transitions from `Button` ([#3709](https://github.com/Shopify/polaris-react/pull/3709))
- New `select` option for `disclosure` in `Button` ([#3709](https://github.com/Shopify/polaris-react/pull/3709))
- Conveyed `DatePicker` more clearly to screen readers ([#3660](https://github.com/Shopify/polaris-react/pull/3660))
- Added `accessibilityLabels` prop to `Pagination` ([#3667](https://github.com/Shopify/polaris-react/pull/3667))
- New `autofocusTarget` prop to enhance autofocus options on `Popover` ([#3600](https://github.com/Shopify/polaris-react/pull/3600))
- Added ability to hide query text field in `Filters` component using `hideQueryField` prop ([#3674](https://github.com/Shopify/polaris-react/pull/3674))
- Added `tabIndex` to `Scrollable` for keyboard focus ([#3744](https://github.com/Shopify/polaris-react/pull/3744))
- Added accessibility label prop to `UserMenu` and `Menu` subcomponents in `TopBar` ([#3659](https://github.com/Shopify/polaris-react/pull/3659))
- Add `aria-label` to the `Loading` bar in `Frame` ([#3770](https://github.com/Shopify/polaris-react/pull/3770))
- Updated `Collapsible` to be a functional component ([#3779](https://github.com/Shopify/polaris-react/pull/3779))
- Coverted `TooltipOverlay` to a functional component ([#3631](https://github.com/Shopify/polaris-react/pull/3631))
- New `ariaDescribedBy` prop for `Button` ([#3664](https://github.com/Shopify/polaris-react/pull/3686))
- Changed the way sub navigation menus are rendered for improved accessibility ([#3661](https://github.com/Shopify/polaris-react/pull/3661))
- Fixed an accessibility issue where high contrast styles wouldn’t be applied to the `Tag` component ([#3810](https://github.com/Shopify/polaris-react/pull/3810))
- `plain` variant `children` no longer remain visible while `loading` for `Button` ([#3709](https://github.com/Shopify/polaris-react/pull/3709))
- No longer spin `disclosure` 180deg when toggling between `up` and `down` on `Button` ([#3709](https://github.com/Shopify/polaris-react/pull/3709))
- Prevent layout shift when toggling “filled” variants on `Button` ([#3709](https://github.com/Shopify/polaris-react/pull/3709))
- Fixed `FocusManager` from tracking inactive items that prevented trap focusing([#3630](https://github.com/Shopify/polaris-react/pull/3630))
- Added escape keybind to `Tooltip` ([#3627](https://github.com/Shopify/polaris-react/pull/3627))
- Removed extra bottom border on the `DataTable` and added curved edges to footers ([#3571](https://github.com/Shopify/polaris-react/pull/3571))
- **`Button`:** `loading` no longer sets the invalid `role="alert"` ([#3590](https://github.com/Shopify/polaris-react/pull/3590))
- Added semantic headers to `Filters` ([#3629](https://github.com/Shopify/polaris-react/pull/3629))
- Fixed `Filters` not announcing applied filters ([#3632](https://github.com/Shopify/polaris-react/pull/3632))
- Removed `tabIndex=-1` from `Popover` when `preventAutoFocus` is true ([#3595](https://github.com/Shopify/polaris-react/pull/3595))
- Fixed Tooltip not being read properly by screen readers([#3631](https://github.com/Shopify/polaris-react/pull/3631))
- Fixed `Modal` header border color ([#3616](https://github.com/Shopify/polaris-react/pull/3616))
- Added focus styles to `CloseButton` in `Modal` ([#3628](https://github.com/Shopify/polaris-react/pull/3628))
- Fixed `Filters` duplicated `ConnectedFilter` ids ([#3651](https://github.com/Shopify/polaris-react/pull/3651))
- Fixed `Banner` `secondaryAction` only rendering if `action` is set ([#2949](https://github.com/Shopify/polaris-react/pull/2949))
- Added a `alwaysRenderCustomProperties` to `ThemeProvider` for elements that render outside of the DOM tree to their parent context ([#3652](https://github.com/Shopify/polaris-react/pull/3652))
- Fixed keyboard interactions for the `Tab` component ([#3650](https://github.com/Shopify/polaris-react/pull/3650))
- Fixed `TrapFocus` disallowing focus inside `Portal` ([#3790](https://github.com/Shopify/polaris-react/pull/3790))
- Fixed keyboard interaction when selected Tab was focused and rendering the wrong `::before` colour ([#3669](https://github.com/Shopify/polaris-react/pull/3669))
- Added focus ring to disclosure tab when tabbing with keyboard([#3675](https://github.com/Shopify/polaris-react/pull/3675))
- Fixed windows high contrast mode on hover within disclosure menu and displaying active state upon click for `::before` ([#3675](https://github.com/Shopify/polaris-react/pull/3675))
- Removed `aria-selected` from `ActionList` as it is not a selectable list ([#3725](https://github.com/Shopify/polaris-react/pull/3725))
- Moved `aria-role="combobox"` in `Autocomplete` from the `div` to the `input` ([#3727](https://github.com/Shopify/polaris-react/pull/3727))
- Removed `aria-multiline` in `Input` when false or undefined ([#3727](https://github.com/Shopify/polaris-react/pull/3727))
- Removed `aria-multiselectable` from OptionList ([#3729](https://github.com/Shopify/polaris-react/pull/3729))
- Replaced `button` with `div` in `RangeSlider` for correct semantics when using `role="slider"` ([#3730](https://github.com/Shopify/polaris-react/pull/3730))
- Replaced `React.Fragment` with `li` in `ResourceList` spinner for valid markup ([#3732](https://github.com/Shopify/polaris-react/pull/3732))
- Fixed clear button in `TextField` unintentionally closing `Popover` when clicked ([#3688](https://github.com/Shopify/polaris-react/pull/3688))
- Added focus styles to the clear button in `TextField` ([#3688](https://github.com/Shopify/polaris-react/pull/3688))
- Increased contrast of navigation text color ([#3742](https://github.com/Shopify/polaris-react/pull/3742))
- Removed `-ms-high-contrast` media query from `ms-high-contrast-outline` as it is non-standard and updated the outline color from `windowText` to `transparent` ([#3775](https://github.com/Shopify/polaris-react/pull/3775)).
- Fixed `Collapsible` expand and collapse animation ([#3779](https://github.com/Shopify/polaris-react/pull/3779))
- Fixed a bug in `Page` where re-rendering of `secondaryActions` could cause layout jittering ([#3641](https://github.com/Shopify/polaris-react/pull/3641))
- Replaced Travis with GitHub actions ([#3739](https://github.com/Shopify/polaris-react/pull/3739))
- Removed skipped accessibility tests and fixes component accessibility issues ([#3721](https://github.com/Shopify/polaris-react/pull/3721))
- Extracted `TagsWrapper` from `Filters` for testability ([#3688](https://github.com/Shopify/polaris-react/pull/3688))
- `stretchContent` has been replaced by `textAlign="left" + fullWidth` for `Button` ([#3709](https://github.com/Shopify/polaris-react/pull/3709))
- Deprecated `Popover`'s prop `preventAutofocus`. Use `autofocusTarget` instead ([#3602](https://github.com/Shopify/polaris-react/issues/3602))

## 5.12.0

- Added `flush` prop to `Card.Section` ([#3645](https://github.com/Shopify/polaris-react/pull/3645))
- Added `stretchContent` prop for `Button` ([#3664](https://github.com/Shopify/polaris-react/pull/3664))
- Added `accessibilityLabel` to `Link` component ([#3691](https://github.com/Shopify/polaris-react/pull/3691))
- Added dependency list to useImperativeHandle in `Banner` ([#3478](https://github.com/Shopify/polaris-react/pull/3478))
- Internationalized `Badge` labels ([#3655](https://github.com/Shopify/polaris-react/pull/3655))
- Aligned the `::before` 'indicator' to edge of container for `ActionList` ([#3619](https://github.com/Shopify/polaris-react/pull/3619))

## 5.11.0

- Allowed `Thumbnail` `source` property to support `icons` ([#3328](https://github.com/Shopify/polaris-react/pull/3328))
- Added `role` prop for `Button` ([#3590](https://github.com/Shopify/polaris-react/pull/3590))
- Added `preventFocusOnClose` to `Popover` ([#3595](https://github.com/Shopify/polaris-react/pull/3595))
- Added color fallback values to `focus-ring` mixin ([#3626](https://github.com/Shopify/polaris-react/pull/3626))
- Added `role="presentational"` to list items for `Tabs` ([#3647](https://github.com/Shopify/polaris-react/pull/3647))
- Allowed consumers to set custom container element on `PortalsManager` ([#3644](https://github.com/Shopify/polaris-react/pull/3644))
- Fixed `FocusManager` from tracking inactive items that prevented trap focusing([#3630](https://github.com/Shopify/polaris-react/pull/3630))
- Added escape keybind to `Tooltip` ([#3627](https://github.com/Shopify/polaris-react/pull/3627))
- Removed extra bottom border on the `DataTable` and added curved edges to footers ([#3571](https://github.com/Shopify/polaris-react/pull/3571))
- Fixed `loading` no longer sets the invalid `role="alert"` for `Button` ([#3590](https://github.com/Shopify/polaris-react/pull/3590))
- Added semantic headers to `Filters` ([#3629](https://github.com/Shopify/polaris-react/pull/3629))
- Fixed `Filters` not announcing applied filters ([#3632](https://github.com/Shopify/polaris-react/pull/3632))
- Removed `tabIndex=-1` from `Popover` when `preventAutoFocus` is true ([#3595](https://github.com/Shopify/polaris-react/pull/3595))
- Fixed `Modal` header border color ([#3616](https://github.com/Shopify/polaris-react/pull/3616))
- Added focus styles to `CloseButton` in `Modal` ([#3628](https://github.com/Shopify/polaris-react/pull/3628))
- Fixed `Filters` duplicated `ConnectedFilter` ids ([#3651](https://github.com/Shopify/polaris-react/pull/3651))
- Fixed `Banner` `secondaryAction` only rendering if `action` is set ([#2949](https://github.com/Shopify/polaris-react/pull/2949))
- Added a `alwaysRenderCustomProperties` to `ThemeProvider` for elements that render outside of the DOM tree to their parent context ([#3652](https://github.com/Shopify/polaris-react/pull/3652))
- Fixed keyboard interactions for the `Tab` component ([#3650](https://github.com/Shopify/polaris-react/pull/3650))
- Fixed keyboard interaction when selected Tab was focused and rendering the wrong `::before` colour ([#3669](https://github.com/Shopify/polaris-react/pull/3669))
- Fixed `preventAutoFocus` prop description for `Popover` ([#3595](https://github.com/Shopify/polaris-react/pull/3595))

## 5.10.2

- Increased precision of hue, saturation, lightness, and alpha in HSBLA `color-transformers` (https://github.com/Shopify/polaris-react/pull/3640)

## 5.10.1

- Fixed alignment of `Page` and `TopBar` so the search aligns to the page. ([#3610](https://github.com/Shopify/polaris-react/pull/3610))
- Fixed `TopBar` search clear button alignment on iOS ([#3618](https://github.com/Shopify/polaris-react/pull/3618))
- Fixed HSB brightness conversion by increasing precision from 2 decimals to 4 ([#3621](https://github.com/Shopify/polaris-react/pull/3621))

## 5.10.0

- Added `ariaExpanded` prop to `TextField` ([#3589](https://github.com/Shopify/polaris-react/pull/3589))
- Updated `MediaCard` to accept ReactNode as title and make `primaryAction` optional (thanks to [@devchris](https://github.com/devchris) for the [pull request](https://github.com/Shopify/polaris-react/pull/3552))
- **`UnstyledButton`:** Added `loading` prop to apply `role` and `aria-busy` attributes ([#3494](https://github.com/Shopify/polaris-react/pull/3494))
- Optimized `ThemeProvider` to only output its custom properties in nested `ThemeProvider`s when they differ from the parent context ([#3550](https://github.com/Shopify/polaris-react/pull/3550))
- Generalized Tooltip's `content` prop's type to not only accept string, but any `React.Node`. ([#3559](https://github.com/Shopify/polaris-react/pull/3559))
- Updated `TopBar` to show the logo when there is no navigation or search fields ([#3523](https://github.com/Shopify/polaris-react/pull/3523))
- Updated critical `Banner` icon to be a diamond ([#3567](https://github.com/Shopify/polaris-react/pull/3567))
- Fixed `SkeletonPage` to make the title font size consistent with the `Page` component ([#3449](https://github.com/Shopify/polaris-react/pull/3449))
- Removed `Navigation.Item` color change when focused ([#3562](https://github.com/Shopify/polaris-react/pull/3562))
- Adds monochrome styling to `connectedDisclosure` prop on `Button` component and fix spacing issue ([#3588](https://github.com/Shopify/polaris-react/pull/3588)
- Updated our CI accessibility checks to use the axe runnner provided by Storybook's a11y addon. Now now errors match between CI and local runs in Storybook ([#3284](https://github.com/Shopify/polaris-react/pull/3284))
- Updated sewing-kit to 0.140.0 and TypeScript to 4.0.0 ([#3566](https://github.com/Shopify/polaris-react/pull/3566))
- **`Button`:** Reduced redundant code repeated within `UnstyledButton` ([#3494](https://github.com/Shopify/polaris-react/pull/3494))

## 5.9.1

- Fixed Button connected disclosure height when button text has more than 2 lines ([#3536](https://github.com/Shopify/polaris-react/pull/3536))

## 5.9.0

- Updated `Textfield` with a type of number to not render a spinner if step is set to 0 ([#3477](https://github.com/Shopify/polaris-react/pull/3477))
- Fixed `Filters` overflow ([#3532](https://github.com/Shopify/polaris-react/pull/3532))
- Refactored `Portal` to render all `Portals` in a single container ([#3544](https://github.com/Shopify/polaris-react/pull/3544))
- Fixed `Filters` overflow ([#3532](https://github.com/Shopify/polaris-react/pull/3532))

## 5.8.0

- Fixed alignment of badges in navigation items ([#3440](https://github.com/Shopify/polaris-react/pull/3440))
- The Details Page in Storybook now renders the `SearchDismissOverlay` when typing in the search field. ([#3471](https://github.com/Shopify/polaris-react/pull/3471))

## 5.7.0

- Added `OutlineableAction` to the `ComplexAction` type ([#3405](https://github.com/Shopify/polaris-react/pull/3405))
- Added `UnstyledButton` component and refactored `Banner` to use it ([#3406](https://github.com/Shopify/polaris-react/pull/3406))
- Added `prefix` field to `options` prop on `Select` ([#3373](https://github.com/Shopify/polaris-react/pull/3373))

## 5.6.1

- Fixed `BulkActions` from hiding child actions ([#3450](https://github.com/Shopify/polaris-react/pull/3450))

## 5.6.0

- Added `RefOject` as a possible type for the `activator` prop on `Modal` ([#3395](https://github.com/Shopify/polaris-react/pull/3395))
- Fixed `Button` from flashing an icon and changing its width when loading ([#3370](https://github.com/Shopify/polaris-react/pull/3370))

## 5.5.0

- Update `@shopify/polaris-icons` to version 4.0.0 ([#3327](https://github.com/Shopify/polaris-react/pull/3327))
- Moved `li` wrapper on `ResourceList` to `ResourceListItem` ([#3302](https://github.com/Shopify/polaris-react/pull/3302))
- Remove `button-base` mixin from `Frame` SkipAnchor ([#3303](https://github.com/Shopify/polaris-react/pull/3303))
- Updated `Toast` to use `currentColor` for the close icon ([#3324](https://github.com/Shopify/polaris-react/pull/3324))
- Added `disclosureText` to `Tabs` ([#3331](https://github.com/Shopify/polaris-react/pull/3331))
- Added underline to links on focus and active ([#3335](https://github.com/Shopify/polaris-react/pull/3335))
- Added `spacing` prop to `ButtonGroup` ([#3308](https://github.com/Shopify/polaris-react/pull/3308))
- Added `contextControl` prop to `ContextualSaveBar` ([#3357](https://github.com/Shopify/polaris-react/pull/3357))
- Added `spacing` prop to `DescriptionList` ([#3359](https://github.com/Shopify/polaris-react/pull/3359))
- Export `BannerHandles` from `Banner` ([#3368](https://github.com/Shopify/polaris-react/pull/3368))
- Added `prefix` prop to `ActionList` items ([#3313](https://github.com/Shopify/polaris-react/pull/3313))
- Fixes `Badge` when it becomes 2 lines due to small viewport ([#3315](https://github.com/Shopify/polaris-react/pull/3315))
- Update `DatePicker` layout so that `Popover` can calculate the width correctly ([#3330](https://github.com/Shopify/polaris-react/pull/3330))

## 5.4.0

- Hide `ActionMenu`, `Actions`, `RollupActions` menu popover overlays when printing ([#3277](https://github.com/Shopify/polaris-react/pull/3277))
- Updated `DatePicker` component to use semantic HTML table structure ([#3303](https://github.com/Shopify/polaris-react/pull/3303))

## 5.3.1

- Add position relative back to FrameContent [#3259](https://github.com/Shopify/polaris-react/pull/3259)

## 5.3.0

- Vertically center tag text in `Tag` ([#3206](https://github.com/Shopify/polaris-react/pull/3206))
- Update `EmptySearchResult` illustration ([#3185](https://github.com/Shopify/polaris-react/pull/3185)).
- Update `ActionList` to allow the items to have a suffix ([#3216](https://github.com/Shopify/polaris-react/pull/3216)).
- Added support for the `inputMode` attribute on the `TextField` component ([#3222](https://github.com/Shopify/polaris-react/pull/3222)).
- Added `expandOnPrint` prop to `Collapsible` for print support ([#3231](https://github.com/Shopify/polaris-react/pull/3231))
- Added `hideOnPrint` prop to `Popover` to allow hiding the overlay when printing ([#3242](https://github.com/Shopify/polaris-react/pull/3242))
- Fix `Button` css in a `connectedTop` or `fullWidth` `ButtonGroup` ([#3215](https://github.com/Shopify/polaris-react/pull/3215)).
- Fixed `Banner`’s `id` being mismatched on server VS client ([#3199](https://github.com/Shopify/polaris-react/pull/3199)).
- Fixed the border and pip fill colors on the `Badge` to show when printing ([#3226](https://github.com/Shopify/polaris-react/pull/3226)).

- Updated Storybook to v6 ([#3184](https://github.com/Shopify/polaris-react/pull/3184))
- Converted `ActionMenu` to functional component ([#3139](https://github.com/Shopify/polaris-react/pull/3193))

## 5.2.1

- Added `position: relative` to content container within Frame ([#3178](https://github.com/Shopify/polaris-react/pull/3178))

## 5.2.0

- Added optional `videoProgress` and `showVideoProgress` props to `VideoThumbnail` for video progress indicator ([#3057](https://github.com/Shopify/polaris-react/pull/3057))
- Enabled much easier tree-shaking in consuming apps by having a multi-file build instead of a single-file build ([#3137](https://github.com/Shopify/polaris-react/pull/3137))
- Labelled component now breaks on long lines of text, regardless of presence of naturally breaking characters (hyphens, whitespace, etc.) ([#3156](https://github.com/Shopify/polaris-react/pull/3156))
- Added optional `isFiltered` prop to `ResourceList` to conditionally render more informative select all button label ([#3153](https://github.com/Shopify/polaris-react/pull/3153))
- Exported `PositionedOverlay` component for use in consuming applications ([#3161](https://github.com/Shopify/polaris-react/pull/3161))
- Updated package.json to use `esnext` as a custom mainField instead of `sewing-kit:esnext` to match updated sewing-kit behavior ([#3169](https://github.com/Shopify/polaris-react/pull/3169))
- Updated type restrictions for `Tabs` to allow its `content` prop to accept `React.ReactNode` instead of `string` ([#3171](https://github.com/Shopify/polaris-react/pull/3171))
- Fixed `build-consumer` script to handle excludes in package.json's `files` array ([#3136](https://github.com/Shopify/polaris-react/pull/3136))
- Removed the `new-top-bar-height` sass function and replaced its usage with the `--p-top-bar-height` custom property ([#3158](https://github.com/Shopify/polaris-react/pull/3158))

## 5.1.0

- Added a `dismissOnMouseOut` prop to `Tooltip` to dismiss Tooltip once pointer is no longer over children ([#3086](https://github.com/Shopify/polaris-react/pull/3086))
- Fixed case where `DatePicker` did not translate the weekday name in an aria label ([#3113](https://github.com/Shopify/polaris-react/pull/3113))
- Updated browserslist config to be an explicit list instead of extending an existing config, so that consuming apps don't need to depend upon `@shopify/browserslist-config` ([#3132](https://github.com/Shopify/polaris-react/pull/3132))
- Updated Polaris to the latest version in the [CDN Styles example](https://github.com/Shopify/polaris-react/tree/main/examples/cdn-styles?rgh-link-date=2020-06-12T21%3A05%3A52Z) ([#3068](https://github.com/Shopify/polaris-react/pull/3068))
- Updated `TextField` example to use a number instead of a boolean ([#3114](https://github.com/Shopify/polaris-react/pull/3114))
- Updated linting to prefer the fragment shorthand `<>` instead of `<React.Fragment>` ([#3133](https://github.com/Shopify/polaris-react/pull/3133))
- Updated how we access React exports such as React.Component and React.PureComponent to help treeshakability ([#3133](https://github.com/Shopify/polaris-react/pull/3133))

## 5.0.0

### Major changes

- Upgraded `react` and `react-dom` peer-dependencies to 16.9.0 to enable the use of `React.Profiler` ([#2462](https://github.com/Shopify/polaris-react/pull/2462))
- Removed `NavigationMessageProps` as the `Message` component no longer exists ([#2502](https://github.com/Shopify/polaris-react/pull/2502))
- Removed `ResourceList.FilterControl` component. The `FilterControl` component is available under a private name for legacy Shopify applications, but it should not be relied upon and might be deleted at any point ([#2047](https://github.com/Shopify/polaris-react/pull/2047) [#3116](https://github.com/Shopify/polaris-react/pull/3116))
- Removed `AppBridge`, `ResourcePicker` and `Loading`, `Modal`, `Page`, `Toast` App Bridge render delegation ([#2046](https://github.com/Shopify/polaris-react/pull/2046))
- Dropped support for iOS 9 ([#2195](https://github.com/Shopify/polaris-react/pull/2195))
- Moved several of our build artifacts into a `dist` folder ([#2938](https://github.com/Shopify/polaris-react/pull/2938)):
  - `styles.css` has moved to `dist/styles.css`
  - `styles.min.css` has been removed - import `dist/styles.css` instead. Styles are compacted by default so the performance hit is negligible.
  - `styles.scss` has been removed - import `dist/styles.css`and `dist/styles/_public-api.scss` instead
- Updated "esnext" build output to ship plain css files instead of scss source files. Apps built using `@shopify/sewing-kit` will need to update to at least version `0.132.2`. ([#2938](https://github.com/Shopify/polaris-react/pull/2938))
- Moved styles from `global.scss` to `AppProvider`. This change only affects applications using the `esnext` build (applications importing `@shopify/polaris/styles.css` aren’t affected), who no longer need to import the `@shopify/polaris/esnext/global.scss` file. ([#2392](https://github.com/Shopify/polaris-react/pull/2392))
- Reversed the precedence of the language dictionaries passed into the `AppProvider`’s `i18n` prop. When passing an array of dictionaries the first dictionary should be your prefered language, followed by any fallback languages. ([#2572](https://github.com/Shopify/polaris-react/pull/2572))
- Removed `centeredLayout` prop in `EmptyState`. All layouts within the new design language context will be center aligned ([#3111](https://github.com/Shopify/polaris-react/pull/3111))
- Updated types of `DatePicker` component - `month`,`year` `weekStartsOn` are now typed as plain `number` - functionality remains identical as the former types effectively ended up being aliases of `number` anyway ([#3121](https://github.com/Shopify/polaris-react/pull/3121))
- Removed `Year` type export (used by the DatePicker's props). Replace its usage with `number`. ([#3121](https://github.com/Shopify/polaris-react/pull/3121))
- Removed the `Month` enum export (used by the DatePicker's props). Replace its usage with a number from 0 to 11, representing the number of the month in question - `Month.January` becomes `0`, `Month.December` becomes `11` etc. ([#3121](https://github.com/Shopify/polaris-react/pull/3121))
- Removed the `TypeOf` enum, and `GeneralObject`, `DeepPartial`, `EffectCallback`, `DependencyList` and `Comparator` type exports - these were for internal use, and were never documented for external use. ([#3123](https://github.com/Shopify/polaris-react/pull/3123))
- Added an activator prop to `Modal` so that focus can be returned to it when the `Modal` is closed ([#2206](https://github.com/Shopify/polaris-react/pull/2206))
- Fixed case where `DatePicker` did not translate the month name in an aria label ([#3121](https://github.com/Shopify/polaris-react/pull/3121))
- Updated browserlist to use `@shopify/browserslist-config` ([#3101](https://github.com/Shopify/polaris-react/pull/3101))
- Converted `Modal` to a functional component ([#2376](https://github.com/Shopify/polaris-react/pull/2376))
- Migrated to use `react-transition-group` instead of the material-ui fork. ([#3094](https://github.com/Shopify/polaris-react/pull/3094))
- Removed `withAppProvider` higher-order component. ([#3098](https://github.com/Shopify/polaris-react/pull/3098))
- Removed several dependencies on the deprecated `@shopify/javascript-utilities` library ([#3102](https://github.com/Shopify/polaris-react/pull/3102))
- Removed dependency on `@shopify/useful-types`
- Removed dependency on `@shopify/javascript-utilities` ([#3108](https://github.com/Shopify/polaris-react/pull/3108))

## 4.27.0

- Removed padding from the details container in `EmptyState` to account for new illustration size ([#3069](https://github.com/Shopify/polaris-react/pull/3069))
- Added `blueDark` to the list of possible `color` values for an `Icon` with a backdrop ([#3076](https://github.com/Shopify/polaris-react/pull/3076))
- Improved responsive layout for secondary actions in `Banner` ([#3093](https://github.com/Shopify/polaris-react/pull/3093))
- Added `flex: 1 1 auto` to `Banner` `.ContentWrapper` CSS selector ([#3062](https://github.com/Shopify/polaris-react/pull/3062))
- Fixed mis-alignment on `Page` action rollup ([#3064](https://github.com/Shopify/polaris-react/pull/3064))
- Ensured Sass mixins can compile in Dart Sass ([#3064](https://github.com/Shopify/polaris-react/pull/3063))
- Added a border to `TextField` when focus is lost after autofill is implemented([#3075](https://github.com/Shopify/polaris-react/pull/3075))
- Fixed alignment of `ResourceItem` when there is no media ([#3080](https://github.com/Shopify/polaris-react/pull/3080))
- Fixed stacking order of `CloseButton` on `Modal` without a title ([#3077](https://github.com/Shopify/polaris-react/pull/3077))
- Updated AppProvider test component information (thanks to [@jprosevear](https://github.com/jprosevear) for the [pull request](https://github.com/Shopify/polaris-react/pull/3104))
- Updated sewing-kit to v0.132.2 and storybook to v5.3.19 ([#3072](https://github.com/shopify/polaris/pull/3072))
- Migrated tests using document.activeElement to use react-testing ([#3070](https://github.com/Shopify/polaris-react/pull/3070))
- Reduced file size of the empty search SVG by 50% (from 12k to 6k gzipped) ([#3105](https://github.com/Shopify/polaris-react/pull/3105))

## 4.26.1

- Default to `any` for ItemType in resource list ([#3059](https://github.com/Shopify/polaris-react/pull/3059))

## 4.26.0

- Added spacing to `EmptyState` when within content to account for new illustration styles ([#3047](https://github.com/Shopify/polaris-react/pull/3047))
- Changed Resource List to a generic functional component (thanks to [@athornburg](https://github.com/Shopify/polaris-react/pull/2843))
- Made the `renderItem` function infer the type of the items prop (thanks to [@athornburg](https://github.com/Shopify/polaris-react/pull/2843))
- Added a `fullWidth` prop to `EmptyState` to support full width layout within a content context ([#2992](https://github.com/Shopify/polaris-react/pull/2992))
- Added an `emptyState` prop to `ResourceList` to support in context empty states in list views ([#2569](https://github.com/Shopify/polaris-react/pull/2569))
- Set `active` prop of `Popover` to true on keyDown in `ComboBox` to fix `Autocomplete` suggestions not showing when searching and selecting via keyboard ([#3028](https://github.com/Shopify/polaris-react/pull/3028))
  Set `active` prop of `Popover` to true on keyDown in `ComboBox` to fix `Autocomplete` suggestions not showing when searching and selecting via keyboard ([#3028](https://github.com/Shopify/polaris-react/pull/3028))
- Increased the max-width of the `EmptyState` content to 400px ([#3040](https://github.com/Shopify/polaris-react/pull/3040))

## 4.25.2

⚠️ This release was released as a patch version in error. Please use v4.26.0.

- Added spacing to `EmptyState` when within content to account for new illustration styles ([#3047](https://github.com/Shopify/polaris-react/pull/3047))
- Changed Resource List to a generic functional component (thanks to [@athornburg](https://github.com/Shopify/polaris-react/pull/2843))
- Made the `renderItem` function infer the type of the items prop (thanks to [@athornburg](https://github.com/Shopify/polaris-react/pull/2843))
- Added a `fullWidth` prop to `EmptyState` to support full width layout within a content context ([#2992](https://github.com/Shopify/polaris-react/pull/2992))
- Added an `emptyState` prop to `ResourceList` to support in context empty states in list views ([#2569](https://github.com/Shopify/polaris-react/pull/2569))
- Set `active` prop of `Popover` to true on keyDown in `ComboBox` to fix `Autocomplete` suggestions not showing when searching and selecting via keyboard ([#3028](https://github.com/Shopify/polaris-react/pull/3028))
  Set `active` prop of `Popover` to true on keyDown in `ComboBox` to fix `Autocomplete` suggestions not showing when searching and selecting via keyboard ([#3028](https://github.com/Shopify/polaris-react/pull/3028))
- Increased the max-width of the `EmptyState` content to 400px ([#3040](https://github.com/Shopify/polaris-react/pull/3040))
- Updated how global animations are referenced, in order to publish a single entrypoint for the public Sass API (`styles/_public-api.scss`), instead of two (`styles/_public-api.scss` for “vanilla” SCSS and `styles/esnext/_public-api.scss` for CSS Modules) ([#3032](https://github.com/Shopify/polaris-react/pull/3032))
- Deleted an unused prop and its types in `Navigation` ([#3043](https://github.com/Shopify/polaris-react/pull/3043))

## 4.25.1

- Fix latest release on NPM

## 4.25.0

- Added `ReactNode` as an accepted prop type to `primaryAction` on the `Page` component ([#3002](https://github.com/Shopify/polaris-react/pull/3002))

## 4.24.0

- Added a `fullWidth` prop to `ContextualSaveBar` to support full width layout within a content context ([#3014](https://github.com/Shopify/polaris-react/pull/3014))
- Added an optional `size` prop to `MediaCard` to support varying media sizes in the card ([#3013](https://github.com/Shopify/polaris-react/pull/3013))

## 4.23.0

- Added a `fullWidth` prop to `EmptyState` to support full width layout within a content context ([#2992](https://github.com/Shopify/polaris-react/pull/2992))
- Added an `emptyState` prop to `ResourceList` to support in context empty states in list views ([#2569](https://github.com/Shopify/polaris-react/pull/2569))
- Improved top bar transitions when theme changes ([#3007](https://github.com/Shopify/polaris-react/pull/3007))
- Fixed incorrect `icon` color of `Button` when `destructive` and `plain` ([#2958](https://github.com/Shopify/polaris-react/issues/2958))
- Improved speed of type-check and build by enabling TypeScript's `skipLibCheck` option ([#2981](https://github.com/Shopify/polaris-react/pull/2981))
- Updated TypeScript to 3.9.2 ([#2981](https://github.com/Shopify/polaris-react/pull/2981))

## 4.22.0

- Truncated long sort options in `ResourceList` ([#2957](https://github.com/Shopify/polaris-react/pull/2957)
- Updated type restrictions for `Pagination` to allow its `label` prop to accept `React.ReactNode` instead of `string` ([#2972](https://github.com/Shopify/polaris-react/pull/2972))
- Added an `emptySearchState` prop to `ResourceList` to enable the customization of the empty search state ([#2971](https://github.com/Shopify/polaris-react/pull/2971))
- Added an outline on `Banner` for Windows high contrast mode ([#2878](https://github.com/Shopify/polaris-react/pull/2878))
- Fixed Autocomplete / ComboBox focus ([#1089](https://github.com/Shopify/polaris-react/issues/1089))
- Fixed missing rounded corners on `Banner` ([#2975](https://github.com/Shopify/polaris-react/pull/2975))
- Fixed typing for `EmptyState` action ([#2977](https://github.com/Shopify/polaris-react/pull/2977))
- Converted `ComboBox` to a functional component ([#2918](https://github.com/Shopify/polaris-react/pull/2918))
- Deprecated `styles/foundation.scss` and `styles/shared.scss` as entry points to the Polaris Sass public API. They have been replaced with a single file `styles/_public-api.scss`. By having a single entry point we make it a little easier for consuming applications to use our public API - you only need to import one file instead of two. Any references to these two files should be replaced with a reference to `_public-api.scss` which lives in the same folder. Consuming applications using sewing-kit should replace references to `esnext/styles/foundation.scss` and `esnext/styles/shared.scss` with a single reference to `esnext/styles/_public-api.scss`. Note the API itself has not changed - only the mechanism by which you access it. ([#2974](https://github.com/Shopify/polaris-react/pull/2974))

## 4.21.0

- Added `additionalNavigation` prop to `Page` ([#2942](https://github.com/Shopify/polaris-react/pull/2942))

## 4.20.1

- Fixed performance of `ResourceItem` due to inclusion of `children` in deep prop comparison within `shouldComponentUpdate` ([#2936](https://github.com/Shopify/polaris-react/pull/2936))

## 4.20.0

- Removed `max-height` property from `Tooltip` (thanks to [@thayannevls](https://github.com/thayannevls) for the [pull request](https://github.com/Shopify/polaris-react/pull/2908))
- Update `TopBar.Menu` to be properly themed in active, hover and focused state ([#2928](https://github.com/Shopify/polaris-react/pull/2928))
- Added a centeredLayout prop to `EmptyState` ([#2939](https://github.com/Shopify/polaris-react/pull/2939))
- Fixed `Tag` submitting forms when `onClick` is set ([#2895](https://github.com/Shopify/polaris-react/pull/2895))
- Fixed `DescriptionList` content overflowing when `term` or `description` have long unbroken words ([#2880](https://github.com/Shopify/polaris-react/pull/2880))
- Fixed focusing bug on Filters where a newly opened filter would not initially focus the first input, and a newly opened filter would incorrectly focus after an input selection ([#2871](https://github.com/Shopify/polaris-react/pull/2871))
- Fixed automatic pull request generation for `web` and `styleguide` when updating Polaris ([#2892](https://github.com/Shopify/polaris-react/pull/2892))
- Added an example to `Layout` that showcases how to space a banner ([#2929](https://github.com/Shopify/polaris-react/pull/2929))

## 4.19.0

- Updated `Filters` to only show the "More filters" button if necessary ([#2856](https://github.com/Shopify/polaris-react/pull/2856)).
- Updated `TopBar` component to show `secondaryMenu` on small screens ([#2913](https://github.com/Shopify/polaris-react/pull/2913))
- `Badge` adds `critical` status prop styling ([#2902](https://github.com/Shopify/polaris-react/pull/2902))
- Added `border-radius` to the `MediaCard` container ([#2919](https://github.com/Shopify/polaris-react/pull/2919))
- Set `importsNotUsedAsValues` to `error` in TypeScript configuration to force us to be explicit when importing types ([#2901](https://github.com/Shopify/polaris-react/pull/2901))

## 4.18.0

- Added [`MediaCard`](https://polaris.shopify.com/components/video-card) and [`VideoThumbnail`](https://polaris.shopify.com/components/video-thumbnail) ([#2725](https://github.com/Shopify/polaris-react/pull/2725))
- Added [`VideoThumbnail`](https://polaris.shopify.com/components/video-thumbnail) ([#2725](https://github.com/Shopify/polaris-react/pull/2725))
- Added utilities for parsing video duration (https://polaris.shopify.com/components/video-thumbnail) ([#2725](https://github.com/Shopify/polaris-react/pull/2725))
- Updated polaris-tokens to use new font stack ([#2906](https://github.com/Shopify/polaris-react/pull/2906))

## 4.17.1

- `TopBar` navigation icon to use the `var(--top-bar-color)` ([#2898](https://github.com/Shopify/polaris-react/pull/2898)).

- Fixed two typos in the `Form` documentation ([#2879](https://github.com/Shopify/polaris-react/pull/2879))
- Don't use `export *` when exporting from type-only files as importing empty files causes webpack to produce unwanted boilerplate ([#2897](https://github.com/Shopify/polaris-react/pull/2897))

## 4.17.0

- Added `showFocusBorder` prop to the `TopBar.SearchField` to allow users to add show a border on focus ([#2886](https://github.com/Shopify/polaris-react/pull/2886)).
- Added a theme prop for `frameOffset` ([#2887](https://github.com/Shopify/polaris-react/pull/2887))
- Updated the font stack to put `Segoe UI` before `Roboto` ([#2891](https://github.com/Shopify/polaris-react/pull/2891))
- Fixed right padding styling issue with the `Tag` component and remove right padding on a removable `Tag` ([#2860](https://github.com/Shopify/polaris-react/pull/2860)).
- Fixed secondary navigation spacing when no icon is present ([#2874](https://github.com/Shopify/polaris-react/pull/2874)).

- Updated sewing-kit to v0.120.0, and typescript to 3.8.3 ([#2873](https://github.com/Shopify/polaris-react/pull/2873))
- Use `downlevel-dts` to produce compatible type definitions for consuming apps using older TypeScript versions ([#2875](https://github.com/Shopify/polaris-react/pull/2875))

## 4.16.1

- Made no noteworthy changes

## 4.16.0

- Added optional `onClick` prop to `Tag` ([#2774](https://github.com/Shopify/polaris-react/pull/2774))
- Added transition properties to `Collapsible` ([#2835](https://github.com/Shopify/polaris-react/pull/2835))
- Fixed issue with passed to `ComboBox` component options prop was mutated ([#2818](https://github.com/Shopify/polaris-react/pull/2818))
- Fixed an issue which caused `Popover` to close when clicking on a descendant SVG ([#2827](https://github.com/Shopify/polaris-react/pull/2827))
- Removed redundant null check in `TextField` ([#2783](https://github.com/Shopify/polaris-react/pull/2783))

## 4.15.2

- Updated shrink-ray to v2 ([#2800](https://github.com/Shopify/polaris-react/pull/2800))

## 4.15.1

- Reverted const context type to support older versions of typescript in consuming apps ([e7c5e16](https://github.com/Shopify/polaris-react/commit/e7c5e16e8e7b2e70993c5e33c6e34bea428b35b8))
- Fixed broken link in `ThemeProvider` docs ([0ff672d](https://github.com/Shopify/polaris-react/commit/0ff672d2802cb6f4832176de889fe2ab39b101f0))

## 4.15.0

- Added high contrast outline to `Popover`, `Card` and `Indicator` ([#2792](https://github.com/Shopify/polaris-react/pull/2792))
- Removed `overflow: hidden` from `Card` ([#2806](https://github.com/Shopify/polaris-react/pull/2806))
- Truncated long sort options in `ResourceList` ([#2809](https://github.com/Shopify/polaris-react/pull/2809)
- Fixed incorrect used while importing from `polaris-tokens` ([#2778](https://github.com/Shopify/polaris-react/pull/2778))
- Fixed `DropZone` not supporting new file selection when `allowMultiple` is `false` ([#2737](https://github.com/Shopify/polaris-react/pull/2737))
- Fixed `Pagination` sizing on small screens with tooltips ([2747](https://github.com/Shopify/polaris-react/pull/2747))
- Fixed `Popover` setting a `tabindex` and other accessibility attributes on the activator wrapper when the `activator` is disabled ([#2473](https://github.com/Shopify/polaris-react/pull/2473))
- Added a `verticalAlignment` prop to `ResourceItem` to support control of content alignment ([#2743](https://github.com/Shopify/polaris-react/pull/2743)
- Added `check:custom-property` job in travis ([#2778](https://github.com/Shopify/polaris-react/pull/2778))
- Exported missing OptionListProps ([#2777](https://github.com/Shopify/polaris-react/pull/2777))
- Omitted the Storybook `AppProvider` decorator for component examples which already contain an `AppProvider` ([#2807](https://github.com/Shopify/polaris-react/pull/2807))
- Added an `omitAppProvider` front matter concept to prevent automatic wrapping of component examples with an `AppProvider` ([#2815](https://github.com/Shopify/polaris-react/pull/2815))
- Removed various type assertions and bumped test coverage ([#2638](https://github.com/Shopify/polaris-react/pull/2638))

## 4.14.0

- Added high contrast outline to `ActionList` ([#2713](https://github.com/Shopify/polaris-react/pull/2713))
- Added high contrast border to `Button` ([#2712](https://github.com/Shopify/polaris-react/pull/2712))
- Added styled placeholder image to `Avatar` when initials are blank ([#2693](https://github.com/Shopify/polaris-react/pull/2693))
- Added a `preferInputActivator` prop to `Popover` to allow better positioning of the overlay ([#2754](https://github.com/Shopify/polaris-react/pull/2754))
- Updated Polaris Tokens, which now builds modern tokens using TypeScript, fixing issues where Edge threw errors related to modern JavaScript features ([#2763](https://github.com/Shopify/polaris-react/pull/2763))
- Fixed `TrapFocus` stealing focus from other `TrapFocus`'s ([#2681](https://github.com/Shopify/polaris-react/pull/2681))
- Fixed focus state color on monochrome `Buttons` ([#2684](https://github.com/Shopify/polaris-react/pull/2684))
- Fixed container's width on `Modal` ([#2692](https://github.com/Shopify/polaris-react/pull/2692))
- Fixed the position property for the backdrop on `Select` from being overwritten by the focus ring ([#2748](https://github.com/Shopify/polaris-react/pull/2748))
- Fixed `ResourceItem` `Actions` visibility on mouse out ([#2742](https://github.com/Shopify/polaris-react/pull/2742))
- Fixed initial server / client render mismatch in `Avatar` ([#2751](https://github.com/Shopify/polaris-react/pull/2751))
- Added first implementation of custom property validation ([#2616](https://github.com/Shopify/polaris-react/pull/2616))
- Refactored consumer build test (renamed to system integration test) ([#2735](https://github.com/Shopify/polaris-react/pull/2735))
- Added Storybook Knobs for customizing theme ([#2674](https://github.com/Shopify/polaris-react/pull/2674))
- Updated dependencies in example apps ([#2722](https://github.com/Shopify/polaris-react/pull/2722))
- Fixed `Tabs` tests that were preventing `React` updates ([#2702](https://github.com/Shopify/polaris-react/pull/2702))
- Moved to Travis for CI ([#2652](https://github.com/Shopify/polaris-react/pull/2652))

---

## 4.13.1

- Fixed a Sass build error ([#2453](https://github.com/Shopify/polaris-react/pull/2703))

---

## 4.13.0

- Replaced customer avatar images ([#2453](https://github.com/Shopify/polaris-react/pull/2453))
- Added an optional `totalsName` prop to `DataTable` to support custom headings in the totals row ([#2660](https://github.com/Shopify/polaris-react/pull/2660))
- Added `cursor: pointer` to `Choice` ([#2491](https://github.com/Shopify/polaris-react/pull/2491))
- Fixed `Uncaught TypeError: Cannot read property 'rightEdge' of undefined` in `DataTable` ([#2672](https://github.com/Shopify/polaris-react/pull/2672))
- Fixed excessive rendering in `DatePicker` ([#2671](https://github.com/Shopify/polaris-react/pull/2671))
- Fixed plurality of `DataTable` totals row heading ([#2660](https://github.com/Shopify/polaris-react/pull/2660))
- Changed placeholder product names in `Card` code examples ([#2677](https://github.com/Shopify/polaris-react/pull/2677))

---

## 4.12.0

- Added a split variant to `Button` ([#2329](https://github.com/Shopify/polaris-react/pull/2329))
- Allow DataTable headers to be React Elements ([#2635](https://github.com/Shopify/polaris-react/pull/2635))
- Added support for explicit order of items in `ActionMenu` ([2057](https://github.com/Shopify/polaris-react/pull/2057))
- Made the `DataTable` horizontal `Navigation` optional ([#2647](https://github.com/Shopify/polaris-react/pull/2647))
- Fixed `ReferenceError: React is not defined` in `Button` for the `esnext` build ([#2657](https://github.com/Shopify/polaris-react/pull/2657))
- Fixed scrolling with scrollbar not working in Popover when content changes on scroll ([#2627](https://github.com/Shopify/polaris-react/pull/2627))
- Fixed side-effects from being create during `Modal`s render ([#2644](https://github.com/Shopify/polaris-react/pull/2644))
- Work around a build crash when using create-react-app due to a bug in css parsing in `postcss-custom-properties` ([#2643](https://github.com/Shopify/polaris-react/pull/2643))
- Removed the `visited` CSS styling for tabs using the `url` prop ([#2639](https://github.com/Shopify/polaris-react/pull/2639))
- Reworked the yarn splash Github comment and added average splash zone information ([#2649](https://github.com/Shopify/polaris-react/pull/2649))
- Re-enabled the web unit tests in the consumer build test ([#2663](https://github.com/Shopify/polaris-react/pull/2663))
- Converted `/tests/build.test.js` to TypeScript ([#2617](https://github.com/Shopify/polaris-react/pull/2617))
- Use `export *` to rexport component content in component indexs and subcomponent listings ([#2625](https://github.com/Shopify/polaris-react/pull/2625))
- Use `export *` to rexport utility content ([#2636](https://github.com/Shopify/polaris-react/pull/2636))

## 4.11.0

### Major changes

- Remove unstable telemetry API for icons ([#2561](https://github.com/Shopify/polaris-react/pull/2561))
- Added `hideTags` prop to `Filters` ([#2573](https://github.com/Shopify/polaris-react/pull/2573))
- Added `searchResultsOverlayVisible` prop to `TopBar` which adds a translucent background to the search dismissal overlay when results are displayed ([#2440](https://github.com/Shopify/polaris-react/pull/2440))
- Fixed a bug where `Navigation` calls `onNavigationDismiss` on large screens when focused and the escape key is pressed ([#2607](https://github.com/Shopify/polaris-react/pull/2607))
- Fixed issue with `Filters` component displaying an undesired margin top and bottom on the button element on Safari ([#2292](https://github.com/Shopify/polaris-react/pull/2292))
- Fixed `RangeSlider` focus state style issues ([#1926](https://github.com/Shopify/polaris-react/pull/1926))
- Ensure passing `{key: undefined}` into i18n will throw a runtime error in the same way as not passing in the key at all (this was ensured through type-checking at the TypeScript level but people could force through with casting to `any`) ([#2598](https://github.com/Shopify/polaris-react/pull/2598))
- Ensure the normalizedValue within `TextField` is a string (this was already ensured through type-checking at the TypeScript level, but people could force through with casting to `any`, which caused problems) ([#2598](https://github.com/Shopify/polaris-react/pull/2598))
- Fixed an issue with the `Filters` component where the `aria-expanded` attribute was `undefined` on mount ([#2589](https://github.com/Shopify/polaris-react/pull/2589))
- Fixed `TrapFocus` from tabbing out of the container ([#2555](https://github.com/Shopify/polaris-react/pull/2555))
- Fixed `PositionedOverlay` not correctly getting its position when aligned to the right of the activator ([#2587](https://github.com/Shopify/polaris-react/pull/2587))
- Search dismissal overlay now covers the entire screen ([#2440](https://github.com/Shopify/polaris-react/pull/2440))
- Search results component will no longer unmount when hidden ([#2440](https://github.com/Shopify/polaris-react/pull/2440))
- Search results will now match the width of the search field ([#2440](https://github.com/Shopify/polaris-react/pull/2440))
- Updated `Card` with custom footer actions example to be right-aligned ([#2603](https://github.com/Shopify/polaris-react/pull/2603))
- Updated styleguide links in the docs ([#2521](https://github.com/Shopify/polaris-react/pull/2521))
- Updated `Subheading` documentation to be more consistent and accurate ([#2591](https://github.com/Shopify/polaris-react/pull/2591/))
- Updated Storybook to v5.3.2 ([#2618](https://github.com/Shopify/polaris-react/pull/2618))
- Updated `@shopify/polaris-icons` to v3.9.0 ([#2610](https://github.com/Shopify/polaris-react/pull/2610))
- Converted `MenuGroup` into a functional component ([#2536](https://github.com/Shopify/polaris-react/pull/2536))
- Converted `Layout` into a functional component ([#2538](https://github.com/Shopify/polaris-react/pull/2538))
- Converted `FormLayout` into a functional component ([#2539](https://github.com/Shopify/polaris-react/pull/2539))
- Converted `Stack` into a functional component ([#2534](https://github.com/Shopify/polaris-react/pull/2534))
- Converted `BulkActionButton` into a functional component ([#2542](https://github.com/Shopify/polaris-react/pull/2542))
- Converted `Focus` into a functional component ([#2540](https://github.com/Shopify/polaris-react/pull/2540))
- Converted `Tabmeasurer` into a functional component ([#2535](https://github.com/Shopify/polaris-react/pull/2535))
- Converted `Section` into a functional component ([#2537](https://github.com/Shopify/polaris-react/pull/2537))
- Converted `Tooltip` into a functional component ([#2543](https://github.com/Shopify/polaris-react/pull/2543))
- Converted `Option` into a functional component ([#2541](https://github.com/Shopify/polaris-react/pull/2541))
- Avoided unneeded work in `TextField` if character count is not rendered ([#2598](https://github.com/Shopify/polaris-react/pull/2598))

---

## 4.10.2

- Fixed errors when consuming apps manage to pass `undefined` as a value into an translation replacements object ([#2579](https://github.com/Shopify/polaris-react/pull/2579))

## 4.10.1

- Fixed type-error in `TrapFocus` that caused `querySelector` to run on null ([#2574](https://github.com/Shopify/polaris-react/pull/2574))
- Refactored I18n class ([#2562](https://github.com/Shopify/polaris-react/pull/2562))

## 4.10.0

- Fixed `TextField` to no longer render `aria-invalid="false"`. Thank you to [@alexcleduc](https://github.com/AlexCLeduc) for the contribution ([#2339](https://github.com/Shopify/polaris-react/pull/2339)).
- Fixed `TextField` to only render `min` ,`max` and `step` attributes when explicitly passed. Thank you to [@alexcleduc](https://github.com/AlexCLeduc) for the contribution ([#2339](https://github.com/Shopify/polaris-react/pull/2339)).
- Removed reference to `document` in `DropZone` ([#2560](https://github.com/Shopify/polaris-react/pull/2560))
- Fixed Firefox issue in in `DropZone` ([#2568](https://github.com/Shopify/polaris-react/pull/2568))
- Fixed layout issue `DropZone` ([#2568](https://github.com/Shopify/polaris-react/pull/2568))
- Updated to TypeScript 3.7 ([#2549](https://github.com/Shopify/polaris-react/pull/2549))
- Updated stylelint-config-shopify to 7.4.0 ([#2558](https://github.com/Shopify/polaris-react/pull/2558))

## 4.9.1

- Removed reference to `window` in `DropZone` ([#2532](https://github.com/Shopify/polaris-react/pull/2532))
- Fixed a regression in `TrapFocus` that prevented focus outside of an `iframe` ([#2530](https://github.com/Shopify/polaris-react/pull/2530))
- Changed a link to the Polaris icons documentation so it would point to npm (a public resource) rather than the `Shopify/polaris-icons` repository (which is now private) ([#2452](https://github.com/Shopify/polaris-react/pull/2452))

## 4.9.0

- Added `external` prop to `ResourceList` ([#2408](https://github.com/Shopify/polaris-react/pull/2408))
- Added `onMouseEnter` and `onTouchStart` props to `Button` ([#2409](https://github.com/Shopify/polaris-react/pull/2409))
- Added `ariaHaspopup` prop to `Popover` ([#2248](https://github.com/Shopify/polaris-react/pull/2248))
- Moved `Button` styles from the `Buttongroup` CSS file to the `Button` CSS file ([#2441](https://github.com/Shopify/polaris-react/pull/2441))
- Added `footerActionAlignment` prop to control `<Card>` footer action alignment, defaults to `'right'` ([#2407](https://github.com/Shopify/polaris-react/pull/2407))
- Improved contrast of `MessageIndicator` with a border ([#2428](https://github.com/Shopify/polaris-react/pull/2428))
- Removed the need for z-indexes in `Icon` ([#2207](https://github.com/Shopify/polaris-react/pull/2207))
- Added `features` prop to `AppProvider` ([#2204](https://github.com/Shopify/polaris-react/pull/2204))
- Added support for using `EmptyState` in a content context ([#1570](https://github.com/Shopify/polaris-react/pull/1570))
- `Page` no longer renders navigation or actions in print mode ([#2469](https://github.com/Shopify/polaris-react/pull/2469))
- Migrated `Dropzone` to a functional component and reduced its complexity ([#2360](https://github.com/Shopify/polaris-react/pull/2360))
- Added `fluidContent` prop to `Popover` ([#2494](https://github.com/Shopify/polaris-react/pull/2494))
- Prevented scrolling to `Popover` content in development ([#2403](https://github.com/Shopify/polaris-react/pull/2403))
- Fixed an issue which caused HSL colors to not display in Edge ([#2418](https://github.com/Shopify/polaris-react/pull/2418))
- Fixed an issue where the `DropZone` component jumped from an extra-large layout to a layout based on the width of its container ([#2412](https://github.com/Shopify/polaris-react/pull/2412))
- Fixed an issue which caused HSL colors to not display in Edge ([#2418](https://github.com/Shopify/polaris-react/pull/2418))
- Changed `Button`’s `disclosure` prop to be `boolean | "up" | "down"`, allowing greater control over the direction the disclosure caret faces ([#2431](https://github.com/Shopify/polaris-react/pull/2431))
- Added the top bar height to the `Topbar` in `Frame` to ensure the `Sticky` components get the correct top position ([#2415](https://github.com/Shopify/polaris-react/pull/2415))
- Stopped the `merge` utility function from mutating the objects passed as arguments ([#2317](https://github.com/Shopify/polaris-react/pull/2317))
- Updated `Card` footer actions to be right aligned by default again ([#2407](https://github.com/Shopify/polaris-react/pull/2407))
- Fixed the `EmptyState` styles conditional on the `imageContained` prop not being applied ([#2477](https://github.com/Shopify/polaris-react/pull/2477))
- Fixed `TrapFocus` to keep focus within the container when tabbing past the last element ([#2397](https://github.com/Shopify/polaris-react/pull/2397))
- Fixed an accessibility issue where the `Form` implicit submit was still accessible via keyboard ([#2447](https://github.com/Shopify/polaris-react/pull/2447))
- Added a details page and kitchen sink example to Storybook ([#2402](https://github.com/Shopify/polaris-react/pull/2402))
- Combined the interface used by `Page` so the types can be parsed ([#2358](https://github.com/Shopify/polaris-react/pull/2358))
- Updated the `PageActions` example ([#2471](https://github.com/Shopify/polaris-react/pull/2471))
- Fixed spacing of the `Filters` data table example ([#2477](https://github.com/Shopify/polaris-react/pull/2477))
- Fixed duplicate and unclear prop descriptions of `EmptyState` ([#2477](https://github.com/Shopify/polaris-react/pull/2477))
- Added an example for a light `Tooltip` ([#2434](https://github.com/Shopify/polaris-react/pull/2434))
- Updated splash Github Action to the latest Docker beta version ([#2474](https://github.com/Shopify/polaris-react/pull/2474))
- Updated local splash script to use npm package @shopify/splash ([#2474](https://github.com/Shopify/polaris-react/pull/2474))
- Added `dev test:coverage` as an alias for `yarn test:coverage` ([#2496](https://github.com/Shopify/polaris-react/pull/2496))
- Added `dev open coverage` and `yarn open:coverage` commands to open the coverage report ([#2496](https://github.com/Shopify/polaris-react/pull/2496))
- Fixed `yarn test:coverage` so it generates a coverage report ([#2496](https://github.com/Shopify/polaris-react/pull/2496))
- Updated `yarn test:coverage` so it automatically opens the coverage report when complete ([#2496](https://github.com/Shopify/polaris-react/pull/2496))
- Upgraded to `@shopify/react-testing v1.8.0` ([#2465](https://github.com/Shopify/polaris-react/pull/2465))
- Upgraded to Prettier to `v1.19.1` ([#2443](https://github.com/Shopify/polaris-react/pull/2443))
- Changed `TextField` to use a custom hook ([#2464](https://github.com/Shopify/polaris-react/pull/2464))
- Changed `aria-labelledby` to always exist on `TextField` ([#2401](https://github.com/Shopify/polaris-react/pull/2401))
- Converted `ButtonGroup > Item` into a functional component ([#2441](https://github.com/Shopify/polaris-react/pull/2441))
- Refactored `BulkActions` to make use of `ButtonGroup` ([#2441](https://github.com/Shopify/polaris-react/pull/2441))

## 4.8.0

- Updated `Popover` to focus the correct element when closed ([#2255](https://github.com/Shopify/polaris-react/pull/2255))
- Updated the type of the `title` prop in `ChoiceList` from `string` to `ReactNode` ([#2355](https://github.com/Shopify/polaris-react/pull/2355))
- Added `disabled` prop to `Filters` component ([#2389](https://github.com/Shopify/polaris-react/pull/2389))
- Added `helpText` prop to `Filters` component ([#2389](https://github.com/Shopify/polaris-react/pull/2389))
- Fixed an issue where types were not generated for a JSON config file ([#2361](https://github.com/Shopify/polaris-react/pull/2361))
- Enabled maintainers running `yarn dev` to hide [`yarn splash`](https://github.com/Shopify/polaris-react/tree/main/scripts/splash) reports from the console by running `DISABLE_SPLASH=1 yarn dev` ([#2372](https://github.com/Shopify/polaris-react/pull/2372))
- Updated to sewing-kit 0.112.0 and eslint 6 and updated vscode config to use the eslint plugin to format js/ts files ([#2369](https://github.com/Shopify/polaris-react/pull/2369))
- Migrated `Popover` to use hooks ([#2386](https://github.com/Shopify/polaris-react/pull/2386))

## 4.7.3

- Added unstable telemetry API to gather analytics about icon usage ([#2368](https://github.com/Shopify/polaris-react/pull/2368))
- Fixed an accessibility issue with `TextField` `multiline` where `aria-multiline` would be set to an invalid type `number` ([#2351](https://github.com/Shopify/polaris-react/pull/2351))
- Revert [#2231](https://github.com/Shopify/polaris-react/pull/2351) as it breaks middle aligned popovers ([#2237](https://github.com/Shopify/polaris-react/pull/2237))
- Fixed alignement of disclosure icons on `ResourceItem` ([#2370](https://github.com/Shopify/polaris-react/pull/2370))

## 4.7.2

- Fixed a bug with `TextField` which caused infinite layout and high CPU load in Safari, related to [WebKit Bug 194332](https://bugs.webkit.org/show_bug.cgi?id=194332) ([#2379](https://github.com/Shopify/polaris-react/pull/2379))
- Fixed an accessibility issue with `TextField` `multiline` where `aria-multiline` would be set to an invalid type `number` ([#2351](https://github.com/Shopify/polaris-react/pull/2351))
- Fixed alignment of disclosure icons on `ResourceItem` ([#2370](https://github.com/Shopify/polaris-react/pull/2370))
- Updated the `AppProvider` section in the Polaris [v3 to v4 migration guide](https://github.com/Shopify/polaris-react/blob/main/documentation/guides/migrating-from-v3-to-v4.md) ([#2312](https://github.com/Shopify/polaris-react/pull/2312))
- Updated the `Using translations` section in the [AppProvider README](https://github.com/Shopify/polaris-react/blob/main/src/components/AppProvider/README.md#using-translations) ([#2312](https://github.com/Shopify/polaris-react/pull/2312))
- Removed the need to upload assets with each release ([#2346](https://github.com/Shopify/polaris-react/pull/2346))
- Migrated `FilterValueSelector` to use hooks instead of withAppProvider ([#2156](https://github.com/Shopify/polaris-react/pull/2156))
- Added `useIsMountedRef` hook to use while building components ([#2167](https://github.com/Shopify/polaris-react/pull/2167))

## 4.7.1

- Fixed a bug with `Button` which caused infinite layout and high CPU load in Safari, related to [WebKit Bug 194332](https://bugs.webkit.org/show_bug.cgi?id=194332) ([#2350](https://github.com/Shopify/polaris-react/pull/2350))

## 4.7.0

- Updated `OptionList` section title to match `ActionList` section title ([#2300](https://github.com/Shopify/polaris-react/pull/2300))
- Added `pressed` state to `Button` ([#2148](https://github.com/Shopify/polaris-react/pull/2148))
- Updated the type of the `label` prop in `ChoiceList` (nested prop of `choices`) from `string` to `ReactNode` ([#2325](https://github.com/Shopify/polaris-react/pull/2325)).

- Fixed `actionGroups` to only render `MenuActions` when actions are provided in the `Page` ([#2266](https://github.com/Shopify/polaris-react/pull/2266))
- Fixed `PositionedOverlay` incorrectly calculating `Topbar.UserMenu` `Popover` width ([#2231](https://github.com/Shopify/polaris-react/pull/2231))
- Fixed `recolor-icon` Sass mixin to properly scope `$secondary-color` to the child `svg` ([#2298](https://github.com/Shopify/polaris-react/pull/2298))
- Fixed an issue with the `ResourceList` component where the plural resource name was not used for `totalItemsCount` ([#2301](https://github.com/Shopify/polaris-react/issues/2301))
- Fixed Stack Item proportion when shrinking ([#2319](https://github.com/Shopify/polaris-react/pull/2319))
- Fixed animation of `Collapsible` with children having margins ([#1980](https://github.com/Shopify/polaris-react/pull/1980))
- Added vertical adjustment to `OptionList` control items ([#2313](https://github.com/Shopify/polaris-react/pull/2313))
- Updated sewing-kit to v0.111.0 and storybook to v5.2.4 ([#2326](https://github.com/Shopify/polaris-react/pull/2326))

## 4.6.1

- Added CSS custom properties to `Portal` container ([#2306](https://github.com/Shopify/polaris-react/pull/2306))
- Fixed a regression with the positioning of the `Popover` component ([#2305](https://github.com/Shopify/polaris-react/pull/2305))

## 4.6.0

- Added a `totalItemsCount` prop to the `ResourceList` component ([#2233](https://github.com/Shopify/polaris-react/pull/2233))
- Prevented the `Header` primary action label on the `Page` component from wrapping when the title is too long ([#2262](https://github.com/Shopify/polaris-react/pull/2262))
- Fixed an issue with the `Stack` component where a `Stack.Item` was not getting a minimum width ([#2273](https://github.com/Shopify/polaris-react/pull/2273))
- Fixed an issue with `Filters` applying inconsistent border styles to sibling filters when
  there is only one filter in the filter list ([#2284](https://github.com/Shopify/polaris-react/pull/2284))
- Added `aria-disabled` to the `Select` component’s content when it is disabled ([#2281](https://github.com/Shopify/polaris-react/pull/2281))
- Added accessibility documentation for the `DropZone` component ([#2243](https://github.com/Shopify/polaris-react/pull/2243))
- Improved accessibility documentation for the `Spinner` component ([#2258](https://github.com/Shopify/polaris-react/pull/2258))
- Added support for context customization in Storybook using addon-contexts ([#2281](https://github.com/Shopify/polaris-react/pull/2281))
- Migrated `DateSelector` to use hooks instead of withAppProvider ([#2193](https://github.com/Shopify/polaris-react/pull/2193))
- Migrated `Toast` to use hooks ([#2222](https://github.com/Shopify/polaris-react/pull/2222))
- Removed `link`, `theme` and `scrollLockManager` from the object returned by `withAppProvider` as nothing consumes them any more ([#2277](https://github.com/Shopify/polaris-react/pull/2277))

## 4.5.0

- Added `showTotalsInFooter` prop to `DataTable` for control over placement of “Totals” row ([#2200](https://github.com/Shopify/polaris-react/pull/2200))
- Removed the need for z-indexes in `Icon` ([#2207](https://github.com/Shopify/polaris-react/pull/2207))
- Added `hasFocusableParent` to `Spinner` ([#2176](https://github.com/Shopify/polaris-react/pull/2176))
- Fixed tabs that don’t wrap correctly on small screens in pre-iOS 13 Safari ([#2232](https://github.com/Shopify/polaris-react/pull/2232))
- Fixed `BulkActions` checkbox losing selection on focus ([#2138](https://github.com/Shopify/polaris-react/pull/2138))
- Moved rendering of the portal component’s node within the node created by the theme provider component to enable theming through CSS Custom Properties ([#2224](https://github.com/Shopify/polaris-react/pull/2224))
- Fixed a bug which caused the `Popover` overlay to remain in the DOM if it was updated during exiting ([#2246](https://github.com/Shopify/polaris-react/pull/2246))
- Fixed `Breadcrumbs` to use `accessibilityLabel` prop when passed in ([#2254](https://github.com/Shopify/polaris-react/pull/2254))
- Added accessibility documentation for the date picker component ([#2242](https://github.com/Shopify/polaris-react/pull/2242))
- Added accessibility documentation for the empty state component ([#2244](https://github.com/Shopify/polaris-react/pull/2244))
- Improved code quality for the theme provider component ([#2225](https://github.com/Shopify/polaris-react/pull/2225)):

  - updated type for `theme` prop to `ThemeConfig` to distinguish from the type `Theme` which is shared over context. A `Theme` contains only the logo properties, while `ThemeConfig` can contain a `colors` property.
  - converted `ThemeProvider` to use hooks
  - created symmetry in context between app provider and test provider
  - added better tests for default topBar colors
  - fixed an issue where `colorToHsla` returned HSLA strings instead of HSLA objects when given HSL or HSLA strings
  - fixed an issue with `colorToHsla` where RGB colors with no saturation could result in a divide by zero error
  - fixed an issue where `colorToHsla` inconsistently returned an alpha value
  - fixed an issue where `lightenColor` and `darkenColor` would lighten or darken absolute lightness values (0, 100)

## 4.4.0

- Removed the need for z-indexes in `Icon` ([#2207](https://github.com/Shopify/polaris-react/pull/2207))
- Added `features` prop to `AppProvider` ([#2204](https://github.com/Shopify/polaris-react/pull/2204))
- Fixed loss of focus on `TextField` when changing connectedRight/connectedLeft content while user is typing ([#2170](https://github.com/Shopify/polaris-react/pull/2170))
- Fixed `type` for clearButton ([#2060](https://github.com/Shopify/polaris-react/pull/2060))
- Prevented the `onSelect` prop of `Tabs` from changing scroll position ([#2196](https://github.com/Shopify/polaris-react/pull/2196))
- Fixed 200ms visual delay when activating `Popover` ([#2209](https://github.com/Shopify/polaris-react/pull/2209))
- Removed the `ResourceList` `Item` hover state when `Item` is deselected ([#1952](https://github.com/Shopify/polaris-react/pull/1952))
- Fixed `Subheading`’s `font-weight` ([#2218](https://github.com/Shopify/polaris-react/pull/2218))
- Fixed `fullWidth` `CardSection`s when contained in a page with a `Nav` ([#2227](https://github.com/Shopify/polaris-react/pull/2227))
- Converted `SettingToggle`, `Sheet`, and `Tabs` examples to functional components ([#2134](https://github.com/Shopify/polaris-react/pull/2134))
- Converted `Form`, `Frame`, and `Loading` examples to functional components ([#2130](https://github.com/Shopify/polaris-react/pull/2130))
- Replaced Latin abbreviations with English words in Text field content guidelines ([#2192](https://github.com/Shopify/polaris-react/pull/2192))
- Converted `SettingToggle`, `Sheet`, and `Tabs` examples to functional components ([#2134](https://github.com/Shopify/polaris-react/pull/2134))
- Converted `DatePicker`, `DropZone`, and `Filters` examples to functional components ([#2129](https://github.com/Shopify/polaris-react/pull/2129))
- Added `MediaQueryProvider` to ease the use of media queries and reduce duplication ([#2117](https://github.com/Shopify/polaris-react/pull/2117))
- Migrated `Tab` to use hooks instead of `withAppProvider` ([#2123](https://github.com/Shopify/polaris-react/pull/2123))
- Added a GitHub action, [discoverability-action](https://github.com/Shopify/discoverability-action), that runs `yarn splash` on PR diffs and leaves a comment with the output ([#2208](https://github.com/Shopify/polaris-react/pull/2208))

## 4.3.0

- Added new label prop to `Pagination` which is used to insert contextual info between navigation buttons ([#2098](https://github.com/Shopify/polaris-react/pull/2098))
- Updated `trigger` to use `act` ([#2141](https://github.com/Shopify/polaris-react/pull/2141))
- Changed border color of `Drop zone` to have better contrast from the background and to be lighter when disabled ([#2119](https://github.com/Shopify/polaris-react/pull/2119))
- Adjusted search results overlay to take up 100% height of the screen on small screens and to match the width of the search bar on large screens. ([#2103](https://github.com/Shopify/polaris-react/pull/2103))
- Added skipToContentTarget prop to Frame component ([#2080](https://github.com/Shopify/polaris-react/pull/2080))
- Updated `Card` footer actions to be left aligned instead of right by default ([#2075](https://github.com/Shopify/polaris-react/issues/2075))
- Fixed vertical alignment of Tabs disclosure activator ([#2087](https://github.com/Shopify/polaris-react/pull/2087))
- Fixed `Modal` setting an invalid `id` on `aria-labelledby` when no `title` is set ([#2115](https://github.com/Shopify/polaris-react/pull/2115))
- Fixed error warnings in `Card` and `RollupActions` tests ([#2125](https://github.com/Shopify/polaris-react/pull/2125))
- Fixed modal border not being visible in Windows high contrast mode ([#2114](https://github.com/Shopify/polaris-react/pull/2114))
- Added default accessibility label from `ResourceItem` ([#2097](https://github.com/Shopify/polaris-react/pull/2097))
- Reverted `Page.primaryAction` forcing `primary` to be `true` ([#2137](https://github.com/Shopify/polaris-react/pull/2137))
- Removed `React.Children.only` from `AppProvider`and `ThemeProvider` ([#2121](https://github.com/Shopify/polaris-react/pull/2121))
- Fixed visual bug where button width changed in Filters component. Thank you to [@alexieyizhe](https://github.com/alexieyizhe) for the contribution ([#2003](https://github.com/Shopify/polaris-react/pull/2003)).
- Changed `text-rendering` to `auto` in `Select` to prevent Safari 13 from crashing ([#2179](https://github.com/Shopify/polaris-react/pull/2179))
- Converted `Autocomplete`, `Banner`, and `ChoiceList` examples to functional components ([#2127](https://github.com/Shopify/polaris-react/pull/2127))
- Converted `Collapsible`, `ColorPicker`, and `DataTable` examples to functional components ([#2128](https://github.com/Shopify/polaris-react/pull/2128))
- Converted `Modal`, `OptionList`, and `Popover` examples to functional components ([#2131](https://github.com/Shopify/polaris-react/pull/2131))
- Converted `RadioButton`, `RangeSlider`, and `ResourceItem` examples to functional components ([#2132](https://github.com/Shopify/polaris-react/pull/2132))
- Converted `ResourceList`, `ResourcePicker`, and `Select` examples to functional components ([#2133](https://github.com/Shopify/polaris-react/pull/2133))
- Converted `TextField`, `Toast`, and `TopBar` examples to functional components ([#2135](https://github.com/Shopify/polaris-react/pull/2135))
- Updated the `withContext` section in the [v3 to v4 migration guide](https://github.com/Shopify/polaris-react/blob/main/documentation/guides/migrating-from-v3-to-v4.md) ([#2124](https://github.com/Shopify/polaris-react/pull/2124))
- Clarified when to use the `external` prop on the `Link` component ([#2153](https://github.com/Shopify/polaris-react/pull/2153))
- Updated documentation examples to include disclosure on `Popover` activators ([#2171](https://github.com/Shopify/polaris-react/pull/2171))
- Added [`yarn splash` (beta)](/scripts/splash/), a command-line interface to observe the splash zone of a change across the component library ([#2113](https://github.com/Shopify/polaris-react/pull/2113))
- Updated Storybook – [v5.2 release notes](https://medium.com/storybookjs/storybook-5-2-794958b9b111) ([#2157](https://github.com/Shopify/polaris-react/pull/2157))
- Added `useLazyRef` hook to use while building components ([#2166](https://github.com/Shopify/polaris-react/pull/2166))
- Migrated `FilterCreator` to use hooks instead of withAppProvider ([#2156](https://github.com/Shopify/polaris-react/pull/2156))
- Created a custom error for lack of context providers ([#2136](https://github.com/Shopify/polaris-react/pull/2136))
- Migrated `ContextualSaveBar` to use hooks instead of `withAppProvider`. Thank you to [@sijad](https://github.com/sijad) for the contribution ([#2091](https://github.com/Shopify/polaris-react/pull/2091)).
- Migrated `RangeSlider`, `ScrollLock` and `TopBar.SearchField` to use hooks instead of withAppProvider ([#2083](https://github.com/Shopify/polaris-react/pull/2083))
- Updated `ResourceItem` to no longer rely on withAppProvider ([#2094](https://github.com/Shopify/polaris-react/pull/2094))
- Migrated `TextField` and `Resizer` to use hooks ([#1997](https://github.com/Shopify/polaris-react/pull/1997))
- Migrated `Avatar` to use hooks instead of withAppProvider ([#2067](https://github.com/Shopify/polaris-react/pull/2067))
- Updated `Day` and `DatePicker` to use hooks ([#2089](https://github.com/Shopify/polaris-react/pull/2089))

## 4.2.1

- Fixed TypeScript not generating correct types for functional components that have subcomponents ([#2111](https://github.com/Shopify/polaris-react/pull/2111))

## 4.2.0

- Added support for min/max dates in `TextField` by setting a string on `min` and `max` props ([#1991](https://github.com/Shopify/polaris-react/pull/1991))
- Made the `title` prop on `Page` optional, supporting continued use of `Page` for structure in apps using the App Bridge React [`TitleBar`](https://github.com/Shopify/app-bridge/tree/master/packages/app-bridge-react/src/components/TitleBar) ([#2082](https://github.com/Shopify/polaris-react/pull/2082))
- Fixed inconsistent padding of sections in `Modal` ([#2072](https://github.com/Shopify/polaris-react/pull/2072))
- Fixed animation for Modal when being rendered asynchronously ([#2076](https://github.com/Shopify/polaris-react/pull/2076))
- Fixed item content from overflowing past the container in `Stack` ([#2071](https://github.com/Shopify/polaris-react/pull/2071))
- Fixed `Dropzone` hover, disabled, and focus states ([#1994](https://github.com/Shopify/polaris-react/pull/1994))
- Added `name` prop to `ResourceItem` to fix accessibility labels ([#2077](https://github.com/Shopify/polaris-react/pull/2077))
- Fixed misalignment of `ResourceItem` actions ([#2051](https://github.com/Shopify/polaris-react/pull/2051))
- Added Android/iOS images for Plain destructive button ([#2081](https://github.com/Shopify/polaris-react/pull/2081))
- Removed mobile mention from right-aligned text component guidelines ([#2081](https://github.com/Shopify/polaris-react/pull/2081))
- Added mobile example images error state of Single Choice List ([#2007](https://github.com/Shopify/polaris-react/pull/2007))
- Updated Prettier to v1.18.2 ([#2070](https://github.com/Shopify/polaris-react/pull/2070))
- Added a displayName to the function generated by the `withAppProvider` HoC for a better devtools experience ([#2093](https://github.com/Shopify/polaris-react/pull/2093))
- Migrated `ActionMenu.RollupAction`, `Autocomplete`, `Card`, `EmptySearchResult`, `Form`, `SkeletonPage` and `TopBar` to use hooks instead of withAppProvider ([#2065](https://github.com/Shopify/polaris-react/pull/2065))
- Added `useUniqueId` hook that can be used to get a unique id that remains consistent between rerenders and updated components to use it where appropriate ([#2079](https://github.com/Shopify/polaris-react/pull/2079))

## 4.1.0

- Moved `ResourceItem` to its own component ([#1774](https://github.com/Shopify/polaris-react/pull/1774))
- Updated `ResourceList` sort to show an inline label ([#1774](https://github.com/Shopify/polaris-react/pull/1774))
- Removed the `tap-highlight-color` for `Buttons` ([#1545](https://github.com/Shopify/polaris-react/pull/1545))
- Removed `Tooltip` on disabled `Pagination` buttons ([#1963](https://github.com/Shopify/polaris-react/pull/1963))
- Fixed accessibility labels on `ResourceList.Item` persistent action disclosure icon ([#1973](https://github.com/Shopify/polaris-react/pull/1973))
- Fixed accessibility issue with `Autocomplete` where keyboard navigation of options was laggy and skipped options ([#1887](https://github.com/Shopify/polaris-react/pull/1887))
- Fixed bug where `Autocomplete` was bubbling up the `Enter` key event unexpectedly ([#1887](https://github.com/Shopify/polaris-react/pull/1887))
- Fixed `ContextualSaveBar` actions overflowing on small screens ([#1967](https://github.com/Shopify/polaris-react/pull/1967))
- Fixed `Tabs` rollup automatically opening from keyboard navigation of tab list ([#1933](https://github.com/Shopify/polaris-react/pull/1933))
- Updated example section to include new examples and remove old ones ([#1979](https://github.com/Shopify/polaris-react/pull/1979))
- Updated example for the `ResourceList.Item` persistent actions accessibility labels ([#1973](https://github.com/Shopify/polaris-react/pull/1973))
- Removed `FilterControl` documentation and case studies from `ResourceList` documentation ([#1774](https://github.com/Shopify/polaris-react/pull/1774))
- Updated `ResourceList` examples to use `Filters` ([#1774](https://github.com/Shopify/polaris-react/pull/1774))
- Added an example to `Filters` showing the use of `children` ([#1774](https://github.com/Shopify/polaris-react/pull/1774))
- Added guidance for making animated gifs in PRs and issues more accessibility-friendly ([#1998](https://github.com/Shopify/polaris-react/pull/1998))
- Added `RadioButton` guidance to make one option selected by default ([#2005](https://github.com/Shopify/polaris-react/pull/2005))
- Update subcomponents to use named exports for components and better names props exports ([#2058](https://github.com/Shopify/polaris-react/pull/2058))
- Removed mocks in various tests suites that are now redundant ([#1978](https://github.com/Shopify/polaris-react/pull/1978))
- Deprecated `FilterControl`. Use `Filters` instead ([#1774](https://github.com/Shopify/polaris-react/pull/1774))

## 4.0.0

For instructions on updating from v3 to v4, see our [migration guide](https://github.com/Shopify/polaris-react/blob/main/documentation/guides/migrating-from-v3-to-v4.md).

### Major changes

- Removed `groups` prop on `Select`. Pass groups to the `options` prop instead. ([#1831](https://github.com/Shopify/polaris-react/pull/1831))
- Removed `Autocomplete.ComboBox.TextField` and `Autocomplete.ComboBox.OptionList`. You should use the `Autocomplete.TextField` and `OptionList` components instead. ([#1830](https://github.com/Shopify/polaris-react/pull/1830))
- Removed `secondaryFooterAction` prop on `Card`. Pass an array of secondary actions to the `secondaryFooterActions` prop instead. ([#1831](https://github.com/Shopify/polaris-react/pull/1831))
- Removed `iconBody` prop on `Navigation.Item`. Pass a string to the `icon` prop instead. ([#1831](https://github.com/Shopify/polaris-react/pull/1831))
- Removed the `WithContext` component, as it was an undocumented part of the public API meant for internal use only ([#1641](https://github.com/Shopify/polaris-react/pull/1641))
- Removed the `WithRef` component, as it was an undocumented part of the public API meant for internal use only ([#1610](https://github.com/Shopify/polaris-react/pull/1610))
- Removed support for passing a string into `<Icon source>` to load a bundled icon. You must load the required icon directly from `@shopify/polaris-icons` instead. ([#1604](https://github.com/Shopify/polaris-react/pull/1604))
- Removed support for passing an `SvgSource` shaped object into `<Icon source>` to load an icon imported using Shopify’s legacy icon loader. You must update sewing-kit to at least v0.82.0 which replaced the legacy loader with using SVGR. ([#1604](https://github.com/Shopify/polaris-react/pull/1604))
- Removed support for passing a React Element into `<Icon source>`. You must pass in a React Component that returns an SVG element instead. ([#1604](https://github.com/Shopify/polaris-react/pull/1604))
- Removed support for `<Icon untrusted>`. Passing a string into `source` will now always load an untrusted icon, you don’t need that additional property. ([#1604](https://github.com/Shopify/polaris-react/pull/1604)).
- Removed `Navigation.UserMenu`. Use `TopBar.UserMenu` instead. ([#1599](https://github.com/Shopify/polaris-react/pull/1599))
- Made `title` a required prop on `ChoiceList` to improve accessibility. It can be hidden with `titleHidden`. ([#1575](https://github.com/Shopify/polaris-react/pull/1575))
- Made `i18n` a required prop on `AppProvider`. [Usage instructions](https://polaris.shopify.com/components/app-provider#using-translations) are included in the `AppProvider` docs. ([#1530](https://github.com/Shopify/polaris-react/pull/1530))
- Upgraded `react` and `react-dom` peer-dependencies to 16.8.6 to enable the use of hooks ([#1525](https://github.com/Shopify/polaris-react/pull/1525))
- Changed the import method for React to use default imports. Applications consuming Polaris using TypeScript must enable [`esModuleInterop`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-from-commonjs-modules-with---esmoduleinterop) in `tsconfig.json`. ([#1523](https://github.com/Shopify/polaris-react/pull/1523))
- Removed `LinkLikeComponent` type export. Use `AppProviderProps['linkComponent']` instead. ([#1864](https://github.com/Shopify/polaris-react/pull/1864))
- Removed the `Modal.Dialog` and `Tabs.Panel` subcomponents as they were undocumented parts of our public API meant for internal use only ([#1899](https://github.com/Shopify/polaris-react/pull/1899)).

- Added a new `create-react-app` example in TypeScript demonstrating use of Polaris with `react-testing` ([#1937](https://github.com/Shopify/polaris-react/pull/1937))
- Exported `AppliedFilterInterface` and `FilterInterface` from `Filters` ([#1924](https://github.com/Shopify/polaris-react/pull/1924))
- Improved color contrast of links inside `Banner` ([#1651](https://github.com/Shopify/polaris-react/pull/1651))
- Add underline to Links and Plain button on hover, so it doesn’t rely on color alone for accessibility ([#1885](https://github.com/Shopify/polaris-react/pull/1885))
- Add `onQueryFocus` callback prop to the `Filters` component ([#1948](https://github.com/Shopify/polaris-react/pull/1948))
- Fixed types merge of `ActionMenu` `MenuAction` and `MenuGroup.actions` ([#1895](https://github.com/Shopify/polaris-react/pull/1895))
- Fixed the activator buttons of `Page` `actionGroups` not toggling the `Popover` `active` state on click [#1905](https://github.com/Shopify/polaris-react/pull/1905)
- Fixed Windows high contrast support of `Badge` `progress` ([#1928](https://github.com/Shopify/polaris-react/pull/1928))
- Fixed `BulkActionButton` from throwing an error in `componentDidMount` ([#1913](https://github.com/Shopify/polaris-react/pull/1913))
- Fixed `ToastManager` from not working correctly in `React.StrictMode` ([#1741](https://github.com/Shopify/polaris-react/pull/1741))
- Updated translation.yml with the new locales path ([#1649](https://github.com/Shopify/polaris-react/pull/1649))
- Fixed accessibility issue with `Tabs` list item presentation role ([#1958](https://github.com/Shopify/polaris-react/pull/1958))
- Fixed cross-origin error being thrown in `Modal` when loading an external app ([#1992](https://github.com/Shopify/polaris-react/pull/1992))
- Fixed regression in `PopoverOverlay` causing `onClose` to be fired when Popover is opening and trigger was not the activator ([#2000](https://github.com/Shopify/polaris-react/pull/2000))
- Fixed issue with `ContextualSaveBar` blocking search when hidden ([#2044](https://github.com/Shopify/polaris-react/pull/2044))
- Updated `AppProvider` app bridge example to use our `AppBridgeContext` ([#1877](https://github.com/Shopify/polaris-react/pull/1877))
- Added support for React hooks in Storybook ([#1665](https://github.com/Shopify/polaris-react/pull/1665))
- Created `toBeDisabled`, `mountWithContext` and added custom testing matchers ([#1596](https://github.com/Shopify/polaris-react/pull/1596))
- Added `PolarisTestProvider` helper to ease configuration of required Polaris contexts in tests, see [polaris examples](https://github.com/Shopify/polaris-react/tree/main/examples) for usage ([#1810](https://github.com/Shopify/polaris-react/pull/1810))
- Enabled strict mode in TypeScript ([#1883](https://github.com/Shopify/polaris-react/pull/1883))
- Moved to `unpkg.com` for our CDN CSS assets, instead of using `sdks.shopifycdn.com`. Existing URLs will continue to work but new versions will only be available at `unpkg.com`. ([#1960](https://github.com/Shopify/polaris-react/pull/1960))
- Added [ChromaUI](https://www.chromaui.com/) integration for previewing Storybook builds, to potentially replace our self-hosted Heroku instance ([#1975](https://github.com/Shopify/polaris-react/pull/1975))
- Updated `@shopify/polaris` in all examples to 4.0.0-rc.2 ([#1937](https://github.com/Shopify/polaris-react/pull/1937))
- Added `@material-ui/react-transition-group` and removed `react-transition-group` to support `React.StrictMode` ([#1759](https://github.com/Shopify/polaris-react/pull/1759))
- Added `@shopify/react-testing` ([#1596](https://github.com/Shopify/polaris-react/pull/1596))
- Removed`@shopify/css-utilities` ([#1586](https://github.com/Shopify/polaris-react/pull/1586))
- Removed `@types/prop-types` and `prop-types` ([#1505](https://github.com/Shopify/polaris-react/pull/1505))
- Updated`react` to 16.8.6 and `enzyme` to 3.9.1 ([#1392](https://github.com/Shopify/polaris-react/pull/1392))
- Bumped test coverage in `Collapsible` ([#1929](https://github.com/Shopify/polaris-react/pull/1929))
- Bumped test coverage in `DropZone`, `Frame`, `Icon`, and `Loading` ([#1927](https://github.com/Shopify/polaris-react/pull/1927))
- Removed unused type definitions ([#1862](https://github.com/Shopify/polaris-react/pull/1862))
- Ignored deprecation warnings related to Shopify App Bridge in tests ([#1852](https://github.com/Shopify/polaris-react/pull/1852))
- Updated `withAppProvider` to use a functional component rather than a class component ([#1813](https://github.com/Shopify/polaris-react/pull/1813))
- Updated `Link` to use `useI18n` rather than `withAppProvider` ([#1806](https://github.com/Shopify/polaris-react/pull/1806))
- Updated several components to use hooks instead of `withAppProvider` ([#1797](https://github.com/Shopify/polaris-react/pull/1797))
- Removed `CSSTransition` from `PopoverOverlay` ([#1756](https://github.com/Shopify/polaris-react/pull/1756))
- Updated exports in `src/utilities` and `src/test-utilities` to named exports ([#1717](https://github.com/Shopify/polaris-react/pull/1717))
- Removed test errors and non-deprecation warnings ([#1715](https://github.com/Shopify/polaris-react/pull/1715))
- Enabled `React.StrictMode` in test components and Storybook ([#1709](https://github.com/Shopify/polaris-react/pull/1709))
- Removed all uses of `ReactDOM.findDOMNode` ([#1696](https://github.com/Shopify/polaris-react/pull/1696))
- Enabled `react/no-unsafe` ESLint rule with `checkAliases` ([#1695](https://github.com/Shopify/polaris-react/pull/1695))
- Alphabetized component export order and kebab-case files ([#1674](https://github.com/Shopify/polaris-react/pull/1674))
- Updated `Collapsible` to no longer use `componentWillReceiveProps`([#1670](https://github.com/Shopify/polaris-react/pull/1670))
- Restructured context structure to be more modular ([#1664](https://github.com/Shopify/polaris-react/pull/1664))
- Updated `PositionedOverlay` to no longer use `componentWillReceiveProps`([#1621](https://github.com/Shopify/polaris-react/pull/1621))
- Simplified `WithinContentContainer` context type ([#1602](https://github.com/Shopify/polaris-react/pull/1602))
- Updated `OptionList` to no longer use `componentWillReceiveProps` ([#1557](https://github.com/Shopify/polaris-react/pull/1557))
- Refactored `RangeSlider` `DualThumb` tests ([#1548](https://github.com/Shopify/polaris-react/pull/1548))
- Converted `Sheet` to a functional component ([#1548](https://github.com/Shopify/polaris-react/pull/1548))
- Removed `withContext` from `ResourceList.Item` ([#1503](https://github.com/Shopify/polaris-react/pull/1503))
- Removed `withContext` from `Navigation.Item` ([#1502](https://github.com/Shopify/polaris-react/pull/1502))
- Removed `withRef` from `UnstyledLink` ([#1501](https://github.com/Shopify/polaris-react/pull/1501))
- Removed `withContext` from `ResourceList.FilterControl` ([#1500](https://github.com/Shopify/polaris-react/pull/1500))
- Removed `withContext` from `Scrollable.ScrollTo` and added a test to boost coverage ([#1499](https://github.com/Shopify/polaris-react/pull/1499))
- Removed `withContext` from `Loading` ([#1497](https://github.com/Shopify/polaris-react/pull/1497))
- Removed `withContext` and `withAppProvider` from `ContextualSaveBar` ([#1498](https://github.com/Shopify/polaris-react/pull/1498))
- Removed `withContext` from `Toast` ([#1494](https://github.com/Shopify/polaris-react/pull/1494))
- Removed `withRef` and `withContext` from `DropZone.FileUpload` ([#1491](https://github.com/Shopify/polaris-react/pull/1491))
- Created `useAppBridge` hook ([#1482](https://github.com/Shopify/polaris-react/pull/1482))
- Removed testID warning in tests ([#1447](https://github.com/Shopify/polaris-react/pull/1447))
- Updated `AppProvider` to use the new context API and refactored other instances to follow a new pattern and refactor test utilities ([#1424](https://github.com/Shopify/polaris-react/pull/1424))
- Updated all context files to export react context rather than a provider and consumer ([#1424](https://github.com/Shopify/polaris-react/pull/1424))
- Deleted `withSticky` ([#1424](https://github.com/Shopify/polaris-react/pull/1424))
- Upgraded the `Autocomplete` component from legacy context API to use createContext ([#1403](https://github.com/Shopify/polaris-react/pull/1403))
- Upgraded the `Navigation` component from legacy context API to use createContext ([#1402](https://github.com/Shopify/polaris-react/pull/1402))
- Updated `ThemeProvider` to use the new context API ([#1396](https://github.com/Shopify/polaris-react/pull/1396))
- Updated `AppProvider` to no longer use `componentWillReceiveProps`([#1255](https://github.com/Shopify/polaris-react/pull/1255))
- Removed unused context from `Scrollable` ([#1253](https://github.com/Shopify/polaris-react/pull/1253))
- Updated `ThemeProvider` to no longer use `componentWillReceiveProps` ([#1254](https://github.com/Shopify/polaris-react/pull/1254))
- Removed context from `Collapsible` ([#1114](https://github.com/Shopify/polaris-react/pull/1114))
- Refactored `Frame` and its subcomponents to use the `createContext` API instead of legacy context ([#803](https://github.com/Shopify/polaris-react/pull/803))
- Upgraded the `Banner`, `Card`, and `Modal` components from legacy context API to use `createContext` ([#786](https://github.com/Shopify/polaris-react/pull/786))
- Renamed `singleColumn`on`Page`to`narrowWidth` ([#1606](https://github.com/Shopify/polaris-react/pull/1606))

## 3.21.1

- Added `onQueryFocus` callback prop to the `Filters` component ([#1948](https://github.com/Shopify/polaris-react/pull/1948))

## 3.21.0

- Added a `subtitle` and `thumbnail` prop to `Page` ([#1880](https://github.com/Shopify/polaris-react/pull/1880))
- Fixed accessibility issue with ChoiceList errors not being correctly connected to the inputs ([#1824](https://github.com/Shopify/polaris-react/pull/1824))
- Fixed `Tab` `aria-controls` pointing to a non-existent `Panel` `id` ([#1869](https://github.com/Shopify/polaris-react/pull/1869))
- Fixed `Toast` accessibility issue by moving `aria-live` prop to `ToastManager` ([#1873](https://github.com/Shopify/polaris-react/pull/1873))
- Use `@shopify/typescript-configs` as the base of `tsconfig.json` for the project ([#1829](https://github.com/Shopify/polaris-react/pull/1829))

## 3.20.0

- Added a `verticalAlign` prop to `DataTable` ([#1790](https://github.com/Shopify/polaris-react/pull/1790))
- Improved focus and hover states for `Navigation` ([#1822](https://github.com/Shopify/polaris-react/pull/1822))
- Fixed the `SearchInput` clear button which was overflowing the search bar in Firefox 65+ ([#1795](https://github.com/Shopify/polaris-react/pull/1795))
- Fixed a bug preventing the display of `Tooltip` when cursor enters from a disabled element ([#1783](https://github.com/Shopify/polaris-react/pull/1783))
- Fixed React imports in the `Filters` component to use `import * as React` for projects that don’t use `esModuleInterop` ([#1820](https://github.com/Shopify/polaris-react/pull/1820))
- Fixed `tabIndex` on `main` element causing event delegation issues ([#1821](https://github.com/Shopify/polaris-react/pull/1821))
- Fixed icon color for destructive ActionList items ([#1836](https://github.com/Shopify/polaris-react/pull/1836))
- Fixed not being able to explictly set `autoComplete` prop on`Autocomplete.TextField` ([#1839](https://github.com/Shopify/polaris-react/pull/1839))
- Added links to App Bridge React component documentation in deprecation notices for embedded components ([#1765](https://github.com/Shopify/polaris-react/pull/1765))
- Improved link text for App Bridge deprecation notices [#1802](https://github.com/Shopify/polaris-react/pull/1802)
- Use explicit imports for our base Sass mixins instead of having them implictly defined at build-time. This simplifes our build config and other tooling that wants to build us from source [[#1680](https://github.com/Shopify/polaris-react/pull/1680)]

## 3.19.0

- `Filters`: Use to filter the items of a list or table ([#1718](https://github.com/Shopify/polaris-react/pull/1718))
- Added the rollover and Windows high contrast mode to `Disclosure` button on `Tabs` ([#1755](https://github.com/Shopify/polaris-react/pull/1755))
- Added support for disabling all choices in `ChoiceList` ([#1758](https://github.com/Shopify/polaris-react/pull/1758))
- Components in our Sass build (the `styles` folder) are now precompiled to avoid the chance of accidentally overwriting any of our global variables, mixins and functions ([#1764](https://github.com/Shopify/polaris-react/pull/1764))
- Changed `Skip to content` to render an anchor instead of a button to meet accessiblity level A guidelines ([#1785](https://github.com/Shopify/polaris-react/pull/1785))
- Fixed a regression introduced in [#1247](https://github.com/Shopify/polaris-react/pull/1247), where icons inside of `Link` would always be recolored to match the text color ([#1729](https://github.com/Shopify/polaris-react/pull/1729))
- Fixed the `DiscardConfirmationModal` not closing when the discard button is clicked ([#1784](https://github.com/Shopify/polaris-react/pull/1784))
- Fixed `Navigation.Item` `secondaryAction` wrapping when content wraps ([#1678](https://github.com/Shopify/polaris-react/pull/1678))
- Added links to App Bridge React component documentation in deprecation notices for embedded components ([#1765](https://github.com/Shopify/polaris-react/pull/1765))
- Renamed `yarn run ts` to `yarn run type-check` to match most other Shopify projects ([#1745](https://github.com/Shopify/polaris-react/pull/1745))
- Fixed deprecation notice in build ([#1754](https://github.com/Shopify/polaris-react/pull/1754))
- Simplified our rollup plugin for Sass compilation while retaining identical behaviour ([#1753](https://github.com/Shopify/polaris-react/pull/1753))

## 3.18.0

- `ActionMenu`: Use for display of actions and action groups within the context of a header ([#1653](https://github.com/Shopify/polaris-react/pull/1653))
- Added the `stopAnnouncements` prop to `Banner`, which disables screen reader announcements when content changes ([#1719](https://github.com/Shopify/polaris-react/pull/1719))
- Add `selectable` prop to `ResourceList` component (thanks to [@vict-shevchenko](https://github.com/vict-shevchenko) for the [pull request](https://github.com/Shopify/polaris-react/pull/1614))
- Allow `Link` and `Button` interactions when rendered as `prefix/suffix` within `<TextField />` ([#1394](https://github.com/Shopify/polaris-react/pull/1394))
- Improve `TextField` so that character count is only announced on focus. ([#1720](https://github.com/Shopify/polaris-react/pull/1720))
- `ActionList` can now pass a unique `accessibilityLabel` to each `Item` ([#1653](https://github.com/Shopify/polaris-react/pull/1653))
- Greatly reduced complexity of `Page > Header` ([#1653](https://github.com/Shopify/polaris-react/pull/1653))
- Long `Page > Header` breadcrumb labels will now truncate instead of breaking layout ([#1653](https://github.com/Shopify/polaris-react/pull/1653))
- Improves performance of `TabMeasure` component ([#1544](https://github.com/Shopify/polaris-react/pull/1544))
- Added `secondaryFooterActions` prop to `Card` which adds an action list of secondary actions to the footer [#1625](https://github.com/Shopify/polaris-react/pull/1625)
- Fixes `monochrome` variant of `Link` and `Button` components to support multi-line link text ([#1686](https://github.com/Shopify/polaris-react/pull/1686))
- Fixed the first column of `DataTable` not rendering in iOS Safari ([#1605](https://github.com/Shopify/polaris-react/pull/1605))
- Fixed paint loss on scroll of `TextField` `Spinner` ([#1740](https://github.com/Shopify/polaris-react/pull/1740))
- Mentioned that the Contextual Save Bar is now available for embedded apps through App Bridge directly [#1721](https://github.com/Shopify/polaris-react/pull/1721)
- Mentioned [Polaris icons](https://polaris-icons.shopify.com) in the Icon component documentation ([#1693](https://github.com/Shopify/polaris-react/pull/1693))
- Added an example to `Card` for custom action layout with a secondary action and a plain button (thanks to [@sharoonthomas](https://github.com/sharoonthomas) for the [pull request](https://github.com/Shopify/polaris-react/pull/1705))
- Updated Storybook to `v5.1.9` ([#1728](https://github.com/Shopify/polaris-react/pull/1728))
- Updated `PositionedOverlay` to no longer use `componentWillReceiveProps`([#1621](https://github.com/Shopify/polaris-react/pull/1621))
- `Card` `secondaryFooterAction` is now deprecated. Set an array of secondary actions on the `secondaryFooterActions` prop instead [#1625](https://github.com/Shopify/polaris-react/pull/1625)

## 3.17.0

- Deprecated passing a string representing a "bundled icon" into `<Icon source>` Pass in an svg component imported from `@shopify/polaris-icons` instead ([#1534](https://github.com/Shopify/polaris-react/pull/1534)).
- Deprecated all usage of the Shopify App Bridge in Polaris React ([#1573](https://github.com/Shopify/polaris-react/pull/1573))
- Made the `action` prop optional on `EmptyState` ([#1583](https://github.com/Shopify/polaris-react/pull/1583))
- Prevented Firefox from showing an extra dotted border on focused buttons ([#1409](https://github.com/Shopify/polaris-react/pull/1409))
- Added `resolveItemId` prop to `ResourceList` which is used in the new multiselect feature ([#1261](https://github.com/Shopify/polaris-react/pull/1261))
- Added `actions` prop to `<Card.Section>` to allow you to easily define header actions in a card section ([#1598](https://github.com/Shopify/polaris-react/pull/1598))
- Added `<Card.Subsection>` to allow you to further subdivide `<Card.Section>` in a consistent manner ([#1611](https://github.com/Shopify/polaris-react/pull/1611))
- Removed transition on tag button hover state [#1337](https://github.com/Shopify/polaris-react/pull/1337)
- Added `textAlign` prop to Button ([#1576](https://github.com/Shopify/polaris-react/pull/1576))
- Made `Button` red when given both the `plain` and `destructive` props ([#1603](https://github.com/Shopify/polaris-react/pull/1603))
- Added support for disabled, destructive, and loading actions in `Card` and `Card.Section` ([#1622](https://github.com/Shopify/polaris-react/1622))
- Removed unnecessary border-radius from `Modal` body ([#1584](https://github.com/Shopify/polaris-react/pull/1584))
- Fixed accessibility issues in `DropZone`, `Form`, `Modal`, `Section`, `Page`, `Tabs`, `TextField` and `TopBar` ([#1565](https://github.com/Shopify/polaris-react/pull/1565),[#1582](https://github.com/Shopify/polaris-react/pull/1582)).
- Fixed inconsistent width depending on your browser/version in `Sheet` ([#1569](https://github.com/Shopify/polaris-react/pull/1569))
- Fixed text and other elements from being selected in Safari when dragging the color picker ([#1562](https://github.com/Shopify/polaris-react/pull/1562))
- Fixed `Banner` `title` overflowing when set to a single long word ([#1553](https://github.com/Shopify/polaris-react/pull/1553))
- Remove export of `CombinedProps` and unneccessary export for Class based components ([#1592](https://github.com/Shopify/polaris-react/pull/1592))
- Fixed improper spacing and coloring on a `TextField` prefix ([#1132](https://github.com/Shopify/polaris-react/issues/1132))
- Fixed `ResourcePicker` not updating function references for `onSelection` and `onCancel` callbacks [#1451](https://github.com/Shopify/polaris-react/pull/1451)
- Fixed `TextField` `label` being set as the value of the `label` node, as well as the `aria-label` `aria-labelledby` attributes, when only one method will suffice ([#1615](https://github.com/Shopify/polaris-react/pull/1615))
- Fixed accessibility issues for Windows High Contrast mode on `Tabs` and `Popover` ([#1629](https://github.com/Shopify/polaris-react/pull/1629))
- Updated icon documentation to use imports from polaris-icons ([#1561](https://github.com/Shopify/polaris-react/pull/1561))
- Fixed an accessibility issue in the `Collapsible` component example ([#1591](https://github.com/Shopify/polaris-react/pull/1591))
- Added accessibility documentation for the `RangeSlider` component ([#1630](https://github.com/Shopify/polaris-react/pull/1630))
- Added accessibility documentation for the `Collapsible` component ([#1631](https://github.com/Shopify/polaris-react/pull/1631))
- Added accessibility documentation for the `DescriptionList` component ([#1634](https://github.com/Shopify/polaris-react/pull/1634))
- Added accessibility documentation for the `Form` component ([#1636](https://github.com/Shopify/polaris-react/pull/1636))
- Added accessibility documentation for the `ExceptionList` component ([#1635](https://github.com/Shopify/polaris-react/pull/1635))
- Added accessibility documentation for the `KeyboardKey` component ([#1640](https://github.com/Shopify/polaris-react/pull/1640))
- Added accessibility documentation for the `Tag` component ([#1647](https://github.com/Shopify/polaris-react/pull/1647))
- Added accessibility documentation for the `Modal` component ([#1648](https://github.com/Shopify/polaris-react/pull/1648))
- Made the a11y test that runs in CI fail if it finds any issues ([#1564](https://github.com/Shopify/polaris-react/pull/1564))
- Updated Storybook to `v5.1.0-rc.4` ([#1616](https://github.com/Shopify/polaris-react/pull/1616))
- Fixed a visual regression testing issue with the Card component ([#1618](https://github.com/Shopify/polaris-react/pull/1618))
- Updated to sewing-kit v0.85.5 ([#1633](https://github.com/Shopify/polaris-react/pull/1633))
- Upgraded TypeScript dependency to `3.5.1` ([#1650](https://github.com/Shopify/polaris-react/pull/1650))
- Enabled the color contrast test in pa11y ([#1645](https://github.com/Shopify/polaris-react/pull/1645))
- Combined jsdocs in `Icon` for the `untrusted` prop ([#1607](https://github.com/Shopify/polaris-react/pull/1607))

## 3.16.0

- Added support for dual values to `RangeSlider` component ([#1436](https://github.com/Shopify/polaris-react/pull/1436))
- Updated type restrictions for `AnnotatedSection` to allow its `title` prop to accept `React.ReactNode` instead of `string` ([#1431](https://github.com/Shopify/polaris-react/pull/1431))
- Fixed an issue where the JavaScript breakpoints incorrectly set the navigation bar collapsed breakpoint ([#1475](https://github.com/Shopify/polaris-react/pull/1475))
- Added a border to `Toast` messages to make them more visible in Windows high contrast mode ([#1469](https://github.com/Shopify/polaris-react/pull/1469))
- Added `box-shadow` to the `Banner` to make it more visible in Windows high contrast mode ([#1481](https://github.com/Shopify/polaris-react/pull/1481))
- Added `box-shadow` to the `Card` to make it more visible in Windows high contrast mode ([#1524](https://github.com/Shopify/polaris-react/pull/1524))
- Fixed UI regressions in `Navigation` component hover and active states ([#1551](https://github.com/Shopify/polaris-react/pull/1551))
- Updated Storybook to `v5.1.0-alpha.39`, improving component searchability in the sidebar ([#1488](https://github.com/Shopify/polaris-react/pull/1488))
- Removed runtime dependency on `@shopify/images` as we never needed it at runtime ([#1474](https://github.com/Shopify/polaris-react/pull/1474))
- Removed `@shopify/react-utilities` and replaced some of the functionality with `@shopify/css-utilities` or by moving the utilities into Polaris itself ([#1473](https://github.com/Shopify/polaris-react/pull/1473))

## 3.15.0

This release fixes an issue introduced in `v3.14.0` that caused the `esnext` build not to succeed resulting in build errors for consumers ([#1466](https://github.com/Shopify/polaris-react/pull/1466))

- Enhanced `NavigationItem`’s color accessibility for `active`, `focus`, `hover` and `Selected` states ([1304](https://github.com/Shopify/polaris-react/pull/1304))
- Added `align` prop to `TextField` ([#1428](https://github.com/Shopify/polaris-react/pull/1428))
- Added `clearButton` prop to `TextField` ([#1226](https://github.com/Shopify/polaris-react/pull/1226))
- Fixed `Checkbox` from improperly toggling when disabled ([#1467](https://github.com/Shopify/polaris-react/pull/1467))
- Fixed `Popover` fade-in flutter on iOS by switching Transition component for CSSTransition ([#1400](https://github.com/Shopify/polaris-react/pull/1400))
- Improved the visibility of focus styles for the `Link` component. ([#1425](https://github.com/Shopify/polaris-react/pull/1425))
- Updated accessibility testing documentation ([#1449](https://github.com/Shopify/polaris-react/pull/1449))
- Added guidelines for tertiary actions in modals to `Modal` component documentation ([#1336](https://github.com/Shopify/polaris-react/pull/1336))
- Updated the a11y shitlist and re-enabled the pa11y job in CI. The job always passes for now, as a way for us to judge whether it is stable and can be made a required check. ([#1456](https://github.com/Shopify/polaris-react/pull/1456))
- Simplified logic in Checkbox component ([#1453](https://github.com/Shopify/polaris-react/pull/1453))

## 3.14.0

- Added the `Sheet`component ([#1250](https://github.com/Shopify/polaris-react/pull/1250))
- Added translations for all supported locales ([#1358](https://github.com/Shopify/polaris-react/pull/1358))
- Improved the performance of `ResourceList` ([#1313](https://github.com/Shopify/polaris-react/pull/1313))
- Added `withinContentContainer` context to `Navigation` ([#1393](https://github.com/Shopify/polaris-react/pull/1393))
- Added support for`Tooltip` content to wrap nonbreaking strings [#1395](https://github.com/Shopify/polaris-react/pull/1395)
- Removed `window` call on `server` executed code [#1427](https://github.com/Shopify/polaris-react/pull/1427)
- Fixed `onClick` from firing three times when using the enter key on a `ResourceList` item ([#1188](https://github.com/Shopify/polaris-react/pull/1188))
- Resolved console `[Intervention]` errors for touch interactions on `ColorPicker` ([#1414](https://github.com/Shopify/polaris-react/pull/1414))
- Fixed page scrolling while interacting with the color slider ([#1414](https://github.com/Shopify/polaris-react/pull/1414))
- Applied `font-family` to `button` elements which were being overridden by User Agent Stylesheet ([#1397](https://github.com/Shopify/polaris-react/pull/1397))
- Fixed `Checkbox` being toggled when disabled ([#1369](https://github.com/Shopify/polaris-react/pull/1369))
- Fixed `DropZone.FileUpload` from incorrectly displaying action hint and title when the default is used and removed ([#1233](https://github.com/Shopify/polaris-react/pull/1233))
- Fixed `ResourceList.Item` interaction states from being incorrectly applied ([#1312](https://github.com/Shopify/polaris-react/pull/1312)
- Fixed selected state for date picker in Windows high contrast mode ([#1342](https://github.com/Shopify/polaris-react/pull/1342))
- Fixed accessibility of skeleton components for Windows high contrast mode ([#1341](https://github.com/Shopify/polaris-react/pull/1341))
- Fixed `Loading` visibility in Windows high contrast mode ([#1389](https://github.com/Shopify/polaris-react/pull/1389))
- Fixed the position calculation of the `PositionedOverlay` component after scroll ([#1382](https://github.com/Shopify/polaris-react/pull/1382))
- Fixed styling issue for `Pagination` when used with `Tooltip` ([#1277](https://github.com/Shopify/polaris-react/pull/1277))
- Fixed certain children of a `TextContainer` having no top margin ([#1357](https://github.com/Shopify/polaris-react/pull/1357))
- Added border to `Tooltip` in Windows high contrast mode ([#1405](https://github.com/Shopify/polaris-react/pull/1405))
- Fixed `Navigation.Section` rollup collapsing when `Navigation.Item` `subNavigationItems` expand ([#1417](https://github.com/Shopify/polaris-react/pull/1417))
- Updated `Link` accessibility documentation for the `external` prop to reflect new behavior ([#1347](https://github.com/Shopify/polaris-react/pull/1347))
- Added accessibility documentation for `VisuallyHidden` ([#1348](https://github.com/Shopify/polaris-react/pull/1348))
- Added accessibility documentation for `TextStyle` ([#1350](https://github.com/Shopify/polaris-react/pull/1350))
- Added accessibility guidance for `Heading` and `Subheading` ([#1351](https://github.com/Shopify/polaris-react/pull/1351))
- Added accessibility documentation for `List` and `Stack` ([#1353](https://github.com/Shopify/polaris-react/pull/1353))
- Added accessibility guidance for `DisplayText` ([#1354](https://github.com/Shopify/polaris-react/pull/1354))
- Added guidance for updating component documentation and tophatting style guide changes ([#1362](https://github.com/Shopify/polaris-react/pull/1362))
- Added accessibility documentation and guidance for `ActionList` and `OptionList` ([#1365](https://github.com/Shopify/polaris-react/pull/1365))
- Added accessibility documentation for `Card` and `CalloutCard` ([#1366](https://github.com/Shopify/polaris-react/pull/1366))
- Added accessibility documentation for `Badge` ([#1364](https://github.com/Shopify/polaris-react/pull/1364))
- Added accessibility documentation for `Icon` ([#1404](https://github.com/Shopify/polaris-react/pull/1404))
- Added accessibility documentation for `Popover` ([#1408](https://github.com/Shopify/polaris-react/pull/1408))
- Fixed content example for `ContextualSaveBar` guidelines ([#1423](https://github.com/Shopify/polaris-react/pull/1423))
- Updated most `devDependencies` ([#1327](https://github.com/Shopify/polaris-react/pull/1327))
- Bumped `@shopify/react-utilites` to remove a transitive dependency on `core-js` ([#1343](https://github.com/Shopify/polaris-react/pull/1343))
- Updated App Bridge to version 1.3.0 ([#1349](https://github.com/Shopify/polaris-react/pull/1349))
- Updated `typescript` to 3.2.4 ([#1388](https://github.com/Shopify/polaris-react/pull/1388))
- Updated `sewing-kit` to 0.83.1 and babel-preset-shopify to ^18.1.0 ([#1344](https://github.com/Shopify/polaris-react/pull/1344))
- Updated `Dropzone.FileUpload` to no longer use `componentWillReceiveProps` and `componentWillMount` ([#1233](https://github.com/Shopify/polaris-react/pull/1233))
- Removed a `window.open` implementation error in `ResourceList.Item` ([#1294](<(https://github.com/Shopify/polaris-react/pull/1294)>))

## 3.13.0

- Deprecated Navigation `Item`’s `iconBody` prop. Pass a string into the `icon` prop instead. ([#1299](https://github.com/Shopify/polaris-react/pull/1299))
- Added an `onChange` handler to `CheckableButton` ([#1326](https://github.com/Shopify/polaris-react/pull/1326))
- `Labelled` now wraps its content, no longer causing a `label + action` to get unreasonably squished ([#1309](https://github.com/Shopify/polaris-react/pull/1309))
- Updated `polaris-tokens` from `2.3.0` to `2.5.0` and converted all use of `duration` values ([#1268](https://github.com/Shopify/polaris-react/pull/1268))
- More consistent use of `text-breakword` mixin ([#1306](https://github.com/Shopify/polaris-react/pull/1306))
- Added an icon and screen reader hint when `Link` opens a new tab ([#1247](https://github.com/Shopify/polaris-react/pull/1247))
- Updated the pull request creation to create multiple pull requests and update `polaris-react` across multiple repos ([#1069](https://github.com/Shopify/polaris-react/pull/1069))
- Updated the pull request creation to retry when it fails ([#1069](https://github.com/Shopify/polaris-react/pull/1069))
- Exported overlay and layer data attributes for use in consumer components ([#1266](https://github.com/Shopify/polaris-react/pull/1266))
- Added new `frame-with-nav-max-width` variable and matching `frame-with-nav-when-not-max-width` mixin ([#1311](https://github.com/Shopify/polaris-react/pull/1311))
- Updated `Resizer` to schedule `handleHeightCheck` to run in next animation frame ([#1301](https://github.com/Shopify/polaris-react/pull/1301))
- Fixed `ResourceList` actions from show at incorrect breakpoints or while in select mode ([#1333](https://github.com/Shopify/polaris-react/pull/1333))
- Fixed Search overlay stretching below the viewport ([#1260](https://github.com/Shopify/polaris-react/pull/1260))
- Added `onChange` and `value` to select `AppProvider` examples to remove console errors ([#1320](https://github.com/Shopify/polaris-react/pull/1320))
- Fixed promoted bulk actions in `ResourceList` not properly disabling ([#1317](https://github.com/Shopify/polaris-react/pull/1317)) (thanks [@jineshshah36](https://github.com/jineshshah36) for the [issue report](https://github.com/Shopify/polaris-react/issues/1316))
- Fixed `ResourceList` header from displaying when `EmptySearchResult` exists ([#1286](https://github.com/Shopify/polaris-react/pull/1286))
- Stopped passing the `polaris` context into the div rendered by `Scrollable` ([#1271](https://github.com/Shopify/polaris-react/pull/1271))
- Fixed clickable area on sortable column headers on `DataTable` ([#1273](https://github.com/Shopify/polaris-react/pull/1273))

Upgraded Storybook to v5 ([#1140](https://github.com/Shopify/polaris-react/pull/1140))

- Remove core-js ([#1328](https://github.com/Shopify/polaris-react/pull/1328))
- Upgraded Polaris icons to include the full icon set ([#1284](https://github.com/Shopify/polaris-react/pull/1284))
- Migrated the refs in `DropZone` to use the new createRef API ([#1063](https://github.com/Shopify/polaris-react/pull/1063))
- Updated `ResourceList` to no longer use `componentWillReceiveProps`([#1235](https://github.com/Shopify/polaris-react/pull/1235))
- Updated `Tabs` to no longer use `componentWillReceiveProps`([#1221](https://github.com/Shopify/polaris-react/pull/1221))
- Removed an unneeded media query from Modal’s `Header` component ([#1272](https://github.com/Shopify/polaris-react/pull/1272))
- Replaced all instances where we pass a string representing a bundled icon into `Button`. Prefer passing in the React Component from `@shopify/polaris-icons` ([#1297](https://github.com/Shopify/polaris-react/pull/1297))

## 3.12.0

- Added a public `focus` method on `Banner` ([#1219](https://github.com/Shopify/polaris-react/pull/1219))
- Added an `onScrollToBottom` prop to `Popover.Pane` ([#1248](https://github.com/Shopify/polaris-react/pull/1248))
- Added a `placeholder` prop to `FilterControl` ([#1257](https://github.com/Shopify/polaris-react/pull/1257))
- Added support for setting string values on the `TextField` `autoComplete` prop ([#1259](https://github.com/Shopify/polaris-react/pull/1259))
- Fixed disabled states while loading for `ResourceList` ([#1237](https://github.com/Shopify/polaris-react/pull/1237))
- Fixed `Checkbox` from losing focus and not receiving some modified events([#1112](https://github.com/Shopify/polaris-react/pull/1112))
- Added translation for the cancel button on the `ResourceList` `BulkActions` ([#1243](https://github.com/Shopify/polaris-react/pull/1243))
- Fixed the `Autocomplete` `onLoadMoreResults` prop not being called on scrolling to the end of the option list ([#1249](https://github.com/Shopify/polaris-react/pull/1249))
- Removed `button group joined to the bottom of a component` example ([#1267](https://github.com/Shopify/polaris-react/pull/1267))

## 3.11.0

- Updated `Navigation` badge prop to accept a react node ([#1142](https://github.com/Shopify/polaris-react/pull/1142))
- Changed max width on `Search` to 694px so that it is perfectly centered in the top bar ([#1107](https://github.com/Shopify/polaris-react/issues/1107))
- Added `action` prop to `Toast` ([#919](https://github.com/Shopify/polaris-react/pull/919))
- Remove all usage of `@shopify/javascript-utilities/decorators`, namely `autobind`, `debounce`, and `memoize` ([#1148](https://github.com/Shopify/polaris-react/issues/1148))
- Added `Empty State` footerContent prop ([#1200](https://github.com/Shopify/polaris-react/pull/1200))
- Added viewport condition to `TopBar` to enlarge the `contextControl` wrapper on wider screens ([#1231](https://github.com/Shopify/polaris-react/pull/1231))
- Fixed selectMode on `ResourceList` not toggling when items are selected programmatically ([#1224](https://github.com/Shopify/polaris-react/pull/1224))
- Fixed unnecessary height on `TextField` due to unhandled carriage returns ([#901](https://github.com/Shopify/polaris-react/pull/901))
- Ensured server side rendering matches client side rendering for [embedded app components](https://github.com/Shopify/polaris-react/blob/main/documentation/Embedded%20apps.md#components-which-wrap-shopify-app-bridge) ([#976](https://github.com/Shopify/polaris-react/pull/976))
- Fixed rendering of the spinner on `TextField` when setting to readOnly ([#1118](https://github.com/Shopify/polaris-react/pull/1199))
- Fixed webpack example that does not compile ([#1189](https://github.com/Shopify/polaris-react/issues/1189))
- Added accessibility documentation for `Checkbox`, `RadioButton`, and `ChoiceList` ([#1145](https://github.com/Shopify/polaris-react/pull/1145))
- Regenerated the yarn.lock file in the browserify example to resolve security vulnerabilities ([#1202](https://github.com/Shopify/polaris-react/issues/1202))
- Updated browserify example dependencies and dev dependencies ([#1191](https://github.com/Shopify/polaris-react/issues/1191))
- Updated webpack example dependencies and dev dependencies ([#1189](https://github.com/Shopify/polaris-react/issues/1189))
- Replaced all occurrences of `_.merge` with a custom `merge` function ([#1018](https://github.com/Shopify/polaris-react/pull/1018))
- Replaced all occurrences of `_.pick` with a custom pick function ([#1020](https://github.com/Shopify/polaris-react/pull/1020))
- Deleted the icons index file that would re-export icons, and replaced it with direct imports ([#1195](https://github.com/Shopify/polaris-react/pull/1195))
- Replaces all instances where we pass a string representing a bundled icon into `Icon`. Prefer passing in the React Component from `@shopify/polaris-icons` ([#1196](https://github.com/Shopify/polaris-react/pull/1196))

## 3.10.0

- Added Polaris version information tracking in App Bridge actions ([#1087](https://github.com/Shopify/polaris-react/pull/1087))
- Re-added the navigation’s border-right ([#1096](https://github.com/Shopify/polaris-react/pull/1096))
- Added `onScrolledToBottom` prop to `Modal` ([#1117](https://github.com/Shopify/polaris-react/pull/1117))
- Updated `Navigation.Item` to use `Icon` when `iconBody` prop is passed in. Renders these icons in an `img` tag now. ([#1094](https://github.com/Shopify/polaris-react/pull/1094))
- Added focus state outlines to be visible when using Windows High Contrast Mode for `Button` ([#1101](https://github.com/Shopify/polaris-react/pull/1101))
- Reverted a change that constrained `DropZone` height based on inherited wrapper height [#1129](https://github.com/Shopify/polaris-react/pull/1129)
- Fixed missing rounded corners on `Tag` button states ([#1078](https://github.com/Shopify/polaris-react/pull/1078))
- Removed reference to `window.Polaris`, which in some cases could be undefined ([#1104](https://github.com/Shopify/polaris-react/issues/1104))
- Added padding and margin to `subdued` sections for proper spacing between the header and footer ([#1082](https://github.com/Shopify/polaris-react/pull/1082))
- Removed left margin from vertical `Stack` to prevent overflow ([#1024](https://github.com/Shopify/polaris-react/pull/1024))
- Fixed the size differences between `SkeletonThumbnail` and `Thumbnail` ([#1141](https://github.com/Shopify/polaris-react/pull/1141)) (thanks [@mbaumbach](https://github.com/mbaumbach) for the [issue report](https://github.com/Shopify/polaris-react/issues/1135))
- Refactored `ComboBox` tests that were not running ([#1137](https://github.com/Shopify/polaris-react/pull/1137))
- Updated related component documentation for `Page`, `PageActions`, and `Pagination` ([#1103](https://github.com/Shopify/polaris-react/pull/1103))
- Improved `Modal` documentation for properties only available in a stand-alone app context ([#1065](https://github.com/Shopify/polaris-react/pull/1065))
- Added accessibility documentation about `Banner` ([#1071](https://github.com/Shopify/polaris-react/pull/1071))
- Added accessibility documentation for `InlineError` ([#1073](https://github.com/Shopify/polaris-react/pull/1073))
- Added accessibility documentation for `Loading` ([#1075](https://github.com/Shopify/polaris-react/pull/1075))
- Fixed documentation about the `ariaPressed` prop for `Button` ([#1097](https://github.com/Shopify/polaris-react/pull/1097))
- Fixed examples using the `selected` prop for `Autocomplete` ([#1053](https://github.com/Shopify/polaris-react/pull/1053))
- Added viewport meta tag to Storybook frame ([#1026](https://github.com/Shopify/polaris-react/pull/1026))
- Removed lodash decorators and replace all occurrences of `_.throttle` with `debounce` ([#1009](https://github.com/Shopify/polaris-react/pull/1009))
- Removed all occurrences of `_.replace` ([#1012](https://github.com/Shopify/polaris-react/pull/1012))
- Added lodash to `create-react-app` example ([#1010](https://github.com/Shopify/polaris-react/pull/1010))
- Updated `create-react-app` example dependencies ([#1010](https://github.com/Shopify/polaris-react/pull/1010))
- Replaced all occurrences of `_.capitalize` with a custom `capitalize` function ([#1015](https://github.com/Shopify/polaris-react/pull/1015))
- Replaced all occurrences of `_.isObject` with a custom `isObject` function ([#1011](https://github.com/Shopify/polaris-react/pull/1011))
- Replaced all occurrences of `_.get` with a custom `get` function ([#1013](https://github.com/Shopify/polaris-react/pull/1013))
- Moved icons specific to `Banner`, `DropZone`, and `ResourceList` to [@shopify/polaris-icons](https://www.npmjs.com/package/@shopify/polaris-icons) ([#1042](https://github.com/Shopify/polaris-react/pull/1042))
- Updated spinner component to use the `Image` component instead of an SVG tag to render ([#1042](https://github.com/Shopify/polaris-react/pull/1042))
- Deprecated passing a React Element into the `Icon` component in favor of passing a React Component ([#1042](https://github.com/Shopify/polaris-react/pull/1042))
- Deprecated the untrusted prop in the `Icon` component ([#1042](https://github.com/Shopify/polaris-react/pull/1042))

## 3.9.0

- Used `base-tight` `spacing` value instead of `rem(12px)` ([#1044](https://github.com/Shopify/polaris-react/pull/1044))
- Fixed the `focused` prop on `TextField` so it sets the focus state ([#990](https://github.com/Shopify/polaris-react/pull/990))
- Resolved an unsupported `React.Fragment` syntax ([#1080](https://github.com/Shopify/polaris-react/pull/1080))
- Constrained `DropZone` height based on inherited wrapper height [#908](https://github.com/Shopify/polaris-react/pull/908)
- Reverted a change that adjusted padding in the `Card` component introduced in ([#962](https://github.com/Shopify/polaris-react/pull/962))

## 3.8.0

- `SkeletonThumbnail` for representing thumbnails in loading state

- Updates `TopBar.UserMenu` interaction states styling ([#1006](https://github.com/Shopify/polaris-react/pull/1006))
- Added `download` prop to `Button` and `UnstyledLink` components that enables setting the download attribute ([#1027](https://github.com/Shopify/polaris-react/pull/1027))
- Added support for internationalization of month and week names to `DatePicker` ([#1005](https://github.com/Shopify/polaris-react/pull/1005))
- Added `untrusted` prop to `Icon` to render SVG strings in an img tag ([#926](https://github.com/Shopify/polaris-react/pull/926))
- Added a `data-href` to `ResourceList.Item`s that have a `url` prop ([#1054](https://github.com/Shopify/polaris-react/pull/1054))
- Fixed `type="number"` `TextField` to prevent conditions where press-and-hold could increment or decrement infinitely ([#1029](https://github.com/Shopify/polaris-react/pull/1029))
- Fixed the top border of `DataTable` overlapping its container’s border ([#975](https://github.com/Shopify/polaris-react/pull/975))
- Fixed the `DataTable` sort direction not reversing on second sort of the initially sorted column ([#918](https://github.com/Shopify/polaris-react/pull/918)) (thanks [@tabrez96](https://github.com/tabrez96) for the [issue report](https://github.com/Shopify/polaris-react/issues/873))
- Changed the offset from 5px to 4px in `Tooltip` between activator and message to be consistent with `Popover` ([#1019](https://github.com/Shopify/polaris-react/pull/1019))
- Fixed `Card` header not showing when `title` empty or not set ([#1031](https://github.com/Shopify/polaris-react/pull/1032))
- Fixed an issue on Chrome when you use a `TextField` inside `Collapsible` which is inside a scrollable element, the text disappeared if you focused a fully hidden `TextField` ([#1047](https://github.com/Shopify/polaris-react/pull/1047))
- Added accessibility documentation for the button and link components ([#924](https://github.com/Shopify/polaris-react/pull/924))
- Added accessibility recommendations for the text field and autocomplete components ([#968](https://github.com/Shopify/polaris-react/pull/968))
- Added a test that builds Polaris for web and polaris-styleguide. This test takes ~20 minutes to run so it’s only configured to run for main ([931](https://github.com/Shopify/polaris-react/pull/931))
- Enabled `no-vague-titles eslint` rule ([#1051](https://github.com/Shopify/polaris-react/pull/1051))

## 3.7.1

- Moved character counter to bottom of multiline text input ([#992](https://github.com/Shopify/polaris-react/pull/992))
- Aligned `TopBar` search input and results with page content ([#1008](https://github.com/Shopify/polaris-react/issues/1008))
- Added all props example of `ResourceList` in the [style guide](https://polaris.shopify.com) ([#978](https://github.com/Shopify/polaris-react/pull/978))

## 3.7.0

- Removed `TopBar` logo background ([#957](https://github.com/Shopify/polaris-react/pull/957))
- Updated `TopBar` search results width to adapt to search input and added a minimum width ([#969](https://github.com/Shopify/polaris-react/pull/969))
- Updated `Card.Section` to accept `React.ReactNode` as `title` ([#781](https://github.com/Shopify/polaris-react/pull/781))
- Added `contextControl` prop to `TopBar` and `Navigation` ([#966](https://github.com/Shopify/polaris-react/pull/966))
- Fixed `Collapsible` to use `overflow: visible;` once fully open ([#951](https://github.com/Shopify/polaris-react/pull/951))
- Fixed the `DataTable` sort direction not reversing on second sort of the initially sorted column ([#918](https://github.com/Shopify/polaris-react/pull/918)) (thanks [@tabrez96](https://github.com/tabrez96) for the [issue report](https://github.com/Shopify/polaris-react/issues/873))
- Fixed `TextField` when passing `null` to `value` ([#964](https://github.com/Shopify/polaris-react/pull/964)) (thanks [@mbaumbach](https://github.com/mbaumbach) for the [original issue](https://github.com/Shopify/polaris-react/issues/959))
- Changed the default value for `showHidden` prop on `ResourcePicker` for backward compatibility with legacy EASDK ([#981](https://github.com/Shopify/polaris-react/pull/981))
- Adjusted top and bottom padding to the header, footer and sections in `Card` to add space between action buttons in the header and footer and the card sections. ([#962](https://github.com/Shopify/polaris-react/pull/962))
- Added accessibility documentation for the account connection and setting toggle components ([#970](https://github.com/Shopify/polaris-react/pull/970))
- Added accessibility documentation for the avatar component ([#973](https://github.com/Shopify/polaris-react/pull/973))
- Updated docs about App Bridge usage in AppProvider ([#945](https://github.com/Shopify/polaris-react/pull/945))
- Added all props example to `DataTable` in the [style guide](https://polaris.shopify.com) ([#1003](https://github.com/Shopify/polaris-react/pull/939))
- Fixed links to Polaris component pages in story descriptions ([#933](https://github.com/Shopify/polaris-react/pull/933))
- Upgraded to `@shopify/polaris-icons` v2.0.0 ([#982](https://github.com/Shopify/polaris-react/pull/982))
- Updated `import styles from './foo.scss';` from non-standard `import * as styles from './foo.scss';` when importing scss files ([#929](https://github.com/Shopify/polaris-react/pull/929))
- Removed internal ellipsis icon as it is deprecated, and horizontalDots should be used instead ([#974](https://github.com/Shopify/polaris-react/pull/974))

## 3.6.0

- Updated `TextField` to accept a `showCharacterCount` prop enabling the display of character count ([#709](https://github.com/Shopify/polaris-react/pull/709))
- Fixed vertical misalignment in `Banner.Header`([#870](https://github.com/Shopify/polaris-react/pull/870))
- Removed a duplicate `activatorWrapper` in `Popover` when destructuring props ([#916](https://github.com/Shopify/polaris-react/pull/916))
- Fixed `Banner` secondaryAction content wrapping in Firefox ([#719](https://github.com/Shopify/polaris-react/pull/719))
- Added `onKeyPress`, `onKeyDown`, and `onKeyUp` to `Button` ([#860](https://github.com/Shopify/polaris-react/pull/860))
- Added `monochrome` prop to `Button` and `Link` component ([#821](https://github.com/Shopify/polaris-react/pull/821))
- Updated `Frame` layout and made `TopBar.UserMenu` visible on mobile ([#852](https://github.com/Shopify/polaris-react/pull/852))
- Added a `forceRender` prop to `Page` to not delegate to the app bridge TitleBar action ([#695](https://github.com/Shopify/polaris-react/pull/695))
- Changed `Tabs` example to contain children so the `Panel` renders for accessibility ([#893](https://github.com/Shopify/polaris-react/pull/893))
- Fixed timezone not being accounted for in `ResourceList` date filter control ([#710](https://github.com/Shopify/polaris-react/pull/710))
- Removed unnecessary tooltip text in the `TopBar` component ([#859](https://github.com/Shopify/polaris-react/pull/859))
- Added `Stack.Item` properties and description to [style guide](https://polaris.shopify.com)’s ([#772](https://github.com/Shopify/polaris-react/pull/772))
- Added accessibility documentation to the resource list and data table components ([#927](https://github.com/Shopify/polaris-react/pull/927))
- Added accessibility recommendations for the caption component ([#928](https://github.com/Shopify/polaris-react/pull/928/))
- Improved build speed by adjusting our rollup workflow ([#912](https://github.com/Shopify/polaris-react/pull/912)) and not optimizing svgs in the node_modules folder ([#920](https://github.com/Shopify/polaris-react/pull/920))
- Fixed an issue where deployments would use an old version of Yarn, and open a pull request to polaris-styleguide with thousands of deleted integrity hashes in `yarn.lock` ([#856](https://github.com/Shopify/polaris-react/pull/856))
- Updated App Bridge to version 1.0.3 ([#844](https://github.com/Shopify/polaris-react/pull/844))
- Deprecated `Navigation.UserMenu` in favor of `TopBar.UserMenu` ([#849](https://github.com/Shopify/polaris-react/pull/849))
- Deprecated `Navigation`’s `userMenu` prop ([#930](https://github.com/Shopify/polaris-react/pull/930))

## 3.5.0

- Update build toolchain to use Babel v7, PostCSS v7 and Rollup v1. Updated our build targets match our [supported browsers](https://help.shopify.com/en/manual/intro-to-shopify/shopify-admin/supported-browsers), leading to a reduction in bundle size ([#837](https://github.com/Shopify/polaris-react/pull/837))
- Ensured disabled `Button` components with a `url` prop output valid HTML ([#773](https://github.com/Shopify/polaris-react/pull/773))
- Fixed `DropZone` which was unable to add a duplicate file back to back or add a file again once removed [#782](https://github.com/Shopify/polaris-react/pull/782). Thank you [@jzsplk](https://github.com/jzsplk) for the contribution [#425](https://github.com/Shopify/polaris-react/issues/425) and [@vladucu](https://github.com/vladucu) for the clear example.
- Added a fallback to the `safeAreaFor` Sass mixin to handle browsers that don’t support `env` and `constant` ([#881](https://github.com/Shopify/polaris-react/pull/881))
- Added deprecation guidelines ([#853](https://github.com/Shopify/polaris-react/pull/853))
- Replaced our home-grown playground with Storybook (still accessed through `yarn dev`) ([#768](https://github.com/Shopify/polaris-react/pull/768))
- Removed our usage of babel-node for build scripts - use plain node instead ([#836](https://github.com/Shopify/polaris-react/pull/836))
- Ensured CSS builds are reproducible ([#869](https://github.com/Shopify/polaris-react/pull/869))

## 3.4.0

- Moved icons to a separate npm package ([#686](https://github.com/Shopify/polaris-react/pull/686))
- Added `oneHalf` and `oneThird` props to `Layout` component ([#724](https://github.com/Shopify/polaris-react/pull/724))
- Added `helpText` prop to `ActionList` items ([#777](https://github.com/Shopify/polaris-react/pull/777))
- Updated `Page` header layout so actions take up less room on small screens ([#707](https://github.com/Shopify/polaris-react/pull/707))
- Added `alternateTool` prop to `ResourceList` component ([#812](https://github.com/Shopify/polaris-react/pull/812))
- Updated color of warning status `ExceptionList` items from dark orange to dark yellow for better differentiation from critical status items ([#813](https://github.com/Shopify/polaris-react/pull/813))
- Fixed `TextField` not showing the correct color while it has focus and an error ([#806](https://github.com/Shopify/polaris-react/pull/806))
- Fixed `ResourceList` not rendering `BulkActions` on initial load when items were selected ([#746](https://github.com/Shopify/polaris-react/pull/746))
- Fixed the new variant of the `Badge` component so that it is simpler and easier to read ([#751](https://github.com/Shopify/polaris-react/pull/751))
- Reverted a change that set the `autocomplete` property on `TextField` to `nope` when it was `false` ([#761](https://github.com/Shopify/polaris-react/pull/761))
- Added dismiss button for `CalloutCard` ([#353](https://github.com/Shopify/polaris-react/issues/353))
- Removed an extra tab stop from `ResourceList.Item` and make it unactionable while loading ([#745](https://github.com/Shopify/polaris-react/pull/745))
- Fixed `Checkbox` from losing focus when quickly toggled ([#717](https://github.com/Shopify/polaris-react/pull/717))
- Fixed the console error in the `PositionedOverlay` test environment ([#758](https://github.com/Shopify/polaris-react/pull/758))
- Fixed `ResourceList` not rendering a header after initial load (thanks to [@andrewpye](https://github.com/andrewpye) for the [original issue](https://github.com/Shopify/polaris-react/issues/735))
- Fixed `TextField` not passing `step` to the input ([#829](https://github.com/Shopify/polaris-react/pull/829))
- Renamed `Option` and `Group` types in `Select` to work around typedoc oddness ([#830](https://github.com/Shopify/polaris-react/pull/830))
- Modified image paths to fit the [style guide](https://polaris.shopify.com)’s new Markdown parsing rules ([#753](https://github.com/Shopify/polaris-react/pull/753))
- Added a slight delay to the Percy screenshot script to give time for components to render fully ([#704](https://github.com/Shopify/polaris-react/pull/704))
- Refactored to remove cyclical type imports ([#759](https://github.com/Shopify/polaris-react/pull/759), [#754](https://github.com/Shopify/polaris-react/pull/754), and [#767](https://github.com/Shopify/polaris-react/pull/767))
- Upgraded `@shopify/polaris-tokens` to v2.1.1 ([#813](https://github.com/Shopify/polaris-react/pull/813))

## 3.3.0

- Added support for `ResourceList.Item` opening a URL in new tab if <kbd>command</kbd> or <kbd>control</kbd> keys are pressed during click ([#690](https://github.com/Shopify/polaris-react/pull/690))
- Added `primaryAction` prop to `SkeletonPage` ([#488](https://github.com/Shopify/polaris-react/pull/488))
- Added support for press-and-hold to increment and decrement value in a `type="number"` `TextField` ([#573](https://github.com/Shopify/polaris-react/pull/573)) (thanks to [@andrewpye](https://github.com/andrewpye) for the [original issue](https://github.com/Shopify/polaris-react/issues/420))
- Forced `Avatar` to fall back to `initials` when the image fails to load ([#712](https://github.com/Shopify/polaris-react/pull/712))
- Fixed `Popover` not opening in a small `Scrollable` container ([#658](https://github.com/Shopify/polaris-react/pull/658))
- Fixed `Page` header component to only render actions wrapper when actions are present ([#732](https://github.com/Shopify/polaris-react/pull/732))
- Fixed `ContextualSaveBarProps` type not being exported ([#734](https://github.com/Shopify/polaris-react/pull/734))
- Fixed `Avatar` proportions when image is not square ([#740](https://github.com/Shopify/polaris-react/pull/740))
- Upgraded to TypeScript 3.1.6 ([#700](https://github.com/Shopify/polaris-react/pull/700))
- Moved some inconsistent prop types around for compatibility with the style guide’s Props Explorer ([#727](https://github.com/Shopify/polaris-react/pull/727))

## 3.2.1

- Fixed `ToastProps` type not being exported ([#722](https://github.com/Shopify/polaris-react/pull/722))
- Fixed Shopify App Bridge import issues in `AppProvider` and `enzyme` test utilities ([#720](https://github.com/Shopify/polaris-react/pull/720))

## 3.2.0

- Updated `TextField` to no longer use `componentWillReceiveProps`([#628](https://github.com/Shopify/polaris-react/pull/628))
- Updated `EventListener` to no longer use `componentWillUpdate` ([#628](https://github.com/Shopify/polaris-react/pull/628))
- Allowed `Icon` to accept a React Node as a source ([#635](https://github.com/Shopify/polaris-react/pull/635)) (thanks to [@mbriggs](https://github.com/mbriggs) for the [original issue](https://github.com/Shopify/polaris-react/issues/449))
- Added `alignContentFlush` prop to ContextualSaveBar ([#654](https://github.com/Shopify/polaris-react/pull/654))
- Fixed `Pagination` from calling `onNext` and `onPrevious` while `hasNext` and `hasPrevious` are false for key press events ([#643](https://github.com/Shopify/polaris-react/pull/643))
- Removed min-width from `FormLayout` `Items` and applying it only to `Items` used inside a `FormLayout.Group` ([#650](https://github.com/Shopify/polaris-react/pull/650))
- Removed added space in `ChoiceList` when choice has children on selection but is not selected ([#665](https://github.com/Shopify/polaris-react/issues/665))
- Fixed `errorOverlayText` on `Dropzone` ([#671](https://github.com/Shopify/polaris-react/pull/671))
- Updated the `InlineError` text color, the error border-color on form fields and the error `Icon` color to be the same red. ([#676](https://github.com/Shopify/polaris-react/pull/676))
- Fixed `AppProvider` server side rendering support ([#696](https://github.com/Shopify/polaris-react/pull/696)) (thanks [@sbstnmsch](https://github.com/sbstnmsch) for the [original issue](https://github.com/Shopify/polaris-react/issues/372))
- Fixed `TextField` autocomplete disabling by setting autocomplete="nope" when `autoComplete` prop is `false` ([#708](https://github.com/Shopify/polaris-react/pull/708))
- Updated documentation links to match the new style guide link structure ([#478](https://github.com/Shopify/polaris-react/pull/478))
- `yarn run tophat` has been removed and its functionality has been moved into the `yarn run dev` server. Example editing now supports hot-reloading so you don’t need restart the server anymore.

- Bumped `@shopify/polaris-tokens` to v2.0.0. This is a **breaking change** for consumers of color design tokens in languages such as JavaScript and Sass ([full release notes](https://github.com/Shopify/polaris-tokens/blob/master/CHANGELOG.md#200---2018-10-23))

## 3.1.1

- Fixed selector import in `DataTable` and `Cell` ([#638](https://github.com/Shopify/polaris-react/pull/638))

## 3.1.0

- Improved `Avatar` so it falls back to `initials` when the image fails to load ([#557](https://github.com/Shopify/polaris-react/pull/557))
- Added `onScrolledToBottom` prop to `Scrollable` ([#568](https://github.com/Shopify/polaris-react/pull/568))
- Fixed `Action`’s selector in `Page`’s `Header` component ([#523](https://github.com/Shopify/polaris-react/pull/523))
- Fixed `Card` spacing in small devices ([#608](https://github.com/shopify/polaris/pull/608))
- Fixed `ResourceList` `BulkActions` that were remaining in fixed position outside the `boundingElement` ([#627](https://github.com/Shopify/polaris-react/pull/627))
- Improved readability of `Badge` with `size` small and `status` new for navigation ([#633](https://github.com/shopify/polaris/pull/633))

## 3.0.1

- Fixed `Datepicker` ranges when `start` and `end` dates are similar but have different references ([#601](https://github.com/Shopify/polaris-react/pull/601))
- Fixed `DataTable` column visibility calculation in production environments by using a `data-polaris-header-cell` attribute instead of class-based targeting ([#615](https://github.com/Shopify/polaris-react/pull/615))
- Fixed `Navigation.Item` not calling `onClick` on small screens when `onNavigationDismiss` is undefined ([#603](https://github.com/Shopify/polaris-react/pull/603))
- Fixed `Autocomplete` empty state example Markdown not parsing correctly ([#592](https://github.com/Shopify/polaris-react/pull/592))
- Fixed `TopBar`’s `UserMenu` alignment to be right-aligned when `TopBar` isn’t passed a `searchField` prop ([#597](https://github.com/Shopify/polaris-react/pull/597))
- Removed erroneous SCSS file import that rendered Polaris unable to be used in typescript projects without scss support ([#609](https://github.com/Shopify/polaris-react/pull/609))
- Fixed `Popover` inconsistent border-radius values ([#605](https://github.com/Shopify/polaris-react/pull/605))
- `TextStyle` strong variant now uses a span tag instead of b ([#606](https://github.com/Shopify/polaris-react/pull/606))
- Fixed non-blocking context errors when using `Toast` or `Loading` in an embedded app ([#613](https://github.com/Shopify/polaris-react/pull/613))

## 3.0.0

### Major changes

- Added padding top and bottom on `Card.Section` when set to full width
- Fixed `Portal` rendering by using `componentDidMount` lifecycle hook as opposed to `componentWillMount`
- Fixed an issue where clicking a `Link` without a `url` in a form would implicitly submit the form. `Link` can no longer submit forms. Use `<Button submit>` instead.
- Renamed the `Keys` enum to align with Shopify naming standards. It is now singular and the properties are in PascalCase. Replace `import {Keys} from '@shopify/polaris'` with `import {Key} from '@shopify/polaris'` and change the casing of the properties, e.g. replace `Keys.DOWN_ARROW` with `Key.DownArrow`.
- Added !important to `display: none` in `@print-hidden` mixin

#### Embedded apps

- Use the Shopify App Bridge in favor of the EASDK. The EASDK has been removed.
- Added Shopify App Bridge support to new components `Toast` and `Loading`
- Added `target` prop to all actions which get passed to the Shopify App Bridge
- Added new `size` and `message` props to `Modal` which aligns with the Shopify App Bridge API
- Added new `resourceType`, `initialQuery`, and `showVariants` props to `ResourcePicker` which aligns with the Shopify App Bridge API
- Moved embedded `ResourcePicker`, `Modal`, and `Page` to the main bundle and removed the embedded bundle. Imports from `'@shopify/polaris/embedded'` will no longer work, use `'@shopify/polaris'` instead.
- Made the `shopOrigin` prop on `AppProvider` optional. It’s now provided by default. If you do provide a `shopOrigin` it now needs to be given without the `'https://'` per the Shopify App Bridge API.
- Updated `onSelection` prop on `ResourcePicker`. The shape of the `selectPayload` data has changed and the product `id` is now a `gid`. For example, `/9019381572` is now `gid://shopify/Product/9019381572`. We offer [@shopify/admin-graphql-api-utilities](https://www.npmjs.com/package/@shopify/admin-graphql-api-utilities) to help compose and parse `gid` from Shopify admin.
- Updated default values for `ResourcePicker` props to align with the Shopify App Bridge. Set the props `showHidden`, `allowMultiple={false}`, and `showVariants={false}` to get the previous default behavior.
- Updated `target` prop type related to embedded apps, use `'APP'`, `'ADMIN_PATH'`, or `'REMOTE'`
- Removed `icon` prop from `Page`. Upload your app’s icon in the Shopify Partners dashboard “App setup” section instead.
- Removed `title` prop from `ResourcePicker` as setting a title is no longer supported by the Shopify App Bridge
- Removed `products` prop from `ResourcePicker`, use `resourceType="Product"` instead
- Removed `collections` prop from `ResourcePicker`, use `resourceType="Collection"` instead
- Removed `width` and `height` props from `Modal`, use `size` instead
- Removed `debug` prop from `AppProvider`, use [Redux DevTools](https://github.com/reduxjs/redux-devtools) instead. Redux DevTools also has [browser extensions](https://github.com/zalmoxisus/redux-devtools-extension).
- Removed the `Alert` component, use `Modal` with `message` prop instead
- Replaced `easdk` on React context with `appBridge`. Access it via `this.context.polaris.appBridge`.
- Removed `this.context.easdk.startLoading()` and `this.context.easdk.stopLoading()`, use the `Loading` component instead
- Removed `this.context.easdk.showFlashNotice()`, use the `Toast` component instead
- Removed `this.context.easdk.pushState()`, use the [Shopify App Bridge `History` action](https://help.shopify.com/en/api/embedded-apps/app-bridge/actions/navigation/history) instead. The `History` action requires passing the `appBridge` instance which is accessible via `this.context.polaris.appBridge`.
- Removed `this.context.easdk.redirect()`, use the [Shopify App Bridge `Redirect` action](https://help.shopify.com/en/api/embedded-apps/app-bridge/actions/navigation/redirect) instead. The `Redirect` action requires passing the `appBridge` instance which is accessible via `this.context.polaris.appBridge`.

#### License

- Updated the license from MIT to a custom license based on MIT. The new license restricts Polaris usage to applications that integrate or interoperate with Shopify software or services, with additional restrictions for external, stand-alone applications.

We’ve released a suite of new components that, when combined, form the application frame of a stand-alone (or non-embedded) Polaris app.

#### [Frame](https://polaris.shopify.com/components/frame)

The frame component, while not visible in the user interface itself, provides the structure for any non-embedded application. It wraps the main elements and houses the following components:

- primary [navigation](https://polaris.shopify.com/components/navigation)
- [top bar](https://polaris.shopify.com/components/top-bar)
- [toast](https://polaris.shopify.com/components/toast)
- [loading](https://polaris.shopify.com/components/loading)
- [contextual save bar](https://polaris.shopify.com/components/contextual-save-bar)

#### [Navigation](https://polaris.shopify.com/components/navigation)

The navigation component is used to display the primary navigation in the sidebar of the [frame](https://polaris.shopify.com/components/frame) of any non-embedded application. Navigation includes a list of links that merchants use to move between sections of the application.

#### [TopBar](https://polaris.shopify.com/components/top-bar)

The top bar component is always visible at the top of a non-embedded application. Its logo and color can be customized using the [app provider](https://polaris.shopify.com/components/app-provider) component to reflect an application’s brand. Merchants can use it to search an application, access menus, and navigate by clicking on the logo.

#### [Toast](https://polaris.shopify.com/components/toast)

The toast component is a non-disruptive message that appears at the bottom of the interface to provide quick, at-a-glance feedback on the outcome of an action.

#### [Loading](https://polaris.shopify.com/components/loading)

The loading component is used to indicate to merchants that a page is loading or an upload is processing.

#### [ContextualSaveBar](https://polaris.shopify.com/components/contextual-save-bar)

The contextual save bar tells merchants their options once they have made changes to a form on the page. This component is also shown while creating a new object like a product or customer. Merchants can use this component to save or discard their work.

#### [Autocomplete](https://polaris.shopify.com/components/autocomplete)

The autocomplete component is an input field that provides selectable suggestions as a merchant types into it. It allows merchants to quickly search through and select from large collections of options.

- Changed `Form` to default the `method` to `post` in order to prevent accidental leaking of form details
- Added support for boolean type on Choice error prop
- Changed the esnext folder to contain individual, minimally transpiled JavaScript component files, as well as raw style and image assets
- Added `onPortalCreated` prop to `Portal`
- Improved consistency of `Badge` styling
- Explicitly specifying `list-style` on `List`

- Fixed console error and used new ref syntax in `DataTable` (thanks to [@duythien0912](https://github.com/duythien0912) for the [original issue](https://github.com/Shopify/polaris-react/issues/403))
- Fixed the ability to upload multiple files even when `allowedMultiple` prop is false
- Fixed `Datatable` so it resizes with new content (thanks [@andrewpye](https://github.com/andrewpye) for the [original issue](https://github.com/Shopify/polaris-react/issues/387))
- Fixed `RangeSlider` linear-gradient so it doesn’t break the css build (thanks [@Ankitjasoliya](https://github.com/Ankitjasoliya) and [@nerfologist](https://github.com/nerfologist) for the [original issue](https://github.com/Shopify/polaris-react/issues/441))
- Fixed issue in `Page`, where styling wasn’t being applied correctly to Page Actions
- Removed unnecessary bindings on the `Modal`’s `onClose` prop
- Rearranged `primaryFooterAction` and `secondaryFooterAction` in `Card` (thanks [@sivakumar-kailasam](https://github.com/sivakumar-kailasam) for the [original issue](https://github.com/Shopify/polaris-react/issues/551))
- Updated banner guidelines to make it clearer when success banners should be used vs success toasts.
- Added examples for iOS and Android section header
- Added examples for iOS and Android thumbnail
- Added examples for iOS and Android empty state
- Added examples for iOS and Android text field
- Added examples for iOS and Android select
- Added examples for iOS and Android keyboard accessories
- Added examples for iOS and Android collapsible
- Added examples for iOS and Android list
- Clarified placement and usage of `Banner`
- Added an explanation to `Modal` about why it can’t be closed by clicking outside the modal and should only be closed by clicking `X` or `Cancel`

- Moved sub-sub-components within `ResourceList` into components folders
- Removed empty state from `ResourceList` if there are no items and `loading` is true
- Move to use sewing-kit for test running, updating to Jest 23 in the process. This gives us working sourcemaps for code coverage
- Improved accessibility testing checklist
- Updated development node environment to 10.13.0
- Added shopify/jest plugin to eslint config

#### Open development

- Added [contribution guidelines](https://github.com/Shopify/polaris-react/blob/main/.github/CONTRIBUTING.md)
- Added [tophatting documentation](https://github.com/Shopify/polaris-react/blob/main/documentation/Tophatting.md)
- Updated the project README
- Moved active development to the public repository

## 2.12.1

- Fixes type imports in the build

## 2.12.0

- Removed tip from `Popover`
- Increased speed of `Popover` transition from 500ms to 100ms
- Improved text contrast in `Badge`.
- Added named `medium` size to Button that renders the same as omiting the size attribute

- Fixed typo in `Collapsible` example
- Fixed padding and margins on `SkeletonPage` to match `Page`
- Fixed spacing between `Page` title and metadata

- Made `ActionList`, `OptionList` and `Popover` examples active by default so previews are visible without interacting
- Improved the manual accessibility checklist

- Batched Percy snapshots per component

## 2.11.0

- `Tab.Item` with a `url` prop now renders an `UnstyledLink` instead of a `Button` when displayed in `Popover` and you can now keyboard navigate the disclosure in `Tabs`
- Refs can be placed on `DropZone.FileUpload`
- Use the new context API in `ResourceList`
- Use the new context API in `DropZone`
- Update example description in `ExceptionList` documentation
- Move Modal CloseButton into its own subcomponent, instead of being part of the Header subcomponent. This is an internal implementation detail if you are using the React component. If you are using (s)css and are defining class names manually you will need to update references to `Polaris-Modal-Header__CloseButton` and `Polaris-Modal-Header--withoutTitle` to `Polaris-Modal-CloseButton` and `Polaris-Modal-CloseButton--withoutTitle` respectively.

- Added `d.ts` files to test coverage ignore
- `Page` is no longer self-closing in the playground

- Fixed `Button` alignment issue caused by unnecessary icon markup rendering ([#2339](Fixing button alignment #2339)) (thanks to ([@mbaumbach](https://github.com/mbaumbach)) for the ([original issue](https://github.com/Shopify/polaris-react/issues/429)))
- Fixed console error and used new ref syntax in `DataTable` (thanks to [@duythien0912](https://github.com/duythien0912) for the [original issue](https://github.com/Shopify/polaris-react/issues/403))
- Fixed margin of `InlineError` text to align with the `ChoiceList` labels
- Replaced hardcoded `rem` values with globally scalable ones on `DataTable`’s collapsed shadow, and `TextStyle` code blocks
- Fixed spacing of numbered `List` for double digits ([#121](https://github.com/Shopify/polaris-ux/issues/121))
- Fixed `ProgressBar` not showing up in Windows high contrast mode ([#1708](https://github.com/Shopify/polaris-react/issues/1708))
- Top aligned all cells in `DataTable`
- Fixed stacking order of loading overlay in `ResourceList`
- Fixed form inputs in `Popover` that were disappearing instead of top aligning thanks to [@mbaumbach](https://github.com/mbaumbach) for the [original issue](https://github.com/Shopify/polaris-react/issues/435)
- Removed a redundant class on `OptionList` list items

- Made `Modal` examples show the modal dialog by default
- Changed fitted `Tabs` to have equal width when enough space is present ([#2314](https://github.com/Shopify/polaris-react/issues/2314))

#### withContext

Use `withContext` to pass consumer context to a component.

#### withRef

Use `withRef` with `compose` to forwardRefs to a component.

## 2.10.0

- Updated `Button` to accept a `React.ReactNode` for its `icon` prop

- Refined accessibility checklist

- Added truncation to `Tag`

## 2.9.0

- Updated date filter labels in resource list
- Changed `placeholder` prop in `Select` to be the default selection
- Added a `loading` prop to `ResourceList` that places a spinner overtop items and disables bulk actions

- Clarified when and how to use icons in the banner component
- Updated footer help component guidelines to include content instructions for app developers

- Fixed resource list component to correctly handle inclusive filter keys
- Fixed date field in DateSelector to not render an error when date is added by the date picker and field is blurred
- Fixed pagination from firing keypress events while focus is inside inputs or contenteditables
- Fixed `EmptyState` horizontally scrolling when fully condensed
- Fixed the bottom margin of elements inside `Page` being ignored in some browsers
- Added required `url` prop to `breadcrumbs` in `Page` component examples
- Fixed `ActionList` wrapping text within a `Popover`
- Fixed `Banner` spacing when inside of a section
- Fixed `Stack` so it doesn’t add extra spacing between items in Safari

## 2.8.0

- Reverted a change that caused the built embedded.js bundle to be way larger than it should be due to broad imports

- Added support for boolean type on Choice error prop

- Updated banner guidelines to make it clearer when success banners should be used vs success toasts.
- Updated display text documentation to have a separate example for medium and large display

## 2.7.2

- Reverted a change that caused items in a `Popover` component not to be clickable

## 2.7.1

- Fixed paths to images in the “Attention badge” example

- Fixed the `Page` component’s `primaryAction` to support `LoadableAction`s and `DisableableAction`s

## 2.7.0

- Adjusted spacing for `ChoiceChildren` in `ChoiceList` for readability
- Made `Card.Header` a separate publicly accessible component
- Added support for complex operators in `ResourceList` component
- Updated the `Page` component’s `primaryAction` to support `Button` props.
- Added validation for non-numeric input in a type="number" `TextField`
- Added circle information icon

- Updated `Banner` guidelines to make it clearer when success banners should be used vs success toasts

## 2.6.1

- Moved `pa11y` and `object-hash` from dependencies to devDependencies

- Fixed inconsistent `DropZone` error styling

## 2.6.0

- Added a `test:coverage` script to gather and display test coverage results
- Added Codecov test coverage checks to pull requests
- Added automated a11y testing to CI

- Added support for `titleMetadata` in `Page` component
- Added support for `FilterType.DateSelector` in `ResourceList` component
- Added `code` as an accepted `variation` of the `TextStyle` component to provide support for accessible markup and styling of inline code snippets and code-like text
- Added new `border-width` SCSS function
- Added support for `fullWidth` and `connectedTop` props on `ButtonGroup`
- Added `label` prop to `DropZone` for better accessibility
- Added support for `RadioButton` to accept a block as a `label`
- Added a `singleColumn` prop to the `SkeletonPage` component
- Updated the transition on large `Modal` to match the default transition
- Added `nextKeys`, `previousKeys`, `nextTooltip`, and `previousTooltip` props to the `Pagination` component to support keypress handling and `Tooltip` in pagination buttons.
- Added examples to the `Layout` component documentation for two and three column grid layouts
- Added an export for the `Progress` type to support downstream typechecking of the `Badge` component `progress` prop
- Added an `iFrameName` prop to the `Modal` component to support named iframe children
- Added a `ScrollTo` subcomponent to the `Scrollable` component to support scrolling to a child node programmatically
- Added support for the `Button` component to accept an array of strings as children
- Changed the primary focus target of an activated `Popover` from the first focusable child to the `Popover` itself
- Added an improved error message when the child of an embedded `Alert` component is not a string (thanks [@superwhykz](https://github.com/superwhykz) for the [original issue](https://github.com/Shopify/polaris-react/issues/378))
- Added a minimum width to tab items to improve touch target sizing and account for smaller tab titles
- Added support for additional accessibility attributes to the `TextField` and `OptionList` components
- Added support for `OptionList` with `Avatar`, `Icon`, and `Thumbnail` when `options` descriptors have a `media` property
- Added support for destructive `ActionList` items
- Added support for `OptionList` `options` descriptors to accept a block for the `label` property
- Added `$page-max-width` variable to capture page calculated `max-width` value and `page-when-not-max-width` mixin to trigger when page is resized horizontally
- Added support for select error messages to be optional
- Updated the `Breadcrumbs` component to support the `CallbackAction` type as a prop (thanks [@dylan](https://github.com/dylan) for the [current issue](https://github.com/Shopify/polaris-react/issues/278) and everyone who identified this.)
- Added support for `TextField` error messages to be optional
- Added a `disabled` prop to the `Choice` component. `Checkbox` and `RadioButton` labels are now styled to reflect their disabled state
- Added support for Windows High Contrast mode in the `Select`, `Checkbox` and `RadioButton` components

- Fixed `TextField` resizer rendering when `multiline` was false
- Fixed `Modal` header condensing
- Fixed `Tooltip` so active prop activates on initial render
- Fixed `Popover` border radius and left and right alignment
- Fixed visibility of the hidden implicit submit button in `Form` (thanks [@cgenevier](https://github.com/cgenevier) for the [original issue](https://github.com/Shopify/polaris-react/issues/386))
- Fixed alignment of wrapped empty state actions
- Swapped the import and export icons
- Fixed incorrect `DataTable` column count and content skipping in assistive technologies
- Fixed unintended form submittal by action list items enclosed in a `form` (thanks [@andrewpye](https://github.com/andrewpye) for the [original issue](https://github.com/Shopify/polaris-react/issues/391))
- Fixed text alignment of multiline `OptionList` option text
- Fixed an issue where the `Stack` component would render incorrectly nested items
- Fixed spacing above annotated sections on smaller screens
- Fixed an issue that caused problems for some build tools
- Fixed the word-break of long text in `Label` and `Banner` on small screens

- Added examples for iOS and Android `RadioButton`
- Added examples for iOS and Android `Banner`
- Added `Toast` component
- Added examples for iOS and Android `Button`
- Added examples for iOS and Android `ButtonGroup`
- Added examples for iOS and Android `Badge`
- Added examples for iOS and Android `Avatar`
- Added `Stepper` component

#### [InlineError](https://polaris.shopify.com/components/inline-error)

Use inline errors to describe custom form inputs or form groups when invalid.

## 2.5.0

- Updated sub component structure
- Added `weekStartsOn` prop to `DatePicker`

- Remove `stickyManager` from `AppProviderProps` interface
- Fixed a bug where `Layout.AnnotatedSection` would output a wrapper div for a `description` even when its contents were empty
- Remove extra padding from annotated section

- Added iOS and Android examples to the `Card` component
- Added iOS and Android examples to the `ChoiceList` component

- Renamed `yarn start:vrt` to `yarn tophat` and updated the folder name to match
- Improved `yarn tophat`’s design, and added a `/all-components` route

- Added `weekStartsOn` prop to `DatePicker`

## 2.4.0

- Changed `Form` to submit a form by default when the <kbd>enter</kbd> key is pressed, and added the prop `implicitSubmit` to disable this default

- Fixed `TextField` padding when a `prefix` or `suffix` is included

## 2.3.1

- Removed the min-width of 320px from `ResourceList`

- Resolve issue with `RangeSlider` component not accepting `0` as a `max` value
- Slightly reduced spacing for `prefix` and `suffix` on the `RangeSlider` component
- Fixed spacing for `prefix` and `suffix` on the `TextField` component
- Fixed height of cells in `DataTable` that are rendered after initial page load (for example: in a `Tab` or a `Popover`) (thanks [@flewid](https://github.com/flewid) for the [original issue](https://github.com/Shopify/polaris-react/issues/344))
- Fixed `DatePicker` month styling for previous years

## 2.3.0

#### [Option list](https://polaris.shopify.com/components/option-list)

Use `OptionList` to present a group of selectable items outside of the context of a `Form`.

- Fixed `Form` examples

- Added `prefix` and `suffix` props to `RangeSlider` for better layout control
- Added testing documentation and examples in `AppProvider`
- Performance: optimized avatar SVG files
- Updated `yarn run optimize` to add new line at the end of SVG files
- Added a more compact variant of `Select`, with the form label appearing inside the control)
- Adjusted padding on `TextField` to work with Chrome’s autofill
- Fixed a regression where the version of Polaris wasn’t globally available anymore
- Updated the interaction state visuals for `ActionList`
- Fixed z-index on `ResourceList` header with sorting options (thanks [@janklimo](https://github.com/janklimo) for the [original issue](https://github.com/Shopify/polaris-react/issues/355))
- Fixed an issue where `RadioButton` was not focusable in Safari
- Fixed spacing for annotated section descriptions
- Fixed a bug in EASDK action transforms that prevented external urls in embedded apps from opening (thanks [@dansundy](https://github.com/dansundy) for the [original issue](https://github.com/Shopify/polaris-react/issues/203))

### Dependency updates

- Updated [`@shopify/polaris-tokens`](https://npmjs.com/package/@shopify/polaris-tokens), the single source of truth for colors

## 2.2.0

#### [Range slider](https://polaris.shopify.com/components/range-slider)

Use `RangeSlider` to select a number value between a min and max range.

- Added a fixed prop to `Popover` allowing for a fixed position
- Added badge prop to the `ItemDescriptor` type and action group
- Added `text-breakword` mixin for easier word breaking when dealing with long unspaced strings

- Fixed unexpected form submission when switching tabs in a `Tabs` component wrapped in a `Form`
- Added missing `'Shopify.API.setWindowLocation'` message handler to the EASDK

## 2.1.2

- Added support for `Card` to accept a block for a title
- Added an intermediate prop typing for `Link` to allow redefinition of prop definitions

- Fixed an issue where `ResourceList` filters lost padding (thanks [@BarryCarlyon](https://github.com/BarryCarlyon) for the [original issue](https://github.com/Shopify/polaris-react/issues/330))
- Fixed unexpected focus jumps when `DatePicker` props are updated
- Fixed the spacing and text wrapping of `ExceptionList` title and description

## 2.1.1

- Fixed `DropZone` to prevent it from kicking into small size too soon

- Various content and markdown fixes

## 2.1.0

#### [Exception list](https://polaris.shopify.com/components/exception-list)

Use Exception lists to draw the merchant’s attention to important information that adds extra context to a task.

- Added an `ellipsis` prop to `ActionList.Item` allowing for an ellipsis suffix after the content
- Added a `preferredAlignment` prop to `Popover` allowing it to be aligned to the left, center, or right of its activator
- Updated styling for `Banner` that appear in a `Card` or a `Modal`
- Added new size to `DropZone` component
- Exposed Group interface from the `Select` component
- Renamed `plain-list` mixin to `unstyled-list`
- Removed padding from `DropZone` and applied it to `FileUpload` instead

- Fixed unexpected window scroll on rendering `DataTable` (thanks [@mfurniss](https://github.com/mfurniss) for the [original issue](https://github.com/Shopify/polaris-react/issues/317))
- Fixed focused inner interaction state on `ResourceList.Item` for reverse tabbing
- Fixed border radius on `Card` to match the padding on `Page`
- Added `target` to the `breadcrumb` prop on `Page` (thanks [@sdn90](https://github.com/sdn90) for the [original issue](https://github.com/Shopify/polaris-react/issues/306))
- Fixed visual representation of disabled bulk action buttons in `ResourceList`
- Fixed margins of a `fullWidth` `Popover` that appears above its activator
- Fixed rendering of `Popover` when activator rerenders (thanks [@nerfologist](https://github.com/nerfologist) for the [original issue](https://github.com/Shopify/polaris-react/issues/324))
- Fixed `z-index` calculation for `PositionOverlay` and `Dialog`
- Fixed an issue where selecting a date in `DatePicker` would submit its enclosing form
- Fixed `ResourceList` reverse tabbing focus interaction on action buttons
- Fixed padding in the case where a `ResourceList` had no filters

## 2.0.0

Summary: this is the first major version of Polaris React since launch. Included in this release are:

- Several new components, including `DataTable`, `DropZone`, `AppProvider`, and `Modal`
- Improvements to existing components, such as `ResourceList`, `ChoiceList`, and `Card`
- A few breaking API changes

### Major changes

#### React 16+

We’re removing support for React 15 in order to make full use of some of the new features in React 16, such as fragments, error boundaries, and improved server-side rendering.

##### Upgrade instructions

Upgrade your app to the latest version of React.

#### [App provider](https://polaris.shopify.com/components/app-provider)

The `AppProvider` component is now required in your app for Polaris components to function properly.

##### Upgrade instructions

Wrap your app in the `AppProvider` component.

#### [Collapsible](https://polaris.shopify.com/components/collapsible) component requires an `id` prop

For accessibility reasons, the `id` prop is now required on the `Collapsible` component.

##### Upgrade instructions

Pass a unique value as an `id` to all `Collapsible` components. For example, `<Collapsible id="my-unique-id">`.

#### EmbeddedApp component has been removed

The `EmbeddedApp` component has been removed. The `AppProvider` component now accepts the configuration needed to initialize an embedded app.

##### Upgrade instructions

Use the `AppProvider` component with the `apiKey` and `shopOrigin` props.

#### [Resource list](https://polaris.shopify.com/components/resource-list#navigation)

Shopify is organized around objects that represent a merchant’s business, such as customers, products, and orders. Each individual order, for example, is given a dedicated page that can be linked to. In Shopify, we call these types of objects resources.

The resource list component functions as:

- A content format, presenting a set of individual resources in a compact form
- A system for taking action on one or more individual resources
- A way to navigate to the details page of an individual resource

Our current resource list component gave you some nice defaults out of the box, but didn’t take you much further than that. We recognized that each of these lists is unique and contains different information that is important to the merchant.

Our new resource list allow you to build custom items in the list, with their own layout, content, and styling. This gives you a powerful way to build these sorts of lists going forward.

We’ve also included in depth documentation and a tutorial on how to build your own custom resource list items.

#### Tabs no longer accept `title` prop

To be more consistent with our other component APIs, the `Tabs` component now uses `content` instead of `title`.

##### Upgrade instructions

Change all instances of `title` to be `content` instead.

#### TextField onChange is required

Because we require you to manage state for your inputs, we decided to make `onChange` required for `TextField` to avoid confusion.

##### Upgrade instructions

Add an `onChange` callback to each use of `TextField` that is not disabled or readonly.

#### Removed default white color from Icon CSS

The CSS for `Icon` will no longer apply a color to icons by default. You must use the `color` prop on the `Icon` component to specify the color.

##### Upgrade instructions

Use `color` prop on all instances of `Icon` component.

#### Anchor tags are no longer styled by Polaris components

To avoid conflicts with other styling or frameworks, we’re removing the styling we globally applied to all `a` elements.

##### Upgrade instructions

Use the `Link` component instead.

#### Changed Alert onCancel prop to onClose

This change only impacts users of the Sass version of Polaris, more specifically the `color()` function. The `color($hue, $value: base, $for-background: null)` function in Sass now accepts strings for `$hue` and `$value` as advertised in [the color function documentation](https://polaris.shopify.com/sassdoc/#undefined-function-color).

##### Upgrade instructions

If you’re using VS Code, here are the exact search / replace instructions to follow (toggle “Use Regular Expression”):

- replace `\bcolor\(([a-z-]+)\)` with `color('$1')`
- replace `\bcolor\(([a-z-]+), ([a-z-]+)\)` with `color('$1', '$2')`
- replace `\bcolor\(([a-z-]+), ([a-z-]+), (.*)\)` with `color('$1', '$2', $3)`

#### [Data table](https://polaris.shopify.com/components/data-table)

Since launching Polaris components, we’ve had many people ask why we didn’t include tables. While we have been moving away from using tables for comparisons that aren’t tabular data (resource lists, for example), we recognize that there are still cases to use them.

The data table component is our answer to those cases. While data visualizations represents part of a data set, data tables are used to organize and display all the information from a data set, allowing merchants view details from the entire set. This helps merchants compare and analyze all the data in a unified way.

#### [Drop zone](https://polaris.shopify.com/components/drop-zone#navigation)

Currently we have several different interfaces for uploading files across Shopify, which leads to a lack of consistency and some missing features and capabilities. To solve this problem, we’re releasing a new drop zone component.

This new component allows merchants to upload files by dragging and dropping them into an area on a page. The component handles file type validation, dropping onto the window, and more, meaning more ease of use for merchants.

#### [Modal](https://polaris.shopify.com/components/modal#navigation)

In the original Polaris React, the modal component was only available to embedded apps. No longer. Our new modal component is universal in that it can be used in either stand-alone or embedded apps, and will handle the correct behavior for you.

#### [App provider](https://polaris.shopify.com/components/app-provider#navigation)

The app provider is a required component that enables sharing global app config with the components in Polaris. This is used for the internationalization of strings in Polaris components, as well as set other configuration such as a custom link component that all the Polaris components will use. This unlocks new ways for us to share configuration at an app level and have the components react to that configuration.

- Added `error` prop to `ChoiceList`
- `TextField`, `Select`, and `Checkbox` now accept the types `string` or `ReactElement` for the `error` prop
- Added optional `id` props to more components, and restructured the prop definitions to allow projects to make `id` props mandatory
- Added `fullWidth` prop to `Card.Section`
- Added `fullHeight` prop to `Popover` to override max-height
- Added `allowRange` as a property for `DatePicker`
- Added the `external` option to the `secondaryAction.action` prop on the `Banner` component. Thank you to ([Andrew Cargill](https://github.com/cargix1)) for the issue ([#236](https://github.com/Shopify/polaris-react/issues/236))
- Enforced subdued description `TextStyle` in `AnnotatedSection`
- Fixed overflow of `TextField` that caused the border to be cut off
- Allowed specific props in the `TextField` component to pass through properties to the input child
- Fixed `ActionList` component to provide section dividers when a `title` was not provided
- Fixed an issue in the `Select` component where placeholder didn’t properly appear on Firefox and appeared disabled on all browsers

## 1.14.2

_This will be the last v1.x release outside of critical security fixes._

- Add margin-left spacing to disclosure icon within `Button` component
- Remove margins on segmented `ButtonGroup`
- Fixed text alignment of `Link` so that it inherits from its parent node

## 1.14.1

- Fixing an error with the release process

## 1.14.0

- Changed `term` in `DescriptionList` component to accept `React.ReactNode` to allow for more than just `string` type

## 1.13.1

- Added missing `publishConfig.access` setting in `package.json`, in accordance with the new Shipit requirements for public npm packages

## 1.13.0

- Added an `id` prop to Collapsible to be referenced by the `aria-controls` attribute of the component triggering the collapse

- Fixed external prop not working within `ActionList` component
- Fixed a syntax error in one of the `Card` component examples (thanks [@meecrobe](https://github.com/meecrobe) for the [original issue](https://github.com/Shopify/polaris-react/issues/281))

## 1.12.4

- Enhanced `Avatar` to work better when provided non-square images
- Move documentation file so it’s picked up by the style guide

## 1.12.3

- Fixed disclosure centering on the `Tabs` component
- Fixed an issue where a style void would appear between breakpoints at high text zoom levels

- Removed purpose section from component READMEs
- Added `EmbeddedPage` under the Embedded section
- Added “Using embedded components” section
- Added screenshots to the embedded components
- Clarified usage of `Card` header and `FooterActions`

## 1.12.2

- Moving property descriptions out of READMEs and into source files

## 1.12.1

- Fixed server-side environments

- Updated component examples that use state to use an es6 class

## 1.12.0

- Fixed `TextField` overflow issues when inside `Scrollable`
- Fixed `Select` focus state bug occuring in Firefox
- Fixed vertical alignment of text within full width variant of the button component

- Changed `Checkbox` label to allow string or React.ReactNode
- Update `TextField` type with currency
- Added `ariaControls`, `ariaExpanded` prop to `Button`
- Updated the base red color to improve contrast
- Added a notification icon to the bundled icons available to use in the icon component’s source prop
- Exposed Status from the `Banner` component
- Added `titleHidden` prop to `Page`

- Clarified intended usage for `EmptyState`

### Chores

- Added version number to source

## 1.11.0

- Changed Action to Disableable Action in Card

- Added `renderChildren` prop to `ChoiceList` component

- Fixed an issue with `FooterHelp` links not expanding to full-width on mobile devices ([#759](https://github.com/Shopify/polaris-react/issues/759))
- Added breadcrumbs to `SkeletonPage`
- Added max-width and auto margin to `EmptyState`
- Fixed outline `Button` disabled state styles
- Fixed `Tag` so the `onRemove` function is not improperly called (thanks [@chaddjohnson](https://github.com/chaddjohnson) for the [original issue](https://github.com/Shopify/polaris-react/issues/235))
- Fixed border on inputs disabled state
- Fixed an issue in `TextInput`, when you increment or decrement with a float value, and the digits after the decimal point where wrong (thanks [@cgidzinski](https://github.com/cgidzinski) for the [original issue](https://github.com/Shopify/polaris-react/issues/761))
- Added top alignment to FormLayout.Group

- Fixed capitalization of prop names in `Pagination` component’s documentation (thanks [@donnguyen](https://github.com/donnguyen) for the [original issue](https://github.com/Shopify/polaris-react/issues/141))
- Exposed Option from the `Select` component

## 1.10.2

- Fixed the public repository’s build (which was missing the new CircleCI configuration files)

## 1.10.1

- Fixed CSS-only `Checkbox` (thanks [@daddy88](https://github.com/daddy88) for the [original issue](https://github.com/Shopify/polaris-react/issues/252))

## 1.10.0

- Restored the correct `latest` version to the CDN
- Fixed rgbToHsb function when red is the largest number and added tests (thanks [@emcmanus](https://github.com/emcmanus) for the [original issue](https://github.com/Shopify/polaris-react/issues/251))
- Fixed an issue where a hard-coded path would cause the build to fail on Windows (thanks [@Invader444](https://github.com/Invader444) for the [original issue](https://github.com/Shopify/polaris-react/issues/245) and [pull request](https://github.com/Shopify/polaris-react/pull/246))
- Added `onClick` to `UnstyledLink`
- Added tests to `Link`

- Added tests for `ColorPicker` color utilities

## 1.9.1

- Ammending changelog

## 1.9.0

- Added `onActionAnyItem` prop to action list and used to close `Page` `actionGroups` on click or keypress of any item
- Added `content` prop to `Tabs` and deprecated use of `title`
- Added `TextContainer` component
- Added `idForItem` prop to resource list
- Added `fullWidth` prop to layout section
- Added `indeterminate` as option for checkbox `checked` prop value
- Added `singleColumn` prop to page
- Added `focused` prop to `TextField`

- Fixed positioned overlay not responding to `Scrollable` container events
- Fixed first focusable item focus in `Popover`
- Fixed typos in the select component documentation (thanks [@mattchidley](https://github.com/mattchidley) for the [original issue](https://github.com/Shopify/polaris-react/issues/224))

## 1.8.3

- Moved react-transition-group from a dev dependency to a dependency

## 1.8.2

- Fixed `Stack` not returning children

## 1.8.1

- Added missing yarn config file which was causing the build to fail

## 1.8.0

- Updated README to consistently use contractions (thanks [@stefanmiodrag](https://github.com/stefanmiodrag) for the [original pull request](https://github.com/Shopify/polaris-react/pull/191))
- Improved example description for `Layout` component
- Updated `Spinner` documentation
- Improved component purpose documentation across components
- Improved documentation for `TextStyle` component

- Added support for React 16
- Added an option to show or hide unpublished products from the `ResourcePicker`
- Changed `Popover` component to use `react-transition-group` instead of our deprecated custom version in `@shopify/react-utilities`
- Added new `ProgressBar` component
- Changed today’s date to be tabbable and clearly indicated in `DatePicker`
- Added support for disabled choices in `ChoiceList` component
- Added support for disabled secondary `Page` actions
- Changed `TextField` and `Select` to now focus on clicking only within the area from the input to the end of its label text

- Fixed `Layout` component example description
- Fixed `SkeletonPage` header appearing in embedded apps (thanks [@rkbhochalya](https://github.com/rkbhochalya) for the [original issue](https://github.com/Shopify/polaris-react/issues/202)))
- Fixed border-radius on `ActionList` component in Chrome

## 1.7.0

- Added `SkeletonPage`, `SkeletonBodyText` and `SkeletonDisplayText` components
- Added `Spinner` component
- Added hint prop to `Scrollable` and use in `Popover`
- Updated `Button` component to use new `Spinner` component
- Added external link support for `Page` `secondaryActions`
- Enabled the `primaryAction` of `PageActions` to be loading
- `Stack` now supports non-wrapping layouts on small screens
- Updated `TextField` min and max documentation
- Breadcrumbs now accept a callback through onAction (thanks [@arypbatista](https://github.com/arypbatista) for the [original issue](https://github.com/Shopify/polaris-react/issues/188))
- Fixed issue with embedded app breadcrumb linking to Shopify settings page (thanks [@cargix1](https://github.com/cargix1) for the [original issue](https://github.com/Shopify/polaris-react/issues/116))
- Fixed `Avatar` to display image and initials simultaneously
- Fixed various links to embedded components
- Fixed left and right ends of `TextField` not responding to clicks
- `RadioButton` & `Checkbox` now focus on clicking only within the area from the input to the end of its label text
- Fixed plain and `fullWidth` `Button` alignment
- Add a minor delay to `Tooltip` display

## 1.6.0

- Documented disabled prop for `Checkbox` and `RadioButton` (thanks [@LeoAref](https://github.com/LeoAref) for the [original issue](https://github.com/Shopify/polaris-react/issues/114))
- Documented progress prop for `Badge` (thanks [@sp4cecat](https://github.com/sp4cecat) for the [original issue](https://github.com/Shopify/polaris-react/issues/172))
- Added loading prop to `Button` (thanks [@bakura10](https://github.com/bakura10) for the [original issue](https://github.com/Shopify/polaris-react/issues/30))
- Documented complex `Select` option (thanks [@sp4cecat](https://github.com/sp4cecat) for the [original issue](https://github.com/Shopify/polaris-react/issues/174))
- Documented `TextStyle` component
- Improved `Avatar` typography spacing
- Added subtract icon
- Improved acessibility for `Pagination`

- Fixed failed dependency installation for unauthenticated GitHub users (thanks [@mikeyhew](https://github.com/mikeyhew) for the [original issue](https://github.com/Shopify/polaris-react/issues/184))
- Fixed `Page` header spacing
- Fixed `TextField` focus ring transition
- Fixed `Popover` not resizing on content updates

## 1.5.2

- Fixes alignment of `PageAction` links

## 1.5.1

- Fixed disabled `Button` when using local class names
- Fixed `Scrollable` resize listener not autobinding

## 1.5.0

- Updated `Scrollable` component to remember scroll position on re-render
- Added checkmark icon to the `Icon` component
- Added an example for a disabled `TextField`

- Fixed typo in `Icon` code example

## 1.4.1

Various documentation fixes.

## 1.4.0

- Updated import, export, and view icons
- Improved documentation of various components
- Improved how `ActionList` handles images and groups
- Exposed PopoverCloseSource from `Popover` component

- Fixed `PageActions` spacing in IE11
- Fixed ID inconsistency on `TextField`
- Fixed spacing on `Page` component with no header (thanks [@bakura10](https://github.com/bakura10) for the [original issue](https://github.com/Shopify/polaris-react/issues/160))
- Fixed disabled state on primary and destructive `Button`

### Chores

- Upgraded javascript-utilities to the latest version

## 1.3.1

- Fixed classnames in built \*.scss files
- Fixed broken link in description list README

## 1.3.0

- Added an `esnext` build (allows production builds to perform class/method tree shaking)
- Changed KeyboardKey component to use `kbd` tag
- Added publishing `docs` folder to npm package
- Added `fullWidth` option to `Popover` component

- Updated Static HTML page examples to correct markup (thanks [@bartcoppens](https://github.com/bartcoppens) for the [original issue](https://github.com/Shopify/polaris-react/issues/159))
- Hide increment and decrement buttons on number input when disabled (thanks [@kguller](https://github.com/kguller) for the [original issue](https://github.com/Shopify/polaris-react/issues/163))
- Fixed link to product content documentation
- Fixed documented type for error prop on `Checkbox` component
- Fixed `Popover` reopening when clicking around during transition
- Fixed `Popover` resizing on content updates
- Fixed vertical alignment of `Button` content

### Sketch UIKit

- Added Sketch color palette file

## 1.2.1 (July 27, 2017)

### Chores

- Fixed a repo issue that caused the public repo release not to happen

## 1.2.0 (July 27, 2017)

- Added helpText to `ChoiceList` choices (thanks [@cgenevier](https://github.com/cgenevier) for the [original issue](https://github.com/Shopify/polaris-react/issues/103))
- Added save icon
- Added `accessibilityLabel` to `Tabs`
- Updated icons for `Banner`
- Improved `Page` component by fixing up spacing, addin a prop to show a separator below the page title, and changing the secondary actions to roll up into a dropdown menu on small screens
- Improved default stacking behavior for Tooltip and `Popover` (thanks [@Taphood](https://github.com/Taphood) for the [original issue](https://github.com/Shopify/polaris-react/issues/129))
- Added extraTight spacing option to Stack
- Use default subheading type styles for `ActionList`
- Improved large `Button` styles
- Updated font-weight for text emphasis (thanks [@bakura10](https://github.com/bakura10) for the [original issue](https://github.com/Shopify/polaris-react/issues/156))
- Removed the focus state for `Banner` on click
- Fixed disabled `Pagination` button looking active
- Fixed alignment on `Button`
- Fixed min-width on `TextField` (thanks [@asacarter](https://github.com/asacarter) for the [original issue](https://github.com/Shopify/polaris-react/issues/96))
- Removed the border-top on `EmptyState`) (thanks [@alexdover](https://github.com/alexdover) for the [original issue](https://github.com/Shopify/polaris-react/issues/102)
- Fixed `Select` placeholder value warnings (thanks [@cgenevier](https://github.com/cgenevier) for the [original issue](https://github.com/Shopify/polaris-react/issues/98))
- Fixed disabled text on iOS
- Fixed type for `onChange` event (thanks [@bakura10](https://github.com/bakura10) for the [original issue](https://github.com/Shopify/polaris-react/issues/135))

### Sketch UIKit

- Added color palette page to “Getting started”
- `Button` typography updated. More changes to come soon.
- Changed typeface from `San Francisco UI` to `San Francisco Pro`. You will need to download the updated typeface here. https://developer.apple.com/fonts/
- Updated to Sketch version 45.2
- Updated layer styles and fonts styles to take advantage of Sketch’s new organizational features.

- Fixed disabled `Button` documentation (thanks [@michaelsunglee](https://github.com/michaelsunglee) for the [original issue](https://github.com/Shopify/polaris-react/issues/113))
- Fixed project URL in CircleCI badge
- Fixed Stack documentation (thanks [@nerfologist](https://github.com/nerfologist) for the [original issue](https://github.com/Shopify/polaris-react/issues/120))
- Added embedded Alert documentation and updated other embedded documentation

### Dependency updates

- Updated React TypeScript definitions

### Chores

- Updated EASDK metadata structure for generic interfaces
- Removed postinstall hook

## 1.1.1

### Chores

- Fixed a repo issue that caused the public repo release not to happen

## 1.1.0

- Added automatic inference of the `target` property of EASDK buttons in `Page` `primaryAction` and `secondaryAction` based on their URL (thanks [@jimmyn](https://github.com/jimmyn) for the [original issue](https://github.com/Shopify/polaris-react/issues/46))
- Added automatic inference of the `target` property of EASDK breadcrumbs in `Page` `breadcrumbs` prop based on the URL
- `Select` option descriptors now accept a `disabled` attribute to disable the generated `option` (thanks [@sogko](https://github.com/sogko) for the [original issue](https://github.com/Shopify/polaris-react/issues/68))
- `easdk.showFlashNotice` now accepts an optional options object as its second parameter. Passing `{error: true}` will cause the flash to appear as an error, matching the behaviour of [`ShopifyApp.flashError`](https://help.shopify.com/api/sdks/shopify-apps/embedded-app-sdk/methods#shopifyapp-flasherror-message)
- `Checkbox`, `RadioButton`, `ChoiceList`, `Select`, and `TextField` now pass the ID of the changed input as the second argument to their `onChange` callback (thanks [@milep](https://github.com/milep) for the [original issue](https://github.com/Shopify/polaris-react/issues/83))
- `Popover` now respects the `z-index` of the activator if it exists
- When putting content as children of `Tabs`, the default panel that is generated now respects the `panelID` of the selected tab, and uses a sensible default based on the tab’s `id` if no `panelID` exists
- When selecting a tab in `Tabs`, the matching panel is now focused by default
- `easdk` methods are bound to the object so they can be freely passed as callbacks

### Changes

- `Avatar` now renders as a `span` instead of a `div`

- Fixed contents in `Layout.AnnotatedSection` breaking out of their container (thanks [@cargix1](https://github.com/cargix1) for the [original issue](https://github.com/Shopify/polaris-react/issues/75))
- Fixed spacing above a `primaryAction` in `CalloutCard` when there is no `secondaryAction`
- Aria attributes are now on the actionable elements of `Tabs` instead of in the list items
- Exposed `Panel` as `Tabs.Panel` instead of `Tabs.panel`
- Fixed the alignment of `prefix` and `suffix` content of `TextField` (thanks [@bdillon3](https://github.com/bdillon3) for the [original issue](https://github.com/Shopify/polaris-react/issues/60))
- Fixed the disabled text color in `TextField`
- `Checkbox` and `RadioButton` no longer generate invalid HTML in their labels (thanks [@ernestogutierrez](https://github.com/ernestogutierrez) for the [original issue](https://github.com/Shopify/polaris-react/issues/88))
- `Tabs` no longer steal focus from contained elements (thanks [@alexdover](https://github.com/alexdover) for the [original issue](https://github.com/Shopify/polaris-react/issues/74))

### Design updates

- Reduced horizontal padding on `Breadcrumbs`
- Updated icon and internal padding of `FooterHelp`
- Updated the `EmptyState` layout and typographic styles

- Fixed the code examples on the `EmbeddedApp` documentation
- Added a simple `EmbeddedApp` example
- Renamed the “Tables and lists” category to “Lists”
- A variety of other documentation updates (thanks [@sebnun](https://github.com/sebnun), [@asacarter](https://github.com/asacarter), and [@resistorsoftware](https://github.com/resistorsoftware) for raising issues)

### Dependency updates

- Updated all dependencies

### Chores

- Added a script to automatically match the published version number to the one referenced in the README
- Added the correct viewport tag to the Playground
- Hid deprecation errors during tests

## 1.0.3

### Big fixes

- Fixed an issue where the embedded components would not reload the page within the Shopify admin (thanks [@buggy](https://github.com/buggy) for the [original issue](https://github.com/Shopify/polaris-react/issues/28))
- Fixed the `spacing="none"` variation on `Stack` not working correctly, and added the missing `extraLarge` enum value for `spacing`
- Fixed `Banner`’s `onDismiss` callback not being called when the dismiss button was clicked ([76ce13f](https://github.com/Shopify/polaris-react/commit/76ce13f328c2446c316f3d7f1f2a3f007658b6f7)) (thanks [@tlwirtz](https://github.com/tlwirtz) for the [original issue](https://github.com/Shopify/polaris-react/issues/52))

### Design updates

- Updated `Badge` text colors
- Updated line height for the small `DisplayText` variation
- Updated the default icon for error `Banner` (thanks [@heyneff](https://github.com/heyneff) for the [original issue](https://github.com/Shopify/polaris-react/issues/42))

### Sketch UIKit

- Added app examples (thanks [@lukepxu](https://github.com/lukepxu) for the [original issue](https://github.com/Shopify/polaris-react/issues/17))
- Removed references to the Graphik typeface (thanks [@adamnel](https://github.com/adamnel) for the [original issue](https://github.com/Shopify/polaris-react/issues/22))
- Left-aligned button text for better resizing
- Added Messenger link to navigation to better communicate that the channel nav collapses after 3 items
- Fixed alignment of table headers
- Minor updates to Dataviz and Reports examples
- Added indicators to Home notifications

- Synchronized component documentation with the style guide ([1e89559](https://github.com/Shopify/polaris-react/commit/1e895594afedb63787e6c05a167f5146901e88e6))

### Chores

- Fixed an issue that prevented the public CHANGELOG from being generated correctly
- Added a hot-reloading Playground to easily try out different components
- Removed the references to Babel presets from `package.json` (thanks [@macs91](https://github.com/macs91) for digging into this with us)
- Removed the `@import` statements at the top of source Sass files
- Updated TSLint and related linting dependencies

## 1.0.2

- Fixed an issue where subcomponents with variations would use a single `-` instead of `--` (thanks [@johnsonab](https://github.com/johnsonab) for the [original issue](https://github.com/Shopify/polaris-react/issues/9))
- Fixed a missing typing dependency and a missing `embedded` types entry point that were causing issues using this package with TypeScript (thanks [@buggy](https://github.com/buggy) for the [original](https://github.com/Shopify/polaris-react/issues/19) [issues](https://github.com/Shopify/polaris-react/issues/20))
- Fixed an issue where the anchor tag for `ResourceList.Item` would not span the full width of the item ([0c11498](https://github.com/Shopify/polaris-react/commit/0c11498406d90850f569824d0979c9a8f84d45c9)) (thanks [@sdn90](https://github.com/sdn90) for the [original issue](https://github.com/Shopify/polaris-react/issues/14))

### Dependency updates

- Started using the [`prop-types` package](https://github.com/reactjs/prop-types) instead of getting `PropTypes` from `react`, as the latter is deprecated as of React 15.5.0

- Corrected the name of `documentation/Embeddded apps.md` to `documentation/Embedded apps.md` (thanks [@chrispappas](https://github.com/chrispappas) for the [original issue](https://github.com/Shopify/polaris-react/issues/10))
- Fixed the `ColorPicker` documentation to show valid values for `saturation`, `brightness`, and `alpha` (thanks [@allanarmstrong](https://github.com/allanarmstrong) for the [original issue](https://github.com/Shopify/polaris-react/issues/13))

### Chores

- Added a description to `package.json`
- Added license to `package.json` and to the root of the repo (thanks [@d2s](https://github.com/d2s) for the [original issue](https://github.com/Shopify/polaris-react/issues/15))
- Fixed an issue where the Webpack example would complain about a missing dependency (thanks [@rafaedez](https://github.com/rafaedez) for the [original issue](https://github.com/Shopify/polaris-react/issues/21))

## 1.0.1

### Chores

- Switch repo to public access

## 1.0.0

- Initial release
