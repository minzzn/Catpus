import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AppBar from "../../components/appbar/AppBar";
import { FaChevronLeft } from "react-icons/fa";
import {
  ReadPostBox,
  PostContainer,
  TitleInput,
  Content,
  PostOption,
  OptionButton,
  Picture,
  ContentInput,
  Footer,
  CenteredButton,
} from "./PostWrite.style";
import image from "../../assets/image.png";

const PostWrite = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleWriteButtonClick = () => {
    // 작성하기 버튼을 클릭하면 PostWrite 페이지로 이동
    navigate("/PostWrite");
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
      {/* <Header>
        <PreviousButton src={left} alt="이전페이지 버튼" onClick={() => navigate('/main')} />
        글쓰기
      </Header> */}
      <AppBar str={"글쓰기"} url={"/main"} icon={<FaChevronLeft />} />
      <PostContainer>
        <TitleInput
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="제목을 입력하세요"
        />
        <Content>
          <Picture src={image} alt="사진 모양" />
          <PostOption>
            <OptionButton
              onClick={() => handleOptionButtonClick("치즈냥")}
              style={{
                backgroundColor:
                  selectedOption === "치즈냥"
                    ? "rgba(11, 193, 193, 0.50)"
                    : "white",
              }}
            >
              치즈냥
            </OptionButton>
            <OptionButton
              onClick={() => handleOptionButtonClick("깜냥이")}
              style={{
                backgroundColor:
                  selectedOption === "깜냥이"
                    ? "rgba(11, 193, 193, 0.50)"
                    : "white",
              }}
            >
              깜냥이
            </OptionButton>
            <OptionButton
              onClick={() => handleOptionButtonClick("턱시도")}
              style={{
                backgroundColor:
                  selectedOption === "턱시도"
                    ? "rgba(11, 193, 193, 0.50)"
                    : "white",
              }}
            >
              턱시도
            </OptionButton>
            <OptionButton
              onClick={() => handleOptionButtonClick("삼색이")}
              style={{
                backgroundColor:
                  selectedOption === "삼색이"
                    ? "rgba(11, 193, 193, 0.50)"
                    : "white",
              }}
            >
              삼색이
            </OptionButton>
          </PostOption>
        </Content>
        <ContentInput
          value={content}
          onChange={handleContentChange}
          placeholder="내용을 입력하세요"
        />
        <Footer>
          <CenteredButton onClick={() => navigate("/readpost")}>
            작성하기
          </CenteredButton>
        </Footer>
      </PostContainer>
    </ReadPostBox>
  );
};

export default PostWrite;
