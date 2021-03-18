import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileSettingsNavbar from '../../common/ProfileSettingsNavbar/ProfileSettingsNavbar';
import EditProfileFormComponent from './components/EditProfileFormComponent';
import {
  updateCurrentUserProfileApiRequest, deleteCurrentUserProfileApiRequest,
} from '../../api/userProfileApi';
import { signOut } from '../../state/auth/authActions';
import styles from './EditProfileContainer.module.scss';

const EditProfileContainer = ({
  userProfile, updateCurrentUserProfileApiRequest, deleteCurrentUserProfileApiRequest, signOut,
}) => {
  const history = useHistory();

  const handleBackButtonClick = () => history.push('/myaccount/settings');

  const handleAccountUpdate = event => {
    updateCurrentUserProfileApiRequest(event);
  };

  const handleAccountDelete = () => {
    deleteCurrentUserProfileApiRequest();
    signOut();
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
  signOut: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userProfile: state.profileStore.userProfile,
});

const mapDispatchToProps = dispatch => ({
  updateCurrentUserProfileApiRequest: event => dispatch(updateCurrentUserProfileApiRequest(event)),
  deleteCurrentUserProfileApiRequest: () => dispatch(deleteCurrentUserProfileApiRequest),
  signOut: () => dispatch(signOut),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileContainer);
