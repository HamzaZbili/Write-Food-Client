import React from "react";
import "./homePage.css";
import rachelParis from "../images/rachel-paris.jpg";

const HomePage = () => {
  return (
    <div>
      <img src={rachelParis} alt="rachel in paris" className="rachelInParis" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit amet ea,
        dolorem corporis repellendus quo iusto reprehenderit ipsam deleniti
        provident, voluptates accusamus exercitationem voluptatum beatae nobis.
        Delectus tempore asperiores veritatis. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default HomePage;
