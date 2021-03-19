import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileSettingsNavbar from '../../common/ProfileSettingsNavbar/ProfileSettingsNavbar';
import EditProfileFormComponent from './components/EditProfileFormComponent';
import {
  updateCurrentUserProfileApiRequest, deleteCurrentUserProfileApiRequest,
} from '../../api/userProfileApi';
import styles from './EditProfileContainer.module.scss';

const EditProfileContainer = ({
  userProfile, updateCurrentUserProfileApiRequest, deleteCurrentUserProfileApiRequest,
}) => {
  const history = useHistory();

  const handleBackButtonClick = () => history.push('/myaccount/settings');

  const handleAccountUpdate = (event, updatedDetails) => {
    event.preventDefault();
    updateCurrentUserProfileApiRequest(updatedDetails);
    history.push('/myaccount');
  };

  const handleAccountDelete = event => {
    deleteCurrentUserProfileApiRequest(event);
  };

  return (
    <div className={styles.editProfileContainer}>
      <ProfileSettingsNavbar handleBackButtonClick={handleBackButtonClick} />
      <EditProfileFormComponent
        userProfile={userProfile}
        handleAccountUpdate={handleAccountUpdate}
        handleAccountDelete={handleAccountDelete}
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
  }).isRequired,
  updateCurrentUserProfileApiRequest: PropTypes.func.isRequired,
  deleteCurrentUserProfileApiRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userProfile: state.profileStore.userProfile,
});

const mapDispatchToProps = dispatch => ({
  updateCurrentUserProfileApiRequest: updatedDetails => {
    dispatch(updateCurrentUserProfileApiRequest(updatedDetails));
  },
  deleteCurrentUserProfileApiRequest: event => dispatch(deleteCurrentUserProfileApiRequest(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileContainer);
