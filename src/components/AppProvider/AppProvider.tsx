import React from 'react';
import {ThemeConfig, ThemeContext} from '../../utilities/theme';
import {ThemeProvider} from '../ThemeProvider';
import {MediaQueryProvider} from '../MediaQueryProvider';
import {FocusManager} from '../FocusManager';
import {I18n, I18nContext} from '../../utilities/i18n';
import {
  ScrollLockManager,
  ScrollLockManagerContext,
} from '../../utilities/scroll-lock-manager';
import {
  createAppBridge,
  AppBridgeContext,
  AppBridgeOptions,
} from '../../utilities/app-bridge';
import {
  StickyManager,
  StickyManagerContext,
} from '../../utilities/sticky-manager';
import {LinkContext, LinkLikeComponent} from '../../utilities/link';
import {FeaturesConfig, FeaturesContext} from '../../utilities/features';
import {
  UniqueIdFactory,
  UniqueIdFactoryContext,
  globalIdGeneratorFactory,
} from '../../utilities/unique-id';

interface State {
  intl: I18n;
  appBridge: ReturnType<typeof createAppBridge>;
  link: LinkLikeComponent | undefined;
}

export interface AppProviderProps extends AppBridgeOptions {
  /** A locale object or array of locale objects that overrides default translations. If specifying an array then your fallback language dictionaries should come first, followed by your primary language dictionary */
  i18n: ConstructorParameters<typeof I18n>[0];
  /** A custom component to use for all links used by Polaris components */
  linkComponent?: LinkLikeComponent;
  /** Custom logos and colors provided to select components */
  theme?: ThemeConfig;
  /** For toggling features */
  features?: FeaturesConfig;
  /** Inner content of the application */
  children?: React.ReactNode;
}

export class AppProvider extends React.Component<AppProviderProps, State> {
  private stickyManager: StickyManager;
  private scrollLockManager: ScrollLockManager;
  private uniqueIdFactory: UniqueIdFactory;

  constructor(props: AppProviderProps) {
    super(props);
    this.stickyManager = new StickyManager();
    this.scrollLockManager = new ScrollLockManager();
    this.uniqueIdFactory = new UniqueIdFactory(globalIdGeneratorFactory);

    const {i18n, apiKey, shopOrigin, forceRedirect, linkComponent} = this.props;

    // eslint-disable-next-line react/state-in-constructor
    this.state = {
      link: linkComponent,
      intl: new I18n(i18n),
      appBridge: createAppBridge({shopOrigin, apiKey, forceRedirect}),
    };
  }

  componentDidMount() {
    if (document != null) {
      this.stickyManager.setContainer(document);
    }
  }

  componentDidUpdate({
    i18n: prevI18n,
    linkComponent: prevLinkComponent,
    apiKey: prevApiKey,
    shopOrigin: prevShopOrigin,
    forceRedirect: prevForceRedirect,
  }: AppProviderProps) {
    const {i18n, linkComponent, apiKey, shopOrigin, forceRedirect} = this.props;

    if (
      i18n === prevI18n &&
      linkComponent === prevLinkComponent &&
      apiKey === prevApiKey &&
      shopOrigin === prevShopOrigin &&
      forceRedirect === prevForceRedirect
    ) {
      return;
    }

    // eslint-disable-next-line react/no-did-update-set-state
    this.setState({
      link: linkComponent,
      intl: new I18n(i18n),
      appBridge: createAppBridge({shopOrigin, apiKey, forceRedirect}),
    });
  }

  render() {
    const {theme = {}, children} = this.props;

    const {intl, appBridge, link} = this.state;
    const features = {newDesignLanguage: false, ...this.props.features};

    return (
      <FeaturesContext.Provider value={features}>
        <I18nContext.Provider value={intl}>
          <ThemeContext.Provider value={theme}>
            <ScrollLockManagerContext.Provider value={this.scrollLockManager}>
              <StickyManagerContext.Provider value={this.stickyManager}>
                <UniqueIdFactoryContext.Provider value={this.uniqueIdFactory}>
                  <AppBridgeContext.Provider value={appBridge}>
                    <LinkContext.Provider value={link}>
                      <ThemeProvider theme={theme}>
                        <MediaQueryProvider>
                          <FocusManager>{children}</FocusManager>
                        </MediaQueryProvider>
                      </ThemeProvider>
                    </LinkContext.Provider>
                  </AppBridgeContext.Provider>
                </UniqueIdFactoryContext.Provider>
              </StickyManagerContext.Provider>
            </ScrollLockManagerContext.Provider>
          </ThemeContext.Provider>
        </I18nContext.Provider>
      </FeaturesContext.Provider>
    );
  }
}
