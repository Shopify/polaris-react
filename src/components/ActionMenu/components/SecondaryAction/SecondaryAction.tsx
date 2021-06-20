import React, {forwardRef, useEffect, useRef} from 'react';

import {Button} from '../../../Button';
import type {ButtonProps} from '../../../Button';

import styles from './SecondaryAction.scss';

interface SecondaryAction extends ButtonProps {
  onAction?(): void;
  getOffsetWidth?(width: number): void;
}

export const SecondaryAction = forwardRef<HTMLButtonElement, SecondaryAction>(
  function SecondaryActionComponent(
    {children, onAction, getOffsetWidth, ...rest}: SecondaryAction,
    actionRef,
  ) {
    const secondaryActionsRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      if (!getOffsetWidth || !secondaryActionsRef.current) return;

      getOffsetWidth(secondaryActionsRef.current?.offsetWidth);
    }, [getOffsetWidth]);

    return (
      <span className={styles.SecondaryAction} ref={secondaryActionsRef}>
        <Button onClick={onAction} {...rest} ref={actionRef}>
          {children}
        </Button>
      </span>
    );
  },
);
