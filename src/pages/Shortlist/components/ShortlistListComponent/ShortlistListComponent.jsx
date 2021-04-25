import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt, faBed, faUsers, faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import { occupationShorthand } from '../../../../utils/managePropertiesUtils';
import styles from './ShortlistListComponent.module.scss';

const ShortlistListComponent = ({ property, removeShortlistedPropertyClick }) => {
  const {
    title, price, roomCount, occupantCount, occupations,
  } = property;

  return (
    <div className={styles.shortlistListContainer}>
      <div className={styles.shortlistListImage}>
        <button type="button" onClick={removeShortlistedPropertyClick}>
          <FontAwesomeIcon icon={faTrashAlt} />
          <p>Remove</p>
        </button>
        <p>IMAGE</p>
      </div>
      <div>
        <div>
          <span>
            <h2>{title}</h2>
          </span>
          <span>
            <p>
              £
              {price}
            </p>
          </span>
        </div>
        <div>
          <span>
            <FontAwesomeIcon icon={faBed} />
            <p>
              {roomCount}
              {' '}
              Rooms
            </p>
          </span>
          <span>
            <FontAwesomeIcon icon={faUsers} />
            <p>
              {occupantCount}
              {' '}
              Flatmates
            </p>
          </span>
          <span>
            <FontAwesomeIcon icon={faBriefcase} />
            <p>
              {occupationShorthand(occupations)}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

ShortlistListComponent.propTypes = {
  removeShortlistedPropertyClick: PropTypes.func.isRequired,
  property: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    address: PropTypes.string,
    town: PropTypes.string,
    roomCount: PropTypes.number,
    occupations: PropTypes.arrayOf(PropTypes.string),
    occupantCount: PropTypes.number,
  }).isRequired,
};

export default ShortlistListComponent;
