import React from 'react'
import { FaHashtag, FaRegHeart } from 'react-icons/fa'
import styled from 'styled-components'
import { Colors } from '../../styles/styling-variables'
import PropTypes from 'prop-types';

const SectTitle = styled.div`
    margin: 0 0 1.2rem 0;
    display: flex;
    align-items: baseline;
`

const Title = styled.h2`
    font-size: 1.1rem;
    font-weight: 500;
    margin-left: .3rem;
`


function SectionTitle(props) {
    return (
        <SectTitle>
            {props.icon === "heart" 
                ? <FaRegHeart style={{color: Colors.heartColor}}/> 
                : <FaHashtag style={{color: Colors.hashtagColor}} 
            />}
            <Title>{props.title}</Title>
        </SectTitle>
    )
}

SectionTitle.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string
};

export default SectionTitle
