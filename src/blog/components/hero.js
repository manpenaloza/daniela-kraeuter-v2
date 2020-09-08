import React from "react";
import { Link } from "gatsby";
import "tachyons";

export default (props) => {
  const date = new Date(props.date);
  return (
    <div className="bg-secondary text-near-white px-4 lg:px-16 py-20 leading-tight flex flex-column justify-center items-center text-center">
      <span className="font-sans-serif uppercase text-sm">
        {props.category}
      </span>
      <h1 className="text-2xl md:text-4xl lg:text-6xl my-4 lg:my-8 font-handwritten">{props.title}</h1>
      <span className="sans-serif tracked f6 mb2">verfasst von<br />{props.author.toUpperCase()}</span>
      {/* <span className="sans-serif tracked ttu f6">
        {date.toLocaleDateString("de-DE")}
      </span> */}
    </div>
  );
};
