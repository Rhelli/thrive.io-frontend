import React from 'react';
import PropTypes from 'prop-types';
import { timeOfDayGreeting } from '../../../../utils/homepageUtils';
import tLogo from '../../../../assets/img/thrive-t-transparent.png';
import styles from './WelcomeComponent.module.scss';

const WelcomeComponent = ({ userProfile }) => {
  const { name } = userProfile;

  return (
    <div className={styles.welcomeComponentContainer}>
      <div className={styles.welcomeBackMessage}>
        <h3>
          {timeOfDayGreeting()}
          {' '}
          {name}
        </h3>
        <h4>Welcome back to Thrive</h4>
      </div>
      <div className={styles.welcomeLogoContainer}>
        <img alt="logo" src={tLogo} />
      </div>
    </div>
  );
};

WelcomeComponent.propTypes = {
  userProfile: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default WelcomeComponent;
