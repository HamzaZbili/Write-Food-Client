import React, { useEffect, useState } from "react";
import service from "../auth/service";
import ArticleCard from "./ArticleCard";
import "./homeFeed.css";
import LoadingDots from "./LoadingDots";

const HomeFeed = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [alreadyLoaded, setAlreadyLoaded] = useState(6);
  const [loadMore, setLoadMore] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    service.get("/articles").then((response) => {
      setAllArticles(response.data);
    });
  }, []);

  const handleClick = () => {
    setIsLoading(true);
    service.get(`/articles/more/${alreadyLoaded}`).then((response) => {
      setLoadMore([...loadMore, ...response.data]);
      setAlreadyLoaded(alreadyLoaded + 3);
      setIsLoading(false);
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
      {isLoading ? (
        <LoadingDots />
      ) : (
        <button className="loadMoreButton" onClick={handleClick}>
          •••
        </button>
      )}
    </>
  );
};

export default HomeFeed;
