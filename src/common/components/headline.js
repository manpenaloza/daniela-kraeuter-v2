import React from "react";
import Fade from "react-reveal/Fade"

export default ({
  children,
  Type = "h2",
  colorClassname = "text-mid-gray",
}) => {
  const dotClassname = `main-headline-dot-${
    colorClassname === "text-secondary" ? "primary" : "secondary"
  }`;
  return (
    <React.Fragment>
      <Type
        className={`${colorClassname} font-sans-serif text-3xl lg:text-5xl leading-none ${dotClassname}`}
      >
        {children}
      </Type>
      <Fade right big>
        <span className="block my-8 w-1/6 h-1 bg-secondary"></span>
      </Fade>
    </React.Fragment>
  );
};
