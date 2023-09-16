import styled from "styled-components";

export const ReadPostBox = styled.div`
  @media only screen and (min-width: 430px) {
    width: 365px;
    margin: auto;
  }

  @media only screen and (max-width: 430px) {
    max-width: auto;
    margin: auto;
  }

  border: 1px solid #a4a4a4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const PostContainer = styled.div`
  padding: 35px 35px 0px 20px;
`;

export const UserName = styled.div`
  border-bottom: 1px solid #a4a4a4;
  padding: 5px 15px; /* 상하 여백 5px, 좌우 여백 15px */
  color: #000;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PostTitle = styled.div`
  padding: 10px 15px 0px 15px;
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DropdownButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const DropdownIcon = styled.img`
  font-size: 20px;
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 80px; /* 이미지 바로 아래로 조정 */
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
  min-width: 50px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    margin: 5px 0;
    cursor: pointer;
  }
`;

export const PostTitleContainer = styled.div`
  display: flex;
  justify-content: space-between; /* 제목과 드롭다운 버튼을 오른쪽으로 정렬 */
`;

export const Heart = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 5px;
`;

export const Detail = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 5px;
  margin-bottom: 20px;
  border-bottom: 1px solid #a4a4a4;
`;
