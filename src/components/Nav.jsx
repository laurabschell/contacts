import React from "react";
import styled from "styled-components";

const Navbar = styled.div`
    background-color: #4D4A52;
`;

const Title = styled.h1`
    color: white;
    font-family: Arial;
    font-size: 1.5em;
`;

const Ul = styled.ul`
    display: flex;
    float: right;
`;

const Nav = () => {
    return (
        <Navbar>
            <Title>Contacts</Title>
            <Ul>
                <li>Overview</li>
                <li>Contacts</li>
                <li>Favorites</li>
            </Ul>
        </Navbar>
    );
};

export default Nav;