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
        const { edges } = data.allContentfulAusbildung;

        return (
          <React.Fragment>
            <Fade bottom>
              <Headline Type="h2" colorClassname="text-primary">
                Ausbildungen und Diplome
              </Headline>
              <div className="lg:grid grid-cols-2 gap-8">
                {edges.map(({ node: education }) => (
                  <article key={education.name}>
                      <Img
                        fluid={education.logo.fluid}
                        objectFit="contain"
                        objectPosition="50% 50%"
                        className="lg:w-1/2 m-auto my-16 education-institute-logos grayscale-filter hover:no-grayscale-filter transition-all duration-100 ease-in-out"
                        alt={`Logo ${education.name} - Ausbildung von Daniela Sohneg`}
                      />
                    <Paragraph>{education.description}</Paragraph>
                    <div className="font-sans-serif mt-8 bg-primary text-near-white p-4 rounded-lg">
                      <span className="font-extrabold text-2xl block text-center">Schwerpunkte</span>
                      <UnorderedList>
                        {education.mainEmphasis.map((emphasis) => (
                          <ListItem className="leading-normal lg:leading-loose" key={emphasis}>{emphasis}</ListItem>
                        ))}
                      </UnorderedList>
                    </div>
                    <div className="text-center mt-8">
                    <MultiLink to={education.url} target="_blank" className="underline text-primary font-sans-serif font-bold tracking-wider">{education.name} Website</MultiLink>
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
