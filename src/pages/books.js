import React from 'react';
import { graphql } from 'gatsby';
import useSiteMetadata from '../hooks/use-sitemetadata';
import Layout from '../components/layout';
import styles from './blog.module.css';

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
                  <p>{node.yearOfPublication}</p>
                  <p>{node.body.body}</p>
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
          yearOfPublication
          slug
          body {
            body
          }
        }
      }
    }
  }
`;

export default Books;
