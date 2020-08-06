import React from 'react';
import { graphql } from 'gatsby';
// import useSiteMetadata from '../hooks/use-sitemetadata';
import Layout from '../components/layout';
import styles from './blog.module.css';
import BookPreview from '../components/previews/BookPreview';
// import Img from 'gatsby-image';

const Books = ({ location, data }) => {
  // const { title, description } = useSiteMetadata();
  const books = data.allContentfulBook.edges;
  // console.log(' ', books);
  return (
    <Layout location={location}>
      <div style={{ background: '#fff' }}>
        <div className={styles.hero}>Books</div>
        <div className="wrapper">
          {/* <h2 className="section-headline">Publications</h2> */}
          <ul className="article-list">
            {books.map(({ node }) => {
              return (
                <li key={node.slug}>
                  {/* <img
                    src={`${node.coverImage.file.url}?w=300`}
                    alt="testi"
                    style={{ maxWidth: '240px' }}
                  />
                  <Img
                    fluid={node.coverImage.fluid}
                    alt="wow"
                    style={{ height: '200px' }}
                  />
                  <Img
                    fluid={node.coverImage.fixed}
                    alt="wee"
                    style={{ height: '200px' }}
                  />*/}
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
            file {
              url
              fileName
              contentType
            }
            fluid {
              src
              srcSet
            }
            fixed {
              src
              srcSet
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
