import React, { useState } from "react";

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
    setCategory((prevState) => ({ ...prevState, [cat]: !prevState.cat }));
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

    const selectedCategories = [];

    Object.keys(category).map((cat) => {
      if (category[cat]) {
        selectedCategories.push(cat);
      }
    });

    query.category = selectedCategories;

    if (city) {
      query.city = city;
    }

    if (order) {
      query.order = order;
    }

    if (search) {
      query.search = search;
    }
    handleSearchParamsChange(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Category:
        <br />
        <input
          type="checkbox"
          name="category"
          value="lifestyle"
          onChange={(e) => handleCategoryChange(e)}
        />
        Lifestyle
        <br />
        <input
          type="checkbox"
          name="category"
          value="guide"
          onChange={(e) => handleCategoryChange(e)}
        />
        Guide
        <br />
        <input
          type="checkbox"
          name="category"
          value="review"
          onChange={(e) => handleCategoryChange(e)}
        />
        Review
        <br />
        <input
          type="checkbox"
          name="category"
          value="recipe"
          onChange={(e) => handleCategoryChange(e)}
        />
        Recipe
        <br />
        <input
          type="checkbox"
          name="category"
          value="seasonal"
          onChange={(e) => handleCategoryChange(e)}
        />
        Seasonal
      </label>
      <br />
      <label>
        City:
        <input type="text" value={city} onChange={handleCityChange} />
      </label>
      <br />
      <label>
        Order:
        <select value={order} onChange={handleOrderChange}>
          <option value="">Select an option</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
      <br />
      <label>
        Search:
        <input type="text" value={search} onChange={handleSearchChange} />
      </label>
      <br />
      <button type="submit">Search</button>
    </form>
  );
};

export default ArticleForm;
