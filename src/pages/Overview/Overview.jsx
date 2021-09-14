import React from 'react'
import ContactsList from '../ContactsList/ContactsList'
import Favorites from '../Favorites/Favorites'
import PropTypes from 'prop-types';

function Overview() {
    return (
        <>
            <Favorites overview={true}/>
            <ContactsList overview={true} />
        </>
    )
}

Overview.propTypes = {
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

export default Overview
