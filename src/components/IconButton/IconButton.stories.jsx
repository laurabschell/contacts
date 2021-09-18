import React from 'react';
import IconButton from './IconButton';
import ProviderWrapper from '../../utils/Provider';
import { Colors } from '../../styles/styling-variables';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    //   user: { is_favorite: false}
  },
};

const Template = (args) => {
    return(
        <ProviderWrapper>
            <IconButton {...args} />
        </ProviderWrapper>
    )
}

export const NotFav = Template.bind({});
export const Fav = Template.bind({});

NotFav.args = {
    user: {
        id: 1 ,
        is_favorite: false
    },
    notMain: false,
    color: Colors.heartColor
};

Fav.args = {
    user: {
        id: 1 ,
        is_favorite: true
    },
    notMain: false,
    color: "gray"
};