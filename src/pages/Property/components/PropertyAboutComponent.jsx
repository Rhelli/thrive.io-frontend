/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const PropertyAboutComponent = ({ singleProperty, propertyData }) => {
  const {
    address, bills, blurb, deposit, disabledAccess, furnished, genders, internet, maxAge, minAge,
    occupantCount, occupations, outsideArea, parking, pets, postcode, price, roomCount, smoking, title, town,
  } = singleProperty;
  const { loading, error } = propertyData;

  return loading ? (
    <div>
      <p>Loading. Please wait.</p>
    </div>
  ) : error ? (
    <div>
      <p>
        Error:
        {error.message}
      </p>
    </div>
  ) : (
    <div>
      <div>
        <h3>
          £
          {bills}
          Per Month
        </h3>
      </div>
      <div>
        <p>
          {}
        </p>
      </div>
    </div>
  );
};

export default PropertyAboutComponent;
