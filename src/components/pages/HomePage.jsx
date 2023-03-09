import React, { useEffect, useState } from "react";
import "./homePage.css";
import HomeFeed from "../article components/HomeFeed";

const HomePage = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="homePage">
      <div className="homePageHeader">
        <article className="homePageTextContainer">
          <h4>food writer | eater</h4>
          <h1>
            Rachel <br />
            Naismith
          </h1>
          {width > 700 ? (
            <p>
              Hey! I’m a passionate and experienced food writer with a diverse
              background in the industry. I have written for a variety of
              publications, including Palate Magazine, HiP Paris, Paris
              Unlocked, and The London Women and Wine Club.
            </p>
          ) : (
            <p>
              Hi! I’m a passionate and experienced food writer with a diverse
              background in the industry.
            </p>
          )}
        </article>
        <div></div>
      </div>
      <HomeFeed />
    </div>
  );
};

export default HomePage;
