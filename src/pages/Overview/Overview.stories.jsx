import React from 'react';
import Overview from './Overview';

export default {
  title: 'Pages/Overview',
  component: Overview,
  argTypes: {}
};

const Template = (args) => <Overview {...args} />

export const Initial = Template.bind({});

Initial.args = {
 // args
};