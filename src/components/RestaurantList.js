import React from "react";
import Restaurant from "./Restaurant";
import { iceCreamShops } from "../api/icecreamshops";
import styled from "styled-components";

const StyledIceShopList = styled.section`
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  background: #428c7f;
  overflow: scroll;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0, #275950),
    color-stop(100, #141726)
  );
`;

function RestaurantList({ selectedFilter }) {
  const filterediceCreamShop = iceCreamShops.filter(filteredShops => {
    let keepRestaurant = true;
    if (selectedFilter.Type) {
      return filteredShops.categories.includes(selectedFilter.Type);
    }
    if (selectedFilter.Distance) {
      switch (selectedFilter.Distance) {
        // case "Distance":
        //   keepRestaurant = filteredShops.distance > 1;
        //   break;
        case "<5min":
          keepRestaurant = filteredShops.distance < 5;
          break;
        case "<15min":
          keepRestaurant = filteredShops.distance < 15;
          break;
        case "<60min":
          keepRestaurant = filteredShops.distance < 60;

          break;
        default:
          break;
      }
    }
    // WORK ON THE RATING!!!!!!
    // if (keepRestaurant && selectedFilter.Rating) {
    //   keepRestaurant = filteredShops.Rating >= selectedFilter.Rating;
    // }
    if (keepRestaurant && filteredShops.Type) {
      keepRestaurant = filteredShops.Type.includes(selectedFilter.Type);
    }
    // if (selectedFilter.Rating) {
    //   switch (selectedFilter.Rating) {
    //     case "*****":
    //       keepRestaurant = filteredShops.rating >= 5;
    //       break;
    //     case "****":
    //       keepRestaurant = 3.9 < filteredShops.rating;
    //       break;

    //     case "***":
    //       keepRestaurant =
    //         filteredShops.rating < 4.0 && filteredShops.rating >= 3;
    //       break;
    //     case "**":
    //       keepRestaurant =
    //         filteredShops.rating < 3.0 && filteredShops.rating >= 2;
    //       break;
    //     case "*":
    //       keepRestaurant = filteredShops.rating < 2;
    //       break;
    //     default:
    //       break;
    //   }

    //   return filteredShops.rating < 5;
    // }
    return keepRestaurant;
  });

  return (
    <StyledIceShopList>
      {filterediceCreamShop.map(iceCreamShop => {
        return (
          <Restaurant key={iceCreamShop.title} iceCreamShop={iceCreamShop} />
        );
      })}
    </StyledIceShopList>
  );
}

export default RestaurantList;
