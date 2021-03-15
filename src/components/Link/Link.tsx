import React from 'react';
import {ExternalSmallMinor} from '@shopify/polaris-icons';

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
  /** Removes text decoration underline to the link*/
  removeUnderline?: boolean;
  /** Callback when a link is clicked */
  onClick?(): void;
  /** Descriptive text to be read to screenreaders */
  accessibilityLabel?: string;
}

export function Link({
  url,
  children,
  onClick,
  external,
  id,
  monochrome,
  removeUnderline,
  accessibilityLabel,
}: LinkProps) {
  const i18n = useI18n();
  let childrenMarkup = children;

  if (
    external &&
    (typeof children === 'string' || typeof children === 'number')
  ) {
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
          removeUnderline && styles.removeUnderline,
        );

        return url ? (
          <UnstyledLink
            onClick={onClick}
            className={className}
            url={url}
            external={external}
            id={id}
            aria-label={accessibilityLabel}
          >
            {childrenMarkup}
          </UnstyledLink>
        ) : (
          <button
            type="button"
            onClick={onClick}
            className={className}
            id={id}
            aria-label={accessibilityLabel}
          >
            {childrenMarkup}
          </button>
        );
      }}
    </BannerContext.Consumer>
  );
}
