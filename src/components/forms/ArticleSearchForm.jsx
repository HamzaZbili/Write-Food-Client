import React, { useState } from "react";
import CategorySearch from "./searchInputFields/CategorySearch";
import CitiesSearch from "./searchInputFields/CitiesSearch";

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
      query.search = search;
    }
    console.log(query);
    handleSearchParamsChange(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CategorySearch handleCategoryChange={handleCategoryChange} />
      <br />
      <CitiesSearch handleCityChange={handleCityChange} />
      <br />
      Order:
      <select value={order} onChange={handleOrderChange}>
        <option value="">Select an option</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <br />
      Search:
      <input type="text" value={search} onChange={handleSearchChange} />
      <br />
      <button type="submit">Search</button>
    </form>
  );
};

export default ArticleForm;
