import React from 'react';
import PropTypes from 'prop-types';
import styles from './EditEmailFormComponent.module.scss';

const EditEmailFormComponent = ({
  userProfile, handleEmailUpdate,
}) => {
  const { email, id } = userProfile;

  return (
    <div className={styles.editEmailFormContainer}>
      <form onSubmit={event => handleEmailUpdate(event)}>
        <div className={styles.textInput}>
          <label htmlFor="email">
            <h3>Your Email Address</h3>
            <input id="email" type="email" defaultValue={email} />
          </label>
        </div>
        <input type="hidden" id="id" value={id} />
        <div className={styles.editEmailSubmitButton}>
          <button type="submit">
            Change Email
          </button>
        </div>
      </form>
    </div>
  );
};

EditEmailFormComponent.propTypes = {
  userProfile: PropTypes.shape({
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  handleEmailUpdate: PropTypes.func.isRequired,
};

export default EditEmailFormComponent;
