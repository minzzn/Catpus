import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Title, Content, Image, Post } from "./PostBox.style";

function PostBox({ data }) {
  const navigate = useNavigate();

  return (
    <>
      <Post
        onClick={() => {
          navigate(`/pages/ReadPost`);
        }}
      >
        <Box>
          <Title>{data.title}</Title>
          <Content>{data.content}</Content>
        </Box>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFgheiE5wAO0VlWKvP75sZQljWs5CrSOYnw&usqp=CAU"
          alt="image"
        />
      </Post>
      <hr />
    </>
  );
}

export default PostBox;
