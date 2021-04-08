import React from 'react';
import PropTypes from 'prop-types';
import { monthlyEarnings, availableRooms, propertyLikesGen } from '../../../../utils/managePropertiesUtils';
import styles from './ManagePropertiesLandlordInfoComponent.module.scss';

const ManagePropertiesLandlordInfoComponent = ({ managedProperties }) => (
  <div className={styles.managedPropertiesInfoContainer}>
    <span className={styles.managedProperties}>
      <h4>{managedProperties.length}</h4>
      <p>Properties</p>
    </span>
    <span className={styles.earningsInfo}>
      <h4>
        £
        {managedProperties.length ? monthlyEarnings(managedProperties) : 0}
      </h4>
      <p>Last month</p>
    </span>
    <span className={styles.middleInfo}>
      <h4>{managedProperties.length ? availableRooms(managedProperties) : 0}</h4>
      <p>Free Rooms</p>
    </span>
    <span className={styles.likesInfo}>
      <h4>{propertyLikesGen(managedProperties)}</h4>
      <p>New Likes</p>
    </span>
  </div>
);

ManagePropertiesLandlordInfoComponent.propTypes = {
  managedProperties: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.string.isRequired,
      bills: PropTypes.string.isRequired,
      blurb: PropTypes.string.isRequired,
      deposit: PropTypes.number.isRequired,
      disabledAccess: PropTypes.string,
      furnished: PropTypes.string.isRequired,
      genders: PropTypes.arrayOf(PropTypes.string),
      id: PropTypes.number,
      internet: PropTypes.string,
      maxAge: PropTypes.number,
      minAge: PropTypes.number,
      occupantCount: PropTypes.number.isRequired,
      occupations: PropTypes.arrayOf(PropTypes.string),
      outsideArea: PropTypes.arrayOf(PropTypes.string),
      parking: PropTypes.string.isRequired,
      pets: PropTypes.arrayOf(PropTypes.string),
      postcode: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      roomCount: PropTypes.number.isRequired,
      smoking: PropTypes.string,
      title: PropTypes.string.isRequired,
      town: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ManagePropertiesLandlordInfoComponent;
