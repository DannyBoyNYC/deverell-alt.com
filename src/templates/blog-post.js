import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata';
import Img from 'gatsby-image';
import Layout from '../components/layout';

import heroStyles from '../components/hero.module.css';

const BlogPostTemplate = ({ location, data }) => {
  const { title } = useSiteMetadata();
  const post = data.contentfulBlogPost;

  return (
    <Layout location={location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={`${post.title} | ${title}`} />
        <div className={heroStyles.hero}>
          <Img
            className={heroStyles.heroImage}
            alt={post.title}
            fluid={post.heroImage.fluid}
          />
        </div>
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          <p
            style={{
              display: 'block',
            }}
          >
            {post.publishDate}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
