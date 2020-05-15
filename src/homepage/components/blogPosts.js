import React from "react";
import MultiLink from "gatsby-universal-link";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import Headline from "../../common/components/headline";
import Button from "../../common/components/button";

import Card from "../../homepage/components/card";

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
  
  const teaserTextSubstringLength = window.innerWidth < 640 ? 180 :  280;

  return (
    <section className="min-h-screen py-20 container">
      <Headline Type="h2" colorClassName="text-violett">
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
        {/* <Card
          title="Title"
          image="sdf"
          to="blog"
          description="Description text"
        /> */}
        {blogPostTeasers.map(({ node: blogPostTeaser }) => (
          <article className="mt-8 mb-16" key={blogPostTeaser.id}>
            <div className="p-8 lg:p-16 relative">
              <MultiLink to={blogPostTeaser.slug}>
              <h3
                className="uppercase text-violett text-xl md:text-3xl lg:text-4xl font-serif font-bold leading-normal text-mid-gray."
                style={{
                  textShadow:
                    "1px 1px 0 #f4f4f4, 1px -1px 0 #f4f4f4, -1px 1px 0 #f4f4f4, -1px -1px 0 #f4f4f4, 1px 1px 0 #f4f4f4, 0px 1px 0 #f4f4f4, -1px 0px 0 #f4f4f4, 0px -1px 0 #f4f4f4, 1px 1px 0px #f4f4f4",
                }}
              >
                {blogPostTeaser.title}<span className="text-green">.</span>
              </h3>
              </MultiLink>
              <p
                className="max-w-screen-sm m-auto text-lg text-mid-gray bg-near-white px-2 mt-12 border-l-4 border-green"
              >
                {/* upcoming teaser fetcher is ugly to the max... urgently fix this by restructuring/extending its contentful implementation */}
                {blogPostTeaser?.childContentfulBlogBodyRichTextNode?.json?.content[0]?.content[0]?.value.substring(0, teaserTextSubstringLength)}...
              </p>
              <Img
                fluid={blogPostTeaser.introImage.fluid}
                className="w-1/3 lg:w-1/4 h-full top-0 left-0 with-blog-post-teaser-overlay"
                object-fit="cover"
                object-position="50% 50%"
                imgStyle={{
                  filter: "contrast(150%)",
                }}
                style={{
                  position: "absolute",
                  zIndex: -1,
                  borderTopLeftRadius: "2rem",
                  borderBottomRightRadius: "2rem",
                }}
              />
            </div>
            <div className="max-w-screen-sm m-auto mt-8">
              <Button.PrimaryWithPageChange to={blogPostTeaser.slug}>
                weiterlesen
              </Button.PrimaryWithPageChange>
            </div>
          </article>
        ))}
        {/* {data.cards.edges.map(({ node }) => (
        <Card
          title={node.frontmatter.title}
          image={node.frontmatter.postImage.childImageSharp.fluid}
          to={node.frontmatter.slug}
          description={node.frontmatter.description}
        />
      ))} */}
      </div>
    </section>
  );
}
