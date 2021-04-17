---
name: Phone field
category: Forms
platforms:
  - web
keywords:
  - PhoneField
  - input
  - type
  - form field
  - input forms
  - form input
  - field
  - active state
  - input active state
  - input state
  - input focus
  - focus
  - textbar
  - text bar
  - forms
  - form inputs
  - form text input
  - placeholder text
  - field placeholder text
  - optional fields
  - field help text
  - validation error messages
  - field labels
  - phone field
  - hidden label
  - label action
  - placeholder text
  - help text
  - prefix or suffix
  - connected fields
  - label actions
  - hidden labels
  - separate error message
---

# Phone field

Description of phone field

---

## Best practices

Phone fields should:

- TODO:

---

## Content guidelines

### TO DO: text

TO DO:

- TO DO:

<!-- usagelist -->

#### Do

- TO DO:

#### Don’t

- TO DO:

<!-- end -->

---

## Examples

### Default phone field

TO DO: Description of phone field

```jsx
function PhoneFieldExample() {
  return (
    <PhoneField
      labelName="Mobile Phone Number"
      countries={allCountries}
      searchBar
    />
  );
}
```

---

## Related components

- To lay out the elements in a responsive form, [use the form layout component](https://polaris.shopify.com/components/forms/form-layout)
- To describe an invalid form input with a separate validation error, [use the inline error component](https://polaris.shopify.com/components/forms/inline-error)
- It’s common to [use a select component](https://polaris.shopify.com/components/forms/select) connected to the left or right of a text field.

---

## Accessibility

<!-- content-for: android -->

See Material Design and development documentation about accessibility for Android:

- [Accessible design on Android](https://material.io/design/usability/accessibility.html)
- [Accessible development on Android](https://developer.android.com/guide/topics/ui/accessibility/)

<!-- /content-for -->

<!-- content-for: ios -->

See Apple’s Human Interface Guidelines and API documentation about accessibility for iOS:

- [Accessible design on iOS](https://developer.apple.com/design/human-interface-guidelines/ios/app-architecture/accessibility/)
- [Accessible development on iOS](https://developer.apple.com/accessibility/ios/)

<!-- /content-for -->

<!-- content-for: web -->

### Structure

Screen readers convey information about text fields automatically through native HTML.

- Use the `disabled` prop to add the HTML `disabled` attribute to the text field.
- Use the `readOnly` prop to add the HTML `readonly` attribute to the text field.
- If you use the `type` prop, then some assistive technologies adapt the software keyboard to the current task. This helps merchants with mobility, vision, and cognitive issues to enter information more easily.

Use the `id` prop to provide a unique `id` attribute value for the text field. If you don't provide an `id`, then the component generates one automatically. All text fields need to have unique `id` values.

### Labeling

The `label` prop is required to convey the purpose of the checkbox to all merchants.

If there are separate visual cues that convey the purpose of the text field to sighted merchants, then the label can be visually hidden with the `labelHidden` prop.

When you provide help text via the `helpText` prop or an inline error message via the `error` prop, the help or error content is conveyed to screen reader users with the `aria-describedby` attribute. This attribute causes the content to be read along with the label, either immediately or after a short delay.

Use the `placeholder` prop to provide additional instructions. However, don’t rely on placeholders alone since the content isn’t always conveyed to all merchants.

<!-- usageblock -->

#### Do

- Use the label to provide instructions critical to using the text field
- Use help text and placeholder text to provide additional, non-critical instructions

#### Don’t

Use the placeholder to provide information that’s required to use the text field.

<!-- end -->

### Keyboard support

Text fields have standard keyboard support.

- Merchants who rely on the keyboard expect to move focus to each text field using the <kbd>tab</kbd> key (or <kbd>shift</kbd> + <kbd>tab</kbd> when tabbing backwards)
- If the `type` is set to `number`, then merchants can use the up and down arrow keys to adjust the value typed into the field
- Using the `disabled` prop will prevent the text field from receive keyboard focus or inputs
- The `readOnly` prop allows focus on the text field but prevents input or editing

#### Automatically focusing

Although you can use the `autoFocus` prop to automatically move focus to the text field, it’s generally best to avoid focusing on fields automatically. The `autoFocus` prop is set to `false` by default and should only be used in cases where it won’t force focus to skip other controls or content of equal or greater importance.

### Autocomplete

- Use the `ariaControls` and `ariaOwns` props (which implement the `aria-controls` and `aria-owns` attributes) to point to the `id` of the autocomplete list.
- Use the `ariaAutocomplete` prop to indicate what kind of `aria-autocomplete` input is provided, either `list` or `inline`. Typically, `list` is used.
- When merchants navigate through the list, the `ariaActiveDescendant` prop indicates which option has programmatic focus so that it can be conveyed to screen reader users.

To learn more about implementing a text field with autocomplete, see the [autocomplete component](https://polaris.shopify.com/components/forms/autocomplete).

<!-- /content-for -->
