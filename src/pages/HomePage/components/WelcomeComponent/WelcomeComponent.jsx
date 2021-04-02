import React from 'react';
import PropTypes from 'prop-types';
import timeOfDayGreeting from '../../../../utils/homepageUtils';

const WelcomeComponent = ({ userProfile }) => {
  const { name } = userProfile;

  return (
    <div>
      <h3>
        {timeOfDayGreeting()}
        {' '}
        {name}
        .
      </h3>
      <h4>Welcome back to Thrive</h4>
    </div>
  );
};

WelcomeComponent.propTypes = {
  userProfile: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default WelcomeComponent;
