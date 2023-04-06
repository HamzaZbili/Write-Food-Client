import React, { useEffect, useState } from "react";
import service from "../../../auth/service";
import ArticleSearchForm from "../forms/ArticleSearchForm";
import ArticleCard from "./ArticleCard";
import queryBuilder from "./queryBuilder";
import LoadingDots from "./LoadingDots";
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
    // add event listener for clicks outside of component
    window.addEventListener("click", handleClickOutside);

    // cleanup function to remove event listener
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
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
  const handleClickOutside = (event) => {
    // check if click is outside of component
    const formContainer = document.querySelector(".articleSearchFormContainer");
    if (formContainer && !formContainer.contains(event.target)) {
      setSearchPopUp(false);
    }
  };

  return (
    <>
      <h2 className="homeFeedTitle">lastest work</h2>
      <div className="articleSearchFormContainer">
        {searchPopUp ? (
          <div>
            <div onClick={() => setSearchPopUp(false)}>close</div>
            <div className="articleSearchForm">
              <ArticleSearchForm
                handleSearchParamsChange={handleSearchParamsChange}
              />
            </div>
          </div>
        ) : (
          <div onClick={() => setSearchPopUp(true)}>click to Search</div>
        )}
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
