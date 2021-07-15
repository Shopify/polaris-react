import React from 'react';

import {DisplayText} from '../../../DisplayText';
import {classNames} from '../../../../utilities/css';
import {onSpaceOrEnter} from '../../shared';

import * as styles from './Digit.scss';

interface DigitProps {
  value: string;
  isMinute?: boolean;
  isActive?: boolean;
  isParentDragging?: boolean;
  onAction: (showMinutes?: boolean) => void;
}

export function Digit({
  value,
  isMinute,
  isActive,
  isParentDragging,
  onAction,
}: DigitProps) {
  return (
    <div
      className={classNames(
        styles.DigitContainer,
        isMinute ? styles.DigitContainerMinute : styles.DigitContainerHour,
        isActive && styles.DigitContainerActive,
      )}
    >
      <DisplayText size="small">
        <span className={styles.Digit}>
          <span
            className={classNames(
              styles.DigitContent,
              isActive && styles.ActiveDigitContent,
            )}
            role="button"
            tabIndex={0}
            onClick={() => onAction()}
            onKeyPress={(event) => onSpaceOrEnter(event.which, onAction)}
            onMouseEnter={(event) => {
              if (isParentDragging) {
                onAction(true);
                event.target.focus();
              }
            }}
          >
            {value}
          </span>
        </span>
      </DisplayText>
    </div>
  );
}
