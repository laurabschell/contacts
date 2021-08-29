import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from './Card'

const CardListStyles = styled.div`
    display: flex;
    justify-content: space-between;
`

function CardDisplay() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users')
        .then((response) => response.json())
        .then(data => setUsers(data.data))
    }, [])


    return (
        <CardListStyles>
            {users.map((user) => (
            <Card 
                UserImg = {user.avatar}
                UserFirstName= {user.first_name}
                UserLastName= {user.last_name}
                UserEmail= {user.email}
                fav= {true}
                /> 
            ))}
        </CardListStyles>
    );
}

export default CardDisplay
