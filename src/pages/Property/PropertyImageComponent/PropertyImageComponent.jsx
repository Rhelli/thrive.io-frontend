import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCog } from '@fortawesome/free-solid-svg-icons';
import styles from './PropertyImageComponent.module.scss';

const PropertyImageComponent = ({ userType }) => (
  <div className={styles.propertyImageContainer}>
    {
      userType === 'Looking' ? (
        <button type="button" className={styles.shortlistButton}>
          <FontAwesomeIcon icon={faStar} />
          <p>Shortlist</p>
        </button>
      ) : (
        <button type="button" className={styles.settingsButton}>
          <FontAwesomeIcon icon={faCog} />
          <p>Settings</p>
        </button>
      )
    }
    <div className={styles.propertyImageInnerContainer}>
      <p>
        IMAGE
      </p>
    </div>
  </div>
);

PropertyImageComponent.propTypes = {
  userType: PropTypes.string.isRequired,
};

export default PropertyImageComponent;
