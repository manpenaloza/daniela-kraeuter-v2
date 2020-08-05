import React from "react";
import Fade from "react-reveal/Fade"

export default ({
  children,
  Type = "h2",
  colorClassname = "text-mid-gray",
  fontStylesClassname = "font-sans font-bold",
}) => {
  const dotClassname = `main-headline-dot-${
    colorClassname === "text-secondary" ? "primary" : "secondary"
  }`;
  return (
    <React.Fragment>
      <Type
        className={`${colorClassname} ${fontStylesClassname} text-5xl lg:text-7xl leading-none ${dotClassname}`}
      >
        {children}
      </Type>
      <Fade right big>
        <span className="block my-8 w-1/6 h-1 bg-secondary"></span>
      </Fade>
    </React.Fragment>
  );
};
