import React from 'react'
import styled from 'styled-components'
import UserImg from '../assets/user.png'
import { Colors } from './styling-variables'
import { FaBan } from 'react-icons/fa'

const CardContainer = styled.div`
    background-color: ${Colors.navbarBgColor};
    width: 13vw;
    padding: 2em 0;
    text-align: center;
    border-radius: 5px;
    box-shadow: ${Colors.shadow};
`

const ImgCard = styled.img`
    border: 2.8px solid rgba(0, 0, 0, 0.224);
    border-radius: 6px;
    width: 5em;
    border: 2.8px solid ${Colors.heartColor};
`

const CardText = styled.div`
    font-family: 'Rubik', sans-serif;
    margin: 1rem;
    font-size: 1rem;
    font-weight: 100;
`

function Card() {
    return (
        <CardContainer>
            <ImgCard src={UserImg}/>
            <CardText>
                <h4>user name</h4>
                <p style={{fontSize: '.8rem'}}>email@email.com</p>
            </CardText>
            <FaBan style={{color: Colors.trashColor}} />
        </CardContainer>
    )
}

export default Card
