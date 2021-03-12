import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchPropertyLocation from '../../api/locationApi';
import PropertyInfoComponent from './components/PropertyInfoComponent';
import PropertyImageComponent from './components/PropertyImageComponent';
import PropertyAboutComponent from './components/PropertyAboutComponent';
import PropertyMoreInfoComponent from './components/PropertyMoreInfoComponent';
import styles from './PropertyContainer.module.scss';

const PropertyContainer = ({ propertyData, fetchPropertyLocation }) => {
  const { address, town, postcode } = propertyData.singleProperty;
  const propertyAddress = `${address},${town},${postcode}`;

  useEffect(() => {
    fetchPropertyLocation(propertyAddress);
  }, []);

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
      <PropertyMoreInfoComponent singleProperty={propertyData.singleProperty} />
    </div>
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
      occupantCount: PropTypes,
      occupations: PropTypes.arrayOf(PropTypes.string),
      price: PropTypes.number,
      roomCount: PropTypes.number,
    }).isRequired,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
  fetchPropertyLocation: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  propertyData: state.propertyStore,
});

const mapDispatchToProps = dispatch => ({
  fetchPropertyLocation: propertyAddress => dispatch(fetchPropertyLocation(propertyAddress)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyContainer);
