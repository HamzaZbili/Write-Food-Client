import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminCard from "./components/AdminCard";
import service from "../../auth/service";
import BackButton from "../../icons/BackButton";
import "./manageArticles.css";
import { Article } from "../../../../type-definitions";

const ManageArticles: React.FC = () => {
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const navigate = useNavigate();

  const updateListedArticles = useCallback(() => {
    try {
      service.get<Article[]>("/articles/all").then((response) => {
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
      <h2 className="adminHeader"> admin</h2>
      <BackButton />
      <button className="postNewArticle" onClick={() => navigate("/new")}>
        post new article
      </button>
      <div className="articleAdminContainer">
        {allArticles.map((article) => {
          return (
            <AdminCard
              key={article._id}
              article={article}
              updateListedArticles={updateListedArticles}
            />
          );
        })}
      </div>
    </>
  );
};

export default ManageArticles;
