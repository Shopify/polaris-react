import React from 'react';
import debounce from 'lodash/debounce';
import {clamp} from '@shopify/javascript-utilities/math';

import {classNames} from '../../utilities/css';
import {hsbToRgb, hexToHsb} from '../../utilities/color-transformers';
import type {HSBColor, HSBAColor} from '../../utilities/color-types';
import {EventListener} from '../EventListener';

import {
  AlphaField,
  AlphaPicker,
  HuePicker,
  Slidable,
  TextPicker,
} from './components';
import styles from './ColorPicker.scss';

interface State {
  pickerWidth: number;
  pickerHeight: number;
}

interface Position {
  x: number;
  y: number;
}

interface Color extends HSBColor {
  /** Level of transparency */
  alpha?: HSBAColor['alpha'];
}

export interface ColorPickerProps {
  /** ID for the element */
  id?: string;
  /** The currently selected color */
  color: Color;
  /** Allow user to select an alpha value */
  allowAlpha?: boolean;
  /** Callback when color is selected */
  onChange(color: HSBAColor): void;
}

export class ColorPicker extends React.PureComponent<ColorPickerProps, State> {
  state: State = {
    pickerWidth: 0,
    pickerHeight: 0,
  };

  private colorNode: HTMLElement | null = null;

  private handleResize = debounce(
    () => {
      if (this.colorNode == null) return;
      this.setState({
        pickerWidth: this.colorNode.clientWidth,
        pickerHeight: this.colorNode.clientHeight,
      });
    },
    50,
    {trailing: true},
  );

  componentDidMount() {
    const {colorNode} = this;
    if (colorNode == null) {
      return;
    }

    this.setState({
      pickerWidth: colorNode.clientWidth,
      pickerHeight: colorNode.clientHeight,
    });

    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        this.setState({
          pickerWidth: colorNode.clientWidth,
          pickerHeight: colorNode.clientHeight,
        });
      }, 0);
    }
  }

  render() {
    const {id, color, allowAlpha} = this.props;
    const {hue, saturation, brightness, alpha: providedAlpha} = color;
    const {pickerWidth, pickerHeight} = this.state;

    const alpha = providedAlpha != null && allowAlpha ? providedAlpha : 1;
    const {red, green, blue} = hsbToRgb({hue, saturation: 1, brightness: 1});
    const colorString = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    const draggerX = clamp(saturation * pickerWidth, 0, pickerWidth);
    const draggerY = clamp(
      pickerHeight - brightness * pickerHeight,
      0,
      pickerHeight,
    );

    const className = classNames(
      styles.MainColor,
      allowAlpha && styles.AlphaAllowed,
    );

    const alphaSliderMarkup = allowAlpha ? (
      <AlphaPicker
        alpha={alpha}
        color={color}
        onChange={this.handleAlphaChange}
      />
    ) : null;

    const hexPickerMarkup = (
      <TextPicker
        color={color}
        allowAlpha={allowAlpha}
        onChange={this.handleHexChange}
      />
    );

    const alphaFieldMarkup = allowAlpha ? (
      <AlphaField alpha={alpha} onChange={this.handleAlphaChange} />
    ) : null;

    return (
      <div>
        <div
          className={styles.ColorPicker}
          id={id}
          onMouseDown={this.handlePickerDrag}
        >
          <div ref={this.setColorNode} className={className}>
            <div
              className={styles.ColorLayer}
              style={{backgroundColor: colorString}}
            />
            <Slidable
              onChange={this.handleDraggerMove}
              draggerX={draggerX}
              draggerY={draggerY}
            />
          </div>
          <HuePicker hue={hue} onChange={this.handleHueChange} />
          {alphaSliderMarkup}
        </div>
        <div className={styles.TextFields}>
          {hexPickerMarkup}
          {alphaFieldMarkup}
        </div>
        <EventListener event="resize" handler={this.handleResize} />
      </div>
    );
  }

  private setColorNode = (node: HTMLElement | null) => {
    this.colorNode = node;
  };

  private handleHueChange = (hue: number) => {
    const {
      color: {brightness, saturation, alpha = 1},
      onChange,
    } = this.props;
    onChange({hue, brightness, saturation, alpha});
  };

  private handleAlphaChange = (alpha: number) => {
    const {
      color: {hue, brightness, saturation},
      onChange,
    } = this.props;
    onChange({hue, brightness, saturation, alpha});
  };

  private handleHexChange = (hex: string) => {
    const {
      color: {alpha = 1},
      onChange,
    } = this.props;
    const newColor = hexToHsb(hex);
    onChange({...newColor, alpha});
  };

  private handleDraggerMove = ({x, y}: Position) => {
    const {pickerWidth, pickerHeight} = this.state;
    const {
      color: {hue, alpha = 1},
      onChange,
    } = this.props;

    const saturation = clamp(x / pickerWidth, 0, 1);
    const brightness = clamp(1 - y / pickerHeight, 0, 1);

    onChange({hue, saturation, brightness, alpha});
  };

  private handlePickerDrag = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    // prevents external elements from being selected
    event.preventDefault();
  };
}
