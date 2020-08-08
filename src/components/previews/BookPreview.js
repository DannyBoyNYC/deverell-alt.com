import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './preview.module.css';

const BookPreview = ({ book }) => (
  <div className={styles.preview}>
    <Img
      alt="test"
      fluid={book.coverImage.fluid}
      style={{ height: '320px', maxWidth: '240px' }}
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
    <ul>
      <li>
        <a href={book.whereToBuy} target="_blank" rel="noreferrer">
          Buy it
        </a>
      </li>
    </ul>
  </div>
);
export default BookPreview;
