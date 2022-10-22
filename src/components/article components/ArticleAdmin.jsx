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
      <div onClick={handleClick} className="articleAdminInfo">
        <h5>{title}</h5>
        <p>
          {publisher ? publisher : other}
          <br />
          {city}
        </p>
        <p>{publicationDate?.slice(0, 10)}</p>
      </div>
      <img
        className="articleAdminCardImage"
        src={article.image}
        alt={article.title}
      />
      <DeleteArticle id={_id} updateListedArticles={updateListedArticles} />
    </div>
  );
};

export default ArticleAdmin;
