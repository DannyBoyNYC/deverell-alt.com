import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata';
import Img from 'gatsby-image';
import Layout from '../components/layout';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const BookTemplate = ({ location, data }) => {
  const { title } = useSiteMetadata();
  const book = data.contentfulBook;

  return (
    <Layout location={location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={`${book.title} | ${title}`} />

        <div className="wrapper">
          <Img
            fluid={book.coverImage.fluid}
            alt="wow"
            style={{ height: '200px' }}
          />
          <h1 className="section-headline">{book.title}</h1>
          <p
            style={{
              display: 'block',
            }}
          >
            {book.yearOfPublication}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: book.body.childMarkdownRemark.html,
            }}
          />
          <h3>Where to buy</h3>
          {documentToReactComponents(book.purchasing.json)}
        </div>
      </div>
    </Layout>
  );
};

export default BookTemplate;

export const pageQuery = graphql`
  query BookBySlug($slug: String!) {
    contentfulBook(slug: { eq: $slug }) {
      id
      title
      yearOfPublication
      coverImage {
        fluid(maxWidth: 760) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      purchasing {
        json
      }
    }
  }
`;
