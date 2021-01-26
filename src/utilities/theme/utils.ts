import tokens from '@shopify/polaris-tokens';
import {colorFactory} from '@shopify/polaris-tokens/dist-modern';
import {mergeConfigs} from '@shopify/polaris-tokens/dist-modern/utils';
import {config as base} from '@shopify/polaris-tokens/dist-modern/configs/base';

import type {HSLColor, HSLAColor} from '../color-types';
import {colorToHsla, hslToString, hslToRgb} from '../color-transformers';
import {isLight} from '../color-validation';
import {constructColorName} from '../color-names';
import {createLightColor} from '../color-manipulation';

import {needsVariantList} from './config';
import type {
  ThemeConfig,
  Theme,
  CustomPropertiesLike,
  ColorScheme,
} from './types';

interface CustomPropertiesConfig extends ThemeConfig {
  colorScheme: ColorScheme;
}

export function buildCustomPropertiesNoMemo(
  themeConfig: CustomPropertiesConfig,
  newDesignLanguage: boolean,
  tokens?: Record<string, string>,
): CustomPropertiesLike {
  const {
    colors = {},
    colorScheme,
    config,
    frameOffset = 0,
    navWidth = 240,
  } = themeConfig;
  const mergedConfig = mergeConfigs(base, config || {});

  return newDesignLanguage
    ? customPropertyTransformer({
        ...colorFactory(colors, colorScheme, mergedConfig),
        ...tokens,
        frameOffset: `${frameOffset}px`,
        navWidth: `${navWidth}`,
      })
    : {
        ...buildLegacyColors(themeConfig),
        ...customPropertyTransformer({
          frameOffset: `${frameOffset}px`,
          navWidth: `${navWidth}`,
        }),
      };
}

export function buildThemeContext(
  themeConfig: ThemeConfig,
  cssCustomProperties?: CustomPropertiesLike,
): Theme {
  const {logo, colors = {}, colorScheme} = themeConfig;
  const {topBar, ...newDesignLanguageColors} = colors;
  return {
    logo,
    cssCustomProperties: toString(cssCustomProperties),
    colors: newDesignLanguageColors,
    colorScheme,
  };
}

export function toString(obj?: CustomPropertiesLike) {
  if (obj) {
    return Object.entries(obj)
      .map((pair) => pair.join(':'))
      .join(';');
  } else {
    return undefined;
  }
}

function customPropertyTransformer(
  properties: Record<string, HSLAColor | string>,
) {
  return Object.entries(properties).reduce(
    (transformed, [key, value]) => ({
      ...transformed,
      [toCssCustomPropertySyntax(key)]: value,
    }),
    {},
  );
}

export function toCssCustomPropertySyntax(camelCase: string) {
  return `--p-${camelCase.replace(/([A-Z0-9])/g, '-$1').toLowerCase()}`;
}

function buildLegacyColors(theme?: ThemeConfig): CustomPropertiesLike {
  let colorPairs;
  const colors =
    theme && theme.colors && theme.colors.topBar
      ? theme.colors.topBar
      : {background: '#00848e', backgroundLighter: '#1d9ba4', color: '#f9fafb'};

  const colorKey = 'topBar';
  const colorKeys = Object.keys(colors);

  if (colorKeys.length > 1) {
    colorPairs = colorKeys.map((key) => {
      return [constructColorName(colorKey, key), colors[key]];
    });
  } else {
    colorPairs = parseColors([colorKey, colors]);
  }

  return colorPairs.reduce(
    (state, [key, value]) => ({...state, [key]: value}),
    {},
  );
}

export function needsVariant(name: string) {
  return needsVariantList.includes(name);
}

function lightenToString(
  color: HSLColor | string,
  lightness: number,
  saturation: number,
): string {
  return hslToString(createLightColor(color, lightness, saturation));
}

export function setTextColor(
  name: string,
  variant: 'light' | 'dark' = 'dark',
): string[] {
  if (variant === 'light') {
    return [name, tokens.colorInk];
  }

  return [name, tokens.colorWhite];
}

export function setBorderColor(
  name: string,
  variant: 'light' | 'dark' = 'dark',
): string[] {
  if (variant === 'light') {
    return [name, tokens.colorInkLighter];
  }
  return [name, tokens.colorSkyDark];
}

export function setTheme(
  color: string | HSLColor,
  baseName: string,
  key: string,
  variant: 'light' | 'dark',
): string[][] {
  const colorPairs = [];
  switch (variant) {
    case 'light':
      colorPairs.push(
        setTextColor(constructColorName(baseName, null, 'color'), 'light'),
      );

      colorPairs.push(
        setBorderColor(constructColorName(baseName, null, 'border'), 'light'),
      );

      colorPairs.push([
        constructColorName(baseName, key, 'lighter'),
        lightenToString(color, 7, -10),
      ]);

      break;
    case 'dark':
      colorPairs.push(
        setTextColor(constructColorName(baseName, null, 'color'), 'dark'),
      );

      colorPairs.push(
        setBorderColor(constructColorName(baseName, null, 'border'), 'dark'),
      );

      colorPairs.push([
        constructColorName(baseName, key, 'lighter'),
        lightenToString(color, 15, 15),
      ]);

      break;
    default:
  }

  return colorPairs;
}

function parseColors([baseName, colors]: [
  string,
  {[key: string]: string},
]): string[][] {
  const keys = Object.keys(colors);
  const colorPairs = [];
  for (const key of keys) {
    colorPairs.push([constructColorName(baseName, key), colors[key]]);

    if (needsVariant(baseName)) {
      const hslColor = colorToHsla(colors[key]);

      if (typeof hslColor === 'string') {
        return colorPairs;
      }

      const rgbColor = hslToRgb(hslColor);

      if (isLight(rgbColor)) {
        colorPairs.push(...setTheme(hslColor, baseName, key, 'light'));
      } else {
        colorPairs.push(...setTheme(hslColor, baseName, key, 'dark'));
      }
    }
  }

  return colorPairs;
}

// eslint-disable-next-line @typescript-eslint/ban-types
function memoize(fnToMemoize: Function) {
  const cache: Map<string, any> = new Map();
  return function (...args: any[]) {
    const key = JSON.stringify([fnToMemoize.name, args]);
    if (cache.get(key) === undefined) {
      cache.set(key, fnToMemoize(...args));
    }
    return cache.get(key);
  };
}

export const buildCustomProperties = memoize(buildCustomPropertiesNoMemo);
