import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import fetchUserProfileApiRequest from '../../api/userProfileApi';
import { fetchManagedPropertiesListRequest } from '../../api/propertiesApi';
import { fetchSingleProperty } from '../../state/property/propertyActions';
import fetchPropertyLocation from '../../api/locationApi';
import LoadingErrorMessageComponent from '../../common/LoadingErrorMessageComponent/LoadingErrorMessageComponent';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
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
  const { managedProperties } = propertyStore;
  const { user } = authStore;
  const history = useHistory();

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
      <Loader
        type="ThreeDots"
        color="white"
        height={80}
        width={80}
        className={styles.loader}
      />
    ) : profileStore.error ? (
      <LoadingErrorMessageComponent message={profileStore.error} />
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
      null
    );
  }
  if (userType === 'Advertising') {
    return propertyStore.loading ? (
      <Loader
        type="ThreeDots"
        color="white"
        height={80}
        width={80}
        className={styles.loader}
      />
    ) : propertyStore.error ? (
      <LoadingErrorMessageComponent message={profileStore.error} />
    ) : userType === 'Advertising' ? (
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
      name: PropTypes.string,
      userType: PropTypes.string,
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
      userType: PropTypes.string,
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
