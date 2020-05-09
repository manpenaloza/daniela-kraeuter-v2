import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Fade from "react-reveal/Fade";
import ReactMarkdown from "react-markdown";
import { Section } from "react-scroll-section";
import Headline from "../../common/components/headline";
import markdownRenderer from "../../common/components/markdownRenderer";

export default () => (
  <Section id="projects" className="min-h-screen py-20 container">
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
                  Tätigkeiten & Projekte
                </Headline>
                <div className="max-w-screen-sm">
                  <ReactMarkdown 
                    source={projectsTeasertext.childMarkdownRemark.rawMarkdownBody}
                    renderers={markdownRenderer}
                  />
                </div>
              </div>
            </Fade>
          </React.Fragment>
        );
      }}
    />
  </Section>
);
