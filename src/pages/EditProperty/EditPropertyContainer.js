/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  updatePropertyDetailsRequest, deletePropertyApiRequest,
} from '../../api/propertiesApi';
import EditPropertyNavbarComponent from './components/EditPropertyNavbarComponent/EditPropertyNavbarComponent';
import PropertyFormComponent from '../../common/PropertyFormComponent/PropertyFormComponent';
import EditPropertyDeleteComponent from './components/EditPropertyDeleteComponent/EditPropertyDeleteComponent';
import styles from './EditPropertyContainer.module.scss';

const EditPropertyContainer = ({
  userProfile, updatePropertyDetailsRequest, deletePropertyApiRequest, singleProperty,
}) => {
  const history = useHistory();

  const handleFormSubmission = (event, propertyDetails) => {
    event.preventDefault();
    const { id } = propertyDetails;
    updatePropertyDetailsRequest(propertyDetails);
    history.push(`/property/${id}`);
    window.location.reload();
  };

  const handlePropertyDelete = () => {
    deletePropertyApiRequest(singleProperty);
    history.push('/manage-properties');
    window.location.reload();
  };

  const handleNavbarBackButton = () => history.push(`/property/${singleProperty.id}`);

  return (
    <div className={styles.editPropertyPageContainer}>
      <EditPropertyNavbarComponent handleNavbarBackButton={handleNavbarBackButton} />
      <PropertyFormComponent
        handleFormSubmission={handleFormSubmission}
        id={singleProperty.id}
        singleProperty={singleProperty}
      />
      <EditPropertyDeleteComponent handlePropertyDelete={handlePropertyDelete} />
    </div>
  );
};

EditPropertyContainer.propTypes = {
  userProfile: PropTypes.shape({
    userType: PropTypes.string.isRequired,
  }).isRequired,
  singleProperty: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  updatePropertyDetailsRequest: PropTypes.func.isRequired,
  deletePropertyApiRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  singleProperty: state.propertyStore.singleProperty,
  userProfile: state.authStore.user,
});

const mapDispatchToProps = dispatch => ({
  updatePropertyDetailsRequest: propertyDetails => {
    dispatch(updatePropertyDetailsRequest(propertyDetails));
  },
  deletePropertyApiRequest: property => {
    dispatch(deletePropertyApiRequest(property));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPropertyContainer);
