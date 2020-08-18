import React from "react";
import Layout from "../common/layouts";
import Hero from "./components/hero.js";
import Body from "./components/body.js";
import Seo from "./seo.js";
import MetaSeo from "../common/seo";
import {
  Paragraph,
  UnorderedList,
  ListItem,
} from "../common/components/typography";
import Headline from "../common/components/headline";
import Suggested from "./components/suggested";
import Sidebar from "./components/sidebar";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import "./styles/grid.css";

export default ({ data, location }) => {
  const { title, body, updatedAt, author, introImage } = data.post;
  const metaDescription = body?.json?.content[0]?.content[0]?.value;

  const contentfulRichTextRenderOptions = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => (
        <Paragraph>{children}</Paragraph>
      ),
      [BLOCKS.HEADING_1]: (_node, children) => (
        <Headline Type="h1" colorClassName="text-secondary">
          {children}
        </Headline>
      ),
      [BLOCKS.HEADING_2]: (_node, children) => (
        <h2 className="mt-8 uppercase text-secondary text-lg md:text-2xl lg:text-3xl font-sans-serif leading-normal text-mid-gray.">
          {children}
        </h2>
      ),
      [BLOCKS.UL_LIST]: (_node, children) => (
        <UnorderedList className="text-lg">{children}</UnorderedList>
      ),
      // upcoming usage of node itself is a dirty hack as contentful ships the <li> contents as a Paragraph, which leads to broken styles
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <ListItem className="text-lg">{node.content[0]?.content[0]?.value}</ListItem>
      ),
    },
  };

  return (
    <Layout>
      <Seo
        slug={location.pathname}
        title={title}
        date={updatedAt}
        description={metaDescription}
        author={author.name}
        image={introImage.fluid.src}
      />
      <MetaSeo title={title} description={metaDescription} />
      <Hero
        author={author.name}
        date={updatedAt}
        category="Welt der Kräuter und ätherischer Öle"
        title={title}
      />
      <article className="min-vh-100 blog__grid">
        <div style={{ gridArea: "header" }} />
        <div
          className="leading-loose mw8 f4 lh-copy center pa2 container"
          style={{ gridArea: "content" }}
        >
          {documentToReactComponents(
            body.json,
            contentfulRichTextRenderOptions
          )}
        </div>
        <Sidebar
          img={introImage.fluid.src}
          desc={metaDescription}
          location={location.pathname}
        />
        {/* <Suggested /> */}
      </article>
    </Layout>
  );
};
