import styled from "styled-components";

export const ComentContainer = styled.div`
  margin: 35px;
`;

export const CommentInput = styled.input`
  width: 80%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 5px;
`;

export const CommentButton = styled.button`
  padding: 5px 6px;
  background-color: #0bc1c1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const CommentList = styled.ul`
  list-style: none;
  padding: 0;
  color: #000;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CommentItem = styled.li`
  margin-top: 5px;
`;

export const UserName = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
