import React from "react";
import Filter from "./Filter";
import { iceCreamFilter } from "../api/iceCreamFilter";
function FilterList() {
  return (
    <div className="filter__list">
      {iceCreamFilter.map(iceCreamFilter => {
        return (
          <Filter
            key={iceCreamFilter.categories}
            iceCreamFilter={iceCreamFilter}
          />
        );
      })}
    </div>
  );
}

export default FilterList;
