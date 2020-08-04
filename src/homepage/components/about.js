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
      <div className="bg-secondary flex flex-column justify-center items-center px-10 py-20 text-near-white leading-relaxed text-center">
        <p className="text-xl md:text-2xl lg:text-3xl max-w-screen-sm xl:max-w-screen-md font-sans-serif">
          {data.site.siteMetadata.homepageAbout} Sie haben Fragen zu meinen Workshops, Einzelbetreuungen oder sonstigem? Kontaktieren Sie mich!
        </p>
        <Button.PrimaryWithPageChange to="mailto:daniela.sohneg@gmail.com" classNames="mt-6 no-underline tracking-wider" colorClassName="bg-dark-gray">Daniela kontaktieren</Button.PrimaryWithPageChange>
      </div>
    )}
  />
);
