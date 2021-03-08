import React from 'react';
import PropTypes from 'prop-types';

const ProfileAboutComponent = ({
  name, userType, occupation, about,
}) => (
  <div>
    <div>
      <h2>{name}</h2>
      <h4>{userType}</h4>
      <h4>{occupation}</h4>
    </div>
    <div>
      <div>
        <p>{about}</p>
      </div>
    </div>
  </div>
);

ProfileAboutComponent.propTypes = {
  name: PropTypes.string.isRequired,
  userType: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

export default ProfileAboutComponent;
