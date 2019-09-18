import React from "react";
import Filter from "./Filter";
import { iceCreamFilter } from "../api/iceCreamFilter";

function FilterList({ onFilterChange, preSelectedFilter }) {
  return (
    <div className="filter__list">
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
    </div>
  );
}

export default FilterList;
