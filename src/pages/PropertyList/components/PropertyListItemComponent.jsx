import React from 'react';
import PropTypes from 'prop-types';
import styles from './PropertyListItemComponent.module.scss';

const PropertyListItemComponent = props => {
  const {
    town, price, occupantCount, roomCount, propertyClickThrough,
  } = props;

  return (
    <div className={styles.propertyListItemContainer} role="button" onClick={propertyClickThrough} onKeyUp={propertyClickThrough} tabIndex="-1">
      <div className={styles.propertyListItemTopInfo}>
        <h3>
          £&nbsp;
          {price}
          &nbsp;
          per month
        </h3>
      </div>
      <div className={styles.propertyListItemMiddleInfo}>
        <h5>
          Current Occupants:&nbsp;
          {occupantCount}
        </h5>
        <h5>
          Number of Rooms:&nbsp;
          {roomCount}
        </h5>
      </div>
      <div className={styles.propertyListItemBottomInfo}>
        <h5>{town}</h5>
      </div>
    </div>
  );
};

PropertyListItemComponent.propTypes = {
  town: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  occupantCount: PropTypes.number.isRequired,
  roomCount: PropTypes.number.isRequired,
  propertyClickThrough: PropTypes.func.isRequired,
};

export default PropertyListItemComponent;
