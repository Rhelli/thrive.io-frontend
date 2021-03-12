/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretUp, faCaretDown, faMars, faTransgender, faVenus, faTransgenderAlt,
} from '@fortawesome/free-solid-svg-icons';
import { flatmateDisplay, gendersDisplay } from '../../../utils/propertyProfileUtils';
import styles from './PropertyInfoComponent.module.scss';

const PropertyInfoComponent = ({ singleProperty }) => {
  const {
    deposit, genders, maxAge, minAge, occupantCount, occupations, price, roomCount,
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
        <p>{flatmateDisplay(occupations) }</p>
      </div>
      <div className={styles.propertyInfoGenders}>
        {
        gendersDisplay(genders)[1] ? (
          <div>
            <span>
              <FontAwesomeIcon icon={gendersDisplay(genders)[1]} />
            </span>
            <span>
              <p>
                {gendersDisplay(genders)[0]}
              </p>
            </span>
          </div>
        ) : (
          <div>
            <p>{gendersDisplay(genders)[0]}</p>
          </div>
        )
      }
      </div>
    </div>
  );
};

PropertyInfoComponent.propTypes = {
  singleProperty: PropTypes.shape({
    deposit: PropTypes.number,
    genders: PropTypes.arrayOf(PropTypes.string),
    maxAge: PropTypes.number,
    minAge: PropTypes.number,
    occupantCount: PropTypes,
    occupations: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
    roomCount: PropTypes.number,
  }).isRequired,
};

export default PropertyInfoComponent;
