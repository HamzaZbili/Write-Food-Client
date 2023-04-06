import React, { useState } from "react";
import CategorySearch from "./searchInputFields/CategorySearch";
import CitiesSearch from "./searchInputFields/CitiesSearch";
import Order from "./searchInputFields/Order";
import TitleSearch from "./searchInputFields/TitleSearch";

const ArticleForm = ({ handleSearchParamsChange }) => {
  const [category, setCategory] = useState({
    lifestyle: false,
    guide: false,
    review: false,
    recipe: false,
    seasonal: false,
  });
  const [city, setCity] = useState("");
  const [order, setOrder] = useState("");
  const [search, setSearch] = useState("");

  // form change handlers
  const handleCategoryChange = (event) => {
    const cat = event.target.value;
    const checked = event.target.checked;
    setCategory((prevState) => ({ ...prevState, [cat]: checked }));
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // build query from form
    const query = {};

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
  };

  return (
    <form onSubmit={handleSubmit}>
      <CategorySearch handleCategoryChange={handleCategoryChange} />
      <CitiesSearch handleCityChange={handleCityChange} />
      <Order handleOrderChange={handleOrderChange} />
      <TitleSearch handleSearchChange={handleSearchChange} />
    </form>
  );
};

export default ArticleForm;
