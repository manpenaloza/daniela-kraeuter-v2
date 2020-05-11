import React from "react";
import Layout from "../common/layouts";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import MultiLink from "gatsby-universal-link";
import Seo from "../common/seo";

export default ({ props, data }) => (
  <Layout>
    <Seo
      title={`About ${data.site.siteMetadata.title}`}
      description={data.markdownRemark.frontmatter.title}
    />
    <div className="relative">
      <Img
        fluid={data.contentfulAbout.personalHeroImage.fluid}
        imgStyle={{
          objectFit: "cover",
          objectPosition: "top center"
        }}
        loading="lazy"
        alt={data.contentfulAbout.personalHeroImage.title}
      />
      <h1
        className="text-mid-gray fw1 tc f2 display absolute dn dib-ns"
        style={{
          bottom: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Über mich - {data.site.siteMetadata.title}
      </h1>
    </div>
    <div className="container mw9 center flex flex-wrap pv5-l w-100">
      <div className="mw7 w-100 pa2">
        <h1 className="display fw1 db lh-copy">
          {data.markdownRemark.frontmatter.title}
        </h1>
        <MultiLink
          to="/blog"
          className="dib bg-dark-gray b near-white hover-bg-mid-gray pv3 ph4 ttu tracked sans-serif no-underline mv2"
        >
          Read the blog
        </MultiLink>
      </div>
      <div
        className="mw7 w-100 lh-copy serif pa2 flex flex-column justify-center f4"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
    </div>
  </Layout>
);

export const dataQuery = graphql`
  query {
    contentfulAbout {
      personalHeroImage {
        title
        fluid(cropFocus: TOP, maxWidth: 1800, maxHeight: 700) {
          ...GatsbyContentfulFluid
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { name: { eq: "about__bio" } }) {
      html
      frontmatter {
        title
      }
    }
    banner: file(relativePath: { eq: "img/about__banner.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 720, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
