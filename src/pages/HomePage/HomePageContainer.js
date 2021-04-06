/* eslint-disable no-unused-vars */
import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchUserProfileApiRequest from '../../api/userProfileApi';
import { fetchManagedPropertiesListRequest } from '../../api/propertiesApi';
import WelcomeComponent from './components/WelcomeComponent/WelcomeComponent';
import LandlordHomepageComponent from './components/LandlordHomepageStatsComponent/LandlordHomepageStatsComponent';
import HomepageFeedComponent from './components/HomepageFeedComponent/HomepageFeedComponent';

const HomePageContainer = ({
  profileStore, fetchUserProfileApiRequest, fetchManagedPropertiesListRequest,
  propertyStore, authStore,
}) => {
  const { userType } = authStore.user;
  const { advertiserType } = authStore.user;
  const { managedProperties } = propertyStore;
  const { user } = authStore;

  useLayoutEffect(() => {
    if (userType === 'Looking') {
      fetchUserProfileApiRequest();
    } else {
      fetchManagedPropertiesListRequest();
    }
  }, []);
  console.log(propertyStore);

  if (userType === 'Looking') {
    const { userProfile } = profileStore;
    return profileStore.loading ? (
      <h2>Homepage Looking - Loading. Please Wait...</h2>
    ) : profileStore.error ? (
      <h2>An Error Occurred. Please try again later.</h2>
    ) : userProfile.userType === 'Looking' ? (
      <div>
        <WelcomeComponent userProfile={userProfile} />
      </div>
    ) : userProfile.userType === 'Advertising' && userProfile.advertiserType === 'Flatmate' ? (
      <div>
        <WelcomeComponent userProfile={userProfile} />
      </div>
    ) : userProfile.userType === 'Advertising' && userProfile.advertiserType === 'Landlord' ? (
      <div>
        <WelcomeComponent userProfile={userProfile} />
        <LandlordHomepageComponent managedProperties={managedProperties} />
      </div>
    ) : (
      <h2>No user profile detected.</h2>
    );
  }
  return propertyStore.loading ? (
    <h2>Homepage  Advertising - Loading. Please Wait...</h2>
  ) : propertyStore.error ? (
    <h2>An Error Occurred. Please try again later.</h2>
  ) : userType === 'Advertising' && advertiserType === 'Flatmate' ? (
    <div>
      <WelcomeComponent userProfile={user} />
    </div>
  ) : userType === 'Advertising' && advertiserType === 'Landlord' ? (
    <div>
      <WelcomeComponent userProfile={user} />
      <LandlordHomepageComponent managedProperties={managedProperties} />
      <HomepageFeedComponent properties={managedProperties} />
    </div>
  ) : (
    <h2>No user profile detected.</h2>
  );
};

HomePageContainer.propTypes = {
  profileStore: PropTypes.shape({
    userProfile: PropTypes.shape({
      name: PropTypes.string.isRequired,
      userType: PropTypes.string.isRequired,
      advertiserType: PropTypes.string,
    }).isRequired,
    loading: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  propertyStore: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    managedProperties: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.string,
  }).isRequired,
  authStore: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      userType: PropTypes.string.isRequired,
      advertiserType: PropTypes.string,
    }).isRequired,
  }).isRequired,
  fetchUserProfileApiRequest: PropTypes.func.isRequired,
  fetchManagedPropertiesListRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profileStore: state.profileStore,
  propertyStore: state.propertyStore,
  authStore: state.authStore,
});

const mapDispatchToProps = dispatch => ({
  fetchUserProfileApiRequest: () => dispatch(fetchUserProfileApiRequest()),
  fetchManagedPropertiesListRequest: () => dispatch(fetchManagedPropertiesListRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
