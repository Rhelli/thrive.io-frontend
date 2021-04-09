import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import tLogo from '../../../../assets/img/thrive-t-transparent.png';
import styles from './NewPropertyNavbarComponent.module.scss';

const NewPropertyNavbarComponent = () => {
  const history = useHistory();
  const handleBackButton = () => history.push('/manage-properties');

  return (
    <div className={styles.newPropertyNavbarContainer}>
      <span className={styles.titleSpan}>
        <button type="button" onClick={() => handleBackButton()}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <h1>New Property</h1>
      </span>
      <span className={styles.imageSpan}>
        <img src={tLogo} alt="Thrive" />
      </span>
    </div>
  );
};

export default NewPropertyNavbarComponent;
