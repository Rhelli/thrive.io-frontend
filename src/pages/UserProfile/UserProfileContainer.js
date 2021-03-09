import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import fetchUserProfileApiRequest from '../../api/userProfileApi';
import PropTypes from 'prop-types';

const UserProfileContainer = ({ fetchUserProfileApiRequest }) => {
  

  
  return (
    <div>
      Hello
    </div>
  );
};

const mapStateToProps = state => ({
  authInfo: state.authStore,
  userInfo: state.authStore.user,
});

const mapDispatchToProps = dispatch => ({
  fetchUserProfileApiRequest: dispatch(fetchUserProfileApiRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);
