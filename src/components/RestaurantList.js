import React from "react";
import Restaurant from "./Restaurant";
import { iceCreamShops } from "../api/icecreamshops";

function RestaurantList() {
  return (
    <section className="restaurant__list">
      {iceCreamShops.map(iceCreamShop => {
        return (
          <Restaurant key={iceCreamShop.title} iceCreamShop={iceCreamShop} />
        );
      })}
    </section>
  );
}

export default RestaurantList;
