import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faUserFriends, faVenus, faMars, faTransgender,
} from '@fortawesome/free-solid-svg-icons';

const ProfileInfoComponent = ({
  minBudget, maxBudget, areasLooking, couple, gender, smoking, pets,
}) => (
  <div>
    <div>
      <p>
        Min Budget:
        {minBudget}
      </p>
      <p>
        Max Budget:
        {maxBudget}
      </p>
    </div>
    <div>
      Areas Looking:
      {areasLooking}
    </div>
    <div>
      <div>
        {
          couple === 'Couple' ? (
            <div>
              <FontAwesomeIcon icon={faUserFriends} />
              <p>Couple</p>
            </div>
          ) : (
            <div>
              <FontAwesomeIcon icon={faUser} />
              <p>Non-Couple</p>
            </div>
          )
        }
      </div>
      <div>
        {
          gender === 'Male' ? (
            <div>
              <FontAwesomeIcon icon={faMars} />
              <p>Male</p>
            </div>
          ) : gender === 'Female' ? (
            <div>
              <FontAwesomeIcon icon={faVenus} />
              <p>Female</p>
            </div>
          ) : (
            <div>
              <FontAwesomeIcon icon={faTransgender} />
              <p>Transgender</p>
            </div>
          )
        }
      </div>
      <div>
        <p>{smoking}</p>
      </div>
      <div>
        <p>{pets}</p>
      </div>
    </div>
  </div>
);

ProfileInfoComponent.defaultProps = {
  minBudget: 0,
  maxBudget: 0,
  areasLooking: '',
  couple: '',
  smoking: '',
  gender: '',
  pets: '',
};

ProfileInfoComponent.propTypes = {
  minBudget: PropTypes.number,
  maxBudget: PropTypes.number,
  areasLooking: PropTypes.arrayOf(PropTypes.string),
  couple: PropTypes.string,
  gender: PropTypes.string,
  smoking: PropTypes.string,
  pets: PropTypes.arrayOf(PropTypes.string),
};

export default ProfileInfoComponent;
