import React, { useCallback, useEffect, useRef, useState } from "react";
import { animated } from "react-spring";
import service from "../../../auth/service";
import ArticleSearchForm from "../forms/ArticleSearchForm";
import ArticleCard from "./ArticleCard";
import queryBuilder from "./queryBuilder";
import LoadingDots from "./LoadingDots";
import magnifyingGlass from "../../../icons/magnifyingGlass.svg";
import useSearchTransition from "../../../../utils/UseSearchTransition";
import "./homeFeed.css";
// import useArticleCardTransition from "../../../../utils/UseArticleCardTransition";

const HomeFeed = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [alreadyLoaded, setAlreadyLoaded] = useState(8);
  const [loadMore, setLoadMore] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchForm, setIsSearchForm] = useState(false);
  const searchFormRef = useRef(null);
  const [searchParams, setSearchParams] = useState({ order: "desc" });
  const [moreAvailable, setMoreAvailable] = useState(true);
  const searchTransition = useSearchTransition(isSearchForm);
  // const articleCardTransition = useArticleCardTransition();

  const handleSearchParamsChange = useCallback((newSearchParams) => {
    setAllArticles([]);
    setLoadMore([]);
    setAlreadyLoaded(8);
    setSearchParams(() => newSearchParams);
  }, []);

  useEffect(() => {
    setMoreAvailable(true);
    const completeQuery = queryBuilder(searchParams);
    async function fetchData() {
      const response = await service.get("/articles?" + completeQuery);
      setAllArticles(response.data);
    }
    fetchData();
  }, [searchParams, alreadyLoaded]);

  const handleLoadMore = () => {
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

  //  closes form if clicks outside
  const handleClickOutside = useCallback((event) => {
    if (
      searchFormRef.current &&
      !searchFormRef.current.contains(event.target)
    ) {
      setIsSearchForm(false);
    }
  }, []);

  // event listeners outside of form
  useEffect(() => {
    if (isSearchForm) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isSearchForm, handleClickOutside]);

  return (
    <>
      <div className="homeFeedHeader">
        <h2 className="homeFeedTitle">lastest work</h2>
        <div ref={searchFormRef}>
          <img
            src={magnifyingGlass}
            alt="search"
            onClick={() => setIsSearchForm((v) => !v)}
            className="magnifyingGlass"
          />
          <div>
            {searchTransition((style, articleSearchForm) =>
              articleSearchForm ? (
                <animated.div className="articleSearchForm" style={style}>
                  <ArticleSearchForm
                    handleSearchParamsChange={handleSearchParamsChange}
                  />
                </animated.div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
      <div className="homeFeed">
        {allArticles.map((article) => {
          return <ArticleCard article={article} key={article._id} />;
        })}
        {loadMore.map((article) => {
          return <ArticleCard article={article} key={article._id} />;
        })}
      </div>
      {isLoading ? (
        <LoadingDots />
      ) : (
        <div>
          {moreAvailable ? (
            <button className="loadMoreButton" onClick={handleLoadMore}>
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
