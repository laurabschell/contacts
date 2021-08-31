import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Badge from './Badge'
import Card from './Card'

const CardListStyles = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
`

const CardDisplay = ({
    users = [],
    lengthDisplay = 12
    // handleToFav
    }) => {

    return (
        <CardListStyles>
            {users.length === 0 ?
            <Badge /> :
            users.slice(0, lengthDisplay).map((user) => (
            <Card 
                UserImg = {user.avatar}
                UserFirstName= {user.first_name}
                UserLastName= {user.last_name}
                UserEmail= {user.email}
                UserId={user.id}
                // handleToFav={handleToFav}
                /> 
            ))}
        </CardListStyles>
    );
}

export default CardDisplay
