import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom"; // Routes를 import로 변경
import ProfileTextTool from "./ProfileTextTool";
import ProfileImgClick from "../pages/ProfileImgClick";
import axios from "axios";

// Styled component 정의
const ProfileBoxCss = styled.div`
@media only screen and (min-width: 430px) {
    width:365px;
    margin-left: auto;
margin-right: auto;
margin-top: auto;
margin-bottom: 50px;
}

@media only screen and (max-width: 430px) {
max-width: auto;
margin-left: auto;
margin-right: auto;
margin-top: auto;
margin-bottom: 50px;
};
  border: 2px solid #59d2d2;
  width: 289px;
  height: 173px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 15px;
`;

const ProfileImgbox = styled.div`
  height: 134px;
  width: 144px;
  margin-right: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
`;

const ProfileImg = styled.div`
  border: 1px solid black;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
`;

const ProfileEdit = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const ProfileBox = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Axios를 사용하여 이미지 URL을 가져오는 요청을 보냅니다.
    axios
      .get("/api/getImageUrls") // 실제 백엔드 API 엔드포인트로 변경해야 합니다.
      .then((response) => {
        setImageUrls(response.data); // 가져온 이미지 URL을 상태에 설정합니다.
      })
      .catch((error) => {
        console.error("이미지 URL 가져오기 오류:", error);
      });
  }, []);

  return (
    <ProfileBoxCss>
      <ProfileImgbox>
        {imageUrls.map((imageUrl, index) => (
          <ProfileImg key={index} imageUrl={imageUrl} />
        ))}
        <ProfileImg/>
        <ProfileImg/>
        <ProfileImg/>
        <ProfileImg
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <Link to="/profileImgClick">더보기</Link>
          {/* 다른 페이지로 이동할 Link 추가 */}
        </ProfileImg>
      </ProfileImgbox>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <ProfileTextTool /> {/* marginTop을 0으로 설정 */}
        <ProfileEdit>
          <img
            src="highlight.png" // 이미지 파일 경로
            alt="Edit"
            style={{
              width: "20px",
              height: "20px",
              cursor: "pointer",
              marginRight: "5px",
            }}
            onClick={() => {
              // 이미지를 클릭했을 때 실행할 함수 또는 이벤트 핸들러를 여기에 추가
              // 예: 클릭 이벤트 핸들러 함수
            }}
          />
        </ProfileEdit>
      </div>

      <Routes>
        <Route path="/profileImgClick" element={<ProfileImgClick />} />
      </Routes>
    </ProfileBoxCss>
  );
};

export default ProfileBox;
