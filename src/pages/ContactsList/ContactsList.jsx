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

function ContactsList() {
    const [currentPage, setCurrentPage] = useState(1);
    const [contactsPerPage] = useState(12);
    const contactsTab = useSelector((state) => state.usersReducer.contactsTab);

    //pagination
    const indexOfLastUser = currentPage * contactsPerPage;
    const indexOfFirstUser = indexOfLastUser - contactsPerPage;
    const currentContacts = contactsTab.slice(indexOfFirstUser, indexOfLastUser);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <ContactsListsection>
            <SectionTitle 
                title="Contacts List" 
            />
            <CardDisplay items={currentContacts} notMain={true} />
            <Pagination
                contactsPerPage={contactsPerPage}
                totalItems={contactsTab.length}
                paginate={paginate}
            />
        </ContactsListsection>
    )
}

ContactsList.propTypes = {
    user: PropTypes.shape({
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        email: PropTypes.string
    }),
    favList: PropTypes.array,
    contactsList: PropTypes.array,
    overview: PropTypes.bool
};

export default ContactsList
