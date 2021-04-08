import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle, faSignInAlt, faUserPlus, faLayerGroup, faStar, faHouseUser,
} from '@fortawesome/free-solid-svg-icons';
import styles from './SignInOutComponent.module.scss';

const SignInOutComponent = ({ authInfo }) => {
  const { signedIn, user } = authInfo;
  const { userType } = authInfo.user;
  const { advertiserType } = authInfo.user;

  return (
    <div className={styles.signInOutContainer}>
      {
        signedIn === true ? (
          userType === 'Advertising' && advertiserType === 'Landlord' ? (
            <>
              <a className={styles.managePropertiesButton} href="/manage-properties">
                <FontAwesomeIcon icon={faLayerGroup} />
                <p>Manage Properties</p>
              </a>
              <a className={styles.accountNav} href="/myaccount">
                <FontAwesomeIcon icon={faUserCircle} />
                <p className={styles.userName}>{user.name}</p>
              </a>
            </>
          ) : userType === 'Advertising' && advertiserType === 'Flatmate' ? (
            <>
              <a className={styles.managePropertiesButton} href="/manage-properties">
                <FontAwesomeIcon icon={faHouseUser} />
                <p>Manage House</p>
              </a>
              <a className={styles.accountNav} href="/myaccount">
                <FontAwesomeIcon icon={faUserCircle} />
                <p className={styles.userName}>{user.name}</p>
              </a>
            </>
          ) : (
            <>
              <a className={styles.shortlistNav} href="/shortlist">
                <FontAwesomeIcon icon={faStar} />
                <p>Shortlist</p>
              </a>
              <a className={styles.accountNav} href="/myaccount">
                <FontAwesomeIcon icon={faUserCircle} />
                <p>{user.name}</p>
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
      advertiserType: PropTypes.string,
    }),
    error: PropTypes.string.isRequired,
  }).isRequired,
};

export default SignInOutComponent;
