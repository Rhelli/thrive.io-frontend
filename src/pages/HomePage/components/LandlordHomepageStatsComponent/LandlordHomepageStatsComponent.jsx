import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faMoneyBillWaveAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { monthlyEarnings } from '../../../../utils/managePropertiesUtils';
import {
  totalRooms, missingRent, totalSpareRooms, totalLikes, likesSuggestion,
} from '../../../../utils/homepageUtils';
import styles from './LandlordHomepageStatsComponent.module.scss';

const LandlordHomepageStatsComponent = ({ managedProperties }) => {
  const totalAllRooms = totalRooms(managedProperties);
  const totalEmptyRooms = totalSpareRooms(managedProperties);
  const lastMonthsEarnings = monthlyEarnings(managedProperties);
  const lostRent = missingRent(managedProperties);
  const totalLikeCount = totalLikes(managedProperties);

  return (
    <div className={styles.landlordHomepageContainer}>
      <div className={styles.freeRoomsRow}>
        <span className={styles.roomsIcon}>
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
        <span className={styles.incomeIcon}>
          <FontAwesomeIcon icon={faMoneyBillWaveAlt} />
        </span>
        {
          managedProperties.length && totalEmptyRooms > 0 ? (
            <span className={styles.rowInfo}>
              <h3>
                £
                {lastMonthsEarnings}
                {' '}
                total last month
              </h3>
              <p>
                £
                {lostRent}
                {' '}
                in unutilised property space.
              </p>
            </span>
          ) : managedProperties.length && totalEmptyRooms === 0 ? (
            <span className={styles.rowInfo}>
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
            <span className={styles.rowInfo}>
              <h3>£0 total last month</h3>
              <p>
                Create properties and collect rental to get your monthly financial averages here.
              </p>
            </span>
          )
        }
      </div>
      <div className={styles.likesRow}>
        <span className={styles.likesIcon}>
          <FontAwesomeIcon icon={faStar} />
        </span>
        {
          managedProperties.length ? (
            <span className={styles.rowInfo}>
              <h3>
                {totalLikeCount}
                {' '}
                shortlists.
              </h3>
              <p>{likesSuggestion(totalLikeCount)}</p>
            </span>
          ) : (
            <span className={styles.rowInfo}>
              <h3>No Likes</h3>
              <p>Register a new property to start generating likes.</p>
            </span>
          )
        }
      </div>
    </div>
  );
};

LandlordHomepageStatsComponent.propTypes = {
  managedProperties: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number,
    }).isRequired,
  ).isRequired,
};

export default LandlordHomepageStatsComponent;
