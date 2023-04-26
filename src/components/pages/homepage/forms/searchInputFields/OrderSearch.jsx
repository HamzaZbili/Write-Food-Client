import React from "react";
import "../articleSearchForm.css";

const OrderSearch = ({ handleOrderChange }) => {
  return (
    <div className="orderInputContainer">
      <label className="orderInputField">
        <input
          type="radio"
          name="order"
          value="desc"
          onChange={handleOrderChange}
        />
        <div className="orderText">new</div>
      </label>
      <label className="orderInputField">
        <input
          type="radio"
          name="order"
          value="asc"
          onChange={handleOrderChange}
        />
        <div className="orderText">old</div>
      </label>
      <br />
    </div>
  );
};

export default OrderSearch;
