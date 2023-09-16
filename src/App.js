import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css"
import Login from "./pages/Login";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import ProfileImgClick from "./pages/ProfileImgClick";



const App = () =>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/Main' element={<Main />}></Route>
      <Route path='/SignUp' element={<SignUp />}></Route>
      <Route path='/' element={<Profile/>}></Route>
      <Route path='/ProfileImgClick' element={<ProfileImgClick/>}></Route>

    </Routes>
    </BrowserRouter>
  )
} 
export default App