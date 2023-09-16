import React from "react";
import ImageCarousel from "../components/ImgCarousel";
import ProfileTextTool from "../components/ProfileTextTool";
import styled from "styled-components";
import MobileSize from "../main_layout/main_layout";
import left from "../assets/left.png";
import { useNavigate } from "react-router-dom";
import AppBar from "../components/appbar/AppBar";
import { FaChevronLeft } from "react-icons/fa";

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
      <AppBar str={"사진들"} url={"-1"} icon={<FaChevronLeft />} />
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
