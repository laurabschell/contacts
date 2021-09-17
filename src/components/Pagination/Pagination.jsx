import React from "react";
import styled from "styled-components";
import { Colors } from '../../styles/styling-variables'
import PropTypes from 'prop-types';

const PaginationBar = styled.div`    
  background-color: ${Colors.navbarBgColor};
  margin: 1rem;
  padding: 0 1.5em;
  border-radius: 5px;
  box-shadow: ${Colors.shadow};
  font-weight: 700;
  font-size: .8rem;
  display: flex;
  justify-content: flex-end;
`

const PageItem = styled.div`
  color: grey;
  margin: .8rem;
`

const PageLink = styled.p`
  cursor: pointer;
`

const Pagination = ({ contactsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / contactsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers)

  return (
    <PaginationBar>
      {pageNumbers.map((number) => (
        <PageItem key={number}>
          <PageLink onClick={() => paginate(number)}>
            {number}
          </PageLink>
        </PageItem>
      ))}
    </PaginationBar>
  );
}

Pagination.propTypes = {
  usersPerPage: PropTypes.number,
  totalItems: PropTypes.number,
  paginate: PropTypes.func,
  pageNumbers: PropTypes.array
};

export default Pagination;