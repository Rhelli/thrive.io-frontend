/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit, faMoneyBillWaveAlt, faWifi, faChair, faLeaf, faCat, faSmoking, faWheelchair,
  faParking,
} from '@fortawesome/free-solid-svg-icons';
import { arrayToString } from '../../../../utils/managePropertiesUtils';
import PropertyInfoComponent from '../../../Property/PropertyInfoComponent/PropertyInfoComponent';
import PropertyAboutComponent from '../../../Property/PropertyAboutComponent/PropertyAboutComponent';
import styles from './ManagePropertiesFlatmateListComponent.module.scss';

const ManagePropertiesFlatmateListComponent = ({
  managedProperties, handlePropertySettingsClick,
}) => {
  const {
    bills, disabledAccess, furnished, internet, outsideArea, parking, pets, smoking,
  } = managedProperties[0];
  const property = managedProperties[0];

  return (
    <div className={styles.managePropertiesFlatmatesListContainer}>
      <div className={styles.mpFlatmatesImage}>
        <button
          type="button"
          onClick={property => handlePropertySettingsClick(property)}
        >
          <FontAwesomeIcon icon={faEdit} />
          <p>Edit</p>
        </button>
        <div>
          <p>IMAGE</p>
        </div>
        <div className={styles.imageCounter}>
          <p>1/6</p>
        </div>
      </div>

      <PropertyInfoComponent singleProperty={managedProperties[0]} />
      <PropertyAboutComponent singleProperty={managedProperties[0]} />

      <div className={styles.additionalInfoContainer}>
        <h2>Additional Information</h2>
        <div className={styles.infoSegmentsContainer}>
          <div>
            <span>
              <FontAwesomeIcon icon={faMoneyBillWaveAlt} />
              <h4>Bills?</h4>
              {
                bills === 'Included' ? (
                  <p className={styles.greenText}>{bills}</p>
                ) : (
                  <p className={styles.redText}>{bills}</p>
                )
              }
            </span>
            <span>
              <FontAwesomeIcon icon={faWifi} />
              <h4>Internet?</h4>
              {
                internet === 'Internet Included' ? (
                  <p className={styles.greenText}>{internet}</p>
                ) : (
                  <p className={styles.redText}>{internet}</p>
                )
              }
            </span>
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faChair} />
              <h4>Furnished?</h4>
              {
                furnished === 'Furnished' ? (
                  <p className={styles.greenText}>{furnished}</p>
                ) : (
                  <p className={styles.redText}>{furnished}</p>
                )
              }
            </span>
            <span>
              <FontAwesomeIcon icon={faLeaf} />
              <h4>Outside Areas?</h4>
              {
                !outsideArea.length ? (
                  <p className={styles.redText}>None</p>
                ) : (
                  <p className={styles.greenText}>{arrayToString(outsideArea)}</p>
                )
              }
            </span>
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faCat} />
              <h4>Pets?</h4>
              {
                pets.length === 1 && pets[0] === 'None' ? (
                  <p className={styles.neutralText}>None</p>
                ) : (
                  <p className={styles.greenText}>{arrayToString(pets)}</p>
                )
              }
            </span>
            <span>
              <FontAwesomeIcon icon={faSmoking} />
              <h4>Smoking?</h4>
              {
                smoking === 'Smoking' ? (
                  <p className={styles.redText}>{smoking}</p>
                ) : smoking === 'Any' ? (
                  <p className={styles.neutralText}>{smoking}</p>
                ) : (
                  <p className={styles.greenText}>{smoking}</p>
                )
              }
            </span>
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faWheelchair} />
              <h4>Disabled Access?</h4>
              {
                disabledAccess === 'Disabled Access' ? (
                  <p className={styles.greenText}>{disabledAccess}</p>
                ) : (
                  <p className={styles.neutralText}>{disabledAccess}</p>
                )
              }
            </span>
            <span>
              <FontAwesomeIcon icon={faParking} />
              <h4>Parking?</h4>
              {
                parking === 'No Parking' ? (
                  <p className={styles.redText}>{parking}</p>
                ) : (
                  <p className={styles.redText}>{parking}</p>
                )
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

ManagePropertiesFlatmateListComponent.propTypes = {
  managedProperties: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.string.isRequired,
      bills: PropTypes.string.isRequired,
      blurb: PropTypes.string.isRequired,
      deposit: PropTypes.number.isRequired,
      disabledAccess: PropTypes.string,
      furnished: PropTypes.string.isRequired,
      genders: PropTypes.arrayOf(PropTypes.string),
      id: PropTypes.number,
      internet: PropTypes.string,
      maxAge: PropTypes.number,
      minAge: PropTypes.number,
      occupantCount: PropTypes.number.isRequired,
      occupations: PropTypes.arrayOf(PropTypes.string),
      outsideArea: PropTypes.arrayOf(PropTypes.string),
      parking: PropTypes.string.isRequired,
      pets: PropTypes.arrayOf(PropTypes.string),
      postcode: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      roomCount: PropTypes.number.isRequired,
      smoking: PropTypes.string,
      title: PropTypes.string.isRequired,
      town: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  handlePropertySettingsClick: PropTypes.func.isRequired,
};

export default ManagePropertiesFlatmateListComponent;
