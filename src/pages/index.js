import React from "react";
import Layout from "../common/layouts";
import { graphql, Link } from "gatsby";
import Slide from "react-reveal/Slide"
import Hero from "../homepage/components/hero";
import Card from "../homepage/components/card";
import About from "../homepage/components/about";
import Bio from "../homepage/components/bio";
import Projects from "../homepage/components/projects";
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
        <section
          className="flex items-center justify-center"
          style={{
            zIndex: 2,
            textAlign: "center",
            width: "96%",
            height: "93%",
          }}
        >
          <div
            className="videoContainerGrid"
            style={{ maxWidth: "1200px", textAlign: "initial" }}
          >
            <div className="textBoxInnerSpacing flex flex-column justify-center">
              <Slide left>
              <h1
                className="uppercase text-4xl md:text-6xl lg:text-8xl white font-serif font-bold leading-none"
                style={{
                  marginTop: "initial",
                  marginBottom: "initial",
                }}
              >
                {data.contentfulAbout.name}
              </h1>
              <h3 className="text-xl lg:text-2xl sans-serif white my-4">
                Dipl. Kräuterpädagogin & Aromapraktikerin
              </h3>
              <div className="flex flex-column lg:flex-row items-center justify-between py-5">
                <Link
                  className="mb-8 lg:mb-0 py-5 px-16 font-bold hover:shadow-md uppercase bg-violett white sans-serif no-underline transform hover:scale-97 transition ease-in-out duration-100"
                  to="/"
                >
                  Über mich
                </Link>
                <Link
                  className="py-5 px-16 font-bold hover:shadow-md uppercase bg-violett white sans-serif no-underline transform hover:scale-97 transition ease-in-out duration-100"
                  to="/"
                >
                  Meine Themen
                </Link>
              </div>
              </Slide>
            </div>
            <div>
            <Slide right>
              <Img
                className="w-3/6 lg:w-9/12 opacity-85 center"
                alt="Daniela Sohneg Logo"
                fluid={data.logo.childImageSharp.fluid}
              />
              </Slide>
            </div>
          </div>
        </section>
      </VideoHero>
      <Projects />
      <Bio />
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
