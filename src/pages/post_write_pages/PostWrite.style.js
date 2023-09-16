import styled from "styled-components";

export const ReadPostBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  @media only screen and (min-width: 430px) {
    width: 365px;
    margin: auto;
  }

  @media only screen and (max-width: 430px) {
    max-width: auto;
    margin: auto;
  }
`;

export const PostContainer = styled.div`
  padding: 15px;
`;

export const TitleInput = styled.input`
  color: #a4a4a4;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 10px;
  border: none;
  width: 325px;
  border-bottom: 1px solid #a4a4a4;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`;

export const PostOption = styled.div`
  padding: 10px;
`;

export const OptionButton = styled.button`
  border-radius: 15px;
  border: 1px solid #0bc1c1;
  margin: 5px;
  color: black;
`;

export const Picture = styled.img`
  margin-top: 0px;
  border-right: 1px solid #a4a4a4;
  margin-right: 5px;
`;

export const ContentInput = styled.textarea`
  width: 310px;
  height: 150px; /* Adjust the height as needed */
  padding: 0px;
  border: none; /* Remove the border */
  border-radius: 5px;
  resize: vertical;
  margin-top: 10px; /* 변경된 부분 */
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 330px; /* Adjust this value as needed */
`;

export const CenteredButton = styled.button`
  border-radius: 15px;
  background: #59d2d2;
  color: white;
  border: 1px solid #59d2d2;
`;
