import React from 'react';
import Card from './Card';
import ProviderWrapper from '../../utils/Provider';
import { Colors } from '../../styles/styling-variables';
import defaultIMG from "../../assets/user.png"

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {}
};

const Template = (args) => {
    return(
        <ProviderWrapper>
            <Card {...args} />
        </ProviderWrapper>
    )
}

export const NotFav = Template.bind({});
export const Fav = Template.bind({});

NotFav.args = {
    user: {
        avatar: defaultIMG,
        first_name: "Tracey",
        last_name: "Ramos",
        email: "tracey.ramos@reqres.in",
        is_favorite: false
    },
    border: "#00000039",
    notMain: false
};

Fav.args = {
    user: {
        avatar: defaultIMG,
        first_name: "Tracey",
        last_name: "Ramos",
        email: "tracey.ramos@reqres.in",
        is_favorite: true
    },
    border: Colors.heartColor,
    notMain: false
};