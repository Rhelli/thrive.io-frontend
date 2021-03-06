import React, { useState } from 'react';
import PropTypes from 'prop-types';
import formValidator from '../../../../utils/FormUtils';
import FormErrorComponent from '../../../../common/FormErrorComponent/FormErrorComponent';
import EditPasswordConfirmationModal from '../EditPasswordConfirmationModal/EditPasswordConfirmationModal';
import styles from './EditPasswordFormComponent.module.scss';

const EditPasswordFormComponent = ({ userProfile, handlePasswordChange, error }) => {
  const { email, id } = userProfile;
  const [passwordConfirmModal, setPasswordConfirmModal] = useState(false);
  const [newPassword, setNewPassword] = useState(null);
  const [newPasswordError, setNewPasswordError] = useState(null);
  const [newPasswordConfirm, setNewPasswordConfirm] = useState(null);
  const [newPasswordConfirmError, setNewPasswordConfirmError] = useState(null);

  const changePassword = event => setNewPassword(event.target.value);
  const changePasswordConfirm = event => setNewPasswordConfirm(event.target.value);

  const openPasswordConfirmationModal = () => {
    if (formValidator(newPassword, 'password')) {
      setNewPasswordError(formValidator(newPassword, 'password'));
      return;
    }
    setNewPasswordError(null);

    if (newPassword !== newPasswordConfirm) {
      setNewPasswordConfirmError('Passwords do not match. Please try again.');
      return;
    }
    setNewPasswordConfirmError(null);

    if (newPassword === newPasswordConfirm) {
      setPasswordConfirmModal(true);
    }
  };

  return (
    <div className={styles.editPasswordFormContainer}>
      <form>
        <FormErrorComponent errorMessage={error} />
        <div
          className={styles.textInput}
          onChange={event => changePassword(event)}
        >
          <label htmlFor="password">
            <h3>New Password</h3>
            <FormErrorComponent errorMessage={newPasswordError} />
            <input id="password" type="password" required />
          </label>
        </div>
        <div
          className={styles.textInput}
          onChange={event => changePasswordConfirm(event)}
        >
          <label htmlFor="passwordConfirm">
            <h3>Password Confirmation</h3>
            <FormErrorComponent errorMessage={newPasswordConfirmError} />
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
            error={error}
          />
        ) : (
          null
        )
      }
    </div>
  );
};

EditPasswordFormComponent.defaultProps = {
  error: '',
};

EditPasswordFormComponent.propTypes = {
  handlePasswordChange: PropTypes.func.isRequired,
  userProfile: PropTypes.shape({
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  error: PropTypes.string,
};

export default EditPasswordFormComponent;
