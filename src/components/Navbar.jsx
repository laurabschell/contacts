import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { Colors } from './styling-variables'

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

    &:hover {
        color: ${Colors.newGreen};
        transition: .5s;
    }
`

const NewButton = styled.a`
    background-color: ${Colors.newGreen};
    text-decoration: none;
    color: beige;
    padding: .5rem .8rem;
    border-radius: 3px;
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    box-shadow: ${Colors.shadow};
    cursor: pointer;
`

// no me los toma por estar dentro del NewButton
const FaPlusIconStyles = {
    color: "white",
    margin: "0 .3rem 0 0",
}



const Navbar = () => {
    return (
        <Header>
            <Nav>
                <TitleH1>Contacts</TitleH1>
                <Navigation>
                    <Menu>
                        <MenuItems href="">Overview</MenuItems>
                        <MenuItems href="">Contacts</MenuItems>                        
                        <MenuItems href="">Favorites</MenuItems>                        
                    </Menu>
                    <NewButton>
                        <FaPlus syles={FaPlusIconStyles} />
                        New
                    </NewButton>
                </Navigation>
            </Nav>
        </Header>
    )
}

export default Navbar;
