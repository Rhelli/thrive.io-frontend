import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './UserProfileHeaderComponent.module.scss';

const UserProfileHeaderComponent = ({ handleSignOut, handleSettingsClick }) => (
  <div className={styles.userProfileImageContainer}>
    <div className={styles.userProfileSignOut}>
      <button type="button" onClick={handleSignOut}>
        <FontAwesomeIcon icon={faSignOutAlt} />
        <p>Sign Out</p>
      </button>
    </div>
    <div className={styles.userProfileSettings}>
      <button type="button" onClick={handleSettingsClick} onKeyUp={handleSettingsClick}>
        <p>Settings</p>
        <FontAwesomeIcon icon={faCog} />
      </button>
    </div>
    <div className={styles.userProfileImage}>
      <h2>IMAGE</h2>
    </div>
  </div>
);

UserProfileHeaderComponent.propTypes = {
  handleSignOut: PropTypes.func.isRequired,
  handleSettingsClick: PropTypes.func.isRequired,
};

export default UserProfileHeaderComponent;
