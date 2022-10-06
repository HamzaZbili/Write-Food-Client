import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../article components/ArticleCard";
import service from "../auth/service";
import "./searchResult.css";

const SearchResult = () => {
  const [articlesResult, setArticlesResult] = useState();
  const { search } = useParams();

  useEffect(() => {
    service.get(`/articles/${search}`).then((response) => {
      setArticlesResult(response.data);
    });
  }, []);
  return (
    <>
      <h3 className="searchHeading">{search.toLocaleUpperCase()}</h3>
      {articlesResult &&
        articlesResult.map((article) => {
          return <ArticleCard key={article._id} article={article} />;
        })}
    </>
  );
};

export default SearchResult;
