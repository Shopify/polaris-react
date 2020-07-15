import React from 'react';

import {useAppBridge} from '../../utilities/app-bridge';
import {classNames} from '../../utilities/css';
import {useI18n} from '../../utilities/i18n';
import {DisplayText} from '../DisplayText';
import {Loading} from '../Loading';
import {SkeletonDisplayText} from '../SkeletonDisplayText';
import {SkeletonBodyText} from '../SkeletonBodyText';

import styles from './SkeletonPage.scss';

export interface SkeletonPageProps {
  /** Page title, in large type */
  title?: string;
  /** Remove the normal max-width on the page */
  fullWidth?: boolean;
  /** Decreases the maximum layout width. Intended for single-column layouts */
  narrowWidth?: boolean;
  /** Shows a skeleton over the primary action */
  primaryAction?: boolean;
  /** Number of secondary page-level actions to display */
  secondaryActions?: number;
  /** Shows a skeleton over the breadcrumb */
  breadcrumbs?: boolean;
  /** Shows the frame loading bar */
  loading?: boolean;
  /** The child elements to render in the skeleton page. */
  children?: React.ReactNode;
  /** Decreases the maximum layout width. Intended for single-column layouts
   * @deprecated As of release 4.0, replaced by {@link https://polaris.shopify.com/components/feedback-indicators/skeleton-page#props-narrow-width}
   */
  singleColumn?: boolean;
}

export function SkeletonPage({
  children,
  fullWidth,
  narrowWidth,
  singleColumn,
  primaryAction,
  secondaryActions,
  title = '',
  breadcrumbs,
  loading,
}: SkeletonPageProps) {
  if (singleColumn) {
    // eslint-disable-next-line no-console
    console.warn(
      'Deprecation: The singleColumn prop has been renamed to narrowWidth to better represents its use and will be removed in v5.0.',
    );
  }

  const i18n = useI18n();
  const appBridge = useAppBridge();

  const className = classNames(
    styles.Page,
    fullWidth && styles.fullWidth,
    (narrowWidth || singleColumn) && styles.narrowWidth,
  );

  const headerClassName = classNames(
    styles.Header,
    breadcrumbs && styles['Header-hasBreadcrumbs'],
    secondaryActions && styles['Header-hasSecondaryActions'],
  );

  const titleMarkup = title !== null ? renderTitle(title) : null;

  const primaryActionMarkup = primaryAction ? (
    <div className={styles.PrimaryAction}>
      <SkeletonDisplayText size="large" />
    </div>
  ) : null;

  const secondaryActionsMarkup = secondaryActions
    ? renderSecondaryActions(secondaryActions)
    : null;

  const breadcrumbMarkup = breadcrumbs ? (
    <div className={styles.BreadcrumbAction} style={{width: 60}}>
      <SkeletonBodyText lines={1} />
    </div>
  ) : null;

  const loadingMarkup = loading ? <Loading /> : null;

  const headerMarkup = !appBridge ? (
    <div className={headerClassName}>
      {breadcrumbMarkup}
      <div className={styles.TitleAndPrimaryAction}>
        {titleMarkup}
        {primaryActionMarkup}
      </div>
      {secondaryActionsMarkup}
    </div>
  ) : null;

  return (
    <div
      className={className}
      role="status"
      aria-label={i18n.translate('Polaris.SkeletonPage.loadingLabel')}
    >
      {headerMarkup}
      <div className={styles.Content}>{children}</div>
      {loadingMarkup}
    </div>
  );
}

function renderSecondaryActions(actionCount: number) {
  const actions = [];
  for (let i = 0; i < actionCount; i++) {
    const width = Math.round(Math.random() * 40 + 60);
    actions.push(
      <div className={styles.Action} style={{width}} key={i}>
        <SkeletonBodyText lines={1} />
      </div>,
    );
  }
  return <div className={styles.Actions}>{actions}</div>;
}

function renderTitle(title: string) {
  const titleContent =
    title === '' ? (
      <SkeletonDisplayText size="large" />
    ) : (
      <DisplayText size="large" element="h1">
        {title}
      </DisplayText>
    );
  return <div className={styles.Title}>{titleContent}</div>;
}
