/* eslint-disable no-nested-ternary */
import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropertyListItemComponent from './components/PropertyListItemComponent';
import { fetchAllPropertiesRequest } from '../../api/propertiesApi';

const PropertyListContainer = ({ propertyData, fetchAllPropertiesRequest }) => {
  useLayoutEffect(() => {
    fetchAllPropertiesRequest();
  }, []);

  console.log(propertyData);

  return propertyData.loading ? (
    <div>
      <h1>Data Loading...</h1>
    </div>
  ) : propertyData.error ? (
    <div>
      <h1>{propertyData.error}</h1>
    </div>
  ) : (
    <div>
      {
        propertyData.properties.propertiesList.map(property => (
          <PropertyListItemComponent
            key={uuidv4()}
            title={property.title}
            town={property.town}
            price={property.price}
            bills={property.bills}
            occupantCount={property.occupantCount}
            roomCount={property.roomCount}
          />
        ))
      }
    </div>
  );
};

PropertyListContainer.propTypes = {
  propertyData: PropTypes.shape({
    properties: PropTypes.shape({
      propertiesList: PropTypes.arrayOf(
        PropTypes.shape({
          address: PropTypes.string.isRequired,
          aggregateId: PropTypes.number,
          bills: PropTypes.string,
          blurb: PropTypes.string,
          createdAt: PropTypes.string,
          deposit: PropTypes.number,
          disabledAccess: PropTypes.string,
          furnished: PropTypes.string,
          genders: PropTypes.arrayOf(PropTypes.string),
          id: PropTypes.number,
          internet: PropTypes.string,
          maxAge: PropTypes.number,
          minAge: PropTypes.number,
          occupantCount: PropTypes.number,
          roomCount: PropTypes.number,
          occupations: PropTypes.arrayOf(PropTypes.string),
          outsideArea: PropTypes.string,
          ownerId: PropTypes.number,
          parking: PropTypes.string,
          pets: PropTypes.arrayOf(PropTypes.string),
          postcode: PropTypes.string,
          price: PropTypes.number,
          smoking: PropTypes.string,
          title: PropTypes.string,
          town: PropTypes.string,
          updatedAt: PropTypes.string,
        }),
      ).isRequired,
    }),
    error: PropTypes.string,
    loading: PropTypes.bool,
  }).isRequired,
  fetchAllPropertiesRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  propertyData: state.propertyStore,
});

const mapDispatchToProps = dispatch => ({
  fetchAllPropertiesRequest: () => dispatch(fetchAllPropertiesRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyListContainer);
