import React from "react";
import Restaurant from "./Restaurant";
import { iceCreamShops } from "../api/icecreamshops";

function RestaurantList(props) {
  //props=selectedFilter
  // console.log(props.selectedFilter);
  const filterediceCreamShop = iceCreamShops.filter(filteredShops => {
    if (props.selectedFilter.name === "Type") {
      return filteredShops.categories.includes(props.selectedFilter.value);
    }
    if (props.selectedFilter.name === "Distance") {
      switch (props.selectedFilter.value) {
        case "<5min":
          return filteredShops.distance < 5;
        case "<15min":
          return filteredShops.distance < 15;
        case "<60min":
          return filteredShops.distance < 60;
        default:
          break;
      }
      // return filteredShops.distance < 3;
    }
    if (props.selectedFilter.name === "Rating") {
      switch (props.selectedFilter.value) {
        case "*****":
          return filteredShops.rating >= 5;
        case "****":
          return 3.9 < filteredShops.rating;
        case "***":
          return filteredShops.rating < 4.0 && filteredShops.rating >= 3;
        case "**":
          return filteredShops.rating < 2.9;
        case "*":
          return filteredShops.rating < 2;
        default:
          break;
      }
      // return filteredShops.rating < 5;
    }
    return true;
    // if (props.selectedFilter.type === "type") {
    //   return filteredShops.type.includes(props.selectedFilter.type);
    // }

    // return filteredShops.distance < props.selectedFilter.value;
  });
  console.log(props.selectedFilter.value);
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
