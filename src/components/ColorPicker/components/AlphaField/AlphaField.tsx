import React, {useCallback, useEffect, useState} from 'react';
import {clamp} from '@shopify/javascript-utilities/math';

import {useI18n} from '../../../../utilities/i18n';
import {TextField} from '../../../TextField';
import styles from '../../ColorPicker.scss';

export interface AlphaFieldProps {
  alpha: number;
  onChange(alpha: number): void;
}

export function AlphaField({alpha, onChange}: AlphaFieldProps) {
  const i18n = useI18n();

  const [percentage, setPercentage] = useState(
    clamp(Math.round(alpha * 100) || 0, 0, 100),
  );

  const label = i18n.translate(
    'Polaris.ColorPicker.alphaFieldAccessibilityLabel',
  );

  useEffect(() => {
    setPercentage(Math.round(alpha * 100));
  }, [alpha]);

  const handleTextChange = useCallback((value) => {
    setPercentage(value);
  }, []);

  const handleBlur = useCallback(() => {
    const normalizedPercentage = clamp(percentage, 0, 100);

    if (normalizedPercentage !== null) {
      setPercentage(normalizedPercentage);

      const alphaHasChanged = normalizedPercentage !== alpha * 100;

      if (alphaHasChanged) {
        onChange(normalizedPercentage / 100);
      }
    }
  }, [alpha, onChange, percentage]);

  return (
    <div className={styles.AlphaField}>
      <TextField
        suffix="%"
        value={percentage.toString()}
        label={label}
        labelHidden
        type="number"
        autoComplete={false}
        max={100}
        min={0}
        onChange={handleTextChange}
        onBlur={handleBlur}
      />
    </div>
  );
}
