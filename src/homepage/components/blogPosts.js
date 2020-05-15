import React from "react";
import MultiLink from "gatsby-universal-link";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import Headline from "../../common/components/headline";

import Card from "../../homepage/components/card";

export default function BlogPosts() {
  const {
    allContentfulBlog: { edges: blogPostTeasers },
  } = useStaticQuery(graphql`
    query {
      allContentfulBlog(limit: 2) {
        edges {
          node {
            id
            title
            createdAt
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
            author {
              id
              name
              description
              avatarImage {
                fluid(maxWidth: 200) {
                  src
                  srcSet
                }
              }
            }
            slug
          }
        }
      }
    }
  `);
  console.log(blogPostTeasers);
  return (
    <section className="min-h-screen py-20 container">
      <Headline Type="h2" colorClassName="text-violett">
        Aktuelle Blog Beiträge
      </Headline>
      <p className="max-w-screen-sm">
        Alle meine Blog Beiträge findest du auf{" "}
        <MultiLink to="blog" className="underline">
          dieser Übersicht
        </MultiLink>
        . Hier erhältst du eine kurze Übersicht meiner aktuellsten Tipps und
        Tricks zu Kräutern und ätherische Ölen.
      </p>
      <div className="flex flex-column items-stretch justify-start max-w-screen-lg m-auto">
        {/* <Card
          title="Title"
          image="sdf"
          to="blog"
          description="Description text"
        /> */}
        {blogPostTeasers.map(({ node: blogPostTeaser }) => (
          <MultiLink to={blogPostTeaser.slug}>
            <div className="my-8 md:p-8 relative">
              <Img
                fluid={blogPostTeaser.introImage.fluid}
                // classNames="w-1/4 absolute"
                style={{
                  position: "absolute",
                  width: "30%",
                  zIndex: -1,
                  opacity: 0.3,
                }}
              />
              <div className=" p-8 lg:p-16">
                <h3 className="uppercase text-2xl md:text-3xl font-serif font-bold leading-normal text-mid-gray.">
                  {blogPostTeaser.title}
                </h3>
                <p className="max-w-screen-sm m-auto">
                  This is the teaser text This is the teaser text This is the
                  teaser text This is the teaser text
                </p>
              </div>
            </div>
          </MultiLink>
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
