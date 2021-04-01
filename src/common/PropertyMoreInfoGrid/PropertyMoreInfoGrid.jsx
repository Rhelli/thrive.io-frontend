import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyBillWaveAlt, faWifi, faChair, faLeaf, faCat, faSmoking, faWheelchair,
  faParking,
} from '@fortawesome/free-solid-svg-icons';
import { arrayToString } from '../../utils/managePropertiesUtils';
import styles from './PropertyMoreInfoGrid.module.scss';

const PropertyMoreInfoGrid = ({ property }) => {
  const {
    bills, disabledAccess, furnished, internet, outsideArea, parking, pets, smoking,
  } = property;

  return (
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
  );
};

PropertyMoreInfoGrid.propTypes = {
  property: PropTypes.shape({
    bills: PropTypes.string,
    disabledAccess: PropTypes.string,
    furnished: PropTypes.string,
    outsideArea: PropTypes.arrayOf(PropTypes.string),
    parking: PropTypes.string,
    pets: PropTypes.arrayOf(PropTypes.string),
    smoking: PropTypes.string,
    internet: PropTypes.string,
    length: PropTypes.number,
  }).isRequired,
};

export default PropertyMoreInfoGrid;
