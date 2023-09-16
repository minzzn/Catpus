import styled from "styled-components";

export const LoginBox = styled.div`
  @media only screen and (min-width: 430px) {
    width: 365px;
    margin: auto;
  }

  @media only screen and (max-width: 430px) {
    max-width: auto;
    margin: auto;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center; /* 수평 가운데 정렬 */
  height: 100vh; /* 화면 높이 만큼 늘리기 */
`;

export const LoginTitle = styled.div`
  color: #0bc1c1;
  font-family: Inter;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: left;
  margin-left: 50px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  margin-top: 20px; /* 요소 간 간격 조절 */
`;
export const InputId = styled.input`
  width: 70%;
  padding: 10px;
  border: 1px solid black;
  border-radius: 15px;
  outline: none;
  color: #767676;
  text-align: center;
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 10px;
`;

export const InputPw = styled.input`
  width: 70%;
  padding: 10px;
  border: 1px solid black;
  border-radius: 15px;
  outline: none;
  color: #767676;
  text-align: center;
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 10px;
`;

export const SubmitButton = styled.button`
  width: 76%; /* 입력란과 동일한 너비 설정 */
  padding: 10px;
  border: 1px solid #0bc1c1;
  border-radius: 15px;
  outline: none;
  color: #0bc1c1;
  background-color: #fff;
  text-align: center;
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 30px; /* 입력란과 동일한 간격 설정 */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const InputName = styled.input`
  width: 70%;
  padding: 10px;
  border: 1px solid black;
  border-radius: 15px;
  outline: none;
  color: #767676;
  text-align: center;
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 5px;
`;

export const LoginSubtitle = styled.div`
  color: #000;
  width: 120px;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: left;
  margin-left: 50px;
  float: left;
`;

export const SelectBox = styled.div`
  position: relative;
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-bottom: 1px solid black;
  width: 70%;
  padding: 10px;
  border-radius: 15px;
  background-color: #ffffff;
  align-self: center;
  border: 1px solid black;
  cursor: pointer;
  margin-top: 10px;
  text-align: center; /* 중앙 정렬 추가 */
  &::before {
    content: "⌵ 찾기";
    position: absolute;
    top: 1px;
    right: 8px;
    margin: 10px;
    color: #0bc1c1;
    font-size: 13px;
  }
`;

export const Label = styled.label`
  color: #767676;
  text-align: center;
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 25px;
  left: 0;
  width: 100%;
  overflow: hidden;
  max-height: ${(props) => (props.show ? "200px" : "0")};
  padding: 0;
  border-radius: 10px;
  margin-bottom: 3px;
  background-color: #fff;
  color: black;
  border: ${(props) =>
    props.show ? "1px solid black" : "none"}; /* 변경된 부분 */
  transition: max-height 0.01s ease-in;
`;

export const Option = styled.li`
  font-size: 14px;
  padding: 10px 8px;
  color: #767676;
  text-align: center;
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`;

export const LoginLogo = styled.img`
  width: 35px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: left; /* 수직 가운데 정렬 */
  margin-bottom: 50px;
  margin-top: 5px;
`;
