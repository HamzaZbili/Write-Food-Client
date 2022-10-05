import React from "react";
import "./articleCard.css";

const ArticleCard = ({ article, updateListedArticles }) => {
  const { title, image, link, publicationDate, publisher, other } = article;

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleClick = () => {
    openInNewTab(link);
  };
  return (
    <div
      className="articleCard"
      style={{ backgroundImage: `url(${image})` }}
      onClick={handleClick}
    >
      <div className="articleInfo">
        <h2>{title}</h2>
        <div>
          <h4>
            {publicationDate.slice(0, 10)}|{publisher ? publisher : other}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
