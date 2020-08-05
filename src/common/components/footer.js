import React from "react";
import { StaticQuery, graphql } from "gatsby";
import {
  FaPinterest,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import MultiLink from "gatsby-universal-link";
import Img from "gatsby-image";

const LightFooterButton = ({ children }) => {
  return (
    <div className="py-2 px-5 mb-2 bg-near-white rounded-lg text-dark-gray bg-opacity-75 text-center">
      {children}
    </div>
  );
};

const SocialLink = ({ networkName, linkTarget }) => {
  const Icon = {
    facebook: FaFacebook,
    pinterest: FaPinterest,
    twitter: FaTwitter,
    youtube: FaYoutube,
    github: FaGithub,
    instagram: FaInstagram,
  }[networkName];

  return (
    <MultiLink className="text-near-white" target="_blank" to={linkTarget}>
      <Icon style={{ width: "2em", height: "2em" }} />
    </MultiLink>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "img/logo-extended.png" }) {
          name
          childImageSharp {
            fixed(width: 250, fit: CONTAIN) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        site {
          siteMetadata {
            siteTitle: title
            mailChimpUrl
            pinterest
            facebook
            twitter
            youtube
            github
            instagram
          }
        }
      }
    `}
    render={(data) => (
      <footer className="px-4 py-20 bg-dark-gray text-near-white font-sans-serif">
        <div className="max-w-screen-xl md:flex md:flex-row md:flex-wrap md:justify-around">
          <div className="mb-16 md:mb-0">
            <span className="mb-6 block">
              ERSTELLUNG DES INHALTS DURCH
              <br /> {data.site.siteMetadata.siteTitle}
            </span>
            <LightFooterButton>
              <MultiLink
                scrollToId="blogPostMainTeaser"
                className="cursor-pointer"
              >
                BLOG BEITRÄGE
              </MultiLink>
            </LightFooterButton>
          </div>
          <div className="mb-16 md:mb-0 text-center">
            <Img
              alt="Daniela Sohneg Logo - Kräuterpädagogin und Aromapraktikerin"
              fixed={data.logo.childImageSharp.fixed}
            />
            <hr className="my-4" />
            <div className="flex justify-around items-center py-4">
              {data.site.siteMetadata.facebook && (
                <SocialLink
                  networkName="facebook"
                  linkTarget={data.site.siteMetadata.facebook}
                />
              )}
              {data.site.siteMetadata.instagram && (
                <SocialLink
                  networkName="instagram"
                  linkTarget={data.site.siteMetadata.instagram}
                />
              )}
            </div>
          </div>
          <div className="flex flex-column font-sans-serif tracking-wider text-near-white mb-16 md:mb-0">
            <span className="text-near-white font-sans-serif mb-6">
              Ich freu mich auf dich!
            </span>
            <LightFooterButton>
              <MultiLink to="mailto:daniela.sohneg@gmail.com">
                E-MAIL SCHREIBEN
              </MultiLink>
            </LightFooterButton>
            <LightFooterButton>
              <MultiLink to="tel:004368120632309">ANRUFEN</MultiLink>
            </LightFooterButton>
          </div>
        </div>
        <div className="center mb-6 font-sans-serif text-near-white tracking-wider">
          <div className="w-full border-b border-mid-gray my-6"></div>
          <div className="flex flex-row items-center justify-center">
            <MultiLink to="tel:004368120632309" className="hover:underline">
              Tel: +43 681 2063 23 09
            </MultiLink>
            <span className="mx-4">|</span>
            <MultiLink to="/privacy" className="hover:underline">
              IMPRESSUM
            </MultiLink>
          </div>
        </div>
        <div className="text-near-white text-center font-sans-serif text-sm">
          <p>
            Website Entwicklung:{" "}
            <MultiLink to="https://manpenaloza.dev" className="hover:underline">
              Manuel Penaloza
            </MultiLink>
            , 2020
          </p>
        </div>
      </footer>
    )}
  />
);
