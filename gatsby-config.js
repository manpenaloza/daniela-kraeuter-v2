require('dotenv').config();

module.exports = {
  siteMetadata: {
    navbarLinks: [
      { scrollToId: "me", name: "Über mich" },
      { scrollToId: "education", name: "Ausbildung" },
      { scrollToId: "blogPostMainTeaser", name: "Blog" },
    ],
    title: "Daniela Sohneg",
    description:
      "🌿 Aromapraktikerin & Kräuterpädagogin aus Kirchbach in der Steiermark. ✨ Aromafachberatungen, Wissen rund um ätherische Öle,  Kräuterwanderungen in der Südoststeiermark/Weiz/Feldbach/Leibnitz und Umgebung sowie Workshops zur Herstellung von Tinkturen, Naturkosmetik und anderen Kräuterprodukten.",
    siteUrl: "https://daniela-sohneg.at",
    homepageHeader: "Hallo! Mein Name ist Daniela Sohneg.",
    homepageAbout:
      "Aus privaten Vorlieben entstehen bekanntlich die leidenschaftlichsten Berufungen. Ich bin Diplomierte Kräuterpädagogin und Aromapraktikerin aus Kirchbach in der Steiermark.",
    mailChimpUrl: "https://mailchimp.com",
    mailChimpToken: "MAILCHIMP TOKEN HERE",
    instagram: "https://www.instagram.com/danielasohneg/",
    facebook: "https://www.facebook.com/daniela.sohneg",
    youtube: "", // YOUR YOUTUBE PROFILE HERE
    github: "", // YOUR GITHUB PROFILE HERE
    pinterest: "", // YOUR PINTEREST PROFILE HERE
    twitter: "", // YOUR TWITTER PROFILE HERE
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: {frontmatter: {type: {eq: "post"}}}
              ) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      slug
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
            title: "Gatsby RSS Feed",
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
        name: "content",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1400,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Playfair Display", "Source Sans Pro"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-149375695-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/success"],
        cookieDomain: "daniela-sohneg.at",
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/impressum/`],
      },
    }
  ],
};
