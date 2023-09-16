import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MobileSize } from "../../main_layout/main_layout";
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
  CatNameBox,
  Center,
} from "./Main.style";
import logo from "../../assets/Logo.png";
import AppBar from "../../components/appbar/AppBar";

const Main = () => {
  const navigate = useNavigate();
  var list = [
    { name: "cat1", imageSrc: "https://storage.enuri.info/pic_upload/knowbox2/202210/025533979202210153bb05d98-2e95-4c64-8570-1f1d459e6403.jpg" },
    { name: "cat2", imageSrc: "https://storage.enuri.info/pic_upload/knowbox2/202210/025533979202210153bb05d98-2e95-4c64-8570-1f1d459e6403.jpg" },
    { name: "cat3", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Kv5ZqsjUVN6oHP0lsYKZXuoxPgbcklUE0A&usqp=CAU" },
    { name: "cat4", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrIJU4NueLZDK5ZRF9u8Gl2wxoywCfoD_dLQ&usqp=CAU" },
    { name: "cat5", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdXTa1hUOX6RWXXfMKUWshcM9HXezuuCIYA&usqp=CAU" },
    { name: "cat5", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7aqo9MTZP_ukaBMPQ7DZrrzqC3au7GEcDg&usqp=CAU" },
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
              navigate(`/profile`);
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
              navigate(`/post-list`);
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
      <MobileSize>
        <AppBar
          str={"침대학교"}
          url={"/main"}
          icon={<img src={logo} width={"20px"} alt="logo"></img>}
        />
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
      </MobileSize>
    </>
  );
};

export default Main;
