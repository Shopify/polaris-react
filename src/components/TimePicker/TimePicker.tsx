import React, {useState, useCallback} from 'react';

import {TextField, TextFieldProps} from '../TextField';
import {Popover} from '../Popover';
import {DisplayText} from '../DisplayText';
import {ChoiceList} from '../ChoiceList';
import {classNames} from '../../utilities/css';

import * as styles from './TimePicker.scss';
import {TimePart, Digit} from './components';

enum Period {
  Am = 'AM',
  Pm = 'PM',
}

interface Props {
  is12hFormat?: boolean;
}

export type TimePickerProps = Props & TextFieldProps;

const HOURS_01_TO_12 = range(1, 12);
const HOURS_13_TO_00 = range(13, 24, true);
const MINUTES_0_TO_59 = range(1, 60);

export function TimePicker({
  is12hFormat,
  value,
  onChange,
  ...restProps
}: TimePickerProps) {
  const [popoverActive, setPopoverActive] = useState(false);
  const [time, setTime] = useState(
    value && isValidTime(value) ? value : convertDateTo24hTimeString(),
  );
  const [showMinutes, setShowMinutes] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const [selectedHour, selectedMinute] = time.split(':');
  const selecTedHourNumber = Number(selectedHour);
  const [period, setPeriod] = useState(
    selecTedHourNumber > 12 ? Period.Pm : Period.Am,
  );
  const selectedHour12hFormat =
    selecTedHourNumber > 12
      ? presetWith0(String(selecTedHourNumber - 12))
      : selectedHour;

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const handleTextFieldOnChange = (value: string, id: string) => {
    if (!isValidTime(value)) {
      return;
    }
    setTime(value);
    onChange && onChange(value, id);
  };
  const setHour = (hour: string) => setTime(`${hour}:${selectedMinute}`);
  const setMinute = (minute: string) => setTime(`${selectedHour}:${minute}`);
  const setHourThenShowMinutes = (
    hour: string,
    showMinutes?: boolean,
    is12hFormat?: boolean,
  ) => {
    if (is12hFormat) {
      const hourNumber = Number(hour);
      const selectedHour24hFormat =
        period === Period.Pm ? presetWith0(String(hourNumber + 12)) : hour;
      setHour(selectedHour24hFormat);
    } else setHour(hour);
    if (!showMinutes) {
      setTimeout(() => setShowMinutes(true), 0);
    }
  };

  const handlePeriodOnChange = (periods: string[]) => {
    const nextPeriod = periods[0] as Period;
    const selectedHour12hFormatNumber = Number(selectedHour12hFormat);
    if (nextPeriod === Period.Pm) {
      setHour(presetWith0(String(selectedHour12hFormatNumber + 12)));
    } else {
      setHour(selectedHour12hFormat);
    }
    setPeriod(nextPeriod);
  };

  const valueToDisplay = is12hFormat
    ? `${selectedHour12hFormat}:${selectedMinute}`
    : time;

  return (
    <Popover
      active={popoverActive}
      activator={
        <TextField
          {...restProps}
          value={valueToDisplay}
          onChange={handleTextFieldOnChange}
          readOnly
          onFocus={() => setPopoverActive(true)}
          suffix={is12hFormat && period.toUpperCase()}
        />
      }
      onClose={togglePopoverActive}
      fluidContent
      sectioned
    >
      <div className={styles.Wrapper}>
        <div
          className={classNames(
            styles.Time,
            is12hFormat && styles.TimeWithPeriods,
          )}
        >
          <DisplayText size="extraLarge">
            <time dateTime={time}>
              <TimePart
                value={is12hFormat ? selectedHour12hFormat : selectedHour}
                isActive={!showMinutes}
                onAction={() => setShowMinutes(false)}
              />
              :
              <TimePart
                value={selectedMinute}
                isActive={showMinutes}
                onAction={() => setShowMinutes(true)}
              />
            </time>
          </DisplayText>
          {is12hFormat && (
            <ChoiceList
              title="Period"
              choices={[
                {label: 'AM', value: Period.Am},
                {label: 'PM', value: Period.Pm},
              ]}
              selected={[period]}
              onChange={(periods) => handlePeriodOnChange(periods)}
              titleHidden
            />
          )}
        </div>
        <div
          className={styles.Clock}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
        >
          <div className={styles.Dot} />
          <div
            className={classNames(
              styles.Line,
              !showMinutes &&
                !is12hFormat &&
                (selecTedHourNumber > 12 || selecTedHourNumber === 0) &&
                styles.InnerLine,
              showMinutes
                ? styles[`LineMinute${trimFirst0(selectedMinute)}`]
                : styles[`LineHour${trimFirst0(selectedHour)}`],
            )}
          />
          <div className={styles.DigitsWrapper}>
            {showMinutes ? (
              MINUTES_0_TO_59.map((minute) => (
                <Digit
                  isMinute
                  key={minute}
                  value={minute}
                  isActive={minute === selectedMinute}
                  isParentDragging={isDragging}
                  onAction={() => setMinute(minute)}
                />
              ))
            ) : (
              <React.Fragment>
                {HOURS_01_TO_12.map((hour) => (
                  <Digit
                    key={hour}
                    value={hour}
                    isActive={
                      is12hFormat
                        ? hour === selectedHour12hFormat
                        : hour === selectedHour
                    }
                    isParentDragging={isDragging}
                    onAction={(showMinutes) =>
                      setHourThenShowMinutes(hour, showMinutes, is12hFormat)
                    }
                  />
                ))}
                {!is12hFormat && (
                  <div className={styles.InnerDigitsWrapper}>
                    {HOURS_13_TO_00.map((hour) => (
                      <Digit
                        key={hour}
                        value={hour}
                        isActive={hour === selectedHour}
                        isParentDragging={isDragging}
                        onAction={(showMinutes) =>
                          setHourThenShowMinutes(hour, showMinutes)
                        }
                      />
                    ))}
                  </div>
                )}
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </Popover>
  );
}

function range(start: number, end: number, isHour?: boolean): string[] {
  return new Array(end - start + 1).fill(undefined).map((_, i) => {
    const value = i + start;
    if (isHour) {
      if (value === 24) {
        return '00';
      }
    } else if (value === 60) {
      return '00';
    }

    const valueToString = String(value);
    if (valueToString.length === 1) {
      return `0${value}`;
    }
    return valueToString;
  });
}

function isValidTime(time: string) {
  const [hour, colon, minute] = time.split(':');
  const hourNumber = Number(hour);
  const minuteNumber = Number(minute);
  if (
    hour.length !== 2 ||
    hourNumber < 0 ||
    hourNumber > 24 ||
    colon !== ':' ||
    minute.length !== 2 ||
    minuteNumber < 0 ||
    minuteNumber > 59
  )
    return false;
  return true;
}

function convertDateTo24hTimeString(date = new Date()) {
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes());
  const formattedHours = presetWith0(hours);
  const formattedMinutes = presetWith0(minutes);
  return `${formattedHours}:${formattedMinutes}`;
}

function trimFirst0(value: string) {
  return value !== '00' && value.startsWith('0') ? value[1] : value;
}

function presetWith0(value: string) {
  return value.length === 1 ? `0${value}` : value;
}
