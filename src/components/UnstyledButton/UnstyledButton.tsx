import React, {forwardRef} from 'react';

import type {BaseButton} from '../../types';
import {handleMouseUpByBlurring} from '../../utilities/focus';
import {UnstyledLink} from '../UnstyledLink';

export interface UnstyledButtonProps extends BaseButton {
  /** The content to display inside the button */
  children?: React.ReactNode;
  /** A custom class name to apply styles to button */
  className?: string;
  [key: string]: any;
}

export const UnstyledButton = forwardRef<
  HTMLButtonElement,
  UnstyledButtonProps
>(function UnstyledButton(
  {
    id,
    children,
    className,
    url,
    external,
    download,
    submit,
    disabled,
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
    ...rest
  }: UnstyledButtonProps,
  buttonRef,
) {
  let buttonMarkup;

  const commonProps = {
    id,
    className,
    'aria-label': accessibilityLabel,
  };
  const interactiveProps = {
    ...commonProps,
    role,
    onClick,
    onFocus,
    onBlur,
    onMouseUp: handleMouseUpByBlurring,
    onMouseEnter,
    onTouchStart,
  };

  if (url) {
    buttonMarkup = disabled ? (
      // Render an `<a>` so toggling disabled/enabled state changes only the
      // `href` attribute instead of replacing the whole element.
      <a {...commonProps}>{children}</a>
    ) : (
      <UnstyledLink
        {...interactiveProps}
        url={url}
        external={external}
        download={download}
        {...rest}
      >
        {children}
      </UnstyledLink>
    );
  } else {
    buttonMarkup = (
      <button
        {...interactiveProps}
        type={submit ? 'submit' : 'button'}
        disabled={disabled}
        aria-busy={loading ? true : undefined}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        aria-describedby={ariaDescribedBy}
        aria-pressed={pressed}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onKeyPress={onKeyPress}
        ref={buttonRef}
        {...rest}
      >
        {children}
      </button>
    );
  }

  return buttonMarkup;
});
