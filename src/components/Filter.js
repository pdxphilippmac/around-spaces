import React from "react";
import styled from "styled-components";

const StyledFilter = styled.select`
  border: black solid 1px;
  background: rgb(106, 121, 85);
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
`;

function Filter({ iceCreamFilter, onChange, preSelectedFilter }) {
  // const [filter, setFilter] = React.useState("");
  return (
    <>
      <StyledFilter
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
      </StyledFilter>
    </>
  );
}

export default Filter;
