import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../article components/ArticleCard";
import service from "../auth/service";
import "../article components/homeFeed.css";
import "./searchResult.css";

const SearchResult = () => {
  const [articlesResult, setArticlesResult] = useState();
  const { search } = useParams();

  useEffect(() => {
    service.get(`/articles/${search}`).then((response) => {
      setArticlesResult(response.data);
    });
  }, [search]);

  return (
    <>
      <h3 id="searchHeading">{search.toLocaleUpperCase()}</h3>
      <div className="homeFeed">
        {articlesResult &&
          articlesResult.map((article) => {
            return <ArticleCard key={article._id} article={article} />;
          })}
      </div>
    </>
  );
};

export default SearchResult;
