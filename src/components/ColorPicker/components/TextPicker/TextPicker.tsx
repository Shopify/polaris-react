import React, {useCallback, useEffect, useRef, useState} from 'react';

import {classNames} from '../../../../utilities/css';
import type {HSBColor} from '../../../../utilities/color-types';
import {
  hsbToHex,
  hsbToString,
  hexToHsb,
} from '../../../../utilities/color-transformers';
import {
  isHexString,
  coerceToValidUserInput,
} from '../../../../utilities/color-validation';
import {useI18n} from '../../../../utilities/i18n';
import {TextField} from '../../../TextField';
import styles from '../../ColorPicker.scss';

export interface TextPickerProps {
  color: HSBColor;
  allowAlpha?: boolean;
  onChange(hex: string): void;
}

export function TextPicker({color, allowAlpha, onChange}: TextPickerProps) {
  const i18n = useI18n();

  const [text, setText] = useState('');
  const lastValidValue = useRef('');

  const handleTextChange = useCallback((value) => {
    setText(value);
  }, []);

  const handleBlur = useCallback(() => {
    const validUserInput = coerceToValidUserInput(text);
    if (validUserInput) {
      setText(validUserInput);
      lastValidValue.current = validUserInput;

      const colorHasChanged = validUserInput !== hsbToHex(color);

      if (colorHasChanged) {
        onChange(validUserInput);
      }

      return;
    }

    setText(lastValidValue.current);
  }, [color, lastValidValue, onChange, text]);

  useEffect(() => {
    const newValue = hsbToHex(color);
    if (newValue !== hsbToHex(hexToHsb(lastValidValue.current))) {
      setText(newValue);
      lastValidValue.current = newValue;
    }
    if (lastValidValue.current === '') lastValidValue.current = newValue;
  }, [color]);

  const className = classNames(
    styles.TextPicker,
    allowAlpha && styles.AlphaAllowed,
  );
  const label = i18n.translate(
    'Polaris.ColorPicker.textPickerAccessibilityLabel',
  );
  const valueForDisplay = isHexString(text) ? text.toUpperCase() : text;

  const prefixClassNames = classNames(
    styles.TextFieldSwatch,
    allowAlpha && styles.AlphaAllowed,
  );
  const prefixStyle = {backgroundColor: hsbToString(color)};
  const prefixMarkup = (
    <div className={prefixClassNames}>
      <div style={prefixStyle} className={styles.SwatchBackground} />
    </div>
  );

  return (
    <div className={className}>
      <TextField
        prefix={prefixMarkup}
        value={valueForDisplay}
        label={label}
        labelHidden
        autoComplete={false}
        onChange={handleTextChange}
        onBlur={handleBlur}
      />
    </div>
  );
}
