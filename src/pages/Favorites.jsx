import styled from 'styled-components'
import SectionTitle from '../components/SectionTitle'
import CardDisplay from '../components/CardDisplay'
import { useState } from 'react'

const FavSection = styled.div`
    margin: 2em auto 0 auto;
    width: 60vw;
`

function Favorites(props) {

    return (
        <FavSection>
            <SectionTitle 
                title="Favorites"
                icon="heart"
            />
            <CardDisplay 
                lengthDisplay={props.lengthDisplay} 
                fav={props.fav}
            />
        </FavSection>
    )
}

export default Favorites