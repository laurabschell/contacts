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

function Favorites() {
    const [currentPage, setCurrentPage] = useState(1);
    const [contactsPerPage] = useState(12);
    const favoritesTab = useSelector((state) => state.usersReducer.favoritesTab);

    // pagination
    const indexOfLastUser = currentPage * contactsPerPage;
    const indexOfFirstUser = indexOfLastUser - contactsPerPage;
    const currentFavoritesTab = favoritesTab.slice(indexOfFirstUser, indexOfLastUser);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <FavSection>
            <SectionTitle title="Favorites" />
            <CardDisplay items={currentFavoritesTab} notMain={true} />
            <Pagination
                contactsPerPage={contactsPerPage}
                totalItems={favoritesTab.length}
                paginate={paginate}
            />
        </FavSection>
    )
}

Favorites.propTypes = {
    user: PropTypes.shape({
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        email: PropTypes.string
    }),
    favList: PropTypes.array,
    contactsList: PropTypes.array,
    overview: PropTypes.bool
};

export default Favorites;