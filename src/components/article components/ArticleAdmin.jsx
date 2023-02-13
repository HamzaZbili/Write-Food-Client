import React from "react";
import "./articleAdmin.css";
import DeleteArticle from "../forms/DeleteArticle";
import UpdateArticle from "../forms/UpdateArticle";

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
      <div className="imageAndAdminButtons">
        <img
          className="articleAdminCardImage"
          src={article.image}
          alt={article.title}
        />
        <div className="adminButtons">
          {/* <UpdateArticle article={article} updateListedArticles={updateListedArticles}/> */}
          <DeleteArticle id={_id} updateListedArticles={updateListedArticles} />
        </div>
      </div>
    </div>
  );
};

export default ArticleAdmin;
