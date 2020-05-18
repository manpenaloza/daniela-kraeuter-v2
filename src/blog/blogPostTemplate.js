import React from "react";
import { graphql } from "gatsby";
import BlogPost from "./blogPost";

export default (props) => <BlogPost {...props} />;

export const query = graphql`
  query($id: String!) {
    post: contentfulBlog(id: { eq: $id }) {
      id
      title
      updatedAt
      author {
        name
      }
      introImage {
        fluid(maxWidth: 1000) {
          src
        }
      }
      body {
        json
      }
    }
  }
`;
