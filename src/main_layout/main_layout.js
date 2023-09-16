import styled from "styled-components";

const MobileSize = styled.div`
@media only screen and (min-width: 430px){
    width:365px;
    margin-left: auto;
    margin-right: auto;
}

@media only screen and (max-width: 430px) {
max-width: auto;
margin-left: auto;
    margin-right: auto;
};
  display: flex;
  
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
`;

export default MobileSize;