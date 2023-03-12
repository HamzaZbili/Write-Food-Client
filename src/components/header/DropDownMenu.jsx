import React, { useEffect, useRef } from "react";
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

const DropDownMenu = ({ showNavbar }) => {
  const downArrowRef = useRef();
  const menuBox = useRef();
  const menuOption = useRef();

  const openDropDownMenu = () => {
    menuOption.current.classList.toggle("hideMenu");
  };

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!menuBox.current?.contains(event.target)) {
        menuOption?.current?.classList.add("hideMenu");
      }
    });
  }, []);

  return (
    <div ref={menuBox} className="menuBoxContainer">
      <a
        className="myWorkLink"
        ref={downArrowRef}
        onMouseEnter={openDropDownMenu}
      >
        work
        {/* <DownArrow  /> */}
      </a>
      {
        <>
          <div
            className={"hideMenu menuOptionsContainer"}
            ref={menuOption}
            onMouseLeave={openDropDownMenu}
          >
            {dropDownOptions?.map((category) => {
              const { title } = category;
              return (
                <div onClick={showNavbar} key={title}>
                  <Link className="dropDownMenuLinks" to={`/search/${title}`}>
                    {title}
                  </Link>
                </div>
              );
            })}
          </div>
        </>
      }
    </div>
  );
};

export default DropDownMenu;
