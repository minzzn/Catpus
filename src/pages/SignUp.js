import styled from 'styled-components';
import Logo from '../assets/Logo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import MobileSize from "../main_layout/main_layout";

const SignUp = () => {
  const navigate = useNavigate();
  const [currentValue, setCurrentValue] = useState("학교 입력");
  const [showOptions, setShowOptions] = useState(false);
  const [userid, setUserid] = useState('');
  const [userpassword, setUserpassword] = useState('');
  const [username, setUsername] = useState('');

  const handleOnChangeSelectValue = (e) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      // 여기서 apiUrl을 서버의 실제 엔드포인트로 변경해야 합니다.
      const response = await axios.post('/api/v1/register', {
        id: userid,
        password: userpassword,
        name: username,
        univname: univname,
      });

      console.log(response);
      alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
      navigate('/');
    } catch (error) {
      console.error("회원가입 중 오류 발생:", error);
      alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };


  return (
    <MobileSize>
      <LoginBox>
        <Section>
          <LoginTitle>Catpus</LoginTitle>
          <InputContainer>
            <LoginSubtitle>회원가입</LoginSubtitle>
              <LoginLogo src={Logo} alt="로고" />
          </InputContainer>
          <InputBox>
            <InputName
              type='name'
              id="name"
              placeholder="이름"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <InputId
              type='id'
              id="id"
              placeholder="아이디"
              value={userid}
              onChange={(e) => setUserid(e.target.value)}
              required
            />
            <InputPw
              type='password'
              id="pw"
              placeholder="비밀번호 입력"
              value={userpassword}
              onChange={(e) => setUserpassword(e.target.value)}
            />
            <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
              <Label>{currentValue}</Label>
              <SelectOptions show={showOptions}>
                <Option onClick={handleOnChangeSelectValue}>경북대학교</Option>
                <Option onClick={handleOnChangeSelectValue}>계명대학교</Option>
                <Option onClick={handleOnChangeSelectValue}>영남대학교</Option>
              </SelectOptions>
            </SelectBox>
            <SubmitButton onClick={() => navigate('/main')}>
              회원가입
            </SubmitButton>
          </InputBox>
        </Section>
      </LoginBox>
    </MobileSize>
  );
};

export default SignUp;

const LoginBox = styled.div`
  @media only screen and (min-width: 430px) {
    width: 365px;
    margin: auto;
  }

  @media only screen and (max-width: 430px) {
    max-width: auto;
    margin: auto;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center; /* 수평 가운데 정렬 */
  height: 100vh; /* 화면 높이 만큼 늘리기 */
`;

const LoginTitle = styled.div`
  color: #0BC1C1;
  font-family: Inter;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: left;
  margin-left:50px;
`;


const InputBox = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  margin-top: 20px; /* 요소 간 간격 조절 */
`;
const InputId = styled.input`
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
  margin-top:10px;
`;

const InputPw = styled.input`
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

const SubmitButton = styled.button`
  width: 76%; /* 입력란과 동일한 너비 설정 */
  padding: 10px;
  border: 1px solid #0BC1C1;
  border-radius: 15px;
  outline: none;
  color: #0BC1C1;
  background-color: #FFF;
  text-align: center;
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 30px; /* 입력란과 동일한 간격 설정 */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const InputName = styled.input`
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

const LoginSubtitle = styled.div`
  color: #000;
  width:120px;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align:left;
  margin-left:50px;
  float:left;
`;

const SelectBox = styled.div`
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
    color: #0BC1C1;
    font-size: 13px;
  }
`;

const Label = styled.label`
  color: #767676;
  text-align: center;
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const SelectOptions = styled.ul`
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
  border: ${(props) => (props.show ? "1px solid black" : "none")}; /* 변경된 부분 */
  transition: max-height 0.01s ease-in;
`;

const Option = styled.li`
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

const LoginLogo = styled.img`
  width: 35px;
  `;

const InputContainer = styled.div`
display: flex;
align-items: left; /* 수직 가운데 정렬 */
margin-bottom:50px;
margin-top:5px;
`;
