import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../styles/styling-variables'
import IconButton from '../IconButton/IconButton'
import PropTypes from 'prop-types';

const CardContainer = styled.div`
    background-color: ${Colors.navbarBgColor};
    width: 12vw;
    padding: 1.5em 0;
    text-align: center;
    border-radius: 5px;
    box-shadow: ${Colors.shadow};
    margin: 0 1rem 1.5rem 1rem;
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
    const user = props.user;
    return (
        <CardContainer>
            <ImgCard 
                src={props.user_avatar} 
                style={{border:`2.8px solid ${user.is_favorite ? Colors.heartColor : '#00000039'}`}}
            />
            <CardText>
                <h5>{props.user_first_name} {props.user_last_name}</h5>
                <p style={{fontSize: '.6rem'}}>{props.user_email}</p>
            </CardText>
            <IconButton 
                user={user} notMain={props.notMain}
                />
        </CardContainer>
    )
}

Card.propTypes = {
    user: PropTypes.shape({
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        email: PropTypes.string,
        is_favorite: PropTypes.bool
    }),
    favList: PropTypes.array,
    contactsList: PropTypes.array,
    overview: PropTypes.bool
};

export default Card;

