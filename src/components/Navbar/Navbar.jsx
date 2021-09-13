import React from 'react';
import styled from 'styled-components'
import { Colors } from '../../styles/styling-variables'
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

const Header = styled.header`
    background-color: ${Colors.navbarBgColor};
    height: 8vh;
    top: 0;
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

const Button = styled.button`
    background-color: ${props => props.text === "new" ? Colors.newGreen : 'beige'};
    color: ${props => props.text === "new" ? 'white' : Colors.fontColor};
    float: right;
    width: 4rem;
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

function Navbar(props) {
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
                    <Button 
                        text="new" 
                        onClick={props.handleToggleForm} 
                    >
                        <FaPlus style={FaPlusIconStyles} />
                        new</Button>
                </Navigation>
            </Nav>
        </Header>
    )
}

export default Navbar;
