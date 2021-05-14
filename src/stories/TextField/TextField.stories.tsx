import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TextField, TextFieldProps } from '@components/TextField/TextField';

export default {
  title: 'Pluto/TextField',
  component: TextField,
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Primary = Template.bind({});
