---
name: Popover
category: Overlays
platforms:
  - android
  - ios
  - web
keywords:
  - interactive
  - container
  - dropdown
  - drop down
  - drop-down
  - popover
  - pop over
  - menu
  - fly out
  - select
  - action list
  - menu
  - context menu
  - popover with form components
  - popover with action list
  - popover with content and actions
  - action sheet
  - ios
  - android
---

# Popover

Popovers are small overlays that open on demand. They let merchants access additional content and actions without cluttering the page.

---

## Best practices

Popovers should:

- Always be positioned next to the button or other interface element that triggers them
- Be used for secondary or less important information and actions since they’re hidden until merchants hit the trigger
- Contain navigation or actions that share a relationships to each other
- Be triggered by a clearly labeled button

---

## Content guidelines

### Popover content

If a popover contains actions, they should:

- Be clear and predictable: merchants should be able to anticipate what will happen when they click on an action item. Never deceive merchants by mislabeling an action.

<!-- usagelist -->

#### Do

- Create order
- Buy shipping label

#### Don’t

- New order
- Buy

<!-- end -->

- Be action-led: buttons should always lead with a strong verb that encourages action. To provide enough context to merchants use the {verb}+{noun} format on buttons except in the case of common actions like Save, Close, Cancel, or OK.

<!-- usagelist -->

#### Do

- Rename
- Edit HTML
- Duplicate

#### Don’t

- HTML editing options
- File name changes
- Duplicate this order so that you can make edits, updates, or changes

<!-- end -->

- Be scannable, especially when the popover contains a list of actions or options. Avoid unnecessary words and articles such as “the”, “an”, or “a”.

<!-- usagelist -->

#### Do

- Add menu item

#### Don’t

- Add a menu item

<!-- end -->

If the popover includes a series of navigational links, each item should:

- Be concise but still give merchants enough information so they can easily find and accurately navigate to the path they want.

<!-- usagelist -->

#### Do

- Online store
- Messenger
- Facebook
- Buy Button

#### Don’t

- Sales channel

<!-- end -->

---

## Examples

### Popover with action list

Use when presenting a set of actions in a disclosable menu.

```jsx
function PopoverWithActionListExample() {
  const [popoverActive, setPopoverActive] = useState(true);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      More actions
    </Button>
  );

  return (
    <div style={{height: '250px'}}>
      <Popover
        active={popoverActive}
        activator={activator}
        onClose={togglePopoverActive}
      >
        <ActionList items={[{content: 'Import'}, {content: 'Export'}]} />
      </Popover>
    </div>
  );
}
```

<!-- content-for: android -->

![Popover with action list for Android](/public_images/components/Popover/android/action-list@2x.png)

<!-- /content-for -->

<!-- content-for: ios -->

![Popover with action list for iOS](/public_images/components/Popover/ios/action-list@2x.png)

<!-- /content-for -->

### Popover with content and actions

Use to present a combination of content, instructions, and actions in a panel for tasks that are of low or secondary importance to the current page. When used this way, popovers provide useful entry points to related features without overwhelming merchants.

```jsx
function PopoverContentExample() {
  const [popoverActive, setPopoverActive] = useState(true);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      Sales channels
    </Button>
  );

  return (
    <div style={{height: '250px'}}>
      <Popover
        active={popoverActive}
        activator={activator}
        onClose={togglePopoverActive}
      >
        <Popover.Pane fixed>
          <Popover.Section>
            <p>Available sales channels</p>
          </Popover.Section>
        </Popover.Pane>
        <Popover.Pane>
          <ActionList
            items={[
              {content: 'Online store'},
              {content: 'Facebook'},
              {content: 'Shopify POS'},
            ]}
          />
        </Popover.Pane>
      </Popover>
    </div>
  );
}
```

<!-- content-for: android -->

![Popover with content and actions for Android](/public_images/components/Popover/android/action-content@2x.png)

<!-- /content-for -->

<!-- content-for: ios -->

![Popover with content and actions for iOS](/public_images/components/Popover/ios/action-content@2x.png)

<!-- /content-for -->

### Popover with form components

<!-- example-for: web -->

Use to present secondary input tasks on demand.

```jsx
function PopoverFormExample() {
  const [popoverActive, setPopoverActive] = useState(true);
  const [tagValue, setTagValue] = useState('');

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const handleTagValueChange = useCallback((value) => setTagValue(value), []);

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      Filter
    </Button>
  );

  return (
    <div style={{height: '280px'}}>
      <Popover
        active={popoverActive}
        activator={activator}
        onClose={togglePopoverActive}
        ariaHaspopup={false}
        sectioned
      >
        <FormLayout>
          <Select label="Show all customers where:" options={['Tagged with']} />
          <TextField
            label="Tags"
            value={tagValue}
            onChange={handleTagValueChange}
          />
          <Button size="slim">Add filter</Button>
        </FormLayout>
      </Popover>
    </div>
  );
}
```

### Popover with lazy loaded list

<!-- example-for: web -->

Use to present merchants with a list that dynamically loads more items on scroll or arrow down.

```jsx
function PopoverLazyLoadExample() {
  const [popoverActive, setPopoverActive] = useState(true);
  const [visibleStaffIndex, setVisibleStaffIndex] = useState(5);
  const staff = [
    'Abbey Mayert',
    'Abbi Senger',
    'Abdul Goodwin',
    'Abdullah Borer',
    'Abe Nader',
    'Abigayle Smith',
    'Abner Torphy',
    'Abraham Towne',
    'Abraham Vik',
    'Ada Fisher',
    'Adah Pouros',
    'Adam Waelchi',
    'Adan Zemlak',
    'Addie Wehner',
    'Addison Wexler',
    'Alex Hernandez',
  ];

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const handleScrolledToBottom = useCallback(() => {
    const totalIndexes = staff.length;
    const interval =
      visibleStaffIndex + 3 < totalIndexes
        ? 3
        : totalIndexes - visibleStaffIndex;

    if (interval > 0) {
      setVisibleStaffIndex(visibleStaffIndex + interval);
    }
  }, [staff.length, visibleStaffIndex]);

  const handleResourceListItemClick = useCallback(() => {}, []);

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      View staff
    </Button>
  );

  const staffList = staff.slice(0, visibleStaffIndex).map((name) => ({
    name,
    initials: getInitials(name),
  }));

  return (
    <Card sectioned>
      <div style={{height: '280px'}}>
        <Popover
          sectioned
          active={popoverActive}
          activator={activator}
          onClose={togglePopoverActive}
          ariaHaspopup={false}
        >
          <Popover.Pane onScrolledToBottom={handleScrolledToBottom}>
            <ResourceList items={staffList} renderItem={renderItem} />
          </Popover.Pane>
        </Popover>
      </div>
    </Card>
  );

  function renderItem({name, initials}) {
    return (
      <ResourceList.Item
        id={name}
        media={<Avatar size="medium" name={name} initials={initials} />}
        onClick={handleResourceListItemClick}
      >
        {name}
      </ResourceList.Item>
    );
  }

  function getInitials(name) {
    return name
      .split(' ')
      .map((surnameOrFamilyName) => {
        return surnameOrFamilyName.slice(0, 1);
      })
      .join('');
  }
}
```

### Action sheet

<!-- example-for: ios -->

Use when you have few actions that affects the whole page. Action sheets doesn’t support icons or additional information.

<!-- content-for: ios -->

![iOS action sheet](/public_images/components/Popover/ios/action-sheet@2x.png)

<!-- /content-for -->

---

## Related components

- To put a list of actions in a popover, [use the action list component](https://polaris.shopify.com/components/actions/action-list)
- To let merchants select simple options from a list, [use the select component](https://polaris.shopify.com/components/forms/select)

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

Popovers usually contain an [option list](https://polaris.shopify.com/components/lists-and-tables/option-list) or an [action list](https://polaris.shopify.com/components/actions/action-list), but can also contain other controls or content.

A popover can contain many numerous types of content. Whether it's a menu, grid or something entirely different! When `aria-expanded` is applied to an element, `aria-haspopup` will default to `menu`. To assist screen readers you'll need to pass `ariaHaspopup` to `Popover`.

### Keyboard support

- When a popover opens, focus moves to the first focusable element or to the popover container
- Once focus is in the popover, merchants can access controls in the popover using the <kbd>tab</kbd> key (and <kbd>shift</kbd> + <kbd>tab</kbd> backwards) and standard keystrokes for interacting
- Merchants can dismiss the popover by tabbing out of it, pressing the <kbd>esc</kbd> key, or clicking outside of it
- When the popover is closed by pressing the <kbd>esc</kbd> key, focus returns to the element that launched it
- Tabbing out of a popover will place the focus on the next focusable element

<!-- /content-for -->
