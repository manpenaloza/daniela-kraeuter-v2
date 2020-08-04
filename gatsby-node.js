const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allBlogPosts: allContentfulBlog {
              edges {
                node {
                  id
                  slug
                }
              }
            }
            allPosts: allMarkdownRemark(
              filter: { frontmatter: { type: { eq: "post" } } }
              sort: { fields: frontmatter___date, order: DESC }
            ) {
              edges {
                node {
                  frontmatter {
                    slug
                  }
                }
              }
              group(field: frontmatter___category) {
                fieldValue
                edges {
                  node {
                    frontmatter {
                      slug
                    }
                  }
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        // const allPosts = result.data.allPosts.edges;

        // next line: new code - don't delete
        const allBlogPosts = result.data.allBlogPosts.edges;

        // const groupedPosts = result.data.allPosts.group;
        const paginationTemplate = path.resolve("src/blog/index.js");
        const postsPerPage = 5;
        let numPages = Math.ceil(allBlogPosts.length / postsPerPage);

        // Creating the main blog index
        // code locig secures it's as many 
        // loop iterations as numPages for blog overview pages exist
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? "/blog" : `/blog/${i + 1}`,
            component: paginationTemplate,
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              nextPage: `/blog/${i + 2}`,
              pageNumber: i + 1,
            },
          });
        });

        // CATEGORY PAGES NOT NEEDED - Creating all category pages.
        // let category;
        // let categoryPosts;
        // const categoryTemplate = path.resolve("src/blog/category.js");
        // groupedPosts.forEach((group, _) => {
        //   category = group.fieldValue;
        //   categoryPosts = group.edges;
        //   numPages = Math.ceil(categoryPosts.length / postsPerPage);
        //   Array.from({ length: numPages }).forEach((_, i) => {
        //     createPage({
        //       path: i === 0 ? `/${category}` : `/${category}/${i + 1}`,
        //       component: categoryTemplate,
        //       context: {
        //         limit: postsPerPage,
        //         skip: i * postsPerPage,
        //         nextPage: `/${category}/${i + 2}`,
        //         pageNumber: i + 1,
        //         category: category,
        //       },
        //     });
        //   });
        // });

        // nexb block - new code: don't delete
        const blogPostTemplate = path.resolve("src/blog/blogPostTemplate.js");
        allBlogPosts.forEach(({ node }) => {
          createPage({
            path: node.slug,
            component: blogPostTemplate,
            context: {
              id: node.id,
            },
          });
        });
      })
    );
  });
};
