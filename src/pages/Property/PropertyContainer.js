/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PropertyInfoComponent from './components/PropertyInfoComponent';
import PropertyImageComponent from './components/PropertyImageComponent';
import PropertyAboutComponent from './components/PropertyAboutComponent';
import styles from './PropertyContainer.module.scss';

const PropertyContainer = ({ propertyData }) => {
  console.log(propertyData);

  return propertyData.loading ? (
    <p>Wait a sec.</p>
  ) : propertyData.error ? (
    <p>Wait a million years</p>
  ) : (
    <div className={styles.propertyContainer}>
      <PropertyImageComponent propertyData={propertyData} />
      <PropertyInfoComponent
        singleProperty={propertyData.singleProperty}
        propertyData={propertyData}
      />
      <PropertyAboutComponent singleProperty={propertyData.singleProperty} />
    </div>
  );
};

PropertyContainer.propTypes = {
  propertyData: PropTypes.shape({
    properties: PropTypes.objectOf([PropTypes.string, PropTypes.array, PropTypes.number]),
    singleProperty: PropTypes.arrayOf([PropTypes.string, PropTypes.array, PropTypes.number]),
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  propertyData: state.propertyStore,
});

export default connect(mapStateToProps, null)(PropertyContainer);
