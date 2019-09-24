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

export default function Home({ history, location }) {
  //
  //
  const params = new URLSearchParams(location.search);

  //
  //
  const [filters, setFilters] = React.useState({
    Type: params.get("type") || "",
    Distance: params.get("distance") || "",
    Rating: params.get("rating") || ""
  });
  // Type: "american"

  function handleFilterChange(name, value) {
    // const newFilter = {
    //   name: name,
    //   value: value
    // };
    const newFilters = { ...filters }; // or Object.assign({}, filters) -> copy an object
    if (value) {
      newFilters[name] = value;
    } else {
      delete newFilters[name];
    }

    setFilters(newFilters);
    history.push(`${location.pathname}?${params.toString()}`);
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
