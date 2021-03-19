/* eslint-disable no-undef */
import React, { useState } from 'react';
import EditPasswordConfirmationModal from './EditPasswordConfirmationModal';
import styles from './EditPasswordFormComponent.module.scss';

const EditPasswordFormComponent = () => {
  const [passwordConfirmModal, setPasswordConfirmModal] = useState(false);
  const [newPassword, setNewPassword] = useState(null);
  const [newPasswordConfirm, setNewPasswordConfirm] = useState(null);

  const changePassword = event => setNewPassword(event.target.value);
  const changePasswordConfirm = event => setNewPasswordConfirm(event.target.value);

  console.log(newPassword);
  console.log(newPasswordConfirm);

  // const handlePasswordChange = (event) => {
  //   let password = '';
  //   if (newPassword === newPasswordConfirm) {
  //     password = newPassword;
  //   } else {
  //     alert('Passwords do not match! Please try again');
  //   }
  // };

  return (
    <div className={styles.editPasswordFormContainer}>
      <form>
        <div
          className={styles.editPasswordRow}
          onChange={event => changePassword(event)}
        >
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
          <button type="submit" onClick={setPasswordConfirmModal(true)}>
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

export default EditPasswordFormComponent;
