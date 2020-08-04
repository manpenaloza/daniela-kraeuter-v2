import React, { useRef } from "react";

export default ({ videoSrc, children }) => {

  return (
    <div
      className="py-4 text-near-white w-100 relative flex items-center justify-center font-serif"
      /* upcoming inline style: equals the viewport height minus the navbar height  */
      style={{ minHeight: "calc(100vh - 60px)" }}
    >
      <div className="absolute top-0 left-0 w-100 h-100 overflow-hidden bg-primary bg-center bg-cover bg-no-repeat videoContainer">
        <video
          className="min-w-full min-h-full absolute top-1/2 left-1/2 object-cover transform -translate-y-1/2 -translate-x-1/2"
          src={videoSrc}
          autoPlay
          muted
          loop
        />
      </div>
      {children}
    </div>
  );
};
