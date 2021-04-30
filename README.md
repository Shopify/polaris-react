# [Polaris React](https://polaris.shopify.com/)

[![npm version](https://img.shields.io/npm/v/@shopify/polaris.svg?style=flat)](https://www.npmjs.com/package/@shopify/polaris) ![CI](https://github.com/shopify/polaris-react/workflows/CI/badge.svg) [![codecov](https://codecov.io/gh/Shopify/polaris-react/branch/main/graph/badge.svg?token=IKyeKcpRs1)](https://codecov.io/gh/Shopify/polaris-react) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Shopify/polaris-react/blob/main/.github/CONTRIBUTING.md#your-first-pull-request) [![Storybook](https://raw.githubusercontent.com/storybookjs/brand/00a3368a85b888fefba88e4ff3edc2821c009f52/badge/badge-storybook.svg)](https://main--5d559397bae39100201eedc1.chromatic.com/)

Polaris React is a component library designed to help developers create the best experience for merchants who use Shopify. Visit the [Polaris style guide](https://polaris.shopify.com) to learn more.

## App development

For more information about creating apps for the Shopify App Store, take a look at the [app development documentation](https://developers.shopify.com/app-development).

## Using the React components

While we do offer a CSS-only version, **we strongly recommend using the React versions of our components**. It’s the version that we use at Shopify. It allows for rich, complex components like Tabs and Popovers, and will not have as many breaking changes as the CSS-only version.

### Installation

Run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @shopify/polaris --save
```

If you prefer [Yarn](https://yarnpkg.com/en/), use the following command instead:

```bash
yarn add @shopify/polaris
```

### Usage

1.  Import the CSS directly into your project if your asset packager supports it:

```js
import '@shopify/polaris/dist/styles.css';
```

Otherwise include the CSS in your HTML. We suggest copying the styles file into your own project, but you may also use it directly:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@shopify/polaris@6.3.0/dist/styles.css"
/>
```

2.  Include the translations and any of the provided components in your project:

```js
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page, Card, Button} from '@shopify/polaris';
```

3.  Tell React to render the element in the DOM:

```js
ReactDOM.render(
  <AppProvider i18n={enTranslations}>
    <Page title="Example app">
      <Card sectioned>
        <Button onClick={() => alert('Button clicked!')}>Example button</Button>
      </Card>
    </Page>
  </AppProvider>,
  document.querySelector('#app'),
);
```

## Using the CSS components

If React doesn’t make sense for your application, you can use a CSS-only version of our components. This includes all the styles you need for every component in the library, but you’ll be responsible for writing the correct markup and updating classes and DOM attributes in response to user events.

### Usage

1.  Include the CSS in your HTML. We suggest copying the styles file into your own project, but you may also use it directly:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@shopify/polaris@6.3.0/dist/styles.css"
/>
```

2.  Include the markup and associated classes in your HTML document:

```html
<button class="Polaris-Button">Example button</button>
```

## Examples

We have created example applications to document some of the ways you could include Polaris in one of your own applications. Each of these examples includes further documentation on how to install dependencies and run the app:

- [create-react-app example](https://github.com/Shopify/polaris-react/tree/main/examples/create-react-app)
- [create-react-app with TypeScript and react-testing example](https://github.com/Shopify/polaris-react/tree/main/examples/create-react-app-ts-react-testing)
- [Webpack example](https://github.com/Shopify/polaris-react/tree/main/examples/webpack)
- [CSS-only example](https://github.com/Shopify/polaris-react/tree/main/examples/cdn-styles)
- [next.js example](https://github.com/Shopify/polaris-react/tree/main/examples/next.js)

## Development

We use Storybook to create a simple, hot-reloading playground for development on these components. You can edit the `playground/Playground.tsx` file to import the components you are working on, and run `yarn dev` in order to start the development server. Please do not commit your work on the playground so that it remains pristine for other developers to work on.

### Testing on mobile or a virtual machine

To test the changes on a mobile or virtual machine, you will need to open the source of the iFrame, to do this:

1.  Run `yarn dev`
1.  Make sure your virtual machine and mobile device are on the same network
1.  Open http://YOUR_IP_ADDRESS:ASSIGNED_PORT/iframe.html?selectedKind=Playground&selectedStory=Playground in your mobile device or virtual machine

### Testing in a consuming project

1. In your terminal, run `yarn run build-consumer PROJECT_DIRECTORY` from the polaris-react repo

`PROJECT_DIRECTORY` is where the build will be copied, which must be a sibling of the `polaris-react` directory.

```sh
# Example
yarn run build-consumer polaris-styleguide
```

2. In your terminal, open a second tab and run `yarn run dev` from the `polaris-styleguide` repository

In the example above, the build is copied to `polaris-styleguide/node_modules/@shopify/polaris`. And in this case, a rebuild of `polaris-styleguide` is required after copying the `polaris-react` build, but may not be the case for all consuming projects.

```sh
# Example
cd ../polaris-styleguide/
yarn run build:development
```

Also, when running `yarn install`, copied builds will be overwritten and will require running `yarn run build-consumer PROJECT_DIRECTORY` again.

If you encounter compilation errors in your consuming project, ensure the dependencies in the consuming project match the versions in `polaris-react`.

### Visual regression testing

[Percy](https://percy.io/) runs for every pull request. Percy is a tool that compares screenshots for every single component we have in the library.

Percy is not always 100% accurate. Since it uses screenshot comparison, even browser sub-pixel rendering differences can cause Percy to ask for user confirmation of whether a change was intended or not. In cases like that, use your best judgment to determine whether you need to address it or not. This is why the choice to approve something or not is always manual. While everyone can view changes, only members of the Shopify team can approve changes.

#### Manual visual regression testing

To start a server for manually viewing the visual regression testing examples, run `yarn run dev`.

## Learning resources

If you’re new to React, we recommend you start with the [official React Getting Started documentation](https://facebook.github.io/react/docs/hello-world.html). As you read through the topics we suggest you follow along using their [React Hello World CodePen example](http://codepen.io/gaearon/pen/ZpvBNJ?editors=0010).

Additional resources:

- Online training courses at [reacttraining.com](http://reacttraining.com), [buildwithreact.com](http://buildwithreact.com), and [reactforbeginners.com](http://reactforbeginners.com).
- The community resources in [Awesome React](https://github.com/enaqx/awesome-react).
- As questions and find answers in the various [React support communities](https://facebook.github.io/react/community/support.html).

## Methodology

We set out to make our components easy to use. Each of our components has a well-documented (and fully typed) public interface with strong, consistently-applied conventions. This way, developers don’t need to worry about the underlying implementation. Instead, they can focus on creating amazing merchant experiences.

We ensure that our components are made for everyone. They meet accessibility standards and are responsive to any screen or device. We also put a lot of effort into optimizing the performance of the components, so everyone can build inclusive experiences that work.

We make our components flexible enough to meet diverse needs. They present the information you pass in and give you smart callbacks when something has changed, but they don’t enforce any structure beyond that. No matter what type of experience you’re creating, you can use components as the building blocks of your product or feature.

## Contributing

Pull requests are welcome. See the [contribution guidelines](https://github.com/Shopify/polaris-react/blob/main/.github/CONTRIBUTING.md) for more information.

## Licenses

- Source code is under a [custom license](https://github.com/Shopify/polaris-react/blob/main/LICENSE.md) based on MIT. The license restricts Polaris usage to applications that integrate or interoperate with Shopify software or services, with additional restrictions for external, stand-alone applications.
- All icons and images are licensed under the [Polaris Design Guidelines License Agreement](https://polaris.shopify.com/legal/license)
