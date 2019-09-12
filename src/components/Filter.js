import React from "react";

function Filter(props) {
  return (
    <div className="filter">
      <select>
        <option>{props.iceCreamFilter.name}</option>
      </select>
    </div>
  );
}

export default Filter;
