import React from 'react';
import {
  ArrowLeftMinor,
  ArrowRightMinor,
  ChevronLeftMinor,
  ChevronRightMinor,
} from '@shopify/polaris-icons';

import {TextStyle} from '../TextStyle';
import {classNames} from '../../utilities/css';
import {useI18n} from '../../utilities/i18n';
import {isInputFocused} from '../../utilities/is-input-focused';
import {Icon} from '../Icon';
import {UnstyledLink} from '../UnstyledLink';
import {Spinner} from '../Spinner';
import {Tooltip} from '../Tooltip';
import {KeypressListener} from '../KeypressListener';
import type {Key} from '../../types';
import {handleMouseUpByBlurring} from '../../utilities/focus';
import {useFeatures} from '../../utilities/features';
import {Button} from '../Button';
import {ButtonGroup} from '../ButtonGroup';
import {ConditionalWrapper} from '../../utilities/components';

import styles from './Pagination.scss';

export interface PaginationDescriptor {
  /** Keyboard shortcuts for the next button */
  nextKeys?: Key[];
  /** Keyboard shortcuts for the previous button */
  previousKeys?: Key[];
  /** Tooltip for the next button */
  nextTooltip?: string;
  /** Tooltip for the previous button */
  previousTooltip?: string;
  /** The URL of the next page */
  nextURL?: string;
  /** The URL of the previous page */
  previousURL?: string;
  /** Whether there is a next page to show */
  hasNext?: boolean;
  /** Whether there is a previous page to show */
  hasPrevious?: boolean;
  /** Accessible label for the pagination */
  accessibilityLabel?: string;
  /** Callback when next button is clicked */
  onNext?(): void;
  /** Callback when previous button is clicked */
  onPrevious?(): void;
  /** Text to provide more context in between the arrow buttons */
  label?: string;
  /** Whether or not the next or previous page is currently loading */
  loading?: boolean;
}

export interface PaginationProps extends PaginationDescriptor {
  /** A more subdued control for use in headers */
  plain?: boolean;
}

export function Pagination({
  hasNext,
  hasPrevious,
  nextURL,
  previousURL,
  onNext,
  onPrevious,
  nextTooltip,
  previousTooltip,
  nextKeys,
  previousKeys,
  plain,
  accessibilityLabel,
  label,
  loading,
}: PaginationProps) {
  const i18n = useI18n();
  const {newDesignLanguage} = useFeatures();

  const node: React.RefObject<HTMLElement> = React.createRef();

  const navLabel =
    accessibilityLabel || i18n.translate('Polaris.Pagination.pagination');

  const loadingLabel =
    accessibilityLabel || i18n.translate('Polaris.Pagination.loading');

  const className = classNames(
    styles.Pagination,
    plain && styles.plain,
    loading && styles.loading,
  );

  if (loading) {
    return (
      <div className={className} aria-label={loadingLabel}>
        <Spinner size="small" />
      </div>
    );
  }

  const previousClassName = classNames(
    styles.Button,
    !label && styles.PreviousButton,
  );

  const nextClassName = classNames(styles.Button, !label && styles.NextButton);

  const previousButton = previousURL ? (
    <UnstyledLink
      className={previousClassName}
      url={previousURL}
      onMouseUp={handleMouseUpByBlurring}
      aria-label={i18n.translate('Polaris.Pagination.previous')}
      id="previousURL"
    >
      <Icon source={ArrowLeftMinor} />
    </UnstyledLink>
  ) : (
    <button
      onClick={onPrevious}
      type="button"
      onMouseUp={handleMouseUpByBlurring}
      className={previousClassName}
      aria-label={i18n.translate('Polaris.Pagination.previous')}
      disabled={!hasPrevious}
    >
      <Icon source={ArrowLeftMinor} />
    </button>
  );

  const nextButton = nextURL ? (
    <UnstyledLink
      className={nextClassName}
      url={nextURL}
      onMouseUp={handleMouseUpByBlurring}
      aria-label={i18n.translate('Polaris.Pagination.next')}
      id="nextURL"
    >
      <Icon source={ArrowRightMinor} />
    </UnstyledLink>
  ) : (
    <button
      onClick={onNext}
      type="button"
      onMouseUp={handleMouseUpByBlurring}
      className={nextClassName}
      aria-label={i18n.translate('Polaris.Pagination.next')}
      disabled={!hasNext}
    >
      <Icon source={ArrowRightMinor} />
    </button>
  );

  const prev = newDesignLanguage ? (
    <Button
      icon={ChevronLeftMinor}
      accessibilityLabel={i18n.translate('Polaris.Pagination.previous')}
      url={previousURL}
      onClick={onPrevious}
      disabled={!hasPrevious}
    />
  ) : (
    previousButton
  );

  const constructedPrevious =
    previousTooltip && hasPrevious ? (
      <Tooltip activatorWrapper="span" content={previousTooltip}>
        {prev}
      </Tooltip>
    ) : (
      prev
    );

  const next = newDesignLanguage ? (
    <Button
      icon={ChevronRightMinor}
      accessibilityLabel={i18n.translate('Polaris.Pagination.next')}
      url={nextURL}
      onClick={onNext}
      disabled={!hasNext}
    />
  ) : (
    nextButton
  );

  const constructedNext =
    nextTooltip && hasNext ? (
      <Tooltip activatorWrapper="span" content={nextTooltip}>
        {next}
      </Tooltip>
    ) : (
      next
    );

  const previousHandler = onPrevious || noop;
  const previousButtonEvents =
    previousKeys &&
    (previousURL || onPrevious) &&
    hasPrevious &&
    previousKeys.map((key) => (
      <KeypressListener
        key={key}
        keyCode={key}
        handler={
          previousURL
            ? handleCallback(clickPaginationLink('previousURL', node))
            : handleCallback(previousHandler)
        }
      />
    ));

  const nextHandler = onNext || noop;
  const nextButtonEvents =
    nextKeys &&
    (nextURL || onNext) &&
    hasNext &&
    nextKeys.map((key) => (
      <KeypressListener
        key={key}
        keyCode={key}
        handler={
          nextURL
            ? handleCallback(clickPaginationLink('nextURL', node))
            : handleCallback(nextHandler)
        }
      />
    ));

  const labelTextMarkup =
    hasNext && hasPrevious ? (
      <TextStyle>{label}</TextStyle>
    ) : (
      <TextStyle variation="subdued">{label}</TextStyle>
    );

  const labelMarkup = label ? (
    <div
      className={newDesignLanguage ? undefined : styles.Label}
      aria-live="polite"
    >
      {labelTextMarkup}
    </div>
  ) : null;

  return (
    <nav
      className={newDesignLanguage ? undefined : className}
      aria-label={navLabel}
      ref={node}
    >
      {previousButtonEvents}
      {nextButtonEvents}
      <ConditionalWrapper
        condition={Boolean(newDesignLanguage)}
        wrapper={(children) => (
          <ButtonGroup segmented={!label}>{children}</ButtonGroup>
        )}
      >
        {constructedPrevious}
        {labelMarkup}
        {constructedNext}
      </ConditionalWrapper>
    </nav>
  );
}

function clickPaginationLink(id: string, node: React.RefObject<HTMLElement>) {
  return () => {
    if (node.current == null) {
      return;
    }

    const link: HTMLAnchorElement | null = node.current.querySelector(`#${id}`);
    if (link) {
      link.click();
    }
  };
}

function handleCallback(fn: () => void) {
  return () => {
    if (isInputFocused()) {
      return;
    }

    fn();
  };
}

function noop() {}
