import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css"
import Login from "./pages/Login";
// import Main from "./pages/Main";
import Main from "./pages/main_pages/Main";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import PostList from "./pages/board_pages/PostList";


const App = () =>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/main' element={<Main />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/post-list' element={<PostList/>}></Route>
    </Routes>
    </BrowserRouter>
  )
} 
export default App