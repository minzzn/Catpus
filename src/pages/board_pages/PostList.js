import { React, useState, useCallback } from "react";
import * as P from "./PostList.style";
import PostBox from "./components/post_box/PostBox";
// import Dropdown from 'react-dropdown';
import DropDown from "./components/dropdown/Dropdown.js";
import { PostListView, DropdownBox, Center } from "./PostList.style.js";

const PostList = () => {
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
      <Center>
        <DropdownBox>
          <DropDown data={options} />
        </DropdownBox>
        <PostListView>
          {postList.map((item, index) => (
            <PostBox key={index} data={item} />
          ))}
        </PostListView>
        <button onClick={addPost}>버튼</button>
      </Center>
    </>
  );
};

export default PostList;
