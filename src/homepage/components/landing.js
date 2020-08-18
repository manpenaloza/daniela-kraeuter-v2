import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import useIsScrolled from "use-is-scrolled";
import Slide from "react-reveal/Slide";
import Img from "gatsby-image";
import Button from "../../common/components/button";

export default () => {
  const isScrolled = useIsScrolled();
  
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "img/logo-extended.png" }) {
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
  `);

  return (
    <section
      className="flex items-center justify-center"
      style={{
        zIndex: 2,
        textAlign: "center",
      }}
    >
      <div
        className="text-left md:grid grid-cols-2"
        style={{ maxWidth: 1200 }} // custom max-width instead using a Tailwind classname for aesthetics reasons
      >
        <div className="textBoxInnerSpacing flex flex-column justify-center text-near-white">
          <Slide left>
            <h1
              className="font-handwritten text-center xl:text-left text-5xl md:text-6xl lg:text-7xl leading-none"
              style={{
                marginTop: "initial",
                marginBottom: "initial",
              }}
            >
              {data.contentfulAbout.name}
            </h1>
            <h3 className="text-lg lg:text-2xl font-sans-serif my-4 text-shadow leading-normal tracking-wider text-center">
              Dipl. Aromapraktikerin &<br /> Dipl. Kräuterpädagogin
            </h3>
            <div className="flex flex-column xl:flex-row items-center justify-between py-5">
              <Button.PrimaryWithPageScroll scrollToId="me" colorClassName="bg-light-primary">
                Über mich
              </Button.PrimaryWithPageScroll>
              <Button.PrimaryWithPageScroll
                scrollToId="blogPostMainTeaser"
                classNames="mt-5 xl:mt-0"
                colorClassName="bg-light-primary"
              >
                Blog Artikel
              </Button.PrimaryWithPageScroll>
            </div>
          </Slide>
        </div>
        <div>
          <Slide right>
            <Img
              className="w-2/6 md:w-3/6 lg:w-9/12 opacity-90 center"
              alt="Daniela Sohneg Logo"
              fluid={data.logo.childImageSharp.fluid}
            />
          </Slide>
        </div>
      </div>
      {!isScrolled && (
        <small
          className={`hidden copyright xl:block fixed origin-bottom-left text-near-white text-sm font-sans-serif`}
        >
          © Daniela Sohneg | 2020
        </small>
      )}
    </section>
  );
};
