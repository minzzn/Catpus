import styled from "styled-components";

export const CatCommentBox = styled.div`
  @media only screen and (min-width: 430px) {
    width: 365px;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (max-width: 430px) {
    max-width: auto;
    margin-left: auto;
    margin-right: auto;
  }

  height: 63px;
  width: 289px;
  display: flex;
  flex-direction: column;
  border: 1px solid #0bc1c1;
  border-radius: 15px;
  justify-content: space-around;
  margin-bottom: 30px;
`;
