/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { genderArrayParser, occupationArrayParser, arrayCount } from '../../utils/managePropertiesUtils';
import { reactSelectOutputFormatter, selectInputDefaultGen } from '../../utils/profileSettingsUtils';
import styles from './PropertyFormComponent.module.scss';

const PropertyFormComponent = ({ handleFormSubmission, id, singleProperty = null }) => {
  const [addressOption, setAddressOption] = useState(singleProperty.address);
  const [billsOption, setBillsOption] = useState(singleProperty.bills);
  const [blurbOption, setBlurbOption] = useState(singleProperty.blurb);
  const [depositOption, setDepositOption] = useState(singleProperty.deposit);
  const [disabledAccessOption, setDisabledAccessOption] = useState(singleProperty.disabledAccess);
  const [furnishedOption, setFurnishedOption] = useState(singleProperty.furnished);
  const [internetOption, setInternetOption] = useState(singleProperty.internet);
  const [maxAgeOption, setMaxAgeOption] = useState(singleProperty.maxAge);
  const [minAgeOption, setMinAgeOption] = useState(singleProperty.minAge);
  const [occupantCountOption, setOccupantCountOption] = useState(singleProperty.occupantCount);
  const [outsideAreaOption, setOutsideAreaOption] = useState(singleProperty.outsideArea);
  const [parkingOption, setParkingOption] = useState(singleProperty.parking);
  const [petsOption, setPetsOption] = useState(singleProperty.pets);
  const [priceOption, setPriceOption] = useState(singleProperty.price);
  const [roomCountOption, setRoomCountOption] = useState(singleProperty.roomCount);
  const [smokingOption, setSmokingOption] = useState(singleProperty.smoking);
  const [titleOption, setTitleOption] = useState(singleProperty.title);
  const [townOption, setTownOption] = useState(singleProperty.town);
  const [postcodeOption, setPostcodeOption] = useState(singleProperty.town);
  const [maleCountOption, setMaleCountOption] = useState(arrayCount('Male', singleProperty.genders));
  const [femaleCountOption, setFemaleCountOption] = useState(arrayCount('Female', singleProperty.genders));
  const [transCountOption, setTransCountOption] = useState(arrayCount('Transgender', singleProperty.genders));
  const [otherCountOption, setOtherCountOption] = useState(arrayCount('Other', singleProperty.genders));
  const [professionalCountOption, setProfessionalCountOption] = useState(arrayCount('Professional', singleProperty.occupations));
  const [studentCountOption, setStudentCountOption] = useState(arrayCount('Student', singleProperty.occupations));

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

  const gendersReduced = genderArrayParser(
    maleCountOption, femaleCountOption, transCountOption, otherCountOption,
  );
  const occupationsReduced = occupationArrayParser(
    professionalCountOption, studentCountOption,
  );

  const PropertyDetails = {
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
        onSubmit={event => handleFormSubmission(event, PropertyDetails)}
        className={styles.newPropertyFormContainer}
      >
        <input type="hidden" value={id} />

        <div
          onChange={event => setTitleOption(event.target.value)}
          className={styles.textInputContainer}
        >
          <label htmlFor="title">
            <h3>Title *</h3>
            <input type="text" id="title" placeholder="Give your property a title..." defaultValue={titleOption} required />
          </label>
        </div>

        <div
          onChange={event => setBlurbOption(event.target.value)}
          className={styles.textInputContainer}
        >
          <label htmlFor="blurb">
            <h3>Description *</h3>
            <textarea id="blurb" placeholder="Add a short description of the property" defaultValue={blurbOption} required />
          </label>
        </div>

        <div
          onChange={event => setAddressOption(event.target.value)}
          className={styles.textInputContainer}
        >
          <label htmlFor="address">
            <h3>Address *</h3>
            <input type="text" id="address" placeholder="Enter the first line address..." defaultValue={addressOption} required />
          </label>
        </div>

        <div
          onChange={event => setTownOption(event.target.value)}
          className={styles.textInputContainer}
        >
          <label htmlFor="town">
            <h3>Town *</h3>
            <input type="text" id="town" placeholder="Enter the town..." defaultValue={townOption} required />
          </label>
        </div>

        <div
          onChange={event => setPostcodeOption(event.target.value)}
          className={styles.textInputContainer}
        >
          <label htmlFor="postcode">
            <h3>Postcode / ZipCode *</h3>
            <input type="text" id="postcode" placeholder="Enter the postcode for this singleProperty..." defaultValue={postcodeOption} required />
          </label>
        </div>

        <div
          onChange={event => setPriceOption(event.target.value)}
          className={styles.textInputContainer}
        >
          <label htmlFor="price">
            <h3>Rent *</h3>
            <input type="number" id="price" placeholder="Enter the price of rental per month..." defaultValue={priceOption} required />
          </label>
        </div>

        <div
          onChange={event => setBillsOption(event.target.value)}
          className={styles.radioField}
        >
          <h3>Are Bills Included? *</h3>
          <span>
            <input type="radio" id="included" name="bills" value="Included" defaultChecked={billsOption === 'Included'} required />
            <label htmlFor="included">Included</label>
          </span>
          <span>
            <input type="radio" id="notIncluded" name="bills" value="Not Included" defaultChecked={billsOption === 'Not Included'} />
            <label htmlFor="notIncluded">Not Included</label>
          </span>
        </div>

        <div
          onChange={event => setDepositOption(event.target.value)}
          className={styles.textInputContainer}
        >
          <label htmlFor="deposit">
            <h3>How Much Is The Deposit? *</h3>
            <input type="number" id="deposit" placeholder="Enter the total deposit..." defaultValue={depositOption} />
          </label>
        </div>

        <div
          onChange={event => setFurnishedOption(event.target.value)}
          className={styles.radioField}
        >
          <h3>Is The Space For Rent Furnished? *</h3>
          <span>
            <input type="radio" id="furnished" name="furnished" value="Furnished" defaultChecked={furnishedOption === 'Furnished'} required />
            <label htmlFor="furnished">Furnished</label>
          </span>
          <span>
            <input type="radio" id="notFurnished" name="furnished" value="Non-Furnished" defaultChecked={furnishedOption === 'Non-Furnished'} />
            <label htmlFor="notFurnished">Non-Furnished</label>
          </span>
        </div>

        <div
          onChange={event => setParkingOption(event.target.value)}
          className={styles.radioField}
        >
          <h3>Is There Parking? *</h3>
          <span>
            <input type="radio" id="parking" name="parking" value="Parking" defaultChecked={parkingOption === 'Parking'} required />
            <label htmlFor="parking">Parking</label>
          </span>
          <span>
            <input type="radio" id="noParking" name="parking" value="No Parking" defaultChecked={parkingOption === 'No Parking'} />
            <label htmlFor="noParking">No Parking</label>
          </span>
        </div>

        <div
          onChange={event => setOccupantCountOption(event.target.value)}
          className={styles.textInputContainer}
        >
          <label htmlFor="occupantCount">
            <h3>How Many People Live Here Currently? *</h3>
            <input type="number" id="occupantCount" placeholder="Enter the number of current flatmates..." defaultValue={occupantCountOption} required />
          </label>
        </div>

        <div
          onChange={event => setRoomCountOption(event.target.value)}
          className={styles.textInputContainer}
        >
          <label htmlFor="roomCount">
            <h3>How Many Rooms Are Available? *</h3>
            <input type="number" id="roomCount" placeholder="Enter the number of empty rooms..." defaultValue={roomCountOption} required />
          </label>
        </div>

        <div className={styles.reactSelectInput}>
          <h3>Are There Any Outside Areas?</h3>
          <Select
            defaultValue={selectInputDefaultGen(singleProperty.outsideArea)}
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
            <input type="radio" id="disabledAccess" name="disabledAccess" value="Disabled Access" defaultChecked={disabledAccessOption === 'Disabled Access'} />
            <label htmlFor="disabledAccess">Disabled Access</label>
          </span>
          <span>
            <input type="radio" id="noDisabledAccess" name="disabledAccess" value="No Disabled Access" defaultChecked={disabledAccessOption === 'No Disabled Access'} />
            <label htmlFor="noDisabledAccess">No Disabled Access</label>
          </span>
        </div>

        <div
          onChange={event => setInternetOption(event.target.value)}
          className={styles.radioField}
        >
          <h3>Is Internet Provided?</h3>
          <span>
            <input type="radio" id="internet" name="internet" value="Internet Included" defaultChecked={internetOption === 'Internet'} />
            <label htmlFor="internet">Internet Provided</label>
          </span>
          <span>
            <input type="radio" id="noInternet" name="internet" value="No Internet Included" defaultChecked={internetOption === 'No Internet'} />
            <label htmlFor="noInternet">No Internet Provided</label>
          </span>
        </div>

        <div className={styles.propertyAges}>
          <div onChange={event => setMinAgeOption(event.target.value)}>
            <label htmlFor="minAge">
              <h3>Lowest Age</h3>
              <input type="number" id="minAge" defaultValue={minAgeOption} />
            </label>
          </div>

          <div onChange={event => setMaxAgeOption(event.target.value)}>
            <label htmlFor="maxAge">
              <h3>Highest Age</h3>
              <input type="number" id="maxAge" defaultValue={maxAgeOption} />
            </label>
          </div>
        </div>

        <div
          onChange={event => setSmokingOption(event.target.value)}
          className={styles.radioField}
        >
          <h3>Is Smoking Allowed?</h3>
          <span>
            <input type="radio" id="smoking" name="smoking" value="Smoking" defaultChecked={smokingOption === 'Smoking'} />
            <label htmlFor="smoking">Smoking</label>
          </span>
          <span>
            <input type="radio" id="nonSmoking" name="smoking" value="Non-Smoking" defaultChecked={smokingOption === 'Non-Smoking'} />
            <label htmlFor="nonSmoking">Non-Smoking</label>
          </span>
          <span>
            <input type="radio" id="anySmoking" name="smoking" value="Any" defaultChecked={smokingOption === 'Any'} />
            <label htmlFor="anySmoking">Any</label>
          </span>
        </div>
        <div className={styles.reactSelectInput}>
          <h3>Are There Any Pets?</h3>
          <Select
            defaultValue={selectInputDefaultGen(singleProperty.pets)}
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
                <input type="number" id="male" min="0" defaultValue={maleCountOption} onChange={event => setMaleCountOption(event.target.value)} />
              </label>
            </span>
            <span>
              <label htmlFor="female">
                <h4>Female</h4>
                <input type="number" id="female" min="0" defaultValue={femaleCountOption} onChange={event => setFemaleCountOption(event.target.value)} />
              </label>
            </span>
            <span>
              <label htmlFor="trans">
                <h4>Trans</h4>
                <input type="number" id="trans" min="0" defaultValue={transCountOption} onChange={event => setTransCountOption(event.target.value)} />
              </label>
            </span>
            <span>
              <label htmlFor="other">
                <h4>Other</h4>
                <input type="number" id="other" min="0" defaultValue={otherCountOption} onChange={event => setOtherCountOption(event.target.value)} />
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
                <input type="number" id="professional" min="0" defaultValue={professionalCountOption} onChange={event => setProfessionalCountOption(event.target.value)} />
              </label>
            </span>
            <span>
              <label htmlFor="student">
                <h4>Student</h4>
                <input type="number" id="student" min="0" defaultValue={studentCountOption} onChange={event => setStudentCountOption(event.target.value)} />
              </label>
            </span>
          </div>
        </div>

        <hr className={styles.formEnd} />

        <div className={styles.submitButton}>
          <button type="submit">
            {
              singleProperty.title ? (
                <p>Update Property</p>
              ) : (
                <p>Create Property</p>
              )
            }
          </button>
        </div>
      </form>
    </div>
  );
};

PropertyFormComponent.defaultProps = {
  singleProperty: {
    address: null,
    bills: null,
    blurb: null,
    deposit: null,
    disabledAccess: null,
    furnished: null,
    genders: null,
    id: null,
    internet: null,
    maxAge: null,
    minAge: null,
    occupantCount: null,
    occupations: null,
    outsideArea: null,
    parking: null,
    pets: null,
    postcode: null,
    price: null,
    roomCount: null,
    smoking: null,
    title: null,
    town: null,
  },
};

PropertyFormComponent.propTypes = {
  handleFormSubmission: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  singleProperty: PropTypes.shape({
    address: PropTypes.string,
    bills: PropTypes.string,
    blurb: PropTypes.string,
    deposit: PropTypes.number,
    disabledAccess: PropTypes.string,
    furnished: PropTypes.string,
    genders: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.number,
    internet: PropTypes.string,
    maxAge: PropTypes.number,
    minAge: PropTypes.number,
    occupantCount: PropTypes.number,
    occupations: PropTypes.arrayOf(PropTypes.string),
    outsideArea: PropTypes.arrayOf(PropTypes.string),
    parking: PropTypes.string,
    pets: PropTypes.arrayOf(PropTypes.string),
    postcode: PropTypes.string,
    price: PropTypes.number,
    roomCount: PropTypes.number,
    smoking: PropTypes.string,
    title: PropTypes.string,
    town: PropTypes.string,
  }),
};

export default PropertyFormComponent;
