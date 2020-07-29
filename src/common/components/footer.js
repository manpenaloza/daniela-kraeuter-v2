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
import "tachyons";

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
      <Icon />
    </MultiLink>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query {
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
      <footer className="px-4 py-20 bg-dark-gray text-near-white">
        <div className="max-w-screen-xl md:flex md:flex-row md:flex-wrap md:justify-around">
          <div className="mb-8 text-mid-gray">
            <span className="font-serif text-3xl lg:text-5xl">
              {data.site.siteMetadata.siteTitle}
            </span>
            <hr />
            <div className="flex justify-around items-center py-4">
              {data.site.siteMetadata.facebook && (
                <SocialLink
                  networkName="facebook"
                  linkTarget={data.site.siteMetadata.facebook}
                />
              )}

              {data.site.siteMetadata.youtube && (
                <SocialLink
                  networkName="youtube"
                  linkTarget={data.site.siteMetadata.youtube}
                />
              )}

              {data.site.siteMetadata.github && (
                <SocialLink
                  networkName="github"
                  linkTarget={data.site.siteMetadata.github}
                />
              )}
              {data.site.siteMetadata.pinterest && (
                <SocialLink
                  networkName="pinterest"
                  linkTarget={data.site.siteMetadata.pinterest}
                />
              )}

              {data.site.siteMetadata.twitter && (
                <SocialLink
                  networkName="twitter"
                  linkTarget={data.site.siteMetadata.twitter}
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
          <div className="flex flex-column font-sans-serif tracking-wider text-near-white">
            <span className="mb-6 block">
              ERSTELLUNG DES INHALTS DURCH
              <br /> {data.site.siteMetadata.siteTitle}
            </span>
            <MultiLink to="/blog">ALLE BLOG BEITRÄGE</MultiLink>
            {/* <MultiLink to="/rss.xml">RSS FEED</MultiLink> */}
          </div>
          <div className="flex flex-column font-sans-serif tracking-wider text-near-white">
            <span className="text-near-white font-sans-serif mb-6">
              MEHR ÜBER {data.site.siteMetadata.siteTitle}
            </span>
            <MultiLink to="/about">MEINE PERSON</MultiLink>
            <MultiLink to={data.site.siteMetadata.mailChimpUrl}>
              NEWSLETTER
            </MultiLink>
          </div>
        </div>
        <div className="center text-silver mb-6 font-sans-serif text-silver tracking-wider">
          <div className="w-full border-b border-mid-gray my-6"></div>
          <div className="flex flex-row items-center justify-center">
            <MultiLink to="/sitemap.xml">SITEMAP</MultiLink>
            <span className="mx-4">|</span>
            <MultiLink to="/privacy">PRIVACY</MultiLink>
          </div>
        </div>
        <div className="text-silver text-center font-sans-serif text-sm text-mid-gray">
          <p>
            Website Entwicklung:{" "}
            <MultiLink to="https://manpenaloza.dev" className="underline">
              Manuel Penaloza
            </MultiLink>
            , 2020
          </p>
        </div>
      </footer>
    )}
  />
);
