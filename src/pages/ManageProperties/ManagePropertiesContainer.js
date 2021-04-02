/* eslint-disable no-unused-vars */
import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import fetchUserProfileApiRequest from '../../api/userProfileApi';
import { fetchSingleProperty } from '../../state/property/propertyActions';
import { fetchManagedPropertiesListRequest } from '../../api/propertiesApi';
import fetchPropertyLocation from '../../api/locationApi';
import styles from './ManagePropertiesContainer.module.scss';
import ManagePropertiesNavbarComponent from './components/ManagePropertiesNavbarComponent/ManagePropertiesNavbarComponent';
import ManagePropertiesFlatmateInfoComponent from './components/ManagePropertiesFlatmateInfoComponent/ManagePropertiesFlatmateInfoComponent';
import ManagePropertiesLandlordInfoComponent from './components/ManagePropertiesLandlordInfoComponent/ManagePropertiesLandlordInfoComponent';
import ManagePropertiesFlatmateListComponent from './components/ManagePropertiesFlatmateListComponent/ManagePropertiesFlatmateListComponent';
import PropertyListItemComponent from '../../common/PropertyListItemComponent/PropertyListItemComponent';

const ManagePropertiesContainer = ({
  userProfile, managedProperties, fetchUserProfileApiRequest, fetchManagedPropertiesListRequest,
  fetchSingleProperty, fetchPropertyLocation,
}) => {
  useLayoutEffect(() => {
    fetchManagedPropertiesListRequest();
    fetchUserProfileApiRequest();
  }, []);

  const history = useHistory();
  const handleNewPropertyClick = () => history.push('/manage-properties/new');
  const { advertiserType } = userProfile;
  const managedPropertiesCount = managedProperties.length;

  const propertyClickThrough = property => {
    const propertyAddress = `${property.address},${property.town},${property.postcode}`;
    fetchSingleProperty(property);
    fetchPropertyLocation(propertyAddress);
    history.push(`/property/${property.id}`);
  };

  const handlePropertySettingsClick = property => {
    fetchSingleProperty(property);
    history.push(`/edit-property/${property.id}`);
  };

  console.log(managedProperties);

  return !managedProperties ? (
    <h2>Loading. One Minute Please.</h2>
  ) : managedProperties && advertiserType === 'Landlord' ? (
    <div className={styles.managePropertiesContainer}>
      <ManagePropertiesNavbarComponent
        handleNewPropertyClick={handleNewPropertyClick}
      />
      <ManagePropertiesLandlordInfoComponent
        managedProperties={managedProperties}
      />
      <PropertyListItemComponent
        properties={managedProperties}
        handlePropertyOptionButton={handlePropertySettingsClick}
        propertyClickThrough={propertyClickThrough}
        listItemType="manage"
      />
    </div>
  ) : managedProperties && advertiserType === 'Flatmate' ? (
    <div className={styles.managePropertiesContainer}>
      <ManagePropertiesNavbarComponent
        handleNewPropertyClick={handleNewPropertyClick}
        advertiserType={advertiserType}
        managedPropertiesCount={managedPropertiesCount}
      />
      <ManagePropertiesFlatmateInfoComponent
        managedProperties={managedProperties}
      />
      <ManagePropertiesFlatmateListComponent
        managedProperties={managedProperties}
        handlePropertySettingsClick={handlePropertySettingsClick}
      />
    </div>
  ) : (
    null
  );
};

ManagePropertiesContainer.propTypes = {
  userProfile: PropTypes.shape({
    advertiserType: PropTypes.string,
  }).isRequired,
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
  fetchUserProfileApiRequest: PropTypes.func.isRequired,
  fetchManagedPropertiesListRequest: PropTypes.func.isRequired,
  fetchSingleProperty: PropTypes.func.isRequired,
  fetchPropertyLocation: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userProfile: state.profileStore.userProfile,
  managedProperties: state.propertyStore.managedProperties,
});

const mapDispatchToProps = dispatch => ({
  fetchUserProfileApiRequest: () => dispatch(fetchUserProfileApiRequest()),
  fetchManagedPropertiesListRequest: () => dispatch(fetchManagedPropertiesListRequest()),
  fetchSingleProperty: property => dispatch(fetchSingleProperty(property)),
  fetchPropertyLocation: propertyAddress => dispatch(fetchPropertyLocation(propertyAddress)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManagePropertiesContainer);
