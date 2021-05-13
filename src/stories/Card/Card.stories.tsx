import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Card, CardProps } from '@components/Card/Card';

export default {
  title: 'Gshare/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Main = Template.bind({});
Main.args = {
  backgroundColor: 'red'
};

