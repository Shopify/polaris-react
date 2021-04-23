import React, {useRef, useState, useEffect, useCallback, useMemo} from 'react';
import {EnableSelectionMinor} from '@shopify/polaris-icons';
import debounce from 'lodash/debounce';
import {CSSTransition} from 'react-transition-group';
import {durationFast} from '@shopify/polaris-tokens';

import {useToggle} from '../../utilities/use-toggle';
import {useI18n} from '../../utilities/i18n';
import {Badge} from '../Badge';
import {Checkbox as PolarisCheckbox} from '../Checkbox';
import {EmptySearchResult} from '../EmptySearchResult';
import {EventListener} from '../EventListener';
import {Stack} from '../Stack';
import {Sticky} from '../Sticky';
import {Spinner} from '../Spinner';
import {VisuallyHidden} from '../VisuallyHidden';
import {Button} from '../Button';
import {BulkActions, BulkActionsProps} from '../BulkActions';
import {classNames} from '../../utilities/css';
import {
  useIndexValue,
  useIndexSelectionChange,
  SELECT_ALL_ITEMS,
  SelectionType,
  IndexProviderProps,
} from '../../utilities/index-provider';
import {AfterInitialMount} from '../AfterInitialMount';
import {IndexProvider} from '../IndexProvider';
import type {NonEmptyArray} from '../../types';

import {getTableHeadingsBySelector} from './utilities';
import {ScrollContainer, Cell, Row, Link} from './components';
import styles from './IndexTable.scss';

export interface IndexTableHeading {
  title: string;
  new?: boolean;
  hidden?: boolean;
}

export interface IndexTableBaseProps {
  headings: NonEmptyArray<IndexTableHeading>;
  promotedBulkActions?: BulkActionsProps['promotedActions'];
  bulkActions?: BulkActionsProps['actions'];
  children?: React.ReactNode;
  emptyState?: React.ReactNode;
  sort?: React.ReactNode;
}

export interface TableHeadingRect {
  offsetWidth: number;
  offsetLeft: number;
}

const SCROLL_BAR_PADDING = 4;
const SIXTY_FPS = 1000 / 60;
const SCROLL_BAR_DEBOUNCE_PERIOD = 300;
const SMALL_SCREEN_WIDTH = 458;

function IndexTableBase({
  headings,
  bulkActions = [],
  promotedBulkActions = [],
  children,
  emptyState,
  sort,
}: IndexTableBaseProps) {
  const {
    loading,
    bulkSelectState,
    resourceName,
    bulkActionsAccessibilityLabel,
    selectMode,
    paginatedSelectAllText,
    itemCount,
    hasMoreItems,
    selectedItemsCount,
    condensed,
  } = useIndexValue();
  const handleSelectionChange = useIndexSelectionChange();
  const i18n = useI18n();

  const {
    value: hasMoreLeftColumns,
    toggle: toggleHasMoreLeftColumns,
  } = useToggle(false);

  const onboardingScrollButtons = useRef(false);
  const tablePosition = useRef({top: 0, left: 0});
  const tableHeadingRects = useRef<TableHeadingRect[]>([]);

  const scrollableContainerElement = useRef<HTMLDivElement>(null);
  const tableElement = useRef<HTMLTableElement>(null);
  const condensedListElement = useRef<HTMLUListElement>(null);

  const [tableInitialized, setTableInitialized] = useState(false);
  const [isSmallScreenSelectable, setIsSmallScreenSelectable] = useState(false);
  const [stickyWrapper, setStickyWrapper] = useState<HTMLElement | null>(null);

  const tableHeadings = useRef<HTMLElement[]>([]);
  const stickyTableHeadings = useRef<HTMLElement[]>([]);
  const stickyHeaderWrapperElement = useRef<HTMLDivElement>(null);
  const stickyHeaderCheckboxElement = useRef<HTMLDivElement>(null);
  const stickyHeaderElement = useRef<HTMLDivElement>(null);
  const scrollBarElement = useRef<HTMLDivElement>(null);
  const scrollingWithBar = useRef(false);
  const scrollingContainer = useRef(false);

  const tableBodyRef = useCallback(
    (node) => {
      if (node !== null && !tableInitialized) {
        setTableInitialized(true);
      }
    },
    [tableInitialized],
  );

  const toggleIsSmallScreenSelectable = useCallback(() => {
    setIsSmallScreenSelectable((value) => !value);
  }, []);

  const handleSelectAllItemsInStore = useCallback(() => {
    handleSelectionChange(
      selectedItemsCount === SELECT_ALL_ITEMS
        ? SelectionType.Page
        : SelectionType.All,
      true,
    );
  }, [handleSelectionChange, selectedItemsCount]);

  const calculateFirstHeaderOffset = useCallback(() => {
    return condensed
      ? tableHeadingRects.current[0].offsetWidth
      : tableHeadingRects.current[0].offsetWidth +
          tableHeadingRects.current[1].offsetWidth;
  }, [condensed]);

  const resizeTableHeadings = useMemo(
    () =>
      debounce(
        () => {
          if (!tableElement.current || !scrollableContainerElement.current) {
            return;
          }

          const boundingRect = scrollableContainerElement.current.getBoundingClientRect();
          tablePosition.current = {
            top: boundingRect.top,
            left: boundingRect.left,
          };

          tableHeadingRects.current = tableHeadings.current.map((heading) => ({
            offsetWidth: heading.offsetWidth || 0,
            offsetLeft: heading.offsetLeft || 0,
          }));

          if (tableHeadings.current.length === 0) {
            return;
          }

          // update left offset for first column
          if (tableHeadings.current.length > 1)
            tableHeadings.current[1].style.left = `${tableHeadingRects.current[0].offsetWidth}px`;

          // update the min width of the checkbox to be the be the un-padded width of the first heading
          if (stickyHeaderCheckboxElement?.current) {
            const elementStyle = getComputedStyle(tableHeadings.current[0]);
            const boxWidth = tableHeadings.current[0].offsetWidth;
            stickyHeaderCheckboxElement.current.style.minWidth = `calc(${boxWidth}px - ${elementStyle.paddingLeft} - ${elementStyle.paddingRight} + 2px)`;
          }

          // update sticky header min-widths
          stickyTableHeadings.current.forEach((heading, index) => {
            let minWidth = 0;
            if (index === 0 && !isSmallScreen()) {
              minWidth = calculateFirstHeaderOffset();
            } else if (tableHeadingRects.current.length > index) {
              minWidth = tableHeadingRects.current[index].offsetWidth;
            }

            heading.style.minWidth = `${minWidth}px`;
          });
        },
        SIXTY_FPS,
        {leading: true, trailing: true, maxWait: SIXTY_FPS},
      ),
    [calculateFirstHeaderOffset],
  );

  const resizeTableScrollBar = useCallback(() => {
    if (scrollBarElement.current && tableElement.current && tableInitialized) {
      scrollBarElement.current.style.setProperty(
        '--p-scroll-bar-content-width',
        `${tableElement.current.offsetWidth - SCROLL_BAR_PADDING}px`,
      );
    }
  }, [tableInitialized]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceResizeTableScrollbar = useCallback(
    debounce(resizeTableScrollBar, SCROLL_BAR_DEBOUNCE_PERIOD, {
      trailing: true,
    }),
    [resizeTableScrollBar],
  );

  const handleResize = useCallback(() => {
    // hide the scrollbar when resizing
    scrollBarElement.current?.style.setProperty(
      '--p-scroll-bar-content-width',
      `0px`,
    );

    resizeTableHeadings();
    debounceResizeTableScrollbar();
  }, [debounceResizeTableScrollbar, resizeTableHeadings]);

  const handleScrollContainerScroll = useCallback(
    (canScrollLeft, canScrollRight) => {
      if (!scrollableContainerElement.current || !scrollBarElement.current) {
        return;
      }

      if (!scrollingWithBar.current) {
        scrollingContainer.current = true;
        scrollBarElement.current.scrollLeft =
          scrollableContainerElement.current.scrollLeft;
      }
      scrollingWithBar.current = false;

      if (stickyHeaderElement.current) {
        stickyHeaderElement.current.scrollLeft =
          scrollableContainerElement.current.scrollLeft;
      }

      if (
        (canScrollLeft && !hasMoreLeftColumns) ||
        (!canScrollLeft && hasMoreLeftColumns)
      ) {
        toggleHasMoreLeftColumns();
      }

      if (!canScrollRight) {
        onboardingScrollButtons.current = false;
      }
    },
    [hasMoreLeftColumns, toggleHasMoreLeftColumns],
  );

  const handleScrollBarScroll = useCallback(() => {
    if (!scrollableContainerElement.current || !scrollBarElement.current) {
      return;
    }

    if (!scrollingContainer.current) {
      scrollingWithBar.current = true;
      scrollableContainerElement.current.scrollLeft =
        scrollBarElement.current.scrollLeft;
    }
    scrollingContainer.current = false;
  }, []);

  useEffect(() => {
    tableHeadings.current = getTableHeadingsBySelector(
      tableElement.current,
      '[data-index-table-heading]',
    );
    stickyTableHeadings.current = getTableHeadingsBySelector(
      stickyHeaderWrapperElement.current,
      '[data-index-table-sticky-heading]',
    );
    resizeTableHeadings();
  }, [
    headings,
    resizeTableHeadings,
    stickyHeaderCheckboxElement,
    tableInitialized,
  ]);

  useEffect(() => {
    resizeTableScrollBar();
    setStickyWrapper(
      condensed ? condensedListElement.current : tableElement.current,
    );
  }, [tableInitialized, resizeTableScrollBar, condensed]);

  useEffect(() => {
    if (!condensed && isSmallScreenSelectable) {
      setIsSmallScreenSelectable(false);
    }
  }, [condensed, isSmallScreenSelectable]);

  const selectable = Boolean(
    (promotedBulkActions && promotedBulkActions.length > 0) ||
      (bulkActions && bulkActions.length > 0),
  );

  const headingsMarkup = headings
    .map(renderHeading)
    .reduce<JSX.Element[]>((acc, heading) => acc.concat(heading), []);

  const bulkActionsSelectable = Boolean(
    promotedBulkActions.length > 0 || bulkActions.length > 0,
  );

  const stickyColumnHeaderStyle =
    tableHeadingRects.current && tableHeadingRects.current.length > 0
      ? {
          minWidth: calculateFirstHeaderOffset(),
        }
      : undefined;

  const stickyColumnHeader = (
    <div
      className={styles.TableHeading}
      key={headings[0].title}
      style={stickyColumnHeaderStyle}
      data-index-table-sticky-heading
    >
      <Stack spacing="none" wrap={false} alignment="center">
        <div
          className={styles.StickyColumnHeaderCheckbox}
          ref={stickyHeaderCheckboxElement}
        >
          {renderCheckboxContent()}
        </div>
        <div className={styles['StickyTableHeading-second-scrolling']}>
          {renderHeadingContent(headings[0])}
        </div>
      </Stack>
    </div>
  );
  const stickyHeadingsMarkup = headings.map(renderStickyHeading);

  const selectedItemsCountLabel =
    selectedItemsCount === SELECT_ALL_ITEMS
      ? `${itemCount}+`
      : selectedItemsCount;

  const handleTogglePage = useCallback(() => {
    handleSelectionChange(
      SelectionType.Page,
      Boolean(!bulkSelectState || bulkSelectState === 'indeterminate'),
    );
  }, [bulkSelectState, handleSelectionChange]);

  const paginatedSelectAllAction = getPaginatedSelectAllAction();

  const loadingTransitionClassNames = {
    enter: styles['LoadingContainer-enter'],
    enterActive: styles['LoadingContainer-enter-active'],
    exit: styles['LoadingContainer-exit'],
    exitActive: styles['LoadingContainer-exit-active'],
  };

  const loadingMarkup = (
    <CSSTransition
      in={loading}
      classNames={loadingTransitionClassNames}
      timeout={durationFast}
      appear
      unmountOnExit
    >
      <div className={styles.LoadingPanel}>
        <div className={styles.LoadingPanelRow}>
          <Spinner size="small" />
          <span className={styles.LoadingPanelText}>
            {i18n.translate(
              'Polaris.IndexTable.resourceLoadingAccessibilityLabel',
              {
                resourceNamePlural: resourceName.plural.toLocaleLowerCase(),
              },
            )}
          </span>
        </div>
      </div>
    </CSSTransition>
  );

  const stickyTableClassNames = classNames(
    styles.StickyTable,
    condensed && styles['StickyTable-condensed'],
  );

  const shouldShowBulkActions =
    (bulkActionsSelectable && selectedItemsCount) || isSmallScreenSelectable;

  const stickyHeaderMarkup = (
    <div className={stickyTableClassNames} role="presentation">
      <Sticky boundingElement={stickyWrapper}>
        {(isSticky: boolean) => {
          const stickyHeaderClassNames = classNames(
            styles.StickyTableHeader,
            isSticky && styles['StickyTableHeader-isSticky'],
          );

          const bulkActionClassNames = classNames(
            styles.BulkActionsWrapper,
            condensed && styles['StickyTableHeader-condensed'],
            isSticky && styles['StickyTableHeader-isSticky'],
          );

          const shouldShowActions = !condensed || selectedItemsCount;
          const promotedActions = shouldShowActions ? promotedBulkActions : [];
          const actions = shouldShowActions ? bulkActions : [];

          const bulkActionsMarkup = shouldShowBulkActions ? (
            <div className={bulkActionClassNames} data-condensed={condensed}>
              {loadingMarkup}
              <BulkActions
                smallScreen={condensed}
                label={i18n.translate('Polaris.IndexTable.selected', {
                  selectedItemsCount: selectedItemsCountLabel,
                })}
                accessibilityLabel={bulkActionsAccessibilityLabel}
                selected={bulkSelectState}
                selectMode={selectMode || isSmallScreenSelectable}
                onToggleAll={handleTogglePage}
                promotedActions={promotedActions}
                actions={actions}
                paginatedSelectAllText={paginatedSelectAllText}
                paginatedSelectAllAction={paginatedSelectAllAction}
                onSelectModeToggle={
                  condensed ? handleSelectModeToggle : undefined
                }
              />
            </div>
          ) : null;

          const stickyColumnHeaderClassNames = classNames(
            styles.StickyTableColumnHeader,
            hasMoreLeftColumns && styles['StickyTableColumnHeader-isScrolling'],
          );

          const headerMarkup = condensed ? (
            <div className={styles.HeaderWrapper}>
              {loadingMarkup}
              {sort}
              <Button
                icon={EnableSelectionMinor}
                onClick={toggleIsSmallScreenSelectable}
              >
                {i18n.translate('Polaris.IndexTable.selectButtonText')}
              </Button>
            </div>
          ) : (
            <div
              className={stickyHeaderClassNames}
              ref={stickyHeaderWrapperElement}
            >
              {loadingMarkup}
              <div className={stickyColumnHeaderClassNames}>
                {stickyColumnHeader}
              </div>
              <div
                className={styles.StickyTableHeadings}
                ref={stickyHeaderElement}
              >
                {stickyHeadingsMarkup}
              </div>
            </div>
          );

          const stickyContent = bulkActionsMarkup
            ? bulkActionsMarkup
            : headerMarkup;

          return stickyContent;
        }}
      </Sticky>
    </div>
  );

  const scrollBarWrapperClassNames = classNames(
    styles.ScrollBarContainer,
    condensed && styles.scrollBarContainerCondensed,
  );

  const scrollBarClassNames = classNames(
    tableElement.current && tableInitialized && styles.ScrollBarContent,
  );

  const scrollBarMarkup =
    itemCount > 0 ? (
      <AfterInitialMount>
        <div className={scrollBarWrapperClassNames}>
          <div
            onScroll={handleScrollBarScroll}
            className={styles.ScrollBar}
            ref={scrollBarElement}
          >
            <div className={scrollBarClassNames} />
          </div>
        </div>
      </AfterInitialMount>
    ) : null;

  const tableClassNames = classNames(
    styles.Table,
    hasMoreLeftColumns && styles['Table-scrolling'],
    selectMode && styles.disableTextSelection,
    selectMode && shouldShowBulkActions && styles.selectMode,
  );

  const emptyStateMarkup = emptyState ? (
    emptyState
  ) : (
    <EmptySearchResult
      title={i18n.translate('Polaris.IndexTable.emptySearchTitle', {
        resourceNamePlural: resourceName.plural,
      })}
      description={i18n.translate('Polaris.IndexTable.emptySearchDescription')}
      withIllustration
    />
  );

  const sharedMarkup = (
    <>
      <EventListener event="resize" handler={handleResize} />
      <AfterInitialMount>{stickyHeaderMarkup}</AfterInitialMount>
    </>
  );
  const bodyMarkup = condensed ? (
    <>
      {sharedMarkup}
      <ul
        data-selectmode={Boolean(selectMode || isSmallScreenSelectable)}
        className={styles.CondensedList}
        ref={condensedListElement}
      >
        {children}
      </ul>
    </>
  ) : (
    <>
      {sharedMarkup}
      <ScrollContainer
        scrollableContainerRef={scrollableContainerElement}
        onScroll={handleScrollContainerScroll}
      >
        <table ref={tableElement} className={tableClassNames}>
          <thead>
            <tr className={styles.HeadingRow}>{headingsMarkup}</tr>
          </thead>
          <tbody ref={tableBodyRef}>{children}</tbody>
        </table>
      </ScrollContainer>
    </>
  );
  const tableContentMarkup =
    itemCount > 0 ? (
      bodyMarkup
    ) : (
      <div className={styles.EmptySearchResultWrapper}>{emptyStateMarkup}</div>
    );

  return (
    <>
      <div className={styles.IndexTable}>
        {!shouldShowBulkActions && !condensed && loadingMarkup}
        {tableContentMarkup}
      </div>
      {scrollBarMarkup}
    </>
  );

  function renderHeading(heading: IndexTableHeading, index: number) {
    const isSecond = index === 0;
    const headingContentClassName = classNames(
      styles.TableHeading,
      isSecond && styles['TableHeading-second'],
    );

    const stickyPositioningStyle =
      isSecond &&
      tableHeadingRects.current &&
      tableHeadingRects.current.length > 0
        ? {left: tableHeadingRects.current[0].offsetWidth}
        : undefined;

    const headingContent = (
      <th
        className={headingContentClassName}
        key={heading.title}
        data-index-table-heading
        style={stickyPositioningStyle}
      >
        {renderHeadingContent(heading)}
      </th>
    );

    if (index !== 0) return headingContent;

    const checkboxClassName = classNames(
      styles.TableHeading,
      index === 0 && styles['TableHeading-first'],
    );

    const checkboxContent = (
      <th
        className={checkboxClassName}
        key={`${heading}-${index}`}
        data-index-table-heading
      >
        {renderCheckboxContent()}
      </th>
    );

    return [checkboxContent, headingContent];
  }

  function renderCheckboxContent() {
    return (
      <div className={styles.ColumnHeaderCheckboxWrapper}>
        <PolarisCheckbox
          label={i18n.translate('Polaris.IndexTable.selectAllLabel', {
            resourceNamePlural: resourceName.plural,
          })}
          labelHidden
          onChange={handleSelectPage}
          checked={bulkSelectState}
        />
      </div>
    );
  }

  function renderHeadingContent(heading: IndexTableHeading) {
    let headingContent;

    if (heading.new) {
      headingContent = (
        <Stack wrap={false} alignment="center">
          <span>{heading.title}</span>
          <Badge status="new">
            {i18n.translate('Polaris.IndexTable.onboardingBadgeText')}
          </Badge>
        </Stack>
      );
    } else if (heading.hidden) {
      headingContent = <VisuallyHidden>{heading.title}</VisuallyHidden>;
    } else {
      headingContent = heading.title;
    }
    return headingContent;
  }

  function handleSelectPage(checked: boolean) {
    handleSelectionChange(SelectionType.Page, checked);
  }

  function renderStickyHeading(heading: IndexTableHeading, index: number) {
    const position = index + 1;
    const headingStyle =
      tableHeadingRects.current && tableHeadingRects.current.length > position
        ? {minWidth: tableHeadingRects.current[position].offsetWidth}
        : undefined;

    const headingContent = renderHeadingContent(heading);
    const stickyHeadingClassName = classNames(
      styles.TableHeading,
      index === 0 && styles['StickyTableHeading-second'],
    );

    return (
      <div
        className={stickyHeadingClassName}
        key={heading.title}
        style={headingStyle}
        data-index-table-sticky-heading
      >
        {headingContent}
      </div>
    );
  }

  function getPaginatedSelectAllAction() {
    if (!selectable || !hasMoreItems) {
      return;
    }

    const actionText =
      selectedItemsCount === SELECT_ALL_ITEMS
        ? i18n.translate('Polaris.IndexTable.undo')
        : i18n.translate('Polaris.IndexTable.selectAllItems', {
            itemsLength: itemCount,
            resourceNamePlural: resourceName.plural.toLocaleLowerCase(),
          });

    return {
      content: actionText,
      onAction: handleSelectAllItemsInStore,
    };
  }

  function handleSelectModeToggle(val: boolean) {
    handleSelectionChange(SelectionType.All, false);
    setIsSmallScreenSelectable(val);
  }
}

const isSmallScreen = () => {
  return typeof window === 'undefined'
    ? false
    : window.innerWidth < SMALL_SCREEN_WIDTH;
};

export interface IndexTableProps
  extends IndexTableBaseProps,
    IndexProviderProps {}

export function IndexTable({
  children,
  selectable,
  itemCount,
  selectedItemsCount,
  resourceName: passedResourceName,
  loading,
  hasMoreItems,
  condensed,
  onSelectionChange,
  ...indexTableBaseProps
}: IndexTableProps) {
  return (
    <IndexProvider
      selectable={selectable}
      itemCount={itemCount}
      selectedItemsCount={selectedItemsCount}
      resourceName={passedResourceName}
      loading={loading}
      hasMoreItems={hasMoreItems}
      condensed={condensed}
      onSelectionChange={onSelectionChange}
    >
      <IndexTableBase {...indexTableBaseProps}>{children}</IndexTableBase>
    </IndexProvider>
  );
}

IndexTable.Cell = Cell;
IndexTable.Row = Row;
IndexTable.Link = Link;
