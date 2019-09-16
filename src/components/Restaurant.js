import React from "react";

function Restaurant(props) {
  return (
    <div className="restaurant">
      <img
        src={props.iceCreamShop.imgSrc}
        className="restaurant__img"
        alt={props.iceCreamShop.title}
      />
      <div>
        <h1>{props.iceCreamShop.title}</h1>
        <p>{props.iceCreamShop.rating}</p>
        <p>{props.iceCreamShop.distance}</p>
        <p>{props.iceCreamShop.description}</p>
      </div>
    </div>
  );
}

export default Restaurant;
