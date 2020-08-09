import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './preview.module.css';

const BookPreview = ({ book }) => (
  <div className={styles.preview}>
    <Img alt="test" fluid={book.coverImage.fluid} />
    <h3 className={styles.previewTitle}>
      <Link to={`/books/${book.slug}`}>{book.title}</Link>
    </h3>
    <p>Published: {book.yearOfPublication}</p>
    <div
      dangerouslySetInnerHTML={{
        __html: book.description.childMarkdownRemark.html,
      }}
    ></div>
  </div>
);
export default BookPreview;
