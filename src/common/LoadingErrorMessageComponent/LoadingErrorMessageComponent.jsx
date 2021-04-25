import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoadingErrorMessageComponent.module.scss';

const LoadingErrorMessageComponent = ({ message }) => (
  <div className={styles.loadingErrorContainer}>
    <h2>Oops!</h2>
    <div>
      <p>
        Error!
        {' '}
        {message.message}
      </p>
    </div>
  </div>
);

LoadingErrorMessageComponent.propTypes = {
  message: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
};

export default LoadingErrorMessageComponent;
