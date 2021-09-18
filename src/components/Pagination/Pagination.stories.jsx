import React from 'react';
import Pagination from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {}
};

const Template = (args) => <Pagination {...args} />

export const Initial = Template.bind({});

Initial.args = {
 // args
};