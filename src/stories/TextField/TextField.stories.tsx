import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TextField, TextFieldProps } from './TextField';

export default {
  title: 'Gshare/TextField',
  component: TextField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

