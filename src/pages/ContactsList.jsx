import React from 'react'
import styled from 'styled-components'
import CardDisplay from '../components/CardDisplay'
import SectionTitle from '../components/SectionTitle'
import { useSelector } from 'react-redux'

const ContactsListsection = styled.div`
    margin: 1em auto 0 auto;
    width: 60vw;
`

function ContactsList(props) {

    const users = useSelector(state => state.userReducer.users);
    console.log(users);

    return (
        <ContactsListsection>
            <SectionTitle 
                title="Contacts List" 
                icon={props.icon}
            />
            <CardDisplay 
                // lengthDisplay={props.lengthDisplay} 
                // fav={props.fav}
                users={users}
                // handleAddFavorite={props.handleAddFavorite}
            />
        </ContactsListsection>
    )
}

export default ContactsList
