import React from "react";
import Layout from "../common/layouts";
import { graphql } from "gatsby";
import Hero from "../homepage/components/teaser";
import Card from "../homepage/components/card";
import About from "../homepage/components/about";
import Bio from "../homepage/components/bio";
import Me from "../homepage/components/me";
import Projects from "../homepage/components/projects";
import Seo from "../common/seo";
import VideoHero from "../homepage/components/videoHero";
import Landing from '../homepage/components/landing';
import Education from "../homepage/components/education";

export default ({ data }) => {
  let post = data.featuredPost.edges[0].node;
  return (
    <Layout>
      <Seo
        title={"Home Page"}
        description={data.site.siteMetadata.description}
      />
      <VideoHero videoSrc="./kraeuterwanderung.mp4">
        <Landing />
      </VideoHero>
      <Me />
      <Hero
        title={post.frontmatter.title}
        image={post.frontmatter.postImage.childImageSharp.fluid}
        to={post.frontmatter.slug}
        description={post.frontmatter.description}
      />
      <Projects />
      <div className="flex flex-wrap center mw9 justify-around pb3">
        {data.cards.edges.map(({ node }) => (
          <Card
            title={node.frontmatter.title}
            image={node.frontmatter.postImage.childImageSharp.fluid}
            to={node.frontmatter.slug}
            description={node.frontmatter.description}
          />
        ))}
      </div>
      <Bio />
      <Education />
      <About />
    </Layout>
  );
};

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "img/logo.png" }) {
      name
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    featuredPost: allMarkdownRemark(
      limit: 1
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description: metaDescription
            slug
            postImage {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    cards: allMarkdownRemark(
      skip: 1
      limit: 3
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description: metaDescription
            slug
            postImage {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        description
      }
    }
    contentfulAbout(id: {eq: "396fbdb2-8bf0-578c-9dca-0ff8d0af232c"}) {
      name
    }
  }
`;
