import React from "react";
import useSearchTransition from "../UseSearchTransition";
import { animated } from "react-spring";

const Order = ({ handleOrderChange, isSearchForm }) => {
  const searchTransition = useSearchTransition(isSearchForm);

  return (
    <div>
      {searchTransition((style, item) =>
        item ? (
          <animated.div className="item" style={style}>
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
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Order;
