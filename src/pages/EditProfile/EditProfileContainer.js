import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import ProfileSettingsNavbar from '../../common/ProfileSettingsNavbar/ProfileSettingsNavbar';
import EditProfileFormComponent from './components/EditProfileFormComponent/EditProfileFormComponent';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {
  updateCurrentUserProfileApiRequest, deleteCurrentUserProfileApiRequest,
  updateCurrentUserTypeApiRequest,
} from '../../api/profileSettingsApi';
import { getPropertyIds } from '../../utils/profileSettingsUtils';
import styles from './EditProfileContainer.module.scss';

const EditProfileContainer = ({
  userProfile, updateCurrentUserProfileApiRequest, deleteCurrentUserProfileApiRequest,
  updateCurrentUserTypeApiRequest,
}) => {
  const history = useHistory();

  const managedPropertyCount = userProfile.properties.length;
  const managedPropertyIds = getPropertyIds(userProfile.properties);

  const [profileUpdateType, setProfileUpdateType] = useState('profileUpdate');

  const handleBackButtonClick = () => history.push('/myaccount/settings');

  const handleAccountUpdate = updatedDetails => {
    switch (profileUpdateType) {
      case 'profileUpdate':
        updateCurrentUserProfileApiRequest(updatedDetails);
        history.push('/myaccount');
        break;

      case 'profileTypeChange':
        updateCurrentUserTypeApiRequest(updatedDetails, managedPropertyIds);
        history.push('/myaccount');
        break;

      default: break;
    }
  };

  const handleAccountDelete = event => {
    deleteCurrentUserProfileApiRequest(event);
    history.push('/');
    window.location.reload();
  };

  return !userProfile ? (
    <Loader
      type="ThreeDots"
      color="white"
      height={80}
      width={80}
      className={styles.loader}
    />
  ) : (
    <div className={styles.editProfileContainer}>
      <ProfileSettingsNavbar handleBackButtonClick={handleBackButtonClick} />
      <EditProfileFormComponent
        userProfile={userProfile}
        setProfileUpdateType={setProfileUpdateType}
        handleAccountUpdate={handleAccountUpdate}
        handleAccountDelete={handleAccountDelete}
        managedPropertyCount={managedPropertyCount}
      />
    </div>
  );
};

EditProfileContainer.propTypes = {
  userProfile: PropTypes.shape({
    about: PropTypes.string,
    areasLooking: PropTypes.arrayOf(PropTypes.string),
    avatar: PropTypes.string,
    couple: PropTypes.string,
    gender: PropTypes.string,
    maxBudget: PropTypes.number,
    minBudget: PropTypes.number,
    name: PropTypes.string.isRequired,
    occupation: PropTypes.string,
    pets: PropTypes.arrayOf(PropTypes.string),
    smoking: PropTypes.string,
    userType: PropTypes.string.isRequired,
    properties: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  updateCurrentUserProfileApiRequest: PropTypes.func.isRequired,
  deleteCurrentUserProfileApiRequest: PropTypes.func.isRequired,
  updateCurrentUserTypeApiRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userProfile: state.profileStore.userProfile,
});

const mapDispatchToProps = dispatch => ({
  updateCurrentUserProfileApiRequest: updatedDetails => {
    dispatch(updateCurrentUserProfileApiRequest(updatedDetails));
  },
  deleteCurrentUserProfileApiRequest: event => dispatch(deleteCurrentUserProfileApiRequest(event)),
  updateCurrentUserTypeApiRequest: (updatedDetails, propertyIds) => {
    dispatch(updateCurrentUserTypeApiRequest(updatedDetails, propertyIds));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileContainer);
