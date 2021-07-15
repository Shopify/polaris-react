import React from 'react';
import {HorizontalDotsMinor} from '@shopify/polaris-icons';

import type {
  ActionListSection,
  ActionListItemDescriptor,
} from '../../../../types';
import {useI18n} from '../../../../utilities/i18n';
import {useToggle} from '../../../../utilities/use-toggle';
import {ActionList} from '../../../ActionList';
import {Button} from '../../../Button';
import {Popover} from '../../../Popover';
import {Tooltip} from '../../../Tooltip';

import styles from './RollupActions.scss';

export interface RollupActionsProps {
  /** Accessibilty label override */
  accessibilityLabelOverride?: string;
  /** Collection of actions for the list */
  items?: ActionListItemDescriptor[];
  /** Collection of sectioned action items */
  sections?: ActionListSection[];
}

export function RollupActions({
  accessibilityLabelOverride,
  items = [],
  sections = [],
}: RollupActionsProps) {
  const i18n = useI18n();

  const {value: rollupOpen, toggle: toggleRollupOpen} = useToggle(false);

  if (items.length === 0 && sections.length === 0) {
    return null;
  }

  const accessibilityLabel = accessibilityLabelOverride
    ? accessibilityLabelOverride
    : i18n.translate('Polaris.ActionMenu.RollupActions.rollupButton');

  const activatorMarkup = (
    <div className={styles.RollupActivator}>
      <Tooltip content={accessibilityLabel}>
        <Button
          outline
          icon={HorizontalDotsMinor}
          accessibilityLabel={accessibilityLabel}
          onClick={toggleRollupOpen}
        />
      </Tooltip>
    </div>
  );

  return (
    <Popover
      active={rollupOpen}
      activator={activatorMarkup}
      preferredAlignment="right"
      onClose={toggleRollupOpen}
      hideOnPrint
    >
      <ActionList
        items={items}
        sections={sections}
        onActionAnyItem={toggleRollupOpen}
      />
    </Popover>
  );
}
