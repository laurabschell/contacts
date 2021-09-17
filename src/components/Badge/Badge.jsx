import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../styles/styling-variables'

const BadgeContainer = styled.div`
    color: ${Colors.heartColor};
    line-height: 5rem;
`

function Badge() {
    return (
        <BadgeContainer>
            <p>No contacts to show here</p>
        </BadgeContainer>
    )
}

export default Badge
