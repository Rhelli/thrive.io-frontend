import React from 'react';
import PropTypes from 'prop-types';
import getAge from 'get-age';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase, faTransgenderAlt, faMoneyBillWave, faUserFriends,
} from '@fortawesome/free-solid-svg-icons';
import styles from './FlatmatesListItemComponent.module.scss';

const FlatmatesListItemComponent = props => {
  const {
    name, avatar, gender, occupation, maxBudget, minBudget, couple, flatmateClickThrough, dob,
  } = props;

  return (
    <div className={styles.flatmatesListItemContainer} onClick={flatmateClickThrough} onKeyDown={flatmateClickThrough} role="button" tabIndex="-1">
      <div className={styles.flatmatesAvatar}>
        <p>{avatar}</p>
      </div>
      <div className={styles.flatmatesInfoContainer}>
        <div className={styles.flatmatesInfoInnerContainer}>
          <div className={styles.nameAge}>
            <span>
              <h4>
                {name}
              </h4>
            </span>
            <span>
              <p>
                {`(${getAge(dob)})`}
              </p>
            </span>
          </div>
          <div className={styles.occupation}>
            <p>{occupation}</p>
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <div className={styles.gender}>
            <p>{gender}</p>
            <FontAwesomeIcon icon={faTransgenderAlt} />
          </div>
          <div className={styles.budget}>
            <p>
              £
              {minBudget}
              {' '}
              -
              {' '}
              £
              {maxBudget}
            </p>
            <FontAwesomeIcon icon={faMoneyBillWave} />
          </div>
          <div className={styles.couple}>
            <p>{couple}</p>
            <FontAwesomeIcon icon={faUserFriends} />
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
  dob: PropTypes.string.isRequired,
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
