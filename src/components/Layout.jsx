import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/actions/usersActions';
import GlobalStyle from '../styles/GlobalStyle';
import Form from './Form/Form';
import Navbar from './Navbar/Navbar'

const Layout = ({children}) => {
    const [displayForm, setDisplayForm] = useState(false);
    const dispatch = useDispatch();

    function handleToggleForm() {
        setDisplayForm(!displayForm);
        console.log("function of toggle")
    }

    function handleAddContact(newContact) {
        dispatch(addContact(newContact))
    }

    return (
        <div className="App">
            <Navbar displayForm={displayForm} handleToggleForm={handleToggleForm}/>
            {displayForm && <Form handleOnSubmit={handleAddContact} handleExit={handleToggleForm}/>}
            {children}
            <GlobalStyle />
        </div>
    )
}

export default Layout;
