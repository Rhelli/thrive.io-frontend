import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchUserProfileApiRequest from '../../api/userProfileApi';
import ShortlistNavbarComponent from './components/ShortlistNavbarComponent/ShortlistNavbarComponent';

const ShortlistContainer = ({ userProfile, fetchUserProfileApiRequest }) => {
  useLayoutEffect(() => {
    fetchUserProfileApiRequest();
  }, []);

  console.log(userProfile.shortlistedProperties);

  return userProfile.loading ? (
    <h2>Loading. Please wait...</h2>
  ) : (
    <div>
      <ShortlistNavbarComponent />
    </div>
  );
};

const mapStateToProps = state => ({
  userProfile: state.profileStore.userProfile,
});

const mapDispatchToProps = dispatch => ({
  fetchUserProfileApiRequest: () => dispatch(fetchUserProfileApiRequest()),
});

ShortlistContainer.propTypes = {
  userProfile: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    shortlistedProperties: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  fetchUserProfileApiRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShortlistContainer);
