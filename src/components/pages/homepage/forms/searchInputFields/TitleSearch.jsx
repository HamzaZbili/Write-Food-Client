import React from "react";

const TitleSearch = ({ handleSearchChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="search by title"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default TitleSearch;
