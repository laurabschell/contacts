import React from 'react'
import { FaRegHeart, FaBan } from 'react-icons/fa'
// import { Colors } from '../styles/styling-variables'
import { connect } from "react-redux";
import { Colors } from '../styles/styling-variables';
import { favin, favout } from "./store/favReducer";


function IconButton(props) {
    return (
        <div>
            {!props.isFav ? (
                <FaRegHeart style={{"color": Colors.heartColor}} onClick={() => props.favout(true)} />
            ) : (
                <FaBan onClick={() => props.favin(false)} />
            )}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isFav: state.favReducer
    };
}
  
const mapDispatchToProps = {
    favin,
    favout
};
  
export default connect(mapStateToProps, mapDispatchToProps)(IconButton);