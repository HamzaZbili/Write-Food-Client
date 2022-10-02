import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "./iconAnimated.css";

function IconAnimated({ icon }) {
  const container = useRef(null);

  const icons = [
    { logo: require("../icons/instagram.json") },
    { logo: require("../icons/linkedin.json") },
  ];

  useEffect(() => {
    lottie.loadAnimation({
      name: `animation${icon}`,
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: icons[icon].logo,
    });
  }, []);
  const handleClick = () => {
    lottie.stop(`animation${icon}`);
    lottie.play(`animation${icon}`);
  };

  return (
    <>
      <div className="container" ref={container} onClick={handleClick} />
    </>
  );
}

export default IconAnimated;
