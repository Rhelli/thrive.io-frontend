/* eslint-disable no-lone-blocks */
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
  UserProfileContainer, EditProfileContainer, EditEmailContainer, EditPasswordContainer,
  ManagePropertiesContainer,
} from './pages/index';

const Routes = ({ authInfo }) => {
  const { signedIn } = authInfo;
  console.log(authInfo);
  {
    return !authInfo || !signedIn ? (
      <>
        <h2>Loading. Just One Minute...</h2>
      </>
    ) : authInfo.error ? (
      <>
        <h2>Looks Like We&apos;ve Run Into An Error! Please Try Again Later!</h2>
      </>
    ) : (
      <>
        <BrowserRouter>
          <Switch>
            <PublicRoute restricted={false} signedIn={signedIn} component={HomePageContainer} path="/" exact />
            <PublicRoute restricted={false} signedIn={signedIn} component={SignUpContainer} path="/signup" exact />
            <PublicRoute restricted={true} signedIn={signedIn} component={SignInContainer} path="/signin" exact />
            <PublicRoute restricted={false} signedIn={signedIn} component={UserListContainer} path="/looking" exact />
            <PrivateRoute signedIn={signedIn} component={UserProfileContainer} path="/myaccount" exact />
            <PublicRoute restricted={false} signedIn={signedIn} component={FlatmateProfileContainer} path="/flatmates/:id" />
            <PrivateRoute signedIn={signedIn} component={ProfileSettingsContainer} path="/myaccount/settings" exact />
            <PrivateRoute signedIn={signedIn} component={EditProfileContainer} path="/myaccount/settings/edit-profile" exact />
            <PrivateRoute signedIn={signedIn} component={EditEmailContainer} path="/myaccount/settings/edit-email" exact />
            <PrivateRoute signedIn={signedIn} component={EditPasswordContainer} path="/myaccount/settings/edit-password" exact />
            <PublicRoute restricted={false} signedIn={signedIn} component={PropertyListContainer} path="/advertising" exact />
            <PublicRoute restricted={false} signedIn={signedIn} component={PropertyContainer} path="/property/:id" />
            <PrivateRoute signedIn={signedIn} component={ManagePropertiesContainer} path="/manage-properties" exact />
            <PrivateRoute signedIn={signedIn} component={QuizContainer} path="/personality-assessment" />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
};

Routes.propTypes = {
  authInfo: PropTypes.shape({
    signedIn: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  authInfo: state.authStore,
});

export default connect(mapStateToProps, null)(Routes);
