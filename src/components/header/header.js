import React from 'react';
import Navigation from '../navigation/navigation';
import { Link } from 'gatsby';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <header style={{ maxWidth: 1180, margin: '0 auto' }}>
        <h1>
          <Link to="/">William Deverell ~ Novelist</Link>
        </h1>
        <Navigation />
      </header>
    </div>
  );
};

export default Header;
