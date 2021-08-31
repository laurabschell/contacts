import React from 'react'
import { FaRegHeart, FaBan } from 'react-icons/fa'
import { Colors } from '../styles/styling-variables'

function IconButton(props) {
    return (
        <div>
            {props.fav ? 
                <FaBan 
                    style={{color: Colors.trashColor, cursor:"pointer"}} 
                    // onClick={() => props.dispatch(favFalse(true))}
                    onClick={props.handleAddFav}
                /> : 
                <FaRegHeart 
                    style={{color: Colors.heartColor, cursor:"pointer"}} 
                    // onClick={() => props.dispatch(favTrue(false))}
                    onClick={props.handleAddFav}
                />
            }
        </div>
    )
}

export default IconButton
