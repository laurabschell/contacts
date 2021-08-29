import styled from 'styled-components'
import SectionTitle from '../components/SectionTitle'
import CardDisplay from '../components/CardDisplay'

const FavSection = styled.div`
    margin: 4em auto 0 auto;
    width: 60vw;
`

function Favorites() {
    return (
        <FavSection>
            <SectionTitle 
                title="Favorites"
            />
            <CardDisplay />
        </FavSection>
    )
}

export default Favorites