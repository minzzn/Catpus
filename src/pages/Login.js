import styled from 'styled-components';
import LogoCat from '../assets/LogoCat.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'; // js-cookie 라이브러리 임포트

const Login = () => {
  const navigate = useNavigate();

  const sendRequestWithAccessToken = async (url, method, data = {}) => {
    // refreshToken은 쿠키에서 가져오기
    const refreshToken = Cookies.get('refreshToken'); // js-cookie 라이브러리 사용
    
    try {
      // accessToken을 쿠키에서 가져오기
      const accessToken = Cookies.get('accessToken'); // js-cookie 라이브러리 사용

      const response = await axios({
        method,
        url,
        data,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // 만료된 accessToken을 서버에 다시 요청하고, 새로운 accessToken을 받아옵니다.
        const newAccessToken = await refreshAccessToken();
        // 새로운 accessToken으로 다시 요청을 보냅니다.
        const response = await axios({
          method,
          url,
          data,
          headers: {
            Authorization: `Bearer ${newAccessToken}`,
          },
        });

        return response.data;
      } else {
        // 에러 처리
        console.error('에러 발생:', error);
        throw error;
      }
    }
  };

  const refreshAccessToken = async () => {
    try {
      // /refresh 경로로 refreshToken을 서버에 보내 재발급합니다.
      const response = await axios.post('/refresh', {
        refreshToken: Cookies.get('refreshToken'), // js-cookie 라이브러리 사용
      });

      if (response.status === 200) {
        // 새로운 accessToken을 받아와서 쿠키 또는 저장소에 저장합니다.
        const newAccessToken = response.data.accessToken;
        // 여기에서 accessToken을 저장하는 코드를 작성하세요. (쿠키 또는 localStorage 사용)
        Cookies.set('accessToken', newAccessToken); // js-cookie 라이브러리 사용
        return newAccessToken;
      }
    } catch (error) {
      console.error('AccessToken 재발급 실패:', error);
      // refreshToken 탈취 시 자동 로그아웃 처리
      clearCookies(); // 모든 쿠키 제거 등 로그아웃 처리
      throw error;
    }
  };

  const handleLogin = async () => {
    try {
      // accessToken과 refreshToken을 쿠키에서 가져오기
      const accessToken = Cookies.get('accessToken');
      const refreshToken = Cookies.get('refreshToken');
  
      // 로그인 요청
      const data = await sendRequestWithAccessToken('/api/login', 'POST', {
        // 로그인에 필요한 데이터를 여기에 추가
      });
      console.log('로그인 성공:', data);
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };


  // clearCookies 함수를 정의하여 로그아웃 처리
  const clearCookies = () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    // 다른 쿠키들도 있다면 유사하게 제거합니다.
  };

  // 로그인 버튼 클릭 시 실행될 함수로 변경
  const handleLoginClick = () => {
    handleLogin();
  };

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
          <SubmitButton onClick={() => handleLogin()}>로그인</SubmitButton>
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