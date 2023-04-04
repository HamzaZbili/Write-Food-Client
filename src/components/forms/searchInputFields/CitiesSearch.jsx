import React from "react";

const CitiesSearch = ({ handleCityChange }) => {
  return (
    <div>
      City:
      <select type="text" onChange={handleCityChange}>
        <option value="">all cities</option>
        <option value="Paris">Paris</option>
        <option value="London">London</option>
        <option value="Edinburgh">Edinburgh</option>
        <option value="Glasgow">Glasgow</option>
        <option value="Dublin">Dublin</option>
        <option value="Brussels">Brussels</option>
      </select>
    </div>
  );
};

export default CitiesSearch;
