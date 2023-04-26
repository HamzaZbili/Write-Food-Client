import React from "react";
import "../articleSearchForm.css";

const TitleSearch = ({ handleSearchChange, search }) => {
  return (
    <div>
      <input
        className="titleSearchInput"
        type="text"
        placeholder="search by title"
        value={search}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default TitleSearch;
