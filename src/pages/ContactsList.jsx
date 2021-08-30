import React from 'react'
import styled from 'styled-components'
import CardDisplay from '../components/CardDisplay'
import SectionTitle from '../components/SectionTitle'

const ContactsListsection = styled.div`
    margin: 1em auto 0 auto;
    width: 60vw;
`

function ContactsList(props) {


    return (
        <ContactsListsection>
            <SectionTitle 
                title="Contacts List" 
                icon={props.icon}
            />
            <CardDisplay 
                lengthDisplay={props.lengthDisplay} 
                fav={props.fav}
            />
        </ContactsListsection>
    )
}

export default ContactsList
