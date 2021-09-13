import React from 'react'
import styled from 'styled-components'
import CardDisplay from '../components/CardDisplay/CardDisplay'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import { useSelector } from 'react-redux'

const ContactsListsection = styled.div`
    margin: 1em auto 0 auto;
    width: 60vw;
`

function ContactsList(props) {
// paginacion
    // const [currentPage, setCurrentPage] = useState(1);
    // const [usersPerPage] = useState(8);

    const contactsList = useSelector(state => state.usersReducer.contactsList);
    const favList = useSelector(state => state.usersReducer.favList);


// paginacion
    // const indexOfLastUser = currentPage * usersPerPage;
    // const indexOfFirstUser = indexOfLastUser - usersPerPage;
    // const currentUsers = contactsList.slice(indexOfFirstUser, indexOfLastUser);
    // const paginate = (pageNumber) => setCurrentPage(pageNumber);


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

            {/* <Pagination usersPerPage = {usersPerPage} totalItems = {contactsList.length} paginate={paginate} /> */}
        </ContactsListsection>
    )
}

export default ContactsList
