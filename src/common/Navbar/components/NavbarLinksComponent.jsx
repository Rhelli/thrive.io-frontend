import React from 'react';
import styles from './NavbarLinksComponent.module.scss';

const NavbarLinksComponent = () => (
  <div className={styles.navbarLinksContainer}>
    <a href="/">Homepage</a>
    <a href="/looking">Flatmates</a>
    <a href="/advertising">Properties</a>
  </div>
);

export default NavbarLinksComponent;
