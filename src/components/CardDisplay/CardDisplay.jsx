import React from 'react'
import styled from 'styled-components'
import Card from '../Card/Card'
import PropTypes from 'prop-types';

const CardListStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 98%;
    margin: 0 auto;
`

const CardDisplay = ({
    contactsList = [],
    favList = [],
    overview, 
    loading, 
    error
    }) => {        
        
    return (
        <CardListStyles>
            {loading && <h2>Loading... Please wait</h2>}
            {error && <h2>There's been an error</h2>}
            {contactsList.map((contact) => (
                <Card key={contact.id}
                    UserImg = {contact.avatar}
                    UserFirstName= {contact.first_name}
                    UserLastName= {contact.last_name}
                    UserEmail= {contact.email}
                    User={contact}
                    overview={overview}
                /> 
            ))}
            {favList.map((contact) => (
                <Card key={contact.id}
                    UserImg = {contact.avatar}
                    UserFirstName= {contact.first_name}
                    UserLastName= {contact.last_name}
                    UserEmail= {contact.email}
                    User={contact}
                    overview={overview}
                /> 
            ))}
        </CardListStyles>
    );
}

CardDisplay.propTypes = {
    favList: PropTypes.array,
    contactsList: PropTypes.array
};

export default CardDisplay


