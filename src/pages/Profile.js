import React from "react";
import ProfileBox from "../components/ProfileBox";
import styled from "styled-components";
import CatEatting from "../components/CatEatting";
import CatComment from "../components/CatComment";
import CatpusButton from "../components/CatpusButton";
import left from "../assets/left.png";
import { useNavigate } from 'react-router-dom';
import MobileSize from "../main_layout/main_layout";

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



function Profile() {
  const navigate = useNavigate();

  return (
    <MobileSize>
       <Header>
        <PreviousButton src={left} alt="이전페이지 버튼" onClick={() => navigate('/main')} />
        프로필
      </Header>
      <ProfileBox />
      <CatEatting />
        <CatComment style={{}} />
      <CatpusButton/>
    </MobileSize>
  );
}

export default Profile;
