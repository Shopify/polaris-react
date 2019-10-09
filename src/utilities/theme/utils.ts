import tokens from '@shopify/polaris-tokens';
import {HSLColor, HSLAColor} from '../color-types';
import {colorToHsla, hslToString, hslToRgb} from '../color-transformers';
import {isLight} from '../color-validation';
import {constructColorName} from '../color-names';
import {createLightColor} from '../color-manipulation';
import {compose} from '../compose';
import {needsVariantList} from './config';
import {ThemeConfig, Theme, CustomPropertiesLike} from './types';

export function buildCustomProperties(
  themeConfig: ThemeConfig,
  globalTheming: boolean,
): CustomPropertiesLike {
  return globalTheming ? buildColors(themeConfig) : buildLegacyColors(themeConfig);
}

export function buildThemeContext(themeConfig: ThemeConfig): Theme {
  const {logo} = themeConfig;
  return {logo};
}

export function buildColors(theme: ThemeConfig) {
  /* eslint-disable babel/camelcase */
  const {UNSTABLE_colors = {}} = theme;

  const {
    surface = '#FAFAFA',
    onSurface = '#1F2225',
    interactive = '#0870D9',
    interactiveNeutral = '#EAEAEB',
    branded = '#008060',
    critical = '#E32727',
    warning = '#FFC453',
    highlight = '#59D0C2',
    success = '#008060',
  } = UNSTABLE_colors;
  /* eslint-enable babel/camelcase */

  const lightSurface = isLight(hslToRgb(colorToHsla(surface)));

  return {
    ...customPropertyTransformer({
      ...surfaceColors(colorToHsla(surface), lightSurface),
      ...onSurfaceColors(colorToHsla(onSurface), lightSurface),
      ...interactiveColors(colorToHsla(interactive), lightSurface),
      ...interactiveNeutralColors(
        colorToHsla(interactiveNeutral),
        lightSurface,
      ),
      ...brandedColors(colorToHsla(branded), lightSurface),
      ...criticalColors(colorToHsla(critical), lightSurface),
      ...warningColors(colorToHsla(warning), lightSurface),
      ...highlightColors(colorToHsla(highlight), lightSurface),
      ...successColors(colorToHsla(success), lightSurface),
    }),
    ...overrides(),
  };
}

function surfaceColors(color: HSLAColor, lightSurface: boolean) {
  return {
    surface: color,
    surfaceBackground: setLightness(color, lightSurface ? 98 : 7),
    surfaceForeground: setLightness(color, lightSurface ? 100 : 13),
    surfaceForegroundSubdued: setLightness(color, lightSurface ? 90 : 10),
    surfaceInverse: setLightness(color, lightSurface ? 0 : 100),
  };
}

function onSurfaceColors(color: HSLAColor, lightSurface: boolean) {
  return {
    onSurface: color,
    actionOnDark: setLightness(color, 76),
    actionOnLight: setLightness(color, 36),
    actionOnInverse: setLightness(color, lightSurface ? 76 : 36),
    actionOnSurface: setLightness(color, lightSurface ? 36 : 76),
    actionDisabledOnDark: setLightness(color, 66),
    actionDisabledOnLight: setLightness(color, 46),
    actionDisabledOnInverse: setLightness(color, lightSurface ? 66 : 46),
    actionDisabledOnSurface: setLightness(color, lightSurface ? 46 : 66),
    actionHoveredOnDark: setLightness(color, 86),
    actionHoveredOnLight: setLightness(color, 26),
    actionHoveredOnInverse: setLightness(color, lightSurface ? 86 : 26),
    actionHoveredOnSurface: setLightness(color, lightSurface ? 26 : 86),
    actionPressedOnDark: setLightness(color, 96),
    actionPressedOnLight: setLightness(color, 16),
    actionPressedOnInverse: setLightness(color, lightSurface ? 96 : 16),
    actionPressedOnSurface: setLightness(color, lightSurface ? 16 : 96),
    dividerOnDark: setLightness(color, 80),
    dividerOnLight: setLightness(color, 75),
    dividerOnInverse: setLightness(color, lightSurface ? 80 : 75),
    dividerOnSurface: setLightness(color, lightSurface ? 75 : 80),
    dividerDisabledOnDark: setLightness(color, 70),
    dividerDisabledOnLight: setLightness(color, 95),
    dividerDisabledOnInverse: setLightness(color, lightSurface ? 70 : 95),
    dividerDisabledOnSurface: setLightness(color, lightSurface ? 95 : 70),
    dividerSubduedOnDark: setLightness(color, 75),
    dividerSubduedOnLight: setLightness(color, 85),
    dividerSubduedOnInverse: setLightness(color, lightSurface ? 75 : 85),
    dividerSubduedOnSurface: setLightness(color, lightSurface ? 85 : 75),
    iconOnDark: setLightness(color, 98),
    iconOnLight: setLightness(color, 18),
    iconOnInverse: setLightness(color, lightSurface ? 98 : 18),
    iconOnSurface: setLightness(color, lightSurface ? 18 : 98),
    iconDisabledOnDark: setLightness(color, 75),
    iconDisabledOnLight: setLightness(color, 68),
    iconDisabledOnInverse: setLightness(color, lightSurface ? 75 : 68),
    iconDisabledOnSurface: setLightness(color, lightSurface ? 68 : 75),
    iconSubduedOnDark: setLightness(color, 88),
    iconSubduedOnLight: setLightness(color, 43),
    iconSubduedOnInverse: setLightness(color, lightSurface ? 88 : 43),
    iconSubduedOnSurface: setLightness(color, lightSurface ? 43 : 88),
    textOnDark: setLightness(color, 100),
    textOnLight: setLightness(color, 13),
    textOnInverse: setLightness(color, lightSurface ? 100 : 13),
    textOnSurface: setLightness(color, lightSurface ? 13 : 100),
    textDisabledOnDark: setLightness(color, 80),
    textDisabledOnLight: setLightness(color, 63),
    textDisabledOnInverse: setLightness(color, lightSurface ? 80 : 63),
    textDisabledOnSurface: setLightness(color, lightSurface ? 63 : 80),
    textSubduedOnDark: setLightness(color, 90),
    textSubduedOnLight: setLightness(color, 38),
    textSubduedOnInverse: setLightness(color, lightSurface ? 90 : 38),
    textSubduedOnSurface: setLightness(color, lightSurface ? 38 : 90),
  };
}

function interactiveColors(color: HSLAColor, lightSurface: boolean) {
  return {
    interactive: color,
    interactiveAction: setLightness(color, lightSurface ? 44 : 56),
    interactiveActionDisabled: setLightness(color, lightSurface ? 58 : 42),
    interactiveActionHovered: setLightness(color, lightSurface ? 37 : 63),
    interactiveActionSubdued: setLightness(color, lightSurface ? 51 : 49),
    interactiveActionPressed: setLightness(color, lightSurface ? 31 : 69),
    interactiveFocus: setLightness(color, lightSurface ? 58 : 42),
    interactiveSelected: setLightness(color, lightSurface ? 96 : 4),
    interactiveSelectedHovered: setLightness(color, lightSurface ? 89 : 11),
    interactiveSelectedPressed: setLightness(color, lightSurface ? 82 : 18),
  };
}

function interactiveNeutralColors(color: HSLAColor, lightSurface: boolean) {
  return {
    interactiveNeutral: color,
    interactiveNeutralElevation0: setLightness(color, lightSurface ? 100 : 7),
    interactiveNeutralElevation1: setLightness(color, lightSurface ? 94 : 13),
    interactiveNeutralElevation2: setLightness(color, lightSurface ? 92 : 22),
    interactiveNeutralElevation3: setLightness(color, lightSurface ? 86 : 29),
    interactiveNeutralElevation4: setLightness(color, lightSurface ? 76 : 39),
    interactiveNeutralElevation5: setLightness(color, lightSurface ? 66 : 49),
  };
}

function brandedColors(color: HSLAColor, lightSurface: boolean) {
  return {
    branded: color,
    brandedAction: setLightness(color, 25),
    brandedActionDisabled: setLightness(color, 32),
    brandedActionHovered: setLightness(color, 22),
    brandedActionPressed: setLightness(color, 15),
    iconOnBranded: setLightness(color, 98),
    iconSubduedOnBranded: setLightness(color, 88),
    textOnBranded: setLightness(color, 100),
    textSubduedOnBranded: setLightness(color, 90),
    brandedSelected: setLightness(color, lightSurface ? 95 : 5),
    brandedSelectedHovered: setLightness(color, lightSurface ? 81 : 19),
    brandedSelectedPressed: setLightness(color, lightSurface ? 74 : 26),
  };
}

function criticalColors(color: HSLAColor, lightSurface: boolean) {
  return {
    critical: color,
    criticalDivider: setLightness(color, lightSurface ? 52 : 48),
    criticalIcon: setLightness(color, lightSurface ? 52 : 48),
    criticalSurface: setLightness(color, lightSurface ? 88 : 12),
    criticalSurfaceSubdued: setLightness(color, lightSurface ? 98 : 12),
    criticalText: setLightness(color, lightSurface ? 30 : 70),
  };
}

function warningColors(color: HSLAColor, lightSurface: boolean) {
  return {
    warning: color,
    warningDivider: setLightness(color, lightSurface ? 66 : 34),
    warningIcon: setLightness(color, lightSurface ? 66 : 34),
    warningSurface: setLightness(color, lightSurface ? 88 : 12),
    warningSurfaceSubdued: setLightness(color, lightSurface ? 98 : 12),
    warningText: setLightness(color, lightSurface ? 30 : 70),
  };
}

function highlightColors(color: HSLAColor, lightSurface: boolean) {
  return {
    highlight: color,
    highlightDivider: setLightness(color, lightSurface ? 58 : 42),
    highlightIcon: setLightness(color, lightSurface ? 58 : 42),
    highlightSurface: setLightness(color, lightSurface ? 88 : 12),
    highlightSurfaceSubdued: setLightness(color, lightSurface ? 98 : 12),
    highlightText: setLightness(color, lightSurface ? 98 : 2),
  };
}

function successColors(color: HSLAColor, lightSurface: boolean) {
  return {
    success: color,
    successDivider: setLightness(color, lightSurface ? 25 : 35),
    successIcon: setLightness(color, lightSurface ? 25 : 35),
    successSurface: setLightness(color, lightSurface ? 88 : 12),
    successSurfaceSubdued: setLightness(color, lightSurface ? 98 : 12),
    successText: setLightness(color, lightSurface ? 15 : 85),
  };
}

function overrides() {
  return {
    [toCssCustomPropertySyntax('none')]: 'none',
    [toCssCustomPropertySyntax('transparent')]: 'transparent',
    [toCssCustomPropertySyntax('zero')]: '0',
    [toCssCustomPropertySyntax('buttonFontWeight')]: '500',
    [toCssCustomPropertySyntax('focusRingContent')]: "''",
    [toCssCustomPropertySyntax('borderRadiusBase')]: '4px',
    [toCssCustomPropertySyntax('borderRadiusWide')]: '8px',
  };
}

function customPropertyTransformer(colors: {[key: string]: HSLAColor}) {
  return Object.entries(colors).reduce(
    (transformed, [key, value]) => ({
      ...transformed,
      [toCssCustomPropertySyntax(key)]: hslToString(value),
    }),
    {},
  );
}

function toCssCustomPropertySyntax(camelCase: string) {
  return `--p-${camelCase.replace(/([A-Z0-9])/g, '-$1').toLowerCase()}`;
}

function setLightness(
  {hue, saturation, alpha}: HSLAColor,
  lightness: number,
): HSLAColor {
  return {hue, saturation, lightness, alpha};
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
  return needsVariantList.indexOf(name) !== -1;
}

const lightenToString: (
  color: HSLColor | string,
  lightness: number,
  saturation: number,
) => string = compose(
  hslToString,
  createLightColor,
);

export function setTextColor(
  name: string,
  variant: 'light' | 'dark' = 'dark',
): string[] {
  if (variant === 'light') {
    return [name, tokens.colorInk];
  }

  return [name, tokens.colorWhite];
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

      colorPairs.push([
        constructColorName(baseName, key, 'lighter'),
        lightenToString(color, 7, -10),
      ]);

      break;
    case 'dark':
      colorPairs.push(
        setTextColor(constructColorName(baseName, null, 'color'), 'dark'),
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
  for (let i = 0; i < keys.length; i++) {
    colorPairs.push([constructColorName(baseName, keys[i]), colors[keys[i]]]);

    if (needsVariant(baseName)) {
      const hslColor = colorToHsla(colors[keys[i]]);

      if (typeof hslColor === 'string') {
        return colorPairs;
      }

      const rgbColor = hslToRgb(hslColor);

      if (isLight(rgbColor)) {
        colorPairs.push(...setTheme(hslColor, baseName, keys[i], 'light'));
      } else {
        colorPairs.push(...setTheme(hslColor, baseName, keys[i], 'dark'));
      }
    }
  }

  return colorPairs;
}
