import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
import Form from '../components/Form'
import useGetUsers from '../components/hooks/useGetUsers';
import ContactsList from './ContactsList'
import Favorites from './Favorites'

function Overview() {

    // const handleAddFavorite = (id, value) => {
    //     const newItems = [...this.state.items];
    //     const index = newItems.findIndex((item) => item.id === id);
    //     newItems[index].isFavorite = value;
    //     this.setState({
    //         items: newItems
    //     });
    // }

    return (
        <>
            <Favorites 
                icon="heart"
                // lengthDisplay={4} 
                // fav={true}
                // handleAddFavorite={handleAddFavorite}
            />
            <ContactsList 
                icon="hash"
                // handleAddFavorite={handleAddFavorite}
                // lengthDisplay={16} 
                // fav={false}
            />
        </>
    )
}

export default Overview
