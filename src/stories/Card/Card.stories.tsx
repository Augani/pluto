import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Card, ICardProps } from '../../components/Card/Card';

export default {
  title: 'Pluto/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ICardProps> = (args) => <Card {...args} />;

export const Main = Template.bind({});
Main.args = {
  backgroundColor: 'red'
};

