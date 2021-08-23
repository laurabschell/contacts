import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const CardListStyles = styled.div`
    display: flex;
    justify-content: space-between;
`

function CardDisplay() {
    return (
        <CardListStyles>
            <Card />
        </CardListStyles>
    )
}

export default CardDisplay
