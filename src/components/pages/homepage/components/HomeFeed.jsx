import React, { useEffect, useState } from "react";
import service from "../../../auth/service";
import ArticleSearchForm from "../forms/ArticleSearchForm";
import ArticleCard from "./ArticleCard";
import queryBuilder from "./queryBuilder";
import LoadingDots from "./LoadingDots";
import magnifyingGlass from "../../../icons/magnifyingGlass.svg";
import "./homeFeed.css";

const HomeFeed = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [alreadyLoaded, setAlreadyLoaded] = useState(8);
  const [loadMore, setLoadMore] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useState("");
  const [searchPopUp, setSearchPopUp] = useState(false);
  const [moreAvailable, setMoreAvailable] = useState(true);

  const handleSearchParamsChange = (newSearchParams) => {
    setSearchParams(() => newSearchParams);
  };
  useEffect(() => {
    setMoreAvailable(true);
    const completeQuery = queryBuilder(searchParams);
    async function fetchData() {
      const response = await service.get("/articles?" + completeQuery);
      setAllArticles(response.data);
    }
    fetchData();
  }, [searchParams]);

  const handleClick = () => {
    setIsLoading(true);
    const completeQuery = queryBuilder(searchParams);
    async function loadMoreResults() {
      const response = await service.get(
        `/articles/more/${alreadyLoaded}?` + completeQuery
      );
      setLoadMore([...loadMore, ...response.data]);
      if (response.data.length === 0) {
        setMoreAvailable(false);
      }
    }
    loadMoreResults();
    setAlreadyLoaded(alreadyLoaded + 4);
    setIsLoading(false);
  };

  function togglePopUp() {
    if (searchPopUp) {
      setSearchPopUp(false);
    } else {
      setSearchPopUp(true);
    }
  }
  return (
    <>
      <div className="homeFeedHeader">
        <h2 className="homeFeedTitle">lastest work</h2>
        <div>
          {searchPopUp ? (
            <div>
              <div onClick={togglePopUp}>close</div>
              <div className="articleSearchForm">
                <ArticleSearchForm
                  handleSearchParamsChange={handleSearchParamsChange}
                />
              </div>
            </div>
          ) : (
            <div onClick={togglePopUp}>
              <img src={magnifyingGlass} alt="search" />
            </div>
          )}
        </div>
      </div>

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
        <div>
          {moreAvailable ? (
            <button className="loadMoreButton" onClick={handleClick}>
              more
            </button>
          ) : (
            <div>no more results</div>
          )}
        </div>
      )}
    </>
  );
};

export default HomeFeed;
