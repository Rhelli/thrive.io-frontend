import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import FormErrorComponent from '../../../../common/FormErrorComponent/FormErrorComponent';
import styles from './SignInFormComponent.module.scss';

const SignInFormComponent = ({ signInRequest, authInfo }) => {
  const { signedIn, error } = authInfo;
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (signedIn === true) {
      history.push('/');
    }
    if (error && error !== 'Please log in.') {
      setErrorMessage(error);
    }
  }, [signedIn, error]);

  const fireSignInRequest = event => {
    signInRequest(event);
  };

  return (
    <div className={styles.signInFormContainer}>
      <form onSubmit={event => fireSignInRequest(event)}>
        <div className={styles.formContainer}>
          <h1>Sign In</h1>
          <FormErrorComponent errorMessage={errorMessage} />
          <div className={styles.textInput}>
            <label htmlFor="email">
              <h3>Email</h3>
              <input id="email" type="text" required />
            </label>
          </div>

          <div className={styles.textInput}>
            <label htmlFor="password">
              <h3>Password</h3>
              <input id="password" type="password" required />
            </label>
          </div>

          <div className={styles.formSubmitButton}>
            <button type="submit">Sign In</button>
          </div>
        </div>
      </form>
    </div>
  );
};

SignInFormComponent.propTypes = {
  signInRequest: PropTypes.func.isRequired,
  authInfo: PropTypes.shape({
    signedIn: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      userType: PropTypes.string,
      avatar: PropTypes.string,
      about: PropTypes.string,
      occupation: PropTypes.string,
      gender: PropTypes.string,
      couple: PropTypes.string,
      pets: PropTypes.arrayOf(PropTypes.string),
      smoking: PropTypes.bool,
      minBudget: PropTypes.number,
      maxBudget: PropTypes.number,
      areasLooking: PropTypes.arrayOf(PropTypes.string),
    }),
    error: PropTypes.string,
  }).isRequired,
};

export default SignInFormComponent;
