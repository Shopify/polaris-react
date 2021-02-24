---
name: Autocomplete
category: Forms
keywords:
  - autocomplete
  - searchable
  - typeahead
---

# Autocomplete

The autocomplete component is an input field that provides selectable suggestions as a merchant types into it. It allows merchants to quickly search through and select from large collections of options.

---

## Best practices

The autocomplete component should:

- Be clearly labeled so it’s obvious to the merchant what type of options will be available
- Limit the number of options displayed at once
- Not be used within a popover
- Indicate a loading state to the merchant while option data is being populated

---

## Content guidelines

The input field for autocomplete should follow the [content guidelines](https://polaris.shopify.com/components/forms/text-field) for text fields.

---

## Examples

### Basic autocomplete

Use to help merchants complete text input quickly from a list of options.

```jsx
function AutocompleteExample() {
  const deselectedOptions = [
    {value: 'rustic', label: 'Rustic'},
    {value: 'antique', label: 'Antique'},
    {value: 'vinyl', label: 'Vinyl'},
    {value: 'vintage', label: 'Vintage'},
    {value: 'refurbished', label: 'Refurbished'},
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState(deselectedOptions);

  const updateText = useCallback(
    (value) => {
      setInputValue(value);

      if (value === '') {
        setOptions(deselectedOptions);
        return;
      }

      const filterRegex = new RegExp(value, 'i');
      const resultOptions = deselectedOptions.filter((option) =>
        option.label.match(filterRegex),
      );
      setOptions(resultOptions);
    },
    [deselectedOptions],
  );

  const updateSelection = useCallback(
    (selected) => {
      const selectedValue = selected.map((selectedItem) => {
        const matchedOption = options.find((option) => {
          return option.value.match(selectedItem);
        });
        return matchedOption && matchedOption.label;
      });

      setSelectedOptions(selected);
      setInputValue(selectedValue);
    },
    [options],
  );

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      label="Tags"
      value={inputValue}
      prefix={<Icon source={SearchMinor} color="base" />}
      placeholder="Search"
    />
  );

  return (
    <div style={{height: '225px'}}>
      <Autocomplete
        options={options}
        selected={selectedOptions}
        onSelect={updateSelection}
        textField={textField}
      />
    </div>
  );
}
```

### Multiple tags autocomplete

Use to help merchants select multiple options from a list curated by the text input.

```jsx
function MultiAutocompleteExample() {
  const deselectedOptions = [
    {value: 'rustic', label: 'Rustic'},
    {value: 'antique', label: 'Antique'},
    {value: 'vinyl', label: 'Vinyl'},
    {value: 'vintage', label: 'Vintage'},
    {value: 'refurbished', label: 'Refurbished'},
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState(deselectedOptions);

  const updateText = useCallback(
    (value) => {
      setInputValue(value);

      if (value === '') {
        setOptions(deselectedOptions);
        return;
      }

      const filterRegex = new RegExp(value, 'i');
      const resultOptions = deselectedOptions.filter((option) =>
        option.label.match(filterRegex),
      );
      let endIndex = resultOptions.length - 1;
      if (resultOptions.length === 0) {
        endIndex = 0;
      }
      setOptions(resultOptions);
    },
    [deselectedOptions],
  );

  const removeTag = useCallback(
    (tag) => () => {
      const options = [...selectedOptions];
      options.splice(options.indexOf(tag), 1);
      setSelectedOptions(options);
    },
    [selectedOptions],
  );

  const tagsMarkup = selectedOptions.map((option) => {
    let tagLabel = '';
    tagLabel = option.replace('_', ' ');
    tagLabel = titleCase(tagLabel);
    return (
      <Tag key={`option${option}`} onRemove={removeTag(option)}>
        {tagLabel}
      </Tag>
    );
  });

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      label="Tags"
      value={inputValue}
      placeholder="Vintage, cotton, summer"
    />
  );

  return (
    <div style={{height: '325px'}}>
      <TextContainer>
        <Stack>{tagsMarkup}</Stack>
      </TextContainer>
      <br />
      <Autocomplete
        allowMultiple
        options={options}
        selected={selectedOptions}
        textField={textField}
        onSelect={setSelectedOptions}
        listTitle="Suggested Tags"
      />
    </div>
  );

  function titleCase(string) {
    return string
      .toLowerCase()
      .split(' ')
      .map((word) => word.replace(word[0], word[0].toUpperCase()))
      .join('');
  }
}
```

### Autocomplete with loading

Use to indicate loading state to merchants while option data is processing.

```jsx
function AutocompleteExample() {
  const deselectedOptions = [
    {value: 'rustic', label: 'Rustic'},
    {value: 'antique', label: 'Antique'},
    {value: 'vinyl', label: 'Vinyl'},
    {value: 'vintage', label: 'Vintage'},
    {value: 'refurbished', label: 'Refurbished'},
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState(deselectedOptions);
  const [loading, setLoading] = useState(false);

  const updateText = useCallback(
    (value) => {
      setInputValue(value);

      if (!loading) {
        setLoading(true);
      }

      setTimeout(() => {
        if (value === '') {
          setOptions(deselectedOptions);
          setLoading(true);
          return;
        }
        const filterRegex = new RegExp(value, 'i');
        const resultOptions = deselectedOptions.filter((option) =>
          option.label.match(filterRegex),
        );
        setOptions(resultOptions);
        setLoading(false);
      }, 300);
    },
    [deselectedOptions, options, loading],
  );

  const updateSelection = useCallback(
    (selected) => {
      const selectedText = selected.map((selectedItem) => {
        const matchedOption = options.find((option) => {
          return option.value.match(selectedItem);
        });
        return matchedOption && matchedOption.label;
      });
      setSelectedOptions(selected);
      setInputValue(selectedText);
    },
    [options],
  );

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      label="Tags"
      value={inputValue}
      prefix={<Icon source={SearchMinor} color="base" />}
      placeholder="Search"
    />
  );

  return (
    <div style={{height: '225px'}}>
      <Autocomplete
        options={options}
        selected={selectedOptions}
        onSelect={updateSelection}
        loading={loading}
        textField={textField}
      />
    </div>
  );
}
```

### Autocomplete with lazy loading

```jsx
function AutoCompleteLazyLoadExample() {
  const paginationInterval = 25;
  const deselectedOptions = Array.from(Array(100)).map((_, index) => ({
    value: `rustic ${index}`,
    label: `Rustic ${index}`,
  }));

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState(deselectedOptions);
  const [visibleOptionIndex, setVisibleOptionIndex] = useState(
    paginationInterval,
  );

  const handleLoadMoreResults = useCallback(() => {
    const nextVisibleOptionIndex = visibleOptionIndex + paginationInterval;
    if (nextVisibleOptionIndex <= options.length - 1) {
      setVisibleOptionIndex(nextVisibleOptionIndex);
    }
  }, [visibleOptionIndex, options.length]);

  const removeTag = useCallback(
    (tag) => () => {
      const options = [...selectedOptions];
      options.splice(options.indexOf(tag), 1);
      setSelectedOptions(options);
    },
    [selectedOptions],
  );

  const updateText = useCallback(
    (value) => {
      setInputValue(value);

      if (value === '') {
        setOptions(deselectedOptions);
        return;
      }

      const filterRegex = new RegExp(value, 'i');
      const resultOptions = deselectedOptions.filter((option) =>
        option.label.match(filterRegex),
      );

      let endIndex = resultOptions.length - 1;
      if (resultOptions.length === 0) {
        endIndex = 0;
      }
      setOptions(resultOptions);
    },
    [deselectedOptions, options],
  );

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      label="Tags"
      value={inputValue}
      placeholder="Vintage, cotton, summer"
    />
  );

  const hasSelectedOptions = selectedOptions.length > 0;

  const tagsMarkup = hasSelectedOptions
    ? selectedOptions.map((option) => {
        let tagLabel = '';
        tagLabel = option.replace('_', ' ');
        tagLabel = titleCase(tagLabel);
        return (
          <Tag key={`option${option}`} onRemove={removeTag(option)}>
            {tagLabel}
          </Tag>
        );
      })
    : null;
  const optionList = options.slice(0, visibleOptionIndex);
  const selectedTagMarkup = hasSelectedOptions ? (
    <Stack spacing="extraTight">{tagsMarkup}</Stack>
  ) : null;

  return (
    <Stack vertical>
      {selectedTagMarkup}
      <Autocomplete
        allowMultiple
        options={optionList}
        selected={selectedOptions}
        textField={textField}
        onSelect={setSelectedOptions}
        listTitle="Suggested Tags"
        onLoadMoreResults={handleLoadMoreResults}
      />
    </Stack>
  );

  function titleCase(string) {
    return string
      .toLowerCase()
      .split(' ')
      .map((word) => {
        return word.replace(word[0], word[0].toUpperCase());
      })
      .join(' ');
  }
}
```

### Autocomplete with empty state

Use to indicate there are no search results.

```jsx
function AutocompleteExample() {
  const deselectedOptions = [
    {value: 'rustic', label: 'Rustic'},
    {value: 'antique', label: 'Antique'},
    {value: 'vinyl', label: 'Vinyl'},
    {value: 'vintage', label: 'Vintage'},
    {value: 'refurbished', label: 'Refurbished'},
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState(deselectedOptions);
  const [loading, setLoading] = useState(false);

  const updateText = useCallback(
    (value) => {
      setInputValue(value);

      if (!loading) {
        setLoading(true);
      }

      setTimeout(() => {
        if (value === '') {
          setOptions(deselectedOptions);
          setLoading(false);
          return;
        }
        const filterRegex = new RegExp(value, 'i');
        const resultOptions = deselectedOptions.filter((option) =>
          option.label.match(filterRegex),
        );
        setOptions(resultOptions);
        setLoading(false);
      }, 300);
    },
    [deselectedOptions, loading, options],
  );

  const updateSelection = useCallback(
    (selected) => {
      const selectedText = selected.map((selectedItem) => {
        const matchedOption = options.find((option) => {
          return option.value.match(selectedItem);
        });
        return matchedOption && matchedOption.label;
      });
      setSelectedOptions(selected);
      setInputValue(selectedText);
    },
    [options],
  );

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      label="Tags"
      value={inputValue}
      prefix={<Icon source={SearchMinor} color="base" />}
      placeholder="Search"
    />
  );

  const emptyState = (
    <React.Fragment>
      <Icon source={SearchMinor} />
      <div style={{textAlign: 'center'}}>
        <TextContainer>Could not find any results</TextContainer>
      </div>
    </React.Fragment>
  );

  return (
    <div style={{height: '225px'}}>
      <Autocomplete
        options={options}
        selected={selectedOptions}
        onSelect={updateSelection}
        emptyState={emptyState}
        loading={loading}
        textField={textField}
      />
    </div>
  );
}
```

---

## Related components

- For an input field without suggested options, [use the text field component](https://polaris.shopify.com/components/forms/text-field)
- For a list of selectable options not linked to an input field, [use the option list component](https://polaris.shopify.com/components/lists-and-tables/option-list)

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

The autocomplete component is based on the [ARIA 1.1 combobox pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#combobox). See the [text field component](https://polaris.shopify.com/components/forms/text-field) for information on implementing the autocomplete component with a text field.

The autocomplete list displays below the text field or other control by default so it is easy for merchants to discover and use. However, you can change the position with the `preferredPosition` prop.

Autocomplete features can be challenging for merchants with visual, motor, and cognitive disabilities. Even when they’re built using best practices, these features can be difficult to use with some assistive technologies. Merchants should always be able to search, enter data, or perform other activities without relying on the autocomplete.

<!-- usageblock -->

#### Do

Use autocomplete as progressive enhancement to make the interface easier to use for most merchants.

#### Don’t

Require that merchants make a selection from the autocomplete to complete a task.

<!-- end -->

### Keyboard support

- Give the autocomplete text input keyboard focus with the <kbd>tab</kbd> key (or <kbd>shift</kbd> + <kbd>tab</kbd> when tabbing backwards)
- Access the list of options with the up and down arrow keys
- Select an option that has focus with the <kbd>enter</kbd>/<kbd>return</kbd> key

<!-- /content-for -->
