import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
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
          <>
            <a href="/myaccount">
              <FontAwesomeIcon icon={faUserCircle} />
              <p>{user.name}</p>
            </a>
            <button type="button" onClick={logUserOut}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              <p>Sign Out</p>
            </button>
          </>
        ) : (
          <>
            <a href="/signin">Sign In</a>
            <a href="/signup">Create An Account</a>
          </>
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
