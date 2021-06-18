import React, {useState} from 'react';

import {Popover} from '../../../Popover';
import {ActionList} from '../../../ActionList';
import {BulkActionButton} from '../BulkActionButton';
import type {MenuGroupDescriptor} from '../../../../types';

interface BulkActionsMenuProps extends MenuGroupDescriptor {
  isNewBadgeInBadgeActions: boolean;
}

export function BulkActionMenu({
  title,
  actions,
  isNewBadgeInBadgeActions,
}: BulkActionsMenuProps) {
  const [isVisible, setVisible] = useState<boolean>(false);

  const toggleMenuVisibility = () => {
    setVisible(!isVisible);
  };

  return (
    <>
      <Popover
        active={isVisible}
        activator={
          <BulkActionButton
            disclosure
            onAction={toggleMenuVisibility}
            content={title}
            indicator={isNewBadgeInBadgeActions}
          />
        }
        onClose={toggleMenuVisibility}
        preferInputActivator
      >
        <ActionList items={actions} onActionAnyItem={toggleMenuVisibility} />
      </Popover>
    </>
  );
}
