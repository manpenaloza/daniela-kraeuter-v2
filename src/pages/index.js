import React from "react";
import Layout from "../common/layouts";
import { graphql, Link } from "gatsby";
import Hero from "../homepage/components/hero";
import Card from "../homepage/components/card";
import About from "../homepage/components/about";
import Bio from "../homepage/components/bio";
import Seo from "../common/seo";
import Img from "gatsby-image";
import VideoHero from "../homepage/components/videoHero";

export default ({ data }) => {
  let post = data.featuredPost.edges[0].node;
  return (
    <Layout>
      <Seo
        title={"Home Page"}
        description={data.site.siteMetadata.description}
      />
      <VideoHero videoSrc="./kraeuterwanderung.mp4">
        <div
          className="videoContainerGrid"
          style={{ maxWidth: "1200px", textAlign: "initial" }}
        >
          <div className="textBoxInnerSpacing flex flex-column justify-center">
            <span className="f3 f1-ns color-primary-violett b">
            Hallo! Ich bin
            </span>
            <h1 className="f3 f1-ns color-primary-violett" style={{ marginTop: "initial"}}>DANIELA SOHNEG.</h1>
            <h3 className="f2 f3-ns sans-serif mid-gray">
              Dipl. Kräuterpädagogin & Aromapraktikerin
            </h3>
            <div className="flex flex-row items-center justify-around pv3">
              <Link
                className="db pv3 ph5 tracked ttu b bg-primary-violett white sans-serif no-underline hover-light-gray"
                to="/"
              >
                Über mich
              </Link>
              <Link
                className="db pv3 ph5 tracked ttu b bg-primary-violett white sans-serif no-underline hover-light-gray"
                to="/"
              >
                Meine Themen
              </Link>
            </div>
          </div>
          <div>
            <Img
              className="w-80 mw6 h-80"
              alt="Daniela Sohneg Logo"
              fluid={data.logo.childImageSharp.fluid}
            />
          </div>
        </div>
      </VideoHero>
      <Hero
        title={post.frontmatter.title}
        image={post.frontmatter.postImage.childImageSharp.fluid}
        to={post.frontmatter.slug}
        description={post.frontmatter.description}
      />
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
      <About />
      <Bio />
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
  }
`;
