import React, { useEffect, useState } from "react";
import service from "../auth/service";
import ArticleCard from "./ArticleCard";
import "./homeFeed.css";

const HomeFeed = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [alreadyLoaded, setAlreadyLoaded] = useState(3);
  const [loadMore, setLoadMore] = useState([]);

  useEffect(() => {
    service.get("/articles").then((response) => {
      setAllArticles(response.data);
    });
  }, []);

  const handleClick = () => {
    service.get(`/articles/more/${alreadyLoaded}`).then((response) => {
      setLoadMore([...loadMore, ...response.data]);
      setAlreadyLoaded(alreadyLoaded + 3);
    });
  };

  return (
    <>
      <div className="homeFeed">
        {allArticles?.map((article) => {
          return <ArticleCard article={article} key={article._id} />;
        })}
        {loadMore?.map((article) => {
          return <ArticleCard article={article} key={article._id} />;
        })}
      </div>
      <button className="loadMoreButton" onClick={handleClick}>
        •••
      </button>
    </>
  );
};

export default HomeFeed;
