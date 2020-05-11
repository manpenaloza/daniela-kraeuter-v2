import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import {
  FaPinterestP,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import MultiLink from "gatsby-universal-link";
import "tachyons";

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
        <div className="flex flex-row flex-wrap justify-around max-w-screen-xl">
          <div className="mb-8 text-mid-gray">
            <span className="font-serif text-3xl lg:text-5xl">
              {data.site.siteMetadata.siteTitle}
            </span>
            <hr />
            <div className="flex justify-around items-center py-4">
              {data.site.siteMetadata.facebook && (
                <MultiLink
                  className="text-near-white"
                  href={data.site.siteMetadata.facebook}
                >
                  <FaFacebookF />
                </MultiLink>
              )}

              {data.site.siteMetadata.youtube && (
                <MultiLink
                  className="text-near-white"
                  href={data.site.siteMetadata.youtube}
                >
                  <FaYoutube />
                </MultiLink>
              )}

              {data.site.siteMetadata.github && (
                <MultiLink
                  className="text-near-white"
                  href={data.site.siteMetadata.github}
                >
                  <FaGithub />
                </MultiLink>
              )}

              {data.site.siteMetadata.pinterest && (
                <MultiLink
                  className="text-near-white"
                  href={data.site.siteMetadata.pinterest}
                >
                  <FaPinterestP />
                </MultiLink>
              )}

              {data.site.siteMetadata.twitter && (
                <MultiLink
                  className="text-near-white"
                  href={data.site.siteMetadata.twitter}
                >
                  <FaTwitter />
                </MultiLink>
              )}

              {data.site.siteMetadata.instagram && (
                <MultiLink
                  className="text-near-white"
                  href={data.site.siteMetadata.instagram}
                >
                  <FaInstagram />
                </MultiLink>
              )}
            </div>
          </div>
          <div className="flex flex-column font-sans-serif tracking-widest text-near-white">
            <span className="mb-6 block">
              WRITING BY {data.site.siteMetadata.siteTitle}
            </span>
            <MultiLink to="/blog">ALL POSTS</MultiLink>
            <MultiLink to="/rss.xml">RSS FEED</MultiLink>
          </div>
          <div className="flex flex-column font-sans-serif tracking-widest text-near-white">
            <span className="text-near-white font-sans-serif mb-6">
              MORE ON {data.site.siteMetadata.siteTitle}
            </span>
            <MultiLink to="/about">ABOUT US</MultiLink>
            <a href={data.site.siteMetadata.mailChimpUrl}>NEWSLETTER</a>
          </div>
        </div>
        <div className="center text-silver mb-6 font-sans-serif text-silver tracking-widest">
          <div className="w-full border-b border-mid-gray my-6"></div>
          <div className="flex flex-row items-center justify-center">
            <MultiLink href="/sitemap.xml">SITEMAP</MultiLink>
            <span className="mx-4">|</span>
            <MultiLink to="/privacy">PRIVACY</MultiLink>
            <span className="mx-4">|</span>
            <MultiLink href="https://github.com/madelyneriksen/gatsby-starter-tyra">
              THEME
            </MultiLink>
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
