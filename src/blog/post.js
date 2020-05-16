import React from "react";
import Layout from "../common/layouts";
import Hero from "./components/hero.js";
import Body from "./components/body.js";
import Seo from "./seo.js";
import MetaSeo from "../common/seo";
import { graphql } from "gatsby";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default ({ data, location }) => {
  const { title, body, updatedAt, author, introImage } = data.post;
  const metaDescription = body?.json?.content[0]?.content[0]?.value;

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
      <Hero author={author.name} date={updatedAt} category="Welt der Kräuter und ätherischer Öle" title={title} />
      {/* <Body
        content={content}
        description={metaDescription}
        image={data.post.frontmatter.postImage.childImageSharp.original.src}
        location={location}
      /> */}
      <article>{documentToReactComponents(body.json)}</article>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    post: contentfulBlog(id: { eq: $id }) {
      id
      title
      updatedAt
      author {
        name
      }
      introImage {
        fluid(maxWidth: 1000) {
          src
        }
      }
      body {
        json
      }
    }
  }
`;
