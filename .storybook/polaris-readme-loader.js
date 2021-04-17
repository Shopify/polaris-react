/* eslint-disable no-console */
const chalk = require('chalk');
const grayMatter = require('gray-matter');
const MdParser = require('./md-parser');
const React = require('react');
const lodash = require('lodash');

const HOOK_PREFIX = 'use';

/**
 * A Webpack loader, that expects a Polaris README file, and returns a JS file
 * that adheres Storybook's Component Story Format that describes the stories
 * contained in the readme.
 *
 * We don't know what Polaris exports are needed by a given component, so we
 * import all of Polaris into the scope. This means that any time we add
 * examples for a new component we need to add it to the list of components that
 * are imported in this loader.
 * Eventually each README should define some metadata describing the imports it
 * requires, so we don't have to blindly import all the Polaris components and a
 * subset of Polaris icons.
 */
module.exports = function loader(source) {
  this.cacheable();
  const readme = parseCodeExamples(source);

  const testIndividualExamples = [
    'Modal',
    'Card',
    'Top bar',
    'App provider',
    'Contextual save bar',
    'Frame',
    'Loading',
    'Sheet',
    'Theme provider',
  ].includes(readme.name);

  const hasFullscreenLayout = ['App provider', 'Frame', 'Navigation'].includes(
    readme.name,
  );

  const csfExports = readme.examples.map((example) => {
    return `
const ${example.storyName}Component = (${example.code})();
export function ${example.storyName}() {
  return <div data-omit-app-provider="${readme.omitAppProvider}"><${
      example.storyName
    }Component /></div>;
}

${example.storyName}.storyName = ${JSON.stringify(example.name)};
${example.storyName}.args = {omitAppProvider: ${readme.omitAppProvider}};
${example.storyName}.parameters = {
  layout: '${hasFullscreenLayout ? 'fullscreen' : 'padded'}',
  docs: {
    description: {story: ${JSON.stringify(example.description)}},
  },
  percy: {skip: ${JSON.stringify(!testIndividualExamples)}},
};
`.trim();
  });

  if (readme.examples.length && !testIndividualExamples) {
    allExamplesCode = readme.examples.map((example) => {
      // Add styles to prevent false positives in visual regression testing.
      // Set a minimum height so that examples don't shift and triger a failure
      // if an example above them changes height
      return `
<div key="${example.storyName}" style={{
    minHeight: '720px',
    borderBottom: '1px solid #000',
    marginBottom: '8px',
  }}>
  <Heading>${example.name}</Heading>
  <${example.storyName}Component />
</div>
`.trim();
    });

    csfExports.unshift(`export function AllExamples() {
  return (
    <React.Fragment>
  ${allExamplesCode.join('\n')}
    </React.Fragment>
  );
};
AllExamples.parameters = {
  docs: {disable: true},
  percy: {skip: false},
  chromatic: {disable: true},
}`);
  }

  const hooks = Object.keys(React)
    .filter((key) => key.startsWith(HOOK_PREFIX))
    .join(', ');

  return `
import React, {${hooks}} from 'react';
import {withA11y} from '@storybook/addon-a11y';
import allCountries from 'testashwin';
import {
  AccountConnection,
  ActionList,
  ActionMenu,
  AppProvider,
  Autocomplete,
  Avatar,
  Backdrop,
  Badge,
  Banner,
  Breadcrumbs,
  Button,
  ButtonGroup,
  CalloutCard,
  Caption,
  Card,
  Checkbox,
  ChoiceList,
  Collapsible,
  ColorPicker,
  Connected,
  ContextualSaveBar,
  DataTable,
  DatePicker,
  DescriptionList,
  DisplayText,
  DropZone,
  EmptySearchResult,
  EmptyState,
  EventListener,
  ExceptionList,
  Filters,
  Focus,
  FooterHelp,
  Form,
  FormLayout,
  Frame,
  Heading,
  Icon,
  Image,
  IndexTable,
  Indicator,
  InlineError,
  KeyboardKey,
  KeypressListener,
  Label,
  Labelled,
  Layout,
  Link,
  List,
  Loading,
  MediaCard,
  Modal,
  Navigation,
  OptionList,
  Page,
  PageActions,
  Pagination,
  PhoneField,
  PolarisTestProvider,
  Popover,
  Portal,
  ProgressBar,
  RadioButton,
  RangeSlider,
  ResourceItem,
  ResourceList,
  ResourcePicker,
  Scrollable,
  ScrollLock,
  Select,
  SettingToggle,
  Sheet,
  SkeletonBodyText,
  SkeletonDisplayText,
  SkeletonPage,
  SkeletonThumbnail,
  Spinner,
  Stack,
  Sticky,
  Subheading,
  Tabs,
  Tag,
  TextContainer,
  TextField,
  TextStyle,
  ThemeProvider,
  Thumbnail,
  Toast,
  Tooltip,
  TopBar,
  TrapFocus,
  Truncate,
  UnstyledLink,
  VisuallyHidden,
  VideoThumbnail,
  useIndexResourceState,
} from '@shopify/polaris';
import {
  PlusMinor,
  AlertMinor,
  ArrowDownMinor,
  ArrowLeftMinor,
  ArrowRightMinor,
  ArrowUpMinor,
  ArrowUpDownMinor,
  CalendarMinor,
  MobileCancelMajor,
  CancelSmallMinor,
  CaretDownMinor,
  CaretUpMinor,
  TickSmallMinor,
  ChevronDownMinor,
  ChevronLeftMinor,
  ChevronRightMinor,
  ChevronUpMinor,
  CircleCancelMinor,
  CircleChevronDownMinor,
  CircleChevronLeftMinor,
  CircleChevronRightMinor,
  CircleChevronUpMinor,
  CircleInformationMajor,
  CirclePlusMinor,
  CirclePlusOutlineMinor,
  ConversationMinor,
  CustomersMajor,
  DeleteMinor,
  CircleDisableMinor,
  DisputeMinor,
  DuplicateMinor,
  EmbedMinor,
  ExportMinor,
  ExternalMinor,
  QuestionMarkMajor,
  HomeMajor,
  HorizontalDotsMinor,
  ImportMinor,
  LogOutMinor,
  MarketingMajor,
  MobileHamburgerMajor,
  NoteMinor,
  NotificationMajor,
  OnlineStoreMajor,
  OrdersMajor,
  PrintMinor,
  ProductsMajor,
  ProfileMinor,
  RefreshMinor,
  RiskMinor,
  SaveMinor,
  SearchMinor,
  MinusMinor,
  ViewMinor,
} from '@shopify/polaris-icons';

export default {
  title: ${JSON.stringify(`All Components/${readme.name}`)},
  component: ${readme.component},
};

${csfExports.join('\n\n')}
`;
};

const exampleForRegExp = /<!-- example-for: ([\w\s,]+) -->/u;

function stripCodeBlock(block) {
  return block
    .replace(/```jsx/, '')
    .replace('```', '')
    .trim();
}

function pascalCase(str) {
  return (str.match(/[a-zA-Z0-9]+/g) || '')
    .map((m) => m[0].toLocaleUpperCase() + m.slice(1))
    .join('');
}

function isExampleForPlatform(exampleMarkdown, platform) {
  const foundExampleFor = exampleMarkdown.match(exampleForRegExp);

  if (!foundExampleFor) {
    return true;
  }

  return foundExampleFor[1].includes(platform);
}

function parseCodeExamples(data) {
  const matter = grayMatter(data);
  const examples = generateExamples(matter);

  return {
    name: matter.data.name,
    category: matter.data.category,
    component: examples.length ? toPascalCase(matter.data.name) : undefined,
    examples,
    omitAppProvider: matter.data.omitAppProvider || false,
  };
}

function generateExamples(matter) {
  if (matter.data.platforms && !matter.data.platforms.includes('web')) {
    const ignoredPlatforms = matter.data.platforms.join(',');
    console.log(
      chalk`ℹ️  {grey [${matter.data.name}] Component examples are ignored (platforms: ${ignoredPlatforms})}`,
    );

    return [];
  }

  if (matter.data.hidePlayground) {
    console.log(
      chalk`ℹ️  {grey [${matter.data.name}] Component examples are ignored (hidePlayground: true)}`,
    );

    return [];
  }

  const introAndComponentSections = matter.content
    .split(/(\n---\n)/)
    .map((content) => content.replace('---\n', '').trim())
    .filter((content) => content !== '');
  const [, ...componentSections] = introAndComponentSections;

  const examplesAndHeader = componentSections
    .filter((markdown) => markdown.startsWith('## Examples'))
    .join('')
    .split('###');

  const [, ...allExamples] = examplesAndHeader;

  if (allExamples.length === 0) {
    console.log(
      chalk`🚨 {red [${matter.data.name}]} No examples found. For troubleshooting advice see https://github.com/Shopify/polaris-react/blob/main/documentation/Component%20READMEs.md#troubleshooting`,
    );
  }

  const nameRegex = /(.)*/;
  const codeRegex = /```jsx(.|\n)*?```/g;

  const examples = allExamples
    .filter((example) => isExampleForPlatform(example, 'web'))
    .map((example) => {
      const nameMatches = example.match(nameRegex);
      const codeBlock = example.match(codeRegex);

      const name = nameMatches !== null ? nameMatches[0].trim() : '';
      const storyName = pascalCase(name);
      const code =
        codeBlock !== null ? wrapExample(stripCodeBlock(codeBlock[0])) : '';

      const description = new MdParser().parse(
        filterMarkdownForPlatform(
          example
            .replace(nameRegex, '')
            .replace(codeRegex, '')
            .replace(exampleForRegExp, ''),
          'web',
        ).trim(),
      );

      return {name, storyName, code, description};
    });

  if (examples.filter((example) => example.code).length === 0) {
    console.log(
      chalk`🚨 {red [${matter.data.name}]} At least one React example expected`,
    );
  }

  examples.forEach((example) => {
    if (example.code === '') {
      console.log(
        chalk`🚨 {red [${matter.data.name}]} Example “${example.name}” is missing a React example`,
      );
    }
  });

  return examples;
}

function filterMarkdownForPlatform(markdown, platform) {
  const unwrapSinglePlatformContentRegExp = new RegExp(
    `<!-- content-for: ${platform} -->([\\s\\S]+?)<!-- \\/content-for -->`,
    'gu',
  );

  const deleteSinglePlatformContentRegExp = new RegExp(
    `<!-- content-for: (?:[\\w\\s]*) -->([\\s\\S]+?)<!-- \\/content-for -->`,
    'gu',
  );

  const unwrapMultiplatformContentRegExp = new RegExp(
    `<!-- content-for: (?:[\\w\\s,]*${platform}[\\w\\s,]*) -->([\\s\\S]+?)<!-- \\/content-for -->`,
    'gu',
  );
  const deleteRemainingPlatformsRegExp = /<!-- content-for: [\w\s,]+ -->[\s\S]+?<!-- \/content-for -->/gu;

  return (
    markdown
      // Unwrap content in multiple passes to support nested content-for blocks
      .replace(unwrapSinglePlatformContentRegExp, '$1')
      .replace(deleteSinglePlatformContentRegExp, '')
      .replace(unwrapMultiplatformContentRegExp, '$1')
      .replace(deleteRemainingPlatformsRegExp, '')
  );
}

/**
 * Wraps example code in a function so that we encapsulate each example.
 *
 * Returns a string representation of a function that returns a React Component
 * If the example is a function or class then we return that function or class.
 * If the example is plain JSX then return a function component that renders
 * that JSX .
 */
function wrapExample(code) {
  const classPattern = /class (\w+) extends React.Component/g;
  const functionPattern = /^function (\w+)/g;
  const fullComponentDefinitionMatch =
    classPattern.exec(code) || functionPattern.exec(code);

  if (fullComponentDefinitionMatch) {
    return `function() {
    ${code}
    return ${fullComponentDefinitionMatch[1]};
  }`;
  } else {
    return `function() {
    function JsxOnlyExample() {
      return (
        ${code}
      );
    }
    return JsxOnlyExample;
  }`;
  }
}

function toPascalCase(str) {
  return lodash.startCase(lodash.camelCase(str)).replace(/ /g, '');
}
