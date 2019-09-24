import React from "react";
import styled from "styled-components";

const StyledIceShop = styled.article`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 15px;
  /* height: 45vh; */
  width: 45vh;
  background: linear-gradient(
    322deg,
    rgba(170, 173, 186, 1) 0%,
    rgba(250, 249, 249, 1) 14%,
    #95e8c1
  );
  margin: 5px;

  font-size: 20px;
  /* justify-content: center; */
  /* display: flex; */
  padding: 15px;
  margin-top: 20px;
  box-shadow: 0px 2px 5px 2px black;
  z-index: 1;
  text-align: center;
`;

const StyledIceShopImage = styled.img`
  /* margin: 20px; */
  height: 100px;
  /* width: 150px; */
  box-shadow: 0px 2px 5px 2px black;
  /* z-index: 1; */
`;

function Restaurant(props) {
  return (
    <StyledIceShop>
      <StyledIceShopImage
        src={props.iceCreamShop.imgSrc}
        className="restaurant__img"
        alt={props.iceCreamShop.title}
      />

      <h1>{props.iceCreamShop.title}</h1>

      <p>Rating: {props.iceCreamShop.rating} stars</p>
      <p>Distance: {props.iceCreamShop.distance} min.</p>
      <p>Description: {props.iceCreamShop.description}</p>
      <p>Category: {props.iceCreamShop.categories}</p>
    </StyledIceShop>
  );
}

export default Restaurant;
