import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  LoginBox,
  Section,
  LoginTitle,
  InputBox,
  InputId,
  InputPw,
  SubmitButton,
  InputName,
  LoginSubtitle,
  SelectBox,
  Label,
  SelectOptions,
  Option,
  LoginLogo,
  InputContainer,
} from "./SignUp.style";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [currentValue, setCurrentValue] = useState("학교 입력");
  const [showOptions, setShowOptions] = useState(false);
  const [userid, setUserid] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [username, setUsername] = useState("");
  const [univname, setUnivname] = useState("");

  const handleOnChangeSelectValue = (e) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      // 여기서 apiUrl을 서버의 실제 엔드포인트로 변경해야 합니다.
      const response = await axios.post("/api/v1/register", {
        id: userid,
        password: userpassword,
        name: username,
        univname: univname,
      });

      console.log(response);
      alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
      navigate("/");
    } catch (error) {
      console.error("회원가입 중 오류 발생:", error);
      alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
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
            type="name"
            id="name"
            placeholder="이름"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <InputId
            type="id"
            id="id"
            placeholder="아이디"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
            required
          />
          <InputPw
            type="password"
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
          <SubmitButton onClick={() => navigate("/main")}>
            회원가입
          </SubmitButton>
        </InputBox>
      </Section>
    </LoginBox>
  );
};

export default SignUp;
