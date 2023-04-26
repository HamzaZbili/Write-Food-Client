import React from "react";
import "../articleSearchForm.css";

const categories = ["lifestyle", "guide", "review", "recipe", "seasonal"];

const CategorySearch = ({ handleCategoryChange, category }) => {
  return (
    <div className="categoryInputContainer">
      {categories.map((cat, index) => {
        return (
          <label className="categoryInputField" key={index}>
            <input
              type="checkbox"
              name={cat}
              value={cat}
              onChange={(e) => handleCategoryChange(e)}
              checked={category[cat]}
            />
            <div className="categoryText">{cat}</div>
            <br />
          </label>
        );
      })}
    </div>
  );
};

export default CategorySearch;
