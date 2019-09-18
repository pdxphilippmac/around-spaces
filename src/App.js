import React from "react";
import "./App.css";
import Header from "./components/Header";
import FilterList from "./components/FilterList";
import RestaurantList from "./components/RestaurantList";
import styled from "styled-components";

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #275950;
`;

const StyledMain = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  text-align: center;
`;

function App() {
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
    <StyledApp>
      <Header />
      <StyledMain>
        <FilterList
          preSelectedFilter={filters}
          onFilterChange={handleFilterChange}
        />
        <RestaurantList selectedFilter={filters} />
      </StyledMain>
    </StyledApp>
  );
}

export default App;
