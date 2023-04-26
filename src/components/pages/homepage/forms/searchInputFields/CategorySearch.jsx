import React from "react";
import "../articleSearchForm.css";

const categories = ["lifestyle", "guide", "review", "recipe", "seasonal"];

const CategorySearch = ({ handleCategoryChange }) => {
  return (
    <div className="categoryInputContainer">
      {categories.map((category, index) => {
        return (
          <label className="categoryInputField" key={index}>
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
