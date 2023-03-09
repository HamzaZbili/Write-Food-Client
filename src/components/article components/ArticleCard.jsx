import React from "react";
import "./articleCard.css";
import { formatDate } from "../../utils/dateFormat";

const ArticleCard = ({ article }) => {
  const { title, image, link, publicationDate, publisher, other } = article;

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleClick = () => {
    openInNewTab(link);
  };
  return (
    <div className="articleContainer">
      <div
        className="articleCard"
        style={{ backgroundImage: `url(${image})` }}
        onClick={handleClick}
      ></div>
      <div className="articleInfo">
        <h2>{title}</h2>
        {/* <div className="publisherAndDate">
          {publisher ? publisher : other}
          <h4>{formatDate(publicationDate)}</h4>
        </div> */}
      </div>
    </div>
  );
};

export default ArticleCard;
