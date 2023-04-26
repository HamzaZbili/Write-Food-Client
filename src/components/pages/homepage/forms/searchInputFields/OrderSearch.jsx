import React from "react";
import "../articleSearchForm.css";

const OrderSearch = ({ handleOrderChange, order }) => {
  return (
    <div className="orderInputContainer">
      <label className="orderInputField">
        <input
          type="radio"
          name="order"
          value="desc"
          checked={order === "desc"}
          onChange={handleOrderChange}
        />
        <div className="orderText">newest</div>
      </label>
      <label className="orderInputField">
        <input
          type="radio"
          name="order"
          value="asc"
          checked={order === "asc"}
          onChange={handleOrderChange}
        />
        <div className="orderText">oldest</div>
      </label>
      <br />
    </div>
  );
};

export default OrderSearch;
