import React from "react";
import "./articleCard.css";

const ArticleCard = ({ article }) => {
  const { title, image, link } = article;

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleClick = () => {
    openInNewTab(link);
  };
  return (
    <div className="articleContainer">
      {}

      <div
        className="articleCard"
        style={{ backgroundImage: `url(${image})` }}
        onClick={handleClick}
      >
        <div className="articleHover">
          <p>read</p>
        </div>
      </div>
      <div className="articleInfo">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default ArticleCard;
