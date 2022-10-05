import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ArticleAdmin from "../article components/ArticleAdmin";
import service from "../auth/service";
import "./manageArticles.css";

const ManageArticles = () => {
  const [allArticles, setAllArticles] = useState([]);
  const navigate = useNavigate();

  const updateListedArticles = useCallback(() => {
    try {
      service.get("/articles/all").then((response) => {
        setAllArticles(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    updateListedArticles();
  }, [updateListedArticles]);

  return (
    <>
      <button className="postNewArticle" onClick={() => navigate("/new")}>
        post new article
      </button>
      {allArticles.map((article) => {
        return (
          <ArticleAdmin
            key={article._id}
            article={article}
            updateListedArticles={updateListedArticles}
          />
        );
      })}
    </>
  );
};

export default ManageArticles;
