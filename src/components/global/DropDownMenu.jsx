import React, { useRef } from "react";
import "./dropDownMenu.css";
import { ReactComponent as DownArrow } from "../../icons/downArrow.svg";

const dropDownOptions = [
  { title: "food" },
  { title: "lifestyle" },
  { title: "guide" },
  { title: "review" },
  { title: "recipes" },
  { title: "seasonal" },
];

const DropDownMenu = () => {
  const downArrowRef = useRef();
  const menuOption = useRef();

  const dropDownMenu = () => {
    downArrowRef.current.classList.toggle("animateDownArrow");
    // menuOption.classList.toggle("showOption");
  };

  return (
    <div className="menuOptionsContainer">
      <a className="myWorkLink" onClick={dropDownMenu}>
        My Work <DownArrow ref={downArrowRef} />
      </a>
      {
        <>
          {dropDownOptions.map((category) => {
            return (
              <a key={category.title} className={"showOption"} ref={menuOption}>
                {category.title}
              </a>
            );
          })}
        </>
      }
    </div>
  );
};

export default DropDownMenu;
