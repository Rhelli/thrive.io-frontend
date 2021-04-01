import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt, faBed, faUsers, faBriefcase, faCog,
} from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import {
  occupationShorthand, noPropertiesMessageGen,
} from '../../../../utils/managePropertiesUtils';
import styles from './ManagePropertiesLandlordListComponent.module.scss';

const ManagePropertiesLandlordListComponent = ({
  managedProperties, propertyClickThrough, handlePropertySettingsClick,
}) => (
  <div className={styles.managedPropertyListContainer}>
    {
      managedProperties.length ? (
        managedProperties.map(property => (
          <div
            className={styles.managedPropertyContainer}
            key={uuidv4()}
            onClick={() => propertyClickThrough(property)}
            role="button"
            onKeyUp={() => propertyClickThrough(property)}
            tabIndex="-1"
          >
            <div className={styles.managedPropertyImage}>
              <button
                type="button"
                className={styles.managedPropertySettingsButton}
                onClick={property => handlePropertySettingsClick(property)}
              >
                <FontAwesomeIcon icon={faCog} />
              </button>
              <h4>IMAGE</h4>
            </div>
            <div className={styles.managedPropertyInfoContainer}>
              <div className={styles.managedPropertyTitle}>
                <h3>{property.title}</h3>
                <span className={styles.managedPropertyPrice}>
                  £
                  {property.price}
                </span>
              </div>
              <div className={styles.managedPropertyLocation}>
                <span className={styles.managedPropertyLocationIcon}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>
                <span className={styles.managedPropertyAddress}>
                  <p>
                    {property.address}
                    ,
                    {' '}
                    {property.town}
                  </p>
                </span>
              </div>
              <div className={styles.managedPropertyDetails}>
                <span className={styles.managedPropertyFreeRooms}>
                  <FontAwesomeIcon icon={faBed} />
                  <p>
                    {property.roomCount}
                    {' '}
                    Rooms
                  </p>
                </span>
                <span className={styles.managedPropertyFlatmates}>
                  <FontAwesomeIcon icon={faUsers} />
                  <p>
                    {property.occupantCount}
                    {' '}
                    Flatmates
                  </p>
                </span>
                <span>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <p>{occupationShorthand(property.occupations)}</p>
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.noPropertiesMessages}>
          <h2>There isn&apos;t anything here!</h2>
          <h4>{noPropertiesMessageGen()}</h4>
        </div>
      )
    }
  </div>
);

ManagePropertiesLandlordListComponent.propTypes = {
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
  propertyClickThrough: PropTypes.func.isRequired,
  handlePropertySettingsClick: PropTypes.func.isRequired,
};

export default ManagePropertiesLandlordListComponent;
