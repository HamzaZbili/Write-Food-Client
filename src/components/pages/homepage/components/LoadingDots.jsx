import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import loading from "../../../icons/loading.json";
import "./loadingDots.css";

function LoadingDots() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      name: "loadingDots",
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: loading,
    });
  }, []);

  return (
    <>
      <div id="loadingDotsContainer" ref={container} />
    </>
  );
}

export default LoadingDots;
