---
name: Text field
category: Forms
platforms:
  - android
  - ios
  - web
keywords:
  - TextField
  - input
  - textarea
  - type
  - add info
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
  - number fields
  - email fields
  - multiline
  - hidden label
  - label action
  - placeholder text
  - help text
  - prefix or suffix
  - connected fields
  - label actions
  - hidden labels
  - separate error message
  - icon action
  - ios
  - android
---

# Text field

A text field is an input field that merchants can type into. It has a range of
options and supports several text formats including numbers.

---

## Best practices

Text fields should:

- Be clearly labeled so it’s obvious to merchants what they should enter into the field
- Be labeled as “Optional” when you need to request input that’s not required
- Only ask for information that’s really needed
- Validate input as soon as merchants have finished interacting with a field (but not before)

---

## Content guidelines

### Field label

A label is a short description of the requested input. Labels are not instructional text but they should be meaningful and clearly indicate what is expected. Labels should be:

- Placed above or beside the form field
- Short and succinct (1–3 words)
- Written in sentence case (the first word capitalized, the rest lowercase)

<!-- usagelist -->

#### Do

- Email address
- Phone number

#### Don’t

- What is your email address?
- My phone number is:

<!-- end -->

### Field placeholder text

Placeholder text is shown inside the form field to teach merchants what to
input. Field placeholder text should:

- Be used only for supplementary information because the text has low contrast and is not visible when text is entered
- Be written as examples instead of instructions
- Include “Example:” before an example

<!-- usagelist -->

#### Do

- Example: FALLSALE

#### Don’t

- Name your discount code
- e.g. FALLSALE

<!-- end -->

### Designating optional fields

Try to only ask for information that’s required. If you need to ask merchants
to provide optional information, mark the field optional by placing the text “(optional)” at the end of the field’s label. Don’t mark required fields with asterisks.

<!-- usagelist -->

#### Do

Phone number (optional)

#### Don’t

First name\*

<!-- end -->

### Help text

Help text provides extra guidance or instruction to people filling out a form field. It can also be used to clarify how the information will be used. As with all form content, help text should be succinct and easy to read.

<!-- usagelist -->

#### Do

9-digit number

#### Don’t

Example: 123-456-789

<!-- end -->

### Validation error messages

Error messages should:

- Clearly explain what went wrong and how to fix it
- Be short and concise, no more than a single sentence
- Use [passive voice](https://polaris.shopify.com/content/grammar-and-mechanics) so merchants don’t feel like they’re being blamed for the error

<!-- usagelist -->

#### Do

Store name is required

#### Don’t

You didn’t enter a store name.

<!-- end -->

---

## Examples

### Default text field

Use to allow merchants to provide text input when the expected input is short. For longer input, use the auto grow or multiline options.

```jsx
function TextFieldExample() {
  const [value, setValue] = useState('Jaded Pixel');

  const handleChange = useCallback((newValue) => setValue(newValue), []);

  return <TextField label="Store name" value={value} onChange={handleChange} />;
}
```

<!-- content-for: android -->

![Default text field](/public_images/components/TextField/android/default@2x.png)

<!-- /content-for -->

<!-- content-for: ios -->

![Default text field](/public_images/components/TextField/ios/default@2x.png)

<!-- /content-for -->

### Number field

Use when input text should be a number.

```jsx
function NumberFieldExample() {
  const [value, setValue] = useState('1');

  const handleChange = useCallback((newValue) => setValue(newValue), []);

  return (
    <TextField
      label="Quantity"
      type="number"
      value={value}
      onChange={handleChange}
    />
  );
}
```

<!-- content-for: android -->

This will display the right keyboard on mobile devices.

![Number text field with numeric keyboard](/public_images/components/TextField/android/number@2x.png)

<!-- /content-for -->

<!-- content-for: ios -->

This will display the right keyboard on mobile devices.

![Number text field with numeric keyboard](/public_images/components/TextField/ios/number@2x.png)

<!-- /content-for -->

### Email field

Use when the text input should be an email address.

```jsx
function EmailFieldExample() {
  const [value, setValue] = useState('bernadette.lapresse@jadedpixel.com');

  const handleChange = useCallback((newValue) => setValue(newValue), []);

  return (
    <TextField
      label="Email"
      type="email"
      value={value}
      onChange={handleChange}
    />
  );
}
```

<!-- content-for: android -->

This will display the right keyboard on mobile devices.

![Email field with email keyboard](/public_images/components/TextField/android/email@2x.png)

<!-- /content-for -->

<!-- content-for: ios -->

This will display the right keyboard on mobile devices.

![Email field with email keyboard](/public_images/components/TextField/ios/email@2x.png)

<!-- /content-for -->

### Multiline text field

Use when the expected input could be more than one line. The field will automatically grow to accommodate additional text.

```jsx
function MultilineFieldExample() {
  const [value, setValue] = useState('1776 Barnes Street\nOrlando, FL 32801');

  const handleChange = useCallback((newValue) => setValue(newValue), []);

  return (
    <TextField
      label="Shipping address"
      value={value}
      onChange={handleChange}
      multiline={4}
    />
  );
}
```

<!-- content-for: android -->

![Multi-line text field](/public_images/components/TextField/android/multi-line@2x.png)

<!-- /content-for -->

<!-- content-for: ios -->

![Multi-line text field](/public_images/components/TextField/ios/multi-line@2x.png)

<!-- /content-for -->

### Text field with hidden label

<!-- example-for: web -->

Use to visually hide the label when the text field’s purpose is clear from context. The label will remain available to screen readers. Use this option with care. In almost all cases, show the label.

```jsx
function HiddenLabelExample() {
  const [value, setValue] = useState('12');
  const [selected, setSelected] = useState('yes');

  const handleTextChange = useCallback((newValue) => setValue(newValue), []);

  const handleChoiceChange = useCallback(
    (selections) => setSelected(selections[0]),
    [],
  );

  return (
    <FormLayout>
      <ChoiceList
        title="Gift card auto-expiration"
        choices={[
          {label: 'Gift cards never expire', value: 'no'},
          {label: 'Gift cards expire', value: 'yes'},
        ]}
        selected={[selected]}
        onChange={handleChoiceChange}
      />
      <TextField
        label="Gift cards expire after"
        type="number"
        labelHidden
        value={value}
        disabled={selected === 'no'}
        onChange={handleTextChange}
        connectedRight={
          <Select
            label="Unit of time"
            labelHidden
            options={['months after purchase']}
          />
        }
      />
    </FormLayout>
  );
}
```

### Text field with label action

<!-- example-for: web -->

Use when an optional, secondary action is closely associated with a text field. For example, on a field for entering a customs tariff code, a label action might be to look up the appropriate code from a table.

```jsx
function LabelActionExample() {
  const [textFieldValue, setTextFieldValue] = useState('6201.11.0000');

  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    [],
  );

  return (
    <TextField
      label="Tariff code"
      value={textFieldValue}
      onChange={handleTextFieldChange}
      labelAction={{content: 'Look up codes'}}
    />
  );
}
```

### TextField with right aligned text

<!-- example-for: web -->

Use when input text should be aligned right.

```jsx
function RightAlignExample() {
  const [textFieldValue, setTextFieldValue] = useState('1');

  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    [],
  );

  return (
    <Stack>
      <Stack.Item fill>Price</Stack.Item>
      <TextField
        label="Price"
        labelHidden
        value={textFieldValue}
        onChange={handleTextFieldChange}
        align="right"
      />
    </Stack>
  );
}
```

### Text field with placeholder text

Use to provide a short, non-essential hint about the expected input. Placeholder text is low-contrast, so don’t rely on it for important information.

```jsx
function PlaceholderExample() {
  const [textFieldValue, setTextFieldValue] = useState('');

  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    [],
  );

  return (
    <TextField
      label="Shipping zone name"
      value={textFieldValue}
      onChange={handleTextFieldChange}
      placeholder="Example: North America, Europe"
    />
  );
}
```

<!-- content-for: android -->

![Default text field with placeholder text hint](/public_images/components/TextField/android/placeholder-text@2x.png)

<!-- /content-for -->

<!-- content-for: ios -->

![Default text field with placeholder text hint](/public_images/components/TextField/ios/placeholder-text@2x.png)

<!-- /content-for -->

### Text field with help text

Use to show short instructional content below the text field. Help text works to help merchants understand how to fix errors that result from incorrect formatting (such as dates or passwords with specific character requirements). If more explanation is needed, link to the Shopify Help Center.

```jsx
function HelpTextExample() {
  const [textFieldValue, setTextFieldValue] = useState(
    'bernadette.lapresse@jadedpixel.com',
  );

  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    [],
  );

  return (
    <TextField
      label="Account email"
      type="email"
      value={textFieldValue}
      onChange={handleTextFieldChange}
      helpText="We’ll use this address if we need to contact you about your account."
    />
  );
}
```

<!-- content-for: android -->

![Default text field with help text](/public_images/components/TextField/android/help-text@2x.png)

<!-- /content-for -->

<!-- content-for: ios -->

![Default text field with help text](/public_images/components/TextField/ios/help-text@2x.png)

<!-- /content-for -->

### Text field with prefix or suffix

Use as a special form of help text that works best inline.

- Use a prefix for things like currency symbols (“\$”, “¥”, “£”).
- Use suffix for things like units of measure (“in”, “cm”).

```jsx
function PrefixExample() {
  const [textFieldValue, setTextFieldValue] = useState('2.00');

  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    [],
  );

  return (
    <TextField
      label="Price"
      type="number"
      value={textFieldValue}
      onChange={handleTextFieldChange}
      prefix="$"
    />
  );
}
```

<!-- content-for: android -->

![Default text field with prefix and suffix](/public_images/components/TextField/android/prefix-suffix@2x.png)

<!-- /content-for -->

<!-- content-for: ios -->

![Default text field with prefix and suffix](/public_images/components/TextField/ios/prefix-suffix@2x.png)

<!-- /content-for -->

### Text field with connected fields

Use when a text field and several related fields make up a logical unit.

<!-- content-for: web -->

If inputting weight as a number and a separate unit of measurement, use a text field with a [select dropdown menu](https://polaris.shopify.com/components/forms/select) (for example “kg”, “lb”) as a connected field.

<!-- /content-for -->

```jsx
function ConnectedFieldsExample() {
  const [textFieldValue, setTextFieldValue] = useState('10.6');
  const [selectValue, setSelectValue] = useState('kg');

  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    [],
  );

  const handleSelectChange = useCallback((value) => setSelectValue(value), []);

  return (
    <TextField
      label="Weight"
      type="number"
      value={textFieldValue}
      onChange={handleTextFieldChange}
      connectedLeft={
        <Select
          value={selectValue}
          label="Weight unit"
          onChange={handleSelectChange}
          labelHidden
          options={['kg', 'lb']}
        />
      }
      connectedRight={<Button>Submit</Button>}
    />
  );
}
```

<!-- content-for: android -->

If inputting weight as a number and a separate unit of measurement, use a text field with a selector (like “kg” or “lb”) as a connected field.

![Text field with connected selector](/public_images/components/TextField/android/connected-fields@2x.png)

<!-- /content-for -->

<!-- content-for: ios -->

If inputting weight as a number and a separate unit of measurement, use a text field with a selector (like “kg” or “lb”) as a connected field.

![Text field with connected selector](/public_images/components/TextField/ios/connected-fields@2x.png)

<!-- /content-for -->

### Text field with icon action

<!-- example-for: android, ios -->

Use to let merchants take an action within the text field.

For example, tap on a barcode icon to launch the camera and scan barcode for the barcode field. This helps merchants simplify their input.

<!-- content-for: android -->

![Text field with icon action inside the text field](/public_images/components/TextField/android/accessory@2x.png)

<!-- /content-for -->

<!-- content-for: ios -->

![Text field with icon action inside the text field](/public_images/components/TextField/ios/accessory@2x.png)

<!-- /content-for -->

### Text field with validation error

Use to let merchants know if their input is valid or if there’s an error. Whenever possible, validate input as soon as merchants have finished interacting with a field (but not before). If a field already has an error, validate and remove errors as merchants type so they can immediately see when an error has been fixed.

```jsx
function ValidationErrorExample() {
  const [textFieldValue, setTextFieldValue] = useState('');

  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    [],
  );

  return (
    <TextField
      label="Store name"
      value={textFieldValue}
      onChange={handleTextFieldChange}
      error="Store name is required"
    />
  );
}
```

<!-- content-for: android -->

![Text field with error](/public_images/components/TextField/android/error@2x.png)

<!-- /content-for -->

<!-- content-for: ios -->

![Text field with error](/public_images/components/TextField/ios/error@2x.png)

<!-- /content-for -->

### Text field with separate validation error

<!-- example-for: web -->

Use to let merchants know when their text field input is invalid in the context of a group of form inputs that the text field depends on.

When the `error` prop has a boolean value of `true`, the text field component indicates to merchants that their input is invalid without rendering an error message directly below it. It anticipates that an inline error component exists separately within the form.

To render an invalid text field and its validation error separately:

- Set a unique identifier on the text field component `id` prop
- Set a boolean on the text field component `error` prop
- Use an [inline error component](https://polaris.shopify.com/components/forms/inline-error) to describe the invalid text field input, and set its `fieldID` prop to be the same unique indentifier as the text field component’s `id`

```jsx
function SeparateValidationErrorExample() {
  const [textFieldValue, setTextFieldValue] = useState('');
  const [selectTypeValue, setSelectTypeValue] = useState('Product type');
  const [selectConditionValue, setSelectConditionValue] = useState(
    'is equal to',
  );

  const handleTextFieldValueChange = useCallback(
    (value) => setTextFieldValue(value),
    [],
  );

  const handleSelectTypeChange = useCallback(
    (value) => setSelectTypeValue(value),
    [],
  );

  const handleSelectConditionChange = useCallback(
    (value) => setSelectConditionValue(value),
    [],
  );

  const textFieldID = 'ruleContent';
  const isInvalid = isValueInvalid(textFieldValue);
  const errorMessage = isInvalid
    ? 'Enter 3 or more characters for product type is equal to'
    : '';

  const formGroupMarkup = (
    <Stack wrap={false} alignment="leading" spacing="loose">
      <Stack.Item fill>
        <FormLayout>
          <FormLayout.Group condensed>
            <Select
              labelHidden
              label="Collection rule type"
              options={['Product type']}
              value={selectTypeValue}
              onChange={handleSelectTypeChange}
            />
            <Select
              labelHidden
              label="Collection rule condition"
              options={['is equal to']}
              value={selectConditionValue}
              onChange={handleSelectConditionChange}
            />
            <TextField
              labelHidden
              label="Collection rule content"
              error={isInvalid}
              id={textFieldID}
              value={textFieldValue}
              onChange={handleTextFieldValueChange}
            />
          </FormLayout.Group>
        </FormLayout>
        <div style={{marginTop: '4px'}}>
          <InlineError message={errorMessage} fieldID={textFieldID} />
        </div>
      </Stack.Item>
      <Button icon={DeleteMinor} accessibilityLabel="Remove item" />
    </Stack>
  );

  return (
    <Card sectioned>
      <FormLayout>{formGroupMarkup}</FormLayout>
    </Card>
  );

  function isValueInvalid(content) {
    if (!content) {
      return true;
    }

    return content.length < 3;
  }
}
```

### Disabled text field

<!-- example-for: web -->

Use to show that a textfield is not available for interaction. Most often used in forms when information is required only in a particular state. For example, the text field next to Other in a choice list when Other is not selected.

```jsx
<TextField label="Store name" disabled />
```

### Text field with character count

<!-- example-for: web -->

Use to display the current number of characters in a text field. Use in conjunction with max length to display the current remaining number of characters in the text field.

```jsx
function TextFieldWithCharacterCountExample() {
  const [textFieldValue, setTextFieldValue] = useState('Jaded Pixel');

  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    [],
  );

  return (
    <TextField
      label="Store name"
      value={textFieldValue}
      onChange={handleTextFieldChange}
      maxLength={20}
      showCharacterCount
    />
  );
}
```

### Text field with clear button

<!-- example-for: web -->

Use to allow merchants to clear the content from a text field.

```jsx
function TextFieldWithClearButtonExample() {
  const [textFieldValue, setTextFieldValue] = useState('Jaded Pixel');

  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    [],
  );

  return (
    <TextField
      label="Store name"
      value={textFieldValue}
      onChange={handleTextFieldChange}
      clearButton
    />
  );
}
```

### Text field with clear button and custom clearing behaviour

<!-- example-for: web -->

Customize the behaviour of hitting the clear button.

```jsx
function TextFieldWithCustomClearButtonExample() {
  const [textFieldValue, setTextFieldValue] = useState('Jaded Pixel');

  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    [],
  );

  const handleClearButtonClick = useCallback(
    () =>
      window.confirm('Are you sure you want to clear this field?') &&
      setTextFieldValue(''),
    [],
  );

  return (
    <TextField
      label="Store name"
      value={textFieldValue}
      onChange={handleTextFieldChange}
      clearButton
      onClearButtonClick={handleClearButtonClick}
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
- The `inputMode` prop can be used to bring up a relevant keyboard for merchants on mobile; it’s passed down to the input as an [`inputmode` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)

#### Automatically focusing

Although you can use the `autoFocus` prop to automatically move focus to the text field, it’s generally best to avoid focusing on fields automatically. The `autoFocus` prop is set to `false` by default and should only be used in cases where it won’t force focus to skip other controls or content of equal or greater importance.

### Autocomplete

- Use the `ariaControls` and `ariaOwns` props (which implement the `aria-controls` and `aria-owns` attributes) to point to the `id` of the autocomplete list.
- Use the `ariaAutocomplete` prop to indicate what kind of `aria-autocomplete` input is provided, either `list` or `inline`. Typically, `list` is used.
- When merchants navigate through the list, the `ariaActiveDescendant` prop indicates which option has programmatic focus so that it can be conveyed to screen reader users.

To learn more about implementing a text field with autocomplete, see the [autocomplete component](https://polaris.shopify.com/components/forms/autocomplete).

<!-- /content-for -->
