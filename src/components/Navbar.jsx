import React from 'react';
import styled from 'styled-components'
import Button from './Button'
import { Colors } from '../styles/styling-variables'
import { Link } from 'react-router-dom';

const Header = styled.header`
    background-color: ${Colors.navbarBgColor};
    height: 8vh;
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100vw;
    box-shadow: ${Colors.shadow};
`

const Nav = styled.nav`
    display: flex;
    width: 65vw;
    height: 100%;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
`

const TitleH1 = styled.h1`
    font-size: 1.3rem;
    font-weight: 500;
`

const Navigation = styled.div`
    display: flex;
    align-items: center;
`

const Menu = styled.ul`
    display: flex;
    font-size: .9em;
    margin: 0 1rem;
`

const MenuItems = styled.li`
    list-style-type: none;
    margin: 0 2rem;
`

const NavLinksStyle = {
    textDecoration: "none",
    color: "black"
}

function Navbar() {
    return (
        <Header>
            <Nav>

                <TitleH1>Contacts</TitleH1>
                <Navigation>
                    <Menu>
                        <MenuItems>
                            <Link style={NavLinksStyle} to="/">
                                Overview
                            </Link>
                        </MenuItems>
                        <MenuItems>
                            <Link style={NavLinksStyle} to="/contacts-list">
                                Contacts
                            </Link>
                        </MenuItems>
                        <MenuItems>
                            <Link style={NavLinksStyle} to="/favorites">
                                Favorites
                            </Link>
                        </MenuItems>
                    </Menu>

                    {/* <Switch>
                        <Route path="/">
                            <Overview />
                        </Route>
                        <Route path="/favorites">
                            <Favorites />
                        </Route>
                        <Route path="/contacts-list">
                            <ContactsList />
                        </Route>
                    </Switch> */}
                    <Button />
                </Navigation>
            </Nav>
        </Header>
    )
}

export default Navbar;
