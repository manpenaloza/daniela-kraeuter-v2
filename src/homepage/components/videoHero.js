import React, { useRef, useEffect } from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import "../../common/styles/custom.tachyons.css";
import "tachyons";

export default ({ videoSrc, children }) => {
  const videoElement = useRef(null);

  useEffect(() => {
    // videoElement.current.playbackRate = .5;
  }, [])

  return (
    <div
      className="vw-100 center relative videoHeroContainer flex items-center justify-center serif"
      style={{ color: "#fff" }}
    >
      <div className="absolute videoContainer">
        <video src={videoSrc} autoPlay muted loop ref={videoElement}/>
      </div>
      <section
        className="flex items-center justify-center"
        style={{
          zIndex: 2,
          textAlign: "center",
          width: "96%",
          height: "93%",
          backgroundColor: "rgba(255,255,255,.7)",
        }}
      >
        {children}
      </section>
    </div>
  );
};
