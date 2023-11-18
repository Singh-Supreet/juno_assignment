import React, { useState } from "react";
import "../style/dropdown.css";
const Dropdown = ({
  options,
  title,
  setLevel,
  level,
  trigger,
  setTrigger,
}) => {
  const [isOpen, setIsOpen] = useState();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if (setLevel) {
      setLevel(option);
    } else {
      setTrigger(option);
    }
    if (option === "All") {
      setLevel("");
    }
    setIsOpen(false);
  };
  return (
    <div className="droupdown">
      <div className="droupdown-header" onClick={toggleDropdown}>
        {title === "Risk level" ? (
          <p>{(setLevel && level) || title}</p>
        ) : (
          <p>{trigger || title}</p>
        )}

        {isOpen ? (
          <span class="material-symbols-outlined">expand_less</span>
        ) : (
          <span class="material-symbols-outlined">keyboard_arrow_down</span>
        )}
      </div>
      {isOpen && (
        <ul
          className={
            title === "Risk level" ? "dropdown-list le" : "dropdown-list tg"
          }
        >
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
