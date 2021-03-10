/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchUserProfileApiRequest from '../../api/userProfileApi';

const UserProfileContainer = ({
  fetchUserProfileApiRequest, profileInfo, authInfo,
}) => {
  const history = useHistory();

  useEffect(() => {
    fetchUserProfileApiRequest();
    if (profileInfo.error && authInfo.signedIn === false) {
      history.push('/signin');
    }
  }, [authInfo]);

  return (
    <div>
      Hello
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
