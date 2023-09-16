import styled from "styled-components";

export const PaginationWrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
`;

export const PageNumber = styled.li`
  margin: 0 8px;
  font-size: 16px;
  cursor: pointer;

  &.active {
    font-weight: bold;
  }
`;

export const PostListView = styled.div`
  margin: 20px 10px;
`;

export const DropdownBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
`;

export const Title = styled.div`
  font-size: 14px;
  color: black;
  text-decoration: none;
`;

export const Content = styled.div`
  font-size: 12px;
  padding-top: 10px;
  color: black;
  text-decoration: none;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  max-width: 100%;
  height: 40px;
`;

export const Post = styled.div`
  @media only screen and (min-width: 430px) {
    width: 365px;
    margin: auto;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border-top : 1px solid black;
    border-bottom : 1px solid black; */
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
`;

export const DropdownContainer = styled.div`
  width: 100px;
  position: relative;
  display: inline-block;
  border-radius: 10px;
`;

export const DropdownButton = styled.button`
  background-color: #eaffff;
  width: 100px;
  color: #0bc1c1;
  border: none;
  border-radius: 10px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;

  &::after {
    content: "";
    color: #0bc1c1;
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid currentColor;
    vertical-align: middle;
    margin-left: 10px;
    transition: transform 0.2s ease;
  }

  &[aria-expanded="true"]::after {
    transform: rotate(180deg);
  }
`;

export const DropdownList = styled.ul`
  width: 100px;
  position: absolute;
  top: 100%;
  left: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;

  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const DropdownItem = styled.li`
  width: 100px;
  background-color: #eaffff;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #0bc1c1;
  }
`;

export const Center = styled.div`
  @media only screen and (min-width: 430px) {
    width: 365px;
    margin: auto;
  }

  @media only screen and (max-width: 430px) {
    max-width: auto;
    margin: auto;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
