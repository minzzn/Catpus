import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login_pages/Login";
import Main from "./pages/main_pages/Main";
import SignUp from "./pages/sign_up_pages/SignUp";
import Profile from "./pages/profile_pages/Profile";
import PostList from "./pages/board_pages/PostList";
import ReadPost from "./pages/read_post_pages/ReadPost";
import PostWrite from "./pages/post_write_pages/PostWrite";
import ProfileImgClick from "./pages/profile_image_detail_pages/ProfileImgDetail";
import ProfileEdit from "./pages/profile_edit_pages/ProfileEdit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/post-list" element={<PostList />}></Route>
        <Route path="/ReadPost" element={<ReadPost />}></Route>
        <Route path="/PostWrite" element={<PostWrite />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Main" element={<Main />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/ProfileImgClick" element={<ProfileImgClick />}></Route>
        <Route path="/ProfileEdit" element={<ProfileEdit />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
