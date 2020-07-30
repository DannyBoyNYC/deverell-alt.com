import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './article-preview.module.css';

const BookPreview = ({ book }) => (
  <div className={styles.preview}>
    <li key={book.slug}>
      <Img
        fluid={book.coverImage.fixed}
        alt="wee"
        style={{ height: '200px', maxWidth: '240px' }}
      />
      {/* <h2>{book.title}</h2> */}
      <h3 className={styles.previewTitle}>
        <Link to={`/blog/${book.slug}`}>{book.title}</Link>
      </h3>
      <p>Published: {book.yearOfPublication}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: book.description.childMarkdownRemark.html,
        }}
      ></div>
      {/* <div
        dangerouslySetInnerHTML={{
          __html: book.body.childMarkdownRemark.html,
        }}
      ></div> */}
      <p>
        {/* <a href={book.purchasing} target="_blank" rel="noreferrer">
          Buy itw
        </a> */}
      </p>
    </li>
  </div>
);
export default BookPreview;
