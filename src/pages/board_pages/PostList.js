import { React, useState, useCallback } from "react";
import PostBox from "./components/post_box/PostBox";
import DropDown from "./components/dropdown/Dropdown.js";
import CatpusButton from "../../components/button/CatpusButton";
import { MobileSize } from "../../main_layout/main_layout";
import { PostListView, DropdownBox } from "./PostList.style.js";
import axios from "axios";

const PostList = () => {
  axios
    .get("http://223.130.161.72:8080/user/boards/list")
    .then((response) => {
      // 요청 성공 시 실행될 코드
      console.log(response.data); // 서버 응답 데이터
    })
    .catch((error) => {
      // 요청 실패 시 실행될 코드
      console.error("에러 발생:", error);
    });

  const options = ["전체", "고양 2", "고양 3", "고양 4"];

  const [postList, setPostList] = useState([
    { id: 1, title: "제목1", content: "내용1", imageSrc: "", imageAlt: "" },
    { id: 2, title: "제목2", content: "내용2", imageSrc: "", imageAlt: "" },
    { id: 3, title: "제목3", content: "내용3", imageSrc: "", imageAlt: "" },
    { id: 4, title: "제목4", content: "내용1", imageSrc: "", imageAlt: "" },
    { id: 5, title: "제목5", content: "내용2", imageSrc: "", imageAlt: "" },
    { id: 6, title: "제목6", content: "내용3", imageSrc: "", imageAlt: "" },
    { id: 7, title: "제목7", content: "내용1", imageSrc: "", imageAlt: "" },
    { id: 8, title: "제목8", content: "내용2", imageSrc: "", imageAlt: "" },
    { id: 9, title: "제목9", content: "내용3", imageSrc: "", imageAlt: "" },
    { id: 10, title: "제목10", content: "내용3", imageSrc: "", imageAlt: "" },
    { id: 11, title: "제목11", content: "내용3", imageSrc: "", imageAlt: "" },
  ]);

  const addPost = useCallback(() => {
    setPostList((postList) => [
      ...postList,
      { id: 11, title: "제목11", content: "내용3", imageSrc: "", imageAlt: "" },
      ,
    ]);
  }, [postList]);

  return (
    <>
      <MobileSize>
        <DropdownBox>
          <DropDown data={options} />
        </DropdownBox>
        <PostListView>
          {postList.map((item, index) => (
            <PostBox key={index} data={item} />
          ))}
        </PostListView>
        <CatpusButton str="작성하기" onClick={console.log("dd")} />
      </MobileSize>
    </>
  );
};

export default PostList;
