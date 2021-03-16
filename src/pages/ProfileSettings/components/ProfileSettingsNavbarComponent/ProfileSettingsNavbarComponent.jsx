import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faChevronLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './ProfileSettingsNavbarComponent.module.scss';

const ProfileSettingsNavbarComponent = ({ handleBackButtonClick }) => (
  <div className={styles.profileSettingsNavbarContainer}>
    <div className={styles.profileSettingsNavbarBackButton}>
      <button type="button" onClick={handleBackButtonClick} onKeyUp={handleBackButtonClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    </div>
    <div className={styles.profileSettingsNavbarTitle}>
      <h2>Settings</h2>
    </div>
    <div className={styles.profileSettingsNavbarUser}>
      <div>
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  </div>
);

ProfileSettingsNavbarComponent.propTypes = {
  handleBackButtonClick: PropTypes.func.isRequired,
};

export default ProfileSettingsNavbarComponent;
