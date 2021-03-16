import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import styles from './UserProfileHeaderComponent.module.scss';

const UserProfileHeaderComponent = () => {
  const history = useHistory();

  const handleSettingsClick = () => {
    history.push('/myaccount/settings');
  };

  return (
    <div className={styles.userProfileImageContainer}>
      <div className={styles.userProfileSettings}>
        <button type="button" onClick={handleSettingsClick} onKeyUp={handleSettingsClick}>
          <FontAwesomeIcon icon={faCog} />
        </button>
      </div>
      <div className={styles.userProfileImage}>
        <h2>IMAGE</h2>
      </div>
    </div>
  );
};

export default UserProfileHeaderComponent;
