import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faUsers, faHome } from '@fortawesome/free-solid-svg-icons';
import styles from './MobileNavbarLinksComponent.module.scss';

const MobileNavbarLinksComponent = () => (
  <div className={styles.mobileNavbarLinksContainer}>
    <a href="/">
      <FontAwesomeIcon icon={faHome} />
      <p>Home</p>
    </a>
    <a href="/looking">
      <FontAwesomeIcon icon={faUsers} />
      <p>Flatmates</p>
    </a>
    <a href="/advertising">
      <FontAwesomeIcon icon={faList} />
      <p>Properties</p>
    </a>
  </div>
);

export default MobileNavbarLinksComponent;
