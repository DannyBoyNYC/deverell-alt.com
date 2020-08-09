import React from 'react';
import Img from 'gatsby-image';

import styles from './hero.module.css';

export default ({ data }) => (
  <div className={styles.hero}>
    <Img
      className={styles.heroImage}
      alt={data.name}
      fluid={data.heroImage.fluid}
    />
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.name}</h3>
      <p className={styles.heroTitle}>{data.title}</p>
      <p>
        The official website of William Deverell, Winner of the Dashiell Hammett
        Award for Literary Excellence in North American Crime Writing (should
        come from site config)
      </p>
    </div>
  </div>
);
