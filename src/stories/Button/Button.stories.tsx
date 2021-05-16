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
Primary.args = {
  label: 'Primary Button',
};

Primary.args = {
  label: 'Secondary Button',
  variant: 'secondary'
};
