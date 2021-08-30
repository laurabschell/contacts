import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from './Card'

const CardListStyles = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
    /* justify-content: center; */
`

function CardDisplay(props) {

    // const fav = useSelector(state => state.fav);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users?per_page=16')
            .then((response) => response.json())
            .then(data => setUsers(data.data))
    }, [])


    return (
        <CardListStyles>
            {users.slice(0, props.lengthDisplay).map((user) => (
            <Card 
                UserImg = {user.avatar}
                UserFirstName= {user.first_name}
                UserLastName= {user.last_name}
                UserEmail= {user.email}
                fav={props.fav}
                UserId={user.id}
                /> 
            ))}
        </CardListStyles>
    );
}

export default CardDisplay
