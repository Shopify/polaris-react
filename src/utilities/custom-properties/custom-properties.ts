import {config} from '@shopify/polaris-tokens/dist-modern/configs/base';

import {toCssCustomPropertySyntax, Tokens} from '../theme';

export const nonDesignLangaugeCustomProperties = [
  '--global-ribbon-height',
  '--top-bar-background',
  '--Polaris-RangeSlider-progress-lower',
  '--Polaris-RangeSlider-progress-upper',
  '--Polaris-RangeSlider-progress',
  '--Polaris-RangeSlider-output-factor',
  '--top-bar-color',
  '--top-bar-background-lighter',
  '--top-bar-background-darker',
  '--top-bar-border',
  '--p-frame-offset',
  '--p-nav-width',
];

export const designLangaugeCustomProperties = ([] as string[]).concat(
  ...Object.values(config).map((variant) =>
    variant.map(({name}) => toCssCustomPropertySyntax(name)),
  ),
  ...Object.keys(Tokens).map(toCssCustomPropertySyntax),
);
