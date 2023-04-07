import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminCard from "./components/AdminCard";
import service from "../../auth/service";
import BackButton from "../../icons/BackButton";
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
