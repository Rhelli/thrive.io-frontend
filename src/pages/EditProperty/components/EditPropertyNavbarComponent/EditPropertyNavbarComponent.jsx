import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import tLogo from '../../../../assets/img/thrive-t-transparent.png';
import styles from './EditPropertyNavbarComponent.module.scss';

const EditPropertyNavbarComponent = ({ handleNavbarBackButton }) => (
  <header className={styles.editPropertyNavbarContainer}>
    <span className={styles.titleSpan}>
      <button onClick={handleNavbarBackButton} type="button">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h1>Edit Property</h1>
    </span>
    <span className={styles.imageSpan}>
      <img src={tLogo} alt="Thrive" />
    </span>
  </header>
);

EditPropertyNavbarComponent.propTypes = {
  handleNavbarBackButton: PropTypes.func.isRequired,
};

export default EditPropertyNavbarComponent;
