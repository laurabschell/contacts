import React from 'react';
import { MemoryRouter } from 'react-router';
import ProviderWrapper from '../../utils/Provider';
import Navbar from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  decorators : [(Story) => (<MemoryRouter><Navbar/></MemoryRouter>)],
  argTypes: {handleToggleForm: { action: 'onClick' } }
};

const Template = (args) => {
    return(
        <ProviderWrapper>
            <Navbar {...args} />
        </ProviderWrapper>
    )
}

export const Initial = Template.bind({});

Initial.args = {
};