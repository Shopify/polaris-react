import * as React from 'react';
import throttle from 'lodash-decorators/throttle';
import isEqual from 'lodash/isEqual';
import {autobind} from '@shopify/javascript-utilities/decorators';
import {
  addEventListener,
  removeEventListener,
} from '@shopify/javascript-utilities/events';
import {classNames} from '@shopify/react-utilities/styles';
import {CSS_VAR_PREFIX} from '../../utilities';
import {Props as RangeSliderProps} from '../../types';
import Labelled from '../../../Labelled';
import {Key} from '../../../../types';

import * as styles from './DualThumb.scss';

export interface State {
  valueLower: number;
  valueUpper: number;
  trackWidth: number;
  trackLeft: number;
  prevValue?: [number, number];
}

export interface Props extends RangeSliderProps {
  value: [number, number];
  id: string;
  min: number;
  max: number;
  step: number;
}

interface KeyHandlers {
  [key: string]: () => void;
}

const THUMB_SIZE = 24;
const OUTPUT_TIP_SIZE = 8;

export default class DualThumb extends React.Component<Props, State> {
  static getDerivedStateFromProps(props: Props, state: State) {
    const {min, step, max, value} = props;
    const {prevValue} = state;

    if (isEqual(prevValue, value)) {
      return null;
    }

    return {
      prevValue: value,
      valueLower: sanitizeValueLower(value[0], min, step, value[1]),
      valueUpper: sanitizeValueUpper(value[1], max, step, value[0]),
    };
  }

  state: State = {
    valueLower: sanitizeValueLower(
      this.props.value[0],
      this.props.min,
      this.props.step,
      this.props.value[1],
    ),
    valueUpper: sanitizeValueUpper(
      this.props.value[1],
      this.props.max,
      this.props.step,
      this.props.value[0],
    ),
    trackWidth: 0,
    trackLeft: 0,
  };

  private track = React.createRef<HTMLDivElement>();
  private thumbLower = React.createRef<HTMLButtonElement>();
  private thumbUpper = React.createRef<HTMLButtonElement>();

  componentDidMount() {
    this.setTrackPosition();
    addEventListener(window, 'resize', this.setTrackPosition);

    if (this.thumbLower.current && !this.props.disabled) {
      addEventListener(
        this.thumbLower.current,
        'mousedown',
        this.handleMouseDownThumbLower,
      );
      addEventListener(
        this.thumbLower.current,
        'keyup',
        this.handleKeypressLower,
      );
    }

    if (this.thumbUpper.current && !this.props.disabled) {
      addEventListener(
        this.thumbUpper.current,
        'mousedown',
        this.handleMouseDownThumbUpper,
      );
      addEventListener(
        this.thumbUpper.current,
        'keyup',
        this.handleKeypressUpper,
      );
    }
  }

  componentWillUnmount() {
    removeEventListener(window, 'resize', this.setTrackPosition);

    if (this.thumbLower.current) {
      removeEventListener(
        this.thumbLower.current,
        'mousedown',
        this.handleMouseDownThumbLower,
      );
      removeEventListener(
        this.thumbLower.current,
        'keyup',
        this.handleKeypressLower,
      );
    }

    if (this.thumbUpper.current) {
      removeEventListener(
        this.thumbUpper.current,
        'mousedown',
        this.handleMouseDownThumbUpper,
      );
      removeEventListener(
        this.thumbUpper.current,
        'keyup',
        this.handleKeypressUpper,
      );
    }
  }

  render() {
    const {
      id,
      min,
      max,
      prefix,
      suffix,
      disabled,
      output,
      error,
      onFocus,
      onBlur,
      label,
      labelAction,
      labelHidden,
      helpText,
    } = this.props;
    const {valueLower, valueUpper} = this.state;

    const idLower = `${id}Lower`;
    const idUpper = `${id}Upper`;

    const describedBy: string[] = [];

    if (error) {
      describedBy.push(`${id}Error`);
    }

    const ariaDescribedBy = describedBy.length
      ? describedBy.join(' ')
      : undefined;

    const classNameTrackWrapper = classNames(
      styles.TrackWrapper,
      error && styles.error,
      disabled && styles.disabled,
    );

    const classNameThumbLower = classNames(
      styles.Thumbs,
      styles.ThumbLower,
      disabled && styles.disabled,
    );
    const classNameThumbUpper = classNames(
      styles.Thumbs,
      styles.ThumbUpper,
      disabled && styles.disabled,
    );

    const trackWidth = this.state.trackWidth;
    const range = max - min;

    const leftPositionThumbLower = (valueLower / range) * trackWidth;
    const leftPositionThumbUpper = (valueUpper / range) * trackWidth;

    const classNameOutputLower = classNames(styles.Output, styles.OutputLower);
    const outputMarkupLower =
      !disabled && output ? (
        <output
          htmlFor={idLower}
          className={classNameOutputLower}
          style={{
            left: `calc(${leftPositionThumbLower}px - ${OUTPUT_TIP_SIZE}px)`,
          }}
        >
          <div className={styles.OutputBubble}>
            <span className={styles.OutputText}>{valueLower}</span>
          </div>
        </output>
      ) : null;

    const classNameOutputUpper = classNames(styles.Output, styles.OutputUpper);
    const outputMarkupUpper =
      !disabled && output ? (
        <output
          htmlFor={idUpper}
          className={classNameOutputUpper}
          style={{
            left: `calc(${leftPositionThumbUpper}px - ${OUTPUT_TIP_SIZE}px)`,
          }}
        >
          <div className={styles.OutputBubble}>
            <span className={styles.OutputText}>{valueUpper}</span>
          </div>
        </output>
      ) : null;

    const progressLower = leftPositionThumbLower + THUMB_SIZE / 2;
    const progressUpper = leftPositionThumbUpper + THUMB_SIZE / 2;

    const cssVars = {
      [`${CSS_VAR_PREFIX}progress-lower`]: `${progressLower}px`,
      [`${CSS_VAR_PREFIX}progress-upper`]: `${progressUpper}px`,
    };

    const prefixMarkup = prefix && (
      <div className={styles.Prefix}>{prefix}</div>
    );

    const suffixMarkup = suffix && (
      <div className={styles.Suffix}>{suffix}</div>
    );

    return (
      <Labelled
        id={id}
        label={label}
        error={error}
        action={labelAction}
        labelHidden={labelHidden}
        helpText={helpText}
      >
        <div className={styles.Wrapper} id={id}>
          {prefixMarkup}
          <div className={classNameTrackWrapper}>
            <div
              className={styles.Track}
              style={cssVars}
              ref={this.track}
              testID="track"
            />
            <button
              id={idLower}
              testID="thumbLower"
              className={classNameThumbLower}
              ref={this.thumbLower}
              style={{
                left: `${leftPositionThumbLower}px`,
              }}
              role="slider"
              aria-disabled={disabled}
              aria-valuemin={min}
              aria-valuemax={max}
              aria-valuenow={valueLower}
              aria-invalid={Boolean(error)}
              aria-describedby={ariaDescribedBy}
              onFocus={onFocus}
              onBlur={onBlur}
            />
            {outputMarkupLower}
            <button
              id={idUpper}
              testID="thumbUpper"
              className={classNameThumbUpper}
              ref={this.thumbUpper}
              style={{
                left: `${leftPositionThumbUpper}px`,
              }}
              role="slider"
              aria-disabled={disabled}
              aria-valuemin={min}
              aria-valuemax={max}
              aria-valuenow={valueUpper}
              aria-invalid={Boolean(error)}
              aria-describedby={ariaDescribedBy}
              onFocus={onFocus}
              onBlur={onBlur}
            />
            {outputMarkupUpper}
          </div>
          {suffixMarkup}
        </div>
      </Labelled>
    );
  }

  @throttle(40)
  @autobind
  private setTrackPosition() {
    if (this.track.current) {
      const {width, left} = this.track.current.getBoundingClientRect();
      const adjustedTrackWidth = width - THUMB_SIZE;
      this.setState({
        trackWidth: adjustedTrackWidth,
        trackLeft: left,
      });
    }
  }

  @autobind
  private handleMouseDownThumbLower(event: MouseEvent) {
    if (event.button !== 0) return;
    registerMouseMoveHandler(this.handleMouseMoveThumbLower);
  }

  @autobind
  private handleMouseMoveThumbLower(event: MouseEvent) {
    this.setValueLower(this.actualXPosition(event.clientX));
  }

  @autobind
  private handleMouseDownThumbUpper(event: MouseEvent) {
    if (event.button !== 0) return;
    registerMouseMoveHandler(this.handleMouseMoveThumbUpper);
  }

  @autobind
  private handleMouseMoveThumbUpper(event: MouseEvent) {
    this.setValueUpper(this.actualXPosition(event.clientX));
  }

  @autobind
  private handleKeypressLower(event: KeyboardEvent) {
    const {incrementValueLower, decrementValueLower} = this;
    event.preventDefault();
    event.stopPropagation();

    const handlerMap: KeyHandlers = {
      [Key.UpArrow]: incrementValueLower,
      [Key.RightArrow]: incrementValueLower,
      [Key.DownArrow]: decrementValueLower,
      [Key.LeftArrow]: decrementValueLower,
    };

    const handler = handlerMap[event.keyCode];

    if (handler != null) {
      handler();
    }
  }

  @autobind
  private handleKeypressUpper(event: KeyboardEvent) {
    const {incrementValueUpper, decrementValueUpper} = this;
    event.preventDefault();
    event.stopPropagation();

    const handlerMap: KeyHandlers = {
      [Key.UpArrow]: incrementValueUpper,
      [Key.RightArrow]: incrementValueUpper,
      [Key.DownArrow]: decrementValueUpper,
      [Key.LeftArrow]: decrementValueUpper,
    };

    const handler = handlerMap[event.keyCode];

    if (handler != null) {
      handler();
    }
  }

  @autobind
  private incrementValueLower() {
    this.setValueLower(this.state.valueLower + this.props.step);
  }

  @autobind
  private decrementValueLower() {
    this.setValueLower(this.state.valueLower - this.props.step);
  }

  @autobind
  private incrementValueUpper() {
    this.setValueUpper(this.state.valueUpper + this.props.step);
  }

  @autobind
  private decrementValueUpper() {
    this.setValueUpper(this.state.valueUpper - this.props.step);
  }

  @autobind
  private dispatchValue() {
    const {onChange, id} = this.props;
    const {valueLower, valueUpper} = this.state;

    onChange([valueLower, valueUpper], id);
  }

  @autobind
  private setValueLower(value: number) {
    const {
      props: {min, step},
      state: {valueUpper, valueLower},
    } = this;

    const sanitizedValue = sanitizeValueLower(value, min, step, valueUpper);

    if (sanitizedValue !== valueLower) {
      this.setState(
        {
          valueLower: sanitizedValue,
        },
        this.dispatchValue,
      );
    }
  }

  @autobind
  private setValueUpper(value: number) {
    const {
      props: {max, step},
      state: {valueLower, valueUpper},
    } = this;

    const sanitizedValue = sanitizeValueUpper(value, max, step, valueLower);

    if (sanitizedValue !== valueUpper) {
      this.setState(
        {
          valueUpper: sanitizedValue,
        },
        this.dispatchValue,
      );
    }
  }

  @autobind
  private actualXPosition(dirtyXPosition: number): number {
    if (this.track.current) {
      const {min, max} = this.props;
      const {trackLeft, trackWidth} = this.state;

      const relativeX = dirtyXPosition - trackLeft;
      const percentageOfTrack = relativeX / trackWidth;
      return percentageOfTrack * (max - min);
    } else {
      return 0;
    }
  }
}

function roundToNearestStepValue(value: number, step: number) {
  const intermediateValue = value / step;
  const roundedValue = Math.round(intermediateValue);
  return roundedValue * step;
}

function registerMouseMoveHandler(handler: (event: MouseEvent) => void) {
  addEventListener(document, 'mousemove', handler);
  addEventListener(
    document,
    'mouseup',
    () => {
      removeEventListener(document, 'mousemove', handler);
    },
    {once: true},
  );
}

function sanitizeValueLower(
  dirtyValue: number,
  min: number,
  step: number,
  upperValue: number,
): number {
  const roundedValue = roundToNearestStepValue(dirtyValue, step);

  if (roundedValue <= min) {
    return min;
  } else if (roundedValue >= upperValue) {
    return upperValue - step;
  } else {
    return roundedValue;
  }
}

function sanitizeValueUpper(
  dirtyValue: number,
  max: number,
  step: number,
  lowerValue: number,
): number {
  const roundedValue = roundToNearestStepValue(dirtyValue, step);

  if (roundedValue >= max) {
    return max;
  } else if (roundedValue <= lowerValue) {
    return lowerValue + step;
  } else {
    return roundedValue;
  }
}
