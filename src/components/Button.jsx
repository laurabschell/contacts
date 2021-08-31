import React from 'react'
import { FaPlus } from 'react-icons/fa';
import styled from 'styled-components'
import { Colors } from '../styles/styling-variables'

const ButtonStyles = styled.a`
    background-color: ${props => props.text === "new" ? Colors.newGreen : 'beige'};
    color: ${props => props.text === "new" ? 'white' : Colors.fontColor};
    float: right;
    width: 4rem;
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

function Button(props) {
    return (
        <ButtonStyles text={props.text}>
            {props.text === "new" && <FaPlus style={FaPlusIconStyles} />}
            <p>{props.text}</p>
        </ButtonStyles>
    )
}

export default Button