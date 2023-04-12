import { Link } from "react-router-dom";
import React from "react";
import "./oops.css";

const Oops = () => {
  return (
    <div className="errorPage">
      <h1>404 - page not found</h1>
      <Link to="/">Click here to return to homepage</Link>
    </div>
  );
};

export default Oops;
