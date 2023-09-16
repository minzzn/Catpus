import styled from "styled-components";
import left from "../assets/left.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import more from "../assets/more.png"; // more 이미지 import
import heart from "../assets/heart.png";
import circle from "../assets/circle.png";
import Coment from "../components/Coment";

const ReadPost = () => {
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <ReadPostBox>
      <Header>
        <PreviousButton
          src={left}
          alt="이전페이지 버튼"
          onClick={() => navigate("/postwrite")}
        />
        집사 수첩
      </Header>
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
        <PostImg
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

const ReadPostBox = styled.div`
  @media only screen and (min-width: 430px) {
    width: 365px;
    margin: auto;
  }

  @media only screen and (max-width: 430px) {
    max-width: auto;
    margin: auto;
  }

  border: 1px solid #a4a4a4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
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
  margin-right: 18px;
`;

const PostContainer = styled.div`
  padding: 35px 35px 0px 20px;
`;

const PreviousButton = styled.img`
  float: left;
`;

const UserName = styled.div`
  border-bottom: 1px solid #a4a4a4;
  padding: 5px 15px; /* 상하 여백 5px, 좌우 여백 15px */
  color: #000;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const PostTitle = styled.div`
  padding: 10px 15px 0px 15px;
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const DropdownIcon = styled.img`
  font-size: 20px;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 80px; /* 이미지 바로 아래로 조정 */
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
  min-width: 50px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    margin: 5px 0;
    cursor: pointer;
  }
`;

const PostTitleContainer = styled.div`
  display: flex;
  border-top: 1px solid #a4a4a4;
  justify-content: space-between; /* 제목과 드롭다운 버튼을 오른쪽으로 정렬 */
`;

const PostImg = styled.img``;

const Heart = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 5px;
`;

const Detail = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 5px;
  margin-bottom: 20px;
  border-bottom: 1px solid #a4a4a4;
`;
