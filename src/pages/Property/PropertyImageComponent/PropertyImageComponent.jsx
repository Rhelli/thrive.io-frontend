import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCog } from '@fortawesome/free-solid-svg-icons';
import { settingsShortlistButtonDetect } from '../../../utils/propertyProfileUtils';
import styles from './PropertyImageComponent.module.scss';

const PropertyImageComponent = ({ userProfile, singleProperty }) => {
  const { userType } = userProfile;
  const { id } = singleProperty;

  return (
    <div className={styles.propertyImageContainer}>
      {
        userType === 'Looking' ? (
          <button type="button" className={styles.shortlistButton}>
            <FontAwesomeIcon icon={faStar} />
            <p>Shortlist</p>
          </button>
        ) : userType === 'Advertising' && settingsShortlistButtonDetect(userProfile.properties, id) ? (
          <button type="button" className={styles.settingsButton}>
            <FontAwesomeIcon icon={faCog} />
            <p>Settings</p>
          </button>
        ) : (
          null
        )
      }
      <div className={styles.propertyImageInnerContainer}>
        <p>
          IMAGE
        </p>
      </div>
    </div>
  );
};

PropertyImageComponent.propTypes = {
  userProfile: PropTypes.shape({
    userType: PropTypes.string.isRequired,
    properties: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  singleProperty: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default PropertyImageComponent;
