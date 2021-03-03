/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './SignInOutComponent.module.scss';

const SignInOutComponent = ({ authInfo }) => {
  const { signedIn, user } = authInfo;

  return (
    <div className={styles.signInOutContainer}>
      {
        signedIn ? (
          <div>
            <a href="/profile">{user.name}</a>
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
};

SignInOutComponent.propTypes = {
  authInfo: PropTypes.shape({
    signedIn: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number,
      email: PropTypes.string,
      name: PropTypes.string,
      user_type: PropTypes.string,
    }),
    error: PropTypes.string.isRequired,
  }).isRequired,
};

export default SignInOutComponent;
