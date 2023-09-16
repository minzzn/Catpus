import React from "react";
import { useNavigate } from "react-router-dom";
import { Header, PreviousButton, HeaderNameBox } from "./AppBar.style";

function AppBar({ str, url, icon }) {
  const navigate = useNavigate();
  return (
    <Header>
      <PreviousButton onClick={() => navigate(url)}>{icon}</PreviousButton>
      <HeaderNameBox>{str}</HeaderNameBox>
    </Header>
  );
}

export default AppBar;
