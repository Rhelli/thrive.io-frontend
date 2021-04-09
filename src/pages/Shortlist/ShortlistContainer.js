import React, { useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import fetchUserProfileApiRequest from '../../api/userProfileApi';
import { fetchSingleProperty } from '../../state/property/propertyActions';
import fetchPropertyLocation from '../../api/locationApi';
import { deleteShortlistedProperty } from '../../api/shortlistApi';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ShortlistNavbarComponent from './components/ShortlistNavbarComponent/ShortlistNavbarComponent';
import PropertyListItemComponent from '../../common/PropertyListItemComponent/PropertyListItemComponent';
import styles from './ShortlistContainer.module.scss';

const ShortlistContainer = ({
  profileStore, fetchUserProfileApiRequest, fetchSingleProperty, fetchPropertyLocation,
  deleteShortlistedProperty,
}) => {
  useLayoutEffect(() => {
    fetchUserProfileApiRequest();
  }, []);

  const history = useHistory();
  const { shortlistedProperties } = profileStore.userProfile;
  const removeShortlistedPropertyClick = property => {
    deleteShortlistedProperty(property);
  };

  const propertyClickThrough = property => {
    const propertyAddress = `${property.address},${property.town},${property.postcode}`;
    fetchSingleProperty(property);
    fetchPropertyLocation(propertyAddress);
    history.push(`/property/${property.id}`);
  };

  return profileStore.loading ? (
    <Loader
      type="ThreeDots"
      color="white"
      height={80}
      width={80}
      className={styles.loader}
    />
  ) : (
    <div className={styles.shortlistMainContainer}>
      <ShortlistNavbarComponent />
      <PropertyListItemComponent
        properties={shortlistedProperties}
        propertyClickThrough={propertyClickThrough}
        listItemType="Shortlist"
        handlePropertyOptionButton={removeShortlistedPropertyClick}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  profileStore: state.profileStore,
});

const mapDispatchToProps = dispatch => ({
  fetchUserProfileApiRequest: () => dispatch(fetchUserProfileApiRequest()),
  fetchSingleProperty: property => dispatch(fetchSingleProperty(property)),
  fetchPropertyLocation: propertyAddress => dispatch(fetchPropertyLocation(propertyAddress)),
  deleteShortlistedProperty: property => dispatch(deleteShortlistedProperty(property)),
});

ShortlistContainer.propTypes = {
  profileStore: PropTypes.shape({
    loading: PropTypes.bool,
    userProfile: PropTypes.shape({
      shortlistedProperties: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
  }).isRequired,
  fetchUserProfileApiRequest: PropTypes.func.isRequired,
  fetchSingleProperty: PropTypes.func.isRequired,
  fetchPropertyLocation: PropTypes.func.isRequired,
  deleteShortlistedProperty: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShortlistContainer);
