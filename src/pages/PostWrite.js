import styled from 'styled-components';
import left from "../assets/left.png";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MobileSize from '../main_layout/main_layout';

const PostWrite = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null); // 이미지 파일을 저장할 상태
  const [previewImage, setPreviewImage] = useState(null); // 미리 보기 이미지를 저장할 상태

  const handleWriteButtonClick = () => {
    // 작성하기 버튼을 클릭하면 PostWrite 페이지로 이동
    navigate('/PostWrite');
  };

  const handleOptionButtonClick = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImageClick = () => {
    // 이미지를 클릭하면 파일 선택 다이얼로그 열기
    const inputElement = document.createElement('input');
    inputElement.type = 'file';
    inputElement.accept = 'image/*';
    inputElement.addEventListener('change', (e) => {
      const selectedImage = e.target.files[0];

      // 이미지를 상태에 저장
      setImage(selectedImage);

      // 미리 보기 이미지 생성
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(selectedImage);
    });

    // 파일 선택 다이얼로그 열기
    inputElement.click();
  };

  return (
    <ReadPostBox>
     <div>
      <Header>
        <PreviousButton src={left} alt="이전페이지 버튼" onClick={() => navigate('/main')} />
        글쓰기
      </Header>
     
      <PostContainer>
        <TitleInput
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="제목을 입력하세요"
        />
        <Content>
          <img
            src="image.png"
            alt="imagepick"
            style={{
              width: "20px",
              height: "20px",
              cursor: "pointer",
            }}
            onClick={handleImageClick}
          />
          <PostOption>
          <OptionButton
              onClick={() => handleOptionButtonClick('치즈냥')}
              style={{
                backgroundColor: selectedOption === '치즈냥' ? 'rgba(11, 193, 193, 0.50)' : 'white',
              }}
            >
              치즈냥
            </OptionButton>
            <OptionButton
              onClick={() => handleOptionButtonClick('깜냥이')}
              style={{
                backgroundColor: selectedOption === '깜냥이' ? 'rgba(11, 193, 193, 0.50)' : 'white',
              }}
            >
              깜냥이
            </OptionButton>
            <OptionButton
              onClick={() => handleOptionButtonClick('턱시도')}
              style={{
                backgroundColor: selectedOption === '턱시도' ? 'rgba(11, 193, 193, 0.50)' : 'white',
              }}
            >
              턱시도
            </OptionButton>
            <OptionButton
              onClick={() => handleOptionButtonClick('삼색이')}
              style={{
                backgroundColor: selectedOption === '삼색이' ? 'rgba(11, 193, 193, 0.50)' : 'white',
              }}
            >
              삼색이
            </OptionButton>
          </PostOption>
        </Content>
        
        {previewImage && <img src={previewImage} alt="Preview" width="100%" height="300px" />}
        <ContentInput
          value={content}
          onChange={handleContentChange}
          placeholder="내용을 입력하세요"
        />
        </PostContainer>
        </div>
        <Footer>
          <CenteredButton style={{marginBottom:30}} onClick={() => navigate('/readpost')}>작성하기</CenteredButton>
        </Footer>
     
    </ReadPostBox>
  );
};

export default PostWrite;

const ReadPostBox = styled.div`

 display: flex;
 flex-direction: column;
 justify-content: space-between;
 height: 100vh;


  @media only screen and (min-width: 430px) {
    width: 365px;
    margin: auto;
  }

  @media only screen and (max-width: 430px) {
    max-width: auto;
    margin: auto;
  }

`;

const Header = styled.div`
  text-align: center;
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 15px;
  text-align: center;
  
`;

const PreviousButton = styled.img`
  float: left;
 margin-right: -100px;
`;

const PostContainer = styled.div`
  padding: 15px;
`;


const TitleInput = styled.input`
  color: #A4A4A4;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 10px;
  border:none;
  width:325px;
  border-bottom: 1px solid #A4A4A4;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`;

const PostOption = styled.div`
  padding: 10px;
`;

const OptionButton = styled.button`
  border-radius: 15px;
  border: 1px solid #0BC1C1;
  margin: 5px;
  color:black;
`;

const Picture = styled.img`
  margin-top: 0px;
  border-right: 1px solid #A4A4A4;
  margin-right: 5px;
`;

const ContentInput = styled.textarea`
  width: 310px;
  height: 150px; /* Adjust the height as needed */
  padding: 0px;
  border: none; /* Remove the border */
  border-radius: 5px;
  resize: vertical;
  margin-top: 10px; /* 변경된 부분 */
`;


const Footer = styled.div`
  display: flex;
  justify-content: center;
 
`;

const CenteredButton = styled.button`
  border-radius: 15px;
  background: #59D2D2;
  color: white;
  border: 1px solid #59D2D2;
`;