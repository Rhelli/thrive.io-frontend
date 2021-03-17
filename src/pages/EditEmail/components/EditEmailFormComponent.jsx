import React from 'react';
import PropTypes from 'prop-types';
import styles from './EditEmailFormComponent.module.scss';

const EditEmailFormComponent = ({ userProfile }) => {
  const { email } = userProfile;

  return (
    <div className={styles.editEmailFormContainer}>
      <form>
        <div className={styles.editEmailRow}>
          <label htmlFor="email">
            <h3>Your Email Address</h3>
            <input id="newEmail" type="email" placeholder={email} />
          </label>
        </div>
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
  }).isRequired,
};

export default EditEmailFormComponent;
