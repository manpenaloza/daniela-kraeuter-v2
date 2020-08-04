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
      allContentfulBlog(limit: 2, skip: 1) {
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

  const teaserTextSubstringLength = window.innerWidth < 640 ? 180 : 280;

  return (
    <Fade bottom>
      <section className="min-h-screen py-20 container">
        <Headline Type="h2" colorClassname="text-primary" fontStylesClassname="font-handwritten">
          Aktuelle Blog Beiträge
        </Headline>
        <p className="max-w-screen-sm">
          Laufend erstelle ich für dich Artikel mit Tipps und Tricks zum Thema
          Kräuter und ätherische Öle. Alle Beiträge gibt's gesammelt in{" "}
          <MultiLink to="blog" className="underline">
            meinem Blog.
          </MultiLink>
        </p>
        <div className="max-w-screen-lg flex flex-column items-stretch justify-start m-auto">
          {blogPostTeasers.map(({ node: blogPostTeaser }) => (
            <Fade bottom>
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
