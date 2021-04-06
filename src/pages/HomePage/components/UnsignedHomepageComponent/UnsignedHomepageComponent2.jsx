import React from 'react';
import thriveLogo from '../../../../assets/img/thrive-full-transparent.png';
import findFriends from '../../../../assets/img/find-friends-transparent.png';
import findHouses from '../../../../assets/img/houses-transparent.png';
import manageHouses from '../../../../assets/img/management-transparent.png';
import styles from './UnsignedHomepageComponent.module.scss';

const UnsignedHomepageComponent = () => (
  <div className={styles.unsignedHomepageContainer}>
    <div className={styles.brandingLogo}>
      <img alt="thrive" src={thriveLogo} />
      <h2>Create, browse and join new households and flatshares across the country.</h2>
    </div>
    <div className={styles.adSection}>
      <div className={styles.adSectionRow}>
        <span className={styles.imageSpan}>
          <img src={findFriends} alt="Find Flatmates" />
        </span>
        <span className={styles.infoSpan}>
          <h3>Find Flatmates For Your House</h3>
        </span>
      </div>
      <div className={styles.adSectionRow}>
        <span className={styles.infoSpan}>
          <h3>Find Houses To Move Into</h3>
        </span>
        <span className={styles.imageSpan}>
          <img alt="Find Properties" src={findHouses} />
        </span>
      </div>
      <div className={styles.adSectionRow}>
        <span className={styles.imageSpan}>
          <img alt="Create and Manage Your Properties" src={manageHouses} />
        </span>
        <span className={styles.infoSpan}>
          <h3>Create and Manage Your Housesholds</h3>
        </span>
      </div>
    </div>
  </div>
);

export default UnsignedHomepageComponent;
