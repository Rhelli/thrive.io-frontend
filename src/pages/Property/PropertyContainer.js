/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PropertyInfoComponent from './PropertyInfoComponent/PropertyInfoComponent';
import PropertyImageComponent from './PropertyImageComponent/PropertyImageComponent';
import PropertyAboutComponent from './PropertyAboutComponent/PropertyAboutComponent';
import PropertyMoreInfoComponent from './PropertyMoreInfoComponent/PropertyMoreInfoComponent';
import styles from './PropertyContainer.module.scss';

const PropertyContainer = ({ propertyData, userProfile }) => {
  const { userType } = userProfile;

  return (
    propertyData.loading || Object.keys(propertyData.singlePropertyLocation).length === 0 ? (
      <p>Wait a sec.</p>
    ) : propertyData.error ? (
      <p>Wait a million years</p>
    ) : (
      <div className={styles.propertyContainer}>
        <PropertyImageComponent
          propertyData={propertyData}
          userType={userType}
        />
        <PropertyInfoComponent
          singleProperty={propertyData.singleProperty}
          propertyData={propertyData}
        />
        <PropertyAboutComponent singleProperty={propertyData.singleProperty} />
        <PropertyMoreInfoComponent
          singleProperty={propertyData.singleProperty}
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
};

const mapStateToProps = state => ({
  propertyData: state.propertyStore,
  userProfile: state.profileStore.userProfile,
});

export default connect(mapStateToProps, null)(PropertyContainer);
