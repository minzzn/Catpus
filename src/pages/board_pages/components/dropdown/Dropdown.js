import React, { useState } from "react";
import {
  DropdownContainer,
  DropdownButton,
  DropdownList,
  DropdownItem,
} from "./Dropdown.style.js";

const Dropdown = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ["전체", "고양 2", "고양 3", "고양 4"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown} aria-expanded={isOpen}>
        {selectedOption || options[0]}
      </DropdownButton>
      <DropdownList isOpen={isOpen}>
        {options.map((option, index) => (
          <DropdownItem
            key={index}
            onClick={() => handleOptionClick(option)}
            style={{ color: selectedOption === option ? "#0BC1C1" : "inherit" }}
          >
            {option}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default Dropdown;
