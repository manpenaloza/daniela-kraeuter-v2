import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { graphql, useStaticQuery } from "gatsby";

export default ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  const base = encodeURIComponent(data.site.siteMetadata.siteUrl);
  const path = encodeURIComponent(location);

  return (
    <div className="hidden md:block" style={{ gridArea: "sidebar" }}>
      <div
        className="w-16 bg-dark-gray flex flex-wrap"
        style={{ position: "sticky", top: "3.5rem" }}
      >
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${base + path}`}
          className="w-100 h-16 flex items-center justify-center font-bold text-near-white"
        >
          <FaFacebookF />
        </a>
        <a
          href={`mailto:?&body=${base + path}`}
          className="w-100 h-16 flex items-center justify-center font-bold text-near-white"
        >
          <FiMail />
        </a>
      </div>
    </div>
  );
};
