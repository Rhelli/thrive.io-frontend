/* eslint-disable no-unused-vars */
import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import fetchUserProfileApiRequest from '../../api/userProfileApi';
import { fetchManagedPropertiesListRequest } from '../../api/propertiesApi';
import { fetchSingleProperty } from '../../state/property/propertyActions';
import fetchPropertyLocation from '../../api/locationApi';
import WelcomeComponent from './components/WelcomeComponent/WelcomeComponent';
import LandlordHomepageComponent from './components/LandlordHomepageStatsComponent/LandlordHomepageStatsComponent';
import HomepageFeedComponent from './components/HomepageFeedComponent/HomepageFeedComponent';
import UnsignedHomepageComponent from './components/UnsignedHomepageComponent/UnsignedHomepageComponent';
import LookingHomepageStatsComponent from './components/LookingHomepageStatsComponent/LookingHomepageStatsComponent';
import LookingHomepageSuggestedComponent from './components/LookingHomepageSuggestedComponent/LookingHomepageSuggestedComponent';
import styles from './HomepageContainer.module.scss';

const HomePageContainer = ({
  profileStore, fetchUserProfileApiRequest, fetchManagedPropertiesListRequest,
  propertyStore, authStore, fetchSingleProperty, fetchPropertyLocation,
}) => {
  const { userType } = authStore.user;
  const { advertiserType } = authStore.user;
  const { managedProperties } = propertyStore;
  const { user } = authStore;
  const history = useHistory();

  console.log(propertyStore);

  useLayoutEffect(() => {
    if (userType === 'Looking') {
      fetchUserProfileApiRequest();
    } else {
      fetchManagedPropertiesListRequest();
    }
  }, []);

  const handleActivityFeedNavigation = property => {
    const propertyAddress = `${property.address},${property.town},${property.postcode}`;
    fetchSingleProperty(property);
    fetchPropertyLocation(propertyAddress);
    history.push(`/property/${property.id}`);
  };

  if (userType === 'Looking') {
    const { userProfile } = profileStore;
    return profileStore.loading ? (
      <h2>Homepage Looking - Loading. Please Wait...</h2>
    ) : profileStore.error ? (
      <h2>An Error Occurred. Please try again later.</h2>
    ) : userProfile.userType === 'Looking' ? (
      <div className={styles.lookingHomepageContainer}>
        <WelcomeComponent userProfile={userProfile} />
        <LookingHomepageStatsComponent
          handlePropertyNavigation={handleActivityFeedNavigation}
          userProfile={userProfile}
        />
        <LookingHomepageSuggestedComponent
          userProfile={user}
          handlePropertyNavigation={handleActivityFeedNavigation}
        />
      </div>
    ) : (
      <h2>No user profile detected.</h2>
    );
  }
  if (userType === 'Advertising') {
    return propertyStore.loading ? (
      <h2>Homepage  Advertising - Loading. Please Wait...</h2>
    ) : propertyStore.error ? (
      <h2>An Error Occurred. Please try again later.</h2>
    ) : userType === 'Advertising' && advertiserType === 'Flatmate' ? (
      <div>
        <WelcomeComponent userProfile={user} />
      </div>
    ) : userType === 'Advertising' && advertiserType === 'Landlord' ? (
      <div className={styles.landlordHomepageContainer}>
        <WelcomeComponent userProfile={user} />
        <LandlordHomepageComponent managedProperties={managedProperties} />
        <h3 className={styles.recentActivities}>Recent Activity</h3>
        <HomepageFeedComponent
          properties={managedProperties}
          handleActivityFeedNavigation={handleActivityFeedNavigation}
        />
      </div>
    ) : (
      <h2>No user profile detected.</h2>
    );
  }

  return (
    <UnsignedHomepageComponent />
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
  fetchSingleProperty: PropTypes.func.isRequired,
  fetchPropertyLocation: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profileStore: state.profileStore,
  propertyStore: state.propertyStore,
  authStore: state.authStore,
});

const mapDispatchToProps = dispatch => ({
  fetchUserProfileApiRequest: () => dispatch(fetchUserProfileApiRequest()),
  fetchManagedPropertiesListRequest: () => dispatch(fetchManagedPropertiesListRequest()),
  fetchSingleProperty: property => dispatch(fetchSingleProperty(property)),
  fetchPropertyLocation: propertyAddress => dispatch(fetchPropertyLocation(propertyAddress)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
