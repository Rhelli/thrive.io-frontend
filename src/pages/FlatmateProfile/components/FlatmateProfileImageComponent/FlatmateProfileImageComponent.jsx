import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import styles from './FlatmateProfileImageComponent.module.scss';

const FlatmateProfileImageComponent = ({ email, avatar }) => (
  <div className={styles.profileImageContainer}>
    <div className={styles.profileImageContact}>
      <span>
        <FontAwesomeIcon icon={faEnvelopeSquare} />
      </span>
      <span>
        <p>{email}</p>
      </span>
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
