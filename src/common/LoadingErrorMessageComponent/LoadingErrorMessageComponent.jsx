import React from 'react';
import styles from './LoadingErrorMessageComponent.module.scss';

const LoadingErrorMessageComponent = message => (
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

export default LoadingErrorMessageComponent;
