import React from 'react';
import PropTypes from 'prop-types';
import FormErrorComponent from '../../../../common/FormErrorComponent/FormErrorComponent';
import styles from './EditEmailFormComponent.module.scss';

const EditEmailFormComponent = ({
  userProfile, handleEmailUpdate, emailError, setEmail, setEmailError,
}) => {
  const { email, id } = userProfile;
  const changeEmail = email => {
    setEmailError(null);
    setEmail(email);
  };

  return (
    <div className={styles.editEmailFormContainer}>
      <form onSubmit={event => handleEmailUpdate(event)}>
        <div className={styles.textInput}>
          <label htmlFor="email">
            <h3>Your Email Address</h3>
            <FormErrorComponent errorMessage={emailError} />
            <input id="email" type="email" defaultValue={email} onChange={event => changeEmail(event.target.value)} />
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

EditEmailFormComponent.defaultProps = {
  emailError: '',
  setEmailError: null,
};

EditEmailFormComponent.propTypes = {
  userProfile: PropTypes.shape({
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  handleEmailUpdate: PropTypes.func.isRequired,
  emailError: PropTypes.string,
  setEmail: PropTypes.func.isRequired,
  setEmailError: PropTypes.func,
};

export default EditEmailFormComponent;
