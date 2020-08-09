import React from 'react';
import { graphql } from 'gatsby';
import useSiteMetadata from '../hooks/use-sitemetadata';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import styles from './blog.module.css';
import BookPreview from '../components/previews/BookPreview';

const Books = ({ location, data }) => {
  const { title, description } = useSiteMetadata();
  const books = data.allContentfulBook.edges;
  return (
    <Layout location={location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={title} description={description} />
        <div className={styles.hero}>Books</div>
        <div className="wrapper">
          <ul className="article-list">
            {books.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <BookPreview book={node} />
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
          description {
            childMarkdownRemark {
              html
            }
          }
          coverImage {
            fluid(maxWidth: 240, maxHeight: 320, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          yearOfPublication
          slug
          body {
            childMarkdownRemark {
              html
            }
          }
          whereToBuy
        }
      }
    }
  }
`;

export default Books;
