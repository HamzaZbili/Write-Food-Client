import React from "react";
import { useNavigate } from "react-router-dom";
import service from "../auth/service";
import "./deleteArticle.css";

const DeleteArticle = ({ id, updateListedArticles }) => {
  const navigate = useNavigate();
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await service.delete(`/articles/delete/${id}`);
      updateListedArticles();
      navigate(`/manage`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="deleteArticleButton"
      onClick={(e) => {
        if (window.confirm("delete article my love?")) handleDelete(e);
      }}
    >
      delete
    </div>
  );
};

export default DeleteArticle;
