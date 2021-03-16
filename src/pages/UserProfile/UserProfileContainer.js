import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchUserProfileApiRequest from '../../api/userProfileApi';
import UserProfileHeaderComponent from './components/UserProfileHeaderComponent/UserProfileHeaderComponent';
import UserProfileBasicInfoComponent from './components/UserProfileBasicInfoComponent/UserProfileBasicInfoComponent';
import UserProfileAboutComponent from './components/UserProfileAboutComponent/UserProfileAboutComponent';

const UserProfileContainer = ({
  fetchUserProfileApiRequest, profileInfo,
}) => {
  useLayoutEffect(() => {
    fetchUserProfileApiRequest();
  }, []);

  const { userProfile } = profileInfo;

  console.log(userProfile);

  return profileInfo.loading ? (
    <div>
      <h3>Loading Profile, Please Wait.</h3>
    </div>
  ) : profileInfo.error ? (
    <div>
      <h3>{profileInfo.error}</h3>
    </div>
  ) : (
    <div>
      <UserProfileHeaderComponent />
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
};

const mapStateToProps = state => ({
  profileInfo: state.profileStore,
  authInfo: state.authStore,
});

const mapDispatchToProps = dispatch => ({
  fetchUserProfileApiRequest: () => dispatch(fetchUserProfileApiRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);
