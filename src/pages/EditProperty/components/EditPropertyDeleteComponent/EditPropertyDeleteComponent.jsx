import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './EditPropertyDeleteComponent.module.scss';

const EditPropertyDeleteComponent = ({ handlePropertyDelete }) => {
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <div className={styles.editPropertyDeleteContainer}>
      <button type="submit" onClick={() => setDeleteModal(true)}>
        Delete Property
      </button>
      {
        deleteModal ? (
          <div className={styles.editPropertyDeleteModal}>
            <form onSubmit={handlePropertyDelete} className={styles.editPropertyDeleteModalContent}>
              <span
                role="button"
                className={styles.modalClose}
                onClick={() => setDeleteModal(false)}
                onKeyUp={() => setDeleteModal(false)}
                tabIndex="-1"
              >
                <FontAwesomeIcon icon={faTimesCircle} />
              </span>
              <div>
                <h2>Are You Sure You Want To Delete This Property?</h2>
                <div className={styles.modalMessage}>
                  <p>This action is irreversible.</p>
                </div>
                <div className={styles.modalButton}>
                  <button type="submit">
                    Confirm Delete
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          null
        )
      }
    </div>
  );
};

EditPropertyDeleteComponent.propTypes = {
  handlePropertyDelete: PropTypes.func.isRequired,
};

export default EditPropertyDeleteComponent;
