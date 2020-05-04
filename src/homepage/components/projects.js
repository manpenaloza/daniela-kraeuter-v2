import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Fade from "react-reveal/Fade";
import Pulse from 'react-reveal/Pulse';
import ReactMarkdown from "react-markdown";
import Img from "gatsby-image";

export default () => (
  <div className="py-20 flex flex-row justify-around items-start center">
    <StaticQuery
      query={graphql`
        query {
          contentfulAbout {
            aboutMe {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            profile {
              title
              image: resize(width: 450, quality: 100) {
                src
              }
            }
            personalHeroImage {
              fluid {
                src
              }
            }
          }
          image: file(relativePath: { eq: "img/author.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          copy: markdownRemark(frontmatter: { name: { eq: "homepage__bio" } }) {
            html
            frontmatter {
              title
            }
          }
        }
      `}
      render={(data) => {
        const { aboutMe, profile } = data.contentfulAbout;

        return (
          <div className="flex flex-row items-center flex-wrap">
            <div className="flex-1">
              <Fade bottom>
                <ReactMarkdown
                  source={aboutMe.childMarkdownRemark.rawMarkdownBody}
                  // renderers={markdownRenderer}
                />
              </Fade>
            </div>

            <div className="center flex-1 lg:flex-shrink">
              <Fade right>
                <Pulse duration={3000} forever>
                  {/* <LogoSymbol heightPx={200} widthPx={200} /> */}
                </Pulse>
              </Fade>
            </div>
          </div>
        );
      }}
    />
  </div>
);
