import React, { useState } from "react";

const ArticleForm = ({ handleSearchParamsChange }) => {
  const [category, setCategory] = useState("");
  const [publisher, setPublisher] = useState("");
  const [city, setCity] = useState("");
  const [order, setOrder] = useState("");
  const [search, setSearch] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePublisherChange = (event) => {
    setPublisher(event.target.value);
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

    const query = {};

    if (category) {
      query.category = category;
    }

    if (publisher) {
      query.publisher = publisher;
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

    handleSearchParamsChange(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Category:
        <select value={category} onChange={handleCategoryChange}>
          <option value="">category</option>
          <option value="lifestyle">lifestyle</option>
          <option value="guide">guides</option>
          <option value="review">reviews</option>
          <option value="recipe">recipes</option>
          <option value="seasonal">seasonal</option>
        </select>
      </label>
      <br />
      <label>
        Publisher:
        <input type="text" value={publisher} onChange={handlePublisherChange} />
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
