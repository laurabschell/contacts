import React from 'react'
import CardDisplay from './CardDisplay'
import SectionTitle from './SectionTitle'
import styled from 'styled-components'
import ContactsList from './ContactsList'
import Favorites from './Favorites'

const Main = styled.main`
    display: flex;
    flex-direction: column;

    &::before {
        content: '';
        height: 7vh;
    }
`

function Overview() {
    return (
        <Main>
            <Favorites>
                <SectionTitle />
                <CardDisplay />
            </Favorites>           
            <ContactsList>
                <SectionTitle />
                <CardDisplay />
            </ContactsList>           
        </Main>
    )
}

export default Overview
