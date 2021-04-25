import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import tLogo from '../../assets/img/thrive-t-transparent.png';
import styles from './ProfileSettingsNavbar.module.scss';

const ProfileSettingsNavbar = ({ handleBackButtonClick }) => (
  <div className={styles.profileSettingsNavbarContainer}>
    <span className={styles.titleSpan}>
      <button type="button" onClick={handleBackButtonClick} onKeyUp={handleBackButtonClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h1>Settings</h1>
    </span>
    <span className={styles.imageSpan}>
      <img src={tLogo} alt="Thrive" />
    </span>
  </div>
);

ProfileSettingsNavbar.propTypes = {
  handleBackButtonClick: PropTypes.func.isRequired,
};

export default ProfileSettingsNavbar;
