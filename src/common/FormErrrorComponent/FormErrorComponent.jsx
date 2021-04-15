import React from 'react';
import PropTypes from 'prop-types';

const FormErrorComponent = ({ errorMessage }) => (
  <div>
    <p>{errorMessage}</p>
  </div>
);

FormErrorComponent.defaultProps = {
  errorMessage: '',
};

FormErrorComponent.propTypes = {
  errorMessage: PropTypes.string,
};

export default FormErrorComponent;
