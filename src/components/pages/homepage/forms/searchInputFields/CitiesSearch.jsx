import React from "react";
import "../articleSearchForm.css";

const cities = [
  "all",
  "Paris",
  "London",
  "Edinburgh",
  "Glasgow",
  "Dublin",
  "Brussels",
];

const CitiesSearch = ({ handleCityChange, city }) => {
  return (
    <div>
      <select
        type="text"
        onChange={handleCityChange}
        className="cityInputField"
        value={city}
      >
        {cities.map((city, index) => {
          return (
            <option key={index} value={city}>
              {city !== "all" ? city : "all cities"}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CitiesSearch;
