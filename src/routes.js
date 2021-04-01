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
  ManagePropertiesContainer, NewPropertyContainer, EditPropertyContainer,
} from './pages/index';

const Routes = ({ authInfo }) => (
  <>
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted={false} authInfo={authInfo} component={HomePageContainer} path="/" exact />
        <PublicRoute restricted={false} authInfo={authInfo} component={SignUpContainer} path="/signup" exact />
        <PublicRoute restricted={true} authInfo={authInfo} component={SignInContainer} path="/signin" exact />
        <PublicRoute restricted={false} authInfo={authInfo} component={UserListContainer} path="/looking" exact />
        <PrivateRoute authInfo={authInfo} component={UserProfileContainer} path="/myaccount" exact />
        <PublicRoute restricted={false} authInfo={authInfo} component={FlatmateProfileContainer} path="/flatmates/:id" />
        <PrivateRoute authInfo={authInfo} component={ProfileSettingsContainer} path="/myaccount/settings" exact />
        <PrivateRoute authInfo={authInfo} component={EditProfileContainer} path="/myaccount/settings/edit-profile" exact />
        <PrivateRoute authInfo={authInfo} component={EditEmailContainer} path="/myaccount/settings/edit-email" exact />
        <PrivateRoute authInfo={authInfo} component={EditPasswordContainer} path="/myaccount/settings/edit-password" exact />
        <PublicRoute restricted={false} authInfo={authInfo} component={PropertyListContainer} path="/advertising" exact />
        <PublicRoute restricted={false} authInfo={authInfo} component={PropertyContainer} path="/property/:id" />
        <PrivateRoute authInfo={authInfo} component={NewPropertyContainer} path="/manage-properties/new" exact />
        <PrivateRoute authInfo={authInfo} component={EditPropertyContainer} path="/edit-property/:id" exact />
        <PrivateRoute authInfo={authInfo} component={ManagePropertiesContainer} path="/manage-properties" exact />
        <PrivateRoute authInfo={authInfo} component={QuizContainer} path="/personality-assessment" />
      </Switch>
    </BrowserRouter>
  </>
);

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
