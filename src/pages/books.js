import React from 'react';
import { graphql } from 'gatsby';
import useSiteMetadata from '../hooks/use-sitemetadata';
import Layout from '../components/layout';
import styles from './blog.module.css';

// import { BLOCKS, MARKS } from '@contentful/rich-text-types';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// const Bold = ({ children }) => <span className="bold">{children}</span>;
// const Text = ({ children }) => <p className="align-center">{children}</p>;

// const options = {
//   renderMark: {
//     [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
//   },
//   renderNode: {
//     [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
//   },
// };

const Books = ({ location, data }) => {
  const { title, description } = useSiteMetadata();
  const books = data.allContentfulBook.edges;
  console.log(' ', books);
  return (
    <Layout location={location}>
      <div style={{ background: '#fff' }}>
        <div className={styles.hero}>Books</div>
        <div className="wrapper">
          <h2 className="section-headline">Publications</h2>
          <ul className="article-list">
            {books.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <h2>{node.title}</h2>
                  <img
                    src={node.coverImage.file.url}
                    alt="testi"
                    style={{ maxWidth: '240px' }}
                  />
                  <p>Published: {node.yearOfPublication}</p>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: node.body.childMarkdownRemark.html,
                    }}
                  ></div>
                  <p>
                    <a href={node.purchasing} target="_blank">
                      Buy it
                    </a>
                  </p>
                  {/* <ArticlePreview article={node} /> */}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query AllBooks {
    allContentfulBook {
      edges {
        node {
          title
          coverImage {
            file {
              url
              fileName
              contentType
            }
          }
          yearOfPublication
          slug
          body {
            childMarkdownRemark {
              html
            }
          }
          purchasing
        }
      }
    }
  }
`;

export default Books;
