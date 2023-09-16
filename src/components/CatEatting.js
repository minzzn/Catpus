import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import axios from "axios"; // Axios를 import

const Catmilk = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 430px) {
    width:365px;
    margin-left: auto;
    margin-right: auto;
}

@media only screen and (max-width: 430px) {
max-width: auto;
margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
};
`;

const CatmilkCountBox = styled.div`
@media only screen and (min-width: 430px) {
    width:365px;
    margin: auto;
}

@media only screen and (max-width: 430px) {
max-width: auto;
margin: auto;
};
  width: 289px;
  height: 17px;
  border: 1px solid #0bc1c1;
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CatmilkCount1 = styled.div`
  width: 84px;
  height: 9px;
  border-radius: 15px;
  border: 1px solid #59d2d2;
`;

const CatmilkCount2 = styled.div`
  width: 84px;
  height: 9px;
  border-radius: 15px;
  border: 1px solid #59d2d2;
`;

const CatmilkCount3 = styled.div`
  width: 84px;
  height: 9px;
  border-radius: 15px;
  border: 1px solid #59d2d2;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 10px;
  text-align: center;
`;



function CatEatting() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [choice, setChoice] = useState(null);
  const [catmilkCount, setCatmilkCount] = useState(0); // catmilk 숫자 상태 추가
  const [exceedLimitModalOpen, setExceedLimitModalOpen] = useState(false); // 제한 초과 팝업 상태 추가

  // 모달 열기 함수
  const openModal = () => {
    setModalOpen(true);
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setModalOpen(false);
  };

  // 제한 초과 팝업 열기 함수
  const openExceedLimitModal = () => {
    setExceedLimitModalOpen(true);
  };

  // 제한 초과 팝업 닫기 함수
  const closeExceedLimitModal = () => {
    setExceedLimitModalOpen(false);
  };

   // 예 버튼 클릭 이벤트 핸들러
   const handleYesClick = () => {
    if (catmilkCount > 2) {
      openExceedLimitModal();
    } else {
      setChoice("Yes");
      // catmilk 숫자를 1 증가시킴
      const newCatmilkCount = catmilkCount + 1;
      setCatmilkCount(newCatmilkCount);

      // Axios를 사용하여 데이터베이스 업데이트 요청 보내기
      axios
        .post("/api/updateMilkCount", { milkcount: newCatmilkCount })
        .then((response) => {
          // 업데이트가 성공적으로 처리됨
          console.log("데이터베이스 업데이트 성공:", response.data);
        })
        .catch((error) => {
          // 업데이트 중 오류 발생
          console.error("데이터베이스 업데이트 오류:", error);
        });

      closeModal();
    }
  };

  // 아니오 버튼 클릭 이벤트 핸들러
  const handleNoClick = () => {
    setChoice("No");
    closeModal();
  };

  // 데이터베이스에서 catmilkCount 값을 불러오는 함수
  const fetchCatmilkCount = () => {
    axios
      .get("/api/getCatmilkCount") // 서버에서 catmilkCount 값을 반환하는 엔드포인트를 사용
      .then((response) => {
        setCatmilkCount(response.data.catmilkCount);
      })
      .catch((error) => {
        console.error("데이터베이스에서 catmilkCount 불러오기 오류:", error);
      });
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 데이터베이스에서 catmilkCount 값을 불러옴
    fetchCatmilkCount();
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정

  return (
    <Catmilk>
      <div style={{ fontWeight: "bold", marginBottom: 13 }}>
       오늘 먹은 츄르 ( {catmilkCount} / 3 )
      </div>
      <CatmilkCountBox style={{ marginBottom: 15 }}>
        <CatmilkCount1 style={{ backgroundColor: catmilkCount >= 1 ? "#0bc1c1" : "" }} />
        <CatmilkCount2 style={{ backgroundColor: catmilkCount >= 2 ? "#0bc1c1" : "" }} />
        <CatmilkCount3 style={{ backgroundColor: catmilkCount === 3 ? "#0bc1c1" : "" }} />
      </CatmilkCountBox>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <img
          src="Cat Footprint.png"
          alt="Cat Footprint"
          style={{
            width: "30px",
            height: "30px",
            cursor: "pointer",
          }}
          onClick={openModal}
        />

        {/* 모달 */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
              width: "250px",
              height: "100px",
              margin: "auto",
              borderRadius: "10px",
              border: "1px solid #0bc1c1",
              padding: "20px",
            },
          }}
        >
          <ModalContent>
            {/* 모달 내용 */}
            <h2>츄르를 주시겠습니까?</h2>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button
                onClick={handleYesClick}
                style={{
                  width: "50px",
                  height: "22px",
                  border: "1px solid #0bc1c1",
                  borderRadius: "15px",
                  backgroundColor: "#0bc1c1",
                  color: "white",
                }}
              >
                예
              </button>
              <button
                onClick={handleNoClick}
                style={{
                  width: "50px",
                  height: "22px",
                  border: "1px solid #0bc1c1",
                  borderRadius: "15px",
                  backgroundColor: "#0bc1c1",
                  color: "white",
                }}
              >
                아니오
              </button>
            </div>
          </ModalContent>
        </Modal>

        {/* 제한 초과 팝업 */}
        <Modal
          isOpen={exceedLimitModalOpen}
          onRequestClose={closeExceedLimitModal}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
              width: "250px",
              height: "100px",
              margin: "auto",
              borderRadius: "10px",
              border: "1px solid #0bc1c1",
              padding: "20px",
            },
          }}
        >
          <ModalContent>
            {/* 제한 초과 팝업 내용 */}
            <h2>더 이상은 주면 안돼요!</h2>
            <button onClick={closeExceedLimitModal} 
             style={{
                  width: "50px",
                  height: "22px",
                  border: "1px solid #0bc1c1",
                  borderRadius: "15px",
                  backgroundColor: "#0bc1c1",
                  color: "white",
                }}>닫기</button>
          </ModalContent>
        </Modal>
      </div>
    </Catmilk>
  );
}

export default CatEatting;
