import React from 'react';
import PropTypes from 'prop-types';

const SignInFormComponent = ({ signInRequest }) => (
  <div>
    <form onSubmit={event => signInRequest(event)}>
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

SignInFormComponent.propTypes = {
  signInRequest: PropTypes.func.isRequired,
};

export default SignInFormComponent;
