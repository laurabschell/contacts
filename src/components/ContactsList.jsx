import React from 'react'
import styled from 'styled-components'
import CardDisplay from './CardDisplay'
import SectionTitle from './SectionTitle'

const ContactsListsection = styled.div`
    margin: 4em auto 0 auto;
    width: 60vw;
`

//     display: flex;
//     justify-content: space-between;
// `

function ContactsList() {
    return (
        <ContactsListsection>
            <SectionTitle 
                title="Contacts List" 
                // icon={hash}
            />
            <CardDisplay />
        </ContactsListsection>
    )
}

export default ContactsList
