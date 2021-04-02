import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchUserProfileApiRequest from '../../api/userProfileApi';
import WelcomeComponent from './components/WelcomeComponent/WelcomeComponent';

const HomePageContainer = ({ profileStore, fetchUserProfileApiRequest }) => {
  useLayoutEffect(() => {
    fetchUserProfileApiRequest();
  }, []);

  console.log(profileStore);

  const { userProfile } = profileStore;

  return profileStore.loading ? (
    <h2>Loading. Please Wait...</h2>
  ) : profileStore.error ? (
    <h2>Something went wrong. Please try again later.</h2>
  ) : (
    <div>
      <WelcomeComponent userProfile={userProfile} />
    </div>
  );
};

HomePageContainer.propTypes = {
  profileStore: PropTypes.shape({
    userProfile: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    loading: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  fetchUserProfileApiRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profileStore: state.profileStore,
});

const mapDispatchToProps = dispatch => ({
  fetchUserProfileApiRequest: () => dispatch(fetchUserProfileApiRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
