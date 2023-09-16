import styled from "styled-components";

export const Header = styled.div`
  text-align: center;
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 15px;
  border-bottom: 1px solid #a4a4a4;
  display: flex;
  align-items: center;

  /* justify-content: center; */
`;

export const PreviousButton = styled.button`
  /* float: left; */
  background-color: white;
  border: none;
  margin: 5px;
  /* display: none; */
`;

export const HeaderNameBox = styled.div`
  display: inline-flex;
  justify-content: center;
  flex-grow: 1;
`;
