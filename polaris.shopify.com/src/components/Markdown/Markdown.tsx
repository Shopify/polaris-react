import React, {
  cloneElement,
  useState,
  createContext,
  useContext,
  forwardRef,
  type ComponentType,
  type PropsWithChildren,
} from 'react';
import {MDXRemote, type MDXRemoteProps} from './next-mdx-importer';
import {ClipboardIcon} from '@shopify/polaris-icons';
import {InlineGrid} from '@shopify/polaris';

import styles from './Markdown.module.scss';
import Code, {InlineCode} from '../../components/Code';
import {DirectiveCard} from './components/DirectiveCard';
import {Box, type WithAsProp} from '../../components/Box';
import {Stack} from '../../components/Stack';
import StatusBanner from '../../components/StatusBanner';
import TipBanner from '../../components/TipBanner';
import {Lede} from '../../components/Lede';
import Subnav from '../../components/Subnav';
import {SideBySide} from './components/SideBySide';
import YoutubeVideo from '../YoutubeVideo';
import {DoDont, Do, Dont} from './components/DoDont';
import {Heading} from '../../components/Heading';
import PatternsExample from '../../components/PatternsExample';
import {Card} from '../../components/Card';
import RichCardGrid from '../RichCardGrid';
import Tooltip from '../Tooltip';
import Icon from '../Icon';
import {FeaturedCardGrid} from '../FeaturedCardGrid';
import {useCopyToClipboard} from '../../utils/hooks';
import {Colors} from './components/Colors';
import {CollapsibleDetails} from '../../components/CollapsibleDetails';
import {
  Section as LayoutSection,
  Text,
  Small,
  Medium,
  Large,
  ExtraLarge,
} from './components/Layout';
import TokenList from '../../components/TokenList';
import TokensNav from '../../components/TokensNav';
import WebComponentBanner from '../../components/WebComponentBanner';

const CodeVisibilityContext = createContext<
  [
    boolean | undefined,
    React.Dispatch<React.SetStateAction<boolean>> | undefined,
  ]
>([undefined, undefined]);

const useCodeVisibility = () => useContext(CodeVisibilityContext);

export const CodeVisibilityProvider: ComponentType<
  PropsWithChildren<{
    /**
     * This value will be overwritten by the outer-most context provider
     */
    showCode: boolean;
    /**
     * This value will be overwritten by the outer-most context provider
     */
    setShowCode: React.Dispatch<React.SetStateAction<boolean>>;
  }>
> = ({children, showCode, setShowCode}) => {
  // Attempt to inherit from parent context if it's set
  const [codeVisibleFromContext, setShowCodeFromContext] = useCodeVisibility();
  return (
    <CodeVisibilityContext.Provider
      value={[
        typeof codeVisibleFromContext !== 'undefined'
          ? codeVisibleFromContext
          : showCode,
        setShowCodeFromContext ?? setShowCode,
      ]}
    >
      {children}
    </CodeVisibilityContext.Provider>
  );
};

interface FencedCodeMeta {
  title?: string;
  type?: string;
  previewContext?: string;
  sandboxContext?: string;
  isActionsVisible?: boolean;
  isCodeVisible?: boolean;
}

const FencedCodeWithVisibilityToggle: ComponentType<
  PropsWithChildren<{
    className?: string;
    meta?: FencedCodeMeta;
  }>
> = ({
  children,
  className,
  meta: {title, type, previewContext, sandboxContext, isActionsVisible} = {},
}) => {
  const [showCode, setShowCode] = useCodeVisibility();
  if (type === 'livePreview') {
    return (
      <Box className="margin-considered-harmful">
        <PatternsExample
          example={{
            code: (children as string) ?? '',
            previewContext,
            sandboxContext,
          }}
          isCodeVisible={showCode}
          isActionsVisible={isActionsVisible}
          onCodeVisibilityToggle={() => {
            setShowCode?.(!showCode);
          }}
          title={title ?? 'Pattern Name'}
        />
      </Box>
    );
  }

  return (
    <Code
      code={{
        className,
        title: title ?? 'Example',
        code: (children as string)?.toString() ?? '',
      }}
    />
  );
};

const FencedCode: ComponentType<
  PropsWithChildren<{className?: string; meta?: string}>
> = ({meta, ...props}) => {
  let parsedMeta: FencedCodeMeta = {};

  try {
    parsedMeta = JSON.parse(meta ?? '{}');
  } catch (error) {
    console.warn(`code block meta is not parsable JSON: ${meta}`);
  }

  const [showCode, setShowCode] = useState<boolean>(
    parsedMeta.isCodeVisible ?? false,
  );

  return (
    // Note: toggle state will get overridden by any parent context providers
    <CodeVisibilityProvider showCode={showCode} setShowCode={setShowCode}>
      <FencedCodeWithVisibilityToggle {...props} meta={parsedMeta} />
    </CodeVisibilityProvider>
  );
};

export type MarkdownProps<
  TFrontMatter,
  TScope extends Record<string, unknown>,
> = MDXRemoteProps<TScope, TFrontMatter>;

function Markdown<
  TFrontMatter extends Record<string, unknown>,
  TScope extends Record<string, unknown>,
>(props: MarkdownProps<TFrontMatter, TScope>): JSX.Element {
  return (
    <MDXRemote
      {...props}
      components={{
        h1: (props) => <HeadingWithCopyButton as="h1" {...props} />,
        h2: (props) => <HeadingWithCopyButton as="h2" {...props} />,
        h3: (props) => <HeadingWithCopyButton as="h3" {...props} />,
        h4: (props) => <HeadingWithCopyButton as="h4" {...props} />,
        h5: (props) => <HeadingWithCopyButton as="h5" {...props} />,
        h6: (props) => <HeadingWithCopyButton as="h6" {...props} />,
        ol: ({children}) => (
          <Stack
            as="ol"
            gap="200"
            className={[styles.List, styles.OrderedList]}
          >
            {children}
          </Stack>
        ),
        ul: ({children}) => (
          <Stack
            as="ul"
            className={[styles.List, styles.UnorderedList]}
            gap="200"
          >
            {children}
          </Stack>
        ),
        li: (props) => <Box as="li" className={styles.ListItem} {...props} />,
        p: (props) => <Box as="p" {...props} className={styles.Paragraph} />,
        hr: (props) => (
          <Box as="hr" {...props} className={styles.HorizontalRule} />
        ),
        strong: (props) => (
          <Box as="strong" {...props} className={styles.Strong} />
        ),
        img: ({src, alt, style}) =>
          src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt ?? ''}
              className={styles.Image}
              style={style}
            />
          ) : null,
        // `pre` is only for fenced code blocks, so we set the flag here which
        // is then passed to `code`
        pre: ({children}) =>
          cloneElement(
            React.Children.only(children) as React.ReactElement<any>,
            {fenced: true},
          ),
        // `code` could be an inline code element, or a fanced code block coming
        // from `pre`
        code: function MDXCode({
          // @ts-expect-error Unsure how to tell react-markdown this prop is
          // being injected by a plugin
          fenced,
          ...props
        }) {
          if (!fenced) {
            return (
              <InlineCode className={[styles.InlineCode, props.className]}>
                {props.children}
              </InlineCode>
            );
          }

          return <FencedCode {...props} />;
        },
        table: (props) => (
          <Box className={styles.TableWrapper}>
            <Box as="table" {...props} className={styles.Table} />
          </Box>
        ),
        Box,
        Stack,
        InlineGrid,
        SideBySide,
        Card,
        DirectiveCard,
        FeaturedCardGrid,
        YoutubeVideo,
        DoDont,
        Do,
        Dont,
        StatusBanner,
        TipBanner,
        Lede,
        Subnav,
        RichCardGrid,
        Colors,
        CollapsibleDetails,
        Code,
        LayoutSection,
        Text,
        Small,
        Medium,
        Large,
        ExtraLarge,
        TokenList,
        TokensNav,
        WebComponentBanner,
        Tip: ({children}) => (
          <div className="tip-banner">
            <div className="tip-banner__header">
              <div>
                <span className="Polaris-Icon Polaris-Icon--colorHighlight Polaris-Icon--applyColor">
                  <span className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--regular Polaris-Text--visuallyHidden"></span>
                  <svg
                    viewBox="0 0 20 20"
                    className="Polaris-Icon__Svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-9 3a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0v2zm0-6a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"
                    ></path>
                  </svg>
                </span>
              </div>{' '}
              <h4>Tip</h4>
            </div>
            {children}
          </div>
        ),
        ...props.components,
      }}
    />
  );
}

export const HeadingWithCopyButton = forwardRef(
  ({id, children, className, ...props}, ref) => {
    const origin =
      typeof window !== 'undefined'
        ? window.location.origin
        : 'https://polaris.shopify.com';
    const path = typeof window !== 'undefined' ? window.location.pathname : '';
    const url = `${origin}${path}#${id}`;
    const [copy, didJustCopy] = useCopyToClipboard(url);
    const copyButton =
      // remark-slug slugifies the header content before next-mdx-remote has a
      // chance to replace the global scope variables with their actual value,
      // resulting in an id of `frontmattertitle` for `# {frontmatter.title}`,
      // so we filter that case out here.
      !id || id.startsWith('frontmatter') ? null : (
        <Tooltip
          ariaLabel="Copy to clipboard"
          renderContent={() => <p>{didJustCopy ? 'Copied' : 'Copy'}</p>}
        >
          <button
            className={styles.MarkdownCopyButton}
            onClick={() => {
              copy();
              if (typeof window !== 'undefined') {
                window.history.pushState(id, '', url);
              }
            }}
          >
            <Icon source={ClipboardIcon} width={16} height={16} />
          </button>
        </Tooltip>
      );

    return (
      <Heading
        as="h1"
        id={id}
        {...props}
        className={[
          styles.MarkdownHeading,
          styles[`Heading-${props.as}`],
          className,
        ]}
        ref={ref}
      >
        {children}
        {copyButton}
      </Heading>
    );
  },
) as WithAsProp<{}, typeof Heading, 'h1'>;

HeadingWithCopyButton.displayName = 'Heading';

export default Markdown;
