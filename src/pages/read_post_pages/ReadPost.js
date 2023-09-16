import left from "../assets/left.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import more from "../assets/more.png"; // more 이미지 import
import heart from "../assets/heart.png";
import circle from "../assets/circle.png";
import Coment from "../components/Coment";
import AppBar from "../../components/appbar/AppBar";
import { FaChevronLeft } from "react-icons/fa";
import {
  ReadPostBox,
  PostContainer,
  UserName,
  PostTitle,
  DropdownButton,
  DropdownIcon,
  DropdownContent,
  PostTitleContainer,
  Heart,
  Detail,
} from "./ReadPost.style";

const ReadPost = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <ReadPostBox>
      <AppBar str={"집사 수첩"} url={"/postwrite"} icon={<FaChevronLeft />} />
      <PostTitleContainer>
        <PostTitle>제목</PostTitle>
        <DropdownButton onClick={toggleDropdown}>
          <DropdownIcon src={more} alt="더보기 버튼" />
        </DropdownButton>
        {isDropdownOpen && (
          <DropdownContent>
            {/* 드롭다운 내용을 이곳에 추가하세요 */}
            <div>삭제하기</div>
            <div>수정하기</div>
          </DropdownContent>
        )}
      </PostTitleContainer>
      <UserName>사용자 이름</UserName>
      <PostContainer>
        <img
          src="https://via.placeholder.com/350x300"
          alt="logo"
          class="postimg"
        />
        <img src={heart} alt="더보기 버튼" />
        <img src={circle} alt="더보기 버튼" />
        <Heart>좋아요 12개</Heart>
        <Detail>
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용 내용내용
        </Detail>
      </PostContainer>
      <Coment />
    </ReadPostBox>
  );
};

export default ReadPost;
