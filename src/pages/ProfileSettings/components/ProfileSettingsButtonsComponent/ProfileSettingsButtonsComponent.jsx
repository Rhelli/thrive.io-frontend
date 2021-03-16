import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ProfileSettingsButtonsComponent = ({
  handleEditProfileClick, handleChangePasswordClick, handleChangeEmailClick, email,
}) => (
  <div>
    <div>
      <h3>Account Settings</h3>
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
        <span>
          <p>{email}</p>
        </span>
        <span>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </button>
    </div>
  </div>
);

ProfileSettingsButtonsComponent.propTypes = {
  handleEditProfileClick: PropTypes.func.isRequired,
  handleChangePasswordClick: PropTypes.func.isRequired,
  handleChangeEmailClick: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default ProfileSettingsButtonsComponent;
