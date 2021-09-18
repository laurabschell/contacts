import React from 'react'
import styled from 'styled-components'
import Card from '../Card/Card'
import PropTypes from 'prop-types';
import Badge from '../Badge/Badge'

const CardListStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 98%;
    margin: 0 auto;
`

const CardDisplay = ({
    items,
    notMain,
    badgeText
    }) => {        
       
    return (
        <CardListStyles>
            {items.length === 0 ? <Badge badgeText={badgeText} /> :
            items.map((user) => (
            <Card
            key={user.id}
              user={user}
              notMain={notMain}
            />
          ))
        }
        </CardListStyles>
    );
}

CardDisplay.propTypes = {
    items: PropTypes.array,
    notMain: PropTypes.bool,
    badgeText: PropTypes.string,
};

export default CardDisplay


