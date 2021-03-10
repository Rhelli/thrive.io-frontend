/* eslint-disable react/prop-types */
import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchUserProfileApiRequest from '../../api/userProfileApi';

const UserProfileContainer = ({
  fetchUserProfileApiRequest, profileInfo,
}) => {
  useLayoutEffect(() => {
    fetchUserProfileApiRequest();
  }, []);

  return (
    <div>
      {profileInfo.name}
    </div>
  );
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
