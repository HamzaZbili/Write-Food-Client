import React, { useState } from "react";
import axios from "axios";

const Checkbox = ({ label, checked, onChange }) => (
  <label>
    <input type="checkbox" checked={checked} onChange={onChange} />
    {label}
  </label>
);

const Select = ({ value, onChange, options }) => (
  <select value={value} onChange={onChange}>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map((article) => (
      <li key={article._id}>{article.title}</li>
    ))}
  </ul>
);

const ArticleSearch = () => {
  const [category, setCategory] = useState({
    lifestyle: false,
    guide: false,
    review: false,
    recipe: false,
    seasonal: false,
  });
  const [publisher, setPublisher] = useState({
    HiPParis: false,
    Dishcult: false,
    Palate: false,
  });
  const [city, setCity] = useState({
    Paris: false,
    London: false,
    Edinburgh: false,
    Glasgow: false,
    Dublin: false,
  });
  const [order, setOrder] = useState("desc");
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);

  const handleCategoryChange = (event) => {
    const { name, checked } = event.target;
    setCategory((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handlePublisherChange = (event) => {
    const { name, checked } = event.target;
    setPublisher((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleCityChange = (event) => {
    const { name, checked } = event.target;
    setCity((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const selectedCategories = Object.entries(category)
      .filter(([_, checked]) => checked)
      .map(([category, _]) => category)
      .join(",");

    const selectedPublishers = Object.entries(publisher)
      .filter(([_, checked]) => checked)
      .map(([publisher, _]) => publisher);

    const selectedCities = Object.entries(city)
      .filter(([_, checked]) => checked)
      .map(([city, _]) => city);

    try {
      const { data } = await axios.get("/articles", {
        params: {
          category: selectedCategories,
          publisher: selectedPublishers,
          city: selectedCities,
          order,
          search,
        },
      });

      setArticles(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Category</legend>
          {Object.entries(category).map(([name, checked]) => (
            <Checkbox
              key={name}
              label={name}
              checked={checked}
              onChange={handleCategoryChange}
              name={name}
            />
          ))}
        </fieldset>
        <fieldset>
          <legend>Publisher</legend>
          {Object.entries(publisher).map(([name, checked]) => (
            <Checkbox
              key={name}
              label={name}
              checked={checked}
              onChange={handlePublisherChange}
              name={name}
            />
          ))}
        </fieldset>
        <fieldset>
          <legend>City</legend>
          {Object.entries(city).map(([name, checked]) => (
            <Checkbox
              key={name}
              label={name}
              checked={checked}
              onChange={handleCityChange}
              name={name}
            />
          ))}
        </fieldset>
        <fieldset>
          <legend>Sort By</legend>
          <Select
            value={order}
            onChange={handleOrderChange}
            options={["desc", "asc"]}
          />
        </fieldset>
        <fieldset>
          <legend>Search</legend>
          <input type="text" value={search} onChange={handleSearchChange} />
        </fieldset>
        <button type="submit">Search</button>
      </form>

      <ArticleList articles={articles} />
    </div>
  );
};

export default ArticleSearch;
