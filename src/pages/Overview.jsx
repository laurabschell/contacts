import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
import Form from '../components/Form'
import useGetUsers from '../components/hooks/useGetUsers';
import ContactsList from './ContactsList'
import Favorites from './Favorites'

function Overview() {
    return (
        <>
            <Favorites 
                icon="heart"
                // lengthDisplay={4} 
                fav={true}
            />
            <ContactsList 
                icon="hash"
                // lengthDisplay={16} 
                fav={false}
            />
        </>
    )
}

export default Overview
