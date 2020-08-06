import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './preview.module.css';

const PostPreview = ({ post }) => (
  <div className={styles.preview} data-test="tester">
    <Img alt="test" fluid={post.heroImage.fluid} />
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </h3>
    <small>{post.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: post.description.childMarkdownRemark.html,
      }}
    />
  </div>
);

export default PostPreview;
