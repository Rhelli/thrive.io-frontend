import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import styles from './UserProfileHeaderComponent.module.scss';

const UserProfileHeaderComponent = () => (
  <div className={styles.userProfileImageContainer}>
    <div className={styles.userProfileSettings}>
      <button type="button">
        <FontAwesomeIcon icon={faCog} />
      </button>
    </div>
    <div className={styles.userProfileImage}>
      <h2>IMAGE</h2>
    </div>
  </div>
);

export default UserProfileHeaderComponent;
