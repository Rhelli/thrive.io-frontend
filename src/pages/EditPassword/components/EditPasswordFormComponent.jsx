/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EditPasswordConfirmationModal from './EditPasswordConfirmationModal';
import styles from './EditPasswordFormComponent.module.scss';

const EditPasswordFormComponent = ({ userProfile, handlePasswordChange }) => {
  const { id } = userProfile;
  const [passwordConfirmModal, setPasswordConfirmModal] = useState(false);
  const [newPassword, setNewPassword] = useState(null);
  const [newPasswordConfirm, setNewPasswordConfirm] = useState(null);

  const changePassword = event => setNewPassword(event.target.value);
  const changePasswordConfirm = event => setNewPasswordConfirm(event.target.value);

  return (
    <div className={styles.editPasswordFormContainer}>
      <form onSubmit={event => handlePasswordChange(event)}>
        <div
          className={styles.editPasswordRow}
          onChange={event => changePassword(event)}
        >
          <input type="hidden" id="id" value={id} />
          <label htmlFor="password">
            <h3>New Password</h3>
            <input id="password" type="password" required />
          </label>
        </div>
        <div
          className={styles.editPasswordConfirmationRow}
          onChange={event => changePasswordConfirm(event)}
        >
          <label htmlFor="passwordConfirm">
            <h3>Password Confirmation</h3>
            <input id="passwordConfirm" type="password" required />
          </label>
        </div>
        <div className={styles.editPasswordSubmitButton}>
          <button type="submit">
            Change Password
          </button>
        </div>
      </form>
      {
        passwordConfirmModal ? (
          <EditPasswordConfirmationModal
            handlePasswordChange={handlePasswordChange}
            
          />
        ) : (
          null
        )
      }
    </div>
  );
};

EditPasswordFormComponent.propTypes = {
  handlePasswordChange: PropTypes.func.isRequired,
  userProfile: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default EditPasswordFormComponent;
