import styled from "styled-components";

export const ProfileBoxCss = styled.div`
  @media only screen and (min-width: 430px) {
    width: 365px;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 430px) {
    max-width: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: 50px;
  }
  border: 2px solid #59d2d2;
  width: 289px;
  height: 173px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 15px;
`;

export const ProfileImgbox = styled.div`
  height: 134px;
  width: 144px;
  margin-right: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
`;

export const ProfileImg = styled.div`
  border: 1px solid black;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
`;

export const ProfileEdit = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
