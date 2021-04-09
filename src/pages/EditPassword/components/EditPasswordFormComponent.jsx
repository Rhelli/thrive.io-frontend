/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EditPasswordConfirmationModal from './EditPasswordConfirmationModal';
import styles from './EditPasswordFormComponent.module.scss';

const EditPasswordFormComponent = ({ userProfile, handlePasswordChange }) => {
  const { email, id } = userProfile;
  const [passwordConfirmModal, setPasswordConfirmModal] = useState(false);
  const [newPassword, setNewPassword] = useState(null);
  const [newPasswordConfirm, setNewPasswordConfirm] = useState(null);
  console.log(newPassword);
  console.log(newPasswordConfirm);

  const changePassword = event => setNewPassword(event.target.value);
  const changePasswordConfirm = event => setNewPasswordConfirm(event.target.value);

  const openPasswordConfirmationModal = () => {
    if (!newPassword || !newPasswordConfirm) {
      return;
    }
    if (newPassword === newPasswordConfirm) {
      setPasswordConfirmModal(true);
    }
    if (newPassword !== newPasswordConfirm) {
      setPasswordConfirmModal(false);
    }
  };

  return (
    <div className={styles.editPasswordFormContainer}>
      <form>
        <div
          className={styles.textInput}
          onChange={event => changePassword(event)}
        >
          <label htmlFor="password">
            <h3>New Password</h3>
            <input id="password" type="password" required />
          </label>
        </div>
        <div
          className={styles.textInput}
          onChange={event => changePasswordConfirm(event)}
        >
          <label htmlFor="passwordConfirm">
            <h3>Password Confirmation</h3>
            <input id="passwordConfirm" type="password" required />
          </label>
        </div>
        <div className={styles.editPasswordSubmitButton}>
          <button type="button" onClick={() => openPasswordConfirmationModal()}>
            Change Password
          </button>
        </div>
      </form>
      {
        passwordConfirmModal ? (
          <EditPasswordConfirmationModal
            className={styles.editPasswordConfirmModal}
            handlePasswordChange={handlePasswordChange}
            newPassword={newPassword}
            newPasswordConfirm={newPasswordConfirm}
            setPasswordConfirmModal={setPasswordConfirmModal}
            email={email}
            id={id}
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
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default EditPasswordFormComponent;
