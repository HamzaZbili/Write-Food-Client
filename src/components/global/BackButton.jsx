import React from "react";
import { useNavigate } from "react-router-dom";
import "./backButton.css";
import backarrow from "../../images/backArrow.png";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <img src={backarrow} className="backButton" onClick={() => navigate(-1)} />
  );
};

export default BackButton;