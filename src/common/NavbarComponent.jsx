import React from 'react';
import styles from './NavbarComponent.module.scss';

const NavbarComponent = () => (
  <div className={styles.navbarContainer}>
    <a href="/">Homepage</a>
    <a href="/signup">Sign Up</a>
    <a href="/signin">Sign In</a>
    <a href="/looking">Flatmates</a>
    <a href="/profile">My Profile</a>
    <a href="/settings">Profile Settings</a>
    <a href="/advertising">Properties</a>
    <a href="/property">Property Profile</a>
    <a href="/personality-assessment">Personality Assessment</a>
  </div>
);

export default NavbarComponent;
