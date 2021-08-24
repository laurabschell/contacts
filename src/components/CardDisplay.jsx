import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import userImg from '../assets/user.png'

const CardListStyles = styled.div`
    display: flex;
    justify-content: space-between;
`

function CardDisplay() {
    return (
        <CardListStyles>
            <Card 
                UserImg={userImg}
                UserName="User Name"
                UserEmail="user@email.com"
                fav={true}
                />
            <Card 
                UserImg={userImg}
                UserName="User Name"
                UserEmail="user@email.com"
                fav={false}
                />
            <Card 
                UserImg={userImg}
                UserName="User Name"
                UserEmail="user@email.com" 
                fav={false}
                />
            <Card 
                UserImg={userImg}
                UserName="User Name"
                UserEmail="user@email.com" 
                fav={true}
                />
        </CardListStyles>
    )
}

export default CardDisplay
