import React from "react";
import MultiLink from "gatsby-universal-link";
import Img from "gatsby-image";
import Button from "./button";
import { Section } from "react-scroll-section";

export default function BlogPostTeaser({ data, teaserTextSubstringLength }) {
  return (
    <article className="my-10 lg:my-16">
      <div className="p-8 lg:p-16 relative">
        <MultiLink to={data.slug}>
          <h3
            className="uppercase text-primary text-xl md:text-3xl lg:text-4xl font-sans-serif font-bold leading-normal text-gray"
            style={{
              textShadow:
                "1px 1px 0 #f4f4f4, 1px -1px 0 #f4f4f4, -1px 1px 0 #f4f4f4, -1px -1px 0 #f4f4f4, 1px 1px 0 #f4f4f4, 0px 1px 0 #f4f4f4, -1px 0px 0 #f4f4f4, 0px -1px 0 #f4f4f4, 1px 1px 0px #f4f4f4",
            }}
          >
            {data.title}
            <span className="text-primary">.</span>
          </h3>
        </MultiLink>
        <p className="max-w-screen-sm m-auto text-lg text-gray bg-near-white px-2 mt-12 border-l-4 border-primary">
          {/* upcoming teaser fetcher is ugly to the max... urgently fix this by restructuring/extending its contentful implementation */}
          {data?.childContentfulBlogBodyRichTextNode?.json?.content[0]?.content[0]?.value.substring(
            0,
            teaserTextSubstringLength
          )}
          ...
        </p>
        <Img
          fluid={data.introImage.fluid}
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
        <Button.PrimaryWithPageChange to={data.slug}>
          weiterlesen
        </Button.PrimaryWithPageChange>
      </div>
    </article>
  );
}
