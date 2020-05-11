import React from "react";
import MultiLink from "gatsby-universal-link";

const StyledMarkdownParagraph = ({ children }) => (
  <p className="text-lg">{children}</p>
);

const StyledMarkdownList = ({ children }) => {
  return <ul className="list-disc list-inside">{children}</ul>;
};

const StyledMarkdownListItem = ({ children }) => {
  return <li>{children}</li>;
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
