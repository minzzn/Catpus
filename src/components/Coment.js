// Coment.js (댓글 컴포넌트)

import React, { useState } from 'react';
import styled from 'styled-components';

const Coment = () => {
  // 댓글 목록을 저장하는 상태와 댓글 입력 필드의 값을 저장하는 상태 정의
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  // 댓글을 추가하는 함수
  const addComment = () => {
    if (commentText.trim() !== '') {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  return (
    <ComentContainer>
        <UserName>
          사용자이름
        </UserName>
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
            <UserName>
                사용자이름
            </UserName>
            {comment}
          </CommentItem>
        ))}
      </CommentList>
    </ComentContainer>
  );
};

export default Coment;

const ComentContainer = styled.div`
  
  margin:35px;
`;

const CommentInput = styled.input`
  width: 80%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 5px;
`;

const CommentButton = styled.button`
  padding: 5px 6px;
  background-color: #0BC1C1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CommentList = styled.ul`
  list-style: none;
  padding: 0;
  color: #000;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CommentItem = styled.li`
  margin-top: 5px;
`;

const UserName = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}`;