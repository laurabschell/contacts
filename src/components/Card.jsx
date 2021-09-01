import React, { useState } from 'react'
import { connect, useSelector } from "react-redux";
import styled from 'styled-components'
import { Colors } from '../styles/styling-variables'
import IconButton from './IconButton'
// import { FaRegHeart, FaBan } from 'react-icons/fa'
// import { connect } from 'react-redux'
// import { favFalse, favTrue } from "./store/favReducer";


const CardContainer = styled.div`
    background-color: ${Colors.navbarBgColor};
    width: 11vw;
    padding: 1.5em 0;
    text-align: center;
    border-radius: 5px;
    box-shadow: ${Colors.shadow};
    margin-bottom: 1.5rem;
`

const ImgCard = styled.img`
    border: 2.8px solid rgba(0, 0, 0, 0.224);
    border-radius: 50%;
    width: 4em;
`


const CardText = styled.div`
    font-family: 'Rubik', sans-serif;
    margin: 1rem;
    font-size: .8rem;
    font-weight: 100;
`

function Card(props) {
    const isfav = useSelector((state) => state.favReducer);
    return (
        <CardContainer>
            <ImgCard 
                src={props.UserImg} 
                style={{border:`2.8px solid ${isfav ? Colors.heartColor : '#00000039'}`}}
            />
            <CardText>
                <h5>{props.UserFirstName} {props.UserLastName}</h5>
                <p style={{fontSize: '.6rem'}}>{props.UserEmail}</p>
            </CardText>
            <IconButton />
        </CardContainer>
    )
}

export default Card;

