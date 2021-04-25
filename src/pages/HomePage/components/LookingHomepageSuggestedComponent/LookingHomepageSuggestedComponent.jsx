import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './LookingHomepageSuggestedComponent.module.scss';

const LookingHomepageSuggestedComponent = ({ userProfile, handlePropertyNavigation }) => {
  const { suggestedProperties } = userProfile;

  return (
    <div className={styles.lookingSuggestedContainer}>
      <div className={styles.suggestedTitleContainer}>
        <h2>
          Suggested Properties
          {' '}
          {`(${suggestedProperties.length})`}
        </h2>
        <p>Based On Location Your Preferences</p>
      </div>
      <div className={styles.lookingSuggestedPropertyList}>
        {
          suggestedProperties.map(property => (
            <div
              key={uuidv4()}
              className={styles.suggestedProperty}
              role="button"
              onClick={() => handlePropertyNavigation(property)}
              onKeyUp={() => handlePropertyNavigation(property)}
              tabIndex="-1"
            >
              <div className={styles.propertyImage}>
                <p>IMAGE</p>
              </div>
              <div className={styles.propertyTitlePrice}>
                <span>
                  <h3>
                    {property.title}
                  </h3>
                </span>
                <span>
                  <p>
                    £
                    {property.price}
                  </p>
                </span>
              </div>
              <div className={styles.propertyInfo}>
                <span>
                  <p>
                    Flatmates:
                    {' '}
                    {property.occupantCount}
                  </p>
                </span>
                <span>
                  <p>
                    Free Rooms:
                    {' '}
                    {property.roomCount}
                  </p>
                </span>
              </div>
              <div className={styles.propertyLocation}>
                <p>{property.town}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

LookingHomepageSuggestedComponent.propTypes = {
  userProfile: PropTypes.shape({
    suggestedProperties: PropTypes.arrayOf(
      PropTypes.object,
    ).isRequired,
  }).isRequired,
  handlePropertyNavigation: PropTypes.func.isRequired,
};

export default LookingHomepageSuggestedComponent;
