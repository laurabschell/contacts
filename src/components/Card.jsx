import React from 'react'
import styled from 'styled-components'
import { Colors } from './styling-variables'
import { FaRegHeart, FaBan } from 'react-icons/fa'

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

function renderFav(fav) {
    if(fav === true) {
        return <FaBan style={{color: Colors.trashColor}} />
    }
    return <FaRegHeart style={{color: Colors.heartColor}} />
}

function Card(props) {
    return (
        <CardContainer>
            <ImgCard src={props.UserImg}/>
            <CardText>
                <h4>{props.UserName}</h4>
                <p style={{fontSize: '.8rem'}}>{props.UserEmail}</p>
            </CardText>
            <div>{renderFav(props.fav)}</div>
        </CardContainer>
    )
}

export default Card
