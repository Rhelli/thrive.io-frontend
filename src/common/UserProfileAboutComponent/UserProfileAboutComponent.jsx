import React from 'react';
import PropTypes from 'prop-types';
import { userGenderDisplay, arrayDisplay } from '../../utils/userProfileUtils';
import styles from './UserProfileAboutComponent.module.scss';

const UserProfileAboutComponent = ({ userProfile }) => {
  const {
    about, gender, couple, pets, smoking, minBudget, maxBudget, areasLooking,
  } = userProfile;

  return (
    <div className={styles.userProfileAboutContainer}>
      <div>
        <div className={styles.userProfileAboutTopSection}>
          <h2>About</h2>
          <div className={styles.userProfileAbout}>
            <p>{about}</p>
          </div>
          <div className={styles.userProfileAreas}>
            <h2>Areas Looking</h2>
            <p>{arrayDisplay(areasLooking)}</p>
          </div>
        </div>
        <div className={styles.userProfileAboutBottomSection}>
          <div>
            <span>Budget:</span>
            <span>
              <p>
                £
                {minBudget}
              </p>
            </span>
            <span>
              <p> - </p>
            </span>
            <span>
              <p>
                £
                {maxBudget}
              </p>
            </span>
          </div>
          <div>
            <span>
              <p>Gender:</p>
            </span>
            <span className={styles.userProfileGenderBox}>
              <p>{userGenderDisplay(gender)[0]}</p>
              <p>{userGenderDisplay(gender)[1]}</p>
            </span>
          </div>
          <div>
            <span>
              <p>Couple?</p>
            </span>
            <span>
              <p>{couple}</p>
            </span>
          </div>
          <div>
            <span>
              <p>Smoking?</p>
            </span>
            <span>
              <p>{smoking}</p>
            </span>
          </div>
          <div>
            <span>
              <p>Pets?</p>
            </span>
            <span>
              <p>
                {arrayDisplay(pets)}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

UserProfileAboutComponent.propDefaults = {
  userProfile: {
    about: "This user hasn't added any information about themselves yet!",
    gender: 'No gender added yet.',
    couple: 'Unknown marital status.',
    pets: 'No pets information yet.',
    smoking: 'No smoking information yet',
    minBudget: 0,
    maxBudget: 0,
    areasLooking: 'No areas added yet.',
  },
};

UserProfileAboutComponent.propTypes = {
  userProfile: PropTypes.shape({
    about: PropTypes.string,
    gender: PropTypes.string,
    couple: PropTypes.string,
    pets: PropTypes.arrayOf(PropTypes.string),
    smoking: PropTypes.string,
    minBudget: PropTypes.number,
    maxBudget: PropTypes.number,
    areasLooking: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default UserProfileAboutComponent;
