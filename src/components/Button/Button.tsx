import React, {forwardRef, useCallback, useState} from 'react';
import {
  CaretDownMinor,
  CaretUpMinor,
  SelectMinor,
} from '@shopify/polaris-icons';

import type {BaseButton, ConnectedDisclosure, IconSource} from '../../types';
import {classNames, variationName} from '../../utilities/css';
import {
  handleMouseUpByBlurring,
  MouseUpBlurHandler,
} from '../../utilities/focus';
import {useI18n} from '../../utilities/i18n';
import {Icon} from '../Icon';
import {Spinner} from '../Spinner';
import {Popover} from '../Popover';
import {ActionList} from '../ActionList';
import {UnstyledButton, UnstyledButtonProps} from '../UnstyledButton';

import styles from './Button.scss';

export interface ButtonProps extends BaseButton {
  /** The content to display inside the button */
  children?: string | string[];
  /** Provides extra visual weight and identifies the primary action in a set of buttons */
  primary?: boolean;
  /** Indicates a dangerous or potentially negative action */
  destructive?: boolean;
  /**
   * Changes the size of the button, giving it more or less padding
   * @default 'medium'
   */
  size?: 'slim' | 'medium' | 'large';
  /** Changes the inner text alignment of the button */
  textAlign?: 'left' | 'right' | 'center';
  /** Gives the button a subtle alternative to the default button styling, appropriate for certain backdrops */
  outline?: boolean;
  /** Allows the button to grow to the width of its container */
  fullWidth?: boolean;
  /** Displays the button with a disclosure icon. Defaults to `down` when set to true */
  disclosure?: 'down' | 'up' | 'select' | boolean;
  /** Renders a button that looks like a link */
  plain?: boolean;
  /** Makes `plain` and `outline` Button colors (text, borders, icons) the same as the current text color. Also adds an underline to `plain` Buttons */
  monochrome?: boolean;
  /** Removes underline from button text (including on interaction) when `monochrome` and `plain` are true */
  removeUnderline?: boolean;
  /** Icon to display to the left of the button content */
  icon?: React.ReactElement | IconSource;
  /** Disclosure button connected right of the button. Toggles a popover action list. */
  connectedDisclosure?: ConnectedDisclosure;
}

interface CommonButtonProps
  extends Pick<
    ButtonProps,
    | 'id'
    | 'accessibilityLabel'
    | 'ariaDescribedBy'
    | 'role'
    | 'onClick'
    | 'onFocus'
    | 'onBlur'
    | 'onMouseEnter'
    | 'onTouchStart'
  > {
  className: UnstyledButtonProps['className'];
  onMouseUp: MouseUpBlurHandler;
}

type LinkButtonProps = Pick<ButtonProps, 'url' | 'external' | 'download'>;

type ActionButtonProps = Pick<
  ButtonProps,
  | 'submit'
  | 'disabled'
  | 'loading'
  | 'ariaControls'
  | 'ariaExpanded'
  | 'pressed'
  | 'onKeyDown'
  | 'onKeyUp'
  | 'onKeyPress'
>;

const DEFAULT_SIZE = 'medium';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      id,
      children,
      url,
      disabled,
      external,
      download,
      submit,
      loading,
      pressed,
      accessibilityLabel,
      role,
      ariaControls,
      ariaExpanded,
      ariaDescribedBy,
      onClick,
      onFocus,
      onBlur,
      onKeyDown,
      onKeyPress,
      onKeyUp,
      onMouseEnter,
      onTouchStart,
      icon,
      primary,
      outline,
      destructive,
      disclosure,
      plain,
      monochrome,
      removeUnderline,
      size = DEFAULT_SIZE,
      textAlign,
      fullWidth,
      connectedDisclosure,
    }: ButtonProps,
    buttonRef,
  ) {
    const i18n = useI18n();

    const isDisabled = disabled || loading;

    const className = classNames(
      styles.Button,
      primary && styles.primary,
      outline && styles.outline,
      destructive && styles.destructive,
      isDisabled && styles.disabled,
      loading && styles.loading,
      plain && styles.plain,
      pressed && !disabled && !url && styles.pressed,
      monochrome && styles.monochrome,
      size && size !== DEFAULT_SIZE && styles[variationName('size', size)],
      textAlign && styles[variationName('textAlign', textAlign)],
      fullWidth && styles.fullWidth,
      icon && children == null && styles.iconOnly,
      connectedDisclosure && styles.connectedDisclosure,
      removeUnderline && styles.removeUnderline,
    );

    const disclosureMarkup = disclosure ? (
      <span className={styles.Icon}>
        <div
          className={classNames(
            styles.DisclosureIcon,
            loading && styles.hidden,
          )}
        >
          <Icon
            source={
              loading ? 'placeholder' : getDisclosureIconSource(disclosure)
            }
          />
        </div>
      </span>
    ) : null;

    const iconSource = isIconSource(icon) ? (
      <Icon source={loading ? 'placeholder' : icon} />
    ) : (
      icon
    );
    const iconMarkup = iconSource ? (
      <span className={classNames(styles.Icon, loading && styles.hidden)}>
        {iconSource}
      </span>
    ) : null;

    const childMarkup = children ? (
      <span
        className={classNames(
          styles.Text,
          removeUnderline && styles.removeUnderline,
        )}
      >
        {children}
      </span>
    ) : null;

    const spinnerSVGMarkup = loading ? (
      <span className={styles.Spinner}>
        <Spinner
          size="small"
          accessibilityLabel={i18n.translate(
            'Polaris.Button.spinnerAccessibilityLabel',
          )}
        />
      </span>
    ) : null;

    const [disclosureActive, setDisclosureActive] = useState(false);
    const toggleDisclosureActive = useCallback(() => {
      setDisclosureActive((disclosureActive) => !disclosureActive);
    }, []);

    let connectedDisclosureMarkup;

    if (connectedDisclosure) {
      const connectedDisclosureClassName = classNames(
        styles.Button,
        primary && styles.primary,
        outline && styles.outline,
        size && size !== DEFAULT_SIZE && styles[variationName('size', size)],
        textAlign && styles[variationName('textAlign', textAlign)],
        destructive && styles.destructive,
        connectedDisclosure.disabled && styles.disabled,
        styles.iconOnly,
        styles.ConnectedDisclosure,
        monochrome && styles.monochrome,
      );

      const defaultLabel = i18n.translate(
        'Polaris.Button.connectedDisclosureAccessibilityLabel',
      );

      const {
        disabled,
        accessibilityLabel: disclosureLabel = defaultLabel,
      } = connectedDisclosure;

      const connectedDisclosureActivator = (
        <button
          type="button"
          className={connectedDisclosureClassName}
          disabled={disabled}
          aria-label={disclosureLabel}
          aria-describedby={ariaDescribedBy}
          onClick={toggleDisclosureActive}
          onMouseUp={handleMouseUpByBlurring}
        >
          <span className={styles.Icon}>
            <Icon source={CaretDownMinor} />
          </span>
        </button>
      );

      connectedDisclosureMarkup = (
        <Popover
          active={disclosureActive}
          onClose={toggleDisclosureActive}
          activator={connectedDisclosureActivator}
          preferredAlignment="right"
        >
          <ActionList
            items={connectedDisclosure.actions}
            onActionAnyItem={toggleDisclosureActive}
          />
        </Popover>
      );
    }

    const commonProps: CommonButtonProps = {
      id,
      className,
      accessibilityLabel,
      ariaDescribedBy,
      role,
      onClick,
      onFocus,
      onBlur,
      onMouseUp: handleMouseUpByBlurring,
      onMouseEnter,
      onTouchStart,
    };
    const linkProps: LinkButtonProps = {
      url,
      external,
      download,
    };
    const actionProps: ActionButtonProps = {
      submit,
      disabled: isDisabled,
      loading,
      ariaControls,
      ariaExpanded,
      pressed,
      onKeyDown,
      onKeyUp,
      onKeyPress,
    };

    const buttonMarkup = (
      <UnstyledButton
        ref={buttonRef}
        {...commonProps}
        {...linkProps}
        {...actionProps}
      >
        <span className={styles.Content}>
          {spinnerSVGMarkup}
          {iconMarkup}
          {childMarkup}
          {disclosureMarkup}
        </span>
      </UnstyledButton>
    );

    return connectedDisclosureMarkup ? (
      <div className={styles.ConnectedDisclosureWrapper}>
        {buttonMarkup}
        {connectedDisclosureMarkup}
      </div>
    ) : (
      buttonMarkup
    );
  },
);

function isIconSource(x: any): x is IconSource {
  return (
    typeof x === 'string' ||
    (typeof x === 'object' && x.body) ||
    typeof x === 'function'
  );
}

function getDisclosureIconSource(
  disclosure: NonNullable<ButtonProps['disclosure']>,
) {
  if (disclosure === 'select') {
    return SelectMinor;
  }

  return disclosure === 'up' ? CaretUpMinor : CaretDownMinor;
}
