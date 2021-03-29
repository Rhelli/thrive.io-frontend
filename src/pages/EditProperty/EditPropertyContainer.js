/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  updatePropertyDetailsRequest, deletePropertyApiRequest,
} from '../../api/propertiesApi';
import EditPropertyNavbarComponent from './components/EditPropertyNavbarComponent/EditPropertyNavbarComponent';

const EditPropertyContainer = ({
  userProfile, updatePropertyDetailsRequest, deletePropertyApiRequest,
}) => {
  const history = useHistory();

  const handleFormSubmission = (event, propertyDetails) => {
    event.preventDefault();
    const { id } = propertyDetails;
    updatePropertyDetailsRequest(propertyDetails);
    history.push(`/property/${id}`);
    window.location.reload();
  };

  const handlePropertyDelete = property => {
    deletePropertyApiRequest(property);
    history.push('/manage-properties');
    window.location.reload();
  };

  const handleNavbarBackButton = () => history.push('/manage-properties');

  return (
    <div>
      <EditPropertyNavbarComponent handleNavbarBackButton={handleNavbarBackButton} />
    </div>
  );
};

EditPropertyContainer.propTypes = {
  userProfile: PropTypes.shape({
    userType: PropTypes.string.isRequired,
  }).isRequired,
  updatePropertyDetailsRequest: PropTypes.func.isRequired,
  deletePropertyApiRequest: PropTypes.func.isRequired,
};

export default EditPropertyContainer;
