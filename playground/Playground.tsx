import React, {RefObject, useCallback, useState} from 'react';

import {Page, PageActions, PageProps} from '../src';

import {DeleteModal} from './DeleteModal';

export function Playground() {
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isSaveModalVisible, setSaveModalVisible] = useState(false);
  const [isCreateModalVisible, setCreateModalVisible] = useState(false);
  const [isExportModalVisible, setExportModalVisible] = useState(false);

  const [deleteButtonRef, setDeleteButtonRef] = useState<RefObject<
    HTMLButtonElement
  > | null>(null);
  const deleteBtnCallback = useCallback((element) => {
    setDeleteButtonRef({current: element});
  }, []);
  const [saveButtonRef, setSaveButtonRef] = useState<RefObject<
    HTMLButtonElement
  > | null>(null);
  const saveBtnCallback = useCallback((element) => {
    setSaveButtonRef({current: element});
  }, []);

  const [createButtonRef, setCreateButtonRef] = useState<RefObject<
    HTMLButtonElement
  > | null>(null);
  const createBtnCallback = useCallback((element) => {
    setCreateButtonRef({current: element});
  }, []);
  const [exportButtonRef, setExportButtonRef] = useState<RefObject<
    HTMLButtonElement
  > | null>(null);
  const exportBtnCallback = useCallback((element) => {
    setExportButtonRef({current: element});
  }, []);
  const pageProps: PageProps = {
    title: 'Page, yes',
    fullWidth: true,
    primaryAction: {
      content: 'Create',
      onAction: () => {
        setCreateModalVisible(true);
      },
      ref: createBtnCallback,
    },
    secondaryActions: [
      {
        content: 'Export',
        onAction: () => {
          setExportModalVisible(true);
        },
        ref: exportBtnCallback,
      },
    ],
  };

  return (
    <Page title="Playground" {...pageProps}>
      <DeleteModal
        activator={deleteButtonRef ?? undefined}
        title="Delete me"
        open={isDeleteModalVisible}
        onClose={() => {
          setDeleteModalVisible(false);
        }}
      />
      <DeleteModal
        activator={saveButtonRef ?? undefined}
        title="Save me"
        open={isSaveModalVisible}
        onClose={() => {
          setSaveModalVisible(false);
        }}
      />
      <DeleteModal
        activator={createButtonRef ?? undefined}
        title="Create me"
        open={isCreateModalVisible}
        onClose={() => {
          setCreateModalVisible(false);
        }}
      />
      <DeleteModal
        activator={exportButtonRef ?? undefined}
        title="Export me"
        open={isExportModalVisible}
        onClose={() => {
          setExportModalVisible(false);
        }}
      />
      <PageActions
        primaryAction={{
          content: 'Save',
          disabled: false,
          onAction: () => setSaveModalVisible(true),
          ref: saveBtnCallback,
        }}
        secondaryActions={[
          {
            content: 'Delete',
            outline: true,
            destructive: true,
            onAction: () => setDeleteModalVisible(true),
            ref: deleteBtnCallback,
          },
        ]}
      />
    </Page>
  );
}
