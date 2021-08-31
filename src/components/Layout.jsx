import React from 'react'
import GlobalStyle from '../styles/GlobalStyle';
import Navbar from './Navbar'

const Layout = ({children}) => {
    return (
        <div className="App">
            <Navbar />
            {children}
            <GlobalStyle />
        </div>
    )
}

export default Layout;
