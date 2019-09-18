import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  font-family: "Amatic SC", cursive;
  z-index: 10;
  flex-shrink: 0;
  font-size: 28px; /* looks shit */
  align-items: center;

  text-transform: uppercase;
  color: palevioletred;
  text-shadow: 5px 5px 5px purple;

  height: 80px;
  justify-content: center;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0, #275950),
    color-stop(100, #141726)
  );

  display: flex;
  width: 100%;
  box-shadow: 0px 2px 5px 2px black;
  z-index: 1;

  /*props example*/
`;

function Header() {
  return (
    <StyledHeader>
      <h1>IceCream Yeah!</h1>
    </StyledHeader>
  );
}

export default Header;
