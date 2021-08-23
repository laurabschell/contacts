import styled from 'styled-components'
import SectionTitle from './SectionTitle'
import CardDisplay from './CardDisplay'

const FavSection = styled.div`
    margin: 4em auto 0 auto;
    width: 60vw;
`

function Favorites() {
    return (
        <FavSection>
            <SectionTitle />
            <CardDisplay />
        </FavSection>
    )
}

export default Favorites