import styled from "styled-components";

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
  font-weight: 900;
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
    transition: transform 0.2s ease; /* 아이콘 회전 애니메이션 */
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
