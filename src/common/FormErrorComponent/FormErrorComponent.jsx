import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormErrorComponent.module.scss';

const FormErrorComponent = ({ errorMessage }) => (
  <>
    <p className={styles.errorMessage}>{errorMessage}</p>
  </>
);

FormErrorComponent.defaultProps = {
  errorMessage: '',
};

FormErrorComponent.propTypes = {
  errorMessage: PropTypes.string,
};

export default FormErrorComponent;
