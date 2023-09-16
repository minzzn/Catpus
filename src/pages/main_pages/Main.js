import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TitleBox,
  MenuItem,
  Image,
  CatList,
  ItemBox,
  BoardContainer,
  MainContainer,
  BoardItem,
  BoardItemBox,
  Advertisement,
  Center,
  CatNameBox,
} from "./Main.style";

const Main = () => {
  const navigate = useNavigate();
  var list = [
    { name: "cat1", imageSrc: "" },
    { name: "cat2", imageSrc: "" },
    { name: "cat3", imageSrc: "" },
    { name: "cat4", imageSrc: "" },
    { name: "cat5", imageSrc: "" },
    { name: "cat5", imageSrc: "" },
  ];

  var boardList = [
    { boardName: "cat1 게시판", boardTitle: "title1" },
    { boardName: "cat2 게시", boardTitle: "title2" },
    { boardName: "cat3 게시", boardTitle: "title3" },
    { boardName: "cat4 게시", boardTitle: "title4" },
    { boardName: "cat5 게시", boardTitle: "title5" },
  ];

  /* 고양이 프로필 가로 스크롤 리스트 */
  const HorizontalScrollList = ({ items }) => {
    return (
      <CatList>
        {items.map((item, index) => (
          //
          <MenuItem
            onClick={() => {
              navigate(`/cat-info/catname`);
            }}
          >
            <Image src={item.imageSrc} />
            <CatNameBox>{item.name}</CatNameBox>
          </MenuItem>
        ))}
      </CatList>
    );
  };

  /* 고양이 게시판 컨테이너 */
  const BoardList = ({ items }) => {
    return (
      <BoardContainer>
        {items.map((item, index) => (
          <BoardItem
            onClick={() => {
              navigate(`/pages/ReadPost`);
            }}
          >
            <BoardItemBox>{item.boardName}</BoardItemBox>
            <BoardItemBox>{item.boardTitle}</BoardItemBox>
          </BoardItem>
        ))}
      </BoardContainer>
    );
  };

  return (
    <>
      <Center>
        <MainContainer>
          <TitleBox>고양이 프로필</TitleBox>
          <ItemBox>
            <HorizontalScrollList items={list} />
          </ItemBox>
        </MainContainer>
        <Advertisement />
        <MainContainer>
          <TitleBox>게시판</TitleBox>
          <ItemBox>
            <BoardList items={boardList} />
          </ItemBox>
        </MainContainer>
      </Center>
    </>
  );
};

export default Main;
