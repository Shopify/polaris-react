import React, {
  memo,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from 'react';

import {classNames} from '../../../../utilities/css';
import {useI18n} from '../../../../utilities/i18n';
import {useIndexValue} from '../../../../utilities/index-provider';
import {RowContext} from '../../../../utilities/index-table';
import {setRootProperty} from '../../../../utilities/set-root-property';
import {Checkbox as PolarisCheckbox} from '../../../Checkbox';
import sharedStyles from '../../IndexTable.scss';

import styles from './Checkbox.scss';

interface CheckboxProps {
  rowSpan?: number;
}

export const Checkbox = memo(function Checkbox({rowSpan}: CheckboxProps) {
  const i18n = useI18n();
  const {resourceName, condensed} = useIndexValue();
  const {itemId, selected, onInteraction} = useContext(RowContext);

  const wrapperClassName = classNames(
    styles.Wrapper,
    condensed ? styles.condensed : styles.expanded,
  );

  const children = (
    <div className={styles.TableCellContentContainer}>
      <div
        className={wrapperClassName}
        onClick={onInteraction}
        onKeyUp={onInteraction}
        onChange={stopPropagation}
      >
        <PolarisCheckbox
          id={itemId}
          label={i18n.translate('Polaris.IndexTable.selectItem', {
            resourceName: resourceName.singular,
          })}
          labelHidden
          checked={selected}
        />
      </div>
    </div>
  );

  return condensed ? (
    children
  ) : (
    <CheckboxWrapper rowSpan={rowSpan}>{children}</CheckboxWrapper>
  );
});

interface CheckboxWrapperProps {
  children: ReactNode;
  rowSpan?: number;
}

export function CheckboxWrapper({children, rowSpan}: CheckboxWrapperProps) {
  const checkboxNode = useRef<HTMLTableDataCellElement>(null);

  const handleResize = useCallback(() => {
    if (!checkboxNode.current) return;

    const {width} = checkboxNode.current.getBoundingClientRect();
    setRootProperty('--p-checkbox-offset', `${width}px`, null);
  }, []);

  useEffect(() => {
    handleResize();
  }, [handleResize]);

  useEffect(() => {
    if (!checkboxNode.current) return;
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const checkboxClassName = classNames(
    sharedStyles.TableCell,
    sharedStyles['TableCell-first'],
  );

  return (
    <td className={checkboxClassName} ref={checkboxNode} rowSpan={rowSpan}>
      {children}
    </td>
  );
}

function stopPropagation(
  event: React.MouseEvent | React.KeyboardEvent | React.FormEvent,
) {
  event.stopPropagation();
}
