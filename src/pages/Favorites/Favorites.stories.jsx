import React from 'react';
import Favorites from './Favorites';

export default {
  title: 'Pages/Favorites',
  component: Favorites,
  argTypes: {}
};

const Template = (args) => <Favorites {...args} />

export const Initial = Template.bind({});

Initial.args = {
 // args
};