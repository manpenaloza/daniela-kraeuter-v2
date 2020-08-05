import React, { useState } from "react";
import { StaticQuery, graphql, useStaticQuery } from "gatsby";
import { FiMenu } from "react-icons/fi";
import Img from "gatsby-image";
import "../styles/custom.tachyons.css";
import MultiLink from "gatsby-universal-link";

const SliderMenu = (props) => {
  // Prevents a flash of visible menu items when the entrance is triggered
  let extraClasses;
  if (props.active === null) {
    extraClasses = " dn";
  } else {
    extraClasses = props.active ? " fadeIn" : " fadeOut";
  }

  return (
    <div
      className={
        "flex flex-column justify-center items-center bg-primary fixed top z-max w-100 ease" +
        (props.active ? " vh-93" : " h0")
      }
      onClick={() => props.menuState.setMenuOpen(false)}
    >
      <MultiLink
        to="/"
        className={
          "font-sans-serif display ttu tracked white f2 no-underline menu__item transform -translate-y-12" +
          extraClasses
        }
      >
        <Img
          alt="Daniela Sohneg Logo - Kräuterpädagogin und Aromapraktikerin"
          fixed={props.logo.fixed}
        />
      </MultiLink>

      {props.extraLinks.map(({ name, ...props }) => (
        <MultiLink
          {...props}
          key={name}
          className={
            "font-sans-serif ttu white f4 no-underline menu__item pv3" +
            extraClasses
          }
        >
          {name}
        </MultiLink>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = window.innerWidth < 960;
  const isHomepage = window.location.pathname === "/";

  return (
    <StaticQuery
      query={graphql`
        query {
          logo: file(relativePath: { eq: "img/logo.png" }) {
            name
            childImageSharp {
              fixed(height: 45) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          logoExtended: file(relativePath: { eq: "img/logo-extended.png" }) {
            name
            childImageSharp {
              fixed(width: 250, fit: CONTAIN) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          site {
            siteMetadata {
              navbarLinks {
                scrollToId
                name
              }
              siteTitle: title
              mailChimpUrl
            }
          }
        }
      `}
      render={(data) => {
        return (
          <React.Fragment>
            <div
              className="px-10 py-4 tracking-wider bg-near-white flex justify-between items-center top-0 z-50 border-solid border-secondary border-b-2"
              style={{ position: "sticky", height: "65px" }}
            >
              {isMobile && isHomepage && (
                <button
                  className="ttu tracked dark-gray f4 no-underline bn bg-transparent pointer"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <FiMenu />
                </button>
              )}
              <MultiLink to="/" className="cursor-pointer">
                <Img
                  alt="Logo Symbol von Daniela Sohneg"
                  fixed={data.logo.childImageSharp.fixed}
                />
              </MultiLink>
              {isHomepage &&
                data.site.siteMetadata.navbarLinks.map(({ name, ...props }) => (
                  <MultiLink
                    key={name}
                    {...props}
                    className="sans-serif ttu f5 no-underline dn dib-l hover:text-shadow-primary-light  cursor-pointer"
                  >
                    {name}
                  </MultiLink>
                ))}
              <MultiLink
                to="mailto:daniela.sohneg@gmail.com"
                className="text-near-white rounded-lg bg-secondary py-2 px-6  sans-serif ttu color-secondary f5 no-underline dn dib-l cursor-pointer"
              >
                Kontakt
              </MultiLink>
            </div>
            <SliderMenu
              active={menuOpen}
              menuState={{ menuOpen, setMenuOpen }}
              extraLinks={data.site.siteMetadata.navbarLinks}
              siteTitle={data.site.siteMetadata.siteTitle}
              logo={data.logoExtended.childImageSharp}
            />
          </React.Fragment>
        );
      }}
    />
  );
};

export default Navbar;
