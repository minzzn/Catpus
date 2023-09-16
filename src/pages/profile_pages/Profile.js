import React from "react";
import ProfileBox from "./profile_box/ProfileBox";
import CatEatting from "./cat_eatting/CatEatting";
import CatComment from "./cat_comment/CatComment";
import CatpusButton from "../../components/button/CatpusButton";
import MobileSize from "../../main_layout/main_layout";
import { FaChevronLeft } from "react-icons/fa";
import AppBar from "../../components/appbar/AppBar";

function Profile() {
  return (
    <MobileSize>
      <AppBar str={"글쓰기"} url={"/main"} icon={<FaChevronLeft />} />
      <ProfileBox />
      <CatEatting />
      <CatComment style={{}} />
      <CatpusButton str="집사수첩" onClick={console.log("dd")} />
    </MobileSize>
  );
}

export default Profile;
