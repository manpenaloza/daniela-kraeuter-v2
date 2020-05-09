import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Fade from "react-reveal/Fade";
import { Section } from "react-scroll-section";
import MultiLink from "gatsby-universal-link";
import Headline from "../../common/components/headline";
import {
  Paragraph,
  ListItem,
  UnorderedList,
} from "../../common/components/typography";

export default () => (
  <Section id="education" className="min-h-screen py-20 container">
    <StaticQuery
      query={graphql`
        query {
          allContentfulAusbildung {
            edges {
              node {
                url
                name
                mainEmphasis
                description
                degree
                logo {
                  fluid(maxWidth: 500) {
                    ...GatsbyContentfulFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        console.log(data);
        const { edges } = data.allContentfulAusbildung;

        return (
          <React.Fragment>
            <Fade bottom>
              <Headline Type="h2" tailwindColorClassname="text-violett">
                Ausbildungen und Diplome
              </Headline>
              <div className="lg:grid grid-cols-2 gap-8">
                {edges.map(({ node: education }) => (
                  <article>
                      <Img
                        fluid={education.logo.fluid}
                        objectFit="contain"
                        objectPosition="50% 50%"
                        className="lg:w-1/2 m-auto my-16"
                        alt={`Logo ${education.name} - Ausbildung von Daniela Sohneg`}
                        style={{
                          filter: "grayscale(100%)"
                        }}
                      />
                    <Paragraph>{education.description}</Paragraph>
                    <div className="font-sans-serif mt-8 bg-green white p-4 rounded-lg">
                      <span className="text-2xl font-bold">Schwerpunkte:</span>
                      <UnorderedList>
                        {education.mainEmphasis.map((emphasis) => (
                          <ListItem>{emphasis}</ListItem>
                        ))}
                      </UnorderedList>
                    </div>
                    <div className="text-center mt-8">
                    <MultiLink to={education.url} className="underline text-green font-bold tracking-widest">Zur Website</MultiLink>
                    </div>
                  </article>
                ))}
              </div>
            </Fade>
          </React.Fragment>
        );
      }}
    />
  </Section>
);
