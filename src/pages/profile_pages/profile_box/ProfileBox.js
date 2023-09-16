import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom"; // Routes를 import로 변경
import ProfileTextTool from "./profile_text_tool/ProfileTextTool";
import ProfileImgClick from "../../ProfileImgClick";
import {
  ProfileBoxCss,
  ProfileImgbox,
  ProfileImg,
  ProfileEdit,
} from "./ProfileBox.style";
import axios from "axios";

// Styled component 정의

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
        <ProfileImg />
        <ProfileImg />
        <ProfileImg />
        <ProfileImg
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
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
