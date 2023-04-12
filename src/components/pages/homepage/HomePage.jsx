import React from "react";
import "./homePage.css";
import HomeFeed from "./components/HomeFeed";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePageHeader">
        <article className="homePageTextContainer">
          <h1>Rachel Naismith</h1>
          <p>Hey! Welcome to my portofolio website!</p>
        </article>
        <div></div>
      </div>
      <HomeFeed />
    </div>
  );
};

export default HomePage;
