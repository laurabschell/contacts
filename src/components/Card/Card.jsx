import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../styles/styling-variables'
import IconButton from '../IconButton/IconButton'
import PropTypes from 'prop-types';

const CardContainer = styled.div`
    background-color: ${Colors.navbarBgColor};
    width: 11vw;
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
    return (
        <CardContainer>
            <ImgCard 
                src={props.UserImg} 
                style={{border:`2.8px solid ${props.defaultFav ? Colors.heartColor : '#00000039'}`}}
            />
            <CardText>
                <h5>{props.UserFirstName} {props.UserLastName}</h5>
                <p style={{fontSize: '.6rem'}}>{props.UserEmail}</p>
            </CardText>
            <IconButton 
                defaultFav={props.defaultFav}
                user={props.User} 
                contactsList={props.contactsList}
                favList={props.favList}
                overview={props.overview}
                />
        </CardContainer>
    )
}

Card.propTypes = {
    defaultFav: PropTypes.bool,
    user: PropTypes.shape({
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        email: PropTypes.string
    }),
    favList: PropTypes.array,
    contactsList: PropTypes.array,
    overview: PropTypes.bool
};

export default Card;

