import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase, faTransgenderAlt, faMoneyBillWave, faUserFriends,
} from '@fortawesome/free-solid-svg-icons';
import styles from './FlatmatesListItemComponent.module.scss';

const FlatmatesListItemComponent = props => {
  const {
    name, avatar, gender, occupation, maxBudget, minBudget, couple, flatmateClickThrough,
  } = props;

  return (
    <div className={styles.flatmatesListItemContainer} onClick={flatmateClickThrough} onKeyDown={flatmateClickThrough} role="button" tabIndex="-1">
      <div className={styles.flatmatesAvatar}>
        <p>{avatar}</p>
      </div>
      <div className={styles.flatmatesInfoContainer}>
        <div className={styles.flatmatesInfoInnerContainer}>
          <h4>{name}</h4>
          <div>
            <FontAwesomeIcon icon={faBriefcase} />
            &nbsp;
            <p>{occupation}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faTransgenderAlt} />
            &nbsp;
            <p>{gender}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faMoneyBillWave} />
            &nbsp;
            <p>
              {minBudget}
              &nbsp;
              -
              &nbsp;
              {maxBudget}
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserFriends} />
            &nbsp;
            <p>{couple}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

FlatmatesListItemComponent.propTypes = {
  avatar: PropTypes.string,
  couple: PropTypes.string,
  gender: PropTypes.string,
  maxBudget: PropTypes.number,
  minBudget: PropTypes.number,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string,
  flatmateClickThrough: PropTypes.func.isRequired,
};

FlatmatesListItemComponent.defaultProps = {
  avatar: '',
  couple: '',
  gender: '',
  maxBudget: 0,
  minBudget: 0,
  occupation: '',
};

export default FlatmatesListItemComponent;
