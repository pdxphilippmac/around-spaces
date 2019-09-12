import React from "react";

function Filter(props) {
  return (
    <div className="filter">
      <select>
        <option>{props.iceCreamFilter.name}</option>
        {props.iceCreamFilter.options.map(singleIceCreamFilter => {
          return (
            <option key={singleIceCreamFilter}>{singleIceCreamFilter}</option>
          );
        })}
      </select>
    </div>
  );
}

export default Filter;
