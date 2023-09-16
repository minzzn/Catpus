import React from "react";
import ProfileBox from "../components/ProfileBox";
import styled from "styled-components";
import CatEatting from "../components/CatEatting";
import CatComment from "../components/CatComment";
import CatpusButton from "../components/CatpusButton";
import left from "../assets/left.png";
import { useNavigate } from 'react-router-dom';


const MobileSize = styled.div`
@media only screen and (min-width: 430px) {
    width:365px;
    margin-left: auto;
    margin-right: auto;
}

@media only screen and (max-width: 430px) {
max-width: auto;
margin-left: auto;
    margin-right: auto;
};
  display: flex;
  
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;




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
        글쓰기
      </Header>
      <ProfileBox />
      <CatEatting />
        <CatComment style={{}} />
      <CatpusButton/>
    </MobileSize>
  );
}

export default Profile;
