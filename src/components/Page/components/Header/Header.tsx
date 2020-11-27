import React, {isValidElement} from 'react';

import {classNames} from '../../../../utilities/css';
import {buttonsFrom} from '../../../Button';
import {TextStyle} from '../../../TextStyle';
import {useMediaQuery} from '../../../../utilities/media-query';
import {useFeatures} from '../../../../utilities/features';
import {
  ConditionalRender,
  ConditionalWrapper,
} from '../../../../utilities/components';
import type {
  MenuGroupDescriptor,
  MenuActionDescriptor,
  DestructableAction,
  DisableableAction,
  LoadableAction,
  IconableAction,
  ConnectedDisclosure,
} from '../../../../types';
import {Breadcrumbs, BreadcrumbsProps} from '../../../Breadcrumbs';
import {Pagination, PaginationDescriptor} from '../../../Pagination';
import {ActionMenu, hasGroupsWithActions} from '../../../ActionMenu';
import {ButtonGroup} from '../../../ButtonGroup';

import {Title, TitleProps} from './components';
import styles from './Header.scss';

type MaybeJSX = JSX.Element | null;

interface PrimaryAction
  extends DestructableAction,
    DisableableAction,
    LoadableAction,
    IconableAction {
  /** Provides extra visual weight and identifies the primary action in a set of buttons */
  primary?: boolean;
  /** Disclosure button connected right of the button. Toggles a popover action list. */
  connectedDisclosure?: ConnectedDisclosure;
}

export interface HeaderProps extends TitleProps {
  /** Visually hide the title */
  titleHidden?: boolean;
  /** Adds a border to the bottom of the page header */
  separator?: boolean;
  /** Primary page-level action */
  primaryAction?: PrimaryAction | React.ReactNode;
  /** Page-level pagination */
  pagination?: PaginationDescriptor;
  /** Collection of breadcrumbs */
  breadcrumbs?: BreadcrumbsProps['breadcrumbs'];
  /** Collection of secondary page-level actions */
  secondaryActions?: MenuActionDescriptor[];
  /** Collection of page-level groups of secondary actions */
  actionGroups?: MenuGroupDescriptor[];
  /** Additional navigation markup */
  additionalNavigation?: React.ReactNode;
  // Additional meta data
  additionalMetaData?: React.ReactNode | string;
}

export function isPrimaryAction(
  x: PrimaryAction | React.ReactNode,
): x is PrimaryAction {
  return !isValidElement(x) && x !== undefined;
}

const SHORT_TITLE = 20;
const REALLY_SHORT_TITLE = 8;
const LONG_TITLE = 34;

export function Header({
  title,
  subtitle,
  titleMetadata,
  additionalMetaData,
  thumbnail,
  titleHidden = false,
  separator,
  primaryAction,
  pagination,
  additionalNavigation,
  breadcrumbs = [],
  secondaryActions = [],
  actionGroups = [],
}: HeaderProps) {
  const {isNavigationCollapsed} = useMediaQuery();
  const {newDesignLanguage} = useFeatures();
  const isSingleRow =
    !primaryAction &&
    !pagination &&
    !secondaryActions.length &&
    !actionGroups.length;

  const breadcrumbMarkup =
    breadcrumbs.length > 0 ? (
      <div
        className={classNames(
          styles.BreadcrumbWrapper,
          newDesignLanguage && styles.newDesignLanguage,
        )}
      >
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
    ) : null;

  const paginationMarkup =
    pagination && !isNavigationCollapsed ? (
      <div className={styles.PaginationWrapper}>
        <Pagination {...pagination} plain />
      </div>
    ) : null;

  const additionalNavigationMarkup = additionalNavigation ? (
    <div className={styles.AdditionalNavigationWrapper}>
      {additionalNavigation}
    </div>
  ) : null;

  const navigationMarkup =
    breadcrumbMarkup || paginationMarkup || additionalNavigationMarkup ? (
      <div className={styles.Navigation}>
        {breadcrumbMarkup}
        {additionalNavigationMarkup}
        {paginationMarkup}
      </div>
    ) : null;

  const pageTitleMarkup = (
    <div className={styles.TitleWrapper}>
      <Title
        title={title}
        subtitle={subtitle}
        titleMetadata={titleMetadata}
        thumbnail={thumbnail}
      />
    </div>
  );

  const primaryActionMarkup = primaryAction ? (
    <PrimaryActionMarkup primaryAction={primaryAction} />
  ) : null;

  const actionMenuMarkup =
    secondaryActions.length > 0 || hasGroupsWithActions(actionGroups) ? (
      <ConditionalWrapper
        condition={newDesignLanguage === false}
        wrapper={(children) => (
          <div className={styles.ActionMenuWrapper}>{children}</div>
        )}
      >
        <ActionMenu
          actions={secondaryActions}
          groups={actionGroups}
          rollup={isNavigationCollapsed}
        />
      </ConditionalWrapper>
    ) : null;

  const additionalMetaDataMarkup = additionalMetaData ? (
    <div className={styles.AdditionalMetaData}>
      <TextStyle variation="subdued">{additionalMetaData}</TextStyle>
    </div>
  ) : null;

  const headerClassNames = classNames(
    styles.Header,
    separator && styles.separator,
    isSingleRow && styles.isSingleRow,
    titleHidden && styles.titleHidden,
    navigationMarkup && styles.hasNavigation,
    actionMenuMarkup && styles.hasActionMenu,
    isNavigationCollapsed && styles.mobileView,
    !breadcrumbs.length && styles.noBreadcrumbs,
    newDesignLanguage && styles.newDesignLanguage,
    title && title.length < LONG_TITLE && styles.mediumTitle,
    title && title.length > LONG_TITLE && styles.longTitle,
  );

  if (newDesignLanguage) {
    const {slot1, slot2, slot3, slot4, slot5, slot6} = determineLayout({
      actionMenuMarkup,
      additionalMetaDataMarkup,
      additionalNavigationMarkup,
      breadcrumbMarkup,
      isNavigationCollapsed,
      pageTitleMarkup,
      paginationMarkup,
      primaryActionMarkup,
      title,
    });

    const className = classNames(
      styles.Row,
      newDesignLanguage && styles.RowCondensed,
    );

    return (
      <div className={headerClassNames}>
        <ConditionalRender
          condition={[slot1, slot2, slot3, slot4].some(notNull)}
        >
          <div className={className}>
            {slot1}
            {slot2}
            <ConditionalRender condition={[slot3, slot4].some(notNull)}>
              <div className={styles.RightAlign}>
                <ConditionalWrapper
                  condition={[slot3, slot4].every(notNull)}
                  wrapper={(children) =>
                    newDesignLanguage ? (
                      <div className={styles.Actions}>{children}</div>
                    ) : (
                      <ButtonGroup>{children}</ButtonGroup>
                    )
                  }
                >
                  {slot3}
                  {slot4}
                </ConditionalWrapper>
              </div>
            </ConditionalRender>
          </div>
        </ConditionalRender>
        <ConditionalRender condition={[slot5, slot6].some(notNull)}>
          <div className={styles.Row}>
            <div className={styles.LeftAlign}>{slot5}</div>
            <ConditionalRender condition={slot6 != null}>
              <div className={styles.RightAlign}>{slot6}</div>
            </ConditionalRender>
          </div>
        </ConditionalRender>
      </div>
    );
  }

  return (
    <div className={headerClassNames}>
      {navigationMarkup}

      <div className={styles.MainContent}>
        <div className={styles.TitleActionMenuWrapper}>
          {pageTitleMarkup}
          {actionMenuMarkup}
        </div>

        {primaryActionMarkup}
      </div>
    </div>
  );
}

function PrimaryActionMarkup({
  primaryAction,
}: {
  primaryAction: PrimaryAction | React.ReactNode;
}) {
  const {isNavigationCollapsed} = useMediaQuery();
  const {newDesignLanguage} = useFeatures();
  let content = primaryAction;
  if (isPrimaryAction(primaryAction)) {
    const primary =
      primaryAction.primary === undefined ? true : primaryAction.primary;

    content = buttonsFrom(
      shouldShowIconOnly(
        newDesignLanguage,
        isNavigationCollapsed,
        primaryAction,
      ),
      {
        primary,
      },
    );
  }

  return <div className={styles.PrimaryActionWrapper}>{content}</div>;
}

function shouldShowIconOnly(
  newDesignLanguage: boolean,
  isMobile: boolean,
  action: PrimaryAction,
): PrimaryAction {
  let {content, accessibilityLabel, icon} = action;
  if (!newDesignLanguage || icon == null) return {...action, icon: undefined};

  if (isMobile) {
    accessibilityLabel = accessibilityLabel || content;
    content = undefined;
  } else {
    icon = undefined;
  }

  return {
    ...action,
    content,
    accessibilityLabel,
    icon,
  };
}

function notNull(value: any) {
  return value != null;
}

function determineLayout({
  actionMenuMarkup,
  additionalMetaDataMarkup,
  additionalNavigationMarkup,
  breadcrumbMarkup,
  isNavigationCollapsed,
  pageTitleMarkup,
  paginationMarkup,
  primaryActionMarkup,
  title,
}: {
  actionMenuMarkup: MaybeJSX;
  additionalMetaDataMarkup: MaybeJSX;
  additionalNavigationMarkup: MaybeJSX;
  breadcrumbMarkup: MaybeJSX;
  isNavigationCollapsed: boolean;
  pageTitleMarkup: JSX.Element;
  paginationMarkup: MaybeJSX;
  primaryActionMarkup: MaybeJSX;
  title?: string;
}) {
  //    Header Layout
  // |----------------------------------------------------|
  // | slot1 | slot2 |                    | slot3 | slot4 |
  // |----------------------------------------------------|
  // | slot5 |                                    | slot6 |
  // |----------------------------------------------------|
  //
  const layouts = {
    mobileCompact: {
      slots: {
        slot1: null,
        slot2: pageTitleMarkup,
        slot3: actionMenuMarkup,
        slot4: primaryActionMarkup,
        slot5: additionalMetaDataMarkup,
        slot6: additionalNavigationMarkup,
      },
      condition:
        isNavigationCollapsed &&
        breadcrumbMarkup == null &&
        title != null &&
        title.length <= REALLY_SHORT_TITLE,
    },
    mobileDefault: {
      slots: {
        slot1: breadcrumbMarkup,
        slot2: pageTitleMarkup,
        slot3: actionMenuMarkup,
        slot4: primaryActionMarkup,
        slot5: additionalMetaDataMarkup,
        slot6: additionalNavigationMarkup,
      },
      condition: isNavigationCollapsed,
    },
    desktopCompact: {
      slots: {
        slot1: breadcrumbMarkup,
        slot2: pageTitleMarkup,
        slot3: actionMenuMarkup,
        slot4: primaryActionMarkup,
        slot5: additionalMetaDataMarkup,
        slot6: additionalNavigationMarkup,
      },
      condition:
        !isNavigationCollapsed &&
        paginationMarkup == null &&
        actionMenuMarkup == null &&
        title != null &&
        title.length <= SHORT_TITLE,
    },
    desktopDefault: {
      slots: {
        slot1: breadcrumbMarkup,
        slot2: pageTitleMarkup,
        slot3: (
          <>
            {actionMenuMarkup}
            {primaryActionMarkup}
          </>
        ),
        slot4: paginationMarkup,
        slot5: additionalMetaDataMarkup,
        slot6: additionalNavigationMarkup,
      },
      condition: !isNavigationCollapsed,
    },
  };

  const layout =
    Object.values(layouts).find((layout) => layout.condition) ||
    layouts.desktopDefault;

  return layout.slots;
}
