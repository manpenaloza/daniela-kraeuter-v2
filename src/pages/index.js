import React from "react";
import Layout from "../common/layouts";
import { graphql } from "gatsby";
import Teaser from "../homepage/components/teaser";
import About from "../homepage/components/about";
import Me from "../homepage/components/me";
import Projects from "../homepage/components/projects";
import Seo from "../common/seo";
import VideoHero from "../homepage/components/videoHero";
import Landing from '../homepage/components/landing';
import Education from "../homepage/components/education";
import BlogPosts from "../homepage/components/blogPosts";

export default ({ data }) => {
  
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
      <Education />
      <Teaser
        title={data.featuredPost.title}
        image={data.featuredPost.introImage.fluid}
        to={data.featuredPost.slug}
        description="description statically texted"
      />
      
      {/* <Projects /> */}
      <BlogPosts />
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
    featuredPost: contentfulBlog {
      title
      slug
      introImage {
        fluid(maxWidth:1800) {
          ...GatsbyContentfulFluid
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
