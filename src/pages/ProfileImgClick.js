import React from "react";
import ImageCarousel from "../components/ImgCarousel";
import ProfileTextTool from "./profile_pages/profile_box/profile_text_tool/ProfileTextTool";
import styled from "styled-components";

const Box = styled.div`
  @media only screen and (min-width: 430px) {
    width: 365px;
    margin: auto;
  }

  @media only screen and (max-width: 430px) {
    max-width: auto;
    margin: auto;
  }
  display: flex;

  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
`;

const ProfileImgClick = () => {
  return (
    <Box>
      <ImageCarousel />
      <ProfileTextTool />
      <div
        style={{ display: "flex", justifyContent: "flex-end", marginRight: 5 }}
      >
        <img
          src="/img/Mask group.png"
          alt="catlogo"
          style={{ width: 30, height: 30 }}
        ></img>
      </div>
    </Box>
  );
};

export default ProfileImgClick;
