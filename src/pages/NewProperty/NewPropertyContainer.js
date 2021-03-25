import React from 'react';
import NewPropertyNavbarComponent from './components/NewPropertyNavbarComponent/NewPropertyNavbarComponent';
import styles from './NewPropertyContainer.module.scss';

const NewPropertyContainer = () => (
  <div className={styles.newPropertyPageContainer}>
    <NewPropertyNavbarComponent />
  </div>
);

export default NewPropertyContainer;
