import LogoCat from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import {
  LoginBox,
  Section,
  LoginTitle,
  InputBox,
  InputId,
  InputPw,
  SubmitButton,
  SignUpButton,
  SignUpLink,
} from "./Login.style";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const apiUrl = 'http://223.130.161.72:8080'; // 서버 엔드포인트

  const api = axios.create({
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json', // JSON 요청으로 설정
    },
  });

  const handleLogin = () => {
    api.post(`${apiUrl}/login`, { // 엔드포인트 수정
      password: password,
      id: id,
    }).then((response) => {
      const { accessToken, refreshToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      alert('로그인 성공');
      navigate('/main');
    }).catch((error) => {
      console.error(error); // 오류 출력
      alert('로그인 실패');
    });
  };

  return (
    <LoginBox>
      <Section>
        <LoginTitle>Catpus</LoginTitle>
        <img src={LogoCat} alt="로고" />
        <InputBox>
          <InputId type="text" id="id" placeholder="이메일 또는 아이디" onChange={(e) => setId(e.target.value)} />
          <InputPw type="password" id="password" placeholder="비밀번호 입력" onChange={(e) => setPassword(e.target.value)} />
          <SubmitButton onClick={() => handleLogin()}>로그인</SubmitButton>
          <SignUpButton>
            처음 이용하세요?
            <SignUpLink onClick={() => navigate("/signup")}>
              회원가입
            </SignUpLink>
          </SignUpButton>
        </InputBox>
      </Section>
    </LoginBox>
  );
};

export default Login;
