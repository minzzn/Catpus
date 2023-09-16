import styled from "styled-components";

export const Catmilk = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 430px) {
    width: 365px;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (max-width: 430px) {
    max-width: auto;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
  }
`;

export const CatmilkCountBox = styled.div`
  @media only screen and (min-width: 430px) {
    width: 365px;
    margin: auto;
  }

  @media only screen and (max-width: 430px) {
    max-width: auto;
    margin: auto;
  }
  width: 289px;
  height: 17px;
  border: 1px solid #0bc1c1;
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CatmilkCount1 = styled.div`
  width: 84px;
  height: 9px;
  border-radius: 15px;
  border: 1px solid #59d2d2;
`;

export const CatmilkCount2 = styled.div`
  width: 84px;
  height: 9px;
  border-radius: 15px;
  border: 1px solid #59d2d2;
`;

export const CatmilkCount3 = styled.div`
  width: 84px;
  height: 9px;
  border-radius: 15px;
  border: 1px solid #59d2d2;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 10px;
  text-align: center;
`;
