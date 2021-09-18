import React, { useState } from 'react'
import styled from 'styled-components'
import CardDisplay from '../../components/CardDisplay/CardDisplay'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import PropTypes from 'prop-types';
import Pagination from '../../components/Pagination/Pagination'
import { useSelector } from 'react-redux';

const ContactsListsection = styled.div`
    margin: 1em auto 0 auto;
    width: 60vw;
`

const ErrorMessage = styled.div`
margin: 1em auto 0 auto;
width: 50vw;
line-height: 5vh;
background-color: #dd5656;
border-radius: 10px;
color: white;
text-align: center;
`
const LoadingMessage = styled.div`
font-size: 1.5rem;
margin: 1em auto 0 auto;
width: 60vw;
color: #ff9900;
text-align: center;
`

function ContactsList() {
    const [currentPage, setCurrentPage] = useState(1);
    const [contactsPerPage] = useState(12);
    const contactsTab = useSelector((state) => state.usersReducer.contactsTab);
    const badgeText = "There's no more contacts left"
    const error = useSelector((state) => state.usersReducer.error);
    const loading = useSelector((state) => state.usersReducer.loading);

    //pagination
    const indexOfLastUser = currentPage * contactsPerPage;
    const indexOfFirstUser = indexOfLastUser - contactsPerPage;
    const currentContacts = contactsTab.slice(indexOfFirstUser, indexOfLastUser);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    
    if (loading) {
        return <LoadingMessage>Loading... Please wait</LoadingMessage>;
    }
    
    if (error) {
        return <ErrorMessage>Error :(</ErrorMessage>;
    }

    return (
        <ContactsListsection>
            <SectionTitle 
                title="Contacts List" 
            />
            <CardDisplay items={currentContacts} notMain={true} badgeText={badgeText} />
            <Pagination
                contactsPerPage={contactsPerPage}
                totalItems={contactsTab.length}
                paginate={paginate}
            />
        </ContactsListsection>
    )
}

ContactsList.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    badgeText: PropTypes.string,
    notMain: PropTypes.bool,
    currentPage: PropTypes.number,
    contactsPerPage: PropTypes.number,
    indexOfLastUser: PropTypes.number,
    indexOfFirstUser: PropTypes.number,
    contactsTab: PropTypes.array
};

export default ContactsList
