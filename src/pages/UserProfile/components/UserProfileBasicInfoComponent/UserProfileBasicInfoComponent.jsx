import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserProfileBasicInfoComponent.module.scss';

const UserProfileBasicInfoComponent = ({ userProfile }) => {
  const { name, occupation, userType } = userProfile;

  return (
    <div className={styles.userProfileBasicContainer}>
      <div className={styles.userProfileName}>
        <h2>{name}</h2>
      </div>
      <div className={styles.userProfileOccupationType}>
        {
          occupation ? (
            <span>
              <p>{occupation}</p>
            </span>
          ) : (
            <span>
              <p>No Occupation Yet</p>
            </span>
          )
        }
        <span className={styles.userProfileBasicMidSpan}>
          <p>|</p>
        </span>
        <span>
          <p>{userType}</p>
        </span>
      </div>
    </div>
  );
};

UserProfileBasicInfoComponent.propTypes = {
  userProfile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    occupation: PropTypes.string,
    userType: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserProfileBasicInfoComponent;
