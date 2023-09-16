import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ProfileTextBox = styled.div`
  height: 113px;
  width: 120px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr; /* 세로 비율 조절 (1대1대1대1대3) */
`;

const ProfileTextline = styled.div`
  display: flex;
`;

const ProfileText1 = styled.div`
  font-weight: bold;
  margin-right: 10px;
  font-size: 12px;
`;

const ProfileText2 = styled.div`
  font-size: 12px;
`;

const ProfileTextTool = () => {
  const [profileData, setProfileData] = useState({
    gender: 'Male',
    features: 'Friendly',
    personality: 'Playful',
    neutered: 'No',
  });

  useEffect(() => {
    // Axios를 사용하여 데이터베이스에서 정보를 가져오는 요청을 보냅니다.
    axios
      .get('/api/getProfileData') // 실제 백엔드 API 엔드포인트로 변경해야 합니다.
      .then((response) => {
        setProfileData(response.data); // 가져온 정보를 상태에 설정합니다.
      })
      .catch((error) => {
        console.error('프로필 데이터 가져오기 오류:', error);
      });
  }, []);

  return (
    <ProfileTextBox>
      <ProfileTextline>
        <ProfileText1>성별</ProfileText1>
        <ProfileText2>{profileData.gender}</ProfileText2>
      </ProfileTextline>
      <ProfileTextline>
        <ProfileText1>특징</ProfileText1>
        <ProfileText2>{profileData.features}</ProfileText2>
      </ProfileTextline>
      <ProfileTextline>
        <ProfileText1>성격</ProfileText1>
        <ProfileText2>{profileData.personality}</ProfileText2>
      </ProfileTextline>
      <ProfileTextline>
        <ProfileText1>중성화</ProfileText1>
        <ProfileText2>{profileData.neutered}</ProfileText2>
      </ProfileTextline>
    </ProfileTextBox>
  );
};

export default ProfileTextTool;
