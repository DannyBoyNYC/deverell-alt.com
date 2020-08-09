import React from 'react';
import { graphql } from 'gatsby';
import useSiteMetadata from '../hooks/use-sitemetadata';
import { Helmet } from 'react-helmet';
import styles from './blog.module.css';
import Layout from '../components/layout';

import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Bio = ({ location, data }) => {
  const { title } = useSiteMetadata();

  const Bold = ({ children }) => <span className="bold">{children}</span>;
  const Text = ({ children }) => <p className="foobar">{children}</p>;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        return (
          <img
            style={{ float: 'left', maxWidth: 400, marginRight: 32 }}
            src={node.data.target.fields.file['en-US'].url}
            alt="William deverell"
          />
        );
      },
    },
  };

  return (
    <Layout location={location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={title} />
        <div className={styles.hero}>Biography</div>
        <div className="wrapper">
          {/* <h2 className="section-headline">Recent posts</h2> */}
          {documentToReactComponents(
            data.contentfulPerson.biography.json,
            options,
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Bio;

export const pageQuery = graphql`
  query BioQuery {
    contentfulPerson {
      name
      biography {
        json
      }
    }
  }
`;
