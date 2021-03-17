/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import styles from './EditProfileFormComponent.module.scss';

const EditProfileFormComponent = ({ userProfile }) => {
  const {
    about, areasLooking, couple, gender, maxBudget, minBudget, name, occupation, pets,
    smoking, userType,
  } = userProfile;
  const petsOptions = [
    { value: 'Dogs', label: 'Dogs' },
    { value: 'Cats', label: 'Cats' },
    { value: 'Birds', label: 'Birds' },
    { value: 'Rodents', label: 'Rodents' },
    { value: 'Reptiles', label: 'Reptiles' },
    { value: 'Other', label: 'Other' },
  ];

  const areasOptions = [
    { value: 'Camden', label: 'Camden' },
    { value: 'Belgravia', label: 'Belgravia' },
    { value: 'Abbey Road', label: 'Abbey Road' },
  ];

  return (
    <div className={styles.editProfileFormContainer}>
      <form className={styles.editProfileForm}>
        <div className={styles.editProfileName}>
          <label htmlFor="name">
            <h3>Your Name</h3>
            <input id="name" type="text" placeholder={name} required />
          </label>
        </div>
        <div className={styles.editProfileDob}>
          <label htmlFor="age">
            <h3>Date Of Birth</h3>
            <input id="dob" type="date" />
          </label>
        </div>
        <div className={styles.editProfileAbout}>
          <label htmlFor="about">
            <h3>About You</h3>
            <textarea id="about" type="text" placeholder={about} />
          </label>
        </div>
        <div className={styles.editProfileUserType}>
          <span>
            <label htmlFor="looking">
              <input type="radio" id="looking" name="userType" value="Looking" />
              <span>Looking</span>
            </label>
          </span>
          <span>
            <label htmlFor="advertising">
              <input type="radio" id="advertising" name="userType" value="Advertising" />
              <span>Advertising</span>
            </label>
          </span>
        </div>
        <div className={styles.editProfileGender}>
          <span>
            <label htmlFor="male">
              <input type="radio" id="male" name="gender" value="Male" />
              <span>Male</span>
            </label>
          </span>
          <span>
            <label htmlFor="female">
              <input type="radio" id="female" name="gender" value="Female" />
              <span>Female</span>
            </label>
          </span>
          <span>
            <label htmlFor="transgender">
              <input type="radio" id="transgender" name="gender" value="Transgender" />
              <span>Transgender</span>
            </label>
          </span>
          <span>
            <label htmlFor="other">
              <input type="radio" id="other" name="gender" value="Other" />
              <span>Other</span>
            </label>
          </span>
        </div>
        <div className={styles.editProfileOccupation}>
          <span>
            <label htmlFor="professional">
              <input type="radio" id="professional" name="occupation" value="Professional" />
              <span>Professional</span>
            </label>
          </span>
          <span>
            <label htmlFor="student">
              <input type="radio" id="student" name="occupation" value="Student" />
              <span>Student</span>
            </label>
          </span>
        </div>
        <div className={styles.editProfileCouple}>
          <span>
            <label htmlFor="non-couple">
              <input type="radio" id="non-couple" name="couple" value="non-couple" />
              <span>Non-Couple</span>
            </label>
          </span>
          <span>
            <label htmlFor="couple">
              <input type="radio" id="couple" name="couple" value="couple" />
              <span>Couple</span>
            </label>
          </span>
        </div>
        <div className={styles.editProfileBudget}>
          <span>
            <label htmlFor="minBudget">
              Minimum Budget
              <input id="minBudget" type="number" />
            </label>
          </span>
          <span>
            <label htmlFor="maxBudget">
              Maximum Budget
              <input id="maxBudget" type="number" />
            </label>
          </span>
        </div>
        <div className={styles.editProfileSmoking}>
          <span>
            <label htmlFor="non-smoking">
              <input type="radio" id="non-smoking" name="smoking" value="Non-Smoking" />
              <span>Non-Smoking</span>
            </label>
          </span>
          <span>
            <label htmlFor="occasionally">
              <input type="radio" id="occasionally" name="smoking" value="Occasionally" />
              <span>Occasionally</span>
            </label>
          </span>
          <span>
            <label htmlFor="smoking">
              <input type="radio" id="smoking" name="smoking" value="Smoking" />
              <span>Smoking</span>
            </label>
          </span>
        </div>
        <div className={styles.editProfilePets}>
          <Select
            options={petsOptions}
            isMulti
            name="pets"
          />
        </div>
        <div className={styles.editProfileAreas}>
          <CreatableSelect
            isMulti
            options={areasOptions}
          />
        </div>
      </form>
    </div>
  );
};

EditProfileFormComponent.propTypes = {
  userProfile: PropTypes.shape({
    about: PropTypes.string,
    areasLooking: PropTypes.arrayOf(PropTypes.string),
    avatar: PropTypes.string,
    couple: PropTypes.string,
    gender: PropTypes.string,
    maxBudget: PropTypes.number,
    minBudget: PropTypes.number,
    name: PropTypes.string.isRequired,
    occupation: PropTypes.string,
    pets: PropTypes.arrayOf(PropTypes.string),
    smoking: PropTypes.string,
    userType: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditProfileFormComponent;
