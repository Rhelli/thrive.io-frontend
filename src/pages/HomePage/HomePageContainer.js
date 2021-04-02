import React from 'react';
import { connect } from 'react-redux';
import SearchBarComponent from './components/SearchBarComponent';

const HomePageContainer = () => (
  <div>
    <SearchBarComponent />
  </div>
);

const mapStateToProps = state => ({
  authInfo: state.authStore,
  userProfile: state.profileStore.userProfile,
});

export default connect(mapStateToProps, null)(HomePageContainer);
