import React, {
  useEffect,
  useContext,
  useState,
  MouseEvent,
  ReactNode,
  Fragment,
} from 'react';

import {classNames} from '../../../../utilities/css';

import {NavigationContext} from '../../context';
import {Badge} from '../../../Badge';
import {Icon} from '../../../Icon';
import {IconProps} from '../../../../types';
import {Indicator} from '../../../Indicator';
import {UnstyledLink} from '../../../UnstyledLink';
import {useI18n} from '../../../../utilities/i18n';
import {useMediaQuery} from '../../../../utilities/media-query';

import styles from '../../Navigation.scss';

import {Secondary} from './components';

interface ItemURLDetails {
  url?: string;
  matches?: boolean;
  exactMatch?: boolean;
  matchPaths?: string[];
  excludePaths?: string[];
}

export interface SubNavigationItem extends ItemURLDetails {
  url: string;
  label: string;
  disabled?: boolean;
  new?: boolean;
  onClick?(event: MouseEvent<HTMLElement>): void;
}

interface SecondaryAction {
  url: string;
  accessibilityLabel: string;
  icon: IconProps['source'];
}

export interface ItemProps extends ItemURLDetails {
  icon?: IconProps['source'];
  badge?: ReactNode;
  label: string;
  disabled?: boolean;
  accessibilityLabel?: string;
  selected?: boolean;
  exactMatch?: boolean;
  new?: boolean;
  subNavigationItems?: SubNavigationItem[];
  secondaryAction?: SecondaryAction;
  onClick?(event: MouseEvent<HTMLElement>): void;
}

enum MatchState {
  MatchForced,
  MatchUrl,
  MatchPaths,
  Excluded,
  NoMatch,
}

export function Item({
  url,
  icon,
  label,
  subNavigationItems = [],
  secondaryAction,
  disabled,
  onClick,
  accessibilityLabel,
  selected: selectedOverride,
  badge,
  new: isNew,
  matches,
  exactMatch,
  matchPaths,
  excludePaths,
}: ItemProps) {
  const i18n = useI18n();
  const {isNavigationCollapsed} = useMediaQuery();
  const {location, onNavigationDismiss} = useContext(NavigationContext);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!isNavigationCollapsed && expanded) {
      setExpanded(false);
    }
  }, [expanded, isNavigationCollapsed]);

  const tabIndex = disabled ? -1 : 0;

  const hasNewChild =
    subNavigationItems.filter((subNavigationItem) => subNavigationItem.new)
      .length > 0;

  const indicatorMarkup = hasNewChild ? (
    <span className={styles.Indicator}>
      <Indicator pulse />
    </span>
  ) : null;

  const iconMarkup = icon ? (
    <div className={styles.Icon}>
      <Icon source={icon} />
    </div>
  ) : null;

  let badgeMarkup: ReactNode = null;
  if (isNew) {
    badgeMarkup = (
      <Badge status="new" size="small">
        {i18n.translate('Polaris.Badge.STATUS_LABELS.new')}
      </Badge>
    );
  } else if (typeof badge === 'string') {
    badgeMarkup = (
      <Badge status="new" size="small">
        {badge}
      </Badge>
    );
  } else {
    badgeMarkup = badge;
  }

  const wrappedBadgeMarkup =
    badgeMarkup == null ? null : (
      <div className={styles.Badge}>{badgeMarkup}</div>
    );

  const itemContentMarkup = (
    <Fragment>
      {iconMarkup}
      <span className={styles.Text}>
        {label}
        {indicatorMarkup}
      </span>
      {wrappedBadgeMarkup}
    </Fragment>
  );

  function getClickHandler(onClick: ItemProps['onClick']) {
    return (event: MouseEvent<HTMLElement>) => {
      const {currentTarget} = event;

      if (currentTarget.getAttribute('href') === location) {
        event.preventDefault();
      }

      if (
        subNavigationItems &&
        subNavigationItems.length > 0 &&
        !isNavigationCollapsed
      ) {
        event.preventDefault();
        setExpanded(!expanded);
      } else if (onNavigationDismiss) {
        onNavigationDismiss();

        if (onClick && onClick !== onNavigationDismiss) {
          onClick(event);
        }

        return;
      }

      if (onClick) {
        onClick(event);
      }
    };
  }

  if (url == null) {
    const className = classNames(
      styles.Item,
      disabled && styles['Item-disabled'],
    );

    return (
      <li className={styles.ListItem}>
        <button
          type="button"
          className={className}
          disabled={disabled}
          aria-disabled={disabled}
          aria-label={accessibilityLabel}
          onClick={getClickHandler(onClick)}
        >
          {itemContentMarkup}
        </button>
      </li>
    );
  }

  const secondaryActionMarkup = secondaryAction && (
    <UnstyledLink
      external
      url={secondaryAction.url}
      className={styles.SecondaryAction}
      tabIndex={tabIndex}
      aria-disabled={disabled}
      aria-label={secondaryAction.accessibilityLabel}
    >
      <Icon source={secondaryAction.icon} />
    </UnstyledLink>
  );

  const matchState = matchStateForItem(
    {url, matches, exactMatch, matchPaths, excludePaths},
    location,
  );

  const matchingSubNavigationItems = subNavigationItems.filter((item) => {
    const subMatchState = matchStateForItem(item, location);
    return (
      subMatchState === MatchState.MatchForced ||
      subMatchState === MatchState.MatchUrl ||
      subMatchState === MatchState.MatchPaths
    );
  });

  const childIsActive = matchingSubNavigationItems.length > 0;

  const selected =
    selectedOverride == null
      ? matchState === MatchState.MatchForced ||
        matchState === MatchState.MatchUrl ||
        matchState === MatchState.MatchPaths
      : selectedOverride;

  const showExpanded = selected || expanded || childIsActive;

  const itemClassName = classNames(
    styles.Item,
    disabled && styles['Item-disabled'],
    selected && subNavigationItems.length === 0 && styles['Item-selected'],
    showExpanded && styles.subNavigationActive,
  );

  let secondaryNavigationMarkup: ReactNode = null;

  if (subNavigationItems.length > 0 && showExpanded) {
    const longestMatch = matchingSubNavigationItems.sort(
      ({url: firstUrl}, {url: secondUrl}) => secondUrl.length - firstUrl.length,
    )[0];

    secondaryNavigationMarkup = (
      <div className={styles.SecondaryNavigation}>
        <Secondary expanded={showExpanded}>
          {subNavigationItems.map((item) => {
            const {label, onClick, ...rest} = item;
            return (
              <Item
                {...rest}
                key={label}
                label={label}
                matches={item === longestMatch}
                onClick={getClickHandler(onClick)}
              />
            );
          })}
        </Secondary>
      </div>
    );
  }

  const className = classNames(
    styles.ListItem,
    secondaryAction && styles['ListItem-hasAction'],
  );

  return (
    <li className={className}>
      <div className={styles.ItemWrapper}>
        <UnstyledLink
          url={url}
          className={itemClassName}
          tabIndex={tabIndex}
          aria-disabled={disabled}
          aria-label={accessibilityLabel}
          onClick={getClickHandler(onClick)}
        >
          {itemContentMarkup}
        </UnstyledLink>
        {secondaryActionMarkup}
      </div>
      {secondaryNavigationMarkup}
    </li>
  );
}

export function isNavigationItemActive(
  navigationItem: ItemProps,
  currentPath: string,
) {
  const matchState = matchStateForItem(navigationItem, currentPath);

  const matchingSubNavigationItems =
    navigationItem.subNavigationItems &&
    navigationItem.subNavigationItems.filter((item) => {
      const subMatchState = matchStateForItem(item, currentPath);
      return (
        subMatchState === MatchState.MatchForced ||
        subMatchState === MatchState.MatchUrl ||
        subMatchState === MatchState.MatchPaths
      );
    });

  const childIsActive =
    matchingSubNavigationItems && matchingSubNavigationItems.length > 0;

  const selected =
    matchState === MatchState.MatchForced ||
    matchState === MatchState.MatchUrl ||
    matchState === MatchState.MatchPaths;

  return selected || childIsActive;
}

function normalizePathname(pathname: string) {
  const barePathname = pathname.split('?')[0].split('#')[0];
  return barePathname.endsWith('/') ? barePathname : `${barePathname}/`;
}

function safeEqual(location: string, path: string) {
  return normalizePathname(location) === normalizePathname(path);
}

function safeStartsWith(location: string, path: string) {
  return normalizePathname(location).startsWith(normalizePathname(path));
}

function matchStateForItem(
  {url, matches, exactMatch, matchPaths, excludePaths}: ItemURLDetails,
  location: string,
) {
  if (url == null) {
    return MatchState.NoMatch;
  }

  if (matches) {
    return MatchState.MatchForced;
  }

  if (
    matches === false ||
    (excludePaths &&
      excludePaths.some((path) => safeStartsWith(location, path)))
  ) {
    return MatchState.Excluded;
  }

  if (matchPaths && matchPaths.some((path) => safeStartsWith(location, path))) {
    return MatchState.MatchPaths;
  }

  const matchesUrl = exactMatch
    ? safeEqual(location, url)
    : safeStartsWith(location, url);
  return matchesUrl ? MatchState.MatchUrl : MatchState.NoMatch;
}
