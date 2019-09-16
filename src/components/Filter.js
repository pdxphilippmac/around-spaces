import React from "react";

function Filter(props) {
  // const [filter, setFilter] = React.useState("");
  return (
    <>
      <select
        className="filter"
        onChange={event =>
          props.onChange(props.iceCreamFilter.name, event.target.value)
        }
      >
        <option>{props.iceCreamFilter.name}</option>

        {props.iceCreamFilter.options.map(singleIceCreamFilter => {
          return (
            <option key={singleIceCreamFilter}>{singleIceCreamFilter}</option>
          );
        })}
      </select>
    </>
  );
}

export default Filter;
