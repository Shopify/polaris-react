import tokens from '@shopify/polaris-tokens';

import {needsVariantList} from '../config';
import {
  needsVariant,
  setTextColor,
  setBorderColor,
  setTheme,
  buildThemeContext,
  buildCustomProperties,
} from '../utils';
import type {ColorScheme, RoleColors} from '../types';

const DefaultColorScheme: ColorScheme = 'light';

describe('setTextColor', () => {
  it('sets a css variable to white if the variant is dark', () => {
    const textColor = setTextColor('topBar', 'dark');
    expect(textColor).toStrictEqual(['topBar', tokens.colorWhite]);
  });

  it('sets a css variable to white if the variant has no value', () => {
    const textColor = setTextColor('topBar');
    expect(textColor).toStrictEqual(['topBar', tokens.colorWhite]);
  });

  it('sets a css variable to ink if the variant is light', () => {
    const textColor = setTextColor('topBar', 'light');
    expect(textColor).toStrictEqual(['topBar', tokens.colorInk]);
  });
});

describe('setBorderColor', () => {
  it('sets a css variable to sky dark if the variant is dark', () => {
    const textColor = setBorderColor('topBar', 'dark');
    expect(textColor).toStrictEqual(['topBar', tokens.colorSkyDark]);
  });

  it('sets a css variable to sky dark if the variant has no value', () => {
    const textColor = setBorderColor('topBar');
    expect(textColor).toStrictEqual(['topBar', tokens.colorSkyDark]);
  });

  it('sets a css variable to ink lighter if the variant is light', () => {
    const textColor = setBorderColor('topBar', 'light');
    expect(textColor).toStrictEqual(['topBar', tokens.colorInkLighter]);
  });
});

describe('setTheme', () => {
  it('returns a base theme', () => {
    const theme = setTheme(
      {hue: 184, saturation: 100, lightness: 28},
      'topBar',
      'background',
      'dark',
    );

    expect(theme).toStrictEqual([
      ['--top-bar-color', 'rgb(255, 255, 255)'],
      ['--top-bar-border', 'rgb(196, 205, 213)'],
      ['--top-bar-background-lighter', 'hsla(184, 85%, 43%, 1)'],
    ]);
  });
});

describe('needsVariant', () => {
  it('will return false if the parameter is not on the list', () => {
    const hasVariant = needsVariant('frame');
    expect(hasVariant).toBe(needsVariantList.includes('frame'));
  });

  it('will return true if the parameter is on the list', () => {
    const hasVariant = needsVariant('topBar');
    expect(hasVariant).toBe(needsVariantList.includes('topBar'));
  });
});

describe('buildCustomProperties', () => {
  const legacyCustomProperties = {
    '--p-frame-offset': '0px',
    '--p-nav-width': '240',
    '--top-bar-background': '#eeeeee',
    '--top-bar-background-lighter': 'hsla(0, 10%, 100%, 1)',
    '--top-bar-border': 'rgb(99, 115, 129)',
    '--top-bar-color': 'rgb(33, 43, 54)',
  };

  it('creates legacy custom properties but ignores new custom properties when newDesignLanguage is disabled', () => {
    const theme = {
      colors: {topBar: {background: '#eeeeee'}, surface: '#ffffff'},
      colorScheme: DefaultColorScheme,
    };

    const colors = buildCustomProperties(theme, false);
    expect(colors).toStrictEqual(legacyCustomProperties);
    expect(colors).not.toStrictEqual(
      expect.objectContaining({'--p-surface': 'hsla(0, 0%, 100%, 1)'}),
    );
  });

  it('creates legacy custom properties but ignores new custom properties when newDesignLanguage is disabled without defaults', () => {
    const theme = {
      colors: {topBar: {background: '#eeeeee'}, surface: '#ffffff'},
      colorScheme: DefaultColorScheme,
    };

    const colors = buildCustomProperties(theme, false);
    expect(colors).toStrictEqual(legacyCustomProperties);
    expect(colors).not.toStrictEqual(
      expect.objectContaining({'--p-surface': 'hsla(0, 0%, 100%, 1)'}),
    );
  });

  it('creates new custom properties when newDesignLanguage is enabled but ignores legacy colors', () => {
    const theme = {
      colors: {topBar: {background: '#eeeeee'}, surface: '#ffffff'},
      colorScheme: DefaultColorScheme,
    };

    const colors = Object.keys(buildCustomProperties(theme, true));
    expect(colors).toContain('--p-surface');
    expect(colors).not.toContain('--top-bar-background');
  });

  it('creates default custom property of 0px for frameOffset when frameOffset is undefined and newDesignLanguage is false', () => {
    const theme = {
      colors: {topBar: {background: '#eeeeee'}, surface: '#ffffff'},
      colorScheme: DefaultColorScheme,
    };

    const colors = buildCustomProperties(theme, false);
    expect(colors).toMatchObject({'--p-frame-offset': '0px'});
  });

  it('creates default custom property of 0px for frameOffset when frameOffset is undefined and newDesignLanguage is true', () => {
    const theme = {
      colors: {topBar: {background: '#eeeeee'}, surface: '#ffffff'},
      colorScheme: DefaultColorScheme,
    };

    const colors = buildCustomProperties(theme, true);
    expect(colors).toMatchObject({'--p-frame-offset': '0px'});
  });

  it('creates custom property with value for frameOffset when frameOffset is provided and newDesignLanguage is false', () => {
    const theme = {
      frameOffset: 60,
      colors: {topBar: {background: '#eeeeee'}, surface: '#ffffff'},
      colorScheme: DefaultColorScheme,
    };

    const colors = buildCustomProperties(theme, false);
    expect(colors).toMatchObject({'--p-frame-offset': '60px'});
  });

  it('creates custom property with value for frameOffset when frameOffset is provided and newDesignLanguage is true', () => {
    const theme = {
      frameOffset: 80,
      colors: {topBar: {background: '#eeeeee'}, surface: '#ffffff'},
      colorScheme: DefaultColorScheme,
    };

    const colors = buildCustomProperties(theme, true);
    expect(colors).toMatchObject({'--p-frame-offset': '80px'});
  });

  it('creates default custom property of 240 for navWidth when navWidth is undefined and newDesignLanguage is false', () => {
    const theme = {
      colors: {topBar: {background: '#eeeeee'}, surface: '#ffffff'},
      colorScheme: DefaultColorScheme,
    };

    const colors = buildCustomProperties(theme, false);
    expect(colors).toMatchObject({'--p-nav-width': '240'});
  });

  it('creates default custom property of 240 for navWidth when navWidth is undefined and newDesignLanguage is true', () => {
    const theme = {
      colors: {topBar: {background: '#eeeeee'}, surface: '#ffffff'},
      colorScheme: DefaultColorScheme,
    };

    const colors = buildCustomProperties(theme, true);
    expect(colors).toMatchObject({'--p-nav-width': '240'});
  });

  it('creates custom property with value for navWidth when navWidth is provided and newDesignLanguage is false', () => {
    const theme = {
      navWidth: 90,
      colors: {topBar: {background: '#eeeeee'}, surface: '#ffffff'},
      colorScheme: DefaultColorScheme,
    };

    const colors = buildCustomProperties(theme, false);
    expect(colors).toMatchObject({'--p-nav-width': '90'});
  });

  it('creates custom property with value for navWidth when navWidth is provided and newDesignLanguage is true', () => {
    const theme = {
      navWidth: 150,
      colors: {topBar: {background: '#eeeeee'}, surface: '#ffffff'},
      colorScheme: DefaultColorScheme,
    };

    const colors = buildCustomProperties(theme, true);
    expect(colors).toMatchObject({'--p-nav-width': '150'});
  });

  it('uses light adjustments by default', () => {
    expect(
      buildCustomProperties(
        {
          colors: {surface: '#CCCCCC'},
          colorScheme: DefaultColorScheme,
        },
        true,
      ),
    ).toStrictEqual(
      expect.objectContaining({
        '--p-background': 'rgba(246, 246, 246, 1)',
      }),
    );
  });

  it('does not throw when given a color role that does not exist', () => {
    expect(() => {
      buildCustomProperties(
        {
          colors: {blarp: '#CCCCCC'} as Partial<RoleColors>,
          colorScheme: DefaultColorScheme,
        },
        true,
      );
    }).not.toThrow();
  });

  it('uses dark adjustments if the colorScheme is dark', () => {
    expect(
      buildCustomProperties(
        {colors: {surface: '#333333'}, colorScheme: 'dark'},
        true,
      ),
    ).toStrictEqual(
      expect.objectContaining({
        '--p-background': 'rgba(12, 12, 12, 1)',
      }),
    );
  });
});

describe('buildThemeContext', () => {
  it('reduces theme config down to a theme', () => {
    expect(
      buildThemeContext({colors: {}, logo: {}}, {foo: 'bar'}),
    ).toStrictEqual({
      logo: {},
      cssCustomProperties: 'foo:bar',
      colors: {},
      colorScheme: undefined,
    });
  });
});
