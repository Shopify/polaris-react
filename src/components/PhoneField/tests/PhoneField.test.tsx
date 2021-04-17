import React from 'react';
import {mountWithApp} from 'test-utilities';
import {TextField} from 'components';

import {PhoneField, Country} from '../PhoneField';

const countries: Country[] = [
  {
    image: '🇺🇸',
    countryName: 'United States',
    countryCode: '+1',
    displayFormat: [3, 3, 4],
    areaCodes: [201, 202, 408, 409, 412],
  },
  {
    image: '🇨🇦',
    countryName: 'Canada',
    countryCode: '+1',
    displayFormat: [3, 3, 4],
    areaCodes: [403, 416, 613, 579, 604, 613, 867],
  },
  {
    image: '🇮🇳',
    countryName: 'India',
    countryCode: '+91',
    displayFormat: [5, 5],
  },
  {
    image: '🇨🇳',
    countryName: 'China',
    countryCode: '+45',
    displayFormat: [3, 4, 4],
  },
  {
    image: '🇦🇷',
    countryName: 'Argentina',
    countryCode: '+54',
    displayFormat: [2, 4, 4],
  },
  {
    image: '🇦🇺',
    countryName: 'Australia',
    countryCode: '+61',
    displayFormat: [3, 3, 3],
  },
  {
    image: '🇦🇹',
    countryName: 'Austria',
    countryCode: '+43',
    displayFormat: [3, 3, 4],
  },
];

describe('<PhoneField />', () => {
  it('renders an error message when the validator returns false', () => {
    const errorMessage = 'Please enter a valid phone number';
    const element = mountWithApp(
      <PhoneField
        labelName="Mobile Phone Number"
        countries={countries}
        validator={() => false}
        errorMessage={errorMessage}
      />,
    );

    expect(element).toContainReactComponent(TextField, {
      error: errorMessage,
    });
  });

  it('renders undefined when the validator returns true', () => {
    const errorMessage = 'Please enter a valid phone number';
    const element = mountWithApp(
      <PhoneField
        labelName="Mobile Phone Number"
        countries={countries}
        validator={() => true}
        errorMessage={errorMessage}
      />,
    );

    expect(element).toContainReactComponent(TextField, {
      error: undefined,
    });
  });
});

describe('label', () => {
  const phoneFieldLabel = 'Mobile Phone Number';
  it('renders labelName', () => {
    const element = mountWithApp(
      <PhoneField labelName={phoneFieldLabel} countries={countries} />,
    );

    expect(element).toContainReactComponent(TextField, {
      label: phoneFieldLabel,
    });
  });
});
