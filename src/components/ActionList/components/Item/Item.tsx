import React, {forwardRef, RefObject} from 'react';

import {classNames} from '../../../../utilities/css';
import type {ActionListItemDescriptor} from '../../../../types';
import {Scrollable} from '../../../Scrollable';
import {Icon} from '../../../Icon';
import {UnstyledLink} from '../../../UnstyledLink';
import {Badge} from '../../../Badge';
import {TextStyle} from '../../../TextStyle';
import styles from '../../ActionList.scss';
import {handleMouseUpByBlurring} from '../../../../utilities/focus';

export type ItemProps = ActionListItemDescriptor;

function ItemComponent(
  {
    id,
    badge,
    content,
    accessibilityLabel,
    helpText,
    url,
    onAction,
    icon,
    image,
    prefix,
    suffix,
    disabled,
    external,
    destructive,
    ellipsis,
    active,
    role,
  }: ItemProps,
  itemRef: RefObject<HTMLButtonElement>,
) {
  const className = classNames(
    styles.Item,
    disabled && styles.disabled,
    destructive && styles.destructive,
    active && styles.active,
  );

  let prefixMarkup: React.ReactNode | null = null;

  if (prefix) {
    prefixMarkup = <span className={styles.Prefix}>{prefix}</span>;
  } else if (icon) {
    prefixMarkup = (
      <span className={styles.Prefix}>
        <Icon source={icon} />
      </span>
    );
  } else if (image) {
    prefixMarkup = (
      <span
        role="presentation"
        className={styles.Prefix}
        style={{backgroundImage: `url(${image}`}}
      />
    );
  }

  const contentText = ellipsis && content ? `${content}…` : content;

  const contentMarkup = helpText ? (
    <span className={styles.ContentBlock}>
      <span className={styles.ContentBlockInner}>{contentText}</span>
      <TextStyle variation="subdued">{helpText}</TextStyle>
    </span>
  ) : (
    contentText
  );

  const badgeMarkup = badge && (
    <span className={styles.Suffix}>
      <Badge status={badge.status}>{badge.content}</Badge>
    </span>
  );

  const suffixMarkup = suffix && (
    <span className={styles.Suffix}>{suffix}</span>
  );

  const textMarkup = <span className={styles.Text}>{contentMarkup}</span>;

  const contentElement = (
    <span className={styles.Content}>
      {prefixMarkup}
      {textMarkup}
      {badgeMarkup}
      {suffixMarkup}
    </span>
  );

  const scrollMarkup = active ? <Scrollable.ScrollTo /> : null;

  const control = url ? (
    <UnstyledLink
      id={id}
      url={disabled ? null : url}
      className={className}
      external={external}
      aria-label={accessibilityLabel}
      onClick={disabled ? null : onAction}
      ref={itemRef}
    >
      {contentElement}
    </UnstyledLink>
  ) : (
    <button
      id={id}
      type="button"
      className={className}
      disabled={disabled}
      aria-label={accessibilityLabel}
      onClick={onAction}
      onMouseUp={handleMouseUpByBlurring}
      ref={itemRef}
    >
      {contentElement}
    </button>
  );

  return (
    <li role={role}>
      {scrollMarkup}
      {control}
    </li>
  );
}

export const Item = forwardRef(ItemComponent);
