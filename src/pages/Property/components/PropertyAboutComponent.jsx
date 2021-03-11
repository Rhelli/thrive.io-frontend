import React from 'react';
import PropTypes from 'prop-types';

const PropertyAboutComponent = ({ singleProperty }) => {
  const { title, blurb } = singleProperty;

  return (
    <div>
      <div>
        <h2>About</h2>
        <div>
          <h3>
            {title}
          </h3>
          <p>
            {blurb}
          </p>
        </div>
      </div>
    </div>
  );
};

PropertyAboutComponent.defaultProps = {
  singleProperty: {
    title: '',
    blurb: '',
  },
};

PropertyAboutComponent.propTypes = {
  singleProperty: PropTypes.shape({
    title: PropTypes.string,
    blurb: PropTypes.string,
  }),
};

export default PropertyAboutComponent;
