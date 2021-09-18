import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../styles/styling-variables'
import PropTypes from "prop-types"

const BadgeContainer = styled.div`
    color: ${Colors.heartColor};
    line-height: 5rem;
`

function Badge(props) {
    return (
        <BadgeContainer>
            {props.badgeText}
        </BadgeContainer>
    )
}

Badge.propTypes = {
    badgeText: PropTypes.string
  };

export default Badge
