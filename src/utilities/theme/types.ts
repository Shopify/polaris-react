import type {Config} from '@shopify/polaris-tokens/dist-modern/types';

export interface ThemeLogo {
  /** Provides a path for a logo used on a dark background */
  topBarSource?: string;

  /** Provides a path for a logo used on the mobile background */
  navigationSource?: string;

  /** Provides a path for a logo used on a light background */
  contextualSaveBarSource?: string;
  /** Destination the merchant will navigate to when clicking the logo */
  url?: string;
  /** Accessible label the logo image */
  accessibilityLabel?: string;
  /** Number of pixels wide the logo image is */
  width?: number;
}

export interface RoleColors {
  /** The surface role is used for the backgrounds of the UI. With a light color scheme, surface colors are nearly white, while in a dark color scheme, surface colors are nearly black. The color passed to the surface role impacts the rest of the color roles and their variants, adjusting them for light or dark contexts. */
  surface: string;
  /** The onSurface role is made up of elements which appear on top of a surface, including borders, secondary icons, and text. When a light surface is provided, onSurface values will be dark. When a dark surface is provided, onSurface values will be light. */
  onSurface: string;
  /** The interactive role is used to express interactivity in components. It is used in links, as an indicator of focus, and as an indicator of selected interactive states. */
  interactive: string;
  /** A secondary interactive color role, for use in secondary and tertiary buttons as a background color, as well as in form elements as a background color. */
  secondary: string;
  /** A primary interactive color, for use in primary buttons as a background color. Also used in navigation and tabs for icons, and for a surface color when in a selected state. */
  primary: string;
  /** Used to communicate destructive outcomes on interactive elements, for communicating errors, and to indicate a critical event in inert elements that requires immediate merchant action. */
  critical: string;
  /** For use as an indicator that action should be taken by merchants in components including badges, banners, and exception lists. */
  warning: string;
  /** Used to highlight elements of the UI that are important for merchants, but do not require immediate action. Used in information banners and badges, indicators that draw attention to new information, bars that indicate loading or progress, and in data visualization. */
  highlight: string;
  /** Used to indicate the result of a successful action taken by a merchant, to indicate a positive event, or to illustrate growth. */
  success: string;
  /** Used to decorate elements where color does convey a specific meaning in components like avatars */
  decorative: string;
}

export type Role = keyof RoleColors;

export type ColorScheme = 'light' | 'dark';

export interface LegacyColors {
  /** Sets the background color of the top bar component. Complimentary and typography colors are determined programmatically */
  topBar?: Record<string, string>;
}

// The value that is passed into the ThemeProvider
export interface ThemeConfig {
  /** Sets the logo for the top bar and contextual save bar components*/
  logo?: ThemeLogo;
  colors?: Partial<RoleColors> & LegacyColors;
  colorScheme?: ColorScheme;
  config?: Config;
  frameOffset?: number;
}

export type CustomPropertiesLike = Record<string, string>;

// The value that is stored in the ThemeContext
export interface Theme {
  /** Sets the logo for the top bar and contextual save bar components*/
  logo?: ThemeLogo;
  cssCustomProperties?: string;
  colors?: Partial<RoleColors>;
  colorScheme?: ColorScheme;
  textColor?: string;
}
