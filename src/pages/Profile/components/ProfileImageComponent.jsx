import React from 'react';
import PropTypes from 'prop-types';

const ProfileImageComponent = ({ email, avatar }) => (
  <div>
    <div>
      <p>{email}</p>
    </div>
    <div>
      {avatar}
    </div>
  </div>
);

ProfileImageComponent.propTypes = {
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default ProfileImageComponent;
