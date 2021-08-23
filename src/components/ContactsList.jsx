import React from 'react'
import styled from 'styled-components'
import { FaRegHeart, FaBan, FaHashtag } from 'react-icons/fa'
import { Colors } from './styling-variables'
import UserImg from '../assets/user.png' 

const ContactsListsection = styled.div`
    margin: 4em auto 0 auto;
    width: 60vw;
`

const SectionTitle = styled.div`
    margin: 0 0 2rem 0;
    display: flex;
    align-items: baseline;
`

const Title = styled.h2`
    font-size: 1.4rem;
    font-weight: 500;
`

const fahashtag = {
    fontSize: '1.9rem',
    fontWeight: '500',
    margin: '0 .3rem 0 0',
    color: Colors.hashtagColor,
}

const CardsDisplay = styled.div`
    display: flex;
    justify-content: space-between;
`

const Card = styled.div`
    background-color: ${Colors.navbarBgColor};
    width: 13vw;
    padding: 2em 0;
    text-align: center;
    border-radius: 5px;
    box-shadow: ${Colors.shadow};
`

const ImgCard = styled.img`
    border: 2.8px solid rgba(0, 0, 0, 0.224);
    border-radius: 6px;
    width: 5em;
    border: 2.8px solid ${Colors.heartColor};
`

const CardText = styled.div`
    font-family: 'Rubik', sans-serif;
    margin: 1rem;
    font-size: 1rem;
    font-weight: 100;
`

function ContactsList() {
    return (
        <ContactsListsection>
            <SectionTitle>
                <FaHashtag style={fahashtag} />
                <Title>Contacts List</Title>
            </SectionTitle>
            <CardsDisplay>
                <Card>
                    <ImgCard src={UserImg}/>
                    <CardText>
                        <h4>user name</h4>
                        <p style={{fontSize: '.8rem'}}>email@email.com</p>
                    </CardText>
                    <FaBan style={{color: Colors.trashColor}} />
                </Card>
            </CardsDisplay>
        </ContactsListsection>
    )
}

export default ContactsList
