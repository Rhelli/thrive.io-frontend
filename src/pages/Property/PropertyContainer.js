import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PropertyAboutComponent from './components/PropertyAboutComponent';
import PropertyImageComponent from './components/PropertyImageComponent';
import PropertyInfoComponent from './components/PropertyInfoComponent';

const PropertyContainer = ({ propertyProfile }) => (
  <div className={styles.propertyContainer}>
    <PropertyImageComponent propertyProfile={propertyProfile} />
    <PropertyAboutComponent propertyProfile={propertyProfile} />
    <PropertyInfoComponent propertyProfile={propertyProfile} />
  </div>
);

PropertyContainer.propTypes = {
  propertyProfile: PropTypes.shape({
    properties: PropTypes.objectOf([PropTypes.string, PropTypes.array, PropTypes.number]),
    singleProperty: PropTypes.arrayOf([PropTypes.string, PropTypes.array, PropTypes.number]),
  }).isRequired,
};

const mapStateToProps = state => ({
  propertyProfile: state.propertyStore,
});

export default connect(mapStateToProps, null)(PropertyContainer);
