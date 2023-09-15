import styled from 'styled-components';
import LogoCat from '../assets/LogoCat.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <LoginBox>
      <Section>
        <LoginTitle>Catpus</LoginTitle>
        <LoginLogo src={LogoCat} alt="로고" />
        <InputBox>
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
          <SubmitButton onClick={() => navigate('/main')}>
            로그인
          </SubmitButton>
          <SignUpButton>
            처음 이용하세요?  
            <SignUpLink onClick={() => navigate('/signup')}>
              회원가입
            </SignUpLink>
          </SignUpButton>
        </InputBox>
      </Section>
    </LoginBox>
  );
};

export default Login;

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
  align-items: center; /* 수직 가운데 정렬 */
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
  text-align: center;
`;

const LoginLogo = styled.img`

`;

const InputBox = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const InputId = styled.input`
  width: 70%;
  padding: 10px;
  border: 1px solid black;
  border-radius: 20px;
  outline: none;
  color: #767676;
  text-align: center;
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const InputPw = styled.input`
  width: 70%;
  padding: 10px;
  border: 1px solid black;
  border-radius: 20px;
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
  border-radius: 20px;
  outline: none;
  color: #0BC1C1;
  background-color: #FFF;
  text-align: center;
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 10px;
`;

const SignUpButton = styled.div`
  color: #767676;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: none;
  margin-top: 20px;
`;

const SignUpLink = styled.button`
  color: #767676;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  border: none;
  background-color:#FFF;
`;