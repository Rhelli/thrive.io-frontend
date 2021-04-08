import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import tLogo from '../../../../assets/img/thrive-t-transparent.png';
import styles from './ShortlistNavbarComponent.module.scss';

const ShortlistNavbarComponent = () => (
  <div className={styles.shortlistComponentNavbar}>
    <span className={styles.titleSpan}>
      <h1>Shortlist</h1>
      <FontAwesomeIcon icon={faStar} />
    </span>
    <span className={styles.imageSpan}>
      <img src={tLogo} alt="Thrive" />
    </span>
  </div>
);

export default ShortlistNavbarComponent;
