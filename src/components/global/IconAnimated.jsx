import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "./iconAnimated.css";

function IconAnimated({ icon }) {
  const container = useRef(null);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const icons = [
    { logo: require("../../icons/instagram.json") },
    { logo: require("../../icons/linkedin.json") },
  ];
  const links = [
    "https://www.instagram.com/writefood/",
    "https://www.linkedin.com/in/rachel-naismith/",
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
    setTimeout(() => {
      openInNewTab(links[icon]);
    }, 1000);
  };

  return (
    <>
      <div className="iconContainer" ref={container} onClick={handleClick} />
    </>
  );
}

export default IconAnimated;
