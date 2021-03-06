/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { arrayToString } from '../../../../utils/managePropertiesUtils';
import formValidator from '../../../../utils/FormUtils';
import FormErrorComponent from '../../../../common/FormErrorComponent/FormErrorComponent';
import {
  selectInputDefaultGen, reactSelectOutputFormatter,
} from '../../../../utils/profileSettingsUtils';
import styles from './EditProfileFormComponent.module.scss';

const EditProfileFormComponent = ({
  userProfile, handleAccountUpdate, handleAccountDelete, managedPropertyCount,
  setProfileUpdateType,
}) => {
  const {
    about, areasLooking, couple, gender, maxBudget, minBudget, name, occupation, pets,
    smoking, userType, email, id, advertiserType, dob,
  } = userProfile;
  const petsOptions = [
    { value: 'Dogs', label: 'Dogs' },
    { value: 'Cats', label: 'Cats' },
    { value: 'Birds', label: 'Birds' },
    { value: 'Rodents', label: 'Rodents' },
    { value: 'Reptiles', label: 'Reptiles' },
    { value: 'Other', label: 'Other' },
    { value: 'None', label: 'None' },
  ];

  const areasOptions = [
    { value: 'Camden', label: 'Camden' },
    { value: 'Belgravia', label: 'Belgravia' },
    { value: 'Abbey Road', label: 'Abbey Road' },
    { value: 'Maida Vale', label: 'Maida Vale' },
    { value: 'Clapham Common', label: 'Clapham Common' },
    { value: 'Shad Thames', lable: 'Shad Thames' },
  ];

  const [deleteAccountModal, setDeleteAccountModal] = useState(false);
  const [changeUserWarningModal, setChangeUserWarningModal] = useState(false);
  const userTypeRef = useRef(null);
  const advertiserTypeRef = useRef(null);

  const [nameOption, setNameOption] = useState(name);
  const [nameOptionError, setNameOptionError] = useState(null);
  const [userTypeOption, setUserTypeOption] = useState(userType);
  const [userTypeOptionError, setUserTypeOptionError] = useState(null);
  const [advertiserTypeOption, setAdvertiserTypeOption] = useState(advertiserType);
  const [advertiserTypeOptionError, setAdvertiserTypeOptionError] = useState(null);
  const [aboutOption, setAboutOption] = useState(about);
  const [aboutOptionError, setAboutOptionError] = useState(null);
  const [occupationOption, setOccupationOption] = useState(occupation);
  const [genderOption, setGenderOption] = useState(gender);
  const [coupleOption, setCoupleOption] = useState(couple);
  const [smokingOption, setSmokingOption] = useState(smoking);
  const [minBudgetOption, setMinBudgetOption] = useState(minBudget);
  const [maxBudgetOption, setMaxBudgetOption] = useState(maxBudget);
  const [petsOption, setPetsOption] = useState(pets);
  const [areasOption, setAreasOption] = useState(areasLooking);
  const [areasOptionError, setAreasOptionError] = useState(null);
  const [dobOption, setDobOption] = useState(dob);
  const [dobOptionError, setDobOptionError] = useState(null);
  const [errorAlert, setErrorAlert] = useState(null);

  const changeName = event => setNameOption(event.target.value);
  const changeUserType = event => setUserTypeOption(event.target.value);
  const changeAdvertiserType = event => setAdvertiserTypeOption(event.target.value);
  const changeOccupation = event => setOccupationOption(event.target.value);
  const changeGender = event => setGenderOption(event.target.value);
  const changeCouple = event => setCoupleOption(event.target.value);
  const changeSmoking = event => setSmokingOption(event.target.value);
  const changeAbout = event => setAboutOption(event.target.value);
  const changeMinBudget = event => setMinBudgetOption(event.target.value);
  const changeMaxBudget = event => setMaxBudgetOption(event.target.value);
  const changeDob = event => setDobOption(event.target.value);
  const changePets = newValue => {
    setPetsOption(reactSelectOutputFormatter(newValue));
  };
  const changeAreas = newValue => {
    setAreasOption(reactSelectOutputFormatter(newValue));
  };

  const handleUserChangeWarningModal = event => {
    if (event.target.value === 'Looking' && userTypeOption === 'Advertising' && managedPropertyCount > 0) {
      setChangeUserWarningModal(true);
    } else if (event.target.value === 'Looking' && userTypeOption === 'Advertising' && !managedPropertyCount) {
      setAdvertiserTypeOption(null);
      changeUserType(event);
    } else {
      changeUserType(event);
      setTimeout(() => {
        advertiserTypeRef.current.click();
      }, 100);
    }
  };

  const handleUserChangeWarningModalClose = () => {
    userTypeRef.current.click();
    setChangeUserWarningModal(false);
  };

  const handleUserChangeWarningModalSubmit = () => {
    setProfileUpdateType('profileTypeChange');
    setUserTypeOption('Looking');
    setAdvertiserTypeOption(null);
    setChangeUserWarningModal(false);
  };

  const validateForm = () => {
    const errors = [];
    if (formValidator(nameOption, 'name')) {
      setNameOptionError(formValidator(nameOption, 'name'));
      errors.push('name');
    }
    if (formValidator(aboutOption, 'about')) {
      setAboutOptionError(formValidator(aboutOption, 'about'));
      errors.push('about');
    }
    if (formValidator(userTypeOption, 'userType')) {
      setUserTypeOptionError(formValidator(userTypeOption, 'userType'));
      errors.push('userType');
    }
    if (userTypeOption === 'Advertising') {
      if (formValidator(advertiserTypeOption, 'advertiserType')) {
        setAdvertiserTypeOptionError(formValidator(advertiserTypeOption, 'advertiserType'));
        errors.push('advertiserType');
      }
    }
    if (formValidator(dobOption, 'dob')) {
      setDobOptionError(formValidator(dobOption, 'dob'));
      errors.push('dob');
    }
    if (areasOption.length) {
      if (formValidator(arrayToString(areasOption), 'areasLooking')) {
        setAreasOptionError(formValidator(arrayToString(areasOption), 'areasLooking'));
        errors.push('areas');
      }
    }
    return errors;
  };

  const updatedDetails = {
    name: nameOption,
    email,
    dob: dobOption,
    userType: userTypeOption,
    advertiserType: advertiserTypeOption,
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

  const handleFormSubmission = event => {
    event.preventDefault();
    const validation = validateForm();
    if (validation.length === 0) {
      setErrorAlert(null);
      handleAccountUpdate(updatedDetails);
    } else {
      setErrorAlert('Please check the form for errors.');
    }
  };

  return (
    <div className={styles.editProfileFormContainer}>
      <form
        className={styles.editProfileForm}
        onSubmit={handleFormSubmission}
      >
        <div className={styles.textInput}>
          <label htmlFor="name">
            <h3>Your Name *</h3>
            <FormErrorComponent errorMessage={nameOptionError} />
            <input id="name" type="text" defaultValue={name} onChange={event => changeName(event)} required />
          </label>
        </div>
        <div className={styles.textInput}>
          <label htmlFor="age">
            <h3>Date Of Birth *</h3>
            <FormErrorComponent errorMessage={dobOptionError} />
            <input id="dob" type="date" defaultValue={dob} onChange={event => changeDob(event)} />
          </label>
        </div>
        <div className={`${styles.textInput} ${styles.aboutInput}`}>
          <label htmlFor="about">
            <h3>About You</h3>
            <FormErrorComponent errorMessage={aboutOptionError} />
            <textarea id="about" type="text" defaultValue={about} onChange={event => changeAbout(event)} />
          </label>
        </div>
        {
          userTypeOption === 'Looking' ? (
            <div className={styles.budgetInput}>
              <h3>Your Budget *</h3>
              <div>
                <span>
                  <label htmlFor="minBudget">Minimum</label>
                  <input id="minBudget" type="number" min="0" max={maxBudgetOption} defaultValue={minBudget} onChange={event => changeMinBudget(event)} />
                </span>
                <span>
                  <label htmlFor="maxBudget">Maximum</label>
                  <input id="maxBudget" type="number" defaultValue={maxBudget} min={minBudgetOption} onChange={event => changeMaxBudget(event)} />
                </span>
              </div>
            </div>
          ) : (
            null
          )
        }
        <div
          className={styles.radioInput}
          onChange={event => handleUserChangeWarningModal(event)}
          value={userTypeOption}
          id="userTypeControl"
        >
          <h3>User Type *</h3>
          <FormErrorComponent errorMessage={userTypeOptionError} />
          <span className={styles.looking}>
            <input type="radio" id="looking" name="userType" value="Looking" defaultChecked={userType === 'Looking'} />
            <label htmlFor="looking">Looking</label>
          </span>
          <span className={styles.advertising}>
            <input type="radio" id="advertising" name="userType" value="Advertising" defaultChecked={userType === 'Advertising'} ref={userTypeRef} />
            <label htmlFor="advertising">Advertising</label>
          </span>
        </div>
        {
          userTypeOption === 'Advertising' ? (
            <div
              className={styles.radioInput}
              onChange={event => changeAdvertiserType(event)}
            >
              {
              managedPropertyCount <= 1 ? (
                <>
                  <h3>Advertiser Type</h3>
                  <FormErrorComponent errorMessage={advertiserTypeOptionError} />
                  <span>
                    <input type="radio" id="flatmate" name="advertiserType" value="Flatmate" defaultChecked={advertiserType === 'Flatmate'} ref={advertiserTypeRef} />
                    <label htmlFor="flatmate">Flatmate</label>
                  </span>
                  <span>
                    <input type="radio" id="landlord" name="advertiserType" value="Landlord" defaultChecked={advertiserType === 'Landlord'} />
                    <label htmlFor="landlord">Landlord</label>
                  </span>
                </>
              ) : (
                <>
                  <h3>Advertiser Type</h3>
                  <FormErrorComponent errorMessage={advertiserTypeOptionError} />
                  <span className={styles.disabledRadio}>
                    <input type="radio" id="flatmate" name="advertiserType" value="Flatmate" disabled defaultChecked={advertiserType === 'Flatmate'} />
                    <label htmlFor="flatmate">Flatmate</label>
                  </span>
                  <span>
                    <input type="radio" id="landlord" name="advertiserType" value="Landlord" defaultChecked={advertiserType === 'Landlord'} />
                    <label htmlFor="landlord">Landlord</label>
                  </span>
                </>
              )
            }
            </div>
          ) : (
            null
          )
        }
        {
          changeUserWarningModal ? (
            <div className={styles.propertyManagementWarningModal}>
              <div className={styles.propertyManagementWarningModalContent}>
                <h2>Warning!</h2>
                <h4>
                  You currently have
                  {' '}
                  <span>{managedPropertyCount}</span>
                  {' '}
                  managed properties under your account.
                </h4>
                <div className={styles.propertyManagementWarningModalMessage}>
                  <p>
                    Changing your account to
                    {' '}
                    <span>Looking</span>
                    {' '}
                    will remove
                    {' '}
                    <strong>all</strong>
                    {' '}
                    of your properties.
                  </p>
                  <p>Do you want to continue?</p>
                </div>
                <div className={styles.modalButton}>
                  <button className={styles.goBackButton} type="button" onClick={handleUserChangeWarningModalClose}>
                    Go Back
                  </button>
                  <button className={styles.confirmButton} type="button" onClick={handleUserChangeWarningModalSubmit}>
                    Continue
                  </button>
                </div>
              </div>
            </div>
          ) : (
            null
          )
        }
        <div
          className={styles.radioInput}
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
          <span>
            <input type="radio" id="no gender" name="gender" value="" />
            <label htmlFor="no gender">Prefer Not To Say</label>
          </span>
        </div>
        {
          advertiserTypeOption !== 'Landlord' ? (
            <>
              <div
                className={styles.radioInput}
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
                <span>
                  <input type="radio" id="no occupation" name="occupation" value="" />
                  <label htmlFor="no occupation">Prefer Not To Say</label>
                </span>
              </div>
              <div
                className={styles.radioInput}
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
                <span>
                  <input type="radio" id="no couple" name="couple" value="" />
                  <label htmlFor="no couple">Prefer Not To Say</label>
                </span>
              </div>
              <div
                className={styles.radioInput}
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
                <span>
                  <input type="radio" id="no smoking" name="smoking" value="" />
                  <label htmlFor="no smoking">Prefer Not To Say</label>
                </span>
              </div>
              <div className={styles.reactSelectInputContainer}>
                <h3>Your Pets</h3>
                <Select
                  defaultValue={selectInputDefaultGen(pets)}
                  options={petsOptions}
                  isMulti
                  onChange={event => changePets(event)}
                  name="pets"
                />
              </div>
              <div className={styles.reactSelectInputContainer}>
                <h3>Areas You Are Interested In</h3>
                <FormErrorComponent errorMessage={areasOptionError} />
                <CreatableSelect
                  defaultValue={selectInputDefaultGen(areasLooking)}
                  isMulti
                  options={areasOptions}
                  onChange={event => changeAreas(event)}
                />
              </div>
            </>
          ) : (
            null
          )
        }
        <div className={styles.submitErrorContainer}>
          <FormErrorComponent errorMessage={errorAlert} />
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
    advertiserType: PropTypes.string,
    dob: PropTypes.string.isRequired,
  }).isRequired,
  managedPropertyCount: PropTypes.number.isRequired,
  handleAccountUpdate: PropTypes.func.isRequired,
  handleAccountDelete: PropTypes.func.isRequired,
  setProfileUpdateType: PropTypes.func.isRequired,
};

export default EditProfileFormComponent;
