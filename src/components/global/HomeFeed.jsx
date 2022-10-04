import React, { useEffect, useState } from "react";
import service from "../auth/service";
import ArticleCard from "./ArticleCard";
import "./homeFeed.css";

const HomeFeed = () => {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    service.get("/articles").then((response) => {
      setAllArticles(response.data);
    });
  }, []);

  return (
    <div className="homeFeed">
      {allArticles?.map((article) => {
        return <ArticleCard article={article} key={article._id} />;
      })}
    </div>
  );
};

export default HomeFeed;
