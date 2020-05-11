import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Button from '../../common/components/button';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            homepageHeader
            homepageAbout
          }
        }
      }
    `}
    render={(data) => (
      <div className="bg-violett flex flex-column justify-center items-center px-10 py-20 text-near-white leading-relaxed text-center">
        <p className="text-xl md:text-2xl lg:text-3xl font-serif max-w-screen-sm xl:max-w-screen-md">
          {data.site.siteMetadata.homepageAbout} Sie haben Fragen zu meinen Workshops, Einzelbetreuungen oder sonstigem? Kontaktieren Sie mich!
        </p>
        <Button.PrimaryWithPageChange to="/about" classNames="mt-6 no-underline tracking-widest" colorClassName="bg-dark-gray">Daniela kontaktieren</Button.PrimaryWithPageChange>
      </div>
    )}
  />
);
