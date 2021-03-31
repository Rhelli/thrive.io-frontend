import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './EditPropertyNavbarComponent.module.scss';

const EditPropertyNavbarComponent = ({ handleNavbarBackButton }) => (
  <header className={styles.editPropertyNavbarContainer}>
    <button onClick={handleNavbarBackButton} type="button">
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
    <h2>Edit Property</h2>
  </header>
);

EditPropertyNavbarComponent.propTypes = {
  handleNavbarBackButton: PropTypes.func.isRequired,
};

export default EditPropertyNavbarComponent;
