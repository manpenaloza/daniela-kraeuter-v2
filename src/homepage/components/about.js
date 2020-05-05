import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';


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
      <div className="bg-violett flex flex-column justify-center items-center px-10 py-20 white">
        <p className="f4 serif mw7 tc lh-copy">{data.site.siteMetadata.homepageAbout} Kontaktieren Sie mich, wenn ich etwas für Sie tun kann.</p>
        <Link to="/about" className="mt3 db no-underline ph5 pv3 sans-serif near-white bg-dark-gray ttu tracked b hover-bg-mid-gray">Kontakt aufnehmen</Link>
      </div>
    )} />
)
