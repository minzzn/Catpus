import styled from "styled-components";

export const TitleBox = styled.div`
  font-weight: 600;
  font-size: 18px;
  padding: 10px 0px;
`;

export const Image = styled.img`
  width: 70px;
  height: 100px;
`;

export const MenuItem = styled.div`
  display: inline-block;
  padding: 10px;
  flex-direction: column;
`;

export const CatList = styled.div`
  width: 350px;
  height: 140px;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  justify-content: center;
`;

export const CatNameBox = styled.div`
  font-weight: 600;
`;

export const ItemBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainContainer = styled.div`
  margin: 20px 0;
`;

export const BoardContainer = styled.div`
  width: 300px;
  border: 2px solid #0bc1c1;
  border-radius: 10px;
  padding: 20px;
`;

export const BoardItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0px;
`;

export const BoardItemBox = styled.div`
  font-size: 15px;
`;

export const Advertisement = styled.div`
  background-color: grey;
  width: 350px;
  height: 100px;
`;

export const Center = styled.div`
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
  justify-content: space-around;
  height: 100vh;
  align-items: center;
`;
