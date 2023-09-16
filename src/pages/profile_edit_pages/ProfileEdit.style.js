import styled from "styled-components";

export const FormContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #0bc1c1;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const Checkbox = styled.input`
  margin-right: 5px;
`;

export const SubmitButton = styled.button`
  background-color: #0bc1c1;
  color: #fff;
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #0bc1c1;
  cursor: pointer;
  float: right;
`;
