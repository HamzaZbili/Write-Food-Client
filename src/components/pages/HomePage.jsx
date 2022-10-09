import React from "react";
import "./homePage.css";
import croissants from "../../images/croissants.jpeg";
import HomeFeed from "../article components/HomeFeed";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePageImageContainer">
        <img src={croissants} alt="croissants" className="croissants" />
      </div>
      <HomeFeed />
    </div>
  );
};

export default HomePage;
