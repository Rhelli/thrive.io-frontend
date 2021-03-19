import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const EditPasswordConfirmationModal = ({ handlePasswordChange }) => (
  <div>
    <form onSubmit={event => handlePasswordChange(event)}>
      <div>
        <span>
          <FontAwesomeIcon icon={faTimesCircle} />
        </span>
        <div>
          <label htmlFor="currentPassword">
            <h3>Please Enter Your Current Password.</h3>
            <input type="password" id="currentPassword" />
          </label>
        </div>
        <div>
          <button type="submit">
            Change Password
          </button>
        </div>
      </div>
    </form>
  </div>
);

EditPasswordConfirmationModal.propTypes = {
  handlePasswordChange: PropTypes.func.isRequired,
};

export default EditPasswordConfirmationModal;
