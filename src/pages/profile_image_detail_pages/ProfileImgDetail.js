import React from "react";
import ImageCarousel from "./ImgCarousel/ImgCarousel";
import ProfileTextTool from "../components/ProfileTextTool";
import { Box } from "./ProfileImgDetail.style";
import MobileSize from "../../main_layout/main_layout";
import { useNavigate } from "react-router-dom";
import AppBar from "../../components/appbar/AppBar";
import { FaChevronLeft } from "react-icons/fa";

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
