import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import Slide from "react-reveal/Slide";
import Img from "gatsby-image";

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
                <h3 className="text-xl lg:text-2xl sans-serif white my-4">
                  Dipl. Kräuterpädagogin & Aromapraktikerin
                </h3>
                <div className="flex flex-column lg:flex-row items-center justify-between py-5">
                  <Link
                    className="mb-8 lg:mb-0 py-5 px-16 font-bold hover:shadow-md uppercase bg-violett white sans-serif no-underline transform hover:scale-97 transition ease-in-out duration-100 rounded-lg"
                    to="/"
                  >
                    Über mich
                  </Link>
                  <Link
                    className="py-5 px-16 font-bold hover:shadow-md uppercase bg-violett white sans-serif no-underline transform hover:scale-97 transition ease-in-out duration-100 rounded-lg"
                    to="/"
                  >
                    Meine Themen
                  </Link>
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
