import React from 'react'
import styled from 'styled-components'
import ContactsList from './ContactsList'
import Favorites from './Favorites'

// const Main = styled.main`
//     display: flex;
//     flex-direction: column;

//     /* &::before {
//         content: '';
//         height: 5vh;
//     } */
// `

function Overview() {
    return (
        <>
            <Favorites 
                lengthDisplay={4} 
                fav={true}
                icon="heart"
                />
            <ContactsList 
                lengthDisplay={16} 
                fav={false}
                icon="hash"
                />
        </>
    )
}

export default Overview
