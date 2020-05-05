import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import ReactMarkdown from "react-markdown";
import Img from "gatsby-image";
import { Section } from "react-scroll-section";
import Headline from "../../common/components/headline";
import markdownRenderer from "../../common/components/markdownRenderer";

export default () => (
  <StaticQuery
    query={graphql`
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
      }
    `}
    render={(data) => {
      const { aboutMe, geographicalInfo } = data.contentfulAbout;

      return (
        <Section id="me">
          <div className="min-h-screen py-20 container block lg:flex flex-row justify-around items-start">
            <Fade bottom>
              <div className="flex-1">
                <Headline Type="h2" tailwindColorClassname="text-violett">
                  Über mich
                </Headline>
                <div className="block lg:grid grid-cols-2 gap-8">
                  <ReactMarkdown
                    source={aboutMe.childMarkdownRemark.rawMarkdownBody}
                    renderers={markdownRenderer}
                  />
                  <div
                    className="mt-10 lg:m-0"
                  >
                    <ReactMarkdown
                      source={
                        geographicalInfo.childMarkdownRemark.rawMarkdownBody
                      }
                      renderers={markdownRenderer}
                    />
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="hidden lg:block center lg:w-1/4 px-10 lg:self-end">
                <Pulse duration={3000} forever>
                  <Img fluid={data.logo.childImageSharp.fluid} />
                </Pulse>
              </div>
            </Fade>
          </div>
        </Section>
      );
    }}
  />
);
