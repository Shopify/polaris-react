import React from 'react';

import {Scrollable} from '../Scrollable';
import {classNames} from '../../utilities/css';
import {useTheme} from '../../utilities/theme';
import {useFeatures} from '../../utilities/features';
import {WithinContentContext} from '../../utilities/within-content-context';
import {Image} from '../Image';
import {UnstyledLink} from '../UnstyledLink';
import {getWidth} from '../../utilities/get-width';

import {NavigationContext} from './context';
import {Section, Item} from './components';
import styles from './Navigation.scss';

export interface NavigationProps {
  location: string;
  children?: React.ReactNode;
  contextControl?: React.ReactNode;
  onDismiss?(): void;
}

export const Navigation: React.FunctionComponent<NavigationProps> & {
  Item: typeof Item;
  Section: typeof Section;
} = function Navigation({
  children,
  contextControl,
  location,
  onDismiss,
}: NavigationProps) {
  const {logo} = useTheme();
  const {newDesignLanguage} = useFeatures();
  const width = getWidth(logo, 104);

  const logoMarkup = logo ? (
    <div className={styles.LogoContainer}>
      <UnstyledLink
        url={logo.url || ''}
        className={styles.LogoLink}
        style={{width}}
      >
        <Image
          source={logo.navigationSource || logo.topBarSource || ''}
          alt={logo.accessibilityLabel || ''}
          className={styles.Logo}
          style={{width}}
        />
      </UnstyledLink>
    </div>
  ) : null;

  const mediaMarkup = contextControl ? (
    <div className={styles.ContextControl}>{contextControl}</div>
  ) : (
    logoMarkup
  );

  const className = classNames(
    styles.Navigation,
    newDesignLanguage && styles['Navigation-newDesignLanguage'],
  );

  const context = {
    location,
    onNavigationDismiss: onDismiss,
  };

  return (
    <NavigationContext.Provider value={context}>
      <WithinContentContext.Provider value>
        <nav className={className}>
          {mediaMarkup}
          <Scrollable className={styles.PrimaryNavigation}>
            {children}
          </Scrollable>
        </nav>
      </WithinContentContext.Provider>
    </NavigationContext.Provider>
  );
};

Navigation.Item = Item;
Navigation.Section = Section;
