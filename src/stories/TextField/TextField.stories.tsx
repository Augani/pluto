import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TextField, ITextFieldProps, SelectField } from '../../components/TextField/TextField';

export default {
  title: 'Pluto/TextField',
  component: TextField,
} as Meta;

const Template: Story<ITextFieldProps> = (args) => <TextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: "w-40"
}
