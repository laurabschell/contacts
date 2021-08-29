import React from 'react'
import { FaPlus } from 'react-icons/fa';
import styled from 'styled-components'
import { Colors } from '../styles/styling-variables'

const NewButton = styled.a`
    background-color: ${Colors.newGreen};
    text-decoration: none;
    color: beige;
    padding: .5rem .8rem;
    border-radius: 3px;
    font-size: .7rem;
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    box-shadow: ${Colors.shadow};
    cursor: pointer;
    display: flex;
`

const FaPlusIconStyles = {
    color: "white",
    margin: "0 .3rem 0 0",
}

function Button() {
    return (
        <NewButton>
            <FaPlus style={FaPlusIconStyles} />
            New
        </NewButton>
    )
}

export default Button