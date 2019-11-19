import React, {useCallback} from 'react';

import {getWidth} from '../../../../utilities/get-width';

import {ContextualSaveBarProps} from '../../../../utilities/frame';
import {Button} from '../../../Button';
import {useI18n} from '../../../../utilities/i18n';
import {useTheme} from '../../../../utilities/theme';
import {useForcibleToggle} from '../../../../utilities/use-toggle';
import {Image} from '../../../Image';
import {Stack} from '../../../Stack';

import {DiscardConfirmationModal} from './components';

import styles from './ContextualSaveBar.scss';

export function ContextualSaveBar({
  alignContentFlush,
  message,
  saveAction,
  discardAction,
}: ContextualSaveBarProps) {
  const i18n = useI18n();
  const {logo} = useTheme();

  const [
    discardConfirmationModalVisible,
    {
      toggle: toggleDiscardConfirmationModal,
      forceFalse: closeDiscardConfirmationModal,
    },
  ] = useForcibleToggle(false);

  const handleDiscardAction = useCallback(() => {
    if (discardAction && discardAction.onAction) {
      discardAction.onAction();
    }
    closeDiscardConfirmationModal();
  }, [closeDiscardConfirmationModal, discardAction]);

  const discardActionContent =
    discardAction && discardAction.content
      ? discardAction.content
      : i18n.translate('Polaris.ContextualSaveBar.discard');

  let discardActionHandler;
  if (discardAction && discardAction.discardConfirmationModal) {
    discardActionHandler = toggleDiscardConfirmationModal;
  } else if (discardAction) {
    discardActionHandler = discardAction.onAction;
  }

  const discardConfirmationModalMarkup = discardAction &&
    discardAction.onAction &&
    discardAction.discardConfirmationModal && (
      <DiscardConfirmationModal
        open={discardConfirmationModalVisible}
        onCancel={toggleDiscardConfirmationModal}
        onDiscard={handleDiscardAction}
      />
    );

  const messageMarkup = message
    ? message
    : i18n.translate('Polaris.ContextualSaveBar.message');

  const discardActionMarkup = discardAction && (
    <Button
      url={discardAction.url}
      onClick={discardActionHandler}
      loading={discardAction.loading}
      disabled={discardAction.disabled}
      accessibilityLabel={discardAction.content}
    >
      {discardActionContent}
    </Button>
  );

  const saveActionContent =
    saveAction && saveAction.content
      ? saveAction.content
      : i18n.translate('Polaris.ContextualSaveBar.save');

  const saveActionMarkup = saveAction && (
    <Button
      primary
      url={saveAction.url}
      onClick={saveAction.onAction}
      loading={saveAction.loading}
      disabled={saveAction.disabled}
      accessibilityLabel={saveAction.content}
    >
      {saveActionContent}
    </Button>
  );

  const width = getWidth(logo, 104);

  const imageMarkup = logo && (
    <Image style={{width}} source={logo.contextualSaveBarSource || ''} alt="" />
  );

  const logoMarkup = alignContentFlush ? null : (
    <div className={styles.LogoContainer} style={{width}}>
      {imageMarkup}
    </div>
  );

  return (
    <React.Fragment>
      <div className={styles.ContextualSaveBar}>
        {logoMarkup}
        <div className={styles.Contents}>
          <h2 className={styles.Message}>{messageMarkup}</h2>
          <div className={styles.ActionContainer}>
            <Stack spacing="tight" wrap={false}>
              {discardActionMarkup}
              {saveActionMarkup}
            </Stack>
          </div>
        </div>
      </div>
      {discardConfirmationModalMarkup}
    </React.Fragment>
  );
}
