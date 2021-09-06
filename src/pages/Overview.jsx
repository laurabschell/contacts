import React from 'react'
import ContactsList from './ContactsList'
import Favorites from './Favorites'

function Overview() {
    return (
        <>
            <Favorites overview={true}/>
            <ContactsList overview={true} />
        </>
    )
}

export default Overview
