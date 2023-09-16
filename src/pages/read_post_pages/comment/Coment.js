import React, { useState } from "react";
import {
  ComentContainer,
  CommentInput,
  CommentButton,
  CommentList,
  CommentItem,
  UserName,
} from "./Comment.style";

const Coment = () => {
  // 댓글 목록을 저장하는 상태와 댓글 입력 필드의 값을 저장하는 상태 정의
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  // 댓글을 추가하는 함수
  const addComment = () => {
    if (commentText.trim() !== "") {
      setComments([...comments, commentText]);
      setCommentText("");
    }
  };

  return (
    <ComentContainer>
      <UserName>사용자이름</UserName>
      <CommentInput
        type="text"
        placeholder="댓글을 입력하세요..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <CommentButton onClick={addComment}>등록</CommentButton>
      <CommentList>
        {comments.map((comment, index) => (
          <CommentItem key={index}>
            <UserName>사용자이름</UserName>
            {comment}
          </CommentItem>
        ))}
      </CommentList>
    </ComentContainer>
  );
};

export default Coment;
