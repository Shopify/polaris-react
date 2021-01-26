import React, {Component} from 'react';

import type {ThemeConfig} from '../../utilities/theme';
import {ThemeProvider} from '../ThemeProvider';
import {MediaQueryProvider} from '../MediaQueryProvider';
import {ClickTrackerProvider} from '../ClickTrackerProvider';
import {FocusManager} from '../FocusManager';
import {PortalsManager} from '../PortalsManager';
import {I18n, I18nContext} from '../../utilities/i18n';
import {
  ScrollLockManager,
  ScrollLockManagerContext,
} from '../../utilities/scroll-lock-manager';
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

import './AppProvider.scss';

interface State {
  intl: I18n;
  link: LinkLikeComponent | undefined;
}

export interface AppProviderProps {
  /** A locale object or array of locale objects that overrides default translations. If specifying an array then your primary language dictionary should come first, followed by your fallback language dictionaries */
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

export class AppProvider extends Component<AppProviderProps, State> {
  private stickyManager: StickyManager;
  private scrollLockManager: ScrollLockManager;
  private uniqueIdFactory: UniqueIdFactory;

  constructor(props: AppProviderProps) {
    super(props);
    this.stickyManager = new StickyManager();
    this.scrollLockManager = new ScrollLockManager();
    this.uniqueIdFactory = new UniqueIdFactory(globalIdGeneratorFactory);

    const {i18n, linkComponent} = this.props;

    // eslint-disable-next-line react/state-in-constructor
    this.state = {
      link: linkComponent,
      intl: new I18n(i18n),
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
  }: AppProviderProps) {
    const {i18n, linkComponent} = this.props;

    if (i18n === prevI18n && linkComponent === prevLinkComponent) {
      return;
    }

    // eslint-disable-next-line react/no-did-update-set-state
    this.setState({
      link: linkComponent,
      intl: new I18n(i18n),
    });
  }

  render() {
    const {theme = {}, children} = this.props;

    const {intl, link} = this.state;
    const features = {newDesignLanguage: false, ...this.props.features};

    return (
      <FeaturesContext.Provider value={features}>
        <I18nContext.Provider value={intl}>
          <ScrollLockManagerContext.Provider value={this.scrollLockManager}>
            <StickyManagerContext.Provider value={this.stickyManager}>
              <UniqueIdFactoryContext.Provider value={this.uniqueIdFactory}>
                <LinkContext.Provider value={link}>
                  <ThemeProvider theme={theme}>
                    <ClickTrackerProvider>
                      <MediaQueryProvider>
                        <PortalsManager>
                          <FocusManager>{children}</FocusManager>
                        </PortalsManager>
                      </MediaQueryProvider>
                    </ClickTrackerProvider>
                  </ThemeProvider>
                </LinkContext.Provider>
              </UniqueIdFactoryContext.Provider>
            </StickyManagerContext.Provider>
          </ScrollLockManagerContext.Provider>
        </I18nContext.Provider>
      </FeaturesContext.Provider>
    );
  }
}
