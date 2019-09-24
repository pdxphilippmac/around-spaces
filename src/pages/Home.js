import React from "react";

import FilterList from "../components/FilterList";
import RestaurantList from "../components/RestaurantList";
import styled from "styled-components";

const StyledMain = styled.main`
  width: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export default function Home() {
  const [filters, setFilters] = React.useState({
    Distance: "< 2min",
    rating: "***"
    // Type: "american"
  });
  function handleFilterChange(name, value) {
    // const newFilter = {
    //   name: name,
    //   value: value
    // };
    const newFilters = { ...filters }; // or Object.assign({}, filters) -> copy an object
    newFilters[name] = value;
    setFilters(newFilters);
  }
  return (
    <StyledMain>
      <FilterList
        preSelectedFilter={filters}
        onFilterChange={handleFilterChange}
      />
      <RestaurantList selectedFilter={filters} />
    </StyledMain>
  );
}
