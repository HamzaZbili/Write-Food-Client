import React from "react";
import pasta from "../../images/pasta.jpg";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="pastaImageContainer">
        <img className="pastaImage" src={pasta} alt="pasta" />
      </div>
      <div className="aboutMeContainer">
        <div className="contactDetails">
          <h4>contact details</h4>
          <br />
          <p>insert contact details here</p>
        </div>
        <div className="contactDetails">image here?</div>
      </div>
    </>
  );
};

export default Contact;
