import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle, faSignInAlt, faUserPlus, faLayerGroup, faStar,
} from '@fortawesome/free-solid-svg-icons';
import styles from './SignInOutComponent.module.scss';

const SignInOutComponent = ({ authInfo }) => {
  const { signedIn, user } = authInfo;
  const { userType } = authInfo.user;

  return (
    <div className={styles.signInOutContainer}>
      {
        signedIn === true ? (
          userType === 'Looking' ? (
            <>
              <button type="button">
                <FontAwesomeIcon icon={faStar} />
                <p>Shortlist</p>
              </button>
              <a href="/myaccount">
                <FontAwesomeIcon icon={faUserCircle} />
                <p>{user.name}</p>
              </a>
            </>
          ) : (
            <>
              <a className={styles.managePropertiesButton} href="/myproperties">
                <FontAwesomeIcon icon={faLayerGroup} />
                <p>Manage Properties</p>
              </a>
              <a href="/myaccount">
                <FontAwesomeIcon icon={faUserCircle} />
                <p className={styles.userName}>{user.name}</p>
              </a>
            </>
          )
        ) : (
          <>
            <a href="/signin">
              <FontAwesomeIcon icon={faSignInAlt} />
              <p>Sign In</p>
            </a>
            <a href="/signup">
              <FontAwesomeIcon icon={faUserPlus} />
              <p>New Account</p>
            </a>
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
      userType: PropTypes.string,
    }),
    error: PropTypes.string.isRequired,
  }).isRequired,
};

export default SignInOutComponent;
