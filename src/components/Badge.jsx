import React from 'react'
import styled from 'styled-components'
import { Colors } from '../styles/styling-variables'

const BadgeContainer = styled.div`
    color: ${Colors.heartColor};
    font-size: .8rem;
`

function Badge() {
    return (
        <BadgeContainer>
            <p>No favorites to show</p>

        </BadgeContainer>
    )
}

export default Badge
