---
name: App provider
category: Structure
keywords:
  - app
  - provider
  - appprovider
  - internationalization
  - i18n
  - localization
  - context
  - translate
  - translation
  - application wrapper
  - wrapper
  - sdk
omitAppProvider: true
---

# App provider

App provider is a required component that enables sharing global settings throughout the hierarchy of your application.

---

## Best practices

The app provider component is required to use Polaris. Without it, the components in your application will not function correctly. You must wrap the root (the top) of your application in the app provider component. We’ve created [several examples to show how that’s done](https://github.com/Shopify/polaris-react/blob/main/examples/README.md).

---

## Examples

### Default

AppProvider works by default without any additional options passed to it.

```jsx
<AppProvider
  i18n={{
    Polaris: {
      ResourceList: {
        sortingLabel: 'Sort by',
        defaultItemSingular: 'item',
        defaultItemPlural: 'items',
        showing: 'Showing {itemsCount} {resource}',
        Item: {
          viewItem: 'View details for {itemName}',
        },
      },
      Common: {
        checkbox: 'checkbox',
      },
    },
  }}
>
  <Page>
    <Card>
      <ResourceList
        showHeader
        items={[
          {
            id: 341,
            url: 'customers/341',
            name: 'Mae Jemison',
            location: 'Decatur, USA',
          },
          {
            id: 256,
            url: 'customers/256',
            name: 'Ellen Ochoa',
            location: 'Los Angeles, USA',
          },
        ]}
        renderItem={(item) => {
          const {id, url, name, location} = item;
          const media = <Avatar customer size="medium" name={name} />;

          return (
            <ResourceList.Item id={id} url={url} media={media}>
              <h3>
                <TextStyle variation="strong">{name}</TextStyle>
              </h3>
              <div>{location}</div>
            </ResourceList.Item>
          );
        }}
      />
    </Card>
  </Page>
</AppProvider>
```

### With i18n

With an `i18n`, `AppProvider` will provide these translations to polaris components. See [using translations](https://polaris.shopify.com/components/structure/app-provider#using-translations)

```jsx
<AppProvider
  i18n={{
    Polaris: {
      Common: {
        checkbox: 'case à cocher',
      },
      ResourceList: {
        sortingLabel: 'Trier par',
        showing: '{itemsCount} {resource} affichés',
        defaultItemPlural: 'articles',
        defaultItemSingular: 'article',
        Item: {
          viewItem: "Afficher les détails de l'{itemName}",
        },
      },
    },
  }}
>
  <Page>
    <Card>
      <ResourceList
        showHeader
        items={[
          {
            id: 341,
            url: 'customers/341',
            name: 'Mae Jemison',
            location: 'Decatur, USA',
          },
          {
            id: 256,
            url: 'customers/256',
            name: 'Ellen Ochoa',
            location: 'Los Angeles, USA',
          },
        ]}
        renderItem={(item) => {
          const {id, url, name, location} = item;
          const media = <Avatar customer size="medium" name={name} />;

          return (
            <ResourceList.Item id={id} url={url} media={media}>
              <h3>
                <TextStyle variation="strong">{name}</TextStyle>
              </h3>
              <div>{location}</div>
            </ResourceList.Item>
          );
        }}
      />
    </Card>
  </Page>
</AppProvider>
```

### With linkComponent

With a `linkComponent`, the app provider component will override the links used in other components. For example you may want to use the `Link` component provided by `react-router` throughout your application instead of the default `a` tag.

```jsx
function AppProviderLinkExample() {
  const CustomLinkComponent = ({children, url, ...rest}) => {
    return (
      <a
        href={url}
        onClick={() => console.log('Custom link clicked')}
        {...rest}
      >
        {children}
      </a>
    );
  };

  return (
    <AppProvider
      linkComponent={CustomLinkComponent}
      i18n={{
        Polaris: {
          Page: {
            Header: {
              rollupButton: 'Actions',
            },
          },
        },
      }}
    >
      <Page
        breadcrumbs={[{content: 'Products', url: '#'}]}
        title="Jar With Lock-Lid"
        primaryAction={{content: 'Save', disabled: true}}
        secondaryActions={[
          {content: 'Duplicate', url: '#'},
          {content: 'View on your store', url: '#'},
        ]}
      >
        <p>Page content</p>
      </Page>
    </AppProvider>
  );
}
```

### With theme

With a `theme`, the app provider component will set a logo and theming for the App. The logo is used by the [TopBar](https://polaris.shopify.com/components/structure/top-bar) and [ContextualSaveBar](https://polaris.shopify.com/components/forms/contextual-save-bar) components. For theming configuration, see the [ThemeProvider](https://polaris.shopify.com/components/structure/theme-provider) documentation.

```jsx
function AppProviderThemeExample() {
  const [isDirty, setIsDirty] = useState(false);
  const [searchFieldValue, setSearchFieldValue] = useState('');

  const handleSearchChange = useCallback(
    (searchFieldValue) => setSearchFieldValue(searchFieldValue),
    [],
  );

  const toggleIsDirty = useCallback(
    () => setIsDirty((isDirty) => !isDirty),
    [],
  );

  const theme = {
    logo: {
      width: 124,
      topBarSource:
        'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
      url: 'http://jadedpixel.com',
      accessibilityLabel: 'Jaded Pixel',
      contextualSaveBarSource:
        'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999',
    },
  };

  const searchFieldMarkup = (
    <TopBar.SearchField
      placeholder="Search"
      value={searchFieldValue}
      onChange={handleSearchChange}
    />
  );

  const topBarMarkup = <TopBar searchField={searchFieldMarkup} />;

  const contentStatus = isDirty ? 'Disable' : 'Enable';
  const textStatus = isDirty ? 'enabled' : 'disabled';

  const pageMarkup = (
    <Page title="Account">
      <Layout>
        <Layout.Section>
          <SettingToggle
            action={{
              content: contentStatus,
              onAction: toggleIsDirty,
            }}
            enabled={isDirty}
          >
            This setting is{' '}
            <TextStyle variation="strong">{textStatus}</TextStyle>.
          </SettingToggle>
        </Layout.Section>
      </Layout>
    </Page>
  );

  const contextualSaveBarMarkup = isDirty ? (
    <ContextualSaveBar
      message="Unsaved changes"
      saveAction={{
        onAction: toggleIsDirty,
      }}
      discardAction={{
        onAction: toggleIsDirty,
      }}
    />
  ) : null;

  return (
    <div style={{height: '250px'}}>
      <AppProvider
        theme={theme}
        i18n={{
          Polaris: {
            Frame: {skipToContent: 'Skip to content'},
            ContextualSaveBar: {
              save: 'Save',
              discard: 'Discard',
            },
            TopBar: {
              SearchField: {
                clearButtonLabel: 'Clear',
                search: 'Search',
              },
            },
          },
        }}
      >
        <Frame topBar={topBarMarkup}>
          {contextualSaveBarMarkup}
          {pageMarkup}
        </Frame>
      </AppProvider>
    </div>
  );
}
```

---

## Using translations

Translations are provided in the locales folder. When using Polaris, you are able to import translations from all languages supported by the core Shopify product and consume them through the `i18n` prop.

If a project has only one locale, then you can pass the JSON content from the locale file into `AppProvider`.

```jsx
import { AppProvider } from '@shopify/polaris';
// en.json is English. Replace with fr.json for French, etc
import translations from '@shopify/polaris/locales/en.json';

function App() {
  return <AppProvider i18n={translations}>{/* App content */}</AppProvider>;
}
```

If a project supports multiple locales, then load them dynamically using [`@shopify/react-i18n`](https://github.com/Shopify/quilt/tree/master/packages/react-i18n#translation). This ensures that you load only the translations you need.

```jsx
import { AppProvider } from '@shopify/polaris';
// en.json is English. Replace with fr.json for French, etc
import translations from '@shopify/polaris/locales/en.json';
import {useI18n} from '@shopify/react-i18n';

function App() {
  const [i18n] = useI18n({
    id: 'Polaris',
    fallback: translations,
    translations(locale) {
      return import(
        /* webpackChunkName: "Polaris-i18n", webpackMode: "lazy-once" */ `@shopify/polaris/locales/${locale}.json`
      ).then((dictionary) => dictionary && dictionary.default);
    },
  });

  // i18n.translations is an array of translation dictionaries, where the first
  // dictionary is the desired language, and the second is the fallback.
  return (
    <AppProvider i18n={i18n.translations}>{/* App content */}</AppProvider>
  );
}
```

---

## Using linkComponent

By default Polaris renders `<Link>` elements (and action objects) as `<a>` tags. That works well for simple one-page demos. However for more complex multi-page applications that use a router such as [`react-router`](https://reacttraining.com/react-router/web) you will want links to use the components provided by your router. If you don't then every link will be an `<a>` tag and thus trigger a whole page refresh instead of navigating client-side.

The `linkComponent` prop allows you to customise how links behave within Polaris by allowing you to inject your router's own Link component. The following example demonstrates using react-router's `Link` component.

```jsx
import {BrowserRouter, Link as ReactRouterLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AppProvider linkComponent={Link}>
        {/* App content including your <Route> components */}
      </AppProvider>
    </BrowserRouter>
  );
}

const IS_EXTERNAL_LINK_REGEX = /^(?:[a-z][a-z\d+.-]*:|\/\/)/;

function Link({children, url = '', external, ref, ...rest}) {
  // react-router only supports links to pages it can handle itself. It does not
  // support arbirary links, so anything that is not a path-based link should
  // use a reglar old `a` tag
  if (external || IS_EXTERNAL_LINK_REGEX.test(url)) {
    rest.target = '_blank';
    rest.rel = 'noopener noreferrer';
    return (
      <a href={url} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <ReactRouterLink to={url} {...rest}>
      {children}
    </ReactRouterLink>
  );
}
```

---

## Testing components

You must include Polaris context in your tests when you use Polaris components.

To make this easier for you, we’ve provided:

- a PolarisTestProvider component to provide the Polaris contexts for you
- a fully-working [example app with Jest and Enzyme](https://github.com/Shopify/polaris-react/tree/main/examples/create-react-app) you can reference
