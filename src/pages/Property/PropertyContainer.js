/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import PropertyInfoComponent from './PropertyInfoComponent/PropertyInfoComponent';
import PropertyImageComponent from './PropertyImageComponent/PropertyImageComponent';
import PropertyAboutComponent from './PropertyAboutComponent/PropertyAboutComponent';
import PropertyMoreInfoComponent from './PropertyMoreInfoComponent/PropertyMoreInfoComponent';
import { fetchSingleProperty } from '../../state/property/propertyActions';
import styles from './PropertyContainer.module.scss';

const PropertyContainer = ({ propertyData, userProfile, fetchSingleProperty }) => {
  const { singleProperty } = propertyData;
  const history = useHistory();
  const handleSettingsClick = () => history.push(`/edit-properties/${singleProperty.id}`);

  const handlePropertySettingsClick = property => {
    fetchSingleProperty(property);
    history.push(`/edit-property/${property.id}`);
  };

  return (
    propertyData.loading || Object.keys(propertyData.singlePropertyLocation).length === 0 ? (
      <p>Wait a sec.</p>
    ) : propertyData.error ? (
      <p>Wait a million years</p>
    ) : (
      <div className={styles.propertyContainer}>
        <PropertyImageComponent
          singleProperty={singleProperty}
          userProfile={userProfile}
          handlePropertySettingsClick={handlePropertySettingsClick}
        />
        <PropertyInfoComponent
          singleProperty={singleProperty}
          propertyData={propertyData}
        />
        <PropertyAboutComponent singleProperty={singleProperty} />
        <PropertyMoreInfoComponent
          singleProperty={singleProperty}
          singlePropertyLocation={
            propertyData.singlePropertyLocation.results[0].locations[0].displayLatLng
          }
        />
      </div>
    )
  );
};

PropertyContainer.propTypes = {
  propertyData: PropTypes.shape({
    properties: PropTypes.arrayOf(PropTypes.object),
    singleProperty: PropTypes.shape({
      id: PropTypes.number,
      address: PropTypes.string,
      town: PropTypes.string,
      postcode: PropTypes.string,
      deposit: PropTypes.number,
      genders: PropTypes.arrayOf(PropTypes.string),
      maxAge: PropTypes.number,
      minAge: PropTypes.number,
      occupantCount: PropTypes.number,
      occupations: PropTypes.arrayOf(PropTypes.string),
      price: PropTypes.number,
      roomCount: PropTypes.number,
    }).isRequired,
    singlePropertyLocation: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
  userProfile: PropTypes.shape({
    userType: PropTypes.string.isRequired,
  }).isRequired,
  fetchSingleProperty: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  propertyData: state.propertyStore,
  userProfile: state.authStore.user,
});

const mapDispatchToProps = dispatch => ({
  fetchSingleProperty: property => dispatch(fetchSingleProperty(property)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyContainer);
