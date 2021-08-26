import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import styled from 'styled-components'
import { Colors } from './styling-variables'

const SectTitle = styled.div`
    margin: 0 0 2rem 0;
    display: flex;
    align-items: baseline;
`

const Title = styled.h2`
    font-size: 1.4rem;
    font-weight: 500;
`

const faheart = {
    fontSize: '1.9rem',
    fontWeight: '500',
    margin: '0 .3rem 0 0',
    color: Colors.heartColor,
}

function SectionTitle(props) {
    return (
        <SectTitle>
            {/* <FaRegHeart style={faheart} /> */}
            <Title>{props.title}</Title>
        </SectTitle>
    )
}

export default SectionTitle
