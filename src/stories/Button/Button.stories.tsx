import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, IButtonProps } from '../../components/Button/Button';

export default {
  title: 'Pluto/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary  = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  className: 'text-white'
};

Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
  className: 'text-white'
};
