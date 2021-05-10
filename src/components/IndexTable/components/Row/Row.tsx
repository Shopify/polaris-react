import React, {useMemo, memo, useRef, useCallback} from 'react';

import {useToggle} from '../../../../utilities/use-toggle';
import {
  useIndexRow,
  SelectionType,
  useIndexSelectionChange,
} from '../../../../utilities/index-provider';
import {Checkbox} from '../Checkbox';
import {classNames} from '../../../../utilities/css';
import {RowContext, RowHoveredContext} from '../../../../utilities/index-table';
import styles from '../../IndexTable.scss';

export interface RowProps {
  children: React.ReactNode;
  subrows?: React.ReactNode[];
  id: string;
  selected: boolean;
  position: number;
  subdued?: boolean;
  onNavigation?(id: string): void;
}

export const Row = memo(function Row({
  children,
  selected,
  id,
  position,
  subdued,
  onNavigation,
  subrows,
}: RowProps) {
  const {selectMode, condensed} = useIndexRow();
  const onSelectionChange = useIndexSelectionChange();
  const {
    value: hovered,
    setTrue: setHoverIn,
    setFalse: setHoverOut,
  } = useToggle(false);

  const rowClassName = classNames(
    styles.TableRow,
    condensed && styles.condensedRow,
    selected && styles['TableRow-selected'],
    subdued && styles['TableRow-subdued'],
    hovered && styles['TableRow-hovered'],
  );

  const handleInteraction = useCallback(
    (event: React.MouseEvent | React.KeyboardEvent) => {
      event.stopPropagation();
      if (('key' in event && event.key !== ' ') || !onSelectionChange) return;
      const selectionType = event.nativeEvent.shiftKey
        ? SelectionType.Multi
        : SelectionType.Single;

      onSelectionChange(selectionType, !selected, id, position);
    },
    [id, onSelectionChange, position, selected],
  );

  const contextValue = useMemo(
    () => ({
      itemId: id,
      selected,
      onInteraction: handleInteraction,
    }),
    [id, selected, handleInteraction],
  );

  const tableRowRef = useRef<HTMLTableRowElement & HTMLLIElement>(null);
  const isNavigating = useRef<boolean>(false);

  const handleRowClick = (event: React.MouseEvent) => {
    if (!tableRowRef.current || isNavigating.current) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const primaryLinkElement = tableRowRef.current.querySelector(
      '[data-primary-link]',
    );

    if (primaryLinkElement && !selectMode) {
      isNavigating.current = true;
      const {ctrlKey, metaKey} = event.nativeEvent;

      if (onNavigation) {
        onNavigation(id);
      }

      if (
        (ctrlKey || metaKey) &&
        primaryLinkElement instanceof HTMLAnchorElement
      ) {
        isNavigating.current = false;
        window.open(primaryLinkElement.href, '_blank');
        return;
      }

      primaryLinkElement.dispatchEvent(
        new MouseEvent(event.type, event.nativeEvent),
      );
    } else {
      isNavigating.current = false;
      handleInteraction(event);
    }
  };

  const RowWrapper = condensed ? 'li' : 'tr';

  const content = subrows ? (
    subrows.map((subrow, subrowIndex) => (
      <RowWrapper
        key={`${id}/${subrowIndex}`}
        className={classNames(
          rowClassName,
          styles['TableRow-subrow'],
          subrowIndex === 0 && selected && styles['TableRow-subrow'],
          subrowIndex === 0 && styles['TableRow-subrow-start'],
          subrowIndex === subrows.length - 1 && styles['TableRow-subrow-end'],
        )}
        onMouseEnter={setHoverIn}
        onMouseLeave={setHoverOut}
        onClick={handleRowClick}
        ref={tableRowRef}
      >
        {subrowIndex === 0 && <Checkbox rowSpan={subrows.length} />}
        {subrow}
      </RowWrapper>
    ))
  ) : (
    <RowWrapper
      key={id}
      className={rowClassName}
      onMouseEnter={setHoverIn}
      onMouseLeave={setHoverOut}
      onClick={handleRowClick}
      ref={tableRowRef}
    >
      <Checkbox />
      {children}
    </RowWrapper>
  );

  return (
    <RowContext.Provider value={contextValue}>
      <RowHoveredContext.Provider value={hovered}>
        {content}
      </RowHoveredContext.Provider>
    </RowContext.Provider>
  );
});
