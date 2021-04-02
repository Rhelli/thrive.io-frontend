import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt, faBed, faUsers, faBriefcase, faCog, faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import {
  occupationShorthand, noPropertiesMessageGen,
} from '../../utils/managePropertiesUtils';
import styles from './PropertyListItemComponent.module.scss';

const PropertyListItemComponent = ({
  properties, propertyClickThrough, handlePropertyOptionButton, listItemType,
}) => (
  <div className={styles.propertyListItemContainer}>
    {
      properties.length ? (
        properties.map(property => (
          <div key={uuidv4()}>
            <div
              className={styles.propertyContainer}
              onClick={() => propertyClickThrough(property)}
              role="button"
              onKeyUp={() => propertyClickThrough(property)}
              tabIndex="-1"
            >
              <div className={styles.propertyImage}>
                {
                  listItemType === 'manage' ? (
                    <button
                      type="button"
                      className={styles.propertySettingsButton}
                      onClick={property => handlePropertyOptionButton(property)}
                    >
                      <FontAwesomeIcon icon={faCog} />
                    </button>
                  ) : (
                    null
                  )
                }
                <h4>IMAGE</h4>
              </div>
              <div className={styles.propertyInfoContainer}>
                <div className={styles.propertyTitle}>
                  <h3>{property.title}</h3>
                  <span className={styles.propertyPrice}>
                    £
                    {property.price}
                  </span>
                </div>
                <div className={styles.propertyLocation}>
                  <span className={styles.propertyLocationIcon}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </span>
                  <span className={styles.propertyAddress}>
                    <p>
                      {property.address}
                      ,
                      {' '}
                      {property.town}
                    </p>
                  </span>
                </div>
                <div className={styles.propertyDetails}>
                  <span className={styles.propertyFreeRooms}>
                    <FontAwesomeIcon icon={faBed} />
                    <p>
                      {property.roomCount}
                      {' '}
                      Rooms
                    </p>
                  </span>
                  <span className={styles.propertyFlatmates}>
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
            <div className={styles.shortlistDeleteButtonContainer}>
              {
                listItemType === 'Shortlist' ? (
                  <button type="button" onClick={() => handlePropertyOptionButton(property)}>
                    <p>Remove</p>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                ) : (
                  null
                )
              }
            </div>
          </div>
        ))
      ) : (
        listItemType === 'Manage' ? (
          <div className={styles.noPropertiesMessages}>
            <h2>There isn&apos;t anything here!</h2>
            <h4>{noPropertiesMessageGen()}</h4>
          </div>
        ) : (
          <div className={styles.noPropertiesMessages}>
            <h2>There isn&apos;t anything here!</h2>
            <h4>Have a browse of the available properties.</h4>
          </div>
        )
      )
    }
  </div>
);

PropertyListItemComponent.propTypes = {
  properties: PropTypes.arrayOf(
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
  handlePropertyOptionButton: PropTypes.func.isRequired,
  listItemType: PropTypes.string.isRequired,
};

export default PropertyListItemComponent;
