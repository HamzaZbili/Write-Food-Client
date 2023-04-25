import React from "react";
import "../articleSearchForm.css";

const TitleSearch = ({ handleSearchChange }) => {
  return (
    <div>
      <input
        className="titleSearchInput"
        type="text"
        placeholder="search by title"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default TitleSearch;
