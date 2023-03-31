import React, { useEffect, useState } from "react";
import service from "../auth/service";
import ArticleSearchForm from "../forms/ArticleSearchForm";
import ArticleCard from "./ArticleCard";

import "./homeFeed.css";
import LoadingDots from "./LoadingDots";

const HomeFeed = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [alreadyLoaded, setAlreadyLoaded] = useState(6);
  const [loadMore, setLoadMore] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useState({});

  const handleSearchParamsChange = (newSearchParams) => {
    setSearchParams(() => newSearchParams);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await service.get(
        "/articles?",
        new URLSearchParams({ ...searchParams })
      );
      setAllArticles(response.data);
    }
    fetchData();
  }, [searchParams]);

  const handleClick = () => {
    setIsLoading(true);
    async function loadMoreResults() {
      const response = await service.get(
        `/articles/more/?${alreadyLoaded}`,
        new URLSearchParams({ ...searchParams })
      );
      setLoadMore([...loadMore, ...response.data]);
    }
    loadMoreResults();
    setAlreadyLoaded(alreadyLoaded + 3);
    setIsLoading(false);
  };

  return (
    <>
      <h2 className="homeFeedTitle">lastest work</h2>
      <ArticleSearchForm handleSearchParamsChange={handleSearchParamsChange} />
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
          more...
        </button>
      )}
    </>
  );
};

export default HomeFeed;
