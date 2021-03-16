/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { faChevronLeft, faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons';

const ProfileSettingsContainer = ({ userProfile }) => {
  const { email } = userProfile;
  const history = useHistory();

  console.log(userProfile);

  const handleEditProfileClick = () => history.push('/myaccount/settings/edit-profile');
  const handleChangePasswordClick = () => history.push('/myaccount/settings/edit-password');
  const handleChangeEmailClick = () => history.push('/myaccount/settings/edit-email');
  const handleBackButtonClick = () => history.push('/myaccount');

  return (
    <div>
      <div>
        <div>
          <button type="button" onClick={handleBackButtonClick} onKeyUp={handleBackButtonClick}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>
        <div>
          <h2>Settings</h2>
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
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
    </div>
  );
};

const mapStateToProps = state => ({
  userProfile: state.profileStore,
});

export default connect(mapStateToProps, null)(ProfileSettingsContainer);
