/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import {
  selectInputDefaultGen, reactSelectOutputFormatter,
} from '../../../utils/profileSettingsUtils';
import styles from './EditProfileFormComponent.module.scss';

const EditProfileFormComponent = ({
  userProfile, handleAccountUpdate, handleAccountDelete,
}) => {
  const {
    about, areasLooking, couple, gender, maxBudget, minBudget, name, occupation, pets,
    smoking, userType, email, id,
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

  const [deleteAccountModal, setDeleteAccountModal] = useState(false);
  const [nameOption, setNameOption] = useState(name);
  const [userTypeOption, setUserTypeOption] = useState(userType);
  const [aboutOption, setAboutOption] = useState(about);
  const [occupationOption, setOccupationOption] = useState(occupation);
  const [genderOption, setGenderOption] = useState(gender);
  const [coupleOption, setCoupleOption] = useState(couple);
  const [smokingOption, setSmokingOption] = useState(smoking);
  const [minBudgetOption, setMinBudgetOption] = useState(minBudget);
  const [maxBudgetOption, setMaxBudgetOption] = useState(maxBudget);
  const [petsOption, setPetsOption] = useState(pets);
  const [areasOption, setAreasOption] = useState(areasLooking);

  const changeName = event => setNameOption(event.target.value);
  const changeUserType = event => setUserTypeOption(event.target.value);
  const changeOccupation = event => setOccupationOption(event.target.value);
  const changeGender = event => setGenderOption(event.target.value);
  const changeCouple = event => setCoupleOption(event.target.value);
  const changeSmoking = event => setSmokingOption(event.target.value);
  const changeAbout = event => setAboutOption(event.target.value);
  const changeMinBudget = event => setMinBudgetOption(event.target.value);
  const changeMaxBudget = event => setMaxBudgetOption(event.target.value);
  const changePets = newValue => {
    setPetsOption(reactSelectOutputFormatter(newValue));
  };
  const changeAreas = newValue => {
    setAreasOption(reactSelectOutputFormatter(newValue));
  };

  const updatedDetails = {
    name: nameOption,
    email,
    userType: userTypeOption,
    about: aboutOption,
    occupation: occupationOption,
    gender: genderOption,
    couple: coupleOption,
    smoking: smokingOption,
    minBudget: minBudgetOption,
    maxBudget: maxBudgetOption,
    pets: petsOption,
    areasLooking: areasOption,
    id,
  };

  return (
    <div className={styles.editProfileFormContainer}>
      <form
        className={styles.editProfileForm}
        onSubmit={event => handleAccountUpdate(event, updatedDetails)}
      >
        <div className={styles.editProfileName}>
          <label htmlFor="name">
            <h3>Your Name</h3>
            <input id="name" type="text" defaultValue={name} onChange={event => changeName(event)} required />
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
            <textarea id="about" type="text" defaultValue={about} onChange={event => changeAbout(event)} />
          </label>
        </div>
        <div className={styles.editProfileBudget}>
          <h3>Your Budget</h3>
          <span>
            <label htmlFor="minBudget">Minimum</label>
            <input id="minBudget" type="number" defaultValue={minBudget} onChange={event => changeMinBudget(event)} />
          </span>
          <span>
            <label htmlFor="maxBudget">Maximum</label>
            <input id="maxBudget" type="number" defaultValue={maxBudget} onChange={event => changeMaxBudget(event)} />
          </span>
        </div>
        <div
          className={styles.editProfileUserType}
          onChange={event => changeUserType(event)}
          value={userTypeOption}
          id="userTypeControl"
        >
          <h3>User Type</h3>
          <span className={styles.looking}>
            <input type="radio" id="looking" name="userType" value="Looking" defaultChecked={userType === 'Looking'} />
            <label htmlFor="looking">Looking</label>
          </span>
          <span className={styles.advertising}>
            <input type="radio" id="advertising" name="userType" value="Advertising" defaultChecked={userType === 'Advertising'} />
            <label htmlFor="advertising">Advertising</label>
          </span>
        </div>
        <div
          className={styles.editProfileGender}
          onChange={event => changeGender(event)}
        >
          <h3>Your Gender</h3>
          <span>
            <input type="radio" id="male" name="gender" value="Male" defaultChecked={gender === 'Male'} />
            <label htmlFor="male">Male</label>
          </span>
          <span>
            <input type="radio" id="female" name="gender" value="Female" defaultChecked={gender === 'Female'} />
            <label htmlFor="female">Female</label>
          </span>
          <span>
            <input type="radio" id="transgender" name="gender" value="Transgender" defaultChecked={gender === 'Transgender'} />
            <label htmlFor="transgender">Transgender</label>
          </span>
          <span>
            <input type="radio" id="other" name="gender" value="Other" defaultChecked={gender === 'Other'} />
            <label htmlFor="other">Other</label>
          </span>
        </div>
        <div
          className={styles.editProfileOccupation}
          onChange={event => changeOccupation(event)}
        >
          <h3>Your Occupation</h3>
          <span>
            <input type="radio" id="professional" name="occupation" value="Professional" defaultChecked={occupation === 'Professional'} />
            <label htmlFor="professional">Professional</label>
          </span>
          <span>
            <input type="radio" id="student" name="occupation" value="Student" defaultChecked={occupation === 'Student'} />
            <label htmlFor="student">Student</label>
          </span>
        </div>
        <div
          className={styles.editProfileCouple}
          onChange={event => changeCouple(event)}
        >
          <h3>Couple Or Non-Couple</h3>
          <span>
            <input type="radio" id="non-couple" name="couple" value="Non-Couple" defaultChecked={couple === 'Non-Couple'} />
            <label htmlFor="non-couple">Non-Couple</label>
          </span>
          <span>
            <input type="radio" id="couple" name="couple" value="Couple" defaultChecked={couple === 'Couple'} />
            <label htmlFor="couple">Couple</label>
          </span>
        </div>
        <div
          className={styles.editProfileSmoking}
          onChange={event => changeSmoking(event)}
        >
          <h3>Smoking Status</h3>
          <span>
            <input type="radio" id="non-smoking" name="smoking" value="Non-Smoking" defaultChecked={smoking === 'Non-Smoking'} />
            <label htmlFor="non-smoking">Non-Smoking</label>
          </span>
          <span>
            <input type="radio" id="occasionally" name="smoking" value="Occasionally" defaultChecked={smoking === 'Occasionally'} />
            <label htmlFor="occasionally">Occasionally</label>
          </span>
          <span>
            <input type="radio" id="smoking" name="smoking" value="Smoking" defaultChecked={smoking === 'Smoking'} />
            <label htmlFor="smoking">Smoking</label>
          </span>
        </div>
        <div className={styles.editProfilePets}>
          <h3>Your Pets</h3>
          <Select
            defaultValue={selectInputDefaultGen(pets)}
            options={petsOptions}
            isMulti
            onChange={event => changePets(event)}
            name="pets"
          />
        </div>
        <div className={styles.editProfileAreas}>
          <h3>Areas You Are Interested In</h3>
          <CreatableSelect
            defaultValue={selectInputDefaultGen(areasLooking)}
            isMulti
            options={areasOptions}
            onChange={event => changeAreas(event)}
          />
        </div>
        <div className={styles.editProfileSubmitButton}>
          <button type="submit">
            Update Account
          </button>
        </div>
      </form>
      <div className={styles.editProfileDeleteAccount}>
        <div className={styles.editProfileDeleteButton}>
          <button type="submit" onClick={() => setDeleteAccountModal(true)}>
            Delete Account
          </button>
        </div>
        {
          deleteAccountModal ? (
            <div className={styles.editProfileDeleteModal}>
              <form
                className={styles.editProfileDeleteModalContent}
                onSubmit={event => handleAccountDelete(event)}
              >
                <div>
                  <span
                    className={styles.modalClose}
                    onClick={() => setDeleteAccountModal(false)}
                    onKeyUp={() => setDeleteAccountModal(false)}
                    role="button"
                    tabIndex="-1"
                  >
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </span>
                  <h2>Delete Account</h2>
                  <div className={styles.modalMessage}>
                    <p>Are you sure you want to delete your account?</p>
                    <p><strong>This action is irreversible.</strong></p>
                  </div>
                </div>
                <div className={styles.modalConfirm}>
                  <label htmlFor="email">
                    <h3>Confirm Your Email</h3>
                    <input id="email" type="email" placeholder="Enter Your Email Address" />
                  </label>
                </div>
                <div className={styles.modalButton}>
                  <button type="submit">
                    Delete Account
                  </button>
                </div>
              </form>
            </div>
          ) : (
            null
          )
        }
      </div>
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
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  handleAccountUpdate: PropTypes.func.isRequired,
  handleAccountDelete: PropTypes.func.isRequired,
};

export default EditProfileFormComponent;
