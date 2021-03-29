/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createNewPropertyRequest } from '../../api/propertiesApi';
import PropertyNavbarComponent from './components/NewPropertyNavbarComponent/NewPropertyNavbarComponent';
import PropertyFormComponent from '../../common/PropertyFormComponent/PropertyFormComponent';

import styles from './NewPropertyContainer.module.scss';

const NewPropertyContainer = ({ userProfile, createNewPropertyRequest }) => {
  const history = useHistory();
  const { id } = userProfile;

  const handleFormSubmission = (event, PropertyDetails) => {
    event.preventDefault();
    createNewPropertyRequest(PropertyDetails);
    history.push('/manage-properties');
  };

  return (
    <div className={styles.newPropertyPageContainer}>
      <PropertyNavbarComponent />
      <PropertyFormComponent
        handleFormSubmission={handleFormSubmission}
        id={id}
      />
    </div>
  );
};

NewPropertyContainer.propTypes = {
  userProfile: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  createNewPropertyRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userProfile: state.authStore.user,
});

const mapDispatchToProps = dispatch => ({
  createNewPropertyRequest: newPropertyDetails => {
    dispatch(createNewPropertyRequest(newPropertyDetails));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPropertyContainer);
