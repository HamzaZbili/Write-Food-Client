import React, { useEffect, useState } from "react";
import CategorySearch from "./searchInputFields/CategorySearch";
import CitiesSearch from "./searchInputFields/CitiesSearch";
import OrderSearch from "./searchInputFields/OrderSearch";
import TitleSearch from "./searchInputFields/TitleSearch";
import "./articleSearchForm.css";

const categoriesDefault = {
  lifestyle: false,
  guide: false,
  review: false,
  recipe: false,
  seasonal: false,
};

const ArticleForm = ({ handleSearchParamsChange }) => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState(categoriesDefault);
  const [order, setOrder] = useState("desc");

  // resets form - shows all results
  function clearForm(event) {
    event.preventDefault();
    setSearch("");
    setCity("");
    setCategory(categoriesDefault);
    setOrder("desc");
  }

  // prevents form submit
  function handleSubmit(event) {
    event.preventDefault();
    return false;
  }
  // prevents form submit by pressing enter
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  // form change handlers

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const cat = event.target.value;
    const checked = event.target.checked;
    setCategory((prevState) => ({ ...prevState, [cat]: checked }));
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  useEffect(() => {
    const query = {};
    const timeoutId = setTimeout(() => {
      const selectedCategories = Object.keys(category).filter(
        (cat) => category[cat]
      );

      if (selectedCategories.length > 0) {
        query.category = selectedCategories;
      }

      if (city) {
        query.city = city;
      }

      if (order) {
        query.order = order;
      }

      if (search) {
        query.title = search;
      }
      handleSearchParamsChange(query);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [category, city, order, search]);

  return (
    <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
      <TitleSearch handleSearchChange={handleSearchChange} />
      <CitiesSearch handleCityChange={handleCityChange} />
      <CategorySearch handleCategoryChange={handleCategoryChange} />
      <OrderSearch handleOrderChange={handleOrderChange} />
      <button className="resetButton" onClick={clearForm}>
        reset
      </button>
    </form>
  );
};

export default ArticleForm;
