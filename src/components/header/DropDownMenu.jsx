import React, { useRef } from "react";
import "./dropDownMenu.css";
import { ReactComponent as DownArrow } from "../icons/downArrow.svg";
import { Link } from "react-router-dom";

const dropDownOptions = [
  { title: "lifestyle" },
  { title: "guides" },
  { title: "reviews" },
  { title: "recipes" },
  { title: "seasonal" },
];

const DropDownMenu = () => {
  const downArrowRef = useRef();
  const menuOption = useRef();

  const dropDownMenu = () => {
    downArrowRef.current.classList.toggle("animateDownArrow");
    menuOption.current.classList.toggle("showOptions");
  };

  return (
    <div className="menuBoxContainer">
      <a className="myWorkLink" onClick={dropDownMenu}>
        My Work <DownArrow ref={downArrowRef} />
      </a>
      {
        <>
          <div className={"showOptions menuOptionsContainer"} ref={menuOption}>
            {dropDownOptions.map((category) => {
              const { title } = category;
              return (
                <Link key={title} to={`/search/${title}`}>
                  {title}
                </Link>
              );
            })}
          </div>
        </>
      }
    </div>
  );
};

export default DropDownMenu;
