import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CardDisplay from '../../components/CardDisplay/CardDisplay';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import styled from 'styled-components';
import Pagination from '../../components/Pagination/Pagination';

const OverviewSection = styled.div`
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

function Overview() {
    const [currentPage, setCurrentPage] = useState(1);
    const [contactsPerPage] = useState(12);
    const favItems = useSelector((state) => state.usersReducer.favItems);
    const notFavItems = useSelector((state) => state.usersReducer.notFavItems);
    const error = useSelector((state) => state.usersReducer.error);
    const loading = useSelector((state) => state.usersReducer.loading);
    const slicedFavItems = favItems.slice(0, 4);

    // pagination
    const indexOfLastUser = currentPage * contactsPerPage;
    const indexOfFirstUser = indexOfLastUser - contactsPerPage;
    const currentNotFavItems = notFavItems.slice(indexOfFirstUser, indexOfLastUser);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) {
        return <LoadingMessage>Loading... Please wait</LoadingMessage>;
    }
    
    if (error) {
        return <ErrorMessage>Error :(</ErrorMessage>;
    }

    return (
        <OverviewSection>
            <SectionTitle title="Favorites" />
            <CardDisplay items={slicedFavItems} />

            <SectionTitle title="Contacts" />
            <CardDisplay items={currentNotFavItems} />

            <Pagination
                contactsPerPage={contactsPerPage}
                totalItems={notFavItems.length}
                paginate={paginate}
            />
        </OverviewSection>
    )
}

Overview.propTypes = {
    defaultFav: PropTypes.bool,
    user: PropTypes.shape({
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        email: PropTypes.string
    }),
    
    favList: PropTypes.array,
    contactsList: PropTypes.array,
    overview: PropTypes.bool
};

export default Overview
