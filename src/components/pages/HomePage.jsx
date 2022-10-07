import React from "react";
import "./homePage.css";
import rachelParis from "../../images/rachel.jpeg";
import HomeFeed from "../article components/HomeFeed";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePageImageContainer">
        <img
          src={rachelParis}
          alt="rachel in paris"
          className="rachelInParis"
        />
      </div>
      <HomeFeed />
    </div>
  );
};

export default HomePage;
