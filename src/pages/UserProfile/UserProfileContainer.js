import React, { useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchUserProfileApiRequest from '../../api/userProfileApi';
import { signOut } from '../../state/auth/authActions';
import UserProfileHeaderComponent from './components/UserProfileHeaderComponent/UserProfileHeaderComponent';
import UserProfileBasicInfoComponent from './components/UserProfileBasicInfoComponent/UserProfileBasicInfoComponent';
import UserProfileAboutComponent from './components/UserProfileAboutComponent/UserProfileAboutComponent';
import styles from './UserProfileContainer.module.scss';

const UserProfileContainer = ({
  fetchUserProfileApiRequest, profileInfo, signOut,
}) => {
  useLayoutEffect(() => {
    fetchUserProfileApiRequest();
  }, []);

  const history = useHistory();
  const { userProfile } = profileInfo;

  const handleSignOut = () => {
    signOut();
    history.push('/');
    window.location.reload();
  };

  const handleSettingsClick = () => {
    history.push('/myaccount/settings');
  };

  return profileInfo.loading ? (
    <div>
      <h3>Loading Profile, Please Wait.</h3>
    </div>
  ) : profileInfo.error ? (
    <div>
      <h3>{profileInfo.error}</h3>
    </div>
  ) : (
    <div className={styles.userProfileContainer}>
      <UserProfileHeaderComponent
        handleSettingsClick={handleSettingsClick}
        handleSignOut={handleSignOut}
      />
      <UserProfileBasicInfoComponent userProfile={userProfile} />
      <UserProfileAboutComponent userProfile={userProfile} />
    </div>
  );
};

UserProfileContainer.propTypes = {
  profileInfo: PropTypes.objectOf([PropTypes.string, PropTypes.number]).isRequired,
  fetchUserProfileApiRequest: PropTypes.func.isRequired,
};

UserProfileContainer.propTypes = {
  fetchUserProfileApiRequest: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profileInfo: state.profileStore,
  authInfo: state.authStore,
});

const mapDispatchToProps = dispatch => ({
  fetchUserProfileApiRequest: () => dispatch(fetchUserProfileApiRequest()),
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);
