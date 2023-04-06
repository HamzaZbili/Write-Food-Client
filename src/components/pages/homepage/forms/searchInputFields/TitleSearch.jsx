import React from "react";

const TitleSearch = ({ handleSearchChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="search by title"
        onChange={handleSearchChange}
      />
      <br />
      <button type="submit">Search</button>
    </div>
  );
};

export default TitleSearch;
