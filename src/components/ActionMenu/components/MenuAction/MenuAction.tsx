import * as React from 'react';
import classNames from 'classnames';
import {CaretDownMinor} from '@shopify/polaris-icons';

import {handleMouseUpByBlurring} from '../../../../utilities/focus';
import {IconableAction, DisableableAction} from '../../../../types';

import Icon from '../../../Icon';
import UnstyledLink from '../../../UnstyledLink';

import styles from './MenuAction.scss';

export interface Props extends IconableAction, DisableableAction {
  /** Displays the button with a disclosure icon */
  disclosure?: boolean;
}

export default function MenuAction({
  content,
  accessibilityLabel,
  url,
  external,
  icon,
  disclosure,
  disabled,
  onAction,
}: Props) {
  if (icon == null && content == null) {
    return null;
  }

  const iconMarkup = icon && (
    <span className={styles.IconWrapper}>
      <Icon source={icon} />
    </span>
  );

  const disclosureIconMarkup = disclosure && (
    <span className={styles.IconWrapper}>
      <Icon source={CaretDownMinor} />
    </span>
  );

  const contentMarkup =
    iconMarkup || disclosureIconMarkup ? (
      <span className={styles.ContentWrapper}>
        {iconMarkup}
        <span className={styles.Content}>{content}</span>
        {disclosureIconMarkup}
      </span>
    ) : (
      content
    );

  const menuActionClassNames = classNames(
    styles.MenuAction,
    disabled && styles.disabled,
    icon && content == null && styles.iconOnly,
  );

  if (url) {
    return (
      <UnstyledLink
        className={menuActionClassNames}
        url={url}
        external={external}
        aria-label={accessibilityLabel}
        onMouseUp={handleMouseUpByBlurring}
      >
        {contentMarkup}
      </UnstyledLink>
    );
  }

  return (
    <button
      type="button"
      className={menuActionClassNames}
      disabled={disabled}
      aria-label={accessibilityLabel}
      onClick={onAction}
      onMouseUp={handleMouseUpByBlurring}
    >
      {contentMarkup}
    </button>
  );
}
