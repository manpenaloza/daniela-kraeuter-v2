import React from "react";
import MultiLink from "gatsby-universal-link";

const StyledMarkdownParagraph = ({ children }) => (
  <p className="text-lg font-sans-serif">{children}</p>
);

const StyledMarkdownList = ({ children }) => {
  return <ul className="list-disc list-inside">{children}</ul>;
};

const StyledMarkdownListItem = ({ children, className }) => {
  return <li className={`mb-2 ${className}`} style={{ textIndent: "-1.4em", paddingLeft: "1.4em" }}>{children}</li>;
};

const MarkdownLink = ({ href, children }) => (
  <MultiLink to={href}>{children}</MultiLink>
);

export default {
  paragraph: StyledMarkdownParagraph,
  list: StyledMarkdownList,
  listItem: StyledMarkdownListItem,
  link: MarkdownLink,
};
