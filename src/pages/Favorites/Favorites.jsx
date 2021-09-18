import styled from 'styled-components'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import CardDisplay from '../../components/CardDisplay/CardDisplay'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';

const FavSection = styled.div`
    margin: 2em auto 0 auto;
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

function Favorites() {
    const [currentPage, setCurrentPage] = useState(1);
    const [contactsPerPage] = useState(12);
    const favoritesTab = useSelector((state) => state.usersReducer.favoritesTab);
    const badgeText = "No contacts here for now. Favorite contacts will be shown here."
    const error = useSelector((state) => state.usersReducer.error);
    const loading = useSelector((state) => state.usersReducer.loading);

    if (loading) {
        return <LoadingMessage>Loading... Please wait</LoadingMessage>;
    }
    
    if (error) {
        return <ErrorMessage>Error :(</ErrorMessage>;
    }

    // pagination
    const indexOfLastUser = currentPage * contactsPerPage;
    const indexOfFirstUser = indexOfLastUser - contactsPerPage;
    const currentFavoritesTab = favoritesTab.slice(indexOfFirstUser, indexOfLastUser);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <FavSection>
            <SectionTitle title="Favorites" />
            <CardDisplay items={currentFavoritesTab} notMain={true} badgeText={badgeText} />
            <Pagination
                contactsPerPage={contactsPerPage}
                totalItems={favoritesTab.length}
                paginate={paginate}
            />
        </FavSection>
    )
}

Favorites.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    favoritesTab: PropTypes.array,
    badgeText: PropTypes.string,
    notMain: PropTypes.bool,
    currentPage: PropTypes.number,
    contactsPerPage: PropTypes.number,
    indexOfLastUser: PropTypes.number,
    indexOfFirstUser: PropTypes.number,
    currentFavItems: PropTypes.array
};

export default Favorites;