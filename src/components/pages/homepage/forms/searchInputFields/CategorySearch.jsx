import React from "react";
import "../articleSearchForm.css";

const categories = ["lifestyle", "guide", "review", "recipe", "seasonal"];

const CategorySearch = ({ handleCategoryChange }) => {
  return (
    <div className="categoryInputContainer">
      {categories.map((category) => {
        return (
          <label className="categoryInputField">
            <input
              type="checkbox"
              name={category}
              value={category}
              onChange={(e) => handleCategoryChange(e)}
            />
            <div className="categoryText">{category}</div>
            <br />
          </label>
        );
      })}
    </div>
  );
};

export default CategorySearch;
