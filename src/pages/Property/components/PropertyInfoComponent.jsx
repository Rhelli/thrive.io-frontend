/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretUp, faCaretDown, faMapMarkerAlt, faBox, faInfoCircle, faUsers,
} from '@fortawesome/free-solid-svg-icons';
import flatmateDisplay from '../../../utils/propertyProfileUtils';
import styles from './PropertyInfoComponent.module.scss';

const PropertyInfoComponent = ({ singleProperty, propertyData }) => {
  const {
    address, bills, blurb, deposit, disabledAccess, furnished, genders, internet, maxAge, minAge,
    occupantCount, occupations, outsideArea, parking, pets, postcode, price, roomCount, smoking, title, town,
  } = singleProperty;

  return (
    <div className={styles.propertyInfoContainer}>
      <div className={styles.propertyInfoPrice}>
        <span>
          <h3>
            £
            {price}
            {' '}
            per Month
          </h3>
        </span>
        <span>
          <p>
            (
            +£
            {deposit}
            {' '}
            deposit
            )
          </p>
        </span>

      </div>
      <div className={styles.propertyInfoFirstRow}>
        <span className={styles.ages}>
          {
          minAge === maxAge ? (
            <p>
              Ages:
              {' '}
              {minAge}
              {' '}
            </p>
          ) : (
            <p>
              Ages:
              {' '}
              <FontAwesomeIcon icon={faCaretDown} />
              {' '}
              {minAge}
              {' '}
              -
              {' '}
              {maxAge}
              {' '}
              <FontAwesomeIcon icon={faCaretUp} />
              {' '}
            </p>
          )
        }
        </span>
        <span className={styles.flatmateCount}>
          <p>
            Flatmates:
            {' '}
            {occupantCount}
          </p>
        </span>
        <span className={styles.roomCount}>
          <p>
            Rooms:
            {' '}
            {roomCount}
          </p>
        </span>
      </div>
      <div className={styles.propertyInfoOccupations}>
        <p>
          {
            flatmateDisplay(occupations)
          }
        </p>
      </div>
      <div className={styles.propertyInfoInfoButtons}>
        <div className={styles.locationButton}>
          <button type="button">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </button>
          <p>Location</p>
        </div>
        <div className={styles.includedButton}>
          <button type="button">
            <FontAwesomeIcon icon={faBox} />
          </button>
          <p>Included</p>
        </div>
        <div className={styles.infoButton}>
          <button type="button">
            <FontAwesomeIcon icon={faInfoCircle} />
          </button>
          <p>More</p>
        </div>
        <div className={styles.matchButton}>
          <button type="button">
            <FontAwesomeIcon icon={faUsers} />
          </button>
          <p>Match</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfoComponent;
