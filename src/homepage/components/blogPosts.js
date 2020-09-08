import React from "react";
import MultiLink from "gatsby-universal-link";
import Fade from "react-reveal/Fade";
import { graphql, useStaticQuery } from "gatsby";
import BlogPostTeaser from "../../common/components/blogPostTeaser";
import Headline from "../../common/components/headline";

export default function BlogPosts() {
  const {
    allContentfulBlog: { edges: blogPostTeasers },
  } = useStaticQuery(graphql`
    query {
      allContentfulBlog(limit: 3, skip: 1) {
        edges {
          node {
            id
            title
            slug
            childContentfulBlogBodyRichTextNode {
              json
            }
            introImage {
              fluid(maxWidth: 200) {
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
        }
      }
    }
  `);

  const teaserTextSubstringLength = typeof window !== 'undefined' && window.innerWidth < 640 ? 180 : 280;

  return (
    <Fade bottom>
      <section className="min-h-screen py-20 container">
        <Headline
          Type="h2"
          colorClassname="text-primary"
        >
          Aktuelle Blog Beiträge
        </Headline>
        <p className="max-w-screen-md">
          Natürliches Lesefutter mit einer gehörigen Portion Wohlfühl- und
          Gesundheitsgedankengut für dich, deine liebsten oder deine
          Mitarbeiter. Laufend werden hier Artikel mit Tipps und
          Tricks zu den Themen Kräuter und ätherische Öle veröffentlicht.
        </p>
        <div className="max-w-screen-lg flex flex-column items-stretch justify-start m-auto">
          {blogPostTeasers.map(({ node: blogPostTeaser }) => (
            <Fade bottom key={blogPostTeaser.id}>
              <BlogPostTeaser
                data={blogPostTeaser}
                key={blogPostTeaser.id}
                teaserTextSubstringLength={teaserTextSubstringLength}
              />
            </Fade>
          ))}
        </div>
      </section>
    </Fade>
  );
}
