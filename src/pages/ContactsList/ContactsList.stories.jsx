import React from 'react';
import ContactsList from './ContactsList';

export default {
  title: 'Pages/ContactsList',
  component: ContactsList,
  argTypes: {}
};

const Template = (args) => <ContactsList {...args} />

export const Initial = Template.bind({});

Initial.args = {
 // args
};