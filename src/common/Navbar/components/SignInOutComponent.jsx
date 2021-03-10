/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './SignInOutComponent.module.scss';

const SignInOutComponent = ({ authInfo, signOut }) => {
  const { signedIn, user } = authInfo;

  const logUserOut = () => {
    signOut();
  };

  return (
    <div className={styles.signInOutContainer}>
      {
        signedIn === true ? (
          <div>
            <a href="/myaccount">{user.name}</a>
            <a href="" onClick={logUserOut}>Sign Out</a>
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
  signOut: PropTypes.func.isRequired,
};

export default SignInOutComponent;
