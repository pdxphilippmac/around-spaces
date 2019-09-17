import React from "react";

function Restaurant(props) {
  return (
    <div className="restaurant">
      <img
        src={props.iceCreamShop.imgSrc}
        className="restaurant__img"
        alt={props.iceCreamShop.title}
      />

      <h1>{props.iceCreamShop.title}</h1>

      <p>Rating: {props.iceCreamShop.rating} stars</p>
      <p>Distance: {props.iceCreamShop.distance} min.</p>
      <p>Description: {props.iceCreamShop.description}</p>
    </div>
  );
}

export default Restaurant;
