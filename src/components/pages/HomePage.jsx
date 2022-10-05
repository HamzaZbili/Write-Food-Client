import React from "react";
import "./homePage.css";
import rachelParis from "../../images/rachel.jpeg";
import HomeFeed from "./HomeFeed";

const HomePage = () => {
  return (
    <div>
      <img src={rachelParis} alt="rachel in paris" className="rachelInParis" />
      {/* <article className="bio">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit amet ea,
        dolorem corporis repellendus quo iusto reprehenderit ipsam deleniti
        provident, voluptates accusamus exercitationem voluptatum beatae nobis.
        Delectus tempore asperiores veritatis. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit.
      </article> */}
      <HomeFeed />
    </div>
  );
};

export default HomePage;
