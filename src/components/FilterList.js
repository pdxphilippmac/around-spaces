import React from "react";
import Filter from "./Filter";
import { iceCreamFilter } from "../api/iceCreamFilter";
import styled from "styled-components";

const StyledFilterlist = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background: #014040;
  align-items: center;
  flex-grow: 1;
  border-radius: 10px;
  padding: 8px;
  box-shadow: 0px 2px 5px 2px black;
  z-index: 1;
`;

function FilterList({ onFilterChange, preSelectedFilter }) {
  return (
    <StyledFilterlist>
      {iceCreamFilter.map(iceCreamFilter => {
        return (
          <Filter
            key={iceCreamFilter.categories}
            iceCreamFilter={iceCreamFilter}
            onChange={onFilterChange}
            preSelectedFilter={preSelectedFilter[Filter.name]}
          />
        );
      })}
    </StyledFilterlist>
  );
}

export default FilterList;
