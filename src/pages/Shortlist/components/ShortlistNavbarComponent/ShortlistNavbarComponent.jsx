import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './ShortlistNavbarComponent.module.scss';

const ShortlistNavbarComponent = () => (
  <div className={styles.shortlistComponentNavbar}>
    <h1>Shortlist</h1>
    <FontAwesomeIcon icon={faStar} />
  </div>
);

export default ShortlistNavbarComponent;
