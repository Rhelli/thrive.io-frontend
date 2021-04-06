/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faMoneyBillWaveAlt } from '@fortawesome/free-solid-svg-icons';
import { monthlyEarnings, availableRooms, propertyLikesGen } from '../../../../utils/managePropertiesUtils';
import {
  totalRooms, missingRent, totalFilledRooms, totalSpareRooms,
} from '../../../../utils/homepageUtils';
import styles from './LandlordHomepageComponent.module.scss';

const LandlordHomepageComponent = ({ managedProperties }) => {
  const totalAllRooms = totalRooms(managedProperties);
  const totalOccupiedRooms = totalFilledRooms(managedProperties);
  const totalEmptyRooms = totalSpareRooms(managedProperties);
  const lastMonthsEarnings = monthlyEarnings(managedProperties);
  const lostRent = missingRent(managedProperties);

  console.log(managedProperties);

  return (
    <div className={styles.landlordHomepageContainer}>
      <div className={styles.freeRoomsRow}>
        <span className={styles.rowIcon}>
          <FontAwesomeIcon icon={faBed} />
        </span>
        {
          managedProperties.length && totalEmptyRooms > 0 ? (
            <span className={styles.rowInfo}>
              <h3>
                {totalEmptyRooms}
                {' '}
                Empty Rooms
              </h3>
              <p>
                {totalAllRooms - totalEmptyRooms}
                /
                {totalAllRooms}
                {' '}
                rooms filled.
              </p>
            </span>
          ) : managedProperties.length && totalEmptyRooms === 0 ? (
            <span className={styles.rowInfo}>
              <h3>No Empty Rooms</h3>
              <p>Good Job!</p>
            </span>
          ) : (
            <span className={styles.rowInfo}>
              <h3>No Properties Added Yet.</h3>
              <p>Consider adding some new properties to get the ball rolling.</p>
            </span>
          )
        }
      </div>
      <div className={styles.monthlyEarningsRow}>
        <span className={styles.rowIcon}>
          <FontAwesomeIcon icon={faMoneyBillWaveAlt} />
        </span>
        {
          managedProperties.length && totalEmptyRooms > 0 ? (
            <span className={styles.rowInfo}>
              <h3>
                £
                {' '}
                {lastMonthsEarnings}
                {' '}
                total last month
              </h3>
              <p>
                £
                {lostRent}
                {' '}
                rental lost from unfilled rooms.
              </p>
            </span>
          ) : managedProperties.length && totalEmptyRooms === 0 ? (
            <span>
              <h3>
                £
                {' '}
                {lastMonthsEarnings}
                {' '}
                total last month
              </h3>
              <p>Good Job! No rental was lost due to unfilled rooms!</p>
            </span>
          ) : (
            <span>
              <h3>£0 total last month</h3>
              <p>
                Create properties and collect rental to get your monthly financial averages here.
              </p>
            </span>
          )
        }
      </div>
      <div>
        {
          managedProperties.length
        }
      </div>
    </div>
  );
};

LandlordHomepageComponent.propTypes = {
  managedProperties: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number,
    }).isRequired,
  ).isRequired,
};

export default LandlordHomepageComponent;
