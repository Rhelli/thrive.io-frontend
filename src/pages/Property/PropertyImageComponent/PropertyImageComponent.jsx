import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCog, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { settingsShortlistButtonDetect } from '../../../utils/propertyProfileUtils';
import styles from './PropertyImageComponent.module.scss';

const PropertyImageComponent = ({
  userProfile, singleProperty, handlePropertySettingsClick, addPropertyToShortlistClick,
  shortlistedIds, deleteShortlistedPropertyClick,
}) => {
  const { userType } = userProfile;
  const { id } = singleProperty;

  return (
    <div className={styles.propertyImageContainer}>
      {
        userType === 'Looking' && !shortlistedIds.includes(id) ? (
          <button type="button" className={styles.shortlistButton} onClick={addPropertyToShortlistClick}>
            <FontAwesomeIcon icon={faStar} />
            <p>Shortlisted</p>
          </button>
        ) : userType === 'Looking' && shortlistedIds.includes(id) ? (
          <button
            type="button"
            className={styles.deleteButton}
            onClick={() => deleteShortlistedPropertyClick(singleProperty)}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
            <p>Removed</p>
          </button>
        ) : userType === 'Advertising' && settingsShortlistButtonDetect(userProfile.properties, id) ? (
          <button
            type="button"
            onClick={() => handlePropertySettingsClick(singleProperty)}
            className={styles.settingsButton}
          >
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

PropertyImageComponent.defaultProps = {
  handlePropertySettingsClick: null,
  addPropertyToShortlistClick: null,
  deleteShortlistedPropertyClick: null,
  shortlistedIds: null,
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
  handlePropertySettingsClick: PropTypes.func,
  addPropertyToShortlistClick: PropTypes.func,
  shortlistedIds: PropTypes.arrayOf(PropTypes.number),
  deleteShortlistedPropertyClick: PropTypes.func,
};

export default PropertyImageComponent;
