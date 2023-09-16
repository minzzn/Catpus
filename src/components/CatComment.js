import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CatCommentBox = styled.div`
@media only screen and (min-width: 430px) {
    width:365px;
    margin-left: auto;
    margin-right: auto;
}

@media only screen and (max-width: 430px) {
max-width: auto;
margin-left: auto;
    margin-right: auto;
};

  height: 63px;
  width: 289px;
  display: flex;
  flex-direction: column;
  border: 1px solid #0BC1C1;
  border-radius: 15px;
  justify-content: space-around;
  margin-bottom: 30px;
`;

function CatComment() {
  const [catComment, setCatComment] = useState('수고했다냥');

  useEffect(() => {
    // Axios를 사용하여 고양이 멘트 데이터를 가져오는 요청을 보냅니다.
    axios
      .get('/api/getCatComment') // 실제 백엔드 API 엔드포인트로 변경해야 합니다.
      .then((response) => {
        setCatComment(response.data.catComment); // 가져온 고양이 멘트를 상태에 설정합니다.
      })
      .catch((error) => {
        console.error('고양이 멘트 가져오기 오류:', error);
      });
  }, []);

  return (
    <CatCommentBox>
      <div style={{ fontWeight: 'bold', fontSize: 12, marginLeft: 10, marginBottom: -20 }}>
        고양이가 건네는 한 마디
      </div>
      <div style={{ fontSize: 15, marginLeft: 10 }}>{catComment}</div>
    </CatCommentBox>
  );
}

export default CatComment;
