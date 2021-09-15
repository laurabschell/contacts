import React, { useState } from 'react'
import styled from 'styled-components'
import CardDisplay from '../../components/CardDisplay/CardDisplay'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import Pagination from '../../components/Pagination/Pagination'

const ContactsListsection = styled.div`
    margin: 1em auto 0 auto;
    width: 60vw;
`

function ContactsList(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(8);

    const contactsList = useSelector((state) => state.usersReducer.contactsList);

    const favList = useSelector(state => state.usersReducer.favList);
    const error = useSelector((state) => state.usersReducer.error);
    const loading = useSelector((state) => state.usersReducer.loading);
    console.log(contactsList);
    console.log(error);
    console.log(loading);
    console.log(favList);
    
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = contactsList.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <ContactsListsection>
            <SectionTitle 
                title="Contacts List" 
                icon="hash"
            />
            {/* {!props.overview && 
                <CardDisplay 
                    favList={favList}
                    overview={props.overview}
                />
            } */}
            <CardDisplay 
                contactsList={currentUsers}
                overview={props.overview}
            />
            <Pagination
                usersPerPage={usersPerPage}
                totalItems={contactsList.length}
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
