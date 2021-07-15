# Migrating from v5 to v6

Polaris v6.0.0 ([full release notes](https://github.com/Shopify/polaris-react/releases/tag/v6.0.0)) removes deprecated features in past releases. This file describes all code updates required to stay up to date.

## New Design Language

In v5 Polaris contained two design languages that could be toggled using the `newDesignLanguage` feature on `AppProvider`. We have removed our old visual styles, leaving only the new.

In v6, you no longer need to configure `AppProvider` to opt into new styles, and legacy theme configuration has been removed:

- `AppProvider`'s `features` prop no longer accepts a `newDesignLanguage` key.
- `AppProvider`'s `theme` prop no longer accepts theming using the `topBar` key. Instead control theming using the new color config that gets passed through to [`ThemeProvider`](https://polaris.shopify.com/components/structure/theme-provider).
- `AppProvider`'s `theme` prop expects its `frameOffset` to be specified as a string including a unit instead of a number in pixels, to allow for non-pixel based sizing.

```diff
<AppProvider
  i18n={{}}
- features={{newDesignLanguage: true}}
  theme={{
    colors: {
-     topBar: {
-       color: 'rgb(33,43,54)',
-       backgroundLighter: 'rgb(244, 246, 248)',
-       backgroundDarker: 'rgb(223, 227, 232)',
-       background: 'rgb(255,255,255)',
-     },
+     surface: 'rgb(0, 0, 0)',
+     onSurface: 'rgb(33,43,54)',
    },
-   frameOffset: 60,
+   frameOffset: '60px',
  }}
>
```

## Component API changes

### Button

The `Button` component's `ariaPressed` prop has been removed. You must the `pressed` prop instead.

```diff
- <Button ariaPressed={true}>Let’s go</Button>
+ <Button pressed={true}>Let’s go</Button>
```

The `Button` component's `stretchContent` prop has been removed. Its behaviour can be recreated by combining the `fullWidth` and `textAlign="left"` props.

```diff
- <Button stretchContent>Let’s go</Button>
+ <Button fullWidth textAlign="left">Let’s go</Button>
```

### Icon

The `Icon` component's `color` prop's values have changed. Legacy colors have been removed and have been replaced with semantic color names.

Replace usage of legacy colors with semantic color names.

- Replace `white`, `skyLighter`, `skyLight`, `sky` and `skyDark` with `subdued`.
- Replace `black`, `inkLightest`, `inkLighter`, `inkLight`, `ink`, `blueLighter`, `blueLight`, `blue`, `blueDark` and `blueDarker` with `base`.
- Replace `indigoLighter`, `indigoLight`, `indigo`, `indigoDark` and `indigoDarker` with `primary`.
- Replace `tealLighter`, `tealLight`, `teal`, `tealDark` `tealDarker` and `purple` with `highlight`.
- Replace `greenLighter`, `green` and `greenDark` with `success`.
- Replace `yellowLighter`, `yellow`, `yellowDark`, `orange` and `orangeDark` with `warning`.
- Replace `redLighter`, `red` and `redDark` with `critical`.

```diff
- <Icon color="indigo" source={CirclePlusMinor} />
+ <Icon color="primary" source={CirclePlusMinor} />
```

### Link

The `Link` component is now underlined by default to make sure that color is not the only way for users to perceive interactivity.

When other factors help a user determine interactivity the underline can be removed with the `removeUnderline` prop.

```diff
- <Link url="https://help.shopify.com/">Orders</Link>
+ <Link url="https://help.shopify.com/" removeUnderline>Orders</Link>
```

### Modal

The `Modal` component's `title` prop is now required to help enforce accessibility for screen readers. You must add a `title` prop to all your `Modal`s. In the event that you do not want to display this title visually you can add the `titleHidden` prop to hide the title.

```diff
<Modal
  activator={activator}
  open={active}
  onClose={handleChange}
  primaryAction={{
    content: 'Add Instagram',
    onAction: handleChange,
  }}
  secondaryActions={[
    {
      content: 'Learn more',
      onAction: handleChange,
    },
  ]}
+  title="Reach more shoppers with Instagram product tags"
+  titleHidden
>
  <Modal.Section>
    <TextContainer>
      <p>
        Use Instagram posts to share your products with millions of
        people. Let shoppers buy from your store without leaving
        Instagram.
      </p>
    </TextContainer>
  </Modal.Section>
</Modal>
```

### Page

The `Page` component's `separator` prop has been removed, as it no longer has any visual effect. You should remove any usage of this prop.

```diff
- <Page title="Settings" separator>
+ <Page title="Settings">
```

The `Page` component's `additionalMetaData` prop has been renamed to `additionalMetadata`. You should update the naming of this prop.

```diff
<Page
  fullWidth
- additionalMetaData="Created May 8, 2020 at 7:31 am from Developer Tools (via import)"
+ additionalMetadata="Created May 8, 2020 at 7:31 am from Developer Tools (via import)"
```

### Pagination

The `Pagination` component's `plain` prop has been removed, as it no longer has any visual effect. You should remove any usage of this prop.

```diff
<Pagination
  hasPrevious
  hasNext
  onPrevious={() => handlePrevious()}
  onNext={() => handleNext()}
- plain={true}
/>
```

### Popover and PopoverOverlay

The `Popover` and `PopoverOverlay` components' `preventAutoFocus` prop has been removed. Its behaviour is controlled by the `autofocusTarget` prop. Replace usage of this prop with `autofocusTarget="none"`.

```diff
<Popover
  active={popoverActive}
  activator={activator}
  onClose={togglePopoverActive}
- preventAutofocus
+ autofocusTarget="none"
>
  <p>Hello world</p>
</Popover>
```

### Sheet

The `Sheet` component's `accessibilityLabel` prop is now required to help enforce accessibility for screen readers. You must add an `accessibilityLabel` prop to all your `Sheet`s. This label is only visible to screen readers, it is not visually shown.

```diff
<Sheet
  open={sheetActive}
  onClose={toggleSheetActive}
+ accessibilityLabel="Reach more shoppers with Instagram product tags"
>
  <TextContainer>
    <p>
      Use Instagram posts to share your products with millions of
      people. Let shoppers buy from your store without leaving
      Instagram.
    </p>
  </TextContainer>
</Sheet>
```

### Spinner

The `Spinner` component's `color` prop has been removed, as it no longer has any visual effect. You should remove any usage of this prop.

```diff
- <Spinner color="teal" />
+ <Spinner />
```

### Tooltip

The `Tooltip` component's `light` prop has been removed, as it no longer has any visual effect. You should remove any usage of this prop.

```diff
<Tooltip
  content="Hello world"
- light
>Order #1001</Tooltip>
```

### UnstyledButton

The `UnstyledButton` component's `ariaPressed` prop has been removed. You must the `pressed` prop instead.

```diff
- <UnstyledButton ariaPressed={true}>Let’s go</UnstyledButton>
+ <UnstyledButton pressed={true}>Let’s go</UnstyledButton>
```

## Removed Exports

### AnimationProps

The `AnimationProps` type has been removed as it was an internal prop. You can redefine it if you need it.

```diff
- import {AnimationProps} from '@shopify/polaris';

+ interface AnimationProps {
+   in?: boolean;
+ }
```

### BaseAction

The `BaseAction` type has been removed, and replaced with `Action`.

```diff
- import {BaseAction} from '@shopify/polaris';
+ import {Action} from '@shopify/polaris';

export interface Props {
- headerAction?: BaseAction;
+ headerAction?: Action;
}
```

### Color and NewDesignLanguageColor

The `Color` and `NewDesignLanguageColor` types that describe the argument you pass into `Icon`'s `color` prop have been removed. Use `IconProps['color']` instead of referencing these low level types if you are about to pass these values into the `Icon` component.

```diff
- import {Color, NewDesignLanguageColor, Icon} from '@shopify/polaris';
+ import {Icon, IconProps} from '@shopify/polaris';

interface PartyIconProps {
- color: Color | NewDesignLanguageColor;
+ color: IconProps['color'];
}
```

## Sass API Changes

The following Sass mixins and functions have been removed, because they no longer have any visual effect or their usage has been merged with another mixin/function.

- The `button-filled-disabled` function. No longer has any effect.
- The `plain-button-background` function. No longer has any effect.
- The `skeleton-page-header-has-secondary-actions` mixin. No longer has any effect.
- The `text-emphasis-placeholder` mixin. Replace usage with `text-emphasis-subdued()`.
