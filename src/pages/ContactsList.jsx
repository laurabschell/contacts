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
    const contactsList = useSelector(state => state.usersReducer.contactsList);
    const favList = useSelector(state => state.usersReducer.favList);
    return (
        <ContactsListsection>
            <SectionTitle 
                title="Contacts List" 
                icon="hash"
            />
            {!props.overview && 
                <CardDisplay 
                    favList={favList}
                    defaultFav={true}
                    overview={props.overview}
                />
            }
            <CardDisplay 
                contactsList={contactsList}
                defaultFav={false}
                overview={props.overview}
            />
        </ContactsListsection>
    )
}

export default ContactsList
