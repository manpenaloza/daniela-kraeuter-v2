import React from 'react';
import { SectionLink } from 'react-scroll-section';

const StyledLink = ({ children }) => {
  return (
    <a className="">{children}</a>
  )
}

const StyledMarkdownParagraph = ({ children }) => (
  <p className="text-lg">{children}</p>
)

const StyledMarkdownList = ({ children }) => {
  return (
    <ul className="list-disc list-inside">{children}</ul>
  )
}

const StyledMarkdownListItem = ({children}) => {
  return <li>{children}</li>
}

const MarkdownLink = ({ href, children }) => {
  const isInnerLink = href.startsWith('#');
  return isInnerLink ? (
    <SectionLink section={href.substring(1, href.length)}>
      {({ onClick }) => <StyledLink onClick={onClick}>{children}</StyledLink>}
    </SectionLink>
  ) : (
    <StyledLink href={href} target="_blank">
      {children}
    </StyledLink>
  );
};

export default {
  paragraph: StyledMarkdownParagraph,
  list: StyledMarkdownList,
  listItem: StyledMarkdownListItem,
  link: MarkdownLink,
};