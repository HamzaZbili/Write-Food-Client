import React from "react";
import rachel from "../../../images/rachel.jpeg";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <>
      <h1 className="aboutPageTitle">about</h1>
      <div className="aboutMeContainer">
        <img src={rachel} alt="rachel" className="aboutMeImage" />
        <div className="aboutMeText">
          <br />
          Hi there!
          <br />
          <br />
          I'm a passionate and experienced food writer with a diverse background
          in the industry. As the French Correspondent for Palate Magazine, I
          have the privilege of sharing my love and knowledge of the vibrant
          food culture of France to a wide audience. My writing also appears in
          Paris Unlocked, The London Women and Wine Club, and HIP Paris, where I
          honed my skills as an editorial assistant. In addition, I've
          collaborated with Dishcult UK, creating cultural and food guides for
          cities such as Edinburgh, Glasgow, and London.
          <br />
          <br />
          I bring a unique perspective to my writing, having owned and operated
          a micro bakery, Figue Bakes, in Edinburgh. My hands-on experience in
          the culinary world has allowed me to connect with and understand the
          passion and hard work that goes into creating delicious food.
          <br />
          <br />I also have a strong background in the social impact side of the
          food industry, having served as the Operations Lead for a large
          Glasgow-based foodbank. In this role, I managed the charity cafe and
          ensured the smooth running of operations to support those in need.
        </div>
      </div>
    </>
  );
};

export default AboutMe;
