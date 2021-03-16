/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import {
  UserListContainer, SignUpContainer, SignInContainer, QuizContainer, PropertyListContainer,
  PropertyContainer, ProfileSettingsContainer, FlatmateProfileContainer, HomePageContainer,
  UserProfileContainer,
} from './pages/index';

const Routes = ({ signedIn }) => (
  <BrowserRouter>
    <Switch>
      <PublicRoute restricted={false} signedIn={signedIn} component={HomePageContainer} path="/" exact />
      <PublicRoute restricted={false} signedIn={signedIn} component={SignUpContainer} path="/signup" exact />
      <PublicRoute restricted={true} signedIn={signedIn} component={SignInContainer} path="/signin" exact />
      <PublicRoute restricted={false} signedIn={signedIn} component={UserListContainer} path="/looking" exact />
      <PrivateRoute signedIn={signedIn} component={UserProfileContainer} path="/myaccount" exact />
      <PublicRoute restricted={false} signedIn={signedIn} component={FlatmateProfileContainer} path="/flatmates/:id" />
      <PrivateRoute signedIn={signedIn} component={ProfileSettingsContainer} path="/myaccount/settings" exact />
      <PublicRoute restricted={false} signedIn={signedIn} component={PropertyListContainer} path="/advertising" exact />
      <PublicRoute restricted={false} signedIn={signedIn} component={PropertyContainer} path="/property/:id" />
      <PrivateRoute signedIn={signedIn} component={QuizContainer} path="/personality-assessment" />
    </Switch>
  </BrowserRouter>
);

Routes.propTypes = {
  signedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  signedIn: state.authStore.signedIn,
});

export default connect(mapStateToProps, null)(Routes);
