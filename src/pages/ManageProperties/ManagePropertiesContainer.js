import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import fetchUserProfileApiRequest from '../../api/userProfileApi';
import { fetchManagedPropertiesListRequest } from '../../api/propertiesApi';
import styles from './ManagePropertiesContainer.module.scss';
import ManagePropertiesNavbarComponent from './components/ManagePropertiesNavbarComponent/ManagePropertiesNavbarComponent';
import ManagePropertiesFlatmateInfoComponent from './components/ManagePropertiesFlatmateInfoComponent/ManagePropertiesFlatmateInfoComponent';
import ManagePropertiesLandlordInfoComponent from './components/ManagePropertiesLandlordInfoComponent/ManagePropertiesLandlordInfoComponent';
import ManagePropertiesFlatmateListComponent from './components/ManagePropertiesFlatmateListComponent/ManagePropertiesFlatmateListComponent';
import ManagePropertiesLandlordListComponent from './components/ManagePropertiesLandlordListComponent/ManagePropertiesLandlordListComponent';

const ManagePropertiesContainer = ({
  userProfile, managedProperties, fetchUserProfileApiRequest, fetchManagedPropertiesListRequest,
}) => {
  useLayoutEffect(() => {
    fetchUserProfileApiRequest();
    fetchManagedPropertiesListRequest();
  }, []);

  const history = useHistory();
  const handleNewPropertyClick = () => history.push('/manage-properties/new');
  const { advertiserType } = userProfile;

  console.log(managedProperties);

  return !userProfile ? (
    <h2>Loading. One Minute Please.</h2>
  ) : advertiserType === 'Landlord' ? (
    <div className={styles.managePropertiesContainer}>
      <ManagePropertiesNavbarComponent
        handleNewPropertyClick={handleNewPropertyClick}
      />
      <ManagePropertiesLandlordInfoComponent />
      <ManagePropertiesLandlordListComponent />
    </div>
  ) : advertiserType === 'Flatmate' ? (
    <div className={styles.managePropertiesContainer}>
      <ManagePropertiesNavbarComponent
        handleNewPropertyClick={handleNewPropertyClick}
      />
      <ManagePropertiesFlatmateInfoComponent />
      <ManagePropertiesFlatmateListComponent />
    </div>
  ) : (
    null
  );
};

ManagePropertiesContainer.propTypes = {
  userProfile: PropTypes.shape({
    advertiserType: PropTypes.string.isRequired,
  }).isRequired,
  managedProperties: PropTypes.func.isRequired,
  fetchUserProfileApiRequest: PropTypes.func.isRequired,
  fetchManagedPropertiesListRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userProfile: state.profileStore.userProfile,
  managedProperties: state.propertyStore.managedProperties,
});

const mapDispatchToProps = dispatch => ({
  fetchUserProfileApiRequest: () => dispatch(fetchUserProfileApiRequest()),
  fetchManagedPropertiesListRequest: () => dispatch(fetchManagedPropertiesListRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManagePropertiesContainer);
