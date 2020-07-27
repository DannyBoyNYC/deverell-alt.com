import React from 'react';
import { graphql } from 'gatsby';
import useSiteMetadata from '../hooks/use-sitemetadata';
import { Helmet } from 'react-helmet';
import styles from './blog.module.css';
import Layout from '../components/layout';
import ArticlePreview from '../components/article-preview';

const BlogIndex = ({ location, data }) => {
  const { title } = useSiteMetadata();
  const posts = data.allContentfulBlogPost.edges;

  return (
    <Layout location={location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={title} />
        <div className={styles.hero}>Blog</div>
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
