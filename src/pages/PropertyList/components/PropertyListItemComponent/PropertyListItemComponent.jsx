import React from 'react';
import PropTypes from 'prop-types';
import styles from './PropertyListItemComponent.module.scss';

const PropertyListItemComponent = props => {
  const {
    town, price, occupantCount, roomCount, propertyClickThrough, title,
  } = props;

  return (
    <div className={styles.propertyListItemContainer} role="button" onClick={propertyClickThrough} onKeyUp={propertyClickThrough} tabIndex="-1">
      <div className={styles.propertyListItemImage}>
        <p>IMAGE</p>
      </div>
      <div className={styles.propertyListItemInfoContainer}>
        <div className={styles.propertyListItemTopInfo}>
          <span>
            <h3>
              {title}
            </h3>
          </span>
          <span>
            <p>
              £
              {price}
            </p>
          </span>
        </div>
        <div className={styles.propertyListItemMiddleInfo}>
          <span>
            <p>
              Flatmates:
              {' '}
              {occupantCount}
            </p>
          </span>
          <span>
            <p>
              Free Rooms:
              {' '}
              {roomCount}
            </p>
          </span>
        </div>
        <div className={styles.propertyListItemBottomInfo}>
          <p>{town}</p>
        </div>
      </div>
    </div>
  );
};

PropertyListItemComponent.propTypes = {
  title: PropTypes.string.isRequired,
  town: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  occupantCount: PropTypes.number.isRequired,
  roomCount: PropTypes.number.isRequired,
  propertyClickThrough: PropTypes.func.isRequired,
};

export default PropertyListItemComponent;
