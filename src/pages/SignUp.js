import styled from 'styled-components';
import Logo from '../assets/Logo.png';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'

const SignUp = () => {
  const navigate = useNavigate();
  const [currentValue, setCurrentValue] = useState("학교 입력");
  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = (e) => {
  const { innerText } = e.target;
  setCurrentValue(innerText);
  };


  return (
    <LoginBox>
      <Section>
        <LoginTitle>Catpus</LoginTitle>
        <InputContainer>
           <LoginSubtitle>회원가입</LoginSubtitle>
            <LoginLogo src={Logo} alt="로고" />
        </InputContainer>
        <InputBox>
          <InputName
            type="Name"
            id="Name"
            placeholder="이름"
          />
          <InputId
            type="email"
            id="email"
            placeholder="이메일 또는 아이디"
          />
          <InputPw
            type="password"
            id="password"
            placeholder="비밀번호 입력"
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
  margin-top: 50px;
  text-align: center;
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
  width: 77%;
  padding: 10px;
  border: 1px solid #0BC1C1 ;
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
  margin-top: 30px;
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
}`;

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
}`;

const SelectBox = styled.div`
position: relative;
font-family: Ubuntu;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
boder-bottom:1px solid black;
width: 70%;
padding: 10px;
border-radius: 15px;
background-color: #ffffff;
align-self: center;
border:1px solid black;
cursor: pointer;
margin-top:10px;
margin-left:43px;
&::before {
  content: "⌵ 찾기";
  position: absolute;
  top: 1px;
  right: 8px;
  margin:10px;
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