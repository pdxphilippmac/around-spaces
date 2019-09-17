import React from "react";

import "./App.css";
import Header from "./components/Header";
import FilterList from "./components/FilterList";
import RestaurantList from "./components/RestaurantList";

function App() {
  const [filter, setFilter] = React.useState("");
  function handleFilterChange(name, value) {
    console.log(`${filter}, ${name}`);
    const newFilter = {
      name: name,
      value: value
    };
    setFilter(newFilter);
  }
  return (
    <div className="App">
      <Header />
      <main>
        <FilterList onFilterChange={handleFilterChange} />
        <RestaurantList selectedFilter={filter} />
      </main>
    </div>
  );
}

export default App;
