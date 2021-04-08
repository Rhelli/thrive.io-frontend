/* eslint-disable no-nested-ternary */
import React, { useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropertyListItemComponent from './components/PropertyListItemComponent';
import { fetchAllPropertiesListRequest } from '../../api/propertiesApi';
import fetchPropertyLocation from '../../api/locationApi';
import { fetchSingleProperty } from '../../state/property/propertyActions';
import tLogo from '../../assets/img/thrive-t-transparent.png';
import styles from './PropertyListContainer.module.scss';

const PropertyListContainer = ({
  propertyData, fetchAllPropertiesListRequest, fetchSingleProperty, fetchPropertyLocation,
}) => {
  useLayoutEffect(() => {
    fetchAllPropertiesListRequest();
  }, []);

  const history = useHistory();

  const propertyClickThrough = property => {
    const propertyAddress = `${property.address},${property.town},${property.postcode}`;
    fetchSingleProperty(property);
    fetchPropertyLocation(propertyAddress);
    history.push(`/property/${property.id}`);
  };

  return propertyData.loading ? (
    <div>
      <h1>Data Loading...</h1>
    </div>
  ) : propertyData.error ? (
    <div>
      <h1>{propertyData.error}</h1>
    </div>
  ) : (
    <div className={styles.propertyListContainer}>
      <div className={styles.brandingHeader}>
        <span className={styles.titleSpan}>
          <h1>Properties</h1>
        </span>
        <span className={styles.imageSpan}>
          <img src={tLogo} alt="Thrive" />
        </span>
      </div>
      {
        propertyData.properties.map(property => (
          <PropertyListItemComponent
            key={uuidv4()}
            title={property.title}
            town={property.town}
            price={property.price}
            bills={property.bills}
            occupantCount={property.occupantCount}
            roomCount={property.roomCount}
            propertyClickThrough={() => propertyClickThrough(property)}
          />
        ))
      }
    </div>
  );
};

PropertyListContainer.propTypes = {
  propertyData: PropTypes.shape({
    properties: PropTypes.arrayOf(
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
        outsideArea: PropTypes.arrayOf(PropTypes.string),
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
    ),
    error: PropTypes.string,
    loading: PropTypes.bool,
  }).isRequired,
  fetchAllPropertiesListRequest: PropTypes.func.isRequired,
  fetchSingleProperty: PropTypes.func.isRequired,
  fetchPropertyLocation: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  propertyData: state.propertyStore,
});

const mapDispatchToProps = dispatch => ({
  fetchAllPropertiesListRequest: () => dispatch(fetchAllPropertiesListRequest()),
  fetchSingleProperty: property => dispatch(fetchSingleProperty(property)),
  fetchPropertyLocation: propertyAddress => dispatch(fetchPropertyLocation(propertyAddress)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyListContainer);
