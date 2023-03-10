import React from "react";
import "./homePage.css";
import HomeFeed from "../article components/HomeFeed";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePageHeader">
        <article className="homePageTextContainer">
          <Link to="/about" className="foodWriterEater">
            <h4>food writer | eater</h4>
          </Link>
          <h1>
            Rachel <br />
            Naismith
          </h1>
          <p>Hey! Welcome to my portofolio website!</p>
        </article>
        <div></div>
      </div>
      <HomeFeed />
    </div>
  );
};

export default HomePage;
