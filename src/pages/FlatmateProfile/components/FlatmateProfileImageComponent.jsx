import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlatmateProfileImageComponent.module.scss';

const FlatmateProfileImageComponent = ({ email, avatar }) => (
  <div className={styles.profileImageContainer}>
    <div className={styles.profileImageContact}>
      <p>{email}</p>
    </div>
    <div className={styles.profileImage}>
      {avatar}
    </div>
  </div>
);

FlatmateProfileImageComponent.propTypes = {
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default FlatmateProfileImageComponent;
