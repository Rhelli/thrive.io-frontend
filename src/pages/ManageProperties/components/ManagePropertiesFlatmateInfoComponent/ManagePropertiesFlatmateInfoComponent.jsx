import React from 'react';
import PropTypes from 'prop-types';
import { rentShareCalc, propertyLikesGen } from '../../../../utils/managePropertiesUtils';
import styles from '../ManagePropertiesLandlordInfoComponent/ManagePropertiesLandlordInfoComponent.module.scss';

const ManagePropertiesFlatmateListComponent = ({ managedProperties }) => (
  <div className={styles.managedPropertiesInfoContainer}>
    <span>
      <h4>{managedProperties[0].occupantCount}</h4>
      <p>Current</p>
      <p>Flatmates</p>
    </span>
    <span>
      <h4>{managedProperties[0].roomCount}</h4>
      <p>Free rooms</p>
    </span>
    <span className={styles.earningsInfo}>
      <h4>
        £
        {rentShareCalc(managedProperties[0])}
      </h4>
      <p>Current Rent Share</p>
      <p>
        £
        {managedProperties[0].price}
        {' '}
        per room
      </p>
    </span>
    <span>
      <h4>{propertyLikesGen(managedProperties)}</h4>
      <p>New Likes</p>
    </span>
  </div>
);

ManagePropertiesFlatmateListComponent.propTypes = {
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

export default ManagePropertiesFlatmateListComponent;
