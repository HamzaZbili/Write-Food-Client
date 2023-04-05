import React from "react";

const CategorySearch = ({ handleCategoryChange }) => {
  return (
    <div>
      <br />
      <label>
        <input
          type="checkbox"
          name="category"
          value="lifestyle"
          onChange={(e) => handleCategoryChange(e)}
        />
        lifestyle
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="category"
          value="guide"
          onChange={(e) => handleCategoryChange(e)}
        />
        guide
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="category"
          value="review"
          onChange={(e) => handleCategoryChange(e)}
        />
        review
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="category"
          value="recipe"
          onChange={(e) => handleCategoryChange(e)}
        />
        recipe
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="category"
          value="seasonal"
          onChange={(e) => handleCategoryChange(e)}
        />
        seasonal
      </label>
    </div>
  );
};

export default CategorySearch;
