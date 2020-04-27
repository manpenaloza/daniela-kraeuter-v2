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
      {children}
    </div>
  );
};
