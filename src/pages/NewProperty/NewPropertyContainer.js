/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createNewPropertyRequest } from '../../api/propertiesApi';
import NewPropertyNavbarComponent from './components/NewPropertyNavbarComponent/NewPropertyNavbarComponent';
import NewPropertyFormComponent from './components/NewPropertyFormComponent/NewPropertyFormComponent';
import styles from './NewPropertyContainer.module.scss';

const NewPropertyContainer = ({ userProfile, createNewPropertyRequest }) => {
  const history = useHistory();
  const { id } = userProfile;

  const handleNewPropertySubmission = (event, newPropertyDetails) => {
    event.preventDefault();
    createNewPropertyRequest(newPropertyDetails);
    history.push('/manage-properties');
  };

  return (
    <div className={styles.newPropertyPageContainer}>
      <NewPropertyNavbarComponent />
      <NewPropertyFormComponent
        handleNewPropertySubmission={handleNewPropertySubmission}
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
