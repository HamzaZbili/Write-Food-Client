import React from "react";
import "../articleSearchForm.css";

const cities = [
  "",
  "Paris",
  "London",
  "Edinburgh",
  "Glasgow",
  "Dublin",
  "Brussels",
];

const CitiesSearch = ({ handleCityChange }) => {
  return (
    <div>
      <select
        type="text"
        onChange={handleCityChange}
        className="cityInputField"
      >
        {cities.map((city, index) => {
          return (
            <option key={index} value={city}>
              {city !== "" ? city : "all cities"}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CitiesSearch;
