import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import PropertyInfoComponent from '../../../Property/PropertyInfoComponent/PropertyInfoComponent';
import PropertyAboutComponent from '../../../Property/PropertyAboutComponent/PropertyAboutComponent';
import PropertyMoreInfoGrid from '../../../../common/PropertyMoreInfoGrid/PropertyMoreInfoGrid';
import styles from './ManagePropertiesFlatmateListComponent.module.scss';

const ManagePropertiesFlatmateListComponent = ({
  managedProperties, handlePropertySettingsClick,
}) => {
  const property = managedProperties[0];

  return (
    <div className={styles.managePropertiesFlatmatesListContainer}>
      <div className={styles.mpFlatmatesImage}>
        <button
          type="button"
          onClick={() => handlePropertySettingsClick(property)}
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

      <PropertyInfoComponent singleProperty={property} />
      <PropertyAboutComponent singleProperty={property} />
      <PropertyMoreInfoGrid property={property} />
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
