import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TextField, SelectField } from '../../components/TextField/TextField';
import {ITextFieldProps, ISuggestionInputProps, ISelectFieldProps} from '../../components/TextField/types'

export default {
  title: 'Pluto/TextField',
  component: TextField,
} as Meta;

const Template: Story<ITextFieldProps> = (args) => <TextField {...args} />;
const SelectTemplate: Story<ISelectFieldProps> = (args) => <SelectField {...args} />;

export const Simple = Template.bind({});
export const Select = SelectTemplate.bind({});
export const SelectFree = SelectTemplate.bind({});
Simple.args = {
  className: "w-32"
}

Select.args = {
  className: "w-32",
  restrict: true,
  options: ["Hello", "Hi", "Hey"]
}

SelectFree.args = {
  className: "w-32",
  options: ["Hello", "Hi", "Hey"]
}


