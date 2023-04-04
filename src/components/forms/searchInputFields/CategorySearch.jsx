import React from "react";

const CategorySearch = ({ handleCategoryChange }) => {
  return (
    <div>
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
    </div>
  );
};

export default CategorySearch;
