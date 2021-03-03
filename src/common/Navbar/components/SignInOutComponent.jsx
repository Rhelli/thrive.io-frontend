/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './SignInOutComponent.module.scss';

const SignInOutComponent = ({ signedIn }) => (
  <div className={styles.signInOutContainer}>
    {
      signedIn ? (
        <div>
          <a href="/profile">My Profile</a>
          <a href="">Sign Out</a>
        </div>
      ) : (
        <div>
          <a href="/signin">Sign In</a>
          <a href="/signup">Create An Account</a>
        </div>
      )
    }
  </div>
);

SignInOutComponent.propTypes = {
  signedIn: PropTypes.bool.isRequired,
};

export default SignInOutComponent;
