import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import ReactMarkdown from "react-markdown";
import Img from "gatsby-image";
import { Section } from "react-scroll-section";
import Headline from "../../common/components/headline";
import markdownRenderer from "../../common/components/markdownRenderer";
import MultiLink from "gatsby-universal-link";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAbout {
        aboutMe {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
        geographicalInfo {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
      logo: file(relativePath: { eq: "img/logo.png" }) {
        name
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portrait: file(relativePath: { eq: "img/daniela-sohneg-portrait.jpeg" }) {
        name
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const { aboutMe, geographicalInfo } = data.contentfulAbout;

  return (
    <Section id="me">
      <div className="min-h-screen py-20 container block lg:flex flex-row justify-around items-start">
        <Fade bottom>
          <div className="flex-1">
            <Headline
              Type="h2"
              colorClassname="text-primary"
              fontStylesClassname="font-handwritten"
            >
              Über mich
            </Headline>
            <div className="block lg:grid grid-cols-3 gap-8">
              <ReactMarkdown
                source={aboutMe.childMarkdownRemark.rawMarkdownBody}
                renderers={markdownRenderer}
              />
              <div className="mt-10 lg:m-0">
                <ReactMarkdown
                  source={geographicalInfo.childMarkdownRemark.rawMarkdownBody}
                  renderers={markdownRenderer}
                />
                {/* REACTIVATE THIS LINK ONCE THE DEDICATED ABOUT PAGE IS FINISHED 
                  <MultiLink
                  to="/about/"
                  className="underline text-primary font-sans-serif font-bold tracking-wider leading-normal mt-5 block"
                > */}
                  <p className="text-primary font-sans-serif font-bold tracking-wider leading-normal mt-5 block">Mehr Infos in Kürze!</p>
                {/* </MultiLink> */}
              </div>
              <Fade right>
                <Img
                  className="overflow-hidden rounded-lg portrait relative mt-10 lg:m-0 border-secondary border-4 shadow-2xl"
                  fluid={data.portrait.childImageSharp.fluid}
                />
              </Fade>
            </div>
          </div>
        </Fade>
        {/* <Fade right>
          <div className="lg:w-1/3 rounded-lg overflow-hidden">
            <Img fluid={data.portrait.childImageSharp.fluid} />
          </div>
        </Fade> */}
      </div>
    </Section>
  );
};
