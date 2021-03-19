import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import styles from './EditPasswordConfirmationModal.module.scss';

const EditPasswordConfirmationModal = ({
  handlePasswordChange, setPasswordConfirmModal, newPassword, newPasswordConfirm,
  email, id,
}) => {
  const [currentPassword, setCurrentPassword] = useState(null);
  const readCurrentPassword = event => setCurrentPassword(event.target.value);

  const newPasswordData = {
    currentPassword, newPassword, newPasswordConfirm, email, id,
  };

  return (
    <div className={styles.editPasswordModal}>
      <form
        onSubmit={event => handlePasswordChange(event, newPasswordData)}
        className={styles.editPasswordModalContent}
      >
        <div className={styles.modalInnerContent}>
          <button
            type="button"
            className={styles.modalClose}
            onClick={() => setPasswordConfirmModal(false)}
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
          <div
            className={styles.modalMessage}
            onChange={event => readCurrentPassword(event)}
          >
            <label htmlFor="currentPassword">
              <h3>Please Enter Your Current Password To Continue.</h3>
              <input type="password" id="currentPassword" />
            </label>
          </div>
          <div className={styles.modalConfirm}>
            <button type="submit">
              Change Password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

EditPasswordConfirmationModal.propTypes = {
  handlePasswordChange: PropTypes.func.isRequired,
  newPassword: PropTypes.string.isRequired,
  newPasswordConfirm: PropTypes.string.isRequired,
  setPasswordConfirmModal: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default EditPasswordConfirmationModal;
