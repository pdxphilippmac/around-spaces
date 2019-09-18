import React from "react";

function Filter({ iceCreamFilter, onChange, preSelectedFilter }) {
  // const [filter, setFilter] = React.useState("");
  return (
    <>
      <select
        className="filter"
        onChange={event => {
          onChange(iceCreamFilter.name, event.target.value);
        }}
        value={preSelectedFilter}
      >
        <option value="">{iceCreamFilter.name}</option>

        {iceCreamFilter.options.map(singleIceCreamFilter => {
          // const selected = singleIceCreamFilter === preSelectedFilter;

          return (
            <option
              key={singleIceCreamFilter}
              value={singleIceCreamFilter}
              // selected={selected}
            >
              {singleIceCreamFilter}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Filter;
