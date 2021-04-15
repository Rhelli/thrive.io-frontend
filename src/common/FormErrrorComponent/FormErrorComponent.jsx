import React from 'react';
import PropTypes from 'prop-types';

const FormErrorComponent = ({ errorMessage }) => (
  <>
    <p>{errorMessage}</p>
  </>
);

FormErrorComponent.defaultProps = {
  errorMessage: '',
};

FormErrorComponent.propTypes = {
  errorMessage: PropTypes.string,
};

export default FormErrorComponent;
