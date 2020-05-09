import React from "react";
import { StaticQuery, graphql } from "gatsby";
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
        "flex flex-column justify-center items-center bg-primary-violett fixed top z-max w-100 ease" +
        (props.active ? " vh-93" : " h0")
      }
    >
      <MultiLink
        to="/"
        className={
          "display ttu tracked white f2 no-underline menu__item pv5" +
          extraClasses
        }
      >
        {props.siteTitle}
      </MultiLink>

      {props.extraLinks.map(({ name, ...props }) => (
        <MultiLink
          {...props}
          className={
            "sans-serif ttu white f4 no-underline menu__item pv3" + extraClasses
          }
        >
          {name}
        </MultiLink>
      ))}

      <MultiLink
        scrollToId="me"
        className={
          "sans-serif ttu white f4 no-underline menu__item pv3" + extraClasses
        }
      >
        About
      </MultiLink>
    </div>
  );
};

export default class Navbar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      // Null rather than false to check for initialization
      menuToggle: null,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(event) {
    this.setState({
      menuToggle: !this.state.menuToggle,
    });
  }

  render() {
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
            site {
              siteMetadata {
                navbarLinks {
                  to
                  scrollToId
                  name
                }
                siteTitle: title
                mailChimpUrl
              }
            }
          }
        `}
        render={(data) => (
          <React.Fragment>
            <div
              className="bg-white flex w-100 flex justify-between items-center top-0 z-999 bb b--light-gray"
              style={{ position: "sticky", height: "60px" }}
            >
              <div className="flex justify-between lg:justify-around  items-center  w-100 mw8 ph4 pa2-ns">
                <button
                  className="ttu tracked dark-gray f4 no-underline bn bg-transparent pointer"
                  onClick={this.toggleMenu}
                >
                  <FiMenu />
                </button>
                <MultiLink to="/" className="cursor-pointer">
                  <Img
                    className=""
                    alt=""
                    fixed={data.logo.childImageSharp.fixed}
                  />
                </MultiLink>
                {data.site.siteMetadata.navbarLinks.map(
                  ({ name, ...props }) => (
                    <MultiLink
                      {...props}
                      className="sans-serif ttu mid-gray f5 no-underline dn dib-l hover:text-shadow-violett cursor-pointer"
                    >
                      {name}
                    </MultiLink>
                  )
                )}
              </div>
              <div className="dn w-100 mw5 flex-l justify-around items-center">
                <MultiLink
                  to={data.site.siteMetadata.mailChimpUrl}
                  className="sans-serif ttu color-primary-violett f5 no-underline dn dib-l cursor-pointer"
                >
                  Kontakt
                </MultiLink>
                {/* <span className="sans-serif mid-gray dn dib-l">|</span> */}
                {/* <Link
                  to="/about"
                  className="sans-serif ttu mid-gray f5 no-underline dn dib-l"
                >
                  Newsletter
                </Link> */}
              </div>
            </div>
            <SliderMenu
              active={this.state.menuToggle}
              extraLinks={data.site.siteMetadata.navbarLinks}
              siteTitle={data.site.siteMetadata.siteTitle}
            />
          </React.Fragment>
        )}
      />
    );
  }
}
