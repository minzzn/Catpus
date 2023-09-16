import React, { useState } from 'react';
import axios from 'axios'; // Axios 라이브러리 import

const Signup = () => {
  const [image, setImage] = useState(null); // 이미지 파일을 저장할 상태
  const [previewImage, setPreviewImage] = useState(null); // 미리 보기 이미지를 저장할 상태

  // 이미지를 선택했을 때 호출되는 함수
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    // 이미지를 상태에 저장
    setImage(selectedImage);

    // 미리 보기 이미지 생성
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewImage(e.target.result);
    };
    reader.readAsDataURL(selectedImage);
  };

  // 이미지를 서버로 업로드하는 함수
  const uploadImage = () => {
    const formData = new FormData();
    formData.append('image', image); // 이미지를 FormData에 추가

    // 서버로 이미지 업로드 요청을 보냄 (이 부분은 서버 구현에 따라 다를 수 있음)
    axios.post('서버의_이미지_업로드_엔드포인트_URL', formData)
      .then((response) => {
        // 업로드 후의 이미지 URL을 서버 응답에서 얻음
        const uploadedImageUrl = response.data.imageUrl;
        
        // uploadedImageUrl을 사용하여 필요한 작업 수행
      })
      .catch((error) => {
        // 업로드에 실패하면 에러 처리
        console.error('이미지 업로드 실패:', error);
      });
  };

  return (
    <div>
      <h1>Signup</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {previewImage && <img src={previewImage} alt="Preview" width="200" />}
      <button onClick={uploadImage}>Upload Image</button>
    </div>
  );
};

export default Signup;
