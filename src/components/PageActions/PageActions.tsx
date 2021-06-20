import React from 'react';

import type {
  ComplexAction,
  DisableableAction,
  LoadableAction,
  RefAction,
} from '../../types';
import {Stack} from '../Stack';
import {ButtonGroup} from '../ButtonGroup';
import {buttonsFrom} from '../Button';

import styles from './PageActions.scss';

export interface PageActionsProps {
  /** The primary action for the page */
  primaryAction?: DisableableAction & LoadableAction & RefAction;
  /** The secondary actions for the page */
  secondaryActions?: ComplexAction[];
}

export function PageActions({
  primaryAction,
  secondaryActions,
}: PageActionsProps) {
  const primaryActionMarkup = primaryAction
    ? buttonsFrom(primaryAction, {primary: true})
    : null;

  const secondaryActionsMarkup = secondaryActions ? (
    <ButtonGroup>{buttonsFrom(secondaryActions)}</ButtonGroup>
  ) : null;

  const distribution = secondaryActionsMarkup ? 'equalSpacing' : 'trailing';

  return (
    <div className={styles.PageActions}>
      <Stack distribution={distribution} spacing="tight">
        {secondaryActionsMarkup}
        {primaryActionMarkup}
      </Stack>
    </div>
  );
}
