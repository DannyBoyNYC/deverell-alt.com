const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js');
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `,
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allContentfulBlogPost.edges;
        posts.forEach((post) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          });
        });
      }),
    );
    // book page rendering
    const bookPost = path.resolve('./src/templates/book.js');
    resolve(
      graphql(
        `
          {
            allContentfulBook {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `,
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const books = result.data.allContentfulBook.edges;
        books.forEach((book) => {
          createPage({
            path: `/book/${book.node.slug}/`,
            component: bookPost,
            context: {
              slug: book.node.slug,
            },
          });
        });
      }),
    );
  });
};
