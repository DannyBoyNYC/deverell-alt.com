import React from 'react';
import Navigation from '../navigation/navigation';

import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <header style={{ maxWidth: 1180, margin: '0 auto' }}>
        <h1>William Deverell ::: Novelist</h1>
        <Navigation />
      </header>
    </div>
  );
};

export default Header;
