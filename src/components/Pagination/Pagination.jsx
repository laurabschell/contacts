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
`

function Pagination(props) {
  const totalItems = props.totalItems;
  const usersPerPage = props.usersPerPage;
  const paginate = props.paginate;
  const pageNumbers = [];

  for (let i = 1; 1 <= Math.ceil(totalItems / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationBar>
      <p>paginacion</p>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </PaginationBar>
  );
}

export default Pagination;