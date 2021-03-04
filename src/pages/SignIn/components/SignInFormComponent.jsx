/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const SignInFormComponent = ({ signInRequest, authInfo }) => {
  const { signedIn } = authInfo;
  const history = useHistory();

  useEffect(() => {
    if (signedIn === true) {
      history.push('/');
    }
  }, [signedIn]);

  const fireSignInRequest = event => {
    signInRequest(event);
  };

  return (
    <div>
      <form onSubmit={event => fireSignInRequest(event)}>
        <div>
          <h1>Sign In</h1>

          <label htmlFor="email">
            Email
            <input id="email" type="text" required />
          </label>

          <label htmlFor="password">
            Password
            <input id="password" type="password" required />
          </label>

          <div>
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
