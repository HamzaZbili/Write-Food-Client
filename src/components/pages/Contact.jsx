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
          <h4>contact me</h4>
          <br />
          <p>If you'd like to reach out, sent me an email at rmnaismith@me.com or send me a message on +33767055092.</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
