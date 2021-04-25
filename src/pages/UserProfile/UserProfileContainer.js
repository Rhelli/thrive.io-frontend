import React, { useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import fetchUserProfileApiRequest from '../../api/userProfileApi';
import { signOut } from '../../state/auth/authActions';
import UserProfileHeaderComponent from './components/UserProfileHeaderComponent/UserProfileHeaderComponent';
import LoadingErrorMessageComponent from '../../common/LoadingErrorMessageComponent/LoadingErrorMessageComponent';
import UserProfileBasicInfoComponent from '../../common/UserProfileBasicInfoComponent/UserProfileBasicInfoComponent';
import UserProfileAboutComponent from '../../common/UserProfileAboutComponent/UserProfileAboutComponent';
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
      <Loader
        type="ThreeDots"
        color="white"
        height={80}
        width={80}
        className={styles.loader}
      />
    </div>
  ) : profileInfo.error ? (
    <LoadingErrorMessageComponent message={profileInfo.error} />
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
