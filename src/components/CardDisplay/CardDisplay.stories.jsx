import React from 'react';
import CardDisplay from './CardDisplay';

export default {
  title: 'Components/CardDisplay',
  component: CardDisplay,
  argTypes: {}
};

const Template = (args) => <CardDisplay {...args} />

export const Initial = Template.bind({});

Initial.args = {
 // args
};