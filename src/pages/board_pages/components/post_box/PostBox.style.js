import styled from "styled-components";

export const Title = styled.div`
  font-size: 14px;
  color: black;
  text-decoration: none;
`;

export const Content = styled.div`
  font-size: 12px;
  padding-top: 10px;
  color: black;
  text-decoration: none;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: 40px;
`;

export const Post = styled.div`
  @media only screen and (min-width: 430px) {
    width: 365px;
    margin: auto;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border-top : 1px solid black;
    border-bottom : 1px solid black; */
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
`;
