/* eslint-disable no-unused-vars */
import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const SignInFormComponent = ({ signInRequest, authStatus }) => {
  const { signedIn } = authStatus;

  const history = useHistory();

  const fireSignInRequest = event => {
    signInRequest(event);
    console.log(signedIn);
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
  authStatus: PropTypes.objectOf([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
};

export default SignInFormComponent;
