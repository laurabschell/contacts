import styled from 'styled-components'
import SectionTitle from '../components/SectionTitle'
import CardDisplay from '../components/CardDisplay'
import { useSelector } from 'react-redux'

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
                defaultFav={true}
                overview={props.overview}
            />
        </FavSection>
    )
}

export default Favorites;