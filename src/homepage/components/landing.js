import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import Slide from "react-reveal/Slide";
import Img from "gatsby-image";
import { SectionLink } from "react-scroll-section";
import Button from "../../common/components/button";

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          logo: file(relativePath: { eq: "img/logo.png" }) {
            name
            childImageSharp {
              fluid(maxWidth: 768) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          contentfulAbout(id: { eq: "396fbdb2-8bf0-578c-9dca-0ff8d0af232c" }) {
            name
          }
        }
      `}
      render={(data) => (
        <section
          className="flex items-center justify-center"
          style={{
            zIndex: 2,
            textAlign: "center",
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
                <h3 className="text-xl lg:text-2xl sans-serif white my-4 text-shadow">
                  Dipl. Kräuterpädagogin & Aromapraktikerin
                </h3>
                <div className="flex flex-column lg:flex-row items-center justify-between py-5">
                  <SectionLink section="me">
                    {({ onClick }) => (
                      <Button.PrimaryWithPageScroll onClick={onClick}>Über mich</Button.PrimaryWithPageScroll>
                    )}
                  </SectionLink>
                  <SectionLink section="projects">
                    {({ onClick }) => (
                      <Button.PrimaryWithPageScroll onClick={onClick}>Tätigkeiten</Button.PrimaryWithPageScroll>
                    )}
                  </SectionLink>
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
      )}
    />
  );
};
