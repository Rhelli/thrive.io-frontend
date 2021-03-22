import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faUsers, faHome } from '@fortawesome/free-solid-svg-icons';
import styles from './MobileNavbarLookingLinksComponent.module.scss';

const MobileNavbarLookingLinksComponent = () => (
  <div className={styles.mobileNavbarLookingLinksContainer}>
    <a href="/">
      <FontAwesomeIcon icon={faArrowCircleLeft} />
      <p>Home</p>
    </a>
    <a href="/looking">
      <FontAwesomeIcon icon={faUsers} />
      <p>Flatmates</p>
    </a>
    <a href="/advertising">
      <FontAwesomeIcon icon={faHome} />
      <p>Properties</p>
    </a>
  </div>
);

export default MobileNavbarLookingLinksComponent;
