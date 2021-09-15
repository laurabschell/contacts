import styled from 'styled-components'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import CardDisplay from '../../components/CardDisplay/CardDisplay'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types';

const FavSection = styled.div`
    margin: 2em auto 0 auto;
    width: 60vw;
`

function Favorites(props) {
    const favList = useSelector(state => state.usersReducer.favList);
    return (
        <FavSection>
            <SectionTitle 
                title="Favorites"
                icon="heart"
            />
            <CardDisplay 
                contactsList={favList}
                overview={props.overview}
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