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
  <Section id="education" className="min-h-screen py-20 container">
    <StaticQuery
      query={graphql`
        query {
          contentfulAbout {
            aboutMe {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            projectsTeasertext {
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
        const { projectsTeasertext } = data.contentfulAbout;

        return (
          <React.Fragment>
            <Fade bottom>
              <div>
                <Headline Type="h2" tailwindColorClassname="text-violett">
                  Ausbildungen und Diplome
                </Headline>
              </div>
            </Fade>
          </React.Fragment>
        );
      }}
    />
  </Section>
);
