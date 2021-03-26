/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { genderArrayParser, occupationArrayParser } from '../../../../utils/managePropertiesUtils';
import { reactSelectOutputFormatter } from '../../../../utils/profileSettingsUtils';
import styles from './NewPropertyFormComponent.module.scss';

const NewPropertyFormComponent = ({ handleNewPropertySubmission, id }) => {
  const [addressOption, setAddressOption] = useState(null);
  const [billsOption, setBillsOption] = useState(null);
  const [blurbOption, setBlurbOption] = useState(null);
  const [depositOption, setDepositOption] = useState(null);
  const [disabledAccessOption, setDisabledAccessOption] = useState(null);
  const [furnishedOption, setFurnishedOption] = useState(null);
  const [internetOption, setInternetOption] = useState(null);
  const [maxAgeOption, setMaxAgeOption] = useState(null);
  const [minAgeOption, setMinAgeOption] = useState(null);
  const [occupantCountOption, setOccupantCountOption] = useState(null);
  const [outsideAreaOption, setOutsideAreaOption] = useState(null);
  const [parkingOption, setParkingOption] = useState(null);
  const [petsOption, setPetsOption] = useState(null);
  const [priceOption, setPriceOption] = useState(null);
  const [roomCountOption, setRoomCountOption] = useState(null);
  const [smokingOption, setSmokingOption] = useState(null);
  const [titleOption, setTitleOption] = useState(null);
  const [townOption, setTownOption] = useState(null);
  const [postcodeOption, setPostcodeOption] = useState(null);
  const [maleCountOption, setMaleCountOption] = useState(null);
  const [femaleCountOption, setFemaleCountOption] = useState(null);
  const [transCountOption, setTransCountOption] = useState(null);
  const [otherCountOption, setOtherCountOption] = useState(null);
  const [professionalCountOption, setProfessionalCountOption] = useState(null);
  const [studentCountOption, setStudentCountOption] = useState(null);

  const outsideAreaSelectOptions = [
    { value: 'Garden', label: 'Garden' },
    { value: 'Terrace', label: 'Terrace' },
    { value: 'Patio', label: 'Patio' },
    { value: 'Balcony', label: 'Balcony' },
    { value: 'Other', label: 'Other' },
  ];

  const petsSelectOptions = [
    { value: 'Cats', label: 'Cats' },
    { value: 'Dogs', label: 'Dogs' },
    { value: 'Rodents', label: 'Rodents' },
    { value: 'Fish', label: 'Fish' },
    { value: 'Reptiles', label: 'Reptiles' },
    { value: 'Birds', label: 'Birds' },
    { value: 'Other', label: 'Other' },
    { value: 'None', label: 'None' },
  ];

  const occupationsSelectOptions = [
    { value: 'Professional', label: 'Professional' },
    { value: 'Student', label: 'Student' },
  ];

  const gendersReduced = genderArrayParser(
    maleCountOption, femaleCountOption, transCountOption, otherCountOption,
  );
  const occupationsReduced = occupationArrayParser(
    professionalCountOption, studentCountOption,
  );

  const newPropertyDetails = {
    ownerId: id,
    title: titleOption,
    blurb: blurbOption,
    address: addressOption,
    town: townOption,
    postcode: postcodeOption,
    price: priceOption,
    bills: billsOption,
    parking: parkingOption,
    deposit: depositOption,
    minAge: minAgeOption,
    maxAge: maxAgeOption,
    internet: internetOption,
    genders: gendersReduced,
    furnished: furnishedOption,
    disabledAccess: disabledAccessOption,
    occupantCount: occupantCountOption,
    occupations: occupationsReduced,
    outsideArea: outsideAreaOption,
    pets: petsOption,
    roomCount: roomCountOption,
    smoking: smokingOption,
  };

  return (
    <div>
      <form
        onSubmit={event => handleNewPropertySubmission(event, newPropertyDetails)}
        className={styles.newPropertyFormContainer}
      >
        <input type="hidden" value={id} />

        <div
          onChange={event => setTitleOption(event.target.value)}
          className={styles.textInputContainer}
        >
          <label htmlFor="title">
            <h3>Title *</h3>
            <input type="text" id="title" placeholder="Give your property a title..." required />
          </label>
        </div>

        <div
          onChange={event => setBlurbOption(event.target.value)}
          className={styles.textInputContainer}
        >
          <label htmlFor="blurb">
            <h3>Description *</h3>
            <textarea id="blurb" placeholder="Add a short description of the property" required />
          </label>
        </div>

        <div
          onChange={event => setAddressOption(event.target.value)}
          className={styles.textInputContainer}
        >
          <label htmlFor="address">
            <h3>Address *</h3>
            <input type="text" id="address" placeholder="Enter the first line address..." required />
          </label>
        </div>

        <div
          onChange={event => setTownOption(event.target.value)}
          className={styles.textInputContainer}
        >
          <label htmlFor="town">
            <h3>Town *</h3>
            <input type="text" id="town" placeholder="Enter the town..." required />
          </label>
        </div>

        <div
          onChange={event => setPostcodeOption(event.target.value)}
          className={styles.textInputContainer}
        >
          <label htmlFor="postcode">
            <h3>Postcode / ZipCode *</h3>
            <input type="text" id="postcode" placeholder="Enter the postcode for this property..." required />
          </label>
        </div>

        <div
          onChange={event => setPriceOption(event.target.value)}
          className={styles.textInputContainer}
        >
          <label htmlFor="price">
            <h3>Rent *</h3>
            <input type="number" id="price" placeholder="Enter the price of rental per month..." required />
          </label>
        </div>

        <div
          onChange={event => setBillsOption(event.target.value)}
          className={styles.radioField}
        >
          <h3>Are Bills Included? *</h3>
          <span>
            <input type="radio" id="included" name="bills" value="Included" required />
            <label htmlFor="included">Included</label>
          </span>
          <span>
            <input type="radio" id="notIncluded" name="bills" value="Not Included" />
            <label htmlFor="notIncluded">Not Included</label>
          </span>
        </div>

        <div
          onChange={event => setDepositOption(event.target.value)}
          className={styles.textInputContainer}
        >
          <label htmlFor="deposit">
            <h3>How Much Is The Deposit? *</h3>
            <input type="number" id="deposit" placeholder="Enter the total deposit..." />
          </label>
        </div>

        <div
          onChange={event => setFurnishedOption(event.target.value)}
          className={styles.radioField}
        >
          <h3>Is The Space For Rent Furnished? *</h3>
          <span>
            <input type="radio" id="furnished" name="furnished" value="Furnished" required />
            <label htmlFor="furnished">Furnished</label>
          </span>
          <span>
            <input type="radio" id="notFurnished" name="furnished" value="Non-Furnished" />
            <label htmlFor="notFurnished">Non-Furnished</label>
          </span>
        </div>

        <div
          onChange={event => setParkingOption(event.target.value)}
          className={styles.radioField}
        >
          <h3>Is There Parking? *</h3>
          <span>
            <input type="radio" id="parking" name="parking" value="Parking" required />
            <label htmlFor="parking">Parking</label>
          </span>
          <span>
            <input type="radio" id="noParking" name="parking" value="No Parking" />
            <label htmlFor="noParking">No Parking</label>
          </span>
        </div>

        <div
          onChange={event => setOccupantCountOption(event.target.value)}
          className={styles.textInputContainer}
        >
          <label htmlFor="occupantCount">
            <h3>How Many People Live Here Currently? *</h3>
            <input type="number" id="occupantCount" placeholder="Enter the number of current flatmates..." required />
          </label>
        </div>

        <div
          onChange={event => setRoomCountOption(event.target.value)}
          className={styles.textInputContainer}
        >
          <label htmlFor="roomCount">
            <h3>How Many Rooms Are Available? *</h3>
            <input type="number" id="roomCount" placeholder="Enter the number of empty rooms..." required />
          </label>
        </div>

        <div className={styles.reactSelectInput}>
          <h3>Are There Any Outside Areas?</h3>
          <Select
            className={styles.reactSelectInput}
            options={outsideAreaSelectOptions}
            isMulti
            onChange={event => setOutsideAreaOption(reactSelectOutputFormatter(event))}
            name="outsideAreas"
          />
        </div>

        <div
          onChange={event => setDisabledAccessOption(event.target.value)}
          className={styles.radioField}
        >
          <h3>Is There Disabled Access?</h3>
          <span>
            <input type="radio" id="disabledAccess" name="disabledAccess" value="Disabled Access" />
            <label htmlFor="disabledAccess">Disabled Access</label>
          </span>
          <span>
            <input type="radio" id="noDisabledAccess" name="disabledAccess" value="No Disabled Access" />
            <label htmlFor="noDisabledAccess">No Disabled Access</label>
          </span>
        </div>

        <div
          onChange={event => setInternetOption(event.target.value)}
          className={styles.radioField}
        >
          <h3>Is Internet Provided?</h3>
          <span>
            <input type="radio" id="internet" name="internet" value="Internet Included" />
            <label htmlFor="internet">Internet Provided</label>
          </span>
          <span>
            <input type="radio" id="noInternet" name="internet" value="No Internet Included" />
            <label htmlFor="noInternet">No Internet Provided</label>
          </span>
        </div>

        <div className={styles.propertyAges}>
          <div onChange={event => setMinAgeOption(event.target.value)}>
            <label htmlFor="minAge">
              <h3>Lowest Age</h3>
              <input type="number" id="minAge" />
            </label>
          </div>

          <div onChange={event => setMaxAgeOption(event.target.value)}>
            <label htmlFor="maxAge">
              <h3>Highest Age</h3>
              <input type="number" id="maxAge" />
            </label>
          </div>
        </div>

        <div
          onChange={event => setSmokingOption(event.target.value)}
          className={styles.radioField}
        >
          <h3>Is Smoking Allowed?</h3>
          <span>
            <input type="radio" id="smoking" name="smoking" value="Smoking" />
            <label htmlFor="smoking">Smoking</label>
          </span>
          <span>
            <input type="radio" id="nonSmoking" name="smoking" value="Non-Smoking" />
            <label htmlFor="nonSmoking">Non-Smoking</label>
          </span>
          <span>
            <input type="radio" id="anySmoking" name="smoking" value="Any" />
            <label htmlFor="anySmoking">Any</label>
          </span>
        </div>
        <div className={styles.reactSelectInput}>
          <h3>Are There Any Pets?</h3>
          <Select
            className={styles.reactSelectInput}
            options={petsSelectOptions}
            isMulti
            onChange={event => setPetsOption(reactSelectOutputFormatter(event))}
            name="pets"
          />
        </div>

        <div className={styles.genderInputContainer}>
          <h3>How Many Of Each Gender Is There?</h3>
          <div>
            <span>
              <label htmlFor="male">
                <h4>Male</h4>
                <input type="number" id="male" min="0" onChange={event => setMaleCountOption(event.target.value)} />
              </label>
            </span>
            <span>
              <label htmlFor="female">
                <h4>Female</h4>
                <input type="number" id="female" min="0" onChange={event => setFemaleCountOption(event.target.value)} />
              </label>
            </span>
            <span>
              <label htmlFor="trans">
                <h4>Trans</h4>
                <input type="number" id="trans" min="0" onChange={event => setTransCountOption(event.target.value)} />
              </label>
            </span>
            <span>
              <label htmlFor="other">
                <h4>Other</h4>
                <input type="number" id="other" min="0" onChange={event => setOtherCountOption(event.target.value)} />
              </label>
            </span>
          </div>
        </div>

        <div className={styles.occupationsInputContainer}>
          <h3>How Many Professionals & Students Are There?</h3>
          <div>
            <span>
              <label htmlFor="professional">
                <h4>Professional</h4>
                <input type="number" id="professional" min="0" onChange={event => setProfessionalCountOption(event.target.value)} />
              </label>
            </span>
            <span>
              <label htmlFor="student">
                <h4>Student</h4>
                <input type="number" id="student" min="0" onChange={event => setStudentCountOption(event.target.value)} />
              </label>
            </span>
          </div>
        </div>

        <hr className={styles.formEnd} />

        <div className={styles.submitButton}>
          <button type="submit">
            Create Property
          </button>
        </div>
      </form>
    </div>
  );
};

NewPropertyFormComponent.propTypes = {
  handleNewPropertySubmission: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default NewPropertyFormComponent;
