import React from 'react';

import {Button, ButtonProps} from '../src';

export default {
  title: 'Docs Playing/0-Button - CSF',
  component: Button,
  argTypes: {
    primary: 'boolean',
  },
};

// Using a template to avoid repeating configuration
export function ButtonDefault(args: ButtonProps) {
  return <Button {...args} />;
}
ButtonDefault.args = {
  children: 'Hello Button',
} as ButtonProps;

export const ButtonWithPrimary = ButtonDefault.bind({});
ButtonWithPrimary.args = {...ButtonDefault.args, primary: true};

export const ButtonWithPlain = ButtonDefault.bind({});
ButtonWithPlain.args = {...ButtonDefault.args, plain: true};

// Going old school and writing explicit Stories
// - downside, these properties can't be modified with controls

export function ButtonDefaultAlt() {
  return <Button>Hello Button</Button>;
}

export function ButtonWithPrimaryAlt() {
  return <Button primary>Hello Button</Button>;
}

export function ButtonWithPlainAlt() {
  return <Button plain>Hello Button</Button>;
}
