import React from "react";

export default ({
  children,
  Type,
  tailwindColorClassname = "text-violett",
}) => {
  const dotClassname = `main-headline-dot-${
    tailwindColorClassname === "text-violett" ? "green" : "violett"
  }`;
  return (
    <React.Fragment>
      <Type
        className={`${tailwindColorClassname} uppercase text-2xl md:text-4xl lg:text-6xl font-serif font-bold leading-none ${dotClassname}`}
      >
        {children}
      </Type>
      <span className="block my-8 w-1/6 h-1 bg-green"></span>
    </React.Fragment>
  );
};
