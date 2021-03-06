import React, { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt, faInfoCircle, faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import PropertyMoreInfoGrid from '../../../common/PropertyMoreInfoGrid/PropertyMoreInfoGrid';
import styles from './PropertyMoreInfoComponent.module.scss';

const PropertyMoreInfoComponent = ({ singleProperty, singlePropertyLocation }) => {
  const {
    address, town, postcode,
  } = singleProperty;

  const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;
  const { lat, lng } = singlePropertyLocation;
  const containerStyle = {
    width: '350px',
    height: '350px',
  };
  const center = {
    lat: parseFloat(lat.toFixed(3)),
    lng: parseFloat(lng.toFixed(3)),
  };

  const [locationModal, setLocationModal] = useState(false);
  const [moreInfoModal, setMoreInfoModal] = useState(false);

  return (
    <div className={styles.propertyMoreInfoContainer}>
      <div className={styles.propertyMoreInfoButtons}>
        <div className={styles.locationButton}>
          <button type="button" onClick={() => setLocationModal(true)}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </button>
          <p>Location</p>
        </div>
        <div className={styles.infoButton}>
          <button type="button" onClick={() => setMoreInfoModal(true)}>
            <FontAwesomeIcon icon={faInfoCircle} />
          </button>
          <p>More Info</p>
        </div>
      </div>
      <div className={styles.propertyMoreInfoModalsContainer}>
        {
          locationModal ? (
            <div className={styles.locationModalContainer}>
              <div className={styles.locationModalContent}>
                <span className={styles.modalClose} onClick={() => setLocationModal(false)} role="button" onKeyUp={() => setLocationModal(false)} tabIndex="-1">
                  <FontAwesomeIcon icon={faTimesCircle} />
                </span>
                <div className={styles.locationMapContainer}>
                  <div>
                    <LoadScript
                      googleMapsApiKey={REACT_APP_GOOGLE_MAPS_API_KEY}
                    >
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={15}
                      />
                    </LoadScript>
                  </div>
                </div>
                <div className={styles.locationAddressContainer}>
                  <div>
                    <h3>Address</h3>
                    <div className={styles.address}>
                      <p>
                        {address}
                        ,
                      </p>
                      <p>
                        {town}
                        ,
                      </p>
                      <p>
                        {postcode}
                      </p>
                    </div>
                  </div>
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
                <span className={styles.modalClose} onClick={() => setMoreInfoModal(false)} role="button" onKeyUp={() => setMoreInfoModal(false)} tabIndex="-1">
                  <FontAwesomeIcon icon={faTimesCircle} />
                </span>
                <div className={styles.moreInfoModalInnerContainer}>
                  <PropertyMoreInfoGrid property={singleProperty} />
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
    outsideArea: PropTypes.arrayOf(PropTypes.string),
    pets: PropTypes.arrayOf(PropTypes.string),
    genders: PropTypes.arrayOf(PropTypes.string),
    smoking: PropTypes.string,
    disabledAccess: PropTypes.string,
  }).isRequired,
  singlePropertyLocation: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};

export default PropertyMoreInfoComponent;
