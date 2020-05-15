import React from "react";
import Fade from "react-reveal/Fade"

export default ({
  children,
  Type = "h2",
  colorClassName = "text-mid-gray",
}) => {
  const dotClassname = `main-headline-dot-${
    colorClassName === "text-violett" ? "green" : "violett"
  }`;
  return (
    <React.Fragment>
      <Type
        className={`${colorClassName} uppercase text-2xl md:text-4xl lg:text-6xl font-serif font-bold leading-none ${dotClassname}`}
      >
        {children}
      </Type>
      <Fade right big>
        <span className="block my-8 w-1/6 h-1 bg-green"></span>
      </Fade>
    </React.Fragment>
  );
};
