import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faChevronLeft, faUser } from '@fortawesome/free-solid-svg-icons';

const ProfileSettingsNavbarComponent = ({ handleBackButtonClick }) => (
  <div>
    <div>
      <button type="button" onClick={handleBackButtonClick} onKeyUp={handleBackButtonClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    </div>
    <div>
      <h2>Settings</h2>
    </div>
    <div>
      <FontAwesomeIcon icon={faUser} />
    </div>
  </div>
);

ProfileSettingsNavbarComponent.propTypes = {
  handleBackButtonClick: PropTypes.func.isRequired,
};

export default ProfileSettingsNavbarComponent;
