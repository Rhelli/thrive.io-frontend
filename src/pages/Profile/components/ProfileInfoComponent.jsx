import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faUserFriends, faVenus, faMars, faTransgender, faSmoking, faSmokingBan, faBan,
  faCat, faDog, faFish, faFrog, faDove, faPaw,
} from '@fortawesome/free-solid-svg-icons';
import styles from './ProfileInfoComponent.module.scss';

const ProfileInfoComponent = ({
  minBudget, maxBudget, areasLooking, couple, gender, smoking, pets,
}) => (
  <div className={styles.profileInfoContainer}>
    <div className={styles.profileInfoBudget}>
      <p>
        Budget:
        £
        {minBudget}
        -
        {maxBudget}
      </p>
    </div>
    <div className={styles.profileInfoAreas}>
      Areas Looking:
      &nbsp;
      {areasLooking.join(', ')}
    </div>
    <div className={styles.profileInfoGenderCouple}>
      <div className={styles.profileInfoCouple}>
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
      <div className={styles.profileInfoGender}>
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
      <div className={styles.profileInfoSmoking}>
        <h4>Smoking</h4>
        {
          smoking === 'Non-Smoking' ? (
            <div>
              <FontAwesomeIcon icon={faSmokingBan} />
              <p>Non-Smoking</p>
            </div>
          ) : (
            <div>
              <FontAwesomeIcon icon={faSmoking} />
              <p>{smoking}</p>
            </div>
          )
        }
      </div>
      <div className={styles.profileInfoPets}>
        <h4>Pets</h4>
        {
          pets.length === 0 ? (
            <div>
              <FontAwesomeIcon icon={faBan} />
              <p>No Pets</p>
            </div>
          ) : pets.includes('Cats') ? (
            <div>
              <FontAwesomeIcon icon={faCat} />
              <p>Cats</p>
            </div>
          ) : pets.includes('Dogs') ? (
            <div>
              <FontAwesomeIcon icon={faDog} />
              <p>Dogs</p>
            </div>
          ) : pets.includes('Reptiles') ? (
            <div>
              <FontAwesomeIcon icon={faFrog} />
              <p>Reptiles</p>
            </div>
          ) : pets.includes('Birds') ? (
            <div>
              <FontAwesomeIcon icon={faDove} />
              <p>Birds</p>
            </div>
          ) : pets.includes('Fish') ? (
            <div>
              <FontAwesomeIcon icon={faFish} />
              <p>Fish</p>
            </div>
          ) : (
            <div>
              <FontAwesomeIcon icon={faPaw} />
              <p>{pets}</p>
            </div>
          )
        }
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
