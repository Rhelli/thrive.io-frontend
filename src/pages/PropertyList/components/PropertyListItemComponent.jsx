import React from 'react';
import PropTypes from 'prop-types';

const PropertyListItemComponent = props => {
  const {
    title, town, price, bills, occupantCount, roomCount,
  } = props;

  return (
    <div>
      <h3>{title}</h3>
      <h5>{town}</h5>
      <p>{price}</p>
      <p>{bills}</p>
      <p>{occupantCount}</p>
      <p>{roomCount}</p>
    </div>
  );
};

PropertyListItemComponent.propTypes = {
  title: PropTypes.string.isRequired,
  town: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bills: PropTypes.bool.isRequired,
  occupantCount: PropTypes.number.isRequired,
  roomCount: PropTypes.number.isRequired,
};

export default PropertyListItemComponent;
