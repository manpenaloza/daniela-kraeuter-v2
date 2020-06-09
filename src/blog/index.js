import React from "react";
import Layout from "../common/layouts";
import { Link, graphql } from "gatsby";
import Breadcrumbs from "./components/breadcrumbs";
import MultiLink from "gatsby-universal-link"
import Preview from "./components/postPreview.js";
import Seo from "../common/seo";

export default function BlogIndex({ data }, context) {
  const posts = data.posts.edges;
  const hasNext = data.posts.pageInfo.hasNextPage;

  return (
    <Layout>
      <Seo
        title={`Alle Blog Beiträge - Seite ${context.pageNumber}`}
        description={`Übersicht aller Blog Beiträge. Seite  ${context.pageNumber}`}
      />
      <div className="pv5 flex items-center justify-center bg-washed-red">
        <h1 className="fw1 tc f2 display">Alle Blog Beiträge</h1>
      </div>
      <div className="mw9 center">
        <Breadcrumbs
          lastName="Blog"
          lastPath="/blog"
          currentPage={`Page ${context.pageNumber}`}
        />
        {posts.map(({ node }) => (
          <div>{node.title}</div>
          // <Preview
          //   fluidImage={node.frontmatter.postImage.childImageSharp.fluid}
          //   slug={node.frontmatter.slug}
          //   title={node.frontmatter.title}
          //   date={node.frontmatter.date}
          //   category={node.frontmatter.category}
          //   description={node.frontmatter.metaDescription}
          // />
        ))}
        <div className="pv5 flex w-100">
          {hasNext && (
            <MultiLink
              className="dark-gray sans-serif ttu tracked no-underline"
              to={context.nextPage}
            >
              Nächste Seite &rarr;
            </MultiLink>
          )}
        </div>
      </div>
    </Layout>
  );
}

export const blogListQuery = graphql`
  query posts($skip: Int!, $limit: Int!) {
    posts: allContentfulBlog(limit: $limit, skip: $skip) {
      edges {
        node {
          id
          title
          slug
          childContentfulBlogBodyRichTextNode {
            json
          }
          introImage {
            fluid(maxWidth: 200) {
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;
