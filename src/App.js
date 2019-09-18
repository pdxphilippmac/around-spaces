import React from "react";
import "./App.css";
import Header from "./components/Header";
import FilterList from "./components/FilterList";
import RestaurantList from "./components/RestaurantList";

function App() {
  const [filters, setFilters] = React.useState({
    distance: "< 2min",
    rating: "***",
    categories: "american"
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
    <div className="App">
      <Header />
      <main>
        <FilterList
          preSelectedFilter={filters}
          onFilterChange={handleFilterChange}
        />
        <RestaurantList selectedFilter={filters} />
      </main>
    </div>
  );
}

export default App;
