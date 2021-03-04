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

  return (
    <div>
      {
        // eslint-disable-next-line react/prop-types
        propertyData.map(property => (
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
    title: PropTypes.string.isRequired,
    town: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bills: PropTypes.bool.isRequired,
    occupantCount: PropTypes.number.isRequired,
    roomCount: PropTypes.number.isRequired,
  }).isRequired,
  fetchAllPropertiesRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  propertyData: state.propertyStore.properties,
});

const mapDispatchToProps = dispatch => ({
  fetchAllPropertiesRequest: () => dispatch(fetchAllPropertiesRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyListContainer);
