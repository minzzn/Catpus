import React from "react";
import styled from "styled-components";

const Clickbutton = styled.button`
  @media only screen and (min-width: 430px) {
    width: 365px;
    margin: auto;
  }

  @media only screen and (max-width: 430px) {
    max-width: auto;
    margin: auto;
  }
  width: 114px;
  height: 33px;
  background-color: #59d2d2;
  color: #ffffff;
  border: none;
  border-radius: 15px;
  font-size: 20px;
`;

function CatpusButton({ str, onClick }) {
  return <Clickbutton onClick={onClick}>{str}</Clickbutton>;
}

export default CatpusButton;
