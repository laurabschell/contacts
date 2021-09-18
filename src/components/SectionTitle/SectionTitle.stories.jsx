import React from 'react';
import SectionTitle from './SectionTitle';

export default {
  title: 'Components/SectionTitle',
  component: SectionTitle,
  argTypes: {}
};

const Template = (args) => <SectionTitle {...args} />

export const Initial = Template.bind({});

Initial.args = {
 // args
};