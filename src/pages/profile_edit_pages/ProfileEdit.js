import React, { useState } from "react";
import axios from "axios";

import MobileSize from "../../main_layout/main_layout";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  CheckboxLabel,
  Checkbox,
  SubmitButton,
  CloseButton,
} from "./ProfileEdit.style";

function PetForm() {
  const [profileData, setProfileData] = useState({
    gender: "",
    characteristics: "",
    personality: "",
    neutered: false,
  });

  const navigate = useNavigate(); // useNavigate를 컴포넌트 내에서 선언

  const handleCloseButtonClick = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setProfileData({ ...profileData, [name]: inputValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://your-server-endpoint.com/api/pets", profileData);
      alert("데이터가 성공적으로 전송되었습니다.");
    } catch (error) {
      console.error("데이터 전송 중 오류 발생:", error);
      alert("데이터 전송 중 오류가 발생했습니다.");
    }
  };

  return (
    <MobileSize>
      <FormContainer>
        <CloseButton onClick={handleCloseButtonClick}>x</CloseButton>
        <Title>정보 수정</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>성별:</Label>
            <Input
              type="text"
              name="gender"
              value={profileData.gender}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>특징:</Label>
            <Input
              type="text"
              name="characteristics"
              value={profileData.characteristics}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>성격:</Label>
            <Input
              type="text"
              name="personality"
              value={profileData.personality}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <CheckboxLabel>
              중성화 여부:
              <Checkbox
                type="checkbox"
                name="neutered"
                checked={profileData.neutered}
                onChange={handleChange}
              />
            </CheckboxLabel>
          </FormGroup>
          <SubmitButton type="submit">전송</SubmitButton>
        </Form>
      </FormContainer>
    </MobileSize>
  );
}

export default PetForm;
