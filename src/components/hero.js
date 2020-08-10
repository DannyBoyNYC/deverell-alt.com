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
      The official website of William Deverell, Winner of the Dashiell Hammett
      Award for Literary Excellence in North American Crime Writing
    </div>
  </div>
);
