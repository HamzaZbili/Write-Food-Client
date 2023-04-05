import React from "react";

const Order = ({ handleOrderChange }) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          name="order"
          value="asc"
          onChange={handleOrderChange}
        />
        newest
      </label>
      <label>
        <input
          type="radio"
          name="order"
          value="desc"
          onChange={handleOrderChange}
        />
        oldest
      </label>
      <br />
    </div>
  );
};

export default Order;
