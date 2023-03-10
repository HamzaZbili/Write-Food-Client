import React from "react";
import { useNavigate } from "react-router-dom";
import service from "../auth/service";
import "./deleteArticle.css";
import bin from "../icons/bin.svg";

const DeleteArticle = ({ id, updateListedArticles }) => {
  const navigate = useNavigate();
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await service.delete(`/articles/delete/${id}`);
      updateListedArticles();
      window.alert("article deleted");
      navigate(`/manage`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      onClick={(e) => {
        if (window.confirm("delete article my love?")) handleDelete(e);
      }}
    >
      <img src={bin} alt="bin" className="bin" />
    </div>
  );
};

export default DeleteArticle;
