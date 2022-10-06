import React from "react";
import "./articleAdmin.css";
import DeleteArticle from "../forms/DeleteArticle";

const ArticleAdmin = ({ article, updateListedArticles }) => {
  const { _id, title, city, publisher, other, link, publicationDate } = article;
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleClick = () => {
    openInNewTab(link);
  };

  return (
    <div className="articleAdmin">
      <div className="articleAdminInfo">
        <h5 onClick={handleClick}>{title}</h5>
        <p>
          {publisher ? publisher : other}|{city}
        </p>
        <p>{publicationDate.slice(0, 10)}</p>
      </div>
      <div>
        <DeleteArticle id={_id} updateListedArticles={updateListedArticles} />
      </div>
    </div>
  );
};

export default ArticleAdmin;
