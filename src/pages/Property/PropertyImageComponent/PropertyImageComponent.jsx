import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './PropertyImageComponent.module.scss';

const PropertyImageComponent = () => (
  <div className={styles.propertyImageContainer}>
    <button type="button" className={styles.shortlistButton}>
      <FontAwesomeIcon icon={faStar} />
      <p>Shortlist</p>
    </button>
    <div className={styles.propertyImageInnerContainer}>
      <p>
        IMAGE
      </p>
    </div>
  </div>
);

export default PropertyImageComponent;
