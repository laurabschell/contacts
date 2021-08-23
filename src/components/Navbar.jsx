import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { Colors } from './styling-variables'
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = styled.header`
    background-color: ${Colors.navbarBgColor};
    height: 10vh;
    min-height: 60px;
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100vw;
    box-shadow: ${Colors.shadow};
`

const Nav = styled.nav`
    display: flex;
    width: 60vw;
    height: 100%;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
`

const TitleH1 = styled.h1`
    font-size: 1.8rem;
    font-weight: 500;
`

const Navigation = styled.div`
    display: flex;
    align-items: center;
`

const Menu = styled.ul`
    display: flex;
    margin: 0 5rem;
`

const MenuItems = styled.li`
    list-style-type: none;
    margin: 0 2rem;
    font-weight: 500;
    cursor: pointer;

    
`
const NavLinks = {
    textDecoration: "none",
    color: "black",
}

const NewButton = styled.a`
    background-color: ${Colors.newGreen};
    text-decoration: none;
    color: beige;
    padding: .5rem .8rem;
    border-radius: 3px;
    font-size: .7rem;
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    box-shadow: ${Colors.shadow};
    cursor: pointer;
    display: flex;
`


const FaPlusIconStyles = {
    color: "white",
    margin: "0 .3rem 0 0",
}

const Navbar = () => {
    return (
        <Router>
            <Header>
                <Nav>
                    <TitleH1>Contacts</TitleH1>
                    <Navigation>
                        <Menu>
                            <MenuItems>
                                <Link style={{NavLinks}} to="/">Overview</Link>
                            </MenuItems>
                            <MenuItems>
                                <Link style={{NavLinks}} to="/contacts-list">Contacts</Link>
                            </MenuItems>
                            <MenuItems>
                                <Link style={{NavLinks}} to="/favorites">Favorites</Link>
                            </MenuItems>
                        </Menu>
                        <NewButton>
                            <FaPlus style={FaPlusIconStyles} />
                            New
                        </NewButton>
                    </Navigation>
                </Nav>
            </Header>
        </Router>
    )
}

export default Navbar;
