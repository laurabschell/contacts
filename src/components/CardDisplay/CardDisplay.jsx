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
    notMain
    }) => {        
       
    return (
        <CardListStyles>
            {items.length === 0 ? <Badge /> :
            items.map((user) => (
            <Card
                user_avatar= {user.avatar}
              user_id={user.id}
              user_first_name={user.first_name}
              user_last_name={user.last_name}
              user_email={user.email}
              user_is_favorite={user.is_favorite}
              user={user}
              notMain={notMain}
            />
          ))
        }
        </CardListStyles>
    );
}

CardDisplay.propTypes = {
    favList: PropTypes.array,
    contactsList: PropTypes.array
};

export default CardDisplay


