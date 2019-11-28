/* eslint-disable no-console */

const {resolve: resolvePath} = require('path');
const {writeFileSync} = require('fs-extra');
const {
  rgbToHex,
  hslToRgb,
  UNSTABLE_toCssCustomPropertySyntax: cssify,
  UNSTABLE_roleVariants: roleVariants,
  UNSTABLE_buildColors: colorFactory,
} = require('../');

// eslint-disable-next-line babel/camelcase
const lightColors = colorFactory({UNSTABLE_colors: {}}, roleVariants);
const darkColors = colorFactory(
  // eslint-disable-next-line babel/camelcase
  {UNSTABLE_colors: {surface: '#111213'}},
  roleVariants,
);

function stringToHsla(hsla) {
  const [hue, saturation, lightness] = hsla
    .substring(5)
    .slice(0, -1)
    .split(', ');

  return {
    hue,
    saturation: saturation.slice(0, -1),
    lightness: lightness.slice(0, -1),
    alpha: 1,
  };
}

function toHex(color) {
  return rgbToHex(hslToRgb(stringToHsla(color))).substr(1);
}

const RoleDescription = {
  surface:
    'The surface role is used for the backgrounds of the UI. In light mode, surface colors are nearly white, while in dark mode, surface colors are nearly black. The color passed to the surface role impacts the rest of the color roles and their variants, adjusting them for light or dark contexts.',
  onSurface:
    'The onSurface role is made up of elements which appear on top of a surface, including borders, neutral icons, and text. When a light surface is provided, onSurface values will be dark. When a dark surface is provided, onSurface values will be light.',
  interactive:
    'The interactive role is used to express interactivity in components. It is used in links, as an indicator of focus, and as an indicator of selected interactive states.',
  neutral:
    'A neutral interactive color role, for use in secondary and tertiary buttons as a background color, as well as in form elements as a background color.',
  primary:
    'A primary interactive color, for use in primary buttons as a background color. Also used in navigation and tabs for icons, and for a surface color when in a selected state.',
  critical:
    'Used to communicate destructive outcomes on interactive elements, for communicating errors, and to indicate a critical event in inert elements that requires immediate merchant action.',
  warning:
    'For use as an indicator that action should be taken by merchants in components including badges, banners, and exception lists.',
  highlight:
    'Used to highlight elements of the UI that are important for merchants, but do not require immediate action. Used in information banners and badges, indicators that draw attention to new information, bars that indicate loading or progress, and in data visualization.',
  success:
    'Used to indicate the result of a successful action taken by a merchant, to indicate a positive event, or to illustrate growth.',
  decorative:
    'Used to decorate elements where color does convey a specific meaning in components like avatars',
};

const Template = {
  parent: (name) => `- [\`${name}\`](#${name})\n`,
  child: (name) => `  - [\`${name}\`](#${name})\n`,
  role: (name, description) => `## \`${name}\`\n\n${description}\n\n`,
  variant: (name, description, light, dark) => {
    const additionalVariants = () => `| \`${cssify(
      name,
    )}-inverse\` | ![][${name}Dark]  | ![][${name}Light] |
| \`${cssify(name)}-light\`   | ![][${name}Light] | ![][${name}Light] |
| \`${cssify(name)}-dark\`    | ![][${name}Dark]  | ![][${name}Dark]  |`;

    return `### \`${name}\`\n\n[Back to top](#Table-of-contents)\n\n${description}

| CSS variable                | Light mode        | Dark mode         |
| ----------------------------| ------------------| ------------------|
| \`${cssify(name)}\`         | ![][${name}Light] | ![][${name}Dark]  |
${light === dark ? '' : additionalVariants()}

[${name}Light]: https://www.gifpng.com/64x32/${light}/FFFFFF?border-width=8&border-type=rectangle&border-color=${toHex(
      lightColors.surfaceBackground,
    )}&text=%20
[${name}Dark]: https://www.gifpng.com/64x32/${dark}/FFFFFF?border-width=8&border-type=rectangle&border-color=${toHex(
      darkColors.surfaceBackground,
    )}&text=%20\n\n---\n\n`;
  },
};

const contents = `# Color system

⚠️ The color system is currently an unstable API, and is subject to change in non-major releases of Polaris react. Please use with caution.

## Table of contents

${Object.entries(roleVariants).reduce((acc1, [role, variants]) => {
  const children = variants.reduce((acc2, variant) => {
    return acc2 + Template.child(variant.name);
  }, '');

  return acc1 + Template.parent(role) + children;
}, '')}

${Object.entries(roleVariants).reduce((acc1, [role, variants]) => {
  const children = variants.reduce((acc2, variant) => {
    const light = toHex(lightColors[variant.name]);
    const dark = toHex(darkColors[variant.name]);

    return (
      acc2 + Template.variant(variant.name, variant.description, light, dark)
    );
  }, '');

  return acc1 + Template.role(role, RoleDescription[role]) + children;
}, '')}`;

writeFileSync(resolvePath('documentation/Color system.md'), contents, function(
  err,
) {
  if (err) throw err;
  console.log('File is created successfully.');
});
