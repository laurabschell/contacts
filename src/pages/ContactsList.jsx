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
    const lengthDisplay = useSelector(state => state.userReducer.per_page);
    console.log(users);
    console.log(lengthDisplay);

    return (
        <ContactsListsection>
            <SectionTitle 
                title="Contacts List" 
                icon={props.icon}
            />
            <CardDisplay 
                // lengthDisplay={props.lengthDisplay} 
                fav={props.fav}
                users={users}
                lengthDisplay={lengthDisplay}
            />
        </ContactsListsection>
    )
}

export default ContactsList
