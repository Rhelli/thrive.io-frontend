import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './ManagePropertiesNavbarComponent.module.scss';

const ManagePropertiesNavbarComponent = ({ handleNewPropertyClick }) => (
  <div className={styles.managePropertiesNavbarContainer}>
    <h2>Manage Properties</h2>
    <div>
      <button type="button" onClick={handleNewPropertyClick}>
        <FontAwesomeIcon icon={faPlusCircle} />
        <p>New</p>
      </button>
    </div>
  </div>
);

ManagePropertiesNavbarComponent.propTypes = {
  handleNewPropertyClick: PropTypes.func.isRequired,
};

export default ManagePropertiesNavbarComponent;
