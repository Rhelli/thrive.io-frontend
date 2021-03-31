import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './NewPropertyNavbarComponent.module.scss';

const NewPropertyNavbarComponent = () => {
  const history = useHistory();
  const handleBackButton = () => history.push('/manage-properties');

  return (
    <div className={styles.newPropertyNavbarContainer}>
      <button type="button" onClick={() => handleBackButton()}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h2>New Property</h2>
    </div>
  );
};

export default NewPropertyNavbarComponent;
