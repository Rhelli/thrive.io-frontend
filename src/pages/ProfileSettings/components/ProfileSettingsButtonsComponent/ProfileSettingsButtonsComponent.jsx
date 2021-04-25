import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './ProfileSettingsButtonsComponent.module.scss';

const ProfileSettingsButtonsComponent = ({
  handleEditProfileClick, handleChangePasswordClick, handleChangeEmailClick, email,
}) => (
  <div className={styles.profileSettingsButtonsContainer}>
    <h2>Account Settings</h2>
    <button type="button" onClick={handleEditProfileClick} onKeyUp={handleEditProfileClick}>
      <span>
        <p>Edit Profile</p>
      </span>
      <span>
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
    </button>
    <button type="button" onClick={handleChangePasswordClick} onKeyUp={handleChangePasswordClick}>
      <span>
        <p>Change Password</p>
      </span>
      <span>
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
    </button>
    <button type="button" onClick={handleChangeEmailClick} onKeyUp={handleChangeEmailClick}>
      <span>
        <p>Change Email</p>
      </span>
      <span className={styles.emailPlaceholder}>
        <p>{email}</p>
      </span>
      <span>
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
    </button>
  </div>
);

ProfileSettingsButtonsComponent.propTypes = {
  handleEditProfileClick: PropTypes.func.isRequired,
  handleChangePasswordClick: PropTypes.func.isRequired,
  handleChangeEmailClick: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default ProfileSettingsButtonsComponent;
