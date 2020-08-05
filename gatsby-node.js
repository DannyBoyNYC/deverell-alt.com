const Promise = require('bluebird');
const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const BlogPostTemplate = path.resolve('./src/templates/blog-post.js');
  const BookPostTemplate = path.resolve('./src/templates/book.js');

  const result = await graphql(
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
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = result.data.allContentfulBlogPost.edges;
  const books = result.data.allContentfulBook.edges;

  posts.forEach((post) => {
    createPage({
      path: `/blog/${post.node.slug}`,
      component: BlogPostTemplate,
      context: {
        slug: post.node.slug,
      },
    });
  });

  books.forEach((book) => {
    createPage({
      path: `/books/${book.node.slug}`,
      component: BookPostTemplate,
      context: {
        slug: book.node.slug,
      },
    });
  });
};

// book page rendering
// const books = graphql(
//   `
//     {
//       allContentfulBook {
//         edges {
//           node {
//             title
//             slug
//           }
//         }
//       }
//     }
//   `,
// ).then((result) => {
//   if (result.errors) {
//     console.log(result.errors);
//     Promise.reject(result.errors);
//   }

//   result.data.allContentfulBook.edges.forEach((node) => {
//     createPage({
//       path: `/book/${node.slug}/`,
//       component: bookPost,
//       context: {
//         slug: node.slug,
//       },
//     });
//   });
// });
// return Promise.all([posts, books]);
