/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt, faBox, faInfoCircle, faUsers, faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import styles from './PropertyMoreInfoComponent.module.scss';

const PropertyMoreInfoComponent = ({ singleProperty }) => {
  const {
    address, town, postcode, bills, furnished, internet,
    outsideArea, pets, smoking, disabledAccess,
  } = singleProperty;

  const [locationModal, setLocationModal] = useState(false);
  const [includedModal, setIncludedModal] = useState(false);
  const [moreInfoModal, setMoreInfoModal] = useState(false);

  const modalSwitch = modal => {
    if (modal === 'locationModal') {
      locationModal === false ? setLocationModal(true) : setLocationModal(false);
    }
    if (modal === 'includedModal') {
      includedModal === false ? setIncludedModal(true) : setIncludedModal(false);
    }
    if (modal === 'moreInfoModal') {
      moreInfoModal === false ? setMoreInfoModal(true) : setMoreInfoModal(false);
    }
  };

  return (
    <div className={styles.propertyMoreInfoContainer}>
      <div className={styles.propertyMoreInfoButtons}>
        <div className={styles.locationButton}>
          <button type="button" onClick={() => modalSwitch('locationModal')}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </button>
          <p>Location</p>
        </div>
        <div className={styles.includedButton}>
          <button type="button" onClick={() => modalSwitch('includedModal')}>
            <FontAwesomeIcon icon={faBox} />
          </button>
          <p>Included</p>
        </div>
        <div className={styles.infoButton}>
          <button type="button" onClick={() => modalSwitch('moreInfoModal')}>
            <FontAwesomeIcon icon={faInfoCircle} />
          </button>
          <p>More</p>
        </div>
        <div className={styles.matchButton}>
          <button type="button">
            <FontAwesomeIcon icon={faUsers} />
          </button>
          <p>Match</p>
        </div>
      </div>
      <div className={styles.propertyMoreInfoModalsContainer}>
        {
          locationModal ? (
            <div className={styles.locationModalContainer}>
              <div className={styles.locationModalContent}>
                <span className={styles.modalClose} onClick={() => modalSwitch('locationModal')} role="button" onKeyUp={() => modalSwitch('locationModal')} tabIndex="-1">
                  <FontAwesomeIcon icon={faTimesCircle} />
                </span>
                <div>
                  <p>
                    {address}
                  </p>
                  <p>
                    {town}
                  </p>
                  <p>
                    {postcode}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            null
          )
        }
        {
          includedModal ? (
            <div className={styles.includedModalContainer}>
              <div className={styles.includedModelContent}>
                <span className={styles.modalClose} onClick={() => modalSwitch('includedModal')} role="button" onKeyUp={() => modalSwitch('includedModal')} tabIndex="-1">
                  <FontAwesomeIcon icon={faTimesCircle} />
                </span>
                <div>
                  <p>{bills}</p>
                  <p>{internet}</p>
                  <p>{furnished}</p>
                  <p>{outsideArea}</p>
                </div>
              </div>
            </div>
          ) : (
            null
          )
        }
        {
          moreInfoModal ? (
            <div className={styles.moreInfoModalContainer}>
              <div className={styles.moreInfoModalContent}>
                <span className={styles.modalClose} onClick={() => modalSwitch('moreInfoModal')} role="button" onKeyUp={() => modalSwitch('moreInfoModal')} tabIndex="-1">
                  <FontAwesomeIcon icon={faTimesCircle} />
                </span>
                <div>
                  <p>{pets}</p>
                  <p>{smoking}</p>
                  <p>{disabledAccess}</p>
                </div>
              </div>
            </div>
          ) : (
            null
          )
        }
      </div>
    </div>
  );
};

PropertyMoreInfoComponent.propTypes = {
  singleProperty: PropTypes.shape({
    address: PropTypes.string,
    town: PropTypes.string,
    postcode: PropTypes.string,
    bills: PropTypes.string,
    furnished: PropTypes.string,
    internet: PropTypes.string,
    outsideArea: PropTypes.string,
    pets: PropTypes.arrayOf(PropTypes.string),
    genders: PropTypes.arrayOf(PropTypes.string),
    smoking: PropTypes.string,
    disabledAccess: PropTypes.string,
  }).isRequired,
};

export default PropertyMoreInfoComponent;
