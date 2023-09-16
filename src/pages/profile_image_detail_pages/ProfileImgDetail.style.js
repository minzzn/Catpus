import styled from "styled-components";

export const Box = styled.div`
  @media only screen and (min-width: 430px) {
    width: 365px;
    margin: auto;
  }

  @media only screen and (max-width: 430px) {
    max-width: auto;
    margin: auto;
  }
  display: flex;

  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
`;
