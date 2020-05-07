import {
  hsbToString,
  hsbToRgb,
  rgbToHex,
  rgbToHsb,
  rgbString,
  hsbToHex,
  colorToHsla,
} from '../color-transformers';

describe('colorUtilities', () => {
  describe('rgbString', () => {
    it('returns rgb string for rgb', () => {
      expect(rgbString({red: 132, green: 11, blue: 2})).toMatch(
        'rgb(132, 11, 2)',
      );
    });

    it('returns rgb string for rgb with alpha', () => {
      expect(rgbString({red: 132, green: 11, blue: 2, alpha: 0.2})).toMatch(
        'rgba(132, 11, 2, 0.2)',
      );
    });
  });

  describe('hsbToString', () => {
    it('returns rgba string with corresponding value for hsb', () => {
      expect(hsbToString({hue: 300, saturation: 0.7, brightness: 1})).toMatch(
        'rgba(255, 77, 255, 1)',
      );
    });

    it('returns same string when hsb string used', () => {
      const hsbString = 'hsb(300, 0.7, 1)';
      expect(hsbString).toMatch(hsbString);
    });
  });

  describe('rgbToHex()', () => {
    it('returns hex strings for rgb', () => {
      expect(rgbToHex({red: 132, green: 11, blue: 2})).toMatch('#840b02');
    });
  });

  describe('hsbToHex', () => {
    it('returns a hex for hsb', () => {
      expect(hsbToHex({hue: 300, saturation: 0.5, brightness: 0.5})).toMatch(
        '#804080',
      );
    });
  });

  describe('hsbToRgb()', () => {
    it('returns 128/64/128 rgb value for an hsb color', () => {
      const {red, green, blue} = hsbToRgb({
        hue: 300,
        saturation: 0.5,
        brightness: 0.5,
      });
      expect(red).toBe(128);
      expect(green).toBe(64);
      expect(blue).toBe(128);
    });

    it('returns 0/0/0 rgb value for black', () => {
      const {red, green, blue} = hsbToRgb({
        hue: 23,
        saturation: 0,
        brightness: 0,
      });
      expect(red).toBe(0);
      expect(green).toBe(0);
      expect(blue).toBe(0);
    });

    it('returns 255/255/255 rgb value for white', () => {
      const {red, green, blue} = hsbToRgb({
        hue: 23,
        saturation: 0,
        brightness: 1,
      });
      expect(red).toBe(255);
      expect(green).toBe(255);
      expect(blue).toBe(255);
    });
  });

  describe('rgbToHsb', () => {
    it('returns 0/0/1 hsb value for white', () => {
      const {hue, saturation, brightness} = rgbToHsb({
        red: 255,
        green: 255,
        blue: 255,
      });
      expect(hue).toBe(0);
      expect(saturation).toBe(0);
      expect(brightness).toBe(1);
    });

    it('returns 0/0/0 hsb value for black', () => {
      const {hue, saturation, brightness} = rgbToHsb({
        red: 0,
        green: 0,
        blue: 0,
      });
      expect(hue).toBe(0);
      expect(saturation).toBe(0);
      expect(brightness).toBe(0);
    });

    // Corner case that was misscalculating hue
    it('returns 0/1/1 hsb value when red is the largest number', () => {
      const {hue, saturation, brightness} = rgbToHsb({
        red: 255,
        green: 0,
        blue: 0,
      });
      expect(hue).toBe(0);
      expect(saturation).toBe(1);
      expect(brightness).toBe(1);
    });
  });

  describe('colorToHsla', () => {
    it('returns the hsla color for hex', () => {
      expect(colorToHsla('#dddddd')).toStrictEqual({
        alpha: 1,
        hue: 0,
        lightness: 87,
        saturation: 0,
      });
    });

    it('returns the hsla color for rgb', () => {
      expect(colorToHsla('rgb(132, 11, 2)')).toStrictEqual({
        alpha: 1,
        hue: 4,
        lightness: 26,
        saturation: 97,
      });
    });

    it('returns a valid color when given an rgb color with no saturation', () => {
      expect(colorToHsla('rgb(0, 0, 0)')).toStrictEqual({
        alpha: 1,
        hue: 0,
        lightness: 0,
        saturation: 0,
      });
    });

    it('returns the hsla color for rgba', () => {
      expect(colorToHsla('rgb(132, 11, 2, 0.2)')).toStrictEqual({
        alpha: 1,
        hue: 4,
        lightness: 26,
        saturation: 97,
      });
    });

    it('returns the hsla color for hsl', () => {
      expect(colorToHsla('hsla(120, 100%, 50%)')).toStrictEqual({
        alpha: 1,
        hue: 120,
        lightness: 50,
        saturation: 100,
      });
    });

    it('returns the hsla color for hsla', () => {
      expect(colorToHsla('hsla(120, 100%, 50%, 0.3)')).toStrictEqual({
        alpha: 0.3,
        hue: 120,
        lightness: 50,
        saturation: 100,
      });
    });
  });
});
