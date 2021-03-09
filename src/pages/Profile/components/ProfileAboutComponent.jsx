import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProfileAboutComponent.module.scss';

const ProfileAboutComponent = ({
  name, userType, occupation, about,
}) => (
  <div className={styles.profileAboutContainer}>
    <div className={styles.profileAboutMainInfo}>
      <h2>{name}</h2>
      {
        occupation ? (
          <div className={styles.profileWithOccupation}>
            <h4>{userType}</h4>
            <h4>{occupation}</h4>
          </div>
        ) : (
          <div className={styles.profileWithoutOccupation}>
            <h4>{userType}</h4>
          </div>
        )
      }
    </div>
    <div className={styles.profileAbout}>
      <div>
        <p>{about}</p>
      </div>
    </div>
  </div>
);

ProfileAboutComponent.propTypes = {
  name: PropTypes.string.isRequired,
  userType: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

export default ProfileAboutComponent;
