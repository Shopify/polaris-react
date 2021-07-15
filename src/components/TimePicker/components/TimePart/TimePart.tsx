import React from 'react';

import {classNames} from '../../../../utilities/css';
import {onSpaceOrEnter} from '../../shared';

import * as styles from './TimePart.scss';

interface TimePartProps {
  value: string;
  isActive?: boolean;
  onAction: () => void;
}

export function TimePart({value, isActive, onAction}: TimePartProps) {
  return (
    <span
      role="button"
      tabIndex={0}
      onClick={onAction}
      onKeyPress={(event) => onSpaceOrEnter(event.which, onAction)}
      className={classNames(styles.TimePart, isActive && styles.TimePartActive)}
    >
      {value}
    </span>
  );
}
