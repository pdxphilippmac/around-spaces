import React from "react";

import "./App.css";
import Header from "./components/Header";
import FilterList from "./components/FilterList";
import RestaurantList from "./components/RestaurantList";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <FilterList />
        <RestaurantList />
      </main>
    </div>
  );
}

export default App;
