import {names} from './color-map';
import type {RGBColor, RGBAColor} from './color-types';
import {
  normalizeColorString,
  expandHex,
  rgbStringToHex,
  nameToHex,
} from './color-transformers';

const nameHexMap: Record<string, string> = names;
const SIX_DIGIT_HEX = '[0-9A-F]{6}$';
const THREE_DIGIT_HEX = '[0-9A-F]{3}$';
const HEX_REGEX = new RegExp(
  `(^#${SIX_DIGIT_HEX})|(^#${THREE_DIGIT_HEX})`,
  'i',
);
const HASHLESS_HEX_REGEX = new RegExp(
  `(^${SIX_DIGIT_HEX})|(^${THREE_DIGIT_HEX})`,
  'i',
);

// implements: https://www.w3.org/WAI/ER/WD-AERT/#color-contrast
export function isLight({red, green, blue}: RGBColor | RGBAColor): boolean {
  const contrast = (red * 299 + green * 587 + blue * 114) / 1000;
  return contrast > 125;
}

export function isDark(color: RGBColor | RGBAColor): boolean {
  return !isLight(color);
}

export function isColorName(value: string) {
  return Boolean(nameHexMap[value]);
}

export function isHexString(value: string) {
  return HEX_REGEX.test(value);
}

export function isHashlessHex(value: string) {
  return HASHLESS_HEX_REGEX.test(value);
}

export function isRgbString(value: string) {
  return /rgb\(\s*(0*((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*?)){2}(0*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?))\s*,?\s*([01]\.?\d*?)?\s*\)/i.test(
    value,
  );
}

export function coerceToValidUserInput(value: string) {
  const normalizedValue = normalizeColorString(value);

  if (isHexString(normalizedValue)) return expandHex(normalizedValue);
  else if (isHashlessHex(normalizedValue))
    return expandHex(`#${normalizedValue}`);
  else if (isRgbString(normalizedValue)) return rgbStringToHex(normalizedValue);
  else if (isColorName(normalizedValue)) return nameToHex(normalizedValue);
}
