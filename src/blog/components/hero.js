import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import "tachyons";

export default ({ date: rawdate, bgImage, category, author, title }) => {
  const date = new Date(rawdate);
  return (
    <div
      className="text-near-white px-4 lg:px-16 py-20 leading-tight flex flex-column justify-center items-center text-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute bottom-0 top-0 left-0 right-0 bg-secondary opacity-25" />
      <span className="font-sans-serif uppercase text-sm">{category}</span>
      <h1
        className="z-50 text-2xl md:text-4xl lg:text-6xl my-4 lg:my-8 font-sans-serif"
        style={{ textShadow: "2px 2px #888888" }}
      >
        {title}
      </h1>
      <span className="sans-serif tracked f6 mb2">
        verfasst von
        <br />
        {author.toUpperCase()}
      </span>
      {/* <span className="sans-serif tracked ttu f6">
        {date.toLocaleDateString("de-DE")}
      </span> */}
    </div>
  );
};
