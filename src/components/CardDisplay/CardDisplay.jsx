import React from 'react'
import styled from 'styled-components'
import Card from '../Card/Card'

const CardListStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
`

const CardDisplay = ({
    contactsList = [],
    favList = [],
    defaultFav, overview
    }) => {

    return (
        <CardListStyles>
            {contactsList.slice(0, 20).map((contact) => (
            <Card key={contact.id}
                UserImg = {contact.avatar}
                UserFirstName= {contact.first_name}
                UserLastName= {contact.last_name}
                UserEmail= {contact.email}
                defaultFav={defaultFav}
                User={contact}
                overview={overview}
                /> 
            ))}
            {favList.slice(0, 20).map((contact) => (
                <Card key={contact.id}
                    UserImg = {contact.avatar}
                    UserFirstName= {contact.first_name}
                    UserLastName= {contact.last_name}
                    UserEmail= {contact.email}
                    defaultFav={defaultFav}
                    User={contact}
                    overview={overview}
                /> 
            ))}
        </CardListStyles>
    );
}

export default CardDisplay
