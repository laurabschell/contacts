import React, { useState } from 'react'
import styled from 'styled-components'
import { Colors } from '../styles/styling-variables'
import { FaRegHeart, FaBan } from 'react-icons/fa'
import { connect } from 'react-redux'
import { favFalse, favTrue } from "./store/favReducer";


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

    const [fav, setFav] = useState();

    // const handleToggleFav = () => {
    //     setState(fav => !fav)
    // } 

    return (
        <CardContainer>
            <ImgCard 
                src={props.UserImg} 
                style={{border:`2.8px solid ${props.fav ? Colors.heartColor : '#00000039'}`}}
            />
            <CardText>
                <h5>{props.UserFirstName} {props.UserLastName}</h5>
                <p style={{fontSize: '.6rem'}}>{props.UserEmail}</p>
            </CardText>
            {props.fav ? 
                <FaBan 
                    style={{color: Colors.trashColor, cursor:"pointer"}} 
                    // onClick={() => props.dispatch(favFalse(true))}
                    onClick={() => setFav(false)}
                    /> : 
                <FaRegHeart 
                    style={{color: Colors.heartColor, cursor:"pointer"}} 
                    // onClick={() => props.dispatch(favTrue(false))}
                    onClick={() => setFav(true)}
                    />
            }
        </CardContainer>
    )
}

// function mapStateToProps(state) {
//     return {
//         fav: state.fav
//     }
// }


// export default connect(mapStateToProps)(Card);
export default Card;

