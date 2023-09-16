import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  'https://via.placeholder.com/400x300?text=Image+1', // 임의의 이미지 URL
  'https://via.placeholder.com/400x300?text=Image+2',
  'https://via.placeholder.com/400x300?text=Image+3',
  'https://via.placeholder.com/400x300?text=Image+4',
];

const ImageCarousel = () => {

    const imageStyle = {
       
        height: '500px', // 원하는 높이 설정
        objectFit: 'cover', // 이미지가 잘리지 않고 비율 유지
        
      };


  return (
    <Carousel showThumbs={false}>

      {images.map((image, index) => (
        <div key={index} >
          <img src={image} alt={`Slide ${index + 1}`} style={imageStyle}/>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
 
/* 
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from 'axios';

const ImageCarousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Axios를 사용하여 이미지 URL을 가져오는 요청을 보냅니다.
    axios
      .get('/api/getImageUrls') // 이미지 URL을 반환하는 API 엔드포인트로 변경해야 합니다.
      .then((response) => {
        setImages(response.data); // 가져온 이미지 URL 목록을 상태에 설정합니다.
      })
      .catch((error) => {
        console.error('이미지 URL 가져오기 오류:', error);
      });
  }, []);

  const imageStyle = {
    height: '500px', // 원하는 높이 설정
    objectFit: 'cover', // 이미지가 잘리지 않고 비율 유지
  };

  return (
    <Carousel showThumbs={false}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} style={imageStyle} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
 */