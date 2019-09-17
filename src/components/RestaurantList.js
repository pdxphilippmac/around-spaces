import React from "react";
import Restaurant from "./Restaurant";
import { iceCreamShops } from "../api/icecreamshops";

function RestaurantList({ selectedFilter }) {
  const filterediceCreamShop = iceCreamShops.filter(filteredShops => {
    // let keepRestaurants = true;
    if (selectedFilter.Type) {
      return filteredShops.categories.includes(selectedFilter.Type);
    }
    if (selectedFilter.Distance) {
      switch (selectedFilter.Distance) {
        case "<5min":
          return filteredShops.distance < 5;
        case "<15min":
          return filteredShops.distance < 15;
        case "<60min":
          return filteredShops.distance < 60;
        default:
          break;
      }
    }
    if (selectedFilter.Rating) {
      switch (selectedFilter.Rating) {
        case "*****":
          return filteredShops.rating >= 5;
        case "****":
          return 3.9 < filteredShops.rating;
        case "***":
          return filteredShops.rating < 4.0 && filteredShops.rating >= 3;
        case "**":
          return filteredShops.rating < 3.0 && filteredShops.rating >= 2;
        case "*":
          return filteredShops.rating < 2;
        default:
          break;
      }

      // return filteredShops.rating < 5;
    }
    return true;
  });

  return (
    <section className="restaurant__list">
      {filterediceCreamShop.map(iceCreamShop => {
        return (
          <Restaurant key={iceCreamShop.title} iceCreamShop={iceCreamShop} />
        );
      })}
    </section>
  );
}

export default RestaurantList;
