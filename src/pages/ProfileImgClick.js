import React from 'react';
import ImageCarousel from '../components/ImgCarousel';
import ProfileTextTool from '../components/ProfileTextTool';
import styled from 'styled-components';
import MobileSize from "../main_layout/main_layout";
import left from "../assets/left.png";
import { useNavigate } from 'react-router-dom';

const Header = styled.div`
  text-align: center;
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 15px;
  text-align: center;
  
`;
const PreviousButton = styled.img`
  float: left;
 margin-right: -100px;
`;

const ProfileImgClick = () => {
  const navigate = useNavigate();



  return (
    <MobileSize>
    <Header>
        <PreviousButton src={left} alt="이전페이지 버튼" onClick={() => navigate('/Profile')} />
        사진들
      </Header>
    <ImageCarousel />
      <ProfileTextTool />    
      <div style={{display:'flex',justifyContent:'flex-end',marginRight:5}}>
        <img src='/img/Mask group.png' alt='catlogo' style={{width:30,height:30}}></img></div>
        </MobileSize>
      
  );
}

export default ProfileImgClick;
