import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './preview.module.css';

const BookPreview = ({ book }) => (
  <div className={styles.preview}>
    <Img
      alt="test"
      fluid={book.coverImage.fixed}
      style={{ height: '200px', maxWidth: '240px' }}
    />
    <h3 className={styles.previewTitle}>
      <Link to={`/books/${book.slug}`}>{book.title}</Link>
    </h3>
    <p>Published: {book.yearOfPublication}</p>
    <div
      dangerouslySetInnerHTML={{
        __html: book.description.childMarkdownRemark.html,
      }}
    ></div>
    <p>
      <a href={book.purchasing} target="_blank" rel="noreferrer">
        Buy it
      </a>
    </p>
  </div>
);
export default BookPreview;
