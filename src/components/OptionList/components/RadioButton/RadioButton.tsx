import React from 'react';

import {useUniqueId} from '../../../../utilities/unique-id';

import styles from './RadioButton.scss';

export interface RadioButtonProps {
  checked?: boolean;
  disabled?: boolean;
  active?: boolean;
  id?: string;
  name?: string;
  value?: string;
  role?: string;
  onChange(): void;
}

export function RadioButton({
  id: idProp,
  checked = false,
  disabled,
  onChange,
  name,
  value,
  role,
}: RadioButtonProps) {
  const id = useUniqueId('RadioButton', idProp);

  return (
    <input
      id={id}
      name={name}
      value={value}
      type="radio"
      checked={checked}
      disabled={disabled}
      className={styles.Input}
      onChange={onChange}
      role={role}
    />
  );
}
