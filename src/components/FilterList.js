import React from "react";
import Filter from "./Filter";
import { iceCreamFilter } from "../api/iceCreamFilter";

function FilterList(props) {
  return (
    <div className="filter__list">
      {iceCreamFilter.map(iceCreamFilter => {
        return (
          <Filter
            key={iceCreamFilter.categories}
            iceCreamFilter={iceCreamFilter}
            onChange={props.onFilterChange}
          />
        );
      })}
    </div>
  );
}

export default FilterList;
