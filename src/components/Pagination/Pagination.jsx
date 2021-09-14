import React from "react";
import styled from "styled-components";
import { Colors } from '../../styles/styling-variables'

const PaginationBar = styled.div`    
  background-color: ${Colors.navbarBgColor};
  width: 100%w;
  padding: 1em;
  text-align: end;
  border-radius: 5px;
  box-shadow: ${Colors.shadow};
  margin: 1rem;
  font-weight: 700;
  display: flex;
  justify-content: flex-end;
`

const PageItem = styled.div`
  color: grey;
  margin: 1rem;
`

const PageLink = styled.p`
  cursor: pointer;
`

const Pagination = ({ usersPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / usersPerPage); i++) {
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

export default Pagination;