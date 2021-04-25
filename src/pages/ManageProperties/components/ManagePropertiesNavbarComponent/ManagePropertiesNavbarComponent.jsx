import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './ManagePropertiesNavbarComponent.module.scss';

const ManagePropertiesNavbarComponent = ({
  handleNewPropertyClick, advertiserType, managedPropertiesCount,
}) => (
  <div className={styles.managePropertiesNavbarContainer}>
    {
      advertiserType === 'Flatmate' ? (
        <h2>Manage Household</h2>
      ) : (
        <h2>Manage Properties</h2>
      )
    }
    <div>
      {
        managedPropertiesCount >= 1 ? (
          <button className={styles.disabledButton} type="button" disabled>
            <FontAwesomeIcon icon={faPlusCircle} />
          </button>
        ) : (
          <button type="button" onClick={handleNewPropertyClick}>
            <FontAwesomeIcon icon={faPlusCircle} />
            <p>New</p>
          </button>
        )
      }
    </div>
  </div>
);

ManagePropertiesNavbarComponent.defaultProps = {
  advertiserType: '',
  managedPropertiesCount: 0,
};

ManagePropertiesNavbarComponent.propTypes = {
  handleNewPropertyClick: PropTypes.func.isRequired,
  advertiserType: PropTypes.string,
  managedPropertiesCount: PropTypes.number,
};

export default ManagePropertiesNavbarComponent;
