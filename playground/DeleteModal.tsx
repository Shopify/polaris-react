import React from 'react';

import {Modal} from '../src';

export interface Props {
  activator?: React.RefObject<HTMLElement> | React.ReactElement;
  title: string;
  open: boolean;
  onClose(): void;
}

export function DeleteModal(props: Props) {
  const {activator, title, open, onClose} = props;

  return (
    <Modal
      activator={activator}
      title={title}
      open={open}
      secondaryActions={[
        {
          content: 'Cancel',
          onAction: onClose,
        },
        {
          content: 'Delete',
          onAction: () => {},
          destructive: true,
        },
      ]}
      onClose={onClose}
    >
      <Modal.Section>{title}</Modal.Section>
    </Modal>
  );
}
