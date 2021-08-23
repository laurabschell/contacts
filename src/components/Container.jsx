import React from 'react'
import styled from 'styled-components'
import Favorites from './Favorites'
import ContactsList from './ContactsList'
import Overview from './Overview'

const Main = styled.main`
    display: flex;
    flex-direction: column;

    &::before {
        content: '';
        height: 7vh;
    }
`

function Container() {
    return (
        <Main>
            <Overview />
            <Favorites />
            <ContactsList />

        </Main>
    )
}

export default Container
