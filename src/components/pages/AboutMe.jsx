import React from "react";
import rachel from "../../images/rachel.jpeg";
import noodles from "../../images/noodles.jpg";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <>
      <div className="noodlesImageContainer">
        <img className="noodlesImage" src={noodles} alt="noodles" />
      </div>
      <div className="aboutMeContainer">
        <img src={rachel} alt="rachel" className="aboutMeImage" />
        <div className="aboutMeText">
          <h4>About me</h4>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          omnis nobis aliquam quod vero id officia doloribus exercitationem
          neque labore molestiae, accusantium facere? Cum porro ducimus
          recusandae modi quo beatae.faesaesfd.
        </div>
      </div>
    </>
  );
};

export default AboutMe;
