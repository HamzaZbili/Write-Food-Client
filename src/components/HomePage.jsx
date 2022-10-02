import React from "react";
import "./homePage.css";
import rachelParis from "../images/rachel-paris.jpg";

const HomePage = () => {
  return (
    <div>
      <img src={rachelParis} alt="rachel in paris" className="rachelInParis" />
    </div>
  );
};

export default HomePage;
