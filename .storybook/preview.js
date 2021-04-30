import React from 'react';
import {addParameters, addDecorator} from '@storybook/react';
import DefaultThemeColors from '@shopify/polaris-tokens/dist-modern/theme/base.json';

import {AppProvider} from '../src';
import enTranslations from '../locales/en.json';

export const parameters = {
  actions: {argTypesRegex: '^on.*'},
  percy: {
    skip: true,
    widths: [375, 1280],
  },
};

function StrictModeDecorator(Story, context) {
  const Wrapper =
    context.globals.strictMode === 'true' ? React.StrictMode : React.Fragment;

  return (
    <Wrapper>
      <Story {...context} />
    </Wrapper>
  );
}

function AppProviderDecorator(Story, context) {
  if (context.args.omitAppProvider) return <Story {...context} />;

  // const colors = Object.entries(DefaultThemeColors).reduce(
  //   (accumulator, [key, value]) => ({
  //     ...accumulator,
  //     [key]: strToHex(color(key, value, 'Theme')),
  //   }),
  //   {},
  // );

  return (
    <AppProvider
      i18n={enTranslations}
      theme={{
        //   colors,
        colorScheme: context.globals.colorScheme,
      }}
    >
      <Story {...context} />
    </AppProvider>
  );
}

export const globalTypes = {
  strictMode: {
    name: 'Strict mode',
    defaultValue: 'false',
    toolbar: {
      items: [
        {title: 'Disabled', value: 'false'},
        {title: 'Enabled', value: 'true'},
      ],
    },
  },
  colorScheme: {
    name: 'Color scheme',
    defaultValue: 'light',
    toolbar: {
      items: [
        {title: 'Light Mode', value: 'light'},
        {title: 'Dark Mode', value: 'dark'},
      ],
    },
  },
};

export const decorators = [StrictModeDecorator, AppProviderDecorator];

function strToHex(str) {
  if (str.charAt(0) === '#') return str;

  return `#${str
    .slice(5, -1)
    .split(',')
    .slice(0, 3)
    .map(Number)
    .map((n) => n.toString(16))
    .map((n) => n.padStart(2, '0'))
    .join('')}`;
}
