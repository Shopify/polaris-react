import React from 'react';
import {ExternalSmallMinor} from '@shopify/polaris-icons';

import {useFeatures} from '../../utilities/features';
import {BannerContext} from '../../utilities/banner-context';
import {classNames} from '../../utilities/css';
import {useI18n} from '../../utilities/i18n';
import {UnstyledLink} from '../UnstyledLink';
import {Icon} from '../Icon';

import styles from './Link.scss';

export interface LinkProps {
  /** ID for the link */
  id?: string;
  /** The url to link to */
  url?: string;
  /** The content to display inside the link */
  children?: React.ReactNode;
  /** Makes the link open in a new tab */
  external?: boolean;
  /** Makes the link color the same as the current text color and adds an underline */
  monochrome?: boolean;
  /** Callback when a link is clicked */
  onClick?(): void;
  /** The relation of the link */
  rel?: void;
}

export function Link({
  url,
  children,
  onClick,
  external,
  rel,
  id,
  monochrome,
}: LinkProps) {
  const i18n = useI18n();
  let childrenMarkup = children;
  const {newDesignLanguage} = useFeatures();

  if (external && typeof children === 'string') {
    const iconLabel = i18n.translate(
      'Polaris.Common.newWindowAccessibilityHint',
    );

    childrenMarkup = (
      <>
        {children}
        <span className={styles.IconLockup}>
          <span className={styles.IconLayout}>
            <Icon accessibilityLabel={iconLabel} source={ExternalSmallMinor} />
          </span>
        </span>
      </>
    );
  }

  return (
    <BannerContext.Consumer>
      {(BannerContext) => {
        const shouldBeMonochrome = monochrome || BannerContext;

        const className = classNames(
          styles.Link,
          shouldBeMonochrome && styles.monochrome,
          newDesignLanguage && styles.newDesignLanguage,
        );

        return url ? (
          <UnstyledLink
            onClick={onClick}
            className={className}
            url={url}
            external={external}
            id={id}
            rel={rel}
          >
            {childrenMarkup}
          </UnstyledLink>
        ) : (
          <button type="button" onClick={onClick} className={className} id={id}>
            {childrenMarkup}
          </button>
        );
      }}
    </BannerContext.Consumer>
  );
}
