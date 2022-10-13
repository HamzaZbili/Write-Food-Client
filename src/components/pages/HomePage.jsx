import React from "react";
import "./homePage.css";
import cookies from "../../images/cookies.jpg";
import HomeFeed from "../article components/HomeFeed";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePageImageContainer">
        <img src={cookies} alt="croissants" className="croissants" />
      </div>
      <HomeFeed />
    </div>
  );
};

export default HomePage;
