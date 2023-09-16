import styled from 'styled-components';
import left from "../assets/left.png";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import image from "../assets/image.png"

const ReadPost = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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


  return (
    <ReadPostBox>
      <Header>
        <PreviousButton src={left} alt="이전페이지 버튼" onClick={() => navigate('/main')} />
        집사 수첩
      </Header>
      <PostContainer>
        <Content>
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
      </PostContainer>
    </ReadPostBox>
  );
};

export default ReadPost;

const ReadPostBox = styled.div`
  @media only screen and (min-width: 430px) {
    width: 365px;
    margin: auto;
  }

  @media only screen and (max-width: 430px) {
    max-width: auto;
    margin: auto;
  }

  border: 1px solid #A4A4A4;
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
  border-bottom: 1px solid #A4A4A4;
`;

const PostContainer = styled.div`
  padding: 5px;
`;

const PreviousButton = styled.img`
  float: left;
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
  border-bottom:1px solid #A4A4A4;
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
  margin-top: 330px; /* Adjust this value as needed */
`;

const CenteredButton = styled.button`
  border-radius: 15px;
  background: #59D2D2;
  color: white;
  border: 1px solid #59D2D2;
`;