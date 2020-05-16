import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

export default (props) => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAbout(id: { eq: "396fbdb2-8bf0-578c-9dca-0ff8d0af232c" }) {
        description
      }
      site {
        siteMetadata {
          siteTitle: title
          siteUrl
        }
      }
    }
  `);
  return (
    <Helmet>
      <script type="application/ld+json">{`
        {
          "@context": "http://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${data.site.siteMetadata.siteUrl}${props.slug}"
            },
            "headline": "${props.title}",
            "image": ["${data.site.siteMetadata.siteUrl}${props.image}"],
            "datePublished": "${props.date}",
            "dateModified": "${props.date}",
            "author": {
              "@type": "Person",
              "name": "${props.author}"
            },
            "publisher": {
              "@type": "Organization",
              "name": "${data.site.siteMetadata.siteTitle}",
              "logo": {
                "@type": "ImageObject",
                "url": "${data.site.siteMetadata.siteUrl}/logo.png"
              }
            },
            "description": "${data.contentfulAbout.description}"
        }
      `}</script>
    </Helmet>
  );
};
