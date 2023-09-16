import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MobileSize from '../main_layout/main_layout';


const FormContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #0BC1C1;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const SubmitButton = styled.button`
  background-color: #0BC1C1;
  color: #fff;
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function PetForm() {
  const [formData, setFormData] = useState({
    gender: '',
    characteristics: '',
    personality: '',
    neutered: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://your-server-endpoint.com/api/pets', formData);
      alert('데이터가 성공적으로 전송되었습니다.');
    } catch (error) {
      console.error('데이터 전송 중 오류 발생:', error);
      alert('데이터 전송 중 오류가 발생했습니다.');
    }
  };

  return (
    <MobileSize>
    <FormContainer>
      <Title>정보 수정</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>성별:</Label>
          <Input type="text" name="gender" value={formData.gender} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>특징:</Label>
          <Input type="text" name="characteristics" value={formData.characteristics} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>성격:</Label>
          <Input type="text" name="personality" value={formData.personality} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <CheckboxLabel>
            <Checkbox type="checkbox" name="neutered" checked={formData.neutered} onChange={handleChange} />
            중성화 여부:
          </CheckboxLabel>
        </FormGroup>
        <SubmitButton type="submit">전송</SubmitButton>
      </Form>
    </FormContainer>
    </MobileSize>
  );
}

export default PetForm;
