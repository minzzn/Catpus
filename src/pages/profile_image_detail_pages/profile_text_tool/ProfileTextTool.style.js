import styled from "styled-components";

export const ProfileTextBox = styled.div`
  height: 113px;
  width: 120px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr; /* 세로 비율 조절 (1대1대1대1대3) */
`;

export const ProfileTextline = styled.div`
  display: flex;
`;

export const ProfileText1 = styled.div`
  font-weight: bold;
  margin-right: 10px;
  font-size: 12px;
`;

export const ProfileText2 = styled.div`
  font-size: 12px;
`;
