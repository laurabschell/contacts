import React from 'react'
import { FaRegHeart, FaBan, FaTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeFromFav, addToFav, removeContact } from '../redux/actions/usersActions';
import { Colors } from '../styles/styling-variables';

const IconContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

function IconButton(props) {
    const dispatch = useDispatch();
    const user = props.user;
    const isFav = props.defaultFav;
    return (
        <IconContainer>
            {!isFav ? (
                <FaRegHeart 
                style={{"color": Colors.heartColor, "cursor": "pointer"}} 
                onClick={() => dispatch(addToFav(user.id, user))}/>
            ) : (
                <FaBan 
                style={{"color": "gray", "cursor": "pointer"}} 
                onClick={() => dispatch(removeFromFav(user.id, user))} />
            )}
            {!props.overview && 
                <FaTrashAlt 
                style={{"color" : Colors.trashColor, "cursor": "pointer"}}
                 onClick={() => dispatch(removeContact(user.id))}/>
            }
        </IconContainer>
    )
}
  
export default IconButton;