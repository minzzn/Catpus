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
  const [image, setImage] = useState(null); // 이미지 파일을 저장할 상태
  const [previewImage, setPreviewImage] = useState(null); // 미리 보기 이미지를 저장할 상태

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

  const handleImageClick = () => {
    // 이미지를 클릭하면 파일 선택 다이얼로그 열기
    const inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.accept = "image/*";
    inputElement.addEventListener("change", (e) => {
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
        <AppBar str={"글쓰기"} url={"/main"} icon={<FaChevronLeft />} />

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

          {previewImage && (
            <img src={previewImage} alt="Preview" width="100%" height="300px" />
          )}
          <ContentInput
            value={content}
            onChange={handleContentChange}
            placeholder="내용을 입력하세요"
          />
        </PostContainer>
      </div>
      <Footer>
        <CenteredButton
          style={{ marginBottom: 30 }}
          onClick={() => navigate("/readpost")}
        >
          작성하기
        </CenteredButton>
      </Footer>
    </ReadPostBox>
  );
};

export default PostWrite;
